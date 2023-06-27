declare module io {
	export module nstudio {
		export module plugins {
			export module walletconnect_legacy {
				export class WalletConnect {
					public static class: java.lang.Class<io.nstudio.plugins.walletconnect_legacy.WalletConnect>;
					public getListener(): io.nstudio.plugins.walletconnect_legacy.WalletConnect.Callback;
					public getBridge(): string;
					public signTypedData(param0: java.util.List<string>, param1: io.nstudio.plugins.walletconnect_legacy.WalletConnect.RequestCallback): void;
					public signPersonalMessage(param0: number, param1: string, param2: string, param3: io.nstudio.plugins.walletconnect_legacy.WalletConnect.RequestCallback): void;
					public rejectRequest(param0: number, param1: number, param2: string): void;
					public getUri(): string;
					public approve(param0: java.util.List<string>, param1: number): void;
					public reject(): void;
					public getConnected(): boolean;
					public getKey(): string;
					public signTransaction(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: io.nstudio.plugins.walletconnect_legacy.WalletConnect.RequestCallback): void;
					public approveRequest(param0: number, param1: any): void;
					public customRequest(param0: number, param1: string, param2: java.util.List<any>, param3: io.nstudio.plugins.walletconnect_legacy.WalletConnect.RequestCallback): void;
					public getApprovedAccounts(): java.util.List<string>;
					public getClientId(): string;
					public getChainId(): number;
					public getHandshakeTopic(): string;
					public updateSession(param0: java.util.List<string>, param1: number): void;
					public init(): void;
					public kill(): void;
					public constructor(param0: globalAndroid.content.Context, param1: io.nstudio.plugins.walletconnect_legacy.WalletConnect.Meta, param2: string, param3: string, param4: string, param5: string, param6: number);
					public constructor(param0: globalAndroid.content.Context, param1: io.nstudio.plugins.walletconnect_legacy.WalletConnect.Meta, param2: string);
					public constructor(param0: globalAndroid.content.Context);
					public sendTransaction(param0: number, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: io.nstudio.plugins.walletconnect_legacy.WalletConnect.RequestCallback): void;
					public setListener(param0: io.nstudio.plugins.walletconnect_legacy.WalletConnect.Callback): void;
					public offer(): void;
					public signMessage(param0: number, param1: string, param2: string, param3: io.nstudio.plugins.walletconnect_legacy.WalletConnect.RequestCallback): void;
					public getHandshakeId(): number;
				}
				export module WalletConnect {
					export class Callback {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect_legacy.WalletConnect.Callback>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.walletconnect_legacy.WalletConnect$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStatus(param0: string, param1: any): void;
							onMethod(param0: string, param1: string): void;
						});
						public constructor();
						public onStatus(param0: string, param1: any): void;
						public onMethod(param0: string, param1: string): void;
					}
					export class Companion {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect_legacy.WalletConnect.Companion>;
						public payloadId(param0: number): number;
					}
					export class Meta {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect_legacy.WalletConnect.Meta>;
						public component3(): string;
						public constructor();
						public constructor(param0: string, param1: string, param2: string, param3: java.util.List<string>);
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public copy(param0: string, param1: string, param2: string, param3: java.util.List<string>): io.nstudio.plugins.walletconnect_legacy.WalletConnect.Meta;
						public getName(): string;
						public toString(): string;
						public getIcons(): java.util.List<string>;
						public component2(): string;
						public component4(): java.util.List<string>;
						public getDescription(): string;
						public toMeta$nativescript_walletconnect_legacy_release(): org.walletconnect.Session.PeerMeta;
					}
					export class RequestCallback {
						public static class: java.lang.Class<io.nstudio.plugins.walletconnect_legacy.WalletConnect.RequestCallback>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.walletconnect_legacy.WalletConnect$RequestCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResponse(param0: number, param1: org.walletconnect.Session.Error, param2: any): void;
						});
						public constructor();
						public onResponse(param0: number, param1: org.walletconnect.Session.Error, param2: any): void;
					}
				}
			}
		}
	}
}

//Generics information:

