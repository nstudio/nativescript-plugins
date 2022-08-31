
declare class NSCClientMeta extends NSObject {

	static alloc(): NSCClientMeta; // inherited from NSObject

	static new(): NSCClientMeta; // inherited from NSObject

	readonly desc: string;

	readonly icons: NSArray<NSURL>;

	readonly name: string;

	readonly scheme: string;

	readonly url: NSURL;
}

declare class NSCMessageConfig extends NSObject {

	static alloc(): NSCMessageConfig; // inherited from NSObject

	static new(): NSCMessageConfig; // inherited from NSObject

	address: string;

	id: number;

	message: string;

	constructor();

	init(id: number, address: string, message: string): this;
}

declare class NSCPersonalMessageConfig extends NSObject {

	static alloc(): NSCPersonalMessageConfig; // inherited from NSObject

	static new(): NSCPersonalMessageConfig; // inherited from NSObject

	id: number;

	params: NSArray<any>;

	constructor();

	init(id: number, params: NSArray<any> | any[]): this;
}

declare class NSCTransactionConfig extends NSObject {

	static alloc(): NSCTransactionConfig; // inherited from NSObject

	static new(): NSCTransactionConfig; // inherited from NSObject

	data: string;

	from: string;

	gas: string;

	gasPrice: string;

	id: number;

	nonce: string;

	to: string;

	value: string;

	constructor();

	init(id: number, from: string, value: string, data: string): this;
}

declare class NSCWallectConnect extends NSObject {

	static alloc(): NSCWallectConnect; // inherited from NSObject

	static new(): NSCWallectConnect; // inherited from NSObject

	static toHex(value: string): string;

	readonly accounts: NSArray<string>;

	readonly bridge: string;

	readonly chainId: number;

	readonly clientId: string;

	readonly clientMeta: NSCClientMeta;

	readonly connected: boolean;

	delegate: NSCWalletConnectDelegate;

	readonly handshakeTopic: string;

	readonly key: string;

	readonly peerId: string;

	readonly peerMeta: NSCClientMeta;

	readonly pending: boolean;

	readonly uri: string;

	constructor(o: { configuration: NSCWalletConnectConfig; });

	approveRequestWithIdResult(id: number, result: string, callback: (p1: NSError) => void): void;

	approveSessionWithChainIdAccounts(chainId: number, accounts: NSArray<string> | string[], callback: (p1: NSError) => void): void;

	connect(callback: (p1: NSError) => void): void;

	createSession(callback: (p1: NSError) => void): void;

	initWithConfiguration(configuration: NSCWalletConnectConfig): this;

	killSession(callback: (p1: NSError) => void): void;

	rejectRequestWithIdCallback(id: number, callback: (p1: NSError) => void): void;

	rejectRequestWithIdErrorCodeErrorMessageCallback(id: number, errorCode: number, errorMessage: string, callback: (p1: NSError) => void): void;

	rejectSession(callback: (p1: NSError) => void): void;

	sendCustomRequest(method: string, id: number, params: string, callback: (p1: string, p2: NSError) => void): void;

	sendRawTransaction(data: string, callback: (p1: string, p2: NSError) => void): void;

	sendTransaction(tx: NSCTransactionConfig, callback: (p1: string, p2: NSError) => void): void;

	signMessage(account: string, message: string, callback: (p1: string, p2: NSError) => void): void;

	signPersonalMessage(account: string, message: string, callback: (p1: string, p2: NSError) => void): void;

	signTransaction(tx: NSCTransactionConfig, callback: (p1: string, p2: NSError) => void): void;

	signTypedData(account: string, message: string, callback: (p1: string, p2: NSError) => void): void;

	updateSessionWithChainIdAccounts(chainId: number, accounts: NSArray<string> | string[], callback: (p1: NSError) => void): void;
}

declare class NSCWallectSession extends NSObject {

	static alloc(): NSCWallectSession; // inherited from NSObject

	static new(): NSCWallectSession; // inherited from NSObject

	readonly accounts: NSArray<string>;

	readonly bridge: string;

	readonly chainId: number;

	readonly clientMeta: NSCClientMeta;

	readonly connected: boolean;

	readonly handshakeId: number;

	readonly handshakeTopic: string;

	readonly key: string;

	readonly peerId: string;

	readonly peerMeta: NSCClientMeta;

	walletCollect: NSCWallectConnect;
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
}

interface NSCWalletConnectDelegate {

	didConnectWithSession(session: NSCWallectSession): void;

	didConnectWithUrl(url: string): void;

	didDisconnectWithSession(session: NSCWallectSession): void;

	didFailToConnectWithUrl(url: string): void;

	didUpdateWithSession(session: NSCWallectSession): void;
}
declare var NSCWalletConnectDelegate: {

	prototype: NSCWalletConnectDelegate;
};
