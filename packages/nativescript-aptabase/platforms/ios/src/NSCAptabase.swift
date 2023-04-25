import Foundation
import Aptabase

@objc open class NSCAptabase: NSObject {
    @objc static public func initialize(appKey: String) {
        Aptabase.shared.initialize(appKey: appKey)
    }

    @objc static public func track(name: String, properties: [String : Any]?) {
        if (properties != nil) {
            Aptabase.shared.trackEvent(name, with: properties!)
        } else {
            Aptabase.shared.trackEvent(name)
        }
    }
}
