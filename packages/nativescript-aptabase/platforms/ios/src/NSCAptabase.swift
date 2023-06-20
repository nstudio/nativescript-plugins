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

    @objc static public func track(name: String, properties: [String: Any]?) {
//        print("properties: \(String(describing: properties))")
        if (properties != nil) {
            var props: [String : Value] = [:]
            properties?.keys.forEach { key in
//                print("key: \(key)")
                if let str = properties?[key] as? String {
                    props[key] = str
                } else if let numInt = properties?[key] as? Int {
                    props[key] = numInt
                } else if let numDouble = properties?[key] as? Double {
                    props[key] = numDouble
                } else if let numFloat = properties?[key] as? Float {
                    props[key] = numFloat
                } else if let valBool = properties?[key] as? Bool {
                    props[key] = valBool
                }
            }
//            print("props: \(String(describing: props))")
            Aptabase.shared.trackEvent(name, with: props)
        } else {
            Aptabase.shared.trackEvent(name)
        }
    }
}
