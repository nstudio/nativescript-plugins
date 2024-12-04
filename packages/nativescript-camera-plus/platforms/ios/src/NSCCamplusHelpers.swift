//
//  NSCCamplusHelpers.swift
//
//  Created by Osei Fortune on 16/08/24.
//

import Foundation
import UIKit
@objcMembers
@objc(NSCCamplusHelpers)
public class NSCCamplusHelpers: NSObject {
    public static func getDeviceIdentifier() -> String {
        var systemInfo = utsname()
        uname(&systemInfo)
        
        let machineMirror = Mirror(reflecting: systemInfo.machine)
        let identifier = machineMirror.children.reduce("") { identifier, element in
            guard let value = element.value as? Int8, value != 0 else { return identifier }
            return identifier + String(UnicodeScalar(UInt8(value)))
        }
        
        return identifier
    }
}

