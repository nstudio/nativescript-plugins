import Foundation
import WalletConnect



@objc(NSCWalletConnectClientMetaConfig)
@objcMembers
public class NSCWalletConnectClientMetaConfig: NSObject {
    var desc: String?
    var url: String?
    var icons: [String]?
    var name: String?
}

@objc(NSCWalletConnectConfig)
@objcMembers
public class NSCWalletConnectConfig: NSObject {
    var bridge: String?
    var key: String?
    var uri: String?
    var uuid: String = (UIDevice.current.identifierForVendor ?? UUID()).uuidString
    var clientMeta: NSCWalletConnectClientMetaConfig?
}


@objc(NSCWCSessionRequestParam)
@objcMembers
public class NSCWCSessionRequestParam: NSObject {
    private let param: WCSessionRequestParam
    public let peerMeta: NSCClientMeta
    init(param: WCSessionRequestParam) {
        self.param = param
        self.peerMeta = NSCClientMeta(meta: param.peerMeta)
    }
    
    
    public var peerId: String {
        get {
            return param.peerId
        }
    }
    
    public var chainId: Int {
        get {
            return param.chainId ?? 0
        }
    }
}

@objc(NSCWCEthereumTransaction)
@objcMembers
public class NSCWCEthereumTransaction: NSObject {
    private let transaction: WCEthereumTransaction
    
    public var from: String {
        get {
            return transaction.from
        }
    }
    public var to: String? {
        get {
            return transaction.to
        }
    }
    public var nonce: String? {
        get {
            return transaction.nonce
        }
    }
    public var gasPrice: String? {
        get {
            return transaction.gasPrice
        }
    }
    public var gas: String? {
        get {
            return transaction.gas
        }
    }
    public var gasLimit: String? // legacy gas limit
    {
        get {
            return transaction.gasLimit
        }
    }
    public var value: String? {
        get {
            return transaction.value
        }
    }
    public var data: String {
        get {
            return transaction.data
        }
    }
    
    init(transaction: WCEthereumTransaction){
        self.transaction = transaction
    }
}

@objc(NSCWCOKExChainTransaction)
@objcMembers
public class NSCWCOKExChainTransaction: NSObject {
    private let transaction: WCOKExChainTransaction
    public var from: String? {
        get {
            return transaction.from
        }
    }
    public var to: String? {
        get {
            return transaction.to
        }
    }
    public var value: String? {
        get {
            return transaction.value
        }
    }
    public var gasLimit: String? {
        get {
            return transaction.gasLimit
        }
    }
    public var gasPrice: String? {
        get {
            return transaction.gasLimit
        }
    }
    public var accountNumber: String? {
        get {
            return transaction.accountNumber
        }
    }
    public var sequenceNumber: String? {
        get {
            return transaction.sequenceNumber
        }
    }
    public var symbol: String? {
        get {
            return transaction.symbol
        }
    }
    public var memo: String? {
        get {
            return transaction.memo
        }
    }
    public var decimalNum: String? {
        get {
            return transaction.decimalNum
        }
    }
    public var contractAddress: String? {
        get {
            return transaction.contractAddress
        }
    }
    public var data: String? {
        get {
            return transaction.data
        }
    }
    
    init(transaction: WCOKExChainTransaction){
        self.transaction = transaction
    }
}
