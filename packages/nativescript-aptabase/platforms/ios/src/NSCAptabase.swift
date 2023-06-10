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
        AptabaseClient.shared.initialize(appKey: appKey, with: initOptions)
    }

    @objc static public func track(name: String, properties: [String : Any]?) {
        if (properties != nil) {
            AptabaseClient.shared.trackEvent(name, with: properties!)
        } else {
            AptabaseClient.shared.trackEvent(name)
        }
    }
}
