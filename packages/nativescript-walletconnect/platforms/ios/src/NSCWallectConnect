import Foundation
import WalletConnect
import WalletCore
@objc(NSCWalletConnectDelegate)
public protocol NSCWalletConnectDelegate {
    func onConnect()
    func onCustomRequest(id: Int64, request: [String: Any])
    func onSessionRequest(id: Int64, peerParam: NSCWCSessionRequestParam)
    func onError(error: NSError?)
    func onDisconnect(reason: String, code: UInt16)
    func onEthSign(id: Int64, data: Data, raw: [String])
    func onEthPersonalSign(id: Int64, data: Data, raw: [String])
    func onEthSignTypeData(id: Int64, data: Data, raw: [String])
    func onEthSignTransaction(id: Int64, transaction: NSCWCEthereumTransaction)
    func onEthSendTransaction(id: Int64, transaction: NSCWCEthereumTransaction)
    func onOktSignTransaction(id: Int64, transaction: NSCWCOKExChainTransaction)
    func onOktSendTransaction(id: Int64, transaction: NSCWCOKExChainTransaction)
    func onBnbSign(id: Int64, order: String)
}

private let ERROR_SESSION_CONNECTED = "Session currently connected"
private let ERROR_SESSION_DISCONNECTED = "Session currently disconnected"
private let ERROR_SESSION_REJECTED = "Session Rejected"


@objc(NSCClientMeta)
@objcMembers
public class NSCClientMeta: NSObject {
    
    private let meta: WCPeerMeta
    
    public init(meta: WCPeerMeta) {
        self.meta = meta
        super.init()
    }
    
    
    public var name: String {
        get {
            return meta.name
        }
    }
    
    public var desc: String? {
        get {
            return meta.description
        }
    }
    
    public var icons: [String] {
        get {
            return meta.icons
        }
    }
    
    public var url: String {
        get {
            return meta.url
        }
    }
    
    public var scheme: String?
}


@objc(NSCWallectConnect)
@objcMembers
public class NSCWallectConnect: NSObject {
    
    public static func toHex(_ value: String) -> String {
        return value.utf8.map{ String(format:"%02x", $0) }.joined()
    }
    
    public static func toHexString(_ value: Data) -> String {
        return value.hexString
    }
    
    
    public static func hexToData(_ value: String) -> NSData {
        return Data(hex: value) as NSData
    }
    
    public static func createPrivateKey(string: NSString)-> OpaquePointer? {
        return createPrivateKey(data: Data(hex: string as String) as NSData)
    }
    
    public static func createPrivateKey(data: NSData)-> OpaquePointer? {
        return TWPrivateKeyCreateWithData(TWDataCreateWithBytes(data.bytes, data.count))
    }
    
    public static func deriveEthAddress(_ key: OpaquePointer) -> String {
        let string = TWCoinTypeDeriveAddress(TWCoinTypeEthereum, key)
        return String(utf8String: TWStringUTF8Bytes(string))!
    }
    
    
    public static func privateKeySign(key: OpaquePointer, string: NSString, curve: TWCurve) -> Data? {
        let data =  Data(hex: string as String)
        return privateKeySign(key: key, data: data, curve: curve)
    }
    
    public static func privateKeySign(key: OpaquePointer, data: Data, curve: TWCurve) -> Data?{
        let digestData = TWDataCreateWithNSData(data as Data)
        defer {
            TWDataDelete(digestData)
        }
        
        guard let result = TWPrivateKeySign(key, digestData, curve) else {
            return nil
        }
        return TWDataNSData(result)
    }
    
    public static func privateKeySignToHex(key: OpaquePointer, string: NSString, curve: TWCurve) -> String? {
        return privateKeySign(key: key, string: string , curve: curve)?.hexString
    }
    
    public static func privateKeySignToHex(key: OpaquePointer, data: Data, curve: TWCurve) -> String?{
        return privateKeySign(key: key, data: data, curve: curve)?.hexString
    }
    
    public static func deriveBnbAddress(_ key: OpaquePointer) -> String {
        let string = TWCoinTypeDeriveAddress(TWCoinTypeBinance, key)
        return String(utf8String: TWStringUTF8Bytes(string))!
    }
    
