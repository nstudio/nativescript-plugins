import { Observable } from '@nativescript/core';
import { ServerStatus } from './common';
export * from './common';
export class Server {
	private server: NSCServer;
	constructor(config: { logger?: boolean; path: string; directory: string; index?: string; hostName?: string; port?: number; workers?: number; showFiles?: boolean; frameGuard?: boolean });

	get status(): ServerStatus;

	setStatusChangeListener(value: (status: ServerStatus) => void);

	start(): Promise<void>;

	stop(wait?: bool): Promise<void>;
}

export class Client {
	readonly id: number;
	/**
	 * `Origin` header from the WebSocket upgrade request, or `null` when the
	 * client sent none. Browsers always set it and cannot forge it, so it
	 * can be used to allowlist connections from a known served origin.
	 */
	readonly origin: string | null;
	/** One header value from the upgrade request (case-insensitive), or `null`. */
	header(name: string): string | null;
}

export class WebSocketServer extends Observable {
	constructor(config: { logger?: boolean; path: string; maxPayload?: number; hostName?: string; port?: number; workers?: number; autoPong?: boolean });

	broadcast(data: string | ArrayBuffer | Uint8Array | Uint8ClampedArray);

	send(id: number, data: string | ArrayBuffer | Uint8Array | Uint8ClampedArray);

	ping(id: number, data?: ArrayBuffer | Uint8Array | Uint8ClampedArray);

	pong(id: number, data?: ArrayBuffer | Uint8Array | Uint8ClampedArray);

	readonly status: ServerStatus;

	setStatusChangeListener(value: (status: ServerStatus) => void);

	start(): Promise<void>;

	stop(wait?: bool): Promise<void>;
}
