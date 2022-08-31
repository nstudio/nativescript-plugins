declare module org {
	export module walletconnect {
		export class Session {
			public static class: java.lang.Class<org.walletconnect.Session>;
			/**
			 * Constructs a new instance of the org.walletconnect.Session interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				init(): void;
				offer(): void;
				approve(param0: java.util.List<string>, param1: number): void;
				reject(): void;
				update(param0: java.util.List<string>, param1: number): void;
				kill(): void;
				peerMeta(): org.walletconnect.Session.PeerMeta;
				approvedAccounts(): java.util.List<string>;
				approveRequest(param0: number, param1: any): void;
				rejectRequest(param0: number, param1: number, param2: string): void;
				performMethodCall(param0: org.walletconnect.Session.MethodCall, param1: any /* Function arg is Response */): void;
				addCallback(param0: org.walletconnect.Session.Callback): void;
				removeCallback(param0: org.walletconnect.Session.Callback): void;
				clearCallbacks(): void;
			});
			public constructor();
			public approvedAccounts(): java.util.List<string>;
			public clearCallbacks(): void;
			public approve(param0: java.util.List<string>, param1: number): void;
			public init(): void;
			public offer(): void;
			public rejectRequest(param0: number, param1: number, param2: string): void;
			public performMethodCall(param0: org.walletconnect.Session.MethodCall, param1: any /* Function arg is Response */): void;
			public approveRequest(param0: number, param1: any): void;
			public reject(): void;
			public kill(): void;
			public removeCallback(param0: org.walletconnect.Session.Callback): void;
			public update(param0: java.util.List<string>, param1: number): void;
			public addCallback(param0: org.walletconnect.Session.Callback): void;
			public peerMeta(): org.walletconnect.Session.PeerMeta;
		}
		export module Session {
			export class Callback {
				public static class: java.lang.Class<org.walletconnect.Session.Callback>;
				/**
				 * Constructs a new instance of the org.walletconnect.Session$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onStatus(param0: org.walletconnect.Session.Status): void;
					onMethodCall(param0: org.walletconnect.Session.MethodCall): void;
				});
				public constructor();
				public onMethodCall(param0: org.walletconnect.Session.MethodCall): void;
				public onStatus(param0: org.walletconnect.Session.Status): void;
			}
			export class Config {
				public static class: java.lang.Class<org.walletconnect.Session.Config>;
				public toFullyQualifiedConfig(): org.walletconnect.Session.FullyQualifiedConfig;
				public copy(param0: string, param1: string, param2: string, param3: string, param4: number): org.walletconnect.Session.Config;
				public component1(): string;
				public component4(): string;
				public isFullyQualifiedConfig(): boolean;
				public toString(): string;
				public toWCUri(): string;
				public getKey(): string;
				public component5(): number;
				public getVersion(): number;
				public component3(): string;
				public hashCode(): number;
				public getBridge(): string;
				public component2(): string;
				public equals(param0: any): boolean;
				public getHandshakeTopic(): string;
				public getProtocol(): string;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: number);
			}
			export module Config {
				export class Companion {
					public static class: java.lang.Class<org.walletconnect.Session.Config.Companion>;
					public fromWCUri(param0: string): org.walletconnect.Session.Config;
				}
			}
			export class DefaultImpls {
				public static class: java.lang.Class<org.walletconnect.Session.DefaultImpls>;
			}
			export class Error {
				public static class: java.lang.Class<org.walletconnect.Session.Error>;
				public copy(param0: number, param1: string): org.walletconnect.Session.Error;
				public constructor(param0: number, param1: string);
				public hashCode(): number;
				public getCode(): number;
				public component2(): string;
				public equals(param0: any): boolean;
				public component1(): number;
				public getMessage(): string;
				public toString(): string;
			}
			export class FullyQualifiedConfig {
				public static class: java.lang.Class<org.walletconnect.Session.FullyQualifiedConfig>;
				public component1(): string;
				public component4(): string;
				public toString(): string;
				public getKey(): string;
				public component5(): number;
				public getVersion(): number;
				public component3(): string;
				public hashCode(): number;
				public getBridge(): string;
				public component2(): string;
				public equals(param0: any): boolean;
				public getHandshakeTopic(): string;
				public getProtocol(): string;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: number);
				public copy(param0: string, param1: string, param2: string, param3: string, param4: number): org.walletconnect.Session.FullyQualifiedConfig;
			}
			export abstract class MethodCall {
				public static class: java.lang.Class<org.walletconnect.Session.MethodCall>;
				public id(): number;
			}
			export module MethodCall {
				export class Custom extends org.walletconnect.Session.MethodCall {
					public static class: java.lang.Class<org.walletconnect.Session.MethodCall.Custom>;
					public equals(param0: any): boolean;
					public constructor(param0: number, param1: string, param2: java.util.List<any>);
					public toString(): string;
					public component2(): string;
					public component3(): java.util.List<any>;
					public getId(): number;
					public component1(): number;
					public getParams(): java.util.List<any>;
					public hashCode(): number;
					public getMethod(): string;
					public copy(param0: number, param1: string, param2: java.util.List<any>): org.walletconnect.Session.MethodCall.Custom;
				}
				export class Response extends org.walletconnect.Session.MethodCall {
					public static class: java.lang.Class<org.walletconnect.Session.MethodCall.Response>;
					public equals(param0: any): boolean;
					public constructor(param0: number, param1: any, param2: org.walletconnect.Session.Error);
					public toString(): string;
					public getId(): number;
					public component1(): number;
					public component2(): any;
					public getResult(): any;
					public hashCode(): number;
					public getError(): org.walletconnect.Session.Error;
					public component3(): org.walletconnect.Session.Error;
					public copy(param0: number, param1: any, param2: org.walletconnect.Session.Error): org.walletconnect.Session.MethodCall.Response;
				}
				export class SendTransaction extends org.walletconnect.Session.MethodCall {
					public static class: java.lang.Class<org.walletconnect.Session.MethodCall.SendTransaction>;
					public getGasPrice(): string;
					public getNonce(): string;
					public component2(): string;
					public component5(): string;
					public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string);
					public getFrom(): string;
					public getId(): number;
					public getTo(): string;
					public getGasLimit(): string;
					public component7(): string;
					public component3(): string;
					public copy(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): org.walletconnect.Session.MethodCall.SendTransaction;
					public getData(): string;
					public equals(param0: any): boolean;
					public getValue(): string;
					public toString(): string;
					public component8(): string;
					public component1(): number;
					public component6(): string;
					public component4(): string;
					public hashCode(): number;
				}
				export class SessionRequest extends org.walletconnect.Session.MethodCall {
					public static class: java.lang.Class<org.walletconnect.Session.MethodCall.SessionRequest>;
					public copy(param0: number, param1: org.walletconnect.Session.PeerData): org.walletconnect.Session.MethodCall.SessionRequest;
					public equals(param0: any): boolean;
					public getPeer(): org.walletconnect.Session.PeerData;
					public toString(): string;
					public constructor(param0: number, param1: org.walletconnect.Session.PeerData);
					public getId(): number;
					public component1(): number;
					public hashCode(): number;
					public component2(): org.walletconnect.Session.PeerData;
				}
				export class SessionUpdate extends org.walletconnect.Session.MethodCall {
					public static class: java.lang.Class<org.walletconnect.Session.MethodCall.SessionUpdate>;
					public copy(param0: number, param1: org.walletconnect.Session.SessionParams): org.walletconnect.Session.MethodCall.SessionUpdate;
					public equals(param0: any): boolean;
					public constructor(param0: number, param1: org.walletconnect.Session.SessionParams);
					public toString(): string;
					public component2(): org.walletconnect.Session.SessionParams;
					public getParams(): org.walletconnect.Session.SessionParams;
					public getId(): number;
					public component1(): number;
					public hashCode(): number;
				}
				export class SignMessage extends org.walletconnect.Session.MethodCall {
					public static class: java.lang.Class<org.walletconnect.Session.MethodCall.SignMessage>;
					public getAddress(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public component2(): string;
					public copy(param0: number, param1: string, param2: string): org.walletconnect.Session.MethodCall.SignMessage;
					public getId(): number;
					public component1(): number;
					public getMessage(): string;
					public constructor(param0: number, param1: string, param2: string);
					public component3(): string;
					public hashCode(): number;
				}
			}
			export abstract class MethodCallException {
				public static class: java.lang.Class<org.walletconnect.Session.MethodCallException>;
				public getId(): number;
				public getCode(): number;
			}
			export module MethodCallException {
				export class InvalidAccount extends org.walletconnect.Session.MethodCallException {
					public static class: java.lang.Class<org.walletconnect.Session.MethodCallException.InvalidAccount>;
					public constructor(param0: number, param1: string);
				}
				export class InvalidRequest extends org.walletconnect.Session.MethodCallException {
					public static class: java.lang.Class<org.walletconnect.Session.MethodCallException.InvalidRequest>;
					public constructor(param0: number, param1: string);
				}
			}
			export class PayloadAdapter {
				public static class: java.lang.Class<org.walletconnect.Session.PayloadAdapter>;
				/**
				 * Constructs a new instance of the org.walletconnect.Session$PayloadAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					parse(param0: string, param1: string): org.walletconnect.Session.MethodCall;
					prepare(param0: org.walletconnect.Session.MethodCall, param1: string): string;
				});
				public constructor();
				public parse(param0: string, param1: string): org.walletconnect.Session.MethodCall;
				public prepare(param0: org.walletconnect.Session.MethodCall, param1: string): string;
			}
			export class PeerData {
				public static class: java.lang.Class<org.walletconnect.Session.PeerData>;
				public copy(param0: string, param1: org.walletconnect.Session.PeerMeta): org.walletconnect.Session.PeerData;
				public getId(): string;
				public getMeta(): org.walletconnect.Session.PeerMeta;
				public component2(): org.walletconnect.Session.PeerMeta;
				public component1(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string, param1: org.walletconnect.Session.PeerMeta);
			}
			export class PeerMeta {
				public static class: java.lang.Class<org.walletconnect.Session.PeerMeta>;
				public component1(): string;
				public component4(): java.util.List<string>;
				public getUrl(): string;
				public getName(): string;
				public getDescription(): string;
				public toString(): string;
				public constructor(param0: string, param1: string, param2: string, param3: java.util.List<string>);
				public constructor();
				public component3(): string;
				public hashCode(): number;
				public component2(): string;
				public equals(param0: any): boolean;
				public copy(param0: string, param1: string, param2: string, param3: java.util.List<string>): org.walletconnect.Session.PeerMeta;
				public getIcons(): java.util.List<string>;
			}
			export class SessionParams {
				public static class: java.lang.Class<org.walletconnect.Session.SessionParams>;
				public getAccounts(): java.util.List<string>;
				public getApproved(): boolean;
				public component1(): boolean;
				public component2(): java.lang.Long;
				public component4(): org.walletconnect.Session.PeerData;
				public toString(): string;
				public getChainId(): java.lang.Long;
				public getPeerData(): org.walletconnect.Session.PeerData;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public component3(): java.util.List<string>;
				public copy(param0: boolean, param1: java.lang.Long, param2: java.util.List<string>, param3: org.walletconnect.Session.PeerData): org.walletconnect.Session.SessionParams;
				public constructor(param0: boolean, param1: java.lang.Long, param2: java.util.List<string>, param3: org.walletconnect.Session.PeerData);
			}
			export abstract class Status {
				public static class: java.lang.Class<org.walletconnect.Session.Status>;
			}
			export module Status {
				export class Approved extends org.walletconnect.Session.Status {
					public static class: java.lang.Class<org.walletconnect.Session.Status.Approved>;
					public static INSTANCE: org.walletconnect.Session.Status.Approved;
				}
				export class Closed extends org.walletconnect.Session.Status {
					public static class: java.lang.Class<org.walletconnect.Session.Status.Closed>;
					public static INSTANCE: org.walletconnect.Session.Status.Closed;
				}
				export class Connected extends org.walletconnect.Session.Status {
					public static class: java.lang.Class<org.walletconnect.Session.Status.Connected>;
					public static INSTANCE: org.walletconnect.Session.Status.Connected;
				}
				export class Disconnected extends org.walletconnect.Session.Status {
					public static class: java.lang.Class<org.walletconnect.Session.Status.Disconnected>;
					public static INSTANCE: org.walletconnect.Session.Status.Disconnected;
				}
				export class Error extends org.walletconnect.Session.Status {
					public static class: java.lang.Class<org.walletconnect.Session.Status.Error>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): java.lang.Throwable;
					public constructor(param0: java.lang.Throwable);
					public getThrowable(): java.lang.Throwable;
					public copy(param0: java.lang.Throwable): org.walletconnect.Session.Status.Error;
					public hashCode(): number;
				}
			}
			export class Transport {
				public static class: java.lang.Class<org.walletconnect.Session.Transport>;
				/**
				 * Constructs a new instance of the org.walletconnect.Session$Transport interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					connect(): boolean;
					isConnected(): boolean;
					send(param0: org.walletconnect.Session.Transport.Message): void;
					close(): void;
				});
				public constructor();
				public isConnected(): boolean;
				public close(): void;
				public send(param0: org.walletconnect.Session.Transport.Message): void;
				public connect(): boolean;
			}
			export module Transport {
				export class Builder {
					public static class: java.lang.Class<org.walletconnect.Session.Transport.Builder>;
					/**
					 * Constructs a new instance of the org.walletconnect.Session$Transport$Builder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: string, param1: any /* statusHandler: (Status) -> Unit */, param2: any /* messageHandler: (Message) -> Unit */): org.walletconnect.Session.Transport;
					});
					public constructor();
					public build(param0: string, param1: any /* statusHandler: (Status) -> Unit */, param2: any /* messageHandler: (Message) -> Unit */): org.walletconnect.Session.Transport;
				}
				export class Message {
					public static class: java.lang.Class<org.walletconnect.Session.Transport.Message>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public component2(): string;
					public getTopic(): string;
					public component3(): string;
					public getType(): string;
					public hashCode(): number;
					public copy(param0: string, param1: string, param2: string): org.walletconnect.Session.Transport.Message;
					public getPayload(): string;
					public constructor(param0: string, param1: string, param2: string);
				}
				export abstract class Status {
					public static class: java.lang.Class<org.walletconnect.Session.Transport.Status>;
				}
				export module Status {
					export class Connected extends org.walletconnect.Session.Transport.Status {
						public static class: java.lang.Class<org.walletconnect.Session.Transport.Status.Connected>;
						public static INSTANCE: org.walletconnect.Session.Transport.Status.Connected;
					}
					export class Disconnected extends org.walletconnect.Session.Transport.Status {
						public static class: java.lang.Class<org.walletconnect.Session.Transport.Status.Disconnected>;
						public static INSTANCE: org.walletconnect.Session.Transport.Status.Disconnected;
					}
					export class Error extends org.walletconnect.Session.Transport.Status {
						public static class: java.lang.Class<org.walletconnect.Session.Transport.Status.Error>;
						public constructor(param0: java.lang.Throwable);
						public component1(): java.lang.Throwable;
						public copy(param0: java.lang.Throwable): org.walletconnect.Session.Transport.Status.Error;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getThrowable(): java.lang.Throwable;
						public toString(): string;
					}
				}
			}
			export class TransportError {
				public static class: java.lang.Class<org.walletconnect.Session.TransportError>;
				public copy(param0: java.lang.Throwable): org.walletconnect.Session.TransportError;
				public component1(): java.lang.Throwable;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getCause(): java.lang.Throwable;
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
			}
		}
	}
}

