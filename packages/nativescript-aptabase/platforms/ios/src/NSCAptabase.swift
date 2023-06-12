import Foundation
import Aptabase

@objc open class NSCInitOptions: NSObject {
    @objc public let host: String?

    @objc public init(host: String? = nil) {
        self.host = host
    }
}

@objc open class NSCAptabase: NSObject {
    @objc static public func initialize(appKey: String, opts: NSCInitOptions? = nil) {
        var initOptions: InitOptions?
        if let opts = opts {
            initOptions = InitOptions(host: opts.host)
        }
        Aptabase.shared.initialize(appKey: appKey, with: initOptions)
    }

    @objc static public func track(name: String, properties: [String : Any]?) {
        if (properties != nil) {
            var props: [String : any Value] = [:]
            properties?.keys.forEach { key in
                props[key] = properties?[key] as? any Value
            }
            Aptabase.shared.trackEvent(name, with: props)
        } else {
            Aptabase.shared.trackEvent(name)
        }
    }
}
