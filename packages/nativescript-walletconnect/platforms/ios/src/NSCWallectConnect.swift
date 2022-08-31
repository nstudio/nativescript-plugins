import Foundation
import WalletConnectSwift

@objc(NSCWalletConnectDelegate)
public protocol NSCWalletConnectDelegate {
    func didFailToConnect(url: String)
    func didConnect(url: String)
    func didConnect(session: NSCWallectSession)
    func didDisconnect(session: NSCWallectSession)
    func didUpdate(session: NSCWallectSession)
}


private let ERROR_SESSION_CONNECTED = "Session currently connected"
private let ERROR_SESSION_DISCONNECTED = "Session currently disconnected"
private let ERROR_SESSION_REJECTED = "Session Rejected"


@objc(NSCClientMeta)
@objcMembers
public class NSCClientMeta: NSObject {
    
    let meta: Session.ClientMeta
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


@objc(NSCWallectSession)
@objcMembers
public class NSCWallectSession: NSObject {
    var session: Session
    var walletCollect: NSCWallectConnect? = nil
    public init(session: Session, walletCollect: NSCWallectConnect? = nil) {
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
    
    
    var clientMeta: NSCClientMeta {
        get {
            return NSCClientMeta(meta: self.session.dAppInfo.peerMeta)
        }
    }
    
    var peerId: String {
        get {
            return self.session.dAppInfo.peerId
        }
    }
    
    var peerMeta: NSCClientMeta? {
        get {
            if(self.session.walletInfo != nil){
                return NSCClientMeta(meta: self.session.walletInfo!.peerMeta)
            }
            return nil
        }
    }
    
    var handshakeId: Int {
        get {
            return 0
        }
    }
    
    var handshakeTopic: String {
        get {
            return session.url.topic
        }
    }
    
    
}


@objc(NSCWallectConnect)
@objcMembers
public class NSCWallectConnect: NSObject, ClientDelegate {
    
    
    public static func toHex(_ value: String) -> String {
        return value.utf8.map{ String(format:"%02x", $0) }.joined()
    }
    
    
    public func client(_ client: Client, didFailToConnect url: WCURL) {
        if(clientMode){
            DispatchQueue.main.async {
                self.delegate?.didFailToConnect(url: url.absoluteString)
            }
        }
    }
    
    public func client(_ client: Client, didConnect url: WCURL) {
        if(clientMode){
            DispatchQueue.main.async {
                self.delegate?.didConnect(url: url.absoluteString)
            }
        }
    }
    
    public func client(_ client: Client, didConnect session: Session) {
        if(clientMode){
            if(session.walletInfo != nil){
                self._account = session.walletInfo!.accounts
            }else {
                self._account = []
            }
            self.connected = true
            DispatchQueue.main.async {
                self.delegate?.didConnect(session: NSCWallectSession(session: session))
            }
        }
    }
    
    public func client(_ client: Client, didDisconnect session: Session) {
        if(clientMode){
            DispatchQueue.main.async {
                self.delegate?.didDisconnect(session: NSCWallectSession(session: session))
            }
        }
    }
    
