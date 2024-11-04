import { Observable } from '@nativescript/core';
export class Server {
	private server: NSCServer;
	constructor(config: { logger?: boolean; path: string; directory: string; index?: string; hostName?: string; port?: number; workers?: number; showFiles?: boolean });

	get status(): ServerStatus;

	setStatusChangeListener(value: (status: ServerStatus) => void);

	start(): Promise<void>;

	stop(wait?: bool): Promise<void>;
}

export class Client {
	readonly id: number;
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
