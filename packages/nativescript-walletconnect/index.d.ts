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

export interface TransactionConfig {
	from: string;
	to?: string;
	nonce?: string;
	gasPrice?: string;
	gas?: string;
	value: string;
	data: string;
}

export interface MessageConfig {
	address: string;
	message: string;
}

export type WalletEvent = 'connect' | 'disconnect' | 'session_update' | 'call_request' | 'error';

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

	/**
	 * @param modal string 'default' | 'custom' set custom to use custom qr modal. Modal closes on success. Optional
	 * @param renderModal return view to render in the custom modal. Optional
	 * @returns a Promise with chainId & accounts.
	 */

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
}
