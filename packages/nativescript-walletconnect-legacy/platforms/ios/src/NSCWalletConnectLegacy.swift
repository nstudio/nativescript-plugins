import Foundation
import WalletConnectSwift

@objc(NSCWalletConnectLegacyDelegate)
protocol NSCWalletConnectLegacyDelegate {
    func didFailToConnect()
    
    func didConnect()
    
    func didDisConnect()
    
    func didUpdate()
}


private let ERROR_SESSION_CONNECTED = "Session currently connected"
private let ERROR_SESSION_DISCONNECTED = "Session currently disconnected"
private let ERROR_SESSION_REJECTED = "Session Rejected"



@objc(NSCWalletConnectLegacyMeta)
@objcMembers
public class NSCWalletConnectLegacyMeta: NSObject {
    
    let meta: Session.ClientMeta
    
    public init(_ url: URL, _ name: String, _ description: String? = nil, _ icons: [URL]? = nil) {
        meta = Session.ClientMeta(name: name, description: description, icons: icons ?? [], url: url)
        super.init()
    }
    
    
    public init(meta: Session.ClientMeta) {
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
    
    public var icons: [URL] {
        get {
            return meta.icons
        }
    }
    
    public var url: URL {
        get {
            return meta.url
        }
    }
    
    public var scheme: String? {
        get {
            return meta.scheme
        }
    }
}


@objc(NSCWalletConnectLegacySession)
@objcMembers
public class NSCWalletConnectLegacySession: NSObject {
    var session: Session
    var walletCollect: NSCWalletConnectLegacy? = nil
    public init(session: Session, walletCollect: NSCWalletConnectLegacy? = nil) {
        self.session = session
        self.walletCollect = walletCollect
        super.init()
    }
    
    var connected: Bool {
        get {
            return self.walletCollect?.isConnect(session: self.session) ?? false
        }
    }
    var accounts: [String] {
        get {
            self.session.walletInfo?.accounts ?? []
        }
    }
    var chainId: Int {
        get {
            return self.session.walletInfo?.chainId ?? 0
        }
    }
    var bridge: String {
        get {
            return self.session.url.absoluteString
        }
    }
    
    var key: String {
        get {
            return self.session.url.key
        }
    }
    
    
    var clientMeta: NSCWalletConnectLegacyMeta {
        get {
            return NSCWalletConnectLegacyMeta(meta: self.session.dAppInfo.peerMeta)
        }
    }
    
    var peerId: String {
        get {
            return self.session.dAppInfo.peerId
        }
    }
    
    var peerMeta: NSCWalletConnectLegacyMeta? {
        get {
            if(self.session.walletInfo != nil){
                return NSCWalletConnectLegacyMeta(meta: self.session.walletInfo!.peerMeta)
            }
            return nil
        }
    }
    
    var handshakeId: Int {
        get {
            return -1
        }
    }
    
    var handshakeTopic: String {
        get {
            return session.url.topic
        }
    }
    
    
}


@objc(NSCWalletConnectLegacy)
@objcMembers
public class NSCWalletConnectLegacy: NSObject, ClientDelegate {
    var delegate: NSCWalletConnectLegacyDelegate? = nil
    public func client(_ client: WalletConnectSwift.Client, didFailToConnect url: WalletConnectSwift.WCURL) {
        delegate?.didFailToConnect()
    }
    
    public func client(_ client: WalletConnectSwift.Client, didConnect url: WalletConnectSwift.WCURL) {
        
    }
    
    public func client(_ client: WalletConnectSwift.Client, didConnect session: WalletConnectSwift.Session) {
        self.session = session
        delegate?.didConnect()
    }
    
    public func client(_ client: WalletConnectSwift.Client, didDisconnect session: WalletConnectSwift.Session) {
        delegate?.didDisConnect()
    }
    
    public func client(_ client: WalletConnectSwift.Client, didUpdate session: WalletConnectSwift.Session) {
        delegate?.didUpdate()
    }
    
    internal var client: Client?
    internal var session: Session?
    
    internal var url: WCURL
    
    init(_ meta: NSCWalletConnectLegacyMeta, _ topic: String?, _ bridge: String?, _ key: String?, _ proto: String? , _ version: Int) {
        let topic = topic ?? UUID().uuidString
        let key = key ?? NSCWalletConnectLegacy.randomKey()
        let _ = proto ?? "wc"
        url = WCURL(topic: topic, bridgeURL: URL(string: bridge ?? "https://bridge.walletconnect.org")!, key: key)
        super.init()
        
        self.client = Client(delegate: self)
    }
    
