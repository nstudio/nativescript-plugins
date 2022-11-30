declare class NSCClientMeta extends NSObject {
	static alloc(): NSCClientMeta; // inherited from NSObject

	static new(): NSCClientMeta; // inherited from NSObject

	readonly desc: string;

	readonly icons: NSArray<string>;

	readonly name: string;

	scheme: string;

	readonly url: string;
}

declare class NSCWCEthereumTransaction extends NSObject {
	static alloc(): NSCWCEthereumTransaction; // inherited from NSObject

	static new(): NSCWCEthereumTransaction; // inherited from NSObject

	readonly data: string;

	readonly from: string;

	readonly gas: string;

	readonly gasLimit: string;

	readonly gasPrice: string;

	readonly nonce: string;

	readonly to: string;

	readonly value: string;
}

declare class NSCWCOKExChainTransaction extends NSObject {
	static alloc(): NSCWCOKExChainTransaction; // inherited from NSObject

	static new(): NSCWCOKExChainTransaction; // inherited from NSObject

	readonly accountNumber: string;

	readonly contractAddress: string;

	readonly data: string;

	readonly decimalNum: string;

	readonly from: string;

	readonly gasLimit: string;

	readonly gasPrice: string;

	readonly memo: string;

	readonly sequenceNumber: string;

	readonly symbol: string;

	readonly to: string;

	readonly value: string;
}

declare class NSCWCSessionRequestParam extends NSObject {
	static alloc(): NSCWCSessionRequestParam; // inherited from NSObject

	static new(): NSCWCSessionRequestParam; // inherited from NSObject

	readonly chainId: number;

	readonly peerId: string;

	readonly peerMeta: NSCClientMeta;
}

declare class NSCWallectConnect extends NSObject {
	static alloc(): NSCWallectConnect; // inherited from NSObject

	static new(): NSCWallectConnect; // inherited from NSObject

	static toHex(value: string): string;

	static hexToData(value: string): NSData;

	static createPrivateKeyWithData(data: NSData): interop.Pointer | interop.Reference<any>;

	static createPrivateKeyWithString(string: string): interop.Pointer | interop.Reference<any>;

	static deriveBitCoinAddress(key: interop.Pointer | interop.Reference<any>): string;

	static deriveBnbAddress(key: interop.Pointer | interop.Reference<any>): string;

	static deriveEthAddress(key: interop.Pointer | interop.Reference<any>): string;

	static privateKeySignToHexWithKeyDataCurve(key: interop.Pointer | interop.Reference<any>, data: NSData, curve: TWCurve): string;

	static privateKeySignToHexWithKeyStringCurve(key: interop.Pointer | interop.Reference<any>, string: string, curve: TWCurve): string;

	static privateKeySignWithKeyDataCurve(key: interop.Pointer | interop.Reference<any>, data: NSData, curve: TWCurve): NSData;

	static privateKeySignWithKeyStringCurve(key: interop.Pointer | interop.Reference<any>, string: string, curve: TWCurve): NSData;

	static createEthSigningSignature(string: string): NSData;

	static createEthSigningSignatureWithData(string: string): NSData;

	static sha256(data: NSData): NSData;

	static keccak256(data: NSData): NSData;

	readonly accounts: NSArray<string>;

	readonly bridge: string;

	readonly chainId: number;

	readonly clientMeta: NSCClientMeta;

	readonly connected: boolean;

	delegate: NSCWalletConnectDelegate;

	readonly handshakeTopic: string;

	readonly key: string;

	readonly uri: string;

	readonly url: string;

	constructor(o: { configuration: NSCWalletConnectConfig });

	approveBnbOrderWithIdSignatureCallback(id: number, signature: string, callback: (p1: NSError, p2: boolean) => void): void;

	approveRequestWithIdResult(id: number, result: string, callback: (p1: NSError) => void): void;

	approveSessionWithChainIdAccounts(chainId: number, accounts: NSArray<string> | string[], callback: (p1: NSError) => void): void;

	connect(callback: (p1: NSError) => void): void;

	disconnect(): void;

	initWithConfiguration(configuration: NSCWalletConnectConfig): this;

	killSession(callback: (p1: NSError) => void): void;

	rejectRequestWithIdCallback(id: number, callback: (p1: NSError) => void): void;

	rejectRequestWithIdErrorCodeErrorMessageCallback(id: number, errorCode: number, errorMessage: string, callback: (p1: NSError) => void): void;

	rejectSession(callback: (p1: NSError) => void): void;
}

declare class NSCWalletConnectClientMetaConfig extends NSObject {
	static alloc(): NSCWalletConnectClientMetaConfig; // inherited from NSObject

	static new(): NSCWalletConnectClientMetaConfig; // inherited from NSObject

	desc: string;

	icons: NSArray<string>;

	name: string;

	url: string;
}

declare class NSCWalletConnectConfig extends NSObject {
	static alloc(): NSCWalletConnectConfig; // inherited from NSObject

	static new(): NSCWalletConnectConfig; // inherited from NSObject

	bridge: string;

	clientMeta: NSCWalletConnectClientMetaConfig;

	key: string;

	uri: string;

	uuid: string;
}

interface NSCWalletConnectDelegate {
	onBnbSignWithIdOrder(id: number, order: string): void;

	onConnect(): void;

	onCustomRequestWithIdRequest(id: number, request: NSDictionary<string, any>): void;

	onDisconnectWithReasonCode(reason: string, code: number): void;

	onErrorWithError(error: NSError): void;

	onEthPersonalSignWithIdDataRaw(id: number, data: NSData, raw: NSArray<string> | string[]): void;

	onEthSendTransactionWithIdTransaction(id: number, transaction: NSCWCEthereumTransaction): void;

	onEthSignTransactionWithIdTransaction(id: number, transaction: NSCWCEthereumTransaction): void;

	onEthSignTypeDataWithIdDataRaw(id: number, data: NSData, raw: NSArray<string> | string[]): void;

	onEthSignWithIdDataRaw(id: number, data: NSData, raw: NSArray<string> | string[]): void;

	onOktSendTransactionWithIdTransaction(id: number, transaction: NSCWCOKExChainTransaction): void;

	onOktSignTransactionWithIdTransaction(id: number, transaction: NSCWCOKExChainTransaction): void;

	onSessionRequestWithIdPeerParam(id: number, peerParam: NSCWCSessionRequestParam): void;
}
declare var NSCWalletConnectDelegate: {
	prototype: NSCWalletConnectDelegate;
};
