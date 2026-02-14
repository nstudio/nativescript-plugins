//
//  NSCWalletConnectV2Helpers.swift
//
//  Created by Osei Fortune on 20/01/2023.
//  Copyright © 2023 NativeScript. All rights reserved.
//

import Foundation
import WalletCore

@objcMembers
@objc(NSCWalletConnectV2Helpers)
public class NSCWalletConnectV2Helpers: NSObject {
    public static func stringToData(hex: String) -> Data {
        return Data(hex: hex)
    }
}


public extension NSCWalletConnectV2ETHSigner {
    
    // keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))
    
    static func signTypedData(_ privateKey: NSCWalletConnectV2EthereumPrivateKey,_ params: NSCWalletConnectV2Codable) -> NSCWalletConnectV2Codable {
        let params = try! params.get([String].self)
        
        let messageToSign = params[1]
      
        let encodedMessage = EthereumAbi.encodeTyped(messageJson: messageToSign)
        
        let dataToHash = dataToPrefix(encodedMessage)
        
        let (v, r, s) = try! privateKey.key.sign(message: .init(hex: dataToHash.toHexString()))
  
        let result = "0x" + r.toHexString() + s.toHexString() + String(v + 27, radix: 16)
        
        return NSCWalletConnectV2Codable(string: result)
        
    }
}
