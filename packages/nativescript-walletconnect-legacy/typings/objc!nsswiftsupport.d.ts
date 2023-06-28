
declare class NSCWalletConnectLegacy extends NSObject {

	static alloc(): NSCWalletConnectLegacy; // inherited from NSObject

	static new(): NSCWalletConnectLegacy; // inherited from NSObject

	readonly approvedAccounts: NSArray<string>;

	readonly bridge: string;

	readonly chainId: number;

	readonly connected: boolean;

	delegate: NSCWalletConnectLegacyDelegate;

	readonly handshakeTopic: string;

	readonly key: string;

	readonly peerId: string;

	readonly peerMeta: NSCWalletConnectLegacyMeta;

	readonly pending: boolean;

	readonly uri: string;

	constructor();

	approveRequestWithIdResult(id: number, result: string, callback: (p1: NSError) => void): void;

	approveSessionWithChainIdAccounts(chainId: number, accounts: NSArray<string> | string[], callback: (p1: NSError) => void): void;

	connect(callback: (p1: NSError) => void): void;

	createSession(callback: (p1: NSError) => void): void;

	init(meta: NSCWalletConnectLegacyMeta, topic: string, bridge: string, key: string, proto: string, version: number): this;

	killSession(callback: (p1: NSError) => void): void;

	rejectRequestWithIdCallback(id: number, callback: (p1: NSError) => void): void;

	rejectRequestWithIdErrorCodeErrorMessageCallback(id: number, errorCode: number, errorMessage: string, callback: (p1: NSError) => void): void;

	rejectSession(callback: (p1: NSError) => void): void;

	sendCustomRequest(method: string, id: number, params: string, callback: (p1: string, p2: NSError) => void): void;

	sendRawTransaction(data: string, callback: (p1: string, p2: NSError) => void): void;

	sendTransaction(tx: string, callback: (p1: string, p2: NSError) => void): void;

	signMessage(account: string, message: string, callback: (p1: string, p2: NSError) => void): void;

	signPersonalMessage(account: string, message: string, callback: (p1: string, p2: NSError) => void): void;

	signTransaction(tx: string, callback: (p1: string, p2: NSError) => void): void;

	signTypedData(account: string, message: string, callback: (p1: string, p2: NSError) => void): void;

	updateSessionWithChainIdAccounts(chainId: number, accounts: NSArray<string> | string[], callback: (p1: NSError) => void): void;
}

interface NSCWalletConnectLegacyDelegate {

	didConnect(): void;

	didDisConnect(): void;

	didFailToConnect(): void;

	didUpdate(): void;
}
declare var NSCWalletConnectLegacyDelegate: {

	prototype: NSCWalletConnectLegacyDelegate;
};

declare class NSCWalletConnectLegacyMeta extends NSObject {

	static alloc(): NSCWalletConnectLegacyMeta; // inherited from NSObject

	static new(): NSCWalletConnectLegacyMeta; // inherited from NSObject

	readonly desc: string;

	readonly icons: NSArray<NSURL>;

	readonly name: string;

	readonly scheme: string;

	readonly url: NSURL;

	constructor();

	init(url: NSURL, name: string, description: string, icons: NSArray<NSURL> | NSURL[]): this;
}

declare class NSCWalletConnectLegacySession extends NSObject {

	static alloc(): NSCWalletConnectLegacySession; // inherited from NSObject

	static new(): NSCWalletConnectLegacySession; // inherited from NSObject

	readonly accounts: NSArray<string>;

	readonly bridge: string;

	readonly chainId: number;

	readonly clientMeta: NSCWalletConnectLegacyMeta;

	readonly connected: boolean;

	readonly handshakeId: number;

	readonly handshakeTopic: string;

	readonly key: string;

	readonly peerId: string;

	readonly peerMeta: NSCWalletConnectLegacyMeta;

	walletCollect: NSCWalletConnectLegacy;
}
