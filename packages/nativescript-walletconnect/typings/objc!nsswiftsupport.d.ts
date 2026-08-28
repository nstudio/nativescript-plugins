declare class NSCWalletConnectV2 extends NSObject {

	static alloc(): NSCWalletConnectV2; // inherited from NSObject

	static authFormatMessageError(payload: NSCWalletConnectV2AuthPayload, address: string): string;

	static authReject(requestId: NSCWalletConnectV2RPCID, callback: (p1: NSError) => void): void;

	static authRequestParams(topic: string, params: NSCWalletConnectV2RequestParams, callback: (p1: NSError) => void): void;

	static authRequestPublisher(callback: (p1: NSCWalletConnectV2AuthRequest) => void): NSCWalletConnectV2AnyCancellable;

	static authRespondSignature(requestId: NSCWalletConnectV2RPCID, signature: NSCWalletConnectV2CacaoSignature, account: string, callback: (p1: NSError) => void): void;

	static authResponsePublisher(callback: (p1: NSCWalletConnectV2RPCID, p2: NSCWalletConnectV2Cacao, p3: NSCWalletConnectV2AuthError) => void): NSCWalletConnectV2AnyCancellable;

	static authSocketConnectionStatusPublisher(callback: (p1: NSCWalletConnectV2SocketConnectionStatus) => void): NSCWalletConnectV2AnyCancellable;

	static getPendingRequestsError(account: string): NSArray<NSCWalletConnectV2AuthRequest>;

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

	static signGetSessions(): NSArray<NSCWalletConnectV2Session>;

	static signPing(topic: string, callback: (p1: string, p2: NSError) => void): void;

	static signRejectSession(proposalId: string, reason: NSCWalletConnectV2RejectionReason, callback: (p1: NSError) => void): void;

	static signRequestParamsChainId(topic: string, method: string, params: NSCWalletConnectV2Codable, chainId: string, callback: (p1: NSError) => void): void;

	static signRespondResult(topic: string, requestId: NSCWalletConnectV2RPCID, result: NSCWalletConnectV2RPCResult, callback: (p1: NSError) => void): void;

	static signSocketConnectionStatusPublisher(callback: (p1: NSCWalletConnectV2SocketConnectionStatus) => void): NSCWalletConnectV2AnyCancellable;

	static signUpdate(topic: string, namespaces: NSDictionary<string, NSCWalletConnectV2SessionNamespace>, callback: (p1: NSError) => void): void;

	static signerSignError(payload: NSCWalletConnectV2AuthPayload, address: string, privateKey: string, type: NSCWalletConnectV2CacaoSignatureType): NSCWalletConnectV2CacaoSignature;
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

	asJSONEncodedStringAndReturnError(): string;

	jsonAndReturnError(): string;
}

declare class NSCWalletConnectV2CacaoSignature extends NSObject {

	static alloc(): NSCWalletConnectV2CacaoSignature; // inherited from NSObject

	static new(): NSCWalletConnectV2CacaoSignature; // inherited from NSObject

	constructor(o: { t: NSCWalletConnectV2CacaoSignatureType; s: string; m: string; });

	initWithTSM(t: NSCWalletConnectV2CacaoSignatureType, s: string, m: string): this;
}

declare const enum NSCWalletConnectV2CacaoSignatureType {

	Eip191 = 0,

	Eip1271 = 1
}

declare class NSCWalletConnectV2Codable extends NSObject {

	static alloc(): NSCWalletConnectV2Codable; // inherited from NSObject

	static new(): NSCWalletConnectV2Codable; // inherited from NSObject

	readonly codableValue: any;

	readonly type: NSCWalletConnectV2CodableValueType;

	constructor(o: { array: NSArray<NSCWalletConnectV2Codable> | NSCWalletConnectV2Codable[]; });

	constructor(o: { bool: boolean; });

	constructor(o: { number: number; });

	constructor(o: { object: NSDictionary<NSCWalletConnectV2Codable, NSCWalletConnectV2Codable>; });

	constructor(o: { string: string; });

	constructor(o: { value: NSCWalletConnectV2Codable; });

	initWithArray(array: NSArray<NSCWalletConnectV2Codable> | NSCWalletConnectV2Codable[]): this;