declare module org {
	export module walletconnect {
		export module impls {
			export class FileWCSessionStore extends org.walletconnect.impls.WCSessionStore {
				public static class: java.lang.Class<org.walletconnect.impls.FileWCSessionStore>;
				public list(): java.util.List<org.walletconnect.impls.WCSessionStore.State>;
				public store(param0: string, param1: org.walletconnect.impls.WCSessionStore.State): void;
				public remove(param0: string): void;
				public constructor(param0: java.io.File, param1: com.squareup.moshi.Moshi);
				public load(param0: string): org.walletconnect.impls.WCSessionStore.State;
			}
		}
	}
}

declare module org {
	export module walletconnect {
		export module impls {
			export class MoshiPayloadAdapter extends org.walletconnect.Session.PayloadAdapter {
				public static class: java.lang.Class<org.walletconnect.impls.MoshiPayloadAdapter>;
				public parse(param0: string, param1: string): org.walletconnect.Session.MethodCall;
				public constructor(param0: com.squareup.moshi.Moshi);
				public prepare(param0: org.walletconnect.Session.MethodCall, param1: string): string;
			}
			export module MoshiPayloadAdapter {
				export class EncryptedPayload {
					public static class: java.lang.Class<org.walletconnect.impls.MoshiPayloadAdapter.EncryptedPayload>;
					public getData(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public copy(param0: string, param1: string, param2: string): org.walletconnect.impls.MoshiPayloadAdapter.EncryptedPayload;
					public component2(): string;
					public component3(): string;
					public getHmac(): string;
					public hashCode(): number;
					public constructor(param0: string, param1: string, param2: string);
					public getIv(): string;
				}
			}
		}
	}
}

declare module org {
	export module walletconnect {
		export module impls {
			export class OkHttpTransport implements org.walletconnect.Session.Transport {
				public static class: java.lang.Class<org.walletconnect.impls.OkHttpTransport>;
				public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
				public isConnected(): boolean;
				public close(): void;
				public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
				public send(param0: org.walletconnect.Session.Transport.Message): void;
				public onMessage(param0: okhttp3.WebSocket, param1: string): void;
				public constructor(param0: okhttp3.OkHttpClient, param1: string, param2: any /* statusHandler: (Session.Transport.Status) -> Unit, */, param3: any /* messageHandler: (Session.Transport.Message) -> Unit */, param4: com.squareup.moshi.Moshi);
				public connect(): boolean;
				public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
			}
			export module OkHttpTransport {
				export class Builder extends org.walletconnect.Session.Transport.Builder {
					public static class: java.lang.Class<org.walletconnect.impls.OkHttpTransport.Builder>;
					public constructor(param0: okhttp3.OkHttpClient, param1: com.squareup.moshi.Moshi);
					public getClient(): okhttp3.OkHttpClient;
					public build(param0: string, param1: any /* statusHandler: (Session.Transport.Status) -> Unit, */, param2: any /* messageHandler: (Session.Transport.Message) -> Unit */): org.walletconnect.Session.Transport;
					public getMoshi(): com.squareup.moshi.Moshi;
				}
			}
		}
	}
}

declare module org {
	export module walletconnect {
		export module impls {
			export class WCSession extends org.walletconnect.Session {
				public static class: java.lang.Class<org.walletconnect.impls.WCSession>;
				public approvedAccounts(): java.util.List<string>;
				public removeCallback(param0: org.walletconnect.Session.Callback): void;
				public constructor(param0: org.walletconnect.Session.FullyQualifiedConfig, param1: org.walletconnect.Session.PayloadAdapter, param2: org.walletconnect.impls.WCSessionStore, param3: org.walletconnect.Session.Transport.Builder, param4: org.walletconnect.Session.PeerMeta, param5: string);
				public reject(): void;
				public kill(): void;
				public rejectRequest(param0: number, param1: number, param2: string): void;
				public addCallback(param0: org.walletconnect.Session.Callback): void;
				public init(): void;
				public offer(): void;
				public peerMeta(): org.walletconnect.Session.PeerMeta;
				public update(param0: java.util.List<string>, param1: number): void;
				public approve(param0: java.util.List<string>, param1: number): void;
				public clearCallbacks(): void;
				public approveRequest(param0: number, param1: any): void;
				public performMethodCall(param0: org.walletconnect.Session.MethodCall, param1: any /* (Session.MethodCall.Response) -> Unit)? */): void;
			}
		}
	}
}

declare module org {
	export module walletconnect {
		export module impls {
			export class WCSessionStore {
				public static class: java.lang.Class<org.walletconnect.impls.WCSessionStore>;
				/**
				 * Constructs a new instance of the org.walletconnect.impls.WCSessionStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: string): org.walletconnect.impls.WCSessionStore.State;
					store(param0: string, param1: org.walletconnect.impls.WCSessionStore.State): void;
					remove(param0: string): void;
					list(): java.util.List<org.walletconnect.impls.WCSessionStore.State>;
				});
				public constructor();
				public list(): java.util.List<org.walletconnect.impls.WCSessionStore.State>;
				public store(param0: string, param1: org.walletconnect.impls.WCSessionStore.State): void;
				public remove(param0: string): void;
				public load(param0: string): org.walletconnect.impls.WCSessionStore.State;
			}
			export module WCSessionStore {
				export class State {
					public static class: java.lang.Class<org.walletconnect.impls.WCSessionStore.State>;
					public getCurrentKey(): string;
					public component5(): string;
					public getClientData(): org.walletconnect.Session.PeerData;
					public getChainId(): java.lang.Long;
					public component7(): java.lang.Long;
					public component4(): java.lang.Long;
					public getPeerData(): org.walletconnect.Session.PeerData;
					public constructor(param0: org.walletconnect.Session.FullyQualifiedConfig, param1: org.walletconnect.Session.PeerData, param2: org.walletconnect.Session.PeerData, param3: java.lang.Long, param4: string, param5: java.util.List<string>, param6: java.lang.Long);
					public equals(param0: any): boolean;
					public toString(): string;
					public component3(): org.walletconnect.Session.PeerData;
					public getConfig(): org.walletconnect.Session.FullyQualifiedConfig;
					public component6(): java.util.List<string>;
					public component1(): org.walletconnect.Session.FullyQualifiedConfig;
					public getApprovedAccounts(): java.util.List<string>;
					public copy(param0: org.walletconnect.Session.FullyQualifiedConfig, param1: org.walletconnect.Session.PeerData, param2: org.walletconnect.Session.PeerData, param3: java.lang.Long, param4: string, param5: java.util.List<string>, param6: java.lang.Long): org.walletconnect.impls.WCSessionStore.State;
					public hashCode(): number;
					public getHandshakeId(): java.lang.Long;
					public component2(): org.walletconnect.Session.PeerData;
				}
			}
		}
	}
}

//Generics information:

