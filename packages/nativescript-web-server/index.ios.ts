import { ServerStatus } from './common';
import { Observable } from '@nativescript/core';
export class Server {
	private server: NSCServer;
	constructor(config: { logger: boolean; path: string; directory: string; index: string; hostName: string; port: number; workers: number; showFiles?: boolean }) {
		this.server = NSCServer.alloc().init(config.logger ?? false, config.path, config.directory, config.index ?? null, config.hostName ?? '127.0.0.1', config.port ?? 8080, config.workers ?? 2, config.showFiles ?? false);
	}

	get status(): ServerStatus {
		return this.server.status as never;
	}

	setStatusChangeListener(value: (status: ServerStatus) => void) {
		this.server.setStatusChangeCallback((status) => {
			value(status as never);
		});
	}

	start() {
		return new Promise<void>((resolve, reject) => {
			this.server.start((error: string) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
	stop(wait = false) {
		return new Promise<void>((resolve, reject) => {
			this.server.stop(wait, (error: string) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
}

export class Client {
	_native: NSCClient;
	get id(): number {
		return this._native.id;
	}
}

export class WebSocketServer extends Observable {
	private server: NSCWebSocketServer;
	private clients: Map<number, Client> = new Map();
	constructor(config: { logger: boolean; path: string; maxPayload?: number; hostName: string; port: number; workers: number; autoPong?: boolean }) {
		super();
		this.server = NSCWebSocketServer.alloc().init(config.logger ?? false, config.path, config.maxPayload ?? 1024 * 1024 * 100, config.hostName ?? '127.0.0.1', config.port ?? 8081, config.workers ?? 2, config.autoPong ?? true);
		this.server.addOnConnect((client) => {
			const ret = new Client();
			ret._native = client;
			this.clients.set(client.id, ret);
			this.notify({ eventName: 'connection', client: ret });
		});
		this.server.addOnMessage((client, message) => {
			let ret: ArrayBuffer | string | null = null;
			if (message.type === NSCMessageType.Text) {
				ret = message.text;
			} else if (message.data instanceof NSData) {
				ret = interop.bufferFromData(message.data);
			}
			this.notify({ eventName: 'message', client: this.clients.get(client.id), message: ret });
		});
		this.server.addOnPing((client, message) => {
			let ret: ArrayBuffer | null = null;
			if (message) {
				ret = interop.bufferFromData(message);
			}
			this.notify({ eventName: 'ping', client: this.clients.get(client.id), message: ret });
		});
		this.server.addOnPong((client, message) => {
			let ret: ArrayBuffer | null = null;
			if (message) {
				ret = interop.bufferFromData(message);
			}
			this.notify({ eventName: 'pong', client: this.clients.get(client.id), message: ret });
		});
		this.server.addOnDisconnect((client, code, description) => {
			this.notify({ eventName: 'close', client: this.clients.get(client.id), code, description });
			this.clients.delete(client.id);
		});
	}

	get status(): ServerStatus {
		return this.server.status as never;
	}

	broadcast(data: string | ArrayBuffer | Uint8Array | Uint8ClampedArray) {
		if (typeof data === 'string') {
			this.server.broadcast(data);
		} else if (data instanceof ArrayBuffer || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
			this.server.broadcastWithBinary(NSData.dataWithData(data as never));
		}
	}

	send(id: number, data: string | ArrayBuffer | Uint8Array | Uint8ClampedArray) {
		if (typeof data === 'string') {
			this.server.sendWithTextId(data, id);
		} else if (data instanceof ArrayBuffer || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
			this.server.sendWithBinaryId(NSData.dataWithData(data as never), id);
		}
	}

	ping(id: number, data: ArrayBuffer | Uint8Array | Uint8ClampedArray | null = null) {
		if (data instanceof ArrayBuffer || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
			this.server.sendWithPingId(NSData.dataWithData(data as never), id);
		} else {
			this.server.sendEmptyPingWithId(id);
		}
	}

	pong(id: number, data: ArrayBuffer | Uint8Array | Uint8ClampedArray | null = null) {
		if (data instanceof ArrayBuffer || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
			this.server.sendWithPongId(NSData.dataWithData(data as never), id);
		} else {
			this.server.sendEmptyPongWithId(id);
		}
	}

	setStatusChangeListener(value: (status: ServerStatus) => void) {
		this.server.setStatusChangeCallback((status) => {
			value(status as never);
		});
	}

	start() {
		return new Promise<void>((resolve, reject) => {
			this.server.start((error: string) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
	stop(wait = false) {
		return new Promise<void>((resolve, reject) => {
			this.server.stop(wait, (error: string) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
}
