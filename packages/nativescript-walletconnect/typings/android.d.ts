declare module com {
	export module trustwallet {
		export module walletconnect {
			export class BuildConfig {
				public static class: java.lang.Class<com.trustwallet.walletconnect.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export class WCCipher {
				public static class: java.lang.Class<com.trustwallet.walletconnect.WCCipher>;
				public static INSTANCE: com.trustwallet.walletconnect.WCCipher;
				public decrypt(param0: com.trustwallet.walletconnect.models.WCEncryptionPayload, param1: androidNative.Array<number>): androidNative.Array<number>;
				public encrypt(param0: androidNative.Array<number>, param1: androidNative.Array<number>): com.trustwallet.walletconnect.models.WCEncryptionPayload;
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export class WCClient {
				public static class: java.lang.Class<com.trustwallet.walletconnect.WCClient>;
				public setOnGetAccounts(param0: kotlin.jvm.functions.Function1<java.lang.Long,kotlin.Unit>): void;
				public getOnWalletAddNetwork(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.session.WCAddNetwork,kotlin.Unit>;
				public setOnFailure(param0: kotlin.jvm.functions.Function1<java.lang.Throwable,kotlin.Unit>): void;
				public getOnBnbTransfer(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder,kotlin.Unit>;
				public getPeerId(): string;
				public rejectRequest(param0: number, param1: string): boolean;
				public addSocketListener(param0: okhttp3.WebSocketListener): void;
				public getOnEthSignTransaction(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction,kotlin.Unit>;
				public isConnected(): boolean;
				public getOnBnbTrade(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder,kotlin.Unit>;
				public getOnGetAccounts(): kotlin.jvm.functions.Function1<java.lang.Long, kotlin.Unit>;
				public setOnBnbTxConfirm(param0: kotlin.jvm.functions.Function1<java.lang.Long,kotlin.Unit>): void;
				public setOnWalletAddNetwork(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.session.WCAddNetwork,kotlin.Unit>): void;
				public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
				public getOnDisconnect(): kotlin.jvm.functions.Function2<java.lang.Integer,string,kotlin.Unit>;
				public getOnSignTransaction(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.WCSignTransaction,kotlin.Unit>;
				public setOnBnbTrade(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder,kotlin.Unit>): void;
				public getOnCustomRequest(): kotlin.jvm.functions.Function2<java.lang.Long,string,kotlin.Unit>;
				public killSession(): boolean;
				public getOnBnbTxConfirm(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.binance.WCBinanceTxConfirmParam,kotlin.Unit>;
				public getOnFailure(): kotlin.jvm.functions.Function1<java.lang.Throwable,kotlin.Unit>;
				public constructor(param0: com.google.gson.GsonBuilder, param1: okhttp3.OkHttpClient);
				public getOnSessionRequest(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.WCPeerMeta,kotlin.Unit>;
				public getOnEthSendTransaction(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction,kotlin.Unit>;
				public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
				public getOnEthSign(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage,kotlin.Unit>;
				public setOnBnbCancel(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder,kotlin.Unit>): void;
				public approveRequest(param0: number, param1: any): boolean;
				public setOnEthSendTransaction(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction,kotlin.Unit>): void;
				public setOnCustomRequest(param0: otlin.jvm.functions.Function2<java.lang.Long,string,kotlin.Unit>): void;
				public setOnSignTransaction(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.WCSignTransaction,kotlin.Unit>): void;
				public rejectSession(param0: string): boolean;
				public getOnWalletChangeNetwork(): kotlin.jvm.functions.Function2<java.lang.Long,java.lang.Integer,kotlin.Unit>;
				public setOnWalletChangeNetwork(param0: kotlin.jvm.functions.Function2<java.lang.Long,java.lang.Integer,kotlin.Unit>): void;
				public onMessage(param0: okhttp3.WebSocket, param1: string): void;
				public getRemotePeerId(): string;
				public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
				public disconnect(): boolean;
				public setOnDisconnect(param0: kotlin.jvm.functions.Function2<java.lang.Integer,string,kotlin.Unit>): void;
				public updateSession(param0: java.util.List<string>, param1: java.lang.Integer, param2: boolean): boolean;
				public removeSocketListener(param0: okhttp3.WebSocketListener): void;
				public getOnBnbCancel(): kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder,kotlin.Unit>;
				public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
				public getChainId(): string;
				public setOnBnbTransfer(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder,kotlin.Unit>): void;
				public connect(param0: com.trustwallet.walletconnect.models.session.WCSession, param1: com.trustwallet.walletconnect.models.WCPeerMeta, param2: string, param3: string): void;
				public getSession(): com.trustwallet.walletconnect.models.session.WCSession;
				public setOnEthSignTransaction(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction,kotlin.Unit>): void;
				public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
				public getPeerMeta(): com.trustwallet.walletconnect.models.WCPeerMeta;
				public approveSession(param0: java.util.List<string>, param1: number): boolean;
				public setOnEthSign(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage,kotlin.Unit>): void;
				public setOnSessionRequest(param0: kotlin.jvm.functions.Function2<java.lang.Long,com.trustwallet.walletconnect.models.WCPeerMeta,kotlin.Unit>): void;
			}
			export module WCClient {
				export class WhenMappings {
					public static class: java.lang.Class<com.trustwallet.walletconnect.WCClient.WhenMappings>;
				}
			}
		}
	}
}


declare module io {
	export module nstudio {
		export module plugins {
			export module walletconnect {
			export class WCClientImpl extends com.trustwallet.walletconnect.WCClient {
				public static class: java.lang.Class<io.nstudio.plugins.walletconnect.WCClientImpl>;

				public getOnConnect(): kotlin.jvm.functions.Function1<boolean,kotlin.Unit>;

				public setOnConnect(param0: kotlin.jvm.functions.Function1<boolean,kotlin.Unit>): void;

			}
		}
	}
	}
}



declare module com {
	export module trustwallet {
		export module walletconnect {
			export class WCSessionStore {
				public static class: java.lang.Class<com.trustwallet.walletconnect.WCSessionStore>;
				/**
				 * Constructs a new instance of the com.trustwallet.walletconnect.WCSessionStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSession(): com.trustwallet.walletconnect.WCSessionStoreItem;
					setSession(param0: com.trustwallet.walletconnect.WCSessionStoreItem): void;
				});
				public constructor();
				public getSession(): com.trustwallet.walletconnect.WCSessionStoreItem;
				public setSession(param0: com.trustwallet.walletconnect.WCSessionStoreItem): void;
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export class WCSessionStoreItem {
				public static class: java.lang.Class<com.trustwallet.walletconnect.WCSessionStoreItem>;
				public component1(): com.trustwallet.walletconnect.models.session.WCSession;
				public component2(): number;
				public getRemotePeerMeta(): com.trustwallet.walletconnect.models.WCPeerMeta;
				public component5(): com.trustwallet.walletconnect.models.WCPeerMeta;
				public component4(): string;
				public getDate(): java.util.Date;
				public getPeerId(): string;
				public toString(): string;
				public getChainId(): number;
				public component7(): java.util.Date;
				public copy(param0: com.trustwallet.walletconnect.models.session.WCSession, param1: number, param2: string, param3: string, param4: com.trustwallet.walletconnect.models.WCPeerMeta, param5: boolean, param6: java.util.Date): com.trustwallet.walletconnect.WCSessionStoreItem;
				public getSession(): com.trustwallet.walletconnect.models.session.WCSession;
				public constructor(param0: com.trustwallet.walletconnect.models.session.WCSession, param1: number, param2: string, param3: string, param4: com.trustwallet.walletconnect.models.WCPeerMeta, param5: boolean, param6: java.util.Date);
				public component3(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getRemotePeerId(): string;
				public component6(): boolean;
				public isAutoSign(): boolean;
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export class WCSessionStoreType extends com.trustwallet.walletconnect.WCSessionStore {
				public static class: java.lang.Class<com.trustwallet.walletconnect.WCSessionStoreType>;
				public getSession(): com.trustwallet.walletconnect.WCSessionStoreItem;
				public constructor(param0: globalAndroid.content.SharedPreferences, param1: com.google.gson.GsonBuilder);
				public setSession(param0: com.trustwallet.walletconnect.WCSessionStoreItem): void;
			}
			export module WCSessionStoreType {
				export class Companion {
					public static class: java.lang.Class<com.trustwallet.walletconnect.WCSessionStoreType.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module exceptions {
				export class InvalidHmacException {
					public static class: java.lang.Class<com.trustwallet.walletconnect.exceptions.InvalidHmacException>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module exceptions {
				export class InvalidJsonRpcParamsException {
					public static class: java.lang.Class<com.trustwallet.walletconnect.exceptions.InvalidJsonRpcParamsException>;
					public getRequestId(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module exceptions {
				export class InvalidMessageException {
					public static class: java.lang.Class<com.trustwallet.walletconnect.exceptions.InvalidMessageException>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module exceptions {
				export class InvalidPayloadException {
					public static class: java.lang.Class<com.trustwallet.walletconnect.exceptions.InvalidPayloadException>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module exceptions {
				export class InvalidSessionException {
					public static class: java.lang.Class<com.trustwallet.walletconnect.exceptions.InvalidSessionException>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module exceptions {
				export class InvalidUriException {
					public static class: java.lang.Class<com.trustwallet.walletconnect.exceptions.InvalidUriException>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module exceptions {
				export class RequiredFieldException {
					public static class: java.lang.Class<com.trustwallet.walletconnect.exceptions.RequiredFieldException>;
					public constructor(param0: string);
					public constructor();
					public getField(): string;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module jsonrpc {
				export class JsonRpcError {
					public static class: java.lang.Class<com.trustwallet.walletconnect.jsonrpc.JsonRpcError>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component2(): string;
					public component1(): number;
					public constructor(param0: number, param1: string);
					public getMessage(): string;
					public hashCode(): number;
					public copy(param0: number, param1: string): com.trustwallet.walletconnect.jsonrpc.JsonRpcError;
					public getCode(): number;
				}
				export module JsonRpcError {
					export class Companion {
						public static class: java.lang.Class<com.trustwallet.walletconnect.jsonrpc.JsonRpcError.Companion>;
						public serverError(param0: string): com.trustwallet.walletconnect.jsonrpc.JsonRpcError;
						public parseError(param0: string): com.trustwallet.walletconnect.jsonrpc.JsonRpcError;
						public methodNotFound(param0: string): com.trustwallet.walletconnect.jsonrpc.JsonRpcError;
						public invalidRequest(param0: string): com.trustwallet.walletconnect.jsonrpc.JsonRpcError;
						public invalidParams(param0: string): com.trustwallet.walletconnect.jsonrpc.JsonRpcError;
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module jsonrpc {
				export class JsonRpcErrorResponse {
					public static class: java.lang.Class<com.trustwallet.walletconnect.jsonrpc.JsonRpcErrorResponse>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getId(): number;
					public component2(): number;
					public copy(param0: string, param1: number, param2: com.trustwallet.walletconnect.jsonrpc.JsonRpcError): com.trustwallet.walletconnect.jsonrpc.JsonRpcErrorResponse;
					public component3(): com.trustwallet.walletconnect.jsonrpc.JsonRpcError;
					public constructor(param0: string, param1: number, param2: com.trustwallet.walletconnect.jsonrpc.JsonRpcError);
					public getJsonrpc(): string;
					public hashCode(): number;
					public getError(): com.trustwallet.walletconnect.jsonrpc.JsonRpcError;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module jsonrpc {
				export class JsonRpcRequest<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.trustwallet.walletconnect.jsonrpc.JsonRpcRequest<any>>;
					public getParams(): T;
					public component2(): string;
					public getId(): number;
					public getMethod(): com.trustwallet.walletconnect.models.WCMethod;
					public copy(param0: number, param1: string, param2: com.trustwallet.walletconnect.models.WCMethod, param3: T): com.trustwallet.walletconnect.jsonrpc.JsonRpcRequest<T>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: number, param1: string, param2: com.trustwallet.walletconnect.models.WCMethod, param3: T);
					public component1(): number;
					public component4(): T;
					public component3(): com.trustwallet.walletconnect.models.WCMethod;
					public getJsonrpc(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module jsonrpc {
				export class JsonRpcResponse<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.trustwallet.walletconnect.jsonrpc.JsonRpcResponse<any>>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public copy(param0: string, param1: number, param2: T): com.trustwallet.walletconnect.jsonrpc.JsonRpcResponse<T>;
					public constructor(param0: string, param1: number, param2: T);
					public component3(): T;
					public getId(): number;
					public getResult(): T;
					public component2(): number;
					public getJsonrpc(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export class MessageType {
					public static class: java.lang.Class<com.trustwallet.walletconnect.models.MessageType>;
					public static PUB: com.trustwallet.walletconnect.models.MessageType;
					public static SUB: com.trustwallet.walletconnect.models.MessageType;
					public static values(): androidNative.Array<com.trustwallet.walletconnect.models.MessageType>;
					public static valueOf(param0: string): com.trustwallet.walletconnect.models.MessageType;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export class WCAccount {
					public static class: java.lang.Class<com.trustwallet.walletconnect.models.WCAccount>;
					public getAddress(): string;
					public equals(param0: any): boolean;
					public toString(): string;
					public getNetwork(): number;
					public component2(): string;
					public component1(): number;
					public constructor(param0: number, param1: string);
					public copy(param0: number, param1: string): com.trustwallet.walletconnect.models.WCAccount;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export class WCEncryptionPayload {
					public static class: java.lang.Class<com.trustwallet.walletconnect.models.WCEncryptionPayload>;
					public getData(): string;
					public equals(param0: any): boolean;
					public copy(param0: string, param1: string, param2: string): com.trustwallet.walletconnect.models.WCEncryptionPayload;
					public toString(): string;
					public component1(): string;
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

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export class WCMethod {
					public static class: java.lang.Class<com.trustwallet.walletconnect.models.WCMethod>;
					public static SESSION_REQUEST: com.trustwallet.walletconnect.models.WCMethod;
					public static SESSION_UPDATE: com.trustwallet.walletconnect.models.WCMethod;
					public static ETH_SIGN: com.trustwallet.walletconnect.models.WCMethod;
					public static ETH_PERSONAL_SIGN: com.trustwallet.walletconnect.models.WCMethod;
					public static ETH_SIGN_TYPE_DATA: com.trustwallet.walletconnect.models.WCMethod;
					public static ETH_SIGN_TYPE_DATA_V4: com.trustwallet.walletconnect.models.WCMethod;
					public static ETH_SIGN_TRANSACTION: com.trustwallet.walletconnect.models.WCMethod;
					public static ETH_SEND_TRANSACTION: com.trustwallet.walletconnect.models.WCMethod;
					public static BNB_SIGN: com.trustwallet.walletconnect.models.WCMethod;
					public static BNB_TRANSACTION_CONFIRM: com.trustwallet.walletconnect.models.WCMethod;
					public static GET_ACCOUNTS: com.trustwallet.walletconnect.models.WCMethod;
					public static SIGN_TRANSACTION: com.trustwallet.walletconnect.models.WCMethod;
					public static WALLET_SWITCH_NETWORK: com.trustwallet.walletconnect.models.WCMethod;
					public static WALLET_ADD_NETWORK: com.trustwallet.walletconnect.models.WCMethod;
					public static valueOf(param0: string): com.trustwallet.walletconnect.models.WCMethod;
					public static values(): androidNative.Array<com.trustwallet.walletconnect.models.WCMethod>;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export class WCPeerMeta {
					public static class: java.lang.Class<com.trustwallet.walletconnect.models.WCPeerMeta>;
					public component2(): string;
					public constructor(param0: string, param1: string, param2: string, param3: java.util.List<string>);
					public component3(): string;
					public component4(): java.util.List<string>;
					public getIcons(): java.util.List<string>;
					public copy(param0: string, param1: string, param2: string, param3: java.util.List<string>): com.trustwallet.walletconnect.models.WCPeerMeta;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getUrl(): string;
					public getName(): string;
					public getDescription(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export class WCSignTransaction {
					public static class: java.lang.Class<com.trustwallet.walletconnect.models.WCSignTransaction>;
					public equals(param0: any): boolean;
					public getTransaction(): string;
					public copy(param0: number, param1: string): com.trustwallet.walletconnect.models.WCSignTransaction;
					public toString(): string;
					public getNetwork(): number;
					public component2(): string;
					public component1(): number;
					public constructor(param0: number, param1: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export class WCSocketMessage {
					public static class: java.lang.Class<com.trustwallet.walletconnect.models.WCSocketMessage>;
					public getType(): com.trustwallet.walletconnect.models.MessageType;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public constructor(param0: string, param1: com.trustwallet.walletconnect.models.MessageType, param2: string);
					public getTopic(): string;
					public copy(param0: string, param1: com.trustwallet.walletconnect.models.MessageType, param2: string): com.trustwallet.walletconnect.models.WCSocketMessage;
					public component2(): com.trustwallet.walletconnect.models.MessageType;
					public component3(): string;
					public hashCode(): number;
					public getPayload(): string;
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module binance {
					export class WCBinanceCancelOrder extends com.trustwallet.walletconnect.models.binance.WCBinanceOrder<com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.Message> {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder>;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.util.List<any>);
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.Message>);
					}
					export module WCBinanceCancelOrder {
						export class Message {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.Message>;
							public getSymbol(): string;
							public component2(): string;
							public getRefid(): string;
							public hashCode(): number;
							public getSender(): string;
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public equals(param0: any): boolean;
							public component3(): string;
							public component1(): string;
							public copy(param0: string, param1: string, param2: string): com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.Message;
						}
						export class MessageKey {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.MessageKey>;
							public static REFID: com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.MessageKey;
							public static SENDER: com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.MessageKey;
							public static SYMBOL: com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.MessageKey;
							public getKey(): string;
							public static values(): androidNative.Array<com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.MessageKey>;
							public static valueOf(param0: string): com.trustwallet.walletconnect.models.binance.WCBinanceCancelOrder.MessageKey;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module binance {
					export class WCBinanceOrder<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceOrder<any>>;
						public getAccountNumber(): string;
						public getSource(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.util.List<any>);
						public getMsgs(): java.util.List<T>;
						public getData(): string;
						public getMemo(): string;
						public getSequence(): string;
						public getChainId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module binance {
					export class WCBinanceTradeOrder extends com.trustwallet.walletconnect.models.binance.WCBinanceOrder<com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.Message> {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder>;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.util.List<any>);
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.Message>);
					}
					export module WCBinanceTradeOrder {
						export class Message {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.Message>;
							public getTimeInforce(): number;
							public getSide(): number;
							public component7(): string;
							public hashCode(): number;
							public getId(): string;
							public component2(): number;
							public getOrderType(): number;
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: string, param5: number, param6: string, param7: number);
							public toString(): string;
							public component5(): string;
							public component1(): string;
							public getSymbol(): string;
							public getQuantity(): number;
							public component8(): number;
							public getSender(): string;
							public component4(): number;
							public component6(): number;
							public getPrice(): number;
							public component3(): number;
							public equals(param0: any): boolean;
							public copy(param0: string, param1: number, param2: number, param3: number, param4: string, param5: number, param6: string, param7: number): com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.Message;
						}
						export class MessageKey {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey>;
							public static ID: com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
							public static ORDER_TYPE: com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
							public static PRICE: com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
							public static QUANTITY: com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
							public static SENDER: com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
							public static SIDE: com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
							public static SYMBOL: com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
							public static TIME_INFORCE: com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
							public getKey(): string;
							public static values(): androidNative.Array<com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey>;
							public static valueOf(param0: string): com.trustwallet.walletconnect.models.binance.WCBinanceTradeOrder.MessageKey;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module binance {
					export class WCBinanceTradePair {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTradePair>;
						public component2(): string;
						public copy(param0: string, param1: string): com.trustwallet.walletconnect.models.binance.WCBinanceTradePair;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: string);
						public getFrom(): string;
						public toString(): string;
						public getTo(): string;
					}
					export module WCBinanceTradePair {
						export class Companion {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTradePair.Companion>;
							public from(param0: string): com.trustwallet.walletconnect.models.binance.WCBinanceTradePair;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module binance {
					export class WCBinanceTransferOrder extends com.trustwallet.walletconnect.models.binance.WCBinanceOrder<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message> {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder>;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.util.List<any>);
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message>);
					}
					export module WCBinanceTransferOrder {
						export class Message {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message>;
							public getInputs(): java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>;
							public component1(): java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>;
							public component2(): java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>;
							public constructor(param0: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>, param1: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>);
							public hashCode(): number;
							public copy(param0: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>, param1: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>): com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message;
							public getOutputs(): java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module Message {
							export class Item {
								public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item>;
								public getCoins(): java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item.Coin>;
								public component1(): string;
								public toString(): string;
								public getAddress(): string;
								public copy(param0: string, param1: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item.Coin>): com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item;
								public constructor(param0: string, param1: java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item.Coin>);
								public component2(): java.util.List<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item.Coin>;
								public equals(param0: any): boolean;
								public hashCode(): number;
							}
							export module Item {
								export class Coin {
									public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item.Coin>;
									public component2(): string;
									public hashCode(): number;
									public copy(param0: number, param1: string): com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.Message.Item.Coin;
									public component1(): number;
									public equals(param0: any): boolean;
									public constructor(param0: number, param1: string);
									public toString(): string;
									public getAmount(): number;
									public getDenom(): string;
								}
							}
						}
						export class MessageKey {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.MessageKey>;
							public static INPUTS: com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.MessageKey;
							public static OUTPUTS: com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.MessageKey;
							public getKey(): string;
							public static valueOf(param0: string): com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.MessageKey;
							public static values(): androidNative.Array<com.trustwallet.walletconnect.models.binance.WCBinanceTransferOrder.MessageKey>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module binance {
					export class WCBinanceTxConfirmParam {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.binance.WCBinanceTxConfirmParam>;
						public component2(): string;
						public constructor(param0: boolean, param1: string);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): boolean;
						public copy(param0: boolean, param1: string): com.trustwallet.walletconnect.models.binance.WCBinanceTxConfirmParam;
						public getErrorMsg(): string;
						public toString(): string;
						public getOk(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module ethereum {
					export class WCEthereumSignMessage {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage>;
						public getRaw(): java.util.List<string>;
						public getType(): com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType;
						public component1(): java.util.List<string>;
						public component2(): com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType;
						public copy(param0: java.util.List<string>, param1: com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType): com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getData(): string;
						public constructor(param0: java.util.List<string>, param1: com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType);
						public toString(): string;
					}
					export module WCEthereumSignMessage {
						export class WCSignType {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType>;
							public static MESSAGE: com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType;
							public static PERSONAL_MESSAGE: com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType;
							public static TYPED_MESSAGE: com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType;
							public static values(): androidNative.Array<com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType>;
							public static valueOf(param0: string): com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WCSignType;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.ethereum.WCEthereumSignMessage.WhenMappings>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module ethereum {
					export class WCEthereumTransaction {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction>;
						public getNonce(): string;
						public component5(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string);
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getValue(): string;
						public getData(): string;
						public component9(): string;
						public component4(): string;
						public component10(): string;
						public getFrom(): string;
						public getMaxFeePerGas(): string;
						public component8(): string;
						public component3(): string;
						public getGas(): string;
						public component7(): string;
						public toString(): string;
						public component2(): string;
						public copy(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string, param9: string): com.trustwallet.walletconnect.models.ethereum.WCEthereumTransaction;
						public getMaxPriorityFeePerGas(): string;
						public component6(): string;
						public getGasPrice(): string;
						public getTo(): string;
						public getGasLimit(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module session {
					export class WCAddNetwork {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.session.WCAddNetwork>;
						public getRpcUrls(): java.util.List<string>;
						public getNativeCurrency(): com.trustwallet.walletconnect.models.session.WCAddNetwork.WcAddNetworkNativeCurrency;
						public component1(): string;
						public copy(param0: string, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: com.trustwallet.walletconnect.models.session.WCAddNetwork.WcAddNetworkNativeCurrency): com.trustwallet.walletconnect.models.session.WCAddNetwork;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getBlockExplorerUrls(): java.util.List<string>;
						public toString(): string;
						public getChainIdHex(): string;
						public component5(): com.trustwallet.walletconnect.models.session.WCAddNetwork.WcAddNetworkNativeCurrency;
						public constructor(param0: string, param1: string, param2: java.util.List<string>, param3: java.util.List<string>, param4: com.trustwallet.walletconnect.models.session.WCAddNetwork.WcAddNetworkNativeCurrency);
						public component2(): string;
						public component3(): java.util.List<string>;
						public component4(): java.util.List<string>;
						public getChainName(): string;
					}
					export module WCAddNetwork {
						export class WcAddNetworkNativeCurrency {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.session.WCAddNetwork.WcAddNetworkNativeCurrency>;
							public getSymbol(): string;
							public constructor(param0: string, param1: string, param2: number);
							public component2(): string;
							public getDecimals(): number;
							public hashCode(): number;
							public getName(): string;
							public copy(param0: string, param1: string, param2: number): com.trustwallet.walletconnect.models.session.WCAddNetwork.WcAddNetworkNativeCurrency;
							public component3(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public component1(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module session {
					export class WCApproveSessionResponse {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.session.WCApproveSessionResponse>;
						public copy(param0: boolean, param1: number, param2: java.util.List<string>, param3: string, param4: com.trustwallet.walletconnect.models.WCPeerMeta): com.trustwallet.walletconnect.models.session.WCApproveSessionResponse;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPeerMeta(): com.trustwallet.walletconnect.models.WCPeerMeta;
						public toString(): string;
						public constructor(param0: boolean, param1: number, param2: java.util.List<string>, param3: string, param4: com.trustwallet.walletconnect.models.WCPeerMeta);
						public component4(): string;
						public component2(): number;
						public getPeerId(): string;
						public component3(): java.util.List<string>;
						public getChainId(): number;
						public component1(): boolean;
						public getAccounts(): java.util.List<string>;
						public getApproved(): boolean;
						public component5(): com.trustwallet.walletconnect.models.WCPeerMeta;
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module session {
					export class WCChangeNetwork {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.session.WCChangeNetwork>;
						public getChainIdHex(): string;
						public copy(param0: string): com.trustwallet.walletconnect.models.session.WCChangeNetwork;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module session {
					export class WCSession {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.session.WCSession>;
						public component3(): string;
						public getVersion(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public copy(param0: string, param1: string, param2: string, param3: string): com.trustwallet.walletconnect.models.session.WCSession;
						public getKey(): string;
						public toString(): string;
						public toUri(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public component4(): string;
						public getBridge(): string;
						public getTopic(): string;
						public component2(): string;
					}
					export module WCSession {
						export class Companion {
							public static class: java.lang.Class<com.trustwallet.walletconnect.models.session.WCSession.Companion>;
							public from(param0: string): com.trustwallet.walletconnect.models.session.WCSession;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module session {
					export class WCSessionRequest {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.session.WCSessionRequest>;
						public constructor(param0: string, param1: com.trustwallet.walletconnect.models.WCPeerMeta, param2: string);
						public component2(): com.trustwallet.walletconnect.models.WCPeerMeta;
						public component3(): string;
						public getPeerId(): string;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPeerMeta(): com.trustwallet.walletconnect.models.WCPeerMeta;
						public getChainId(): string;
						public copy(param0: string, param1: com.trustwallet.walletconnect.models.WCPeerMeta, param2: string): com.trustwallet.walletconnect.models.session.WCSessionRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module trustwallet {
		export module walletconnect {
			export module models {
				export module session {
					export class WCSessionUpdate {
						public static class: java.lang.Class<com.trustwallet.walletconnect.models.session.WCSessionUpdate>;
						public constructor(param0: boolean, param1: java.lang.Integer, param2: java.util.List<string>);
						public copy(param0: boolean, param1: java.lang.Integer, param2: java.util.List<string>): com.trustwallet.walletconnect.models.session.WCSessionUpdate;
						public getChainId(): java.lang.Integer;
						public component3(): java.util.List<string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public component1(): boolean;
						public component2(): java.lang.Integer;
						public getAccounts(): java.util.List<string>;
						public getApproved(): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

//Generics information:
//com.trustwallet.walletconnect.jsonrpc.JsonRpcRequest:1
//com.trustwallet.walletconnect.jsonrpc.JsonRpcResponse:1
//com.trustwallet.walletconnect.models.binance.WCBinanceOrder:1