    func isConnect(session: Session) -> Bool{
        var ret = false
        for openSession in self.client?.openSessions() ?? [] {
            if(session.url == openSession.url){
                ret = true
                break
            }
        }
        return ret
    }
    
    
    var uri: String {
        get {
            return session?.url.absoluteString ?? ""
        }
    }

    var bridge: String {
        get {
            return session?.url.bridgeURL.absoluteString ?? ""
        }
    }

    var handshakeTopic: String {
        get {
            return session?.url.topic ?? ""
        }
    }

    var connected: Bool {
        get {
            guard let session = session else {
                return false
            }
            return isConnect(session: session)
        }
    }

    var chainId: Int {
        get {
            return session?.dAppInfo.chainId ?? 0
        }
    }

    var key: String {
        get {
            return session?.url.key ?? ""
        }
    }

    var approvedAccounts: [String] {
        get {
            return session?.walletInfo?.accounts ?? []
        }
    }

    var peerId: String {
            get {
                return session?.dAppInfo.peerId ?? ""
            }
        }
    
    
    var peerMeta: NSCWalletConnectLegacyMeta? {
        get {
            if(self.session?.walletInfo != nil){
                return NSCWalletConnectLegacyMeta(meta: self.session!.walletInfo!.peerMeta)
            }
            return nil
        }
    }
    
    
    
    private func currentSession() -> Session? {
           var session: Session? = nil
           for openSession in self.client?.openSessions() ?? [] {
               if(openSession.url == url){
                   session = openSession
                   break
               }
           }
           return session
       }
    
    
    private(set) var pending: Bool = false
        
        public func connect(_ callback:@escaping (NSError?) -> Void){
            if(connected){
                callback(NSCWalletConnectLegacy.toError(message: ERROR_SESSION_CONNECTED))
                return
            }
            if(pending){
                return
            }
            do {
                try client!.connect(to: url)
                callback(nil)
            }catch {
                callback(error as NSError)
            }
        }
        
        public func createSession(_ callback:@escaping (NSError?) -> Void){
            if(connected){
                callback(NSCWalletConnectLegacy.toError(message: ERROR_SESSION_CONNECTED))
                return
            }
            if(pending){
                return
            }
            do {
                try client!.connect(to: url)
                callback(nil)
            }catch {
                callback(error as NSError)
            }
        }
        
        public func approveRequest(id: Int, result: String, _ callback:@escaping (NSError?) -> Void){
            
            do {
                let response = try Response(url: url, value: result, id: id)
                try client!.send(response)
                callback(nil)
            }catch {
                callback(error as NSError)
            }
        }
        
        public func rejectSession(_ callback:@escaping (NSError?) -> Void){
            do {
                
                let reject = try Response(url: url, error: ResponseError.requestRejected)
                try client!.send(reject)
                callback(nil)
            }catch {
                callback(error as NSError)
            }
        }
        
        public func approveSession(chainId: Int, accounts: [String], _ callback:@escaping (NSError?) -> Void){
            if(connected){
                callback(NSCWalletConnectLegacy.toError(message: ERROR_SESSION_CONNECTED))
                return
            }
            
            do {
                let walletInfo = Session.WalletInfo(approved: true, accounts: accounts, chainId: chainId, peerId: peerId, peerMeta: peerMeta!.meta)
                let request = try Request(url: url, method: "wc_sessionUpdate", params: [walletInfo], id: nil)
                try client?.send(request, completion: { response in
                    if(response.error != nil){
                        callback(response.error)
                    }else {
                        callback(nil)
                    }
                })
            }catch {
                callback(error as NSError)
            }
        }
        
        public func updateSession(chainId: Int, accounts: [String], _ callback:@escaping (NSError?) -> Void){
            do {
                let currentSession = currentSession()!
                let walletInfo = Session.WalletInfo(approved: true, accounts: accounts, chainId: chainId, peerId: currentSession.dAppInfo.peerId, peerMeta: currentSession.dAppInfo.peerMeta)
                
                let request = try Request(url: url, method: "wc_sessionUpdate", params: [walletInfo], id: nil)
                
                try client?.send(request, completion: { response in
                    if(response.error != nil){
                        callback(response.error)
                    }else {
                        callback(nil)
                    }
                })
                
            }catch {
                callback(error as NSError)
            }
        }
        
