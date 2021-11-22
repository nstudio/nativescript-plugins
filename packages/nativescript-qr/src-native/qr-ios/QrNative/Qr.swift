//
//  Qr.swift
//  QrNative
//
//  Created by Osei Fortune on 21/11/2021.
//

import Foundation
import UIKit

@objcMembers
@objc(TNSQr)
public class TNSQr: NSObject {
    private static let colorSpace = CGColorSpaceCreateDeviceRGB()
    public static func generateQr(_ value: String,_ width: Int,_ height: Int,_ color: String, _ backgroundColor: String) -> UIImage? {
        let buf = calloc(width * height , 4)
        native_generate_qr_with_string(value, buf?.assumingMemoryBound(to: UInt8.self), UInt(width * height) * 4, UInt32(width), UInt32(height), color, backgroundColor)
        
        UIGraphicsBeginImageContext(CGSize(width: width, height: height))
        
        
        let ctx = CGContext(data: buf, width: width, height: height, bitsPerComponent: 8, bytesPerRow: width * 4, space: colorSpace, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue | CGBitmapInfo.byteOrder32Big.rawValue)
        
        guard let cgImage = ctx?.makeImage() else {return nil}
        let image = UIImage(cgImage: cgImage)
        UIGraphicsEndImageContext()
        return image
    }
}

