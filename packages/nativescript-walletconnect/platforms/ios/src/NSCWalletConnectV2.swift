//
//  NSCWalletConnectV2.swift
//
//  Created by Osei Fortune on 09/01/2023.
//  Copyright © 2023 NativeScript. All rights reserved.
//

import Foundation
import WalletConnectSwiftV2
import Combine

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

enum NSCWalletConnectV2CodableValue {
    case String(String)
    case Int(Int)
    case Float(Float)
    case Bool(Bool)
    case Array([NSCWalletConnectV2Codable])
    case Object([NSCWalletConnectV2Codable: NSCWalletConnectV2Codable])
    case Null
}


private struct DynamicCodingKeys: CodingKey {
    var codableKey: NSCWalletConnectV2Codable
    var stringValue: String = ""
    init?(stringValue: String) {
        self.stringValue = stringValue
        codableKey = .init(string: stringValue)
    }

    var intValue: Int?
    init?(intValue: Int) {
        self.intValue = intValue
        codableKey = .init(int: intValue)
    }

    var boolValue: Bool?
    init?(boolValue: Bool) {
        self.boolValue = boolValue
        codableKey = .init(bool: boolValue)
    }

    var floatValue: Float?
    init?(floatValue: Float) {
        self.floatValue = floatValue
        codableKey = .init(float: floatValue)
    }

    var arrayValue: [NSCWalletConnectV2Codable]?
    init?(arrayValue: [NSCWalletConnectV2Codable]) {
        self.arrayValue = arrayValue
        codableKey = .init(array: arrayValue)
    }


    var objectValue: [NSCWalletConnectV2Codable:NSCWalletConnectV2Codable]?
    init?(objectValue: [NSCWalletConnectV2Codable:NSCWalletConnectV2Codable]) {
        self.objectValue = objectValue
        codableKey = .init(object: objectValue)
    }

    init?(codableValue: NSCWalletConnectV2Codable) {
        self.codableKey = codableValue
        switch(codableValue.value){
        case .String(let string):
            self.stringValue = string
        case .Int(let int):
            self.intValue = int
        case .Float(let float):
            self.floatValue = float
        case .Bool(let bool):
            self.boolValue = bool
        case .Array(let array):
            self.arrayValue = array
        case .Object(let object):
            self.objectValue = object
        case .Null:
            return nil
        }
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
        self.cancel()
    }
}

@objcMembers
@objc(NSCWalletConnectV2Codable)
public class NSCWalletConnectV2Codable: NSObject, Codable {
    var value: NSCWalletConnectV2CodableValue = .Null

    public static let Null: NSCWalletConnectV2Codable = .init(value: .Null)

    public init(string: String){
        super.init()
        self.value = .String(string)
    }

    public init(int: Int){
        super.init()
        self.value = .Int(int)
    }

    public init(bool: Bool){
        super.init()
        self.value = .Bool(bool)
    }

    public init(float: Float){
        super.init()
        self.value = .Float(float)
    }

    public init(array: [NSCWalletConnectV2Codable]){
        super.init()
        self.value = .Array(array)
    }

    public init(object: [NSCWalletConnectV2Codable:NSCWalletConnectV2Codable]){
        super.init()
        self.value = .Object(object)
    }

    public init(value: NSCWalletConnectV2Codable){
        super.init()
        self.value = value.value
    }

    static fileprivate func encodeObject(object: [NSCWalletConnectV2Codable:NSCWalletConnectV2Codable], _ container: inout KeyedEncodingContainer<DynamicCodingKeys>) {
        for element in object.enumerated() {
            guard let key = DynamicCodingKeys(codableValue: element.element.key) else {continue}
            do {
                switch(element.element.value.value){
                case .String(let string):
                    try container.encode(string, forKey: key)
                case .Int(let int):
                    try container.encode(int, forKey: key)
                case .Float(let float):
                    try container.encode(float, forKey: key)
                case .Bool(let bool):
                    try container.encode(bool, forKey: key)
                case .Array(let array):
                    var arrayContainer = container.nestedUnkeyedContainer(forKey: key)
                    encodeArray(array: array, &arrayContainer)
                case .Object(let object):
                    var objectContainer = container.nestedContainer(keyedBy: DynamicCodingKeys.self, forKey: key)
                    encodeObject(object: object, &objectContainer)
                case .Null:
                    try container.encodeNil(forKey: key)
                }
            } catch {}
        }

    }