	initWithBool(bool_: boolean): this;

	initWithNumber(number: number): this;

	initWithObject(object: NSDictionary<NSCWalletConnectV2Codable, NSCWalletConnectV2Codable>): this;

	initWithString(string: string): this;

	initWithValue(value: NSCWalletConnectV2Codable): this;

	json(): string;
}

declare const enum NSCWalletConnectV2CodableValueType {

	String = 0,

	Number = 1,

	Bool = 2,

	Array = 3,

	Object = 4,

	Null = 5
}

declare const enum NSCWalletConnectV2ConnectionType {

	Auto = 0,

	Manual = 1
}

declare class NSCWalletConnectV2ETHSigner extends NSObject {

	static alloc(): NSCWalletConnectV2ETHSigner; // inherited from NSObject

	static dataToHash(message: string): NSArray<number>;

	static dataToPrefix(data: NSData): NSArray<number>;

	static ethSign(privateKey: NSCWalletConnectV2EthereumPrivateKey, params: NSCWalletConnectV2Codable): NSCWalletConnectV2Codable;

	static new(): NSCWalletConnectV2ETHSigner; // inherited from NSObject

	static personalSign(privateKey: NSCWalletConnectV2EthereumPrivateKey, params: NSCWalletConnectV2Codable): NSCWalletConnectV2Codable;

	static sendTransaction(privateKey: NSCWalletConnectV2EthereumPrivateKey, params: NSCWalletConnectV2Codable): NSCWalletConnectV2Codable;

	static signTransaction(privateKey: NSCWalletConnectV2EthereumPrivateKey, params: NSCWalletConnectV2Codable): NSCWalletConnectV2Codable;

	static signTypedData(privateKey: NSCWalletConnectV2EthereumPrivateKey, params: NSCWalletConnectV2Codable): NSCWalletConnectV2Codable;
}

declare class NSCWalletConnectV2EthereumAddress extends NSObject {

	static alloc(): NSCWalletConnectV2EthereumAddress; // inherited from NSObject

	static new(): NSCWalletConnectV2EthereumAddress; // inherited from NSObject

	readonly rawAddress: NSArray<number>;

	hexWithEip55(eip55: boolean): string;
}

declare class NSCWalletConnectV2EthereumPrivateKey extends NSObject {

	static alloc(): NSCWalletConnectV2EthereumPrivateKey; // inherited from NSObject

	static generateKeyAndReturnError(): NSCWalletConnectV2EthereumPrivateKey;

	static new(): NSCWalletConnectV2EthereumPrivateKey; // inherited from NSObject

	readonly address: NSCWalletConnectV2EthereumAddress;

	readonly publicKey: NSCWalletConnectV2EthereumPublicKey;

	readonly rawPrivateKey: NSArray<number>;

	constructor(o: { bytes: NSData; });

	constructor(o: { hexPrivateKey: string; });

	hex(): string;

	initWithBytesError(bytes: NSData): this;

	initWithHexPrivateKeyError(hexPrivateKey: string): this;

	signWithDataError(message: NSData): NSCWalletConnectV2EthereumPrivateKeySignResult;

	signWithDataHashError(_hash: NSData): NSCWalletConnectV2EthereumPrivateKeySignResult;

	signWithHashError(_hash: NSArray<number> | number[]): NSCWalletConnectV2EthereumPrivateKeySignResult;

	signWithMessageError(message: NSArray<number> | number[]): NSCWalletConnectV2EthereumPrivateKeySignResult;
}

declare class NSCWalletConnectV2EthereumPrivateKeySignResult extends NSObject {

	static alloc(): NSCWalletConnectV2EthereumPrivateKeySignResult; // inherited from NSObject

	static new(): NSCWalletConnectV2EthereumPrivateKeySignResult; // inherited from NSObject

	readonly r: NSArray<number>;

	readonly s: NSArray<number>;

	readonly v: number;

	constructor(o: { v: number; r: NSArray<number> | number[]; s: NSArray<number> | number[]; });

	initWithVRS(v: number, r: NSArray<number> | number[], s: NSArray<number> | number[]): this;
}

