//
//  NSCWalletConnectV2.swift
//
//  Created by Osei Fortune on 09/01/2023.
//  Copyright © 2023 NativeScript. All rights reserved.
//

import Foundation
import WalletConnectSwiftV2
import Combine
import Web3

@objcMembers
@objc(NSCWalletConnectV2ETHSigner)
public class NSCWalletConnectV2ETHSigner: NSObject {
   
    public static func personalSign(_ privateKey: NSCWalletConnectV2EthereumPrivateKey,_ params: NSCWalletConnectV2Codable) -> NSCWalletConnectV2Codable {
        let params = try! AnyCodable(params).get([String].self)
        let messageToSign = params[0]
        let dataToHash = dataToHash(messageToSign)
        let (v, r, s) = try! privateKey.key.sign(message: .init(hex: dataToHash.toHexString()))
        let result = "0x" + r.toHexString() + s.toHexString() + String(v + 27, radix: 16)
        return NSCWalletConnectV2Codable(string: result)
    }
    
    

    public static func ethSign(_ privateKey: NSCWalletConnectV2EthereumPrivateKey,_ params: NSCWalletConnectV2Codable) -> NSCWalletConnectV2Codable {
        let params = try! AnyCodable(params).get([String].self)
        let messageToSign = params[1]
        let dataToHash = dataToHash(messageToSign)
        let (v, r, s) = try! privateKey.key.sign(message: .init(hex: dataToHash.toHexString()))
        let result = "0x" + r.toHexString() + s.toHexString() + String(v + 27, radix: 16)
        return NSCWalletConnectV2Codable(string: result)
    }
    
    public static func signTransaction(_ privateKey: NSCWalletConnectV2EthereumPrivateKey,_ params: NSCWalletConnectV2Codable) -> NSCWalletConnectV2Codable {
        let params = try! params.value.get([EthereumTransaction].self)
        let transaction = params[0]
        let signedTx = try! transaction.sign(with: privateKey.key, chainId: 4)
        let (r, s, v) = (signedTx.r, signedTx.s, signedTx.v)
        let result = r.hex() + s.hex().dropFirst(2) + String(v.quantity, radix: 16)
        return NSCWalletConnectV2Codable(string: result)
    }
    
    
    public static func sendTransaction(_ privateKey: NSCWalletConnectV2EthereumPrivateKey,_ params: NSCWalletConnectV2Codable) -> NSCWalletConnectV2Codable {
        let params = try! AnyCodable(params).get([EthereumTransaction].self)
        let transaction = params[0]
        let signedTx = try! transaction.sign(with: privateKey.key, chainId: 4)
        let (r, s, v) = (signedTx.r, signedTx.s, signedTx.v)
        let result = r.hex() + s.hex().dropFirst(2) + String(v.quantity, radix: 16)
        return NSCWalletConnectV2Codable(string: result)
    }
    
    static func dataToHash(_ message: String) -> Bytes {
        let prefix = "\u{19}Ethereum Signed Message:\n"
        let messageData = Data(hex: message)
        let prefixData = (prefix + String(messageData.count)).data(using: .utf8)!
        let prefixedMessageData = prefixData + messageData
        let dataToHash: Bytes = .init(hex: prefixedMessageData.toHexString())
        return dataToHash
    }
    
    static func dataToPrefix(_ data: Data) -> Bytes {
        let prefix = "\u{19}Ethereum Signed Message:\n"
        let prefixData = (prefix + String(data.count)).data(using: .utf8)!
        let prefixedMessageData = prefixData + data
        let dataToHash: Bytes = .init(hex: prefixedMessageData.toHexString())
        return dataToHash
    }
}

@objcMembers
@objc(NSCWalletConnectV2EthereumPublicKey)
public class NSCWalletConnectV2EthereumPublicKey: NSObject {
    let key: EthereumPublicKey
    init(key: EthereumPublicKey) {
        self.key = key
    }
    public var address: NSCWalletConnectV2EthereumAddress {
        return NSCWalletConnectV2EthereumAddress(address: key.address)
    }
    
    public var rawPublicKey: Bytes{
        return key.rawPublicKey
    }
    public func hex() -> String {
        return key.hex()
    }
}

@objcMembers
@objc(NSCWalletConnectV2EthereumAddress)
public class NSCWalletConnectV2EthereumAddress: NSObject {
    let address: EthereumAddress
    init(address: EthereumAddress) {
        self.address = address
    }
    
    public var rawAddress: Bytes {
        return address.rawAddress
    }
    
    public func hex(eip55: Bool) -> String {
        return address.hex(eip55: eip55)
    }
}

@objcMembers
@objc(NSCWalletConnectV2EthereumPrivateKeySignResult)
public class NSCWalletConnectV2EthereumPrivateKeySignResult: NSObject {
    public let v: UInt
    public let r: Bytes
    public let s: Bytes
    init(v: UInt, r: Bytes, s: Bytes) {
        self.v = v
        self.r = r
        self.s = s
    }
}

@objcMembers
@objc(NSCWalletConnectV2EthereumPrivateKey)
public class NSCWalletConnectV2EthereumPrivateKey: NSObject {
    let key: EthereumPrivateKey
    init(key: EthereumPrivateKey) {
        self.key = key
    }
    
    public static func generateKey() throws -> NSCWalletConnectV2EthereumPrivateKey {
        return NSCWalletConnectV2EthereumPrivateKey(key: try EthereumPrivateKey())
    }
    
