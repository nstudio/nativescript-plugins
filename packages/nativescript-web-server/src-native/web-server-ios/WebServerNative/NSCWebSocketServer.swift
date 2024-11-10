//
//  NSCWebSocketServer.swift
//  WebServerNative
//
//  Created by Osei Fortune on 03/11/2024.
//

import Foundation


@objc(NSCMessageType)
public enum NSCMessageType: Int, RawRepresentable {
    public typealias RawValue = Int
    case Text
    case Binary
    case Ping
    case Pong
    
    public init?(rawValue: Int) {
        switch rawValue {
        case 0:
            self = .Text
        case 1:
            self = .Binary
        case 2:
            self = .Ping
        case 3:
            self = .Pong
        default:
            return nil
        }
    }
    
    public var rawValue: RawValue {
        switch self {
        case .Text:
            return 0
        case .Binary:
            return 1
        case .Ping:
            return 2
        case .Pong:
            return 3
        }
    }
}

@objc(NSCMessage)
@objcMembers
public class NSCMessage: NSObject {
    var message: OpaquePointer?
    public let type: NSCMessageType
    private var _data: NSData? = nil
    private var _text: String? = nil
    init(message: OpaquePointer? = nil, type: NSCMessageType) {
        self.message = message
        self.type = type
    }
    
    public var text: String? {
        get {
            if(_text == nil){
                let text = webserver_websocket_message_text(message)
                if(text != nil){
                    _text = String(cString: text!)
                }
            }
            return _text
        }
    }
    
    public var data: NSData? {
        get {
            if(_data == nil){
                _data = convertNSCMessageToData(self)
            }
            return _data
        }
    }
    
    deinit {
        if(message != nil){
            webserver_websocket_message_release(message)
            message = nil
        }
    }
}

class NSCMessageCallback: NSObject {
    var server: NSCWebSocketServer
    var callback: (NSCClient,NSCMessage) -> Void
    var current: CFRunLoop
    init(callback: @escaping (NSCClient, NSCMessage) -> Void, server: NSCWebSocketServer) {
        self.callback = callback
        self.server = server
        self.current = CFRunLoopGetCurrent()
    }
    
    func trigger(_ client: NSCClient, _ message: NSCMessage){
        if(current == CFRunLoopGetCurrent()){
            callback(client,message)
             }else {
                 CFRunLoopPerformBlock(current, CFRunLoopMode.defaultMode.rawValue) {
                     self.callback(client,message)
                 }
                 CFRunLoopWakeUp(current)
        }
    }
}

class NSCReasonCallback: NSObject {
    var server: NSCWebSocketServer
    var callback: (NSCClient,UInt16, String?) -> Void
    var current: CFRunLoop
    init(callback: @escaping (NSCClient, UInt16, String?) -> Void, server: NSCWebSocketServer) {
        self.callback = callback
        self.server = server
        self.current = CFRunLoopGetCurrent()
    }
    
    func trigger(_ client: NSCClient, _ code: UInt16, _ description: String?){
        if(current == CFRunLoopGetCurrent()){
            callback(client,code, description)
             }else {
                 CFRunLoopPerformBlock(current, CFRunLoopMode.defaultMode.rawValue) {
                     self.callback(client,code, description)
                 }
                 CFRunLoopWakeUp(current)
        }
    }
}

class NSCStringCallback: NSObject {
    var server: NSCWebSocketServer
    var callback: (NSCClient, String) -> Void
    var current: CFRunLoop
    init(callback: @escaping (NSCClient,String) -> Void, server: NSCWebSocketServer) {
        self.callback = callback
        self.server = server
        self.current = CFRunLoopGetCurrent()
    }
    
    func trigger(_ client: NSCClient, _ data: String){
        if(current == CFRunLoopGetCurrent()){
            callback(client,data)
             }else {
                 CFRunLoopPerformBlock(current, CFRunLoopMode.defaultMode.rawValue) {
                     self.callback(client,data)
                 }
                 CFRunLoopWakeUp(current)
        }
    }
}

