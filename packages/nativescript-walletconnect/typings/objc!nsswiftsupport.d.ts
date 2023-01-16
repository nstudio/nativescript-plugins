
declare class NSCWalletConnectV2 extends NSObject {

  static alloc(): NSCWalletConnectV2; // inherited from NSObject

  static authRequestPublisher(callback: (p1: NSCWalletConnectV2AuthRequest) => void): NSCWalletConnectV2AnyCancellable;

  static authResponsePublisher(callback: (p1: NSCWalletConnectV2RPCID, p2: NSCWalletConnectV2Cacao, p3: NSCWalletConnectV2AuthError) => void): NSCWalletConnectV2AnyCancellable;

  static authSocketConnectionStatusPublisher(callback: (p1: NSCWalletConnectV2SocketConnectionStatus) => void): NSCWalletConnectV2AnyCancellable;

  static initializeWithProjectIdRelayUrlMetaSocketConnectionType(projectId: string, relayUrl: string, meta: NSCWalletConnectV2AppMetadata, socketConnectionType: NSCWalletConnectV2ConnectionType): void;

  static networkConnect(callback: (p1: NSError) => void): void;

  static networkDisconnect(closeCode: NSURLSessionWebSocketCloseCode, callback: (p1: NSError) => void): void;

  static new(): NSCWalletConnectV2; // inherited from NSObject

  static pairConfigureWithNameDescriptionUrlIconsRedirectNativeLinkRedirectUniversalLink(name: string, description: string, url: string, icons: NSArray<string> | string[], redirectNativeLink: string, redirectUniversalLink: string): void;

  static pairCreate(callback: (p1: NSCWalletConnectV2WalletConnectURI, p2: NSError) => void): void;

  static pairDisconnect(topic: string, callback: (p1: NSError) => void): void;

  static pairGetPairings(): NSArray<NSCWalletConnectV2Pairing>;

  static pairPairWithUri(uri: string, callback: (p1: NSError) => void): void;

  static pingResponsePublisher(callback: (p1: string) => void): NSCWalletConnectV2AnyCancellable;

  static sessionDeletePublisher(callback: (p1: string, p2: NSCWalletConnectV2Reason) => void): NSCWalletConnectV2AnyCancellable;

  static sessionEventPublisher(callback: (p1: NSCWalletConnectV2SessionEvent, p2: string, p3: string) => void): NSCWalletConnectV2AnyCancellable;

  static sessionExtendPublisher(callback: (p1: string, p2: Date) => void): NSCWalletConnectV2AnyCancellable;

  static sessionProposalPublisher(callback: (p1: NSCWalletConnectV2SessionProposal) => void): NSCWalletConnectV2AnyCancellable;

  static sessionRejectionPublisher(callback: (p1: NSCWalletConnectV2SessionProposal, p2: NSCWalletConnectV2Reason) => void): NSCWalletConnectV2AnyCancellable;

  static sessionRequestPublisher(callback: (p1: NSCWalletConnectV2Request) => void): NSCWalletConnectV2AnyCancellable;

  static sessionResponsePublisher(callback: (p1: NSCWalletConnectV2Response) => void): NSCWalletConnectV2AnyCancellable;

  static sessionSettlePublisher(callback: (p1: NSCWalletConnectV2Session) => void): NSCWalletConnectV2AnyCancellable;

  static sessionUpdatePublisher(callback: (p1: string, p2: NSDictionary<string, NSCWalletConnectV2SessionNamespace>) => void): NSCWalletConnectV2AnyCancellable;

  static signApproveSession(proposalId: string, namespaces: NSDictionary<string, NSCWalletConnectV2SessionNamespace>, callback: (p1: NSError) => void): void;

  static signConnect(requiredNamespaces: NSDictionary<string, NSCWalletConnectV2ProposalNamespace>, topic: string, callback: (p1: NSError) => void): void;

  static signDisconnect(topic: string, callback: (p1: NSError) => void): void;

  static signPing(topic: string, callback: (p1: string, p2: NSError) => void): void;

  static signRejectSession(proposalId: string, reason: NSCWalletConnectV2RejectionReason, callback: (p1: NSError) => void): void;

  static signRequestParamsChainId(topic: string, method: string, params: NSCWalletConnectV2Codable, chainId: string, callback: (p1: NSError) => void): void;

  static signRespondResult(topic: string, requestId: NSCWalletConnectV2RPCID, result: NSCWalletConnectV2RPCResult, callback: (p1: NSError) => void): void;

  static signSocketConnectionStatusPublisher(callback: (p1: NSCWalletConnectV2SocketConnectionStatus) => void): NSCWalletConnectV2AnyCancellable;

  static signUpdate(topic: string, namespaces: NSDictionary<string, NSCWalletConnectV2SessionNamespace>, callback: (p1: NSError) => void): void;
}

declare class NSCWalletConnectV2AnyCancellable extends NSObject {

  static alloc(): NSCWalletConnectV2AnyCancellable; // inherited from NSObject

  static new(): NSCWalletConnectV2AnyCancellable; // inherited from NSObject

  cancel(): void;
}

declare class NSCWalletConnectV2AppMetadata extends NSObject {

  static alloc(): NSCWalletConnectV2AppMetadata; // inherited from NSObject

  static new(): NSCWalletConnectV2AppMetadata; // inherited from NSObject

  readonly desc: string;

  readonly icons: NSArray<string>;

  readonly name: string;

  readonly redirectNativeLink: string;

  readonly redirectUniversalLink: string;

  readonly url: string;

  constructor(o: { description: string; url: string; icons: NSArray<string> | string[]; name: string; redirect: string; redirectUniversal: string; });

  initWithDescriptionUrlIconsNameRedirectRedirectUniversal(description: string, url: string, icons: NSArray<string> | string[], name: string, redirect: string, redirectUniversal: string): this;
}

declare class NSCWalletConnectV2AuthError extends NSObject {

  static alloc(): NSCWalletConnectV2AuthError; // inherited from NSObject

  static new(): NSCWalletConnectV2AuthError; // inherited from NSObject

  readonly code: number;

  readonly message: string;
}

declare class NSCWalletConnectV2AuthPayload extends NSObject {

  static alloc(): NSCWalletConnectV2AuthPayload; // inherited from NSObject

  static new(): NSCWalletConnectV2AuthPayload; // inherited from NSObject

  readonly aud: string;

  readonly chainId: string;

  readonly domain: string;

  readonly exp: string;

  readonly iat: string;

  readonly nbf: string;

  readonly nonce: string;

  readonly requestId: string;

  readonly resources: NSArray<string>;

  readonly statement: string;

  readonly type: string;

  readonly version: string;
}

declare class NSCWalletConnectV2AuthRequest extends NSObject {

  static alloc(): NSCWalletConnectV2AuthRequest; // inherited from NSObject

  static new(): NSCWalletConnectV2AuthRequest; // inherited from NSObject

  readonly id: NSCWalletConnectV2RPCID;

  readonly payload: NSCWalletConnectV2AuthPayload;
}

declare class NSCWalletConnectV2Cacao extends NSObject {

  static alloc(): NSCWalletConnectV2Cacao; // inherited from NSObject

  static new(): NSCWalletConnectV2Cacao; // inherited from NSObject
}

declare class NSCWalletConnectV2Codable extends NSObject {

  static alloc(): NSCWalletConnectV2Codable; // inherited from NSObject

  static new(): NSCWalletConnectV2Codable; // inherited from NSObject

  readonly arrayValue: NSArray<NSCWalletConnectV2Codable>;

  readonly boolValue: boolean;

  readonly floatValue: number;

  readonly intValue: number;

  readonly objectValue: NSDictionary<NSCWalletConnectV2Codable, NSCWalletConnectV2Codable>;

  readonly stringValue: string;

  readonly type: NSCWalletConnectV2CodableValueType;

  static readonly Null: NSCWalletConnectV2Codable;

  static readonly types: NSArray<any>;

  constructor(o: { array: NSArray<NSCWalletConnectV2Codable> | NSCWalletConnectV2Codable[]; });

  constructor(o: { bool: boolean; });

  constructor(o: { float: number; });

  constructor(o: { int: number; });

  constructor(o: { object: NSDictionary<NSCWalletConnectV2Codable, NSCWalletConnectV2Codable>; });

  constructor(o: { string: string; });

  constructor(o: { value: NSCWalletConnectV2Codable; });

  initWithArray(array: NSArray<NSCWalletConnectV2Codable> | NSCWalletConnectV2Codable[]): this;

  initWithBool(bool_: boolean): this;

  initWithFloat(float_: number): this;

  initWithInt(int_: number): this;

  initWithObject(object: NSDictionary<NSCWalletConnectV2Codable, NSCWalletConnectV2Codable>): this;

  initWithString(string: string): this;

  initWithValue(value: NSCWalletConnectV2Codable): this;
}

declare const enum NSCWalletConnectV2CodableValueType {

  String = 0,

  Int = 1,

  Float = 2,

  Bool = 3,

  Array = 4,

  Object = 5,

  Null = 6
}

declare const enum NSCWalletConnectV2ConnectionType {

  Auto = 0,

  Manual = 1
}

declare class NSCWalletConnectV2Pairing extends NSObject {

  static alloc(): NSCWalletConnectV2Pairing; // inherited from NSObject

  static new(): NSCWalletConnectV2Pairing; // inherited from NSObject

  readonly expiryDate: Date;

  readonly peer: NSCWalletConnectV2AppMetadata;

  readonly topic: string;
}

declare class NSCWalletConnectV2ProposalNamespace extends NSObject {

  static alloc(): NSCWalletConnectV2ProposalNamespace; // inherited from NSObject

  static new(): NSCWalletConnectV2ProposalNamespace; // inherited from NSObject

  readonly chains: NSArray<string>;

  readonly events: NSArray<string>;

  readonly extensions: NSArray<NSCWalletConnectV2ProposalNamespaceExtension>;

  readonly methods: NSArray<string>;
}

declare class NSCWalletConnectV2ProposalNamespaceExtension extends NSObject {

  static alloc(): NSCWalletConnectV2ProposalNamespaceExtension; // inherited from NSObject

  static new(): NSCWalletConnectV2ProposalNamespaceExtension; // inherited from NSObject

  readonly chains: NSArray<string>;

  readonly events: NSArray<string>;

  readonly methods: NSArray<string>;
}

declare class NSCWalletConnectV2RPCID extends NSObject {

  static alloc(): NSCWalletConnectV2RPCID; // inherited from NSObject

  static new(): NSCWalletConnectV2RPCID; // inherited from NSObject

  readonly left: string;

  readonly timestamp: Date;
}

declare class NSCWalletConnectV2RPCResult extends NSObject {

  static alloc(): NSCWalletConnectV2RPCResult; // inherited from NSObject

  static new(): NSCWalletConnectV2RPCResult; // inherited from NSObject

  constructor(o: { error: number; message: string; data: NSCWalletConnectV2Codable; });

  constructor(o: { response: NSCWalletConnectV2Codable; });

  initWithErrorMessageData(code: number, message: string, data: NSCWalletConnectV2Codable): this;

  initWithResponse(response: NSCWalletConnectV2Codable): this;
}

declare class NSCWalletConnectV2Reason extends NSObject {

  static alloc(): NSCWalletConnectV2Reason; // inherited from NSObject

  static new(): NSCWalletConnectV2Reason; // inherited from NSObject

  readonly code: number;

  readonly message: string;
}

declare const enum NSCWalletConnectV2RejectionReason {

  UserRejected = 0,

  UserRejectedChains = 1,

  UserRejectedMethods = 2,

  UserRejectedEvents = 3
}

declare class NSCWalletConnectV2RelayProtocolOptions extends NSObject {

