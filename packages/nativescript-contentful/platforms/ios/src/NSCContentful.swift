import Foundation
import Contentful


@objcMembers 
@objc(NSCContentful)
public class NSCContentful: NSObject {

	private let space: String
	private let token: String
	private let preview: Bool
	private let environment: String
	private let client: Client

	public init(space: String, token: String, preview: Bool, environment: String?) {
		self.space = space
		self.token = token
		self.preview = preview
		self.environment = environment ?? "master"

		// Configure host depending on preview flag.
		let host = preview ? Host.preview : Host.delivery
		self.client = Client(spaceId: space, environmentId: self.environment, accessToken: token, host: host)

		super.init()

		// Attach persistence integration for streaming sync events
		self.client.persistenceIntegration = NSCPersistenceIntegration(parent: self)
	}

	// MARK: - Helpers
	fileprivate func dictFromAny(_ value: Any) -> Any {
		// Ensure values are JSON/ObjC bridgeable. For unknown types, return their description.
		if value is NSNull { return NSNull() }
		if let v = value as? String { return v }
		if let v = value as? Bool { return v }
		if let v = value as? Int { return v }
		if let v = value as? Double { return v }
		if let v = value as? [String: Any] { return v }
		if let v = value as? [Any] { return v.map { dictFromAny($0) } }
		return String(describing: value)
	}

	fileprivate func entryToDict(_ entry: Entry) -> [String: Any] {
		var out: [String: Any] = [:]
		out["sys"] = ["id": entry.sys.id, "type": entry.sys.type]

		// Try to extract fields dictionary if available
		if let fields = entry.fields as? [String: Any] {
			var mapped: [String: Any] = [:]
			for (k, v) in fields { mapped[k] = dictFromAny(v) }
			out["fields"] = mapped
		} else {
			// Fallback: reflect and attempt to capture readable properties
			var mapped: [String: Any] = [:]
			let m = Mirror(reflecting: entry)
			for child in m.children {
				if let label = child.label {
					mapped[label] = dictFromAny(child.value)
				}
			}
			out["fields"] = mapped
		}
		return out
	}

	fileprivate func assetToDict(_ asset: Asset) -> [String: Any] {
		var out: [String: Any] = [:]
		out["sys"] = ["id": asset.sys.id, "type": asset.sys.type]
		if let fields = asset.fields as? [String: Any] {
			var mapped: [String: Any] = [:]
			for (k, v) in fields { mapped[k] = dictFromAny(v) }
			out["fields"] = mapped
		}
		return out
	}

	// MARK: - Entry
	public func fetchEntry(_ id: String, completion: @escaping (Any?, NSError?) -> Void) {
		client.fetch(Entry.self, id: id) { result in
			switch result {
			case .success(let entry):
				completion(self.entryToDict(entry), nil)
			case .error(let error):
				completion(nil, error as NSError)
			}
		}
	}

	// MARK: - Entries
	public func fetchEntries(_ query: [String: String]?, completion: @escaping (Any?, NSError?) -> Void) {
		// Build a Query if parameters provided, otherwise perform a root entries fetch
		let q: Query? = {
			if let params = query {
				let qq = Query()
				for (k, v) in params { qq.parameters[k] = v }
				return qq
			}
			return nil
		}()

		client.fetchArray(matching: q) { res in
			switch res {
			case .success(let arrayResponse):
				let mapped = arrayResponse.items.map { item -> Any in
					if let entry = item as? Entry { return self.entryToDict(entry) }
					if let asset = item as? Asset { return self.assetToDict(asset) }
					return self.objectToDict(item)
				}
				let out: [String: Any] = ["items": mapped, "total": mapped.count]
				completion(out, nil)
			case .error(let err):
				completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Entries by Content Type
	public func fetchEntriesByContentType(_ contentTypeId: String, completion: @escaping (Any?, NSError?) -> Void) {
		let query = Query.where(contentTypeId: contentTypeId)
		client.fetchArray(matching: query) { res in
			switch res {
			case .success(let arrayResponse):
				let mapped = arrayResponse.items.map { item -> Any in
					if let entry = item as? Entry { return self.entryToDict(entry) }
					return self.objectToDict(item)
				}
				completion(mapped, nil)
			case .error(let err):
				completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Asset
	public func fetchAsset(_ id: String, completion: @escaping (Any?, NSError?) -> Void) {
		client.fetch(Asset.self, id: id) { result in
			switch result {
			case .success(let asset):
				completion(self.assetToDict(asset), nil)
			case .error(let err):
					completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Clear cache
	public func clearCache() {
		// Best-effort: clear URLCache and URLSession tasks
		URLCache.shared.removeAllCachedResponses()
		// Can't safely access internal client urlSession; noop for SDK-specific cache
	}

	// MARK: - Populate content type cache
	public func populateContentTypeCache(_ completion: @escaping (Any?, NSError?) -> Void) {
		_ = client.fetchArray(of: ContentType.self) { result in
			switch result {
			case .success(let resp):
				completion(resp.items.count, nil)
			case .error(let err):
				completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Simple whereAdvanced fallback (client-side filter)
	public func whereAdvanced(_ key: String, op: String, value: Any, completion: @escaping (Any?, NSError?) -> Void) {
		// Map common operations to Contentful query parameter syntax and run server-side query when possible.
		let q = Query()

		// Normalize operator to a short form used in Contentful HTTP API (e.g., ne, in, exists)
		let opNorm = op.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
		var opKey: String? = nil
		switch opNorm {
		case "=", "==", "isequalto", "equals", "eq", "is", "isEqualTo".lowercased():
			opKey = nil
		case "!", "!=", "notequalto", "ne", "not", "notEqualTo".lowercased():
			opKey = "ne"
		case "in", "hasoneof", "has_one_of", "oneof":
			opKey = "in"
		case "exists", "has", "exists?", "exist":
			opKey = "exists"
		case "match", "matches":
			opKey = "match"
		default:
			opKey = nil
		}

		// Build parameter key
		var paramKey = "fields.\(key)"
		if let ok = opKey { paramKey = "fields.\(key)[\(ok)]" }

		// Convert value to string appropriate for HTTP query param
		var valueStr: String
		if let arr = value as? [Any] {
			valueStr = arr.map { String(describing: $0) }.joined(separator: ",")
		} else if let b = value as? Bool {
			valueStr = b ? "true" : "false"
		} else {
			valueStr = String(describing: value)
		}

		q.parameters[paramKey] = valueStr

		client.fetchArray(matching: q) { res in
			switch res {
			case .success(let arrayResponse):
				let mapped = arrayResponse.items.map { item -> Any in
					if let entry = item as? Entry { return self.entryToDict(entry) }
					if let asset = item as? Asset { return self.assetToDict(asset) }
					return self.objectToDict(item)
				}
				let out: [String: Any] = ["items": mapped, "total": mapped.count]
				completion(out, nil)
			case .error(let err):
				completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Image URL helper
	public func imageUrlForAsset(_ assetId: String, options: [String: Any]?, completion: @escaping (Any?, NSError?) -> Void) {
		client.fetch(Asset.self, id: assetId) { result in
			switch result {
			case .success(let asset):
				var urlStr: String? = nil
				if let fields = asset.fields as? [String: Any], let file = fields["file"] as? [String: Any], let u = file["url"] as? String {
					urlStr = u
				} else if let u = asset.urlString {
					urlStr = u
				}
				guard var url = urlStr else { completion(nil, NSError(domain: "NSCContentful", code: -3, userInfo: [NSLocalizedDescriptionKey: "Asset URL not available"])); return }
				if url.hasPrefix("//") { url = "https:" + url }
				var params: [String] = []
				if let opts = options {
					if let w = opts["w"] as? Int { params.append("w=\(w)") }
					if let h = opts["h"] as? Int { params.append("h=\(h)") }
					if let fm = opts["fm"] as? String { params.append("fm=\(fm.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? fm)") }
					if let q = opts["q"] as? Int { params.append("q=\(q)") }
				}
				if params.count > 0 { url += (url.contains("?") ? "&" : "?") + params.joined(separator: "&") }
				completion(url, nil)
			case .error(let err):
					completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Sync
	public func sync(_ syncTokenOrPath: String?, completion: @escaping (Any?, NSError?) -> Void) {
		// Use SDK's sync API where possible. If caller passed a full sync URL (contains '/'),
		// fetch that URL via SDK's fetch(url:then:) and decode a SyncSpace, otherwise perform
		// a sync using the provided sync token.

		if let tokenStr = syncTokenOrPath, tokenStr.count > 0, tokenStr.contains("/") {
			// Caller provided a full sync path/URL — attempt to fetch and decode via SDK
			let host = preview ? "preview.contentful.com" : "cdn.contentful.com"
			let urlString = tokenStr.hasPrefix("http") ? tokenStr : "https://\(host)\(tokenStr)"
			guard let url = URL(string: urlString) else { completion(nil, NSError(domain: "NSCContentful", code: -2, userInfo: [NSLocalizedDescriptionKey: "Invalid URL"])); return }

			_ = client.fetch(url: url) { (result: Result<SyncSpace>) in
				switch result {
				case .success(let syncSpace):
					completion(self.syncSpaceToDict(syncSpace), nil)
				case .error(let err):
					completion(nil, err as NSError)
				}
			}
			return
		}

		// Use SDK sync(for:) with an initialized SyncSpace (empty for initial sync, or with token for delta)
		var syncSpace = SyncSpace()
		if let tokenStr = syncTokenOrPath, tokenStr.count > 0 {
			syncSpace = SyncSpace(syncToken: tokenStr)
		}

		_ = client.sync(for: syncSpace) { result in
			switch result {
			case .success(let s):
				completion(self.syncSpaceToDict(s), nil)
			case .error(let err):
				completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Space
	public func fetchSpace(completion: @escaping (Any?, NSError?) -> Void) {
		// Fetch space metadata via generic fetch
		_ = client.fetch(Space.self, id: self.space) { result in
			switch result {
			case .success(let spaceObj):
				completion(self.objectToDict(spaceObj), nil)
			case .error(let err):
				completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Mapping Helpers for SyncSpace / Space
	fileprivate func syncSpaceToDict(_ s: SyncSpace) -> [String: Any] {
	 		var out: [String: Any] = [:]
	 		out["syncToken"] = s.syncToken
	 		out["deletedEntryIds"] = s.deletedEntryIds
	 		out["deletedAssetIds"] = s.deletedAssetIds
	 		out["entries"] = s.entries.map { entryToDict($0) }
	 		out["assets"] = s.assets.map { assetToDict($0) }
	 		return out
	 	}

	fileprivate func objectToDict(_ obj: Any) -> [String: Any] {
		var result: [String: Any] = [:]
		let mirror = Mirror(reflecting: obj)
		for child in mirror.children {
			guard let label = child.label else { continue }
			result[label] = dictFromAny(child.value)
		}
		return result
	}

	// MARK: - Persistence Integration
	// Notification names posted by PersistenceIntegration events
	public static let NotificationDidCreateEntry = Notification.Name("NSCContentful.DidCreateEntry")
	public static let NotificationDidDeleteEntry = Notification.Name("NSCContentful.DidDeleteEntry")
	public static let NotificationDidCreateAsset = Notification.Name("NSCContentful.DidCreateAsset")
	public static let NotificationDidDeleteAsset = Notification.Name("NSCContentful.DidDeleteAsset")
	public static let NotificationDidUpdateEntries = Notification.Name("NSCContentful.DidUpdateEntries")
	public static let NotificationDidUpdateSync = Notification.Name("NSCContentful.DidUpdateSync")

	// Simple PersistenceIntegration implementation that forwards SDK persistence events to NotificationCenter
	fileprivate class NSCPersistenceIntegration: PersistenceIntegration {
		weak var parent: NSCContentful?

		init(parent: NSCContentful) {
			self.parent = parent
		}

		// MARK: - Integration protocol properties
		// Contentful.swift expects integrations to advertise a name and version
		var name: String { return "NSCContentful.PersistenceIntegration" }

		var version: String { return Bundle(for: NSCContentful.self).infoDictionary?["CFBundleShortVersionString"] as? String ?? "0.0.0" }

		func update(localeCodes: [String]) {
			NotificationCenter.default.post(name: NSCContentful.NotificationDidUpdateSync, object: nil, userInfo: ["locales": localeCodes])
		}

		func update(with syncSpace: SyncSpace) {
			guard let p = parent else { return }
			let dict = p.syncSpaceToDict(syncSpace)
			// Post full sync payload
			NotificationCenter.default.post(name: NSCContentful.NotificationDidUpdateSync, object: nil, userInfo: ["sync": dict])

			// Also post an entries-update notification with a shape similar to Android's array response ({ items, total })
			if let entries = dict["entries"] as? [Any] {
				NotificationCenter.default.post(name: NSCContentful.NotificationDidUpdateEntries, object: nil, userInfo: ["items": entries, "total": entries.count])
			} else {
				NotificationCenter.default.post(name: NSCContentful.NotificationDidUpdateEntries, object: nil, userInfo: ["items": [], "total": 0])
			}
		}

		func create(asset: Asset) {
			guard let p = parent else { return }
			let dict = p.assetToDict(asset)
			NotificationCenter.default.post(name: NSCContentful.NotificationDidCreateAsset, object: nil, userInfo: ["asset": dict])
		}

		func delete(assetWithId id: String) {
			NotificationCenter.default.post(name: NSCContentful.NotificationDidDeleteAsset, object: nil, userInfo: ["assetId": id])
		}

		func create(entry: Entry) {
			guard let p = parent else { return }
			let dict = p.entryToDict(entry)
			NotificationCenter.default.post(name: NSCContentful.NotificationDidCreateEntry, object: nil, userInfo: ["entry": dict])
		}

		func delete(entryWithId id: String) {
			NotificationCenter.default.post(name: NSCContentful.NotificationDidDeleteEntry, object: nil, userInfo: ["entryId": id])
		}

		func update(syncToken: String) {
			NotificationCenter.default.post(name: NSCContentful.NotificationDidUpdateSync, object: nil, userInfo: ["syncToken": syncToken])
		}

		func resolveRelationships() {
			// No-op for bridge
		}

		func save() {
			// No-op; persistence handled externally
		}
	}

	// MARK: - Locales
	public func fetchLocales(completion: @escaping (Any?, NSError?) -> Void) {
		_ = client.fetchLocales { result in
			switch result {
			case .success(let response):
				let locales = response.items.map { locale -> [String: Any] in
					var o: [String: Any] = [:]
					o["code"] = locale.code
					o["name"] = locale.name
					o["default"] = locale.isDefault
					return o
				}
				completion(locales, nil)
			case .error(let err):
				completion(nil, err as NSError)
			}
		}
	}

	// MARK: - Asset Data (base64)
	public func fetchAssetData(_ id: String, completion: @escaping (Any?, NSError?) -> Void) {
		client.fetch(Asset.self, id: id) { result in
			switch result {
			case .success(let asset):
				// Use SDK fetchData(for:then:) to get binary data
				_ = self.client.fetchData(for: asset) { dataResult in
					switch dataResult {
					case .success(let data):
						let b64 = data.base64EncodedString()
						completion(b64, nil)
					case .error(let e):
						completion(nil, e as NSError)
					}
				}
			case .error(let err):
					completion(nil, err as NSError)
			}
		}
	}
}