    public init(bytes: Data) throws {
        key = try EthereumPrivateKey([UInt8](bytes))
    }
    
    public init(hexPrivateKey: String) throws {
        key = try EthereumPrivateKey(hexPrivateKey: hexPrivateKey)
    }
    
    public var address: NSCWalletConnectV2EthereumAddress {
        return NSCWalletConnectV2EthereumAddress(address: key.address)
    }
    
    public var publicKey: NSCWalletConnectV2EthereumPublicKey {
        return NSCWalletConnectV2EthereumPublicKey(key: key.publicKey)
    }
    
    public var rawPrivateKey: [UInt8] {
        return key.rawPrivateKey
    }
    public func sign(data message: Data) throws -> NSCWalletConnectV2EthereumPrivateKeySignResult {
        return try sign(message: [UInt8](message))
    }
    
    public func sign(message: [UInt8]) throws -> NSCWalletConnectV2EthereumPrivateKeySignResult {
        let result = try key.sign(message: message)
        return NSCWalletConnectV2EthereumPrivateKeySignResult(v: result.v, r: result.r, s: result.s)
    }
    
    public func sign(dataHash _hash: Data) throws -> NSCWalletConnectV2EthereumPrivateKeySignResult {
        return try sign(hash: [UInt8](_hash))
    }
    
    public func sign(hash _hash: Array<UInt8>) throws -> NSCWalletConnectV2EthereumPrivateKeySignResult {
        let result = try key.sign(hash: _hash)
        return NSCWalletConnectV2EthereumPrivateKeySignResult(v: result.v, r: result.r, s: result.s)
    }
    
    public func hex() -> String {
        return key.hex()
    }
}

@objc(NSCWalletConnectV2ConnectionType)
public enum NSCWalletConnectV2ConnectionType:Int32, RawRepresentable {
    case Auto
    case Manual
    public typealias RawValue = Int32
    
    public init?(rawValue: Int32) {
        switch(rawValue){
        case 0:
            self = .Auto
            break
        case 1:
            self = .Manual
            break
        default:
            return nil
        }
    }
    
    var toSocketConnectionType: SocketConnectionType {
        switch(self){
        case .Auto:
            return .automatic
        case .Manual:
            return .manual
        }
    }
}


@objcMembers
@objc(NSCWalletConnectV2AppMetadata)
public class NSCWalletConnectV2AppMetadata: NSObject {
    let appMetadata: AppMetadata
    init(appMetadata: AppMetadata) {
        self.appMetadata = appMetadata
    }
    
    public var desc: String {
        return appMetadata.description
    }
    
    public var url: String {
        return appMetadata.url
    }
    
    public var name: String {
        return appMetadata.name
    }
    
    public var icons: [String] {
        return appMetadata.icons
    }
    
    public var redirectNativeLink: String? {
        return appMetadata.redirect?.native
    }
    
    public var redirectUniversalLink: String? {
        return appMetadata.redirect?.universal
    }
    
    public init(description: String,
                url: String,
                icons: [String],
                name: String,
                redirect: String?,
                redirectUniversal: String?) {
        var redirectValue: AppMetadata.Redirect? = nil
        
        if(redirect != nil || redirectUniversal != nil){
            redirectValue = AppMetadata.Redirect(native: redirect, universal: redirectUniversal)
        }
        
        appMetadata = AppMetadata(name: name, description: description, url: url, icons: icons,redirect: redirectValue)
    }
}

@objcMembers
@objc(NSCWalletConnectV2Pairing)
public class NSCWalletConnectV2Pairing: NSObject {
    var pairing: Pairing
    init(pairing: Pairing) {
        self.pairing = pairing
    }
    
    var topic: String {
        return pairing.topic
    }
    
    var expiryDate: Date {
        return pairing.expiryDate
    }
    
    var peer: NSCWalletConnectV2AppMetadata? {
        guard let peer = pairing.peer else {return nil}
        return NSCWalletConnectV2AppMetadata(appMetadata: peer)
    }
    
}


enum NSCWalletConnectV2CodableError:Error {
    case missingValue
}

@objcMembers
@objc(NSCWalletConnectV2AnyCancellable)
public class NSCWalletConnectV2AnyCancellable: NSObject {
    var anyCancellable: AnyCancellable
    init(anyCancellable: AnyCancellable) {
        self.anyCancellable = anyCancellable
    }
    
    public func cancel(){
        self.anyCancellable.cancel()
    }
}

@objc(NSCWalletConnectV2CodableValueType)
public enum NSCWalletConnectV2CodableValueType: Int32, RawRepresentable {
    case String
    case Number
    case Bool
    case Array
    case Object
    case Null
    
    public typealias RawValue = Int32
    public init?(rawValue: Int32) {
        switch(rawValue){
        case 0:
            self = .String
            break
        case 1:
            self = .Number
            break
        case 2:
            self = .Bool
            break
        case 3:
            self = .Array
            break
        case 4:
            self = .Object
            break
        case 5:
            self = .Null
            break
        default:
            return nil
        }
    }
    
    public var rawValue: Int32 {
        switch(self){
        case .String:
            return 0
        case .Number:
            return 1
        case .Bool:
            return 2
        case .Array:
            return 3
        case .Object:
            return 4
        case .Null:
            return 5
        }
    }
}


@objcMembers
@objc(NSCWalletConnectV2Codable)
public class NSCWalletConnectV2Codable: NSObject, Codable {

    var value: AnyCodable
    