    static fileprivate func encodeArray(array: [NSCWalletConnectV2Codable], _ container: inout UnkeyedEncodingContainer) {
        for item in array {
            do {
                switch(item.value){
                case .String(let string):
                    try container.encode(string)
                case .Int(let int):
                    try container.encode(int)
                case .Float(let float):
                    try container.encode(float)
                case .Bool(let bool):
                    try container.encode(bool)
                case .Array(let array):
                    var arrayContainer = container.nestedUnkeyedContainer()
                    encodeArray(array: array, &arrayContainer)
                case .Object(let object):
                    var objectContainer = container.nestedContainer(keyedBy: DynamicCodingKeys.self)
                    encodeObject(object: object, &objectContainer)
                case .Null:
                    try container.encodeNil()
                }
            } catch {}
        }
    }


    public func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        switch(self.value){
        case .String(let string):
            try container.encode(string)
        case .Int(let int):
            try container.encode(int)
        case .Float(let float):
            try container.encode(float)
        case .Bool(let bool):
            try container.encode(bool)
        case .Array(let array):
            var arrayContainer = encoder.unkeyedContainer()
            NSCWalletConnectV2Codable.encodeArray(array: array, &arrayContainer)
        case .Object(let object):
            var objectContainer = encoder.container(keyedBy: DynamicCodingKeys.self)
            NSCWalletConnectV2Codable.encodeObject(object: object, &objectContainer)
        case .Null:
            try container.encodeNil()
        }

    }

    static let types = [String.self, Int.self, Float.self, Bool.self, Double.self, Array<NSCWalletConnectV2Codable>.self, [NSCWalletConnectV2Codable: NSCWalletConnectV2Codable].self, NSNull.self] as [Any]

    static func parseSingleValue(_ value: SingleValueDecodingContainer) -> NSCWalletConnectV2Codable? {

        if let string = try? value.decode(String.self){
            return NSCWalletConnectV2Codable(string: string)
        }

        if let int = try? value.decode(Int.self){
            return NSCWalletConnectV2Codable(int: int)
        }

        if let float = try? value.decode(Float.self){
            return NSCWalletConnectV2Codable(float: float)
        }

        if let bool = try? value.decode(Bool.self){
            return NSCWalletConnectV2Codable(bool: bool)
        }

        return nil
    }

    static fileprivate func parseObject(_ key: DynamicCodingKeys, _ container: inout KeyedDecodingContainer<DynamicCodingKeys>) -> NSCWalletConnectV2Codable? {
        if let string = try? container.decode(String.self, forKey: key) {
            return NSCWalletConnectV2Codable(string: string)
        }

        if let int = try? container.decode(Int.self, forKey: key) {
            return NSCWalletConnectV2Codable(int: int)
        }


        if let float = try? container.decode(Float.self, forKey: key) {
            return NSCWalletConnectV2Codable(float: float)
        }


        if let bool = try? container.decode(Bool.self, forKey: key) {
            return NSCWalletConnectV2Codable(bool: bool)
        }

        if var object = try? container.nestedContainer(keyedBy: DynamicCodingKeys.self, forKey: key) {

            var values: [NSCWalletConnectV2Codable: NSCWalletConnectV2Codable] = [:]
            object.allKeys.forEach { key in
                guard let parsed = NSCWalletConnectV2Codable.parseObject(key, &object) else {return}
                values[key.codableKey] = parsed
            }

            return NSCWalletConnectV2Codable(object: values)

        }


        if var array = try? container.nestedUnkeyedContainer(forKey: key) {
            let parsedArray =  parseArray(&array)
            guard let value = parsedArray else {return nil}
            return NSCWalletConnectV2Codable(array: value)
        }


        return nil

    }

    static fileprivate func parseArray(_ container: inout UnkeyedDecodingContainer)-> [NSCWalletConnectV2Codable]?{
        let count = container.count ?? 0
        var values: [NSCWalletConnectV2Codable]? = []
        for _ in 0...count {
            let value = parseArrayValue(&container)
            guard let value = value else {continue}
            values?.append(value)
        }
        return values
    }

    static fileprivate func parseArrayValue(_ container: inout UnkeyedDecodingContainer) -> NSCWalletConnectV2Codable? {

        if let string = try? container.decode(String.self) {
            return NSCWalletConnectV2Codable(string: string)
        }

        if let int = try? container.decode(Int.self) {
            return NSCWalletConnectV2Codable(int: int)
        }


        if let float = try? container.decode(Float.self) {
            return NSCWalletConnectV2Codable(float: float)
        }


        if let bool = try? container.decode(Bool.self) {
            return NSCWalletConnectV2Codable(bool: bool)
        }

        if var object = try? container.nestedContainer(keyedBy: DynamicCodingKeys.self) {
            var values: [NSCWalletConnectV2Codable: NSCWalletConnectV2Codable] = [:]
            object.allKeys.forEach { key in
                guard let parsed = NSCWalletConnectV2Codable.parseObject(key, &object) else {return}
                values[key.codableKey] = parsed
            }

            return NSCWalletConnectV2Codable(object: values)

        }

        if var array = try? container.nestedUnkeyedContainer() {
            let parsedArray =  parseArray(&array)
            guard let value = parsedArray else {return nil}
            return NSCWalletConnectV2Codable(array: value)
        }

        return nil
    }


    public required init(from decoder: Decoder) throws {

        if let single = try? decoder.singleValueContainer() {
            let parsed = NSCWalletConnectV2Codable.parseSingleValue(single)
            if(parsed != nil){
                self.value = parsed!.value
                return
            }
        }

        if var object = try? decoder.container(keyedBy: DynamicCodingKeys.self) {
            var values: [NSCWalletConnectV2Codable: NSCWalletConnectV2Codable] = [:]
            object.allKeys.forEach { key in
                guard let parsed = NSCWalletConnectV2Codable.parseObject(key, &object) else {return}
                values[key.codableKey] = parsed
            }
            self.value = .Object(values)
            return
        }

        if var array = try? decoder.unkeyedContainer() {
            let value = NSCWalletConnectV2Codable.parseArray(&array)
            if(value != nil){
                self.value = .Array(value!)
                return
            }
        }

        throw NSCWalletConnectV2CodableError.missingValue
    }
}


