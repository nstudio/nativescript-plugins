import Foundation
import WalletConnectSwift


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