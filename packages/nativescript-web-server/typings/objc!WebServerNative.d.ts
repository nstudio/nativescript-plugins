
declare const enum CServerStatus {

	Inactive = 0,

	Active = 1,

	Crashed = 2,

	Starting = 3,

	Stopping = 4
}

interface CStaticServiceOptions {
	logger: boolean;
	path: string;
	directory: string;
	index: string;
	host_name: string;
	port: number;
	workers: number;
	show_files: boolean;
}
declare var CStaticServiceOptions: interop.StructType<CStaticServiceOptions>;

interface CWebSocketServiceOptions {
	logger: boolean;
	path: string;
	max_payload: number;
	host_name: string;
	port: number;
	workers: number;
	auto_pong: boolean;
}
declare var CWebSocketServiceOptions: interop.StructType<CWebSocketServiceOptions>;

declare const enum CWebsocketServerStatus {

	Inactive = 0,

	Active = 1,

	Crashed = 2,

	Starting = 3,

	Stopping = 4
}

declare class NSCClient extends NSObject {

	static alloc(): NSCClient; // inherited from NSObject

	static new(): NSCClient; // inherited from NSObject

	readonly id: number;
}

declare class NSCMessage extends NSObject {

	static alloc(): NSCMessage; // inherited from NSObject

	static new(): NSCMessage; // inherited from NSObject

	readonly data: NSData;

	readonly text: string;

	readonly type: NSCMessageType;
}

declare const enum NSCMessageType {

	Text = 0,

	Binary = 1,

	Ping = 2,

	Pong = 3
}

declare class NSCServer extends NSObject {

	static alloc(): NSCServer; // inherited from NSObject

	static new(): NSCServer; // inherited from NSObject

	readonly status: NSCServerStatus;

	constructor();

	init(logger: boolean, path: string, directory: string, index: string, hostName: string, port: number, workers: number, showFiles: boolean): this;

	setStatusChangeCallback(callback: (p1: NSCServerStatus) => void): void;

	start(callback: (p1: string) => void): void;

	stop(wait: boolean, callback: (p1: string) => void): void;
}

declare const enum NSCServerStatus {

	Inactive = 0,

	Active = 1,

	Crashed = 2,

	Starting = 3,

	Stopping = 4
}

declare class NSCWebSocketServer extends NSObject {

	static alloc(): NSCWebSocketServer; // inherited from NSObject

	static new(): NSCWebSocketServer; // inherited from NSObject

	readonly status: NSCServerStatus;

	constructor();

	addOnConnect(callback: (p1: NSCClient) => void): number;

	addOnDisconnect(callback: (p1: NSCClient, p2: number, p3: string) => void): number;

	addOnError(callback: (p1: NSCClient, p2: string) => void): number;

	addOnMessage(callback: (p1: NSCClient, p2: NSCMessage) => void): number;

	addOnPing(callback: (p1: NSCClient, p2: NSData) => void): number;

	addOnPong(callback: (p1: NSCClient, p2: NSData) => void): number;

	broadcast(text: string): void;

	broadcastEmptyPing(): void;

	broadcastEmptyPong(): void;

	broadcastWithBinary(binary: NSData): void;

	broadcastWithPing(ping: NSData): void;

	broadcastWithPong(pong: NSData): void;

	init(logger: boolean, path: string, maxPayload: number, hostName: string, port: number, workers: number, autoPong: boolean): this;

	removeOnConnect(id: number): void;

	removeOnDisconnect(id: number): void;

	removeOnError(id: number): void;

	removeOnMessage(id: number): void;

	removeOnPing(id: number): void;

	removeOnPong(id: number): void;

	sendEmptyPingWithId(id: number): void;

	sendEmptyPongWithId(id: number): void;

	sendWithBinaryId(binary: NSData, id: number): void;

	sendWithPingId(ping: NSData, id: number): void;

	sendWithPongId(pong: NSData, id: number): void;

	sendWithTextId(text: string, id: number): void;

	setStatusChangeCallback(callback: (p1: NSCServerStatus) => void): void;

	start(callback: (p1: string) => void): void;

	stop(wait: boolean, callback: (p1: string) => void): void;
}

declare var WebServerNativeVersionNumber: number;

declare var WebServerNativeVersionString: interop.Reference<number>;

declare const enum WebsocketMessageType {

	Text = 0,

	Binary = 1,

	Ping = 2,

	Pong = 3
}

declare function webserver_clear_status_callback(server: interop.Pointer | interop.Reference<any>): void;

declare function webserver_error_release(error: string | interop.Pointer | interop.Reference<any>): void;

declare function webserver_init(options: interop.Pointer | interop.Reference<CStaticServiceOptions>): interop.Pointer | interop.Reference<any>;

declare function webserver_release(server: interop.Pointer | interop.Reference<any>): void;

declare function webserver_set_status_callback(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: CServerStatus, p2: interop.Pointer | interop.Reference<any>) => void>): void;

declare function webserver_start(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => void>): void;

declare function webserver_status(server: interop.Pointer | interop.Reference<any>): CServerStatus;

