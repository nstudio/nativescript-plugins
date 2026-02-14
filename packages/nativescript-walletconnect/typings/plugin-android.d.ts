declare module io {
	export module nstudio {
		export module plugins {
			export module walletconnect {
				export class NSCWalletConnectV2 {
					public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2>;

					public static setupBouncyCastle();

					public static eth_hash(message: string): number[];
				
					public static eth_prefix_hex(buf: ByteArray): number[];

					public static authReject(param0: number, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;

					public static authRespond(param0: number, signature: com.walletconnect.auth.client.Auth.Model.Cacao.Signature, account: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;

					public static authRequest(param0: com.walletconnect.auth.client.Auth.Params.Request, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;


					public static bufferToBytes(param0: java.nio.ByteBuffer): number[];

					public static sessionProposalPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionProposal>): void;
					public static authResponsePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.AuthResponse>): void;
					public static pairGetPairings(): java.util.List<com.walletconnect.android.Core.Model.Pairing>;
					public static sessionUpdateDapp(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.UpdatedSession>): void;
					public static sessionDeletePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.DeletedSession>): void;
					public static signDisconnect(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static signPing(param0: string, param1: kotlin.jvm.functions.Function2<string, java.lang.Throwable>): void;
					public static sessionEventPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionEvent>): void;
					public static sessionExtendPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.Session>): void;

					public static authRequestPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.AuthRequest>): void;
					public static signError(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.Error>): void;
					public constructor();
					public static signApproveSession(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static authSocketConnectionStatusPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.ConnectionStateChange>): void;
					public static pairDisconnect(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static signConnect(param0: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>, param1: com.walletconnect.android.Core.Model.Pairing, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static pairPair(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static initialize(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.android.relay.ConnectionType, param4: globalAndroid.app.Application): void;
					public static signUpdate(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static initialize(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData, param2: com.walletconnect.android.relay.ConnectionType, param3: globalAndroid.app.Application): void;
					public static sessionResponsePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionRequestResponse>): void;
					public static networkDisconnect(param0: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static signRejectSession(param0: string, param1: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static sessionSettlePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SettledSessionResponse>): void;
					public static sessionRequestPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionRequest>): void;
					public static signSendRequest(param0: string, param1: string, param2: string, param3: string, param4: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static sessionsPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.ApprovedSession>): void;
					public static initialize(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.android.relay.ConnectionType, param4: globalAndroid.app.Application, param5: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static sessionUpdateWallet(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse>): void;
					public static pairCreate(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Core.Model.Pairing, java.lang.Throwable>): void;
					public static authError(param0: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.Error>): void;
					public static signRespond(param0: string, param1: com.walletconnect.sign.client.Sign.Model.JsonRpcResponse, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static sessionRejectionPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.RejectedSession>): void;
					public static signSocketConnectionStatusPublisher(param0: kotlin.jvm.functions.Function1<ConnectionStatus>): void;
					public static signRequest(param0: string, param1: string, param2: string, param3: string, param4: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static networkConnect(param0: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
				}
				export module NSCWalletConnectV2 {

					export class Address {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Address>;
						public getRawAddress(): androidNative.Array<number>;
						public constructor(param0: java.math.BigInteger);
						public constructor(param0: org.web3j.crypto.ECKeyPair);
						public hex(param0: boolean): string;
						public constructor(param0: string);
					}


					export class Cancellable<T> extends java.lang.Object {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Cancellable<any>>;
						public constructor();
						public cancel(): void;
						public finalize(): void;
					}
					export class Companion {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Companion>;

						public setupBouncyCastle();

						public eth_hash(message: string): number[];
				
						public eth_prefix_hex(buf: ByteArray): number[];

						public authReject(param0: number, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;

						public authRespond(param0: number, signature: com.walletconnect.auth.client.Auth.Model.Cacao.Signature, account: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;

						public authRequest(param0: com.walletconnect.auth.client.Auth.Params.Request, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;

						public static bufferToBytes(param0: java.nio.ByteBuffer): number[];

						public sessionProposalPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionProposal>): void;
						public authResponsePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.AuthResponse>): void;
						public pairGetPairings(): java.util.List<com.walletconnect.android.Core.Model.Pairing>;
						public sessionUpdateDapp(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.UpdatedSession>): void;
						public sessionDeletePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.DeletedSession>): void;
						public signDisconnect(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public signPing(param0: string, param1: kotlin.jvm.functions.Function2<string, java.lang.Throwable>): void;
						public sessionEventPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionEvent>): void;
						public sessionExtendPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.Session>): void;

						public authRequestPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.AuthRequest>): void;
						public signError(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.Error>): void;
						public signApproveSession(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public authSocketConnectionStatusPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.ConnectionStateChange>): void;
						public pairDisconnect(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public signConnect(param0: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Proposal>, param1: com.walletconnect.android.Core.Model.Pairing, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public pairPair(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public initialize(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.android.relay.ConnectionType, param4: globalAndroid.app.Application): void;
						public signUpdate(param0: string, param1: java.util.Map<string, com.walletconnect.sign.client.Sign.Model.Namespace.Session>, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public initialize(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData, param2: com.walletconnect.android.relay.ConnectionType, param3: globalAndroid.app.Application): void;
						public sessionResponsePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionRequestResponse>): void;
						public networkDisconnect(param0: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public signRejectSession(param0: string, param1: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public sessionSettlePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SettledSessionResponse>): void;
						public sessionRequestPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionRequest>): void;
						public signSendRequest(param0: string, param1: string, param2: string, param3: string, param4: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public sessionsPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.ApprovedSession>): void;
						public initialize(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.android.relay.ConnectionType, param4: globalAndroid.app.Application, param5: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public sessionUpdateWallet(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.SessionUpdateResponse>): void;
						public pairCreate(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Core.Model.Pairing, java.lang.Throwable>): void;
						public authError(param0: kotlin.jvm.functions.Function1<com.walletconnect.auth.client.Auth.Event.Error>): void;
						public signRespond(param0: string, param1: com.walletconnect.sign.client.Sign.Model.JsonRpcResponse, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public sessionRejectionPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.sign.client.Sign.Model.RejectedSession>): void;
						public signSocketConnectionStatusPublisher(param0: kotlin.jvm.functions.Function1<ConnectionStatus>): void;
						public signRequest(param0: string, param1: string, param2: string, param3: string, param4: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
						public networkConnect(param0: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					}
					export class ConnectionStatus {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus>;
						public static connected: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
						public static disconnected: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
						public static values(): androidNative.Array<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus>;
						public static fromState(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
						public static valueOf(param0: string): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
					}
					export module ConnectionStatus {
						export class Companion {
							public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus.Companion>;
							public fromState(param0: com.walletconnect.sign.client.Sign.Model.ConnectionState): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
						}
					}

					export class PrivateKey {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PrivateKey>;
						public constructor();
						public constructor(param0: androidNative.Array<number>);
						public getPair(): org.web3j.crypto.ECKeyPair;

						public signTypedData(
							data: string,
							privateKey: PrivateKey,
							needToHash: boolean
						  ): String;
					  
						public parseTypedData(data: String): org.web3j.crypto.StructuredDataEncoder;

						public sign(param0: string, param1: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PrivateKey, param2: boolean): String;
						public sign(param0: androidNative.Array<number>, param1: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PrivateKey, param2: boolean): String;
						public getHex(): string;
						public getPublicKey(): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PublicKey;
						public getRawPrivateKey(): androidNative.Array<number>;
						public getAddress(): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Address;
						public getEthereumMessageHash(param0: androidNative.Array<number>): androidNative.Array<number>;
						public constructor(param0: string);
					}
					export class PublicKey {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.PublicKey>;
						public getRawPublicKey(): androidNative.Array<number>;
						public getHex(): string;
						public getAddress(): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Address;
						public constructor(param0: org.web3j.crypto.ECKeyPair);
					}

					export class RejectionReason {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason>;
						public static userRejectedRequest: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason;
						public static userRejected: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason;
						public static userRejectedChains: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason;
						public static userRejectedMethods: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason;
						public static userRejectedEvents: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason;
						public static valueOf(param0: string): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason;
						public getValue(): string;
						public static values(): androidNative.Array<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason>;
					}
				}
			}
		}
	}
}

//Generics information:
//io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Cancellable:1