    private static func getTypeFromCodable(codable: AnyCodable) -> NSCWalletConnectV2CodableValueType{
        if((codable.value as? String? ) != nil){
            return .String
        }else if((codable.value as? Double? ) != nil){
            return  .Number
        }else if((codable.value as? Int? ) != nil){
            return .Number
        }else if((codable.value as? Bool? ) != nil){
            return  .String
        }else if((codable.value as? NSDictionary? ) != nil){
            return  .Object
        }else if((codable.value as? NSArray? ) != nil){
            return  .Array
        }else {
            return  .Null
        }
    }
    
    public var codableValue: Any {
        return value.value
    }
    
    public private(set)var type: NSCWalletConnectV2CodableValueType

    public func json() -> String?{
        do {
            return try value.json()
        }catch{
            return nil
        }
    }
    
    init(value: AnyCodable) {
        self.value = value
        type = NSCWalletConnectV2Codable.getTypeFromCodable(codable: value)
        super.init()
    }
    
    init(value: Codable) {
        let val = AnyCodable(value)
        type = NSCWalletConnectV2Codable.getTypeFromCodable(codable: val)
        self.value = val
        super.init()
    }
    
    public required init(from decoder: Decoder) throws {
        value = try AnyCodable(from: decoder)
        type = NSCWalletConnectV2Codable.getTypeFromCodable(codable: value)
    }
    
    public func encode(to encoder: Encoder) throws {
        try value.encode(to: encoder)
    }
    
    public func get<T: Codable>(_ type: T.Type) throws -> T {
        return try value.get(type)
    }
    
    public init(string: String){
        value = AnyCodable(string)
        type = .String
        super.init()
    }
    
    public init(number: Double){
        value = AnyCodable(number)
        type = .Number
        super.init()
    }
    
    public init(bool: Bool){
        value = AnyCodable(bool)
        type = .Bool
        super.init()
    }
    
    public init(array: [NSCWalletConnectV2Codable]){
        value = AnyCodable(array)
        type = .Array
        super.init()
    }
    
    public init(object: [NSCWalletConnectV2Codable:NSCWalletConnectV2Codable]){
        value = AnyCodable(object)
        type = .Object
        super.init()
    }
    
    public init(value: NSCWalletConnectV2Codable){
        self.value = value.value
        self.type = value.type
        super.init()
    }
    
}


@objcMembers
@objc(NSCWalletConnectV2ProposalNamespace)
public class NSCWalletConnectV2ProposalNamespace: NSObject {
    var proposalNamespace: ProposalNamespace
    init(proposalNamespace: ProposalNamespace) {
        self.proposalNamespace = proposalNamespace
    }
    
    public init(events: Set<String>, methods: Set<String>, chains: Set<String>, extensions: [NSCWalletConnectV2ProposalNamespaceExtension]?) {
        self.proposalNamespace = ProposalNamespace.init(chains: Set(chains.map { chain in
            Blockchain(chain)!
        }), methods: methods, events: events,extensions: extensions?.map({ ext in
            ext.proposalNamespaceExtension
        }))
    }
    
    public var events: [String] {
        return Array(proposalNamespace.events)
    }
    
    public var methods: [String] {
        return Array(proposalNamespace.methods)
    }
    
    public var chains: [String]{
        return proposalNamespace.chains.map { chain in
            chain.absoluteString
        }
    }
    
    public var extensions: [NSCWalletConnectV2ProposalNamespaceExtension]?{
        guard let extensions = proposalNamespace.extensions else {return nil}
        return extensions.map { ext in
            NSCWalletConnectV2ProposalNamespaceExtension(proposalNamespaceExtension: ext)
        }
    }
}


@objcMembers
@objc(NSCWalletConnectV2ProposalNamespaceExtension)
public class NSCWalletConnectV2ProposalNamespaceExtension: NSObject {
    var proposalNamespaceExtension: ProposalNamespace.Extension
    init(proposalNamespaceExtension: ProposalNamespace.Extension) {
        self.proposalNamespaceExtension = proposalNamespaceExtension
    }
    
    public init(events: Set<String>, methods: Set<String>, chains: Set<String>) {
        self.proposalNamespaceExtension = ProposalNamespace.Extension(chains: Set(chains.map { chain in
            Blockchain(chain)!
        }), methods: methods, events: events)
    }
    
    
    public var events: [String] {
        return Array(proposalNamespaceExtension.events)
    }
    
    public var methods: [String] {
        return Array(proposalNamespaceExtension.methods)
    }
    
    public var chains: [String]{
        return proposalNamespaceExtension.chains.map { chain in
            chain.absoluteString
        }
    }
}



@objcMembers
@objc(NSCWalletConnectV2SessionProposal)
public class NSCWalletConnectV2SessionProposal: NSObject {
    var proposal: Session.Proposal
    init(proposal: Session.Proposal) {
        self.proposal = proposal
    }
    
    public var id: String {
        get {
            return proposal.id
        }
    }
    
    public var proposer: NSCWalletConnectV2AppMetadata {
        get {
            return NSCWalletConnectV2AppMetadata(appMetadata: proposal.proposer)
        }
    }
    
    public var requiredNamespaces: [String: NSCWalletConnectV2ProposalNamespace]{
        get {
            var ret: [String: NSCWalletConnectV2ProposalNamespace] = [:]
            
            proposal.requiredNamespaces.forEach { (key, value) in
                ret[key] = NSCWalletConnectV2ProposalNamespace.init(proposalNamespace: value)
            }
            
            return ret
        }
    }
}