declare function webserver_stop(server: interop.Pointer | interop.Reference<any>, wait: boolean, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => void>): void;

declare function webserver_websocket_add_connect_callback(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: number, p2: interop.Pointer | interop.Reference<any>) => void>): number;

declare function webserver_websocket_add_disconnect_callback(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: number, p2: interop.Pointer | interop.Reference<any>, p3: interop.Pointer | interop.Reference<any>) => void>): number;

declare function webserver_websocket_add_error_callback(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: number, p2: string, p3: interop.Pointer | interop.Reference<any>) => void>): number;

declare function webserver_websocket_add_message_callback(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: number, p2: interop.Pointer | interop.Reference<any>, p3: interop.Pointer | interop.Reference<any>) => void>): number;

declare function webserver_websocket_broadcast_binary(server: interop.Pointer | interop.Reference<any>, data: string | interop.Pointer | interop.Reference<any>, data_size: number): void;

declare function webserver_websocket_broadcast_ping(server: interop.Pointer | interop.Reference<any>, data: string | interop.Pointer | interop.Reference<any>, data_size: number): void;

declare function webserver_websocket_broadcast_pong(server: interop.Pointer | interop.Reference<any>, data: string | interop.Pointer | interop.Reference<any>, data_size: number): void;

declare function webserver_websocket_broadcast_text(server: interop.Pointer | interop.Reference<any>, message: string | interop.Pointer | interop.Reference<any>): void;

declare function webserver_websocket_clear_status_callback(server: interop.Pointer | interop.Reference<any>): void;

declare function webserver_websocket_client(server: interop.Pointer | interop.Reference<any>, client_id: number): interop.Pointer | interop.Reference<any>;

declare function webserver_websocket_client_id(client: interop.Pointer | interop.Reference<any>): number;

declare function webserver_websocket_client_release(client: interop.Pointer | interop.Reference<any>): void;

declare function webserver_websocket_init(options: interop.Pointer | interop.Reference<CWebSocketServiceOptions>): interop.Pointer | interop.Reference<any>;

declare function webserver_websocket_message_create_binary(data: string | interop.Pointer | interop.Reference<any>, data_size: number): interop.Pointer | interop.Reference<any>;

declare function webserver_websocket_message_create_ping(data: string | interop.Pointer | interop.Reference<any>, data_size: number): interop.Pointer | interop.Reference<any>;

declare function webserver_websocket_message_create_pong(data: string | interop.Pointer | interop.Reference<any>, data_size: number): interop.Pointer | interop.Reference<any>;

declare function webserver_websocket_message_create_text(text: string | interop.Pointer | interop.Reference<any>): interop.Pointer | interop.Reference<any>;

declare function webserver_websocket_message_data(message: interop.Pointer | interop.Reference<any>): string;

declare function webserver_websocket_message_data_size(message: interop.Pointer | interop.Reference<any>): number;

declare function webserver_websocket_message_release(message: interop.Pointer | interop.Reference<any>): void;

declare function webserver_websocket_message_text(message: interop.Pointer | interop.Reference<any>): string;

declare function webserver_websocket_message_type(message: interop.Pointer | interop.Reference<any>): WebsocketMessageType;

declare function webserver_websocket_reason_code(reason: interop.Pointer | interop.Reference<any>): number;

declare function webserver_websocket_reason_description(reason: interop.Pointer | interop.Reference<any>): string;

declare function webserver_websocket_reason_release(reason: interop.Pointer | interop.Reference<any>): void;

declare function webserver_websocket_release(server: interop.Pointer | interop.Reference<any>): void;

declare function webserver_websocket_remove_connect_callback(server: interop.Pointer | interop.Reference<any>, id: number): void;

declare function webserver_websocket_remove_disconnect_callback(server: interop.Pointer | interop.Reference<any>, id: number): void;

declare function webserver_websocket_remove_error_callback(server: interop.Pointer | interop.Reference<any>, id: number): void;

declare function webserver_websocket_remove_message_callback(server: interop.Pointer | interop.Reference<any>, id: number): void;

declare function webserver_websocket_send_binary(server: interop.Pointer | interop.Reference<any>, id: number, data: string | interop.Pointer | interop.Reference<any>, data_size: number): void;

declare function webserver_websocket_send_ping(server: interop.Pointer | interop.Reference<any>, id: number, data: string | interop.Pointer | interop.Reference<any>, data_size: number): void;

declare function webserver_websocket_send_pong(server: interop.Pointer | interop.Reference<any>, id: number, data: string | interop.Pointer | interop.Reference<any>, data_size: number): void;

declare function webserver_websocket_send_text(server: interop.Pointer | interop.Reference<any>, id: number, message: string | interop.Pointer | interop.Reference<any>): void;

declare function webserver_websocket_set_status_callback(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: CServerStatus, p2: interop.Pointer | interop.Reference<any>) => void>): void;

declare function webserver_websocket_start(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => void>): void;

declare function webserver_websocket_status(server: interop.Pointer | interop.Reference<any>): CWebsocketServerStatus;

declare function webserver_websocket_stop(server: interop.Pointer | interop.Reference<any>, wait: boolean, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => void>): void;
