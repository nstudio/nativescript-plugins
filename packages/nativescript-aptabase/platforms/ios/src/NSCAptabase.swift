import Foundation
import Aptabase

@objc public class InitOptions: NSObject {
    @objc let host: String?

    @objc public init(host: String? = nil) {
        self.host = host
    }
}

@objc open class NSCAptabase: NSObject {
    @objc static public func initialize(appKey: String, opts: InitOptions? = nil) {
        Aptabase.shared.initialize(appKey: appKey, opts: opts)
    }

    @objc static public func track(name: String, properties: [String : Any]?) {
        if (properties != nil) {
            Aptabase.shared.trackEvent(name, with: properties!)
        } else {
            Aptabase.shared.trackEvent(name)
        }
    }
}