class NSCDataCallback: NSObject {
    var server: NSCWebSocketServer
    var callback: (NSCClient, NSData?) -> Void
    var current: CFRunLoop
    init(callback: @escaping (NSCClient,NSData?) -> Void, server: NSCWebSocketServer) {
        self.callback = callback
        self.server = server
        self.current = CFRunLoopGetCurrent()
    }
    
    func trigger(_ client: NSCClient, _ data: NSData?){
        if(current == CFRunLoopGetCurrent()){
            callback(client,data)
             }else {
                 CFRunLoopPerformBlock(current, CFRunLoopMode.defaultMode.rawValue) {
                     self.callback(client,data)
                 }
                 CFRunLoopWakeUp(current)
        }
    }
}


class NSCConnectCallback: NSObject {
    var server: NSCWebSocketServer
    var callback: (NSCClient) -> Void
    var current: CFRunLoop
    init(callback: @escaping (NSCClient) -> Void, server: NSCWebSocketServer) {
        self.callback = callback
        self.server = server
        self.current = CFRunLoopGetCurrent()
    }
    
    
    func trigger(_ client: NSCClient){
        if(current == CFRunLoopGetCurrent()){
            callback(client)
             }else {
                 CFRunLoopPerformBlock(current, CFRunLoopMode.defaultMode.rawValue) {
                     self.callback(client)
                 }
                 CFRunLoopWakeUp(current)
        }
    }
}

@objc(NSCClient)
@objcMembers
public class NSCClient: NSObject {
    private var client: OpaquePointer?
    init(client: OpaquePointer? = nil) {
        self.client = client
    }
    public var id: UInt64 {
        get {
            guard let client = client else {return 0}
            return webserver_websocket_client_id(client)
        }
    }
    deinit {
        if(client != nil){
            webserver_websocket_client_release(client)
            client = nil
        }
    }
}

func convertMessageToData(_ message: OpaquePointer?) -> NSData? {
    guard let message = message else {return nil}
    let message_data = webserver_websocket_message_data(message)
    if(message_data != nil){
        let ptr = UnsafeMutableRawPointer(mutating: message_data!)
        let size = webserver_websocket_message_data_size(message)
        let data = NSData(bytesNoCopy: ptr, length: Int(size)) { _, _ in
            webserver_websocket_message_release(message)
        }
        return data
    }
    return nil
}

func convertNSCMessageToData(_ message: NSCMessage) -> NSData? {
    guard let msg = message.message else {return nil}
    let message_data = webserver_websocket_message_data(msg)
    if(message_data != nil){
        let ptr = UnsafeMutableRawPointer(mutating: message_data!)
        let size = webserver_websocket_message_data_size(msg)
        let msg = Unmanaged.passRetained(message)
        let data = NSData(bytesNoCopy: ptr, length: Int(size)) { _, _ in
            let _ = msg.takeRetainedValue()
        }
        return data
    }
    return nil
}

func convertMessageToString(_ message: OpaquePointer?) -> String? {
    guard let message = message else {return nil}
    guard let message_text = webserver_websocket_message_text(message) else {return nil}
    let text = String(cString: message_text)
    webserver_websocket_message_release(message)
    return text
}

@objcMembers
@objc(NSCWebSocketServer)
public class NSCWebSocketServer: NSObject {
    var server: OpaquePointer?
    var statusCallback: UnsafeRawPointer?
    var clients: [UInt64: NSCClient] = [:]
    var messageCallback: [UInt64: NSCMessageCallback] = [:]
    var dataCallback: [UInt64: NSCDataCallback] = [:]
    var connectCallback: [UInt64: NSCConnectCallback] = [:]
    var disconnectCallback: [UInt64: NSCReasonCallback] = [:]
    var errorCallback: [UInt64: NSCStringCallback] = [:]
    public init(_ logger: Bool, _ path: String, _ maxPayload: Int, _ hostName: String?, _ port: Int16, _ workers: UInt32, _ autoPong: Bool) {
        super.init()
        let cPath = (path as NSString).utf8String!
        
        var options  = CWebSocketServiceOptions(logger: logger, path: cPath, max_payload: maxPayload, host_name: nil, port: port, workers: workers, auto_pong: autoPong)
        
        
        if(hostName != nil){
            let cHostName = (hostName! as NSString).utf8String!
            options.host_name = cHostName
        }
        
        server = webserver_websocket_init(&options)
    }
    
