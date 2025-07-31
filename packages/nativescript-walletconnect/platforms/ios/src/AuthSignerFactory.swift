//
//  AuthSignerFactory.swift
//
//  Created by Osei Fortune on 09/01/2023.
//  Copyright © 2023 NativeScript. All rights reserved.
//

import Foundation
import CryptoSwift
import Web3
import WalletConnectSwiftV2

public struct AuthSignerFactory: SignerFactory {

    public func createEthereumSigner() -> EthereumSigner {
        return Web3Signer()
    }
}

public struct Web3Signer: EthereumSigner {

    public func sign(message: Data, with key: Data) throws -> EthereumSignature {
        let privateKey = try EthereumPrivateKey(privateKey: [UInt8](key))
        let signature = try privateKey.sign(message: message.bytes)
        return EthereumSignature(v: UInt8(signature.v), r: signature.r, s: signature.s)
    }

    public func recoverPubKey(signature: EthereumSignature, message: Data) throws -> Data {
        let publicKey = try EthereumPublicKey(
            message: message.bytes,
            v: EthereumQuantity(quantity: BigUInt(signature.v)),
            r: EthereumQuantity(signature.r),
            s: EthereumQuantity(signature.s)
        )
        return Data(publicKey.rawPublicKey)
    }

    public func keccak256(_ data: Data) -> Data {
        let digest = SHA3(variant: .keccak256)
        let hash = digest.calculate(for: [UInt8](data))
        return Data(hash)
    }
    
    public func keccak256(_ data: [UInt8]) -> Data {
        let digest = SHA3(variant: .keccak256)
        let hash = digest.calculate(for: data)
        return Data(hash)
    }
}
