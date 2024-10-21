//
//  NSCServer.swift
//  WebServerNative
//
//  Created by Osei Fortune on 20/10/2024.
//

import Foundation


@objc(NSCServerStatus)
public enum NSCServerStatus: Int, RawRepresentable {
    public typealias RawValue = Int
    case Inactive
    case Active
    case Crashed
    case Starting
    case Stopping
    
    public init?(rawValue: Int) {
        switch rawValue {
        case 0:
            self = NSCServerStatus.Inactive
        case 1:
            self = NSCServerStatus.Active
        case 2:
            self = NSCServerStatus.Crashed
        case 3:
            self = NSCServerStatus.Starting
        case 4:
            self = NSCServerStatus.Stopping
        default:
            return nil
        }
    }
    
    public var rawValue: RawValue {
        switch self {
        case .Inactive:
            return 0
        case .Active:
            return 1
        case .Crashed:
            return 2
        case .Starting:
            return 3
        case .Stopping:
            return 4
        }
    }
}


class NSCCallback: NSObject {
    var callback: (String?) -> Void
    init(callback: @escaping (String?) -> Void) {
        self.callback = callback
    }
}

class NSCStatusCallback: NSObject {
    var callback: (NSCServerStatus) -> Void
    init(callback: @escaping (NSCServerStatus) -> Void) {
        self.callback = callback
    }
}


@objcMembers
@objc(NSCServer)
public class NSCServer: NSObject {
    var server: OpaquePointer?
    var statusCallback: UnsafeRawPointer?
    public init(_ logger: Bool, _ path: String, _ directory: String, _ index: String?, _ hostName: String?, _ port: Int16, _ workers: UInt32, _ showFiles: Bool) {
        super.init()
        let cPath = (path as NSString).utf8String!
        let cDirectory = (directory as NSString).utf8String!
        
        
        var options = CStaticServiceOptions(logger: logger, path: cPath, directory: cDirectory, index: nil, host_name: nil, port: port, workers: workers, show_files: showFiles)
        
        if(index != nil){
            let cIndex = (index! as NSString).utf8String!
            options.index = cIndex
        }
        
        if(hostName != nil){
            let cHostName = (hostName! as NSString).utf8String!
            options.host_name = cHostName
        }
        
        server = webserver_init(&options)
    }
    
    deinit {
        guard let statusCallback = statusCallback else {
            return
        }
        
        let _ =  Unmanaged<NSCStatusCallback>.fromOpaque(statusCallback).takeRetainedValue()
        
    }
    
    public var status: NSCServerStatus {
        get {
            switch webserver_status(server) {
            case CServerStatus_Inactive:
                return .Inactive
            case CServerStatus_Active:
                return .Active
            case CServerStatus_Crashed:
                return .Crashed
            case CServerStatus_Starting:
                return .Starting
            case CServerStatus_Stopping:
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
        webserver_start(server, pointer) { error, data in
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
        webserver_stop(server, wait, pointer) { error, data in
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