    deinit {
        guard let statusCallback = statusCallback else {
            return
        }
        
        let _ =  Unmanaged<NSCStatusCallback>.fromOpaque(statusCallback).takeRetainedValue()
        
    }
    
    public func send(text: String, id: UInt64){
        let cText = (text as NSString).utf8String!
        webserver_websocket_send_text(server, id, cText)
    }
    
    public func send(binary: NSData, id: UInt64){
        var bytes = binary.bytes
        webserver_websocket_send_binary(server,id,bytes, UInt(binary.length))
    }
    
    public func send(ping: NSData, id: UInt64){
        var bytes = ping.bytes
        webserver_websocket_send_ping(server,id,bytes, UInt(ping.length))
    }
    
    public func sendEmptyPing(id: UInt64){
        webserver_websocket_send_ping(server,id, nil, 0)
    }
    
    public func send(pong: NSData, id: UInt64){
        var bytes = pong.bytes
        webserver_websocket_send_pong(server,id,bytes, UInt(pong.length))
    }
    
    public func sendEmptyPong(id: UInt64){
        webserver_websocket_send_pong(server,id, nil, 0)
    }
    
    
    public func broadcast(_ text: String){
        let cText = (text as NSString).utf8String!
        webserver_websocket_broadcast_text(server, cText)
    }
    
    public func broadcast(binary: NSData){
        var bytes = binary.bytes
        webserver_websocket_broadcast_binary(server,bytes, UInt(binary.length))
    }
    
    public func broadcast(ping: NSData){
        var bytes = ping.bytes
        webserver_websocket_broadcast_ping(server,bytes, UInt(ping.length))
    }
    
    public func broadcastEmptyPing(){
        webserver_websocket_broadcast_ping(server,nil, 0)
    }
    
    public func broadcast(pong: NSData){
        var bytes = pong.bytes
        webserver_websocket_broadcast_pong(server,bytes, UInt(pong.length))
    }
    
    public func broadcastEmptyPong(){
        webserver_websocket_broadcast_pong(server,nil, 0)
    }
    
    public func addOnMessage(_ callback: @escaping (NSCClient, NSCMessage) -> Void) -> UInt64 {
        let data = NSCMessageCallback(callback: callback,  server: self)
        let pointer = Unmanaged.passUnretained(data).toOpaque()
        let id =  webserver_websocket_add_message_callback(server, pointer) { clientId, message, data in
            let type = webserver_websocket_message_type(message)
            var messageType: NSCMessageType? = nil
            if(type == WebsocketMessageType_Text){
                messageType = .Text
            }else if(type == WebsocketMessageType_Binary){
                messageType = .Binary
            }
            
            guard let messageType = messageType else {return}
            
            if(data != nil){
                let cb =  Unmanaged<NSCMessageCallback>.fromOpaque(data!).takeUnretainedValue()
                guard let client = cb.server.clients[clientId] else {
                    // todo query ?
                    return
                }
                let message = NSCMessage(message: message, type: messageType)
                cb.trigger(client,message)
            }
           
        }
        
        messageCallback[id] = data
        return id
    }
    
    public func removeOnMessage(_ id: UInt64){
        webserver_websocket_remove_connect_callback(server, id)
        messageCallback.removeValue(forKey: id)
    }
    
    public func addOnPing(_ callback: @escaping (NSCClient, NSData?) -> Void) -> UInt64 {
        let data = NSCDataCallback(callback: callback, server: self)
        let pointer = Unmanaged.passUnretained(data).toOpaque()
        let current = CFRunLoopGetCurrent()
        let id = webserver_websocket_add_message_callback(server, pointer) { clientId, message, data in
            let type = webserver_websocket_message_type(message)
            if(type == WebsocketMessageType_Ping){
                if(data != nil){
                    let cb =  Unmanaged<NSCDataCallback>.fromOpaque(data!).takeUnretainedValue()
                    let message_data = convertMessageToData(message)
                    guard let client = cb.server.clients[clientId] else {
                        // todo query ?
                        return
                    }
                    
                    cb.trigger(client,message_data)
                }
            }
        }
        
        dataCallback[id] = data
        
        return id
    }
    
    public func removeOnPing(_ id: UInt64){
        webserver_websocket_remove_connect_callback(server, id)
        dataCallback.removeValue(forKey: id)
    }
    
    
    public func addOnPong(_ callback: @escaping (NSCClient, NSData?) -> Void) -> UInt64 {
        let data = NSCDataCallback(callback: callback,  server: self)
        let pointer = Unmanaged.passUnretained(data).toOpaque()
        let id =  webserver_websocket_add_message_callback(server, pointer) {clientId, message, data in
            let type = webserver_websocket_message_type(message)
            if(type == WebsocketMessageType_Pong){
                if(data != nil){
                    let cb =  Unmanaged<NSCDataCallback>.fromOpaque(data!).takeUnretainedValue()
                    let message_data = convertMessageToData(message)
                    guard let client = cb.server.clients[clientId] else {
                        // todo query ?
                        return
                    }
                 
                    cb.trigger(client,message_data)
                  
                }
            }
        }
        
        dataCallback[id] = data
        
        return id
    }
    
    public func removeOnPong(_ id: UInt64){
        webserver_websocket_remove_connect_callback(server, id)
        dataCallback.removeValue(forKey: id)
    }
    
    public func addOnConnect(_ callback: @escaping (NSCClient) -> Void) -> UInt64 {
        let data = NSCConnectCallback(callback: callback, server: self)
        let pointer = Unmanaged.passUnretained(data).toOpaque()
        let id =  webserver_websocket_add_connect_callback(server, pointer) { clientId,data in
            if(data != nil){
                let cb =  Unmanaged<NSCConnectCallback>.fromOpaque(data!).takeUnretainedValue()
                let client = webserver_websocket_client(cb.server.server, clientId)
                guard let client = client else {return}
                let ret = NSCClient(client: client)
                cb.server.clients[clientId] = ret
                cb.trigger(ret)
            }
        }
        
        connectCallback[id] = data
        
        return id
    }
    
    public func removeOnConnect(_ id: UInt64){
        webserver_websocket_remove_connect_callback(server, id)
        connectCallback.removeValue(forKey: id)
    }
    
    
    public func addOnDisconnect(_ callback: @escaping (NSCClient, UInt16, String?) -> Void) -> UInt64 {
        let data = NSCReasonCallback(callback: callback, server: self)
        let pointer = Unmanaged.passUnretained(data).toOpaque()
        let id =  webserver_websocket_add_disconnect_callback(server, pointer) {clientId, reason, data in
            if(data != nil){
                let cb =  Unmanaged<NSCReasonCallback>.fromOpaque(data!).takeUnretainedValue()
                let code = webserver_websocket_reason_code(reason)
                let cDescription = webserver_websocket_reason_description(reason)
                var description: String? = nil
                if(cDescription != nil){
                    description = String(cString: cDescription!)
                    webserver_error_release(cDescription)
                }
                webserver_websocket_reason_release(reason)
                
                guard let client = cb.server.clients[clientId] else {
                    // todo query ?
                    return
                }
                
                cb.trigger(client, code, description)
            }
        }
        
        
        disconnectCallback[id] = data
        
        return id
    }
    
    public func removeOnDisconnect(_ id: UInt64){
        webserver_websocket_remove_disconnect_callback(server, id)
        disconnectCallback.removeValue(forKey: id)
        clients.removeValue(forKey: id)
    }
    
    
    public func addOnError(_ callback: @escaping (NSCClient, String) -> Void) -> UInt64 {
        let data = NSCStringCallback(callback: callback, server: self)
        let pointer = Unmanaged.passUnretained(data).toOpaque()
        let id =  webserver_websocket_add_error_callback(server, pointer) { clientId, error, data in
            if(data != nil && error != nil){
                let error = String(cString: error!)
                let cb =  Unmanaged<NSCStringCallback>.fromOpaque(data!).takeUnretainedValue()
                guard let client = cb.server.clients[clientId] else {
                    // todo query ?
                    return
                }
                cb.trigger(client, error)
            }
        }
        
        errorCallback[id] = data
        
        return id
    }
    
    public func removeOnError(_ id: UInt64){
        webserver_websocket_remove_error_callback(server, id)
        errorCallback.removeValue(forKey: id)
    }
    
    public var status: NSCServerStatus {
        get {
            switch webserver_websocket_status(server) {
            case CWebsocketServerStatus_Inactive:
                return .Inactive
            case CWebsocketServerStatus_Active:
                return .Active
            case CWebsocketServerStatus_Crashed:
                return .Crashed
            case CWebsocketServerStatus_Starting:
                return .Starting
            case CWebsocketServerStatus_Stopping:
                return .Stopping
            default:
                return .Inactive
            }
            
        }
    }
    
    
    public func setStatusChangeCallback(_ callback:((NSCServerStatus) -> Void)?){
        if(statusCallback != nil){
            let _ =  Unmanaged<NSCStatusCallback>.fromOpaque(statusCallback!).takeRetainedValue()
        }
        
        guard let callback = callback else {
            webserver_clear_status_callback(server)
            return
        }
        
        let data = NSCStatusCallback(callback: callback)
      
        let pointer = Unmanaged.passRetained(data).toOpaque()
        statusCallback = pointer.load(as: UnsafeRawPointer.self)
        webserver_set_status_callback(server, pointer) { status, data in
            let cb =  Unmanaged<NSCStatusCallback>.fromOpaque(data!).takeUnretainedValue()
            switch status {
            case CServerStatus_Inactive:
                cb.callback(.Inactive)
                    break
            case CServerStatus_Active:
                cb.callback(.Active)
                    break
            case CServerStatus_Crashed:
                cb.callback(.Crashed)
                    break
            case CServerStatus_Starting:
                cb.callback(.Starting)
                    break
            case CServerStatus_Stopping:
                cb.callback(.Stopping)
                    break
            default:
                cb.callback(.Inactive)
                    break
            }
        }
    }
    
    public func start(_ callback: @escaping (String?) -> Void){
        let data = NSCCallback(callback: callback)
        let pointer = Unmanaged.passRetained(data).toOpaque()
        webserver_websocket_start(server, pointer) { error, data in
            var ret: String? = nil
            if(error != nil){
                ret = String(cString: error!)
                webserver_error_release(error!)
            }
            if(data != nil){
                let cb =  Unmanaged<NSCCallback>.fromOpaque(data!).takeRetainedValue()
                cb.callback(ret)
            }
        }
    }
    
    public func stop(_ wait: Bool, _ callback: @escaping (String?) -> Void){
        let data = NSCCallback(callback: callback)
        let pointer = Unmanaged.passRetained(data).toOpaque()
        webserver_websocket_stop(server, wait, pointer) { error, data in
            var ret: String? = nil
            if(error != nil){
                ret = String(cString: error!)
                webserver_error_release(error!)
            }
            if(data != nil){
                let cb =  Unmanaged<NSCCallback>.fromOpaque(data!).takeRetainedValue()
                cb.callback(ret)
            }
        }
    }
}