@objcMembers
@objc(NSCWalletConnectV2Request)
public class NSCWalletConnectV2Request: NSObject {
    var request: Request
    public init(topic: String, method: String, params: NSCWalletConnectV2Codable, chainId: String) {
        self.request = Request(topic: topic, method: method, params: AnyCodable(params), chainId: Blockchain(chainId)!)
    }
    
    init(request: Request) {
        self.request = request
    }
    
    public var id: NSCWalletConnectV2RPCID {
        get {return NSCWalletConnectV2RPCID(id: request.id)}
    }
    
    public var topic: String {
        get {return request.topic}
    }
    
    public var method: String {
        get {return request.method}
    }
    
    public var chainId: String {
        get {return request.chainId.absoluteString}
    }
    
    
    @nonobjc var _params: NSCWalletConnectV2Codable? = nil
    public var params: NSCWalletConnectV2Codable {
        if(_params == nil){
            _params = NSCWalletConnectV2Codable(value: request.params)
        }
        
        return _params!
    }
}

@objc(NSCWalletConnectV2SocketConnectionStatus)
public enum NSCWalletConnectV2SocketConnectionStatus: Int32, RawRepresentable {
    case connected
    case disconnected
    
    public typealias RawValue = Int32
    
    init(status: SocketConnectionStatus){
        switch(status){
        case .connected:
            self = .connected
        case .disconnected:
            self = .disconnected
        }
    }
    
    public var rawValue: Int32 {
        get {
            switch(self){
            case .connected:
                return 0
            case .disconnected:
                return 1
            }
        }
    }
    
    public init?(rawValue: Int32) {
        switch(rawValue){
        case 0:
            self = .connected
            break
        case 1:
            self = .disconnected
            break
        default:
            return nil
        }
    }
}


@objcMembers
@objc(NSCWalletConnectV2SessionNamespaceExtension)
public class NSCWalletConnectV2SessionNamespaceExtension: NSObject {
    var sessionNamespaceExtension: SessionNamespace.Extension
    
    init(sessionNamespaceExtension: SessionNamespace.Extension) {
        self.sessionNamespaceExtension = sessionNamespaceExtension
    }
    public init(accounts: Set<String>, events: Set<String>, methods: Set<String>) {
        self.sessionNamespaceExtension = SessionNamespace.Extension(accounts: Set(accounts.map({ account in
            Account(account)!
        })), methods: methods, events: events)
    }
    
    
    public var accounts: Set<String> {
        return Set(sessionNamespaceExtension.accounts.map { account in
            account.absoluteString
        })
    }
    
    public var events: Set<String> {
        return sessionNamespaceExtension.events
    }
    
    public var methods: Set<String> {
        return sessionNamespaceExtension.methods
    }
}


@objcMembers
@objc(NSCWalletConnectV2SessionNamespace)
public class NSCWalletConnectV2SessionNamespace: NSObject {
    
    var sessionNamespace: SessionNamespace
    init(sessionNamespace: SessionNamespace) {
        self.sessionNamespace = sessionNamespace
    }
    
    public init(accounts: Set<String>, events: Set<String>, methods: Set<String>, extensions: [NSCWalletConnectV2SessionNamespaceExtension]?) {
        self.sessionNamespace = SessionNamespace(accounts: Set(accounts.map({ account in
            Account(account)!
        })), methods: methods, events: events, extensions: extensions?.map({ ext in
            ext.sessionNamespaceExtension
        }))
    }
    
    public var accounts: Set<String> {
        return Set(sessionNamespace.accounts.map { account in
            account.absoluteString
        })
    }
    
    public var events: Set<String> {
        return sessionNamespace.events
    }
    
    public var methods: Set<String> {
        return sessionNamespace.methods
    }
    
    public var extensions: [NSCWalletConnectV2SessionNamespaceExtension]? {
        guard let extensions  = sessionNamespace.extensions else {return nil}
        
        return extensions.map { ext in
            NSCWalletConnectV2SessionNamespaceExtension(sessionNamespaceExtension: ext)
        }
    }
    
}


@objcMembers
@objc(NSCWalletConnectV2Session)
public class NSCWalletConnectV2Session: NSObject {
    var session: Session
    init(session: Session) {
        self.session = session
    }
    
    public var topic: String{
        return session.topic
    }
    
    public var expiryDate: Date{
        return session.expiryDate
    }
    
    public var peer: NSCWalletConnectV2AppMetadata{
        return NSCWalletConnectV2AppMetadata(appMetadata: session.peer)
    }
    
    public var namespaces:  [String: NSCWalletConnectV2SessionNamespace]{
        var ret: [String: NSCWalletConnectV2SessionNamespace] = [:]
        session.namespaces.forEach { key,value in
            ret[key] = NSCWalletConnectV2SessionNamespace(sessionNamespace: value)
        }
        return ret
    }
}


@objcMembers
@objc(NSCWalletConnectV2Reason)
public class NSCWalletConnectV2Reason: NSObject {
    var reason: Reason
    
    init(reason: Reason) {
        self.reason = reason
    }
    
    var code: Int {
        return reason.code
    }
    
    var message: String {
        return reason.message
    }
}



@objcMembers
@objc(NSCWalletConnectV2RPCID)
public class NSCWalletConnectV2RPCID: NSObject {
    var id: RPCID
    
    init(id: RPCID) {
        self.id = id
    }
    
    public var left: String? {
        return id.left
    }
    