        public func rejectRequest(id: Int, errorCode: Int, errorMessage: String, callback:@escaping (NSError?) -> Void){
            do {
                let reject = try Response(url: url, errorCode: errorCode, message: errorMessage, id: id)
                try client!.send(reject)
                callback(nil)
            }catch {
                callback(error as NSError)
            }
        }
        
        
        public func rejectRequest(id: Int, callback:@escaping (NSError?) -> Void){
            do {
                let reject = try Response(url: url, error: .requestRejected)
                try client!.send(reject)
                callback(nil)
            }catch {
                callback(error as NSError)
            }
        }
        
        
        
        public func killSession(_ callback:@escaping (NSError?) -> Void){
            let currentSession = currentSession()
            if(currentSession != nil){
                do {
                    try client!.disconnect(from: currentSession!)
                    callback(nil)
                }catch{
                    callback(error as NSError)
                }
            }
        }
        
        public func signMessage(_ account: String, _ message: String, _ callback:@escaping (String?, NSError?) -> Void){
            try? client!.eth_sign(url: url, account: account, message: message) {response in
                if(response.error != nil){
                    callback(nil, response.error)
                }else {
                    callback(try? response.result(as: String.self), nil)
                }
            }
        }
        
        public func signTransaction(_ tx: String, _ callback:@escaping (String?, NSError?) -> Void){
            
            do {
                let decoder = JSONDecoder()
                let transaction = try decoder.decode(Client.Transaction.self, from: tx.data(using: .utf8)!)
                try client!.eth_signTransaction(url: url, transaction: transaction) {response in
                    if(response.error != nil){
                        callback(nil, response.error)
                    }else {
                        callback(try? response.result(as: String.self), nil)
                    }
                }
            }catch {
                callback(nil, error as NSError)
            }
            
        }
        
        
        public func sendTransaction(_ tx: String, _ callback:@escaping (String?, NSError?) -> Void){
            do {
                let decoder = JSONDecoder()
                let transaction = try decoder.decode(Client.Transaction.self, from: tx.data(using: .utf8)!)
                
                try client!.eth_sendTransaction(url: url, transaction: transaction) {response in
                    if(response.error != nil){
                        callback(nil, response.error)
                    }else {
                        callback(try? response.result(as: String.self), nil)
                    }
                }
            }catch {}
        }
        
        public func signPersonalMessage(_ account: String, _ message: String, _ callback:@escaping (String?, NSError?) -> Void){
            try? client!.personal_sign(url: url, message: message, account: account) {response in
                if(response.error != nil){
                    callback(nil, response.error)
                }else {
                    callback(try? response.result(as: String.self), nil)
                }
            }
        }
        
        
        public func signTypedData(_ account: String, _ message: String, _ callback:@escaping (String?, NSError?) -> Void){
            try? client!.eth_signTypedData(url: url,account: account, message: message) {response in
                if(response.error != nil){
                    callback(nil, response.error)
                }else {
                    callback(try? response.result(as: String.self), nil)
                }
            }
        }
        
        
        public func sendRawTransaction(_ data: String, _ callback:@escaping (String?, NSError?) -> Void){
            try? client?.eth_sendRawTransaction(url: url, data: data) {response in
                if(response.error != nil){
                    callback(nil, response.error)
                }else {
                    callback(try? response.result(as: String.self), nil)
                }
            }
        }
        
        
        public func sendCustomRequest(_ method: String, _ id: Int, _ params: String , _ callback:@escaping (String?, NSError?) -> Void){
            do {
                let decoder = JSONDecoder()
                let values = try decoder.decode(Array<NSCParamType>.self, from: params.data(using: .utf8)!)
                let request = try Request(url: url, method: method, params: values, id: id)
                try? client!.send(request) {response in
                    if(response.error != nil){
                        callback(nil, response.error)
                    }else {
                        callback(try? response.result(as: String.self), nil)
                    }
                }
            }catch {
                callback(nil, error as NSError)
            }
        }
    
    
    private static func randomKey() -> String {
        var bytes = [Int8](repeating: 0, count: 32)
        let status = SecRandomCopyBytes(kSecRandomDefault, bytes.count, &bytes)
        if status == errSecSuccess {
            return Data(bytes: bytes, count: 32).toHexString()
        } else {
            return UUID().uuidString.bytes.toHexString()
        }
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
    
}