  static alloc(): NSCWalletConnectV2RelayProtocolOptions; // inherited from NSObject

  static new(): NSCWalletConnectV2RelayProtocolOptions; // inherited from NSObject

  readonly data: string;

  readonly protocol: string;
}

declare class NSCWalletConnectV2Request extends NSObject {

  static alloc(): NSCWalletConnectV2Request; // inherited from NSObject

  static new(): NSCWalletConnectV2Request; // inherited from NSObject

  readonly chainId: string;

  readonly id: NSCWalletConnectV2RPCID;

  readonly method: string;

  readonly params: NSCWalletConnectV2Codable;

  readonly topic: string;

  constructor(o: { topic: string; method: string; params: NSCWalletConnectV2Codable; chainId: string; });

  initWithTopicMethodParamsChainId(topic: string, method: string, params: NSCWalletConnectV2Codable, chainId: string): this;
}

declare class NSCWalletConnectV2Response extends NSObject {

  static alloc(): NSCWalletConnectV2Response; // inherited from NSObject

  static new(): NSCWalletConnectV2Response; // inherited from NSObject

  readonly chainId: string;

  readonly id: NSCWalletConnectV2RPCID;

  readonly result: NSCWalletConnectV2Codable;

  readonly topic: string;
}

declare class NSCWalletConnectV2Result extends NSObject {

  static alloc(): NSCWalletConnectV2Result; // inherited from NSObject

  static new(): NSCWalletConnectV2Result; // inherited from NSObject
}

declare class NSCWalletConnectV2Session extends NSObject {

  static alloc(): NSCWalletConnectV2Session; // inherited from NSObject

  static new(): NSCWalletConnectV2Session; // inherited from NSObject

  readonly expiryDate: Date;

  readonly namespaces: NSDictionary<string, NSCWalletConnectV2SessionNamespace>;

  readonly peer: NSCWalletConnectV2AppMetadata;

  readonly topic: string;
}

declare class NSCWalletConnectV2SessionEvent extends NSObject {

  static alloc(): NSCWalletConnectV2SessionEvent; // inherited from NSObject

  static new(): NSCWalletConnectV2SessionEvent; // inherited from NSObject

  readonly data: NSCWalletConnectV2Codable;

  readonly name: string;
}

declare class NSCWalletConnectV2SessionExtension extends NSObject {

  static alloc(): NSCWalletConnectV2SessionExtension; // inherited from NSObject

  static new(): NSCWalletConnectV2SessionExtension; // inherited from NSObject

  readonly events: NSSet<string>;

  readonly methods: NSSet<string>;
}

declare class NSCWalletConnectV2SessionNamespace extends NSObject {

  static alloc(): NSCWalletConnectV2SessionNamespace; // inherited from NSObject

  static new(): NSCWalletConnectV2SessionNamespace; // inherited from NSObject

  readonly events: NSSet<string>;

  readonly extensions: NSArray<NSCWalletConnectV2SessionExtension>;

  readonly methods: NSSet<string>;
}

declare class NSCWalletConnectV2SessionProposal extends NSObject {

  static alloc(): NSCWalletConnectV2SessionProposal; // inherited from NSObject

  static new(): NSCWalletConnectV2SessionProposal; // inherited from NSObject

  readonly id: string;

  readonly proposer: NSCWalletConnectV2AppMetadata;

  readonly requiredNamespaces: NSDictionary<string, NSCWalletConnectV2ProposalNamespace>;
}

declare const enum NSCWalletConnectV2SocketConnectionStatus {

  Connected = 0,

  Disconnected = 1
}

declare class NSCWalletConnectV2WalletConnectURI extends NSObject {

  static alloc(): NSCWalletConnectV2WalletConnectURI; // inherited from NSObject

  static new(): NSCWalletConnectV2WalletConnectURI; // inherited from NSObject

  readonly relay: NSCWalletConnectV2RelayProtocolOptions;

  readonly symKey: string;

  readonly topic: string;

  readonly version: string;
}
