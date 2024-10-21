
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

declare var WebServerNativeVersionNumber: number;

declare var WebServerNativeVersionString: interop.Reference<number>;

declare function webserver_clear_status_callback(server: interop.Pointer | interop.Reference<any>): void;

declare function webserver_error_release(error: string | interop.Pointer | interop.Reference<any>): void;

declare function webserver_init(options: interop.Pointer | interop.Reference<CStaticServiceOptions>): interop.Pointer | interop.Reference<any>;

declare function webserver_release(server: interop.Pointer | interop.Reference<any>): void;

declare function webserver_set_status_callback(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: CServerStatus, p2: interop.Pointer | interop.Reference<any>) => void>): void;

declare function webserver_start(server: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => void>): void;

declare function webserver_status(server: interop.Pointer | interop.Reference<any>): CServerStatus;

declare function webserver_stop(server: interop.Pointer | interop.Reference<any>, wait: boolean, data: interop.Pointer | interop.Reference<any>, callback: interop.FunctionReference<(p1: string, p2: interop.Pointer | interop.Reference<any>) => void>): void;