@objcMembers
@objc(NSCWalletConnectV2ProposalNamespace)
public class NSCWalletConnectV2ProposalNamespace: NSObject {
    var proposalNamespace: ProposalNamespace
    init(proposalNamespace: ProposalNamespace) {
        self.proposalNamespace = proposalNamespace
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
            do {
                let decoder = try JSONEncoder().encode(request.params)
                _params = try JSONDecoder().decode(NSCWalletConnectV2Codable.self, from: decoder)
            }catch {}
        }
        return _params ?? .Null
    }
}

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
@objc(NSCWalletConnectV2SessionExtension)
public class NSCWalletConnectV2SessionExtension: NSObject {
    var sessionExtension: SessionNamespace.Extension

    init(sessionExtension: SessionNamespace.Extension) {
        self.sessionExtension = sessionExtension
    }

    public var accounts: Set<Account> {
        return sessionExtension.accounts
    }

    public var events: Set<String> {
        return sessionExtension.events
    }

    public var methods: Set<String> {
        return sessionExtension.methods
    }
}


@objcMembers
@objc(NSCWalletConnectV2SessionNamespace)
public class NSCWalletConnectV2SessionNamespace: NSObject {


    var sessionNamespace: SessionNamespace
    init(sessionNamespace: SessionNamespace) {
        self.sessionNamespace = sessionNamespace
    }

    public var accounts: Set<Account> {
        return sessionNamespace.accounts
    }

    public var events: Set<String> {
        return sessionNamespace.events
    }

    public var methods: Set<String> {
        return sessionNamespace.methods
    }

    public var extensions: [NSCWalletConnectV2SessionExtension]? {
        guard let extensions  = sessionNamespace.extensions else {return nil}

        return extensions.map { ext in
            NSCWalletConnectV2SessionExtension(sessionExtension: ext)
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
            do {
                let decoder = try JSONEncoder().encode(response.result.value)
                _result = try JSONDecoder().decode(NSCWalletConnectV2Codable.self, from: decoder)
            }catch {}
        }
        return _result ?? .Null
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
            do {
                let decoder = try JSONEncoder().encode(event.data)
                _data = try JSONDecoder().decode(NSCWalletConnectV2Codable.self, from: decoder)
            }catch {}
        }
        return _data ?? .Null
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
}
