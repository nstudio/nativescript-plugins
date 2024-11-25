declare namespace io {
	export namespace nstudio {
		export namespace plugins {
			export namespace webserver {
				export class GC {
					public static class: java.lang.Class<io.nstudio.plugins.webserver.GC>;
					public restartWatch(): void;
					public static getInstance(): io.nstudio.plugins.webserver.GC;
					public static watchObject(key: number, value: java.nio.ByteBuffer): void;
					public constructor();
					public static getBufferRefQue(): java.lang.ref.ReferenceQueue<io.nstudio.plugins.webserver.GC.Object>;
					public watchItem(value: io.nstudio.plugins.webserver.GC.Object): void;
				}
				export namespace GC {
					export class BufferWrapper extends io.nstudio.plugins.webserver.GC.Object {
						public static class: java.lang.Class<io.nstudio.plugins.webserver.GC.BufferWrapper>;
						public constructor(nativePtr: number, value: any);
						public getValue(): any;
						public dispose(): void;
					}
					export class Companion {
						public static class: java.lang.Class<io.nstudio.plugins.webserver.GC.Companion>;
						public getBufferRefQue(): java.lang.ref.ReferenceQueue<io.nstudio.plugins.webserver.GC.Object>;
						public getInstance(): io.nstudio.plugins.webserver.GC;
						public watchObject(key: number, value: java.nio.ByteBuffer): void;
					}
					export class Object {
						public static class: java.lang.Class<io.nstudio.plugins.webserver.GC.Object>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.webserver.GC$Object interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							dispose(): void;
						});
						public constructor();
						public dispose(): void;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace nstudio {
		export namespace plugins {
			export namespace webserver {
				export class Server {
					public static class: java.lang.Class<io.nstudio.plugins.webserver.Server>;
					public start(callback: io.nstudio.plugins.webserver.Server.Callback): void;
					public constructor(logger: boolean, path: string, directory: string, index: string, hostName: string, port: number, workers: number, showFiles: boolean);
					public stop(wait: boolean, callback: io.nstudio.plugins.webserver.Server.Callback): void;
					public setStatusCallback(callback: io.nstudio.plugins.webserver.Server.StatusCallback): void;
					public finalize(): void;
					public getStatus(): number;
				}
				export namespace Server {
					export class Callback {
						public static class: java.lang.Class<io.nstudio.plugins.webserver.Server.Callback>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.webserver.Server$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: string): void;
							onSuccess(): void;
						});
						public constructor();
						public onSuccess(): void;
						public onError(param0: string): void;
					}
					export class Companion {
						public static class: java.lang.Class<io.nstudio.plugins.webserver.Server.Companion>;
					}
					export class StatusCallback {
						public static class: java.lang.Class<io.nstudio.plugins.webserver.Server.StatusCallback>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.webserver.Server$StatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onChange(param0: number): void;
						});
						public constructor();
						public onChange(param0: number): void;
					}
				}
			}
		}
	}
}