    public func client(_ client: Client, didUpdate session: Session) {
        if(clientMode){
            DispatchQueue.main.async {
                self.delegate?.didUpdate(session: NSCWallectSession(session: session))
            }
        }
    }
    
    
    
    
    var client: Client?
    let decoder = JSONDecoder()
    let encoder = JSONEncoder()
    private var _account: [String] = []
    private(set) public var accounts: [String]  = []
    var url: WCURL? = nil
    public var delegate: NSCWalletConnectDelegate?
    private var clientMode = true
    private var approvalCompletion: ((Session.WalletInfo) -> Void)? = nil
    private(set) public var clientId: String = ""
    private(set) public var connected: Bool = false
    public init(configuration: NSCWalletConnectConfig) {
        super.init()
        
        if(configuration.uri != nil){
            url = WCURL(configuration.uri!)
        }else {
            let randomBytes = secureRandomBytes(count: 32)
            let key = configuration.key ?? randomBytes.toHexString()
            
            url = WCURL(topic: NSUUID().uuidString, bridgeURL: URL(string: configuration.bridge ?? "")!, key: key)
        }
        
        if(configuration.clientMeta != nil){
            let name = configuration.clientMeta!.name!
            let desc = configuration.clientMeta!.desc!
            let icons = configuration.clientMeta!.icons!
            let url = configuration.clientMeta!.url!
            
            let info = Session.DAppInfo(peerId: NSUUID().uuidString, peerMeta: Session.ClientMeta(name: name, description: desc, icons: icons.map {URL(string: $0)!}, url: URL(string: url)!))
            
            client = Client(delegate: self, dAppInfo: info)
        }else {
            client = Client(delegate: self)
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
    
    public var uri: String {
        get {
            return url?.absoluteString ?? ""
        }
    }
    
    public var bridge: String {
        get {
            return url?.bridgeURL.absoluteString ?? ""
        }
    }
    
    
    public var handshakeTopic: String {
        get {
            return url?.topic ?? ""
        }
    }
    
    
    private func currentSession() -> Session? {
        if(url == nil){
            return nil
        }
        var session: Session? = nil
        for openSession in self.client?.openSessions() ?? [] {
            if(openSession.url == url!){
                session = openSession
                break
            }
        }
        return  session
    }
    
    
    public var chainId: Int {
        get {
            return currentSession()?.dAppInfo.chainId ?? 0
        }
    }
    
    public var key: String {
        return url?.key ?? ""
    }
    
    public var clientMeta: NSCClientMeta? {
        let currentSession = currentSession()
        if(currentSession != nil){
            return NSCClientMeta(meta: currentSession!.dAppInfo.peerMeta)
        }
        return nil
    }
    
    public var peerId: String {
        return currentSession()?.dAppInfo.peerId ?? ""
    }
    
    public var peerMeta: NSCClientMeta? {
        let currentSession = currentSession()
        if(currentSession != nil && currentSession?.walletInfo != nil){
            return NSCClientMeta(meta: currentSession!.walletInfo!.peerMeta)
        }
        return nil
    }
    
    private(set) var pending: Bool = false
    
    public func connect(_ callback:@escaping (NSError?) -> Void){
        if(connected){
            callback(NSCWallectConnect.toError(message: ERROR_SESSION_CONNECTED))
            return
        }
        if(pending){
            return
        }
        do {
            clientMode = false
            try client!.connect(to: url!)
            callback(nil)
        }catch {
            callback(error as NSError)
        }
    }
    
    public func createSession(_ callback:@escaping (NSError?) -> Void){
        if(connected){
            callback(NSCWallectConnect.toError(message: ERROR_SESSION_CONNECTED))
            return
        }
        if(pending){
            return
        }
        do {
            try client!.connect(to: url!)
            callback(nil)
        }catch {
            callback(error as NSError)
        }
    }
    
    public func approveRequest(id: Int, result: String, _ callback:@escaping (NSError?) -> Void){
        
        do {
            let response = try Response(url: url!, value: result, id: id)
            try client!.send(response)
            callback(nil)
        }catch {
            callback(error as NSError)
        }
    }
    
    public func rejectSession(_ callback:@escaping (NSError?) -> Void){
        do {
            
            let reject = try Response(url: url!, error: ResponseError.requestRejected)
            try client!.send(reject)
            callback(nil)
        }catch {
            callback(error as NSError)
        }
    }
    
    public func approveSession(chainId: Int, accounts: [String], _ callback:@escaping (NSError?) -> Void){
        if(connected){
            callback(NSCWallectConnect.toError(message: ERROR_SESSION_CONNECTED))
            return
        }
        
        do {
            let walletInfo = Session.WalletInfo(approved: true, accounts: accounts, chainId: chainId, peerId: peerId, peerMeta: peerMeta!.meta)
            let request = try Request(url: url!, method: "wc_sessionUpdate", params: [walletInfo], id: nil)
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
            
            let request = try Request(url: url!, method: "wc_sessionUpdate", params: [walletInfo], id: nil)
            
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
            let reject = try Response(url: url!, errorCode: errorCode, message: errorMessage, id: id)
            try client!.send(reject)
            callback(nil)
        }catch {
            callback(error as NSError)
        }
    }
    
    
    public func rejectRequest(id: Int, callback:@escaping (NSError?) -> Void){
        do {
            let reject = try Response(url: url!, error: .requestRejected)
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
        try? client!.eth_sign(url: url!, account: account, message: message) {response in
            if(response.error != nil){
                callback(nil, response.error)
            }else {
                callback(try? response.result(as: String.self), nil)
            }
        }
    }
    
    public func signTransaction(_ tx: NSCTransactionConfig, _ callback:@escaping (String?, NSError?) -> Void){
        try? client!.eth_sendTransaction(url: url!, transaction: tx.intoTx()) {response in
            if(response.error != nil){
                callback(nil, response.error)
            }else {
                callback(try? response.result(as: String.self), nil)
            }
        }
    }
    
    
    public func sendTransaction(_ tx: NSCTransactionConfig, _ callback:@escaping (String?, NSError?) -> Void){
        try? client!.eth_sendTransaction(url: url!, transaction: tx.intoTx()) {response in
            if(response.error != nil){
                callback(nil, response.error)
            }else {
                callback(try? response.result(as: String.self), nil)
            }
        }
    }
    
    public func signPersonalMessage(_ account: String, _ message: String, _ callback:@escaping (String?, NSError?) -> Void){
        try? client!.personal_sign(url: url!, message: message, account: account) {response in
            if(response.error != nil){
                callback(nil, response.error)
            }else {
                callback(try? response.result(as: String.self), nil)
            }
        }
    }
    
    
    public func signTypedData(_ account: String, _ message: String, _ callback:@escaping (String?, NSError?) -> Void){
        try? client!.eth_signTypedData(url: url!,account: account, message: message) {response in
            if(response.error != nil){
                callback(nil, response.error)
            }else {
                callback(try? response.result(as: String.self), nil)
            }
        }
    }
    
    
    public func sendRawTransaction(_ data: String, _ callback:@escaping (String?, NSError?) -> Void){
        try? client?.eth_sendRawTransaction(url: url!, data: data) {response in
            if(response.error != nil){
                callback(nil, response.error)
            }else {
                callback(try? response.result(as: String.self), nil)
            }
        }
    }
    
    
    public func sendCustomRequest(_ method: String, _ id: Int, _ params: String , _ callback:@escaping (String?, NSError?) -> Void){
        do {
            let values = try decoder.decode(Array<NSCParamType>.self, from: params.data(using: .utf8)!)
            let request = try Request(url: url!, method: method, params: values, id: id)
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
    
    
    
    private func secureRandomBytes(count: Int) -> [UInt8] {
        var bytes = [UInt8](repeating: 0, count: count)
        
        // Fill bytes with secure random data
        let status = SecRandomCopyBytes(
            kSecRandomDefault,
            count,
            &bytes
        )
        
        // A status of errSecSuccess indicates success
        if status == errSecSuccess {
            return bytes
        }
        else {
            return []
        }
    }
}