    public static func deriveBitCoinAddress(_ key: OpaquePointer) -> String {
        let string = TWCoinTypeDeriveAddress(TWCoinTypeBitcoin, key)
        return String(utf8String: TWStringUTF8Bytes(string))!
    }
    
    public static func createEthSigningSignature(_ string: String) -> Data {
        return createEthSigningSignature(data: string.data(using: .utf8)!)
    }
    
    public static func createEthSigningSignature(data: Data) -> Data {
        let prefix = "\u{19}Ethereum Signed Message:\n\(data)".data(using: .utf8)!
        return prefix + data
    }
    
    
    public static func keccak256(_ data: Data) -> Data {
        return Hash.keccak256(data: data)
    }
    
    public static func sha256(_ data: Data) -> Data {
        return Hash.sha256(data: data)
    }
    
    let decoder = JSONDecoder()
    private var _account: [String] = []
    private(set) public var accounts: [String]  = []
    private(set) var url: String? = nil
    public var delegate: NSCWalletConnectDelegate?
    private(set) public var connected: Bool = false
    
    private var session: WCSession?
    private var meta: WCPeerMeta?
    private var interactor: WCInteractor?
    private var uuid = UUID()
    public init(configuration: NSCWalletConnectConfig) {
        super.init()
        
        
        self.session = WCSession.from(string: configuration.uri!)
        
        self.meta = WCPeerMeta(name: configuration.clientMeta!.name!, url: configuration.clientMeta!.url!)
        
        if(!configuration.uuid.isEmpty){
            let uuid = UUID(uuidString: configuration.uuid)
            if(uuid != nil){
                self.uuid = uuid!
            }
        }
        
        self.url = configuration.uri
    }
    
    private static func toError(message: String) -> NSError {
        let exception = NSException(name: .genericException, reason: message, userInfo: nil)
        var info: [String: Any] = [:]
        info["ExceptionName"] = exception.name
        info["ExceptionReason"] = exception.reason
        info["ExceptionCallStackReturnAddresses"] = exception.callStackReturnAddresses
        info["ExceptionCallStackSymbols"] = exception.callStackSymbols
        info["ExceptionUserInfo"] = exception.userInfo
        return NSError(domain: "NativeScript", code: 1001, userInfo: info)
    }
    
    
    public var uri: String {
        get {
            return session?.encodedString ?? ""
        }
    }
    
    public var bridge: String {
        get {
            return session?.bridge.absoluteString ?? ""
        }
    }
    
    
    public var handshakeTopic: String {
        get {
            return session?.topic ?? ""
        }
    }
    
    
    private(set) public var chainId: Int  = 0
    
    
    public var key: String {
        if(session?.key != nil){
            return session!.key.encodedString
        }
        return ""
    }
    