    public var right: Int64? {
        return id.right
    }
    
    public var timestamp: Date {
        return id.timestamp
    }
    
}


@objcMembers
@objc(NSCWalletConnectV2Response)
public class NSCWalletConnectV2Response: NSObject {
    var response: Response
    
    init(response: Response) {
        self.response = response
    }
    
    public var id: NSCWalletConnectV2RPCID {
        get {return NSCWalletConnectV2RPCID(id: response.id)}
    }
    
    public var topic: String {
        get {return response.topic}
    }
    
    public var chainId: String? {
        get {return response.chainId}
    }
    
    
    @nonobjc var _result: NSCWalletConnectV2Codable? = nil
    public var result: NSCWalletConnectV2Codable {
        if(_result == nil){
            _result = NSCWalletConnectV2Codable(value: response.result.value)
        }
        return _result!
    }
}

@objcMembers
@objc(NSCWalletConnectV2SessionEvent)
public class NSCWalletConnectV2SessionEvent: NSObject {
    var event: Session.Event
    init(event: Session.Event) {
        self.event = event
    }
    
    public var name: String {
        return event.name
    }
    
    @nonobjc var _data: NSCWalletConnectV2Codable? = nil
    public var data: NSCWalletConnectV2Codable {
        if(_data == nil){
            _data = NSCWalletConnectV2Codable(value: event.data)
        }
        return _data!
    }
}

@objcMembers
@objc(NSCWalletConnectV2AuthRequest)
public class NSCWalletConnectV2AuthRequest: NSObject {
    var authRequest: AuthRequest
    init(authRequest: AuthRequest) {
        self.authRequest = authRequest
    }
    
    public var id: NSCWalletConnectV2RPCID {
        return NSCWalletConnectV2RPCID(id: authRequest.id)
    }
    
    public var payload: NSCWalletConnectV2AuthPayload {
        return NSCWalletConnectV2AuthPayload(payload: authRequest.payload)
    }
}


@objcMembers
@objc(NSCWalletConnectV2AuthPayload)
public class NSCWalletConnectV2AuthPayload: NSObject {
    var payload: AuthPayload
    init(payload: AuthPayload) {
        self.payload = payload
    }
    
    public var chainId: String {
        return payload.chainId
    }
    
    public var aud: String {
        return payload.aud
    }
    
    public var domain: String {
        return payload.domain
    }
    
    public var iat: String {
        return payload.iat
    }
    
    public var nonce: String {
        return payload.nonce
    }
    
    public var type: String {
        return payload.type
    }
    
    public var version: String {
        return payload.version
    }
    
    public var nbf: String? {
        return payload.nbf
    }
    public var exp: String? {
        return payload.exp
    }
    public var statement: String? {
        return payload.statement
    }
    public var requestId: String? {
        return payload.requestId
    }
    public var resources: [String]? {
        return payload.resources
    }
}

@objcMembers
@objc(NSCWalletConnectV2Cacao)
public class NSCWalletConnectV2Cacao: NSObject {
    var cacao: Cacao
    init(cacao: Cacao) {
        self.cacao = cacao
    }
    
    public func json() throws -> String {
        return try cacao.json()
    }
    
    public func asJSONEncodedString() throws -> String {
        return try cacao.asJSONEncodedString()
    }
}

@objcMembers
@objc(NSCWalletConnectV2Result)
public class NSCWalletConnectV2Result: NSObject {
    var result: Result<Any, Error>
    init(result: Result<Any, Error>) {
        self.result = result
    }
}

@objcMembers
@objc(NSCWalletConnectV2AuthError)
public class NSCWalletConnectV2AuthError: NSObject {
    var error: AuthError
    init(error: AuthError) {
        self.error = error
    }
    
    public var code: Int {
        return error.code
    }
    
    public var message: String {
        return error.message
    }
}

@objcMembers
@objc(NSCWalletConnectV2RPCResult)
public class NSCWalletConnectV2RPCResult: NSObject {
    var result: RPCResult
    
    init(result: RPCResult) {
        self.result = result
    }
    
    public init(response: NSCWalletConnectV2Codable) {
        self.result = .response(AnyCodable(response))
    }
    
    public init(error code: Int, message: String, data: NSCWalletConnectV2Codable?) {
        var errorData: AnyCodable? = nil
        if(data != nil){
            errorData = AnyCodable(data!)
        }
        self.result = .error(JSONRPCError(code: code, message: message, data: errorData))
    }
}

@objc(NSCWalletConnectV2RejectionReason)
public enum NSCWalletConnectV2RejectionReason: Int32, RawRepresentable {
    case userRejected
    case userRejectedChains
    case userRejectedMethods
    case userRejectedEvents
    
    public typealias RawValue = Int32
    
    public init?(rawValue: Int32) {
        switch(rawValue){
        case 0:
            self = .userRejected
            break
        case 1:
            self = .userRejectedChains
            break
        case 2:
            self = .userRejectedMethods
            break
        case 3:
            self = .userRejectedEvents
            break
        default:
            return nil
        }
    }
    
    public var rawValue: Int32 {
        switch(self){
        case .userRejected:
            return 0
        case .userRejectedChains:
            return 1
        case .userRejectedMethods:
            return 2
        case .userRejectedEvents:
            return 3
        }
    }
    
    var toRejectionReason: RejectionReason {
        switch(self){
        case .userRejected:
            return .userRejected
        case .userRejectedChains:
            return .userRejectedChains
        case .userRejectedMethods:
            return .userRejectedMethods
        case .userRejectedEvents:
            return .userRejectedEvents
        }
    }
}

@objcMembers
@objc(NSCWalletConnectV2RelayProtocolOptions)
public class NSCWalletConnectV2RelayProtocolOptions: NSObject {
    let relay:RelayProtocolOptions
    init(relay: RelayProtocolOptions) {
        self.relay = relay
    }
    
    public var `protocol`: String {return relay.protocol}
    
    public var data: String? {return relay.data}
}


@objcMembers
@objc(NSCWalletConnectV2WalletConnectURI)
public class NSCWalletConnectV2WalletConnectURI: NSObject {
    let uri: WalletConnectURI
    let relay: NSCWalletConnectV2RelayProtocolOptions
    
    init(uri: WalletConnectURI) {
        self.uri = uri
        self.relay = NSCWalletConnectV2RelayProtocolOptions(relay: uri.relay)
    }
    
    public var topic: String {return uri.topic}
    
    public var version: String {return uri.version}
    
    public var symKey: String {return uri.symKey}
    
}

@objcMembers
@objc(NSCWalletConnectV2RequestParams)
public class NSCWalletConnectV2RequestParams: NSObject {
    let params: RequestParams
    
    init(params: RequestParams) {
        self.params = params
    }
    
    public init(_ domain: String, _ chainId: String, _ nonce: String, _ aud: String, _ nbf: String?, _ exp: String?, _ statement: String?, _ requestId: String,_ resources: [String]?) {
        self.params = RequestParams(domain: domain, chainId: chainId, nonce: nonce, aud: aud, nbf: nbf, exp: exp, statement: statement, requestId: requestId, resources: resources)
    }
    
    
    public var domain: String {
        return params.domain
    }
    public var chainId: String {
        return params.chainId
    }
    public var nonce: String {
        return params.nonce
    }
    public var aud: String {
        return params.aud
    }
    public var nbf: String? {
        return params.nbf
    }
    public var exp: String? {
        return params.exp
    }
    public var statement: String? {
        return params.statement
    }
    public var requestId: String? {
        return params.requestId
    }
    public var resources: [String]? {
        return params.resources
    }
}

@objc(NSCWalletConnectV2CacaoSignatureType)
public enum NSCWalletConnectV2CacaoSignatureType: Int32, RawRepresentable {
    case eip191
    case eip1271
    
    public typealias RawValue = Int32
    
    public init?(rawValue: Int32) {
        switch(rawValue){
        case 0:
            self = .eip191
            break
        case 1:
            self = .eip1271
            break
        default:
            return nil
        }
    }
    
    public var rawValue: Int32{
        switch(self){
        case .eip191:
            return 0
        case .eip1271:
            return 1
        }
    }
    
    var intoCacaoSignatureType: CacaoSignatureType {
        switch(self){
        case .eip191:
            return .eip191
        case .eip1271:
            return .eip1271
        }
    }
}


@objcMembers
@objc(NSCWalletConnectV2CacaoSignature)
public class NSCWalletConnectV2CacaoSignature: NSObject {
    let signature: CacaoSignature
    
    init(signature: CacaoSignature) {
        self.signature = signature
    }
    
    public init(t: NSCWalletConnectV2CacaoSignatureType, s: String, m: String?) {
        self.signature = CacaoSignature(t: t.intoCacaoSignatureType, s: s,m: m)
    }
}


@objcMembers
@objc(NSCWalletConnectV2)
public class NSCWalletConnectV2: NSObject {
    static var meta: AppMetadata? = nil
    
    public static func initialize(projectId: String, relayUrl: String?, meta: NSCWalletConnectV2AppMetadata, socketConnectionType: NSCWalletConnectV2ConnectionType){
        Networking.configure(relayHost: relayUrl ?? "relay.walletconnect.com", projectId: projectId, socketFactory: SocketFactory(),socketConnectionType: socketConnectionType.toSocketConnectionType)
        
        Pair.configure(metadata: meta.appMetadata)
        NSCWalletConnectV2.meta = meta.appMetadata
    }
    
    public static func networkConnect(_ callback: (Error?) -> Void){
        do {
            try Networking.instance.connect()
            callback(nil)
        }catch{
            callback(error)
        }
    }
    
    public static func networkDisconnect(_ closeCode: URLSessionWebSocketTask.CloseCode, _ callback: (Error?) -> Void){
        do {
            try Networking.instance.disconnect(closeCode: closeCode)
            callback(nil)
        }catch{
            callback(error)
        }
    }
    
    
    public static func pairConfigure(name: String,
                                     description: String,
                                     url: String,
                                     icons: [String],
                                     redirectNativeLink: String?,
                                     redirectUniversalLink: String?
    ){
        if(redirectNativeLink != nil || redirectUniversalLink != nil){
            self.meta = AppMetadata(name: name, description: description, url: url, icons: icons, redirect: AppMetadata.Redirect(native: redirectNativeLink, universal: redirectUniversalLink))
            Pair.configure(metadata: meta!)
        }else {
            self.meta = AppMetadata(name: name, description: description, url: url, icons: icons)
            Pair.configure(metadata: meta!)
        }
    }
    
    
    public static func pairPair(uri: String, _ callback: @escaping (Error?)-> Void){
        Task {
            do {
                guard let connectUri = WalletConnectURI(string: uri) else {
                    var info: [String: Any] = [:]
                    info[NSLocalizedDescriptionKey] = "Invalid uri"
                    callback(NSError(domain: "NSCWalletConnectV2", code: 1000,userInfo: info) as Error)
                    return
                }
                try await Pair.instance.pair(uri: connectUri)
                callback(nil)
            }catch{
                callback(error)
            }
        }
    }
    
