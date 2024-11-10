import { Observable } from '@nativescript/core';
import { ServerStatus } from './common';

export class Server {
	private server;
	constructor(config: { logger?: boolean; path: string; directory: string; index?: string; hostName?: string; port: number; workers?: number; showFiles?: boolean }) {
		this.server = new io.nstudio.plugins.webserver.Server(config.logger ?? false, config.path, config.directory, config.index ?? null, config.hostName ?? '127.0.0.1', config.port ?? 8080, config.workers ?? 2, config.showFiles ?? false);
	}

	get status(): ServerStatus {
		return this.server.getStatus() as never;
	}

	setStatusChangeListener(value: (status: ServerStatus) => void) {
		this.server.setStatusCallback(
			new io.nstudio.plugins.webserver.Server.StatusCallback({
				onChange(status: ServerStatus) {
					value(status);
				},
			})
		);
	}

	start() {
		return new Promise<void>((resolve, reject) => {
			this.server.start(
				new io.nstudio.plugins.webserver.Server.Callback({
					onSuccess() {
						resolve();
					},
					onError(error: string) {
						reject(error);
					},
				})
			);
		});
	}
	stop(wait = false) {
		return new Promise<void>((resolve, reject) => {
			this.server.stop(
				wait,
				new io.nstudio.plugins.webserver.Server.Callback({
					onSuccess() {
						resolve();
					},
					onError(error: string) {
						reject(error);
					},
				})
			);
		});
	}
}

export class Client {
	_id: number;
	get id(): number {
		return this._id;
	}
}

export class WebSocketServer extends Observable {
	private server: io.nstudio.plugins.webserver.websocket.Server;
	private clients: Map<number, Client> = new Map();
	constructor(config: { logger: boolean; path: string; maxPayload?: number; hostName: string; port: number; workers: number; autoPong?: boolean }) {
		super();
		this.server = new io.nstudio.plugins.webserver.websocket.Server(config.logger ?? false, config.path, config.maxPayload ?? 1024 * 1024 * 100, config.hostName ?? '127.0.0.1', config.port ?? 8081, config.workers ?? 2, config.autoPong ?? true);
		const ref = new WeakRef(this);
		this.server.addOnConnect(
			new io.nstudio.plugins.webserver.websocket.Server.ConnectCallback({
				onConnect(id) {
					const owner = ref.get?.();
					if (owner) {
						const ret = new Client();
						ret._id = id;
						owner.clients.set(id, ret);
						owner.notify({ eventName: 'connection', client: ret });
					}
				},
			})
		);

		const onMessage = new io.nstudio.plugins.webserver.websocket.Server.MessageCallback({
			onMessage(id, message) {
				const owner = ref.get?.();
				if (owner) {
					let ret: ArrayBuffer | string | null = null;
					if (message.type === NSCMessageType.Text) {
						ret = message.text;
					} else if (message.data instanceof NSData) {
						ret = interop.bufferFromData(message.data);
					}
					owner.notify({ eventName: 'message', client: owner.clients.get(id), message: ret });
				}
			},
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			onPing(param0, param1) {},
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			onPong(param0, param1) {},
		});
		this.server.addOnMessage(onMessage);

		const onPing = new io.nstudio.plugins.webserver.websocket.Server.MessageCallback({
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			onMessage(id, message) {},
			onPing(id, message) {
				const owner = ref.get?.();
				if (owner) {
					let ret: ArrayBuffer | null = null;
					if (message) {
						ret = (<any>ArrayBuffer).from(message);
					}
					owner.notify({ eventName: 'ping', client: owner.clients.get(id), message: ret });
				}
			},
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			onPong(param0, param1) {},
		});

		this.server.addOnPing(onPing);

		const onPong = new io.nstudio.plugins.webserver.websocket.Server.MessageCallback({
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			onMessage(id, message) {},
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			onPing(param0, param1) {},
			onPong(id, message) {
				const owner = ref.get?.();
				if (owner) {
					let ret: ArrayBuffer | null = null;
					if (message) {
						ret = (<any>ArrayBuffer).from(message);
					}
					owner.notify({ eventName: 'pong', client: this.clients.get(id), message: ret });
				}
			},
		});

		this.server.addOnPong(onPong);

		const onDisconnect = new io.nstudio.plugins.webserver.websocket.Server.DisconnectCallback({
			onDisconnect(id, code, description) {
				const owner = ref.get?.();
				if (owner) {
					owner.notify({ eventName: 'close', client: owner.clients.get(id), code, description });
					owner.clients.delete(id);
				}
			},
		});

		this.server.addOnDisconnect(onDisconnect);
	}

	get status(): ServerStatus {
		return this.server.getStatus() as never;
	}

	broadcast(data: string | ArrayBuffer | Uint8Array | Uint8ClampedArray) {
		if (typeof data === 'string') {
			this.server.broadcast(data);
		} else if (data instanceof ArrayBuffer || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
			this.server.broadcast(data as never);
		}
	}

	send(id: number, data: string | ArrayBuffer | Uint8Array | Uint8ClampedArray) {
		if (typeof data === 'string') {
			this.server.send(data, id);
		} else if (data instanceof ArrayBuffer || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
			this.server.send(data as never, id);
		}
	}

	ping(id: number, data: ArrayBuffer | Uint8Array | Uint8ClampedArray | null = null) {
		if (data instanceof ArrayBuffer || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
			this.server.ping(data as never, id);
		} else {
			this.server.ping(null, id);
		}
	}

	pong(id: number, data: ArrayBuffer | Uint8Array | Uint8ClampedArray | null = null) {
		if (data instanceof ArrayBuffer || data instanceof Uint8Array || data instanceof Uint8ClampedArray) {
			this.server.pong(data as never, id);
		} else {
			this.server.pong(null, id);
		}
	}

	setStatusChangeListener(value: (status: ServerStatus) => void) {
		this.server.setStatusCallback(
			new io.nstudio.plugins.webserver.websocket.Server.StatusCallback({
				onChange(status: ServerStatus) {
					value(status as never);
				},
			})
		);
	}

	start() {
		return new Promise<void>((resolve, reject) => {
			this.server.start(
				new io.nstudio.plugins.webserver.websocket.Server.Callback({
					onSuccess() {
						resolve();
					},
					onError(error) {
						reject(error);
					},
				})
			);
		});
	}
	stop(wait = false) {
		return new Promise<void>((resolve, reject) => {
			this.server.stop(
				wait,
				new io.nstudio.plugins.webserver.websocket.Server.Callback({
					onSuccess() {
						resolve();
					},
					onError(error) {
						reject(error);
					},
				})
			);
		});
	}
}