    public var clientMeta: NSCClientMeta? {
        if(interactor?.clientMeta != nil){
            return NSCClientMeta(meta: interactor!.clientMeta)
        }
        return nil
    }
    
    
    public func connect(_ callback:@escaping (NSError?) -> Void){
        if(connected){
            callback(NSCWallectConnect.toError(message: ERROR_SESSION_CONNECTED))
            return
        }
        
        if(session == nil){
            let userInfo = [NSLocalizedDescriptionKey: "Invalid Configuration uri", NSLocalizedFailureReasonErrorKey: "Invalid Configuration uri", NSLocalizedRecoverySuggestionErrorKey: "Validate Configuration uri and try again"]
            
            
            callback(NSError(domain: "NativeScript", code: 1001, userInfo: userInfo))
            return
        }
        
        self.interactor = WCInteractor(session: self.session!, meta: self.meta!, uuid: self.uuid)
        
                    
        self.interactor?.onError = { error in self.delegate?.onError(error: error as NSError?)}
        
        self.interactor?.onDisconnect = { reason, code in
            self.delegate?.onDisconnect(reason: reason, code: code)
            self.accounts = []
        }
        
        self.interactor?.onCustomRequest = {
            id,request in self.delegate?.onCustomRequest(id: id, request: request)
        }
        
        self.interactor?.onSessionRequest = {
            id, peerParam in
            self.chainId = peerParam.chainId ?? 0
            self.delegate?.onSessionRequest(id: id, peerParam: NSCWCSessionRequestParam(param: peerParam))
        }
        
        self.interactor?.eth.onSign = {
            id, payload in
            switch(payload){
            case .sign(data: let data, raw: let raw):
                self.delegate?.onEthSign(id: id, data: data, raw: raw)
                break
            case .personalSign(data: let data, raw: let raw):
                self.delegate?.onEthPersonalSign(id: id, data: data, raw: raw)
                break
            case .signTypeData(id: let id, data: let data, raw: let raw):
                self.delegate?.onEthSignTypeData(id: id, data: data, raw: raw)
                break
            }
        }
        
        self.interactor?.eth.onTransaction = {
            id, event, transaction in
            switch(event){
            case .ethSignTransaction:
                self.delegate?.onEthSignTransaction(id: id, transaction: NSCWCEthereumTransaction(transaction: transaction))
                break
            case .ethSendTransaction:
                self.delegate?.onEthSendTransaction(id: id, transaction: NSCWCEthereumTransaction(transaction: transaction))
                break
            default:
                break
            }
        }
        
        
        self.interactor?.okt.onTransaction = {
            id, event, transaction in
            switch(event){
            case .oktSignTransaction:
                self.delegate?.onOktSignTransaction(id: id, transaction: NSCWCOKExChainTransaction(transaction: transaction))
                break
            case .oktSendTransaction:
                self.delegate?.onOktSendTransaction(id: id, transaction: NSCWCOKExChainTransaction(transaction: transaction))
                break
            default:
                break
            }
        }
        self.interactor?.bnb.onSign = {
            id, order in
            self.delegate?.onBnbSign(id: id, order: order.encodedString)
        }
        
        self.interactor?.connect().done({ connected in
            callback(nil)
        }).catch({ error in
            callback(error as NSError)
        })
        
    }
    
    public func disconnect(){
        self.interactor?.disconnect()
    }
    
    
    public func approveRequest(id: Int64, result: String, _ callback:@escaping (NSError?) -> Void){
        self.interactor?.approveRequest(id: id, result: result)
            .done({ _ in
                callback(nil)
            })
            .catch({ error in
                callback(error as NSError)
            })
    }
    
    public func rejectSession(_ callback:@escaping (NSError?) -> Void){
        self.interactor?.rejectSession()
            .done({ _ in
                callback(nil)
            }).catch({ error in
                callback(error as NSError)
            })
    }
    
    public func approveSession(chainId: Int, accounts: [String], _ callback:@escaping (NSError?) -> Void){
        if(connected){
            callback(NSCWallectConnect.toError(message: ERROR_SESSION_CONNECTED))
            return
        }
        
        self.interactor?.approveSession(accounts: accounts, chainId: chainId)
            .done({ _ in
                self.accounts = accounts
                self.connected = true
                self.delegate?.onConnect()
                callback(nil)
            }).catch({ error in
                callback(error as NSError)
            })
    }
    
    
    public func rejectRequest(id: Int64, errorCode: Int, errorMessage: String, callback:@escaping (NSError?) -> Void){
        self.interactor?.rejectRequest(id: id, message: errorMessage)
            .done({ _ in
                callback(nil)
            }).catch({ error in
                callback(error as NSError)
            })
    }
    
    
    public func rejectRequest(id: Int64, callback:@escaping (NSError?) -> Void){
        self.interactor?.rejectRequest(id: id, message: "Request rejected").done({ _ in
            callback(nil)
        }).catch({ error in
            callback(error as NSError)
        })
    }
    
    
    public func killSession(_ callback:@escaping (NSError?) -> Void){
        self.interactor?.killSession().done({ _ in
            callback(nil)
        }).catch({ error in
            callback(error as NSError)
        })
    }
    
    
    public func approveBnbOrder(id: Int64, signature: String, callback:@escaping (NSError?, Bool) -> Void){
        do {
            let sig = try decoder.decode(WCBinanceOrderSignature.self, from: signature.encoded)
            self.interactor?.approveBnbOrder(id: id, signed: sig).done({ param in
                if(param.errorMsg != nil){
                    callback(NSCWallectConnect.toError(message: param.errorMsg!), param.ok)
                }else {
                    callback(nil, param.ok)
                }
                
            }).catch({ error in
                callback(error as NSError, false)
            })
        }catch {
            callback(error as NSError, false)
        }
        
    }
    
}