declare class NSCWalletConnectV2EthereumPublicKey extends NSObject {

	static alloc(): NSCWalletConnectV2EthereumPublicKey; // inherited from NSObject

	static new(): NSCWalletConnectV2EthereumPublicKey; // inherited from NSObject

	readonly address: NSCWalletConnectV2EthereumAddress;

	readonly rawPublicKey: NSArray<number>;

	hex(): string;
}

declare class NSCWalletConnectV2Helpers extends NSObject {

	static alloc(): NSCWalletConnectV2Helpers; // inherited from NSObject

	static new(): NSCWalletConnectV2Helpers; // inherited from NSObject

	static stringToDataWithHex(hex: string): NSData;
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

	constructor(o: { events: NSSet<string>; methods: NSSet<string>; chains: NSSet<string>; extensions: NSArray<NSCWalletConnectV2ProposalNamespaceExtension> | NSCWalletConnectV2ProposalNamespaceExtension[]; });

	initWithEventsMethodsChainsExtensions(events: NSSet<string>, methods: NSSet<string>, chains: NSSet<string>, extensions: NSArray<NSCWalletConnectV2ProposalNamespaceExtension> | NSCWalletConnectV2ProposalNamespaceExtension[]): this;
}

declare class NSCWalletConnectV2ProposalNamespaceExtension extends NSObject {

	static alloc(): NSCWalletConnectV2ProposalNamespaceExtension; // inherited from NSObject

	static new(): NSCWalletConnectV2ProposalNamespaceExtension; // inherited from NSObject

	readonly chains: NSArray<string>;

	readonly events: NSArray<string>;

	readonly methods: NSArray<string>;

	constructor(o: { events: NSSet<string>; methods: NSSet<string>; chains: NSSet<string>; });

	initWithEventsMethodsChains(events: NSSet<string>, methods: NSSet<string>, chains: NSSet<string>): this;
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

declare class NSCWalletConnectV2RequestParams extends NSObject {

	static alloc(): NSCWalletConnectV2RequestParams; // inherited from NSObject

	static new(): NSCWalletConnectV2RequestParams; // inherited from NSObject

	readonly aud: string;

	readonly chainId: string;

	readonly domain: string;

	readonly exp: string;

	readonly nbf: string;

	readonly nonce: string;

	readonly requestId: string;

	readonly resources: NSArray<string>;

	readonly statement: string;

	constructor();

	init(domain: string, chainId: string, nonce: string, aud: string, nbf: string, exp: string, statement: string, requestId: string, resources: NSArray<string> | string[]): this;
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

declare class NSCWalletConnectV2SessionNamespace extends NSObject {

	static alloc(): NSCWalletConnectV2SessionNamespace; // inherited from NSObject

	static new(): NSCWalletConnectV2SessionNamespace; // inherited from NSObject

	readonly accounts: NSSet<string>;

	readonly events: NSSet<string>;

	readonly extensions: NSArray<NSCWalletConnectV2SessionNamespaceExtension>;

	readonly methods: NSSet<string>;

	constructor(o: { accounts: NSSet<string>; events: NSSet<string>; methods: NSSet<string>; extensions: NSArray<NSCWalletConnectV2SessionNamespaceExtension> | NSCWalletConnectV2SessionNamespaceExtension[]; });

	initWithAccountsEventsMethodsExtensions(accounts: NSSet<string>, events: NSSet<string>, methods: NSSet<string>, extensions: NSArray<NSCWalletConnectV2SessionNamespaceExtension> | NSCWalletConnectV2SessionNamespaceExtension[]): this;
}

declare class NSCWalletConnectV2SessionNamespaceExtension extends NSObject {

	static alloc(): NSCWalletConnectV2SessionNamespaceExtension; // inherited from NSObject

	static new(): NSCWalletConnectV2SessionNamespaceExtension; // inherited from NSObject

	readonly accounts: NSSet<string>;

	readonly events: NSSet<string>;

	readonly methods: NSSet<string>;

	constructor(o: { accounts: NSSet<string>; events: NSSet<string>; methods: NSSet<string>; });

	initWithAccountsEventsMethods(accounts: NSSet<string>, events: NSSet<string>, methods: NSSet<string>): this;
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
