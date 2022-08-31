import Foundation
import WalletConnectSwift



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
    var clientMeta: NSCWalletConnectClientMetaConfig?
}

@objc(NSCTransactionConfig)
@objcMembers
public class NSCTransactionConfig: NSObject {
    var id: Int
    var from: String
    var to: String?
    var nonce: String?
    var gasPrice: String?
    var gas: String?
    var value: String?
    var data: String
    
    public init(_ id: Int, _ from: String, _ value: String, _ data: String) {
        self.id = id
        self.from = from
        self.value = value
        self.data = data
    }
    
    func intoTx() -> Client.Transaction{
        return Client.Transaction(from: from, to: to, data: data, gas: gas, gasPrice: gasPrice, value: value ?? "0x0", nonce: nonce, type: nil, accessList: nil, chainId: nil, maxPriorityFeePerGas: nil, maxFeePerGas: nil)
    }
}

@objc(NSCMessageConfig)
@objcMembers
public class NSCMessageConfig: NSObject {
    var id: Int
    var address: String
    var message: String
    
    public init(_ id: Int, _ address: String, _ message: String) {
        self.id = id
        self.address = address
        self.message = message
    }
}

@objc(NSCPersonalMessageConfig)
@objcMembers
public class NSCPersonalMessageConfig: NSObject {
    var id: Int
    var params: [AnyObject]
    
    public init(_ id: Int, _ params: [AnyObject]) {
        self.id = id
        self.params = params
    }
}


enum NSCParamType: Codable {
    case bool(Bool)
    case string(String)
    case int(Int)
    case double(Double)
    case date(Date)
    case object([String:NSCParamType])
    case array([NSCParamType])
    case null
    
    public init(from decoder: Decoder) throws {
        if let keyedContainer = try? decoder.container(keyedBy: KeyType.self) {
            var result = [String: NSCParamType]()
            for key in keyedContainer.allKeys {
                result[key.stringValue] = try keyedContainer.decode(NSCParamType.self, forKey: key)
            }
            self = .object(result)
        } else if var unkeyedContainer = try? decoder.unkeyedContainer() {
            var result = [NSCParamType]()
            while !unkeyedContainer.isAtEnd {
                let value = try unkeyedContainer.decode(NSCParamType.self)
                result.append(value)
            }
            self = .array(result)
        } else if let singleContainer = try? decoder.singleValueContainer() {
            if let string = try? singleContainer.decode(String.self) {
                self = .string(string)
            } else if let int = try? singleContainer.decode(Int.self) {
                self = .int(int)
            } else if let double = try? singleContainer.decode(Double.self) {
                self = .double(double)
            } else if let bool = try? singleContainer.decode(Bool.self) {
                self = .bool(bool)
            } else if singleContainer.decodeNil() {
                self = .null
            } else {
                let context = DecodingError.Context(codingPath: decoder.codingPath,
                                                    debugDescription: "Value is not a String, Number, Bool or Null")
                throw DecodingError.typeMismatch(NSCParamType.self, context)
            }
        } else {
            let context = DecodingError.Context(codingPath: decoder.codingPath,
                                                debugDescription: "Did not match any container")
            throw DecodingError.typeMismatch(NSCParamType.self, context)
        }
    }
    
    
    func encode(to encoder: Encoder) throws {
        switch(self){
        case .bool(let value):
            var container = encoder.singleValueContainer()
            try container.encode(value)
        case .string(let value):
            var container = encoder.singleValueContainer()
            try container.encode(value)
        case .int(let value):
            var container = encoder.singleValueContainer()
            try container.encode(value)
        case .double(let value):
            var container = encoder.singleValueContainer()
            try container.encode(value)
        case .date(let value):
            var container = encoder.singleValueContainer()
            try container.encode(value)
        case .object(let object):
            var container = encoder.container(keyedBy: KeyType.self)
            for (key, value) in object {
                try container.encode(value, forKey: KeyType(stringValue: key)!)
            }
            
        case .array(let array):
            var container = encoder.unkeyedContainer()
            for value in array {
                try container.encode(value)
            }
        case .null:
            var container = encoder.singleValueContainer()
            try container.encodeNil()
        }
        
    }
}



struct KeyType: CodingKey {
    var stringValue: String

    init?(stringValue: String) {
        self.stringValue = stringValue
        self.intValue = Int(stringValue)
    }

    var intValue: Int?

    init?(intValue: Int) {
        self.intValue = intValue
        self.stringValue = String(describing: intValue)
    }
}

