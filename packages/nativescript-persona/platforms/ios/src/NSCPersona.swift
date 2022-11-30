import Foundation
import UIKit
import Persona2


@objc(NSCPersonaEnvironment)
public enum NSCPersonaEnvironment: Int, RawRepresentable {
    public typealias RawValue = Int
    case Sandbox
    case Production
    
    func toEnv()-> Environment {
        if(self == .Production){
            return .production
        }
        
        return .sandbox
    }
}


@objc(NSCInquiryField)
@objcMembers
public class NSCInquiryField: NSObject {
    private var field: InquiryField
    public init(field: InquiryField) {
        self.field = field
    }
    
    var type: String {
        get {
            switch(field){
            case .string(_):
                return "string"
            case .int(_):
                return "int"
            case .float(_):
                return "float"
            case .bool(_):
                return "boolean"
            case .date(_):
                return "date"
            case .datetime(_):
                return "datetime"
            case .unknown:
                return "unknown"
            }
        }
    }
    
    var value: Any? {
        get {
            switch(field){
            case .string(let ret):
                return ret
            case .int(let ret):
                return ret
            case .float(let ret):
                return ret
            case .bool(let ret):
                return ret
            case .date(let ret):
                return ret
            case .datetime(let ret):
                return ret
            case .unknown:
                return nil
            }
        }
    }
}

@objc(NSCPersona)
@objcMembers
public class NSCPersona: NSObject, InquiryDelegate {
    
    public func inquiryComplete(inquiryId: String, status: String, fields: [String : InquiryField]) {
        
        let ret = fields.mapValues {
            NSCInquiryField(field: $0)
        }
        onCompleteCallback?(inquiryId, status, ret as NSDictionary)
    }
    
    public func inquiryCanceled(inquiryId: String?, sessionToken: String?) {
        onCancelCallback?(inquiry, sessionToken)
    }
    
    public func inquiryError(_ error: Error) {
        onErrorCallback?(error as NSError)
    }
    
    private var inquiryInstance: Inquiry?
    private var template: String?
    private var templateVersion: String?
    private var inquiry: String?
    private var accountId: String?
    private var referenceId: String?
    private var sessionToken: String?
    private var environment: NSCPersonaEnvironment? = nil
    private var theme: InquiryTheme? = nil
    private var fields: [String : InquiryField]? = nil
    
    private var onCompleteCallback: ((String, String, NSDictionary) -> Void)? = nil
    
    private var onCancelCallback: ((String?, String?) -> Void)? = nil
    
    private var onErrorCallback: ((NSError) -> Void)? = nil
    
    
    var configuration: InquiryConfiguration?
    
    private init(template: String?) {
        self.template = template
    }
    
    private init(templateVersion: String?) {
        self.templateVersion = templateVersion
    }
    
    private init(inquiry: String?) {
        self.inquiry = inquiry
    }
    public static func fromTemplate(template: String) -> NSCPersona {
        return NSCPersona(template: template)
    }
    
    public static func fromTemplateVersion(templateVersion: String) -> NSCPersona {
        return NSCPersona(templateVersion: templateVersion)
    }
    
    public static func fromInquiry(inquiry: String) -> NSCPersona {
        return NSCPersona(inquiry: inquiry)
    }
    
    
    public func environment(_ value: NSCPersonaEnvironment) -> Self {
        environment = value
        return self
    }
    
    public func accountId(_ id: String) -> Self {
        accountId = id
        return self
    }
    
    public func referenceId(_ id: String) -> Self {
        referenceId = id
        return self
    }
    
    public func sessionToken(_ token: String) -> Self {
        sessionToken = token
        return self
    }
    
    public func fields(_ fields: NSDictionary) -> Self {
        var values: [String : InquiryField] = [:]
        for field in fields {
            if(field.value is Bool){
                values[field.key as! String] =  InquiryField.bool(field.value as? Bool)
            }else if(field.value is Int){
                values[field.key as! String] =  InquiryField.int(field.value as? Int)
            }else if(field.value is Float){
                values[field.key as! String] =  InquiryField.float(field.value as? Float)
            }else if(field.value is String){
                values[field.key as! String] =  InquiryField.string(field.value as? String)
            }else if(field.value is Date){
                values[field.key as! String] =  InquiryField.date(field.value as? Date)
            }else{
                values[field.key as! String] =  InquiryField.unknown
            }
        }
        
        if(!values.isEmpty){
            self.fields = values
        }
        return self
    }
    
    public func onComplete(_ complete: ((String, String, NSDictionary) -> Void)?) -> Self {
        self.onCompleteCallback = complete
        return self
    }
    
    public func onCancel(_ cancel: ((String?, String?) -> Void)?) -> Self {
        self.onCancelCallback = cancel
        return self
    }
    
    public func onError(_ error: ((NSError) -> Void)?) -> Self {
        self.onErrorCallback = error
        return self
    }
    
    public func build() -> Self {
        if(inquiry != nil){
            self.configuration = InquiryConfiguration(inquiryId: inquiry!, sessionToken: sessionToken, theme: theme)
            return self
        }else if(template != nil){
            if(accountId != nil){
                self.configuration = InquiryConfiguration(templateId: template!, accountId: accountId!, environment: environment?.toEnv(), fields: fields, theme: theme)
            }else if(referenceId != nil){
                self.configuration =  InquiryConfiguration(templateId: template!, referenceId: referenceId!, environment: environment?.toEnv(), fields: fields, theme: theme)
            }else if(environment != nil){
                if(fields != nil){
                    self.configuration = InquiryConfiguration(templateId: template!, environment: environment?.toEnv(), fields: fields)
                }else {
                    self.configuration = InquiryConfiguration(templateId: template!, environment: environment?.toEnv())
                }
                
            }else{
                self.configuration = InquiryConfiguration(templateId: template!)
            }
            return self
        }else if(templateVersion != nil){
            if(accountId != nil){
                self.configuration = InquiryConfiguration(templateVersion: templateVersion!, accountId: accountId!, environment: environment?.toEnv(), fields: fields, theme: theme)
            }else if(referenceId != nil){
                self.configuration =  InquiryConfiguration(templateVersion: templateVersion!, referenceId: referenceId!, environment: environment?.toEnv(), fields: fields, theme: theme)
            }else if(environment != nil) {
                if(fields != nil){
                    self.configuration = InquiryConfiguration(templateVersion: templateVersion!, environment: environment?.toEnv(), fields: fields)
                }else {
                    self.configuration = InquiryConfiguration(templateVersion: templateVersion!, environment: environment?.toEnv())
                }
            }else {
                self.configuration = InquiryConfiguration(templateVersion: templateVersion!)
            }
            return self
        }
        
        return self
    }
    
    public func start(_ controller: UIViewController) {
        self.inquiryInstance = Inquiry(config: configuration!, delegate: self)
        self.inquiryInstance?.start(from: controller)
        
    }
    
    
}
