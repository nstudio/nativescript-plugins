export interface IClientMeta {
	description?: string;
	url?: string;
	icons?: string[];
	name?: string;
}

export interface WalletConnectConfig {
	bridge?: string;
	key?: string;
	uri?: string;
	clientMeta?: IClientMeta;
}

export interface MessageConfig {
	address: string;
	message: string;
}

export declare class EthereumTransaction {
	readonly from: string;
	readonly to: string;
	readonly nonce: string;
	readonly gasPrice: string;
	readonly gas: string;
	readonly value: string;
	readonly data: string;
	readonly native;
}

export declare class ClientMeta implements IClientMeta {
	readonly description?: string;
	readonly url?: string;
	readonly icons?: string[];
	readonly name?: string;
}

export type WalletEvent = 'connect' | 'disconnect' | 'session_update' | 'call_request' | 'session_request' | 'error';

export function toHex(value: string): string;

export interface IWalletConnectSession {
	connected: boolean;
	accounts: string[];
	chainId: number;
	bridge: string;
	key: string;
	clientId: string;
	clientMeta: IClientMeta | null;
	peerId: string;
	peerMeta: IClientMeta | null;
	handshakeId: number;
	handshakeTopic: string;
}

export interface IWalletConnect {
	readonly accounts: string[];

	readonly connected: boolean;

	readonly uri: string | null;

	readonly bridge: string;

	readonly clientId: string;

	readonly handshakeId: number;

	readonly handshakeTopic: string;

	readonly chainId: number;

	readonly key: string;

	readonly clientMeta: IClientMeta | null;

	readonly peerId: string;

	readonly peerMeta: IClientMeta | null;

	readonly session: IWalletConnectSession;

	on(event: WalletEvent, callback: (error: Error | null, payload: any | null) => void);

	createSession(): Promise<{ chainId: number; accounts: string[] }>;

	approveSession(sessionStatus: { chainId: number; accounts: string[] });

	rejectSession(sessionError?: { message: string });

	updateSession(sessionStatus: { chainId: number; accounts: string[] });

	killSession(sessionError?: { message: string }): Promise<void>;

	approveRequest(response: { id: number; result?: any });

	rejectRequest(response: {
		id: number;
		error?: {
			code?: number;
			message?: string;
		};
	});

	disconnect();
}

export declare class WalletConnect implements IWalletConnect {
	constructor(configuration: WalletConnectConfig);

	readonly accounts: string[];

	readonly connected: boolean;

	readonly uri: string | null;

	readonly bridge: string;

	readonly clientId: string;

	readonly handshakeId: number;

	readonly handshakeTopic: string;

	readonly chainId: number;

	readonly key: string;

	readonly clientMeta: IClientMeta | null;

	readonly peerId: string;

	readonly peerMeta: IClientMeta | null;

	readonly session: IWalletConnectSession;

	on(event: WalletEvent, callback: (error: Error | null, payload: any | null) => void);

	connect(modal?: 'default' | 'custom', renderModal?: (qrCode: ImageSource) => View): Promise<{ chainId: number; accounts: string[] }>;

	createSession(): Promise<{ chainId: number; accounts: string[] }>;

	approveSession(sessionStatus: { chainId: number; accounts: string[] });

	rejectSession(sessionError?: { message: string });

	updateSession(sessionStatus: { chainId: number; accounts: string[] });

	killSession(sessionError?: { message: string }): Promise<void>;

	sendTransaction(tx: TransactionConfig): Promise<any>;

	signMessage(params: any[]): Promise<any>;

	signPersonalMessage(params: any[]): Promise<any>;

	signTypedData(params: any[]): Promise<any>;

	sendCustomRequest(request: { id: number; method: string; params: any[] }): Promise<any>;

	approveRequest(response: { id: number; result?: any });

	rejectRequest(response: {
		id: number;
		error?: {
			code?: number;
			message?: string;
		};
	});

	disconnect();
}