    public static func pairCreate(_ callback: @escaping (NSCWalletConnectV2WalletConnectURI?, Error?)-> Void){
        Task {
            do {
                let uri = try await Pair.instance.create()
                callback(NSCWalletConnectV2WalletConnectURI(uri: uri), nil)
            }catch{
                callback(nil, error)
            }
        }
    }
    
    public static func pairGetPairings() -> [NSCWalletConnectV2Pairing]{
        let pairings = Pair.instance.getPairings()
        return pairings.map { pairing in
            return NSCWalletConnectV2Pairing(pairing: pairing)
        }
    }
    
    public static func pairDisconnect(_ topic: String, _ callback:@escaping (Error?) -> Void){
        Task {
            do {
                try await Pair.instance.disconnect(topic: topic)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func signGetSessions() -> [NSCWalletConnectV2Session]{
        return Sign.instance.getSessions().map { session in
            return NSCWalletConnectV2Session(session: session)
        }
    }
    
    public static func signRequest(_ topic: String, _ method: String, params: NSCWalletConnectV2Codable, chainId: String, _ callback: @escaping (Error?) -> Void){
        guard let blockChain = Blockchain(chainId) else {
            var info: [String: Any] = [:]
            info[NSLocalizedDescriptionKey] = "Invalid chainId"
            
            callback(NSError(domain: "NSCWalletConnectV2", code: 1000,userInfo: info) as Error)
            return
        }
        Task {
            let request = Request(topic: topic, method: method, params: AnyCodable(params), chainId: blockChain)
            do {
                try await Sign.instance.request(params: request)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func signRespond(_ topic: String, _ requestId: NSCWalletConnectV2RPCID, result: NSCWalletConnectV2RPCResult, _ callback: @escaping (Error?) -> Void){
        
        Task {
            do {
                try await Sign.instance.respond(topic: topic, requestId: requestId.id, response: result.result)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    
    public static func signApproveSession(_ proposalId: String, _ namespaces: [String : NSCWalletConnectV2SessionNamespace], _ callback: @escaping (Error?) -> Void){
        
        Task {
            let values = namespaces.mapValues { value in
                value.sessionNamespace
            }
            do {
                try await Sign.instance.approve(proposalId: proposalId, namespaces: values)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func signRejectSession(_ proposalId: String, _ reason: NSCWalletConnectV2RejectionReason, _ callback: @escaping (Error?) -> Void){
        Task {
            do {
                try await Sign.instance.reject(proposalId: proposalId, reason: reason.toRejectionReason)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func signUpdate(_ topic: String, _ namespaces: [String : NSCWalletConnectV2SessionNamespace], _ callback: @escaping (Error?) -> Void){
        Task {
            let values = namespaces.mapValues { value in
                value.sessionNamespace
            }
            do {
                try await Sign.instance.update(topic: topic, namespaces: values)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func signConnect(_ requiredNamespaces: [String : NSCWalletConnectV2ProposalNamespace],_ topic: String, _ callback: @escaping (Error?) -> Void){
        Task {
            let values = requiredNamespaces.mapValues { value in
                value.proposalNamespace
            }
            
            do {
                try await Sign.instance.connect(requiredNamespaces: values, topic: topic)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func signDisconnect(_ topic: String, _ callback: @escaping (Error?) -> Void){
        Task {
            do {
                try await Sign.instance.disconnect(topic: topic)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func signPing(_ topic: String, _ callback: @escaping (String?,Error?) -> Void){
        Task {
            do {
                let _ = Sign.instance.pingResponsePublisher
                    .receive(on: DispatchQueue.main)
                    .sink(receiveValue: { ping in
                        callback(ping,nil)
                    })
                
                try await Sign.instance.ping(topic: topic)
            }catch {
                callback(nil,error)
            }
        }
    }
    
    public static func sessionsPublisher(_ callback: @escaping (NSCWalletConnectV2Session)-> Void) -> NSCWalletConnectV2AnyCancellable {
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionSettlePublisher
            .receive(on: DispatchQueue.main)
            .sink { session in
                callback(NSCWalletConnectV2Session(session: session))
            })
    }
    
    
    public static func sessionProposalPublisher(_ callback: @escaping (NSCWalletConnectV2SessionProposal)-> Void) -> NSCWalletConnectV2AnyCancellable {
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionProposalPublisher
            .receive(on: DispatchQueue.main)
            .sink { proposal in
                callback(NSCWalletConnectV2SessionProposal(proposal: proposal))
            })
    }
    
    
    public static func sessionRequestPublisher(_ callback: @escaping (NSCWalletConnectV2Request)-> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionRequestPublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { request in
                callback(NSCWalletConnectV2Request(request: request))
            }))
    }
    
    
    public static func signSocketConnectionStatusPublisher(_ callback: @escaping (NSCWalletConnectV2SocketConnectionStatus)-> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.socketConnectionStatusPublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { status in
                callback(NSCWalletConnectV2SocketConnectionStatus(status: status))
            }))
    }
    
    
    public static func sessionSettlePublisher(_ callback: @escaping (NSCWalletConnectV2Session) -> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionSettlePublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { session in
                callback(NSCWalletConnectV2Session(session: session))
            }))
    }
    
    public static func sessionDeletePublisher(_ callback:@escaping (String, NSCWalletConnectV2Reason) -> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionDeletePublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { (id, reason) in
                callback(id, NSCWalletConnectV2Reason(reason: reason))
            }))
    }
    
    public static func sessionResponsePublisher(_ callback: @escaping (NSCWalletConnectV2Response) -> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionResponsePublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { response in
                callback(NSCWalletConnectV2Response(response: response))
            }))
    }
    
    public static func sessionRejectionPublisher(_ callback:@escaping (NSCWalletConnectV2SessionProposal, NSCWalletConnectV2Reason) -> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionRejectionPublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { (proposal, reason) in
                callback(NSCWalletConnectV2SessionProposal(proposal: proposal), NSCWalletConnectV2Reason(reason: reason))
            }))
    }
    
    public static func sessionUpdatePublisher(_ callback: @escaping (String, [String: NSCWalletConnectV2SessionNamespace]) -> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionUpdatePublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { (sessionTopic, namespaces: [String : SessionNamespace]) in
                var ret: [String: NSCWalletConnectV2SessionNamespace]  = [:]
                namespaces.forEach { (key, value) in
                    ret[key] = NSCWalletConnectV2SessionNamespace(sessionNamespace: value)
                }
                callback(sessionTopic,ret)
            }))
    }
    
    public static func sessionEventPublisher(_ callback: @escaping (NSCWalletConnectV2SessionEvent, String, String?)->Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionEventPublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { (event, sessionTopic, chainId) in
                callback(NSCWalletConnectV2SessionEvent(event: event), sessionTopic, chainId?.absoluteString)
            }))
    }
    
    public static func sessionExtendPublisher(_ callback:@escaping (String, Date) -> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.sessionExtendPublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { (sessionTopic, date) in
                callback(sessionTopic, date)
            }))
    }
    
    public static func pingResponsePublisher(_ callback: @escaping (String)-> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Sign.instance.pingResponsePublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { ping in
                callback(ping)
            }))
    }
    
    
    public static func authRequestPublisher(_ callback: @escaping (NSCWalletConnectV2AuthRequest)-> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Auth.instance.authRequestPublisher
            .receive(on: DispatchQueue.main)
            .sink { authRequest in
                callback(NSCWalletConnectV2AuthRequest(authRequest: authRequest))
            })
        
    }
    
    public static func authResponsePublisher(_ callback: @escaping (NSCWalletConnectV2RPCID, NSCWalletConnectV2Cacao?, NSCWalletConnectV2AuthError?)-> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Auth.instance.authResponsePublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { (id: RPCID, result: Result<Cacao, AuthError>) in
                switch(result){
                case .success(let success):
                    callback(NSCWalletConnectV2RPCID(id: id), NSCWalletConnectV2Cacao(cacao: success), nil)
                case .failure(let error):
                    callback(NSCWalletConnectV2RPCID(id: id), nil, NSCWalletConnectV2AuthError(error: error))
                }
            }))
    }
    
    public static func authSocketConnectionStatusPublisher(_ callback: @escaping (NSCWalletConnectV2SocketConnectionStatus) -> Void) -> NSCWalletConnectV2AnyCancellable{
        return NSCWalletConnectV2AnyCancellable(anyCancellable: Auth.instance.socketConnectionStatusPublisher
            .receive(on: DispatchQueue.main)
            .sink(receiveValue: { status in
                callback(NSCWalletConnectV2SocketConnectionStatus(status: status))
            }))
        
    }
    
    public static func authFormatMessage(_ payload: NSCWalletConnectV2AuthPayload,_ address: String) throws -> String {
        return try Auth.instance.formatMessage(payload: payload.payload, address: address)
    }
    
    public static func getPendingRequests(_ account: String) throws -> [NSCWalletConnectV2AuthRequest]{
        let requests = try Auth.instance.getPendingRequests(account: Account(account)!)
        return requests.map { request in
            NSCWalletConnectV2AuthRequest(authRequest: request)
        }
    }
    
    public static func authRequest(_ topic: String, params: NSCWalletConnectV2RequestParams, _ callback: @escaping (Error?) -> Void){
        Task {
            do {
                try await Auth.instance.request(params.params, topic: topic)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func authRespond(_ requestId: NSCWalletConnectV2RPCID, signature: NSCWalletConnectV2CacaoSignature, _ account: String, _ callback: @escaping (Error?) -> Void){
        Task {
            do {
                try await Auth.instance.respond(requestId: requestId.id, signature: signature.signature, from: Account(account)!)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func authReject(_ requestId: NSCWalletConnectV2RPCID, _ callback: @escaping (Error?) -> Void){
        Task {
            do {
                try await Auth.instance.reject(requestId: requestId.id)
                callback(nil)
            }catch {
                callback(error)
            }
        }
    }
    
    public static func signerSign(_ payload: NSCWalletConnectV2AuthPayload, _ address: String, _ privateKey: String, _ type: NSCWalletConnectV2CacaoSignatureType) throws -> NSCWalletConnectV2CacaoSignature{
        let signed = try MessageSignerFactory(signerFactory: AuthSignerFactory())
            .create()
            .sign(payload: payload.payload, address: address, privateKey: privateKey.data(using: .utf8)!, type: type.intoCacaoSignatureType)
        return NSCWalletConnectV2CacaoSignature(signature: signed)
    }
    
}