declare namespace io {
	export namespace nstudio {
		export namespace plugins {
			export namespace webserver {
				export namespace websocket {
					export class Server {
						public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server>;
						public start(callback: io.nstudio.plugins.webserver.websocket.Server.Callback): void;
						public broadcastPing(it: java.nio.ByteBuffer): void;
						public removeOnError(id: number): void;
						public send(binary: java.nio.ByteBuffer, id: number): void;
						public constructor(logger: boolean, path: string, maxPayload: number, hostName: string, port: number, workers: number, autoPong: boolean);
						public addOnConnect(callback: io.nstudio.plugins.webserver.websocket.Server.ConnectCallback): number;
						public finalize(): void;
						public setStatusCallback(callback: io.nstudio.plugins.webserver.websocket.Server.StatusCallback): void;
						public broadcastPong(it: java.nio.ByteBuffer): void;
						public removeOnConnect(id: number): void;
						public broadcast(text: string): void;
						public removeOnPing(id: number): void;
						public addOnPong(callback: io.nstudio.plugins.webserver.websocket.Server.MessageCallback): number;
						public ping(it: java.nio.ByteBuffer, this_: number): void;
						public addOnError(callback: io.nstudio.plugins.webserver.websocket.Server.ErrorCallback): number;
						public removeOnDisconnect(id: number): void;
						public removeOnMessage(id: number): void;
						public addOnDisconnect(callback: io.nstudio.plugins.webserver.websocket.Server.DisconnectCallback): number;
						public stop(wait: boolean, callback: io.nstudio.plugins.webserver.websocket.Server.Callback): void;
						public pong(it: java.nio.ByteBuffer, this_: number): void;
						public send(text: string, id: number): void;
						public broadcast(binary: java.nio.ByteBuffer): void;
						public addOnMessage(callback: io.nstudio.plugins.webserver.websocket.Server.MessageCallback): number;
						public addOnPing(callback: io.nstudio.plugins.webserver.websocket.Server.MessageCallback): number;
						public removeOnPong(id: number): void;
						public static nativeAddOnMessage(param0: number, param1: io.nstudio.plugins.webserver.websocket.Server.MessageCallback): number;
						public getStatus(): number;
					}
					export namespace Server {
						export class Callback {
							public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server.Callback>;
							/**
							 * Constructs a new instance of the io.nstudio.plugins.webserver.websocket.Server$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onError(param0: string): void;
								onSuccess(): void;
							});
							public constructor();
							public onSuccess(): void;
							public onError(param0: string): void;
						}
						export class Client {
							public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server.Client>;
							public constructor(native_: number, server: io.nstudio.plugins.webserver.websocket.Server);
						}
						export class Companion {
							public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server.Companion>;
							public nativeAddOnMessage(server: number, callback: io.nstudio.plugins.webserver.websocket.Server.MessageCallback): number;
						}
						export class ConnectCallback {
							public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server.ConnectCallback>;
							/**
							 * Constructs a new instance of the io.nstudio.plugins.webserver.websocket.Server$ConnectCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnect(param0: number): void;
							});
							public constructor();
							public onConnect(param0: number): void;
						}
						export class DisconnectCallback {
							public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server.DisconnectCallback>;
							/**
							 * Constructs a new instance of the io.nstudio.plugins.webserver.websocket.Server$DisconnectCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDisconnect(param0: number, param1: number, param2: string): void;
							});
							public constructor();
							public onDisconnect(param0: number, param1: number, param2: string): void;
						}
						export class ErrorCallback {
							public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server.ErrorCallback>;
							/**
							 * Constructs a new instance of the io.nstudio.plugins.webserver.websocket.Server$ErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onError(param0: number, param1: string): void;
							});
							public constructor();
							public onError(param0: number, param1: string): void;
						}
						export class MessageCallback {
							public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server.MessageCallback>;
							/**
							 * Constructs a new instance of the io.nstudio.plugins.webserver.websocket.Server$MessageCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMessage(param0: number, param1: string): void;
								onMessage(param0: number, param1: java.nio.ByteBuffer): void;
								onPing(param0: number, param1: java.nio.ByteBuffer): void;
								onPong(param0: number, param1: java.nio.ByteBuffer): void;
							});
							public constructor();
							public onPong(param0: number, param1: java.nio.ByteBuffer): void;
							public onMessage(param0: number, param1: string): void;
							public onPing(param0: number, param1: java.nio.ByteBuffer): void;
							public onMessage(param0: number, param1: java.nio.ByteBuffer): void;
						}
						export class StatusCallback {
							public static class: java.lang.Class<io.nstudio.plugins.webserver.websocket.Server.StatusCallback>;
							/**
							 * Constructs a new instance of the io.nstudio.plugins.webserver.websocket.Server$StatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onChange(param0: number): void;
							});
							public constructor();
							public onChange(param0: number): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:

