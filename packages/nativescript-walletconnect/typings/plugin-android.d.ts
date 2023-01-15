
declare module io {
	export module nstudio {
		export module plugins {
			export module walletconnect {
				export class NSCWalletConnectV2 {
					public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2>;
					public static sessionProposalPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionProposal>): void;
					public static authResponsePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionRequestResponse>): void;
					public static pairGetPairings(): java.util.List<com.walletconnect.android.Core.Model.Pairing>;
					public static sessionDeletePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.DeletedSession>): void;
					public static signDisconnect(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static signPing(param0: string, param1: kotlin.jvm.functions.Function2<string, java.lang.Throwable>): void;
					public static sessionEventPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionEvent>): void;
					public static sessionExtendPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.Session>): void;
					public static authRequestPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Auth.Event.AuthRequest>): void;
					public constructor();
					public static signApproveSession(param0: string, param1: java.util.Map<string,com.walletconnect.android.sign.client.Sign.Model.Namespace.Session>, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static authSocketConnectionStatusPublisher(param0: kotlin.jvm.functions.Function1<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus>): void;
					public static sessionUpdatePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.UpdatedSession>): void;
					public static pairDisconnect(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static signConnect(param0: java.util.Map<string,com.walletconnect.android.sign.client.Sign.Model.Namespace.Proposal>, param1: com.walletconnect.android.Core.Model.Pairing, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static pairPair(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static initialize(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.android.relay.ConnectionType, param4: globalAndroid.app.Application): void;
					public static signUpdate(param0: string, param1: java.util.Map<string,com.walletconnect.android.sign.client.Sign.Model.Namespace.Session>, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static initialize(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData, param2: com.walletconnect.android.relay.ConnectionType, param3: globalAndroid.app.Application): void;
					public static sessionResponsePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionRequestResponse>): void;
					public static networkDisconnect(param0: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static signRejectSession(param0: string, param1: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static sessionSettlePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SettledSessionResponse>): void;
					public static sessionRequestPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionRequest>): void;
					public static signSendRequest(param0: string, param1: string, param2: string, param3: string, param4: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static pairCreate(param0: kotlin.jvm.functions.Function2<com.walletconnect.android.Core.Model.Pairing,java.lang.Throwable>): void;
					public static signRespond(param0: string, param1: com.walletconnect.android.sign.client.Sign.Model.JsonRpcResponse, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static sessionRejectionPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.RejectedSession>): void;
					public static signSocketConnectionStatusPublisher(param0: kotlin.jvm.functions.Function1<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus>): void;
					public static signRequest(param0: string, param1: string, param2: string, param3: string, param4: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					public static networkConnect(param0: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
				}
				export module NSCWalletConnectV2 {
					export class Cancellable<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Cancellable<any>>;
						public constructor();
						public cancel(): void;
					}
					export class Companion {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.Companion>;
            public  sessionProposalPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionProposal>): void;
            public  authResponsePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionRequestResponse>): void;
            public  pairGetPairings(): java.util.List<com.walletconnect.android.Core.Model.Pairing>;
            public  sessionDeletePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.DeletedSession>): void;
            public  signDisconnect(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  signPing(param0: string, param1: kotlin.jvm.functions.Function2<string, java.lang.Throwable>): void;
            public  sessionEventPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionEvent>): void;
            public  sessionExtendPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.Session>): void;
            public  authRequestPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Auth.Event.AuthRequest>): void;
            public  signApproveSession(param0: string, param1: java.util.Map<string,com.walletconnect.android.sign.client.Sign.Model.Namespace.Session>, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  authSocketConnectionStatusPublisher(param0: kotlin.jvm.functions.Function1<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus>): void;
            public  sessionUpdatePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.UpdatedSession>): void;
            public  pairDisconnect(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  signConnect(param0: java.util.Map<string,com.walletconnect.android.sign.client.Sign.Model.Namespace.Proposal>, param1: com.walletconnect.android.Core.Model.Pairing, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  pairPair(param0: string, param1: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  initialize(param0: string, param1: string, param2: com.walletconnect.android.Core.Model.AppMetaData, param3: com.walletconnect.android.relay.ConnectionType, param4: globalAndroid.app.Application): void;
            public  signUpdate(param0: string, param1: java.util.Map<string,com.walletconnect.android.sign.client.Sign.Model.Namespace.Session>, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  initialize(param0: string, param1: com.walletconnect.android.Core.Model.AppMetaData, param2: com.walletconnect.android.relay.ConnectionType, param3: globalAndroid.app.Application): void;
            public  sessionResponsePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionRequestResponse>): void;
            public  networkDisconnect(param0: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  signRejectSession(param0: string, param1: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.RejectionReason, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  sessionSettlePublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SettledSessionResponse>): void;
            public  sessionRequestPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.SessionRequest>): void;
            public  signSendRequest(param0: string, param1: string, param2: string, param3: string, param4: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  pairCreate(param0: kotlin.jvm.functions.Function2<com.walletconnect.android.Core.Model.Pairing,java.lang.Throwable>): void;
            public  signRespond(param0: string, param1: com.walletconnect.android.sign.client.Sign.Model.JsonRpcResponse, param2: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  sessionRejectionPublisher(param0: kotlin.jvm.functions.Function1<com.walletconnect.android.Sign.Model.RejectedSession>): void;
            public  signSocketConnectionStatusPublisher(param0: kotlin.jvm.functions.Function1<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus>): void;
            public  signRequest(param0: string, param1: string, param2: string, param3: string, param4: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
            public  networkConnect(param0: kotlin.jvm.functions.Function1<java.lang.Throwable>): void;
					}
					export class ConnectionStatus {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus>;
						public static connected: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
						public static disconnected: io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
						public static values(): androidNative.Array<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus>;
						public static fromState(param0: com.walletconnect.android.sign.client.Sign.Model.ConnectionState): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
						public static valueOf(param0: string): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
					}
					export module ConnectionStatus {
						export class Companion {
							public static class: java.lang.Class<io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus.Companion>;
							public fromState(param0: com.walletconnect.android.sign.client.Sign.Model.ConnectionState): io.nstudio.plugins.walletconnect.NSCWalletConnectV2.ConnectionStatus;
						}
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

