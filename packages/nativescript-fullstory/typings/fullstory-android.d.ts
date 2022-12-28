declare module com {
	export module fullstory {
		export module plugins {
			export module gradle {
				export class CertificateInfo {
					public static class: java.lang.Class<com.fullstory.plugins.gradle.CertificateInfo>;
					public mKey: java.security.PrivateKey;
					public mCertificate: java.security.cert.X509Certificate;
					public getKey(): java.security.PrivateKey;
					public constructor(param0: java.security.PrivateKey, param1: java.security.cert.X509Certificate);
					public getCertificate(): java.security.cert.X509Certificate;
				}
			}
		}
	}
}

declare module com {
	export module fullstory {
		export module plugins {
			export module gradle {
				export class FullStoryExtension {
					public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryExtension>;
					public bugsEndpoint: string;
					public enhancedReactNativeSupport(param0: boolean): void;
					public addDependencies(param0: boolean): void;
					public minApi(param0: number): void;
					public sessionSetupDelayMs(param0: number): void;
					public extraSigningArgs(param0: java.util.List<string>): void;
					public server(param0: string): void;
					public logLevel(param0: string): void;
					public internalFlags(param0: androidNative.Array<string>): void;
					public lowMemoryPercent(param0: number): void;
					public constructor();
					public maxApi(param0: number): void;
					public bugsnagEnabled(param0: boolean): void;
					public maskAssets(param0: boolean): void;
					public composeEnabled(param0: boolean): void;
					public skipResourceUpload(param0: boolean): void;
					public extraSigningArgs(param0: androidNative.Array<string>): void;
					public enabledVariants(param0: string): void;
					public logcatLevel(param0: string): void;
					public skipSigning(param0: boolean): void;
					public internalFlags(param0: java.util.List<string>): void;
					public verboseLogging(param0: boolean): void;
					public recordOnStart(param0: boolean): void;
					public composeSelectorVersion(param0: number): void;
					public org(param0: string): void;
					public skipAndroidStudioVersionCheck(param0: boolean): void;
					public runtimeServer(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module fullstory {
		export module plugins {
			export module gradle {
				export class FullStoryPlugin extends java.lang.Object {
					public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin>;
					public apply(param0: org.gradle.api.Project): void;
					public constructor();
					public getMetaClass(): groovy.lang.MetaClass;
					public setMetaClass(param0: groovy.lang.MetaClass): void;
				}
				export module FullStoryPlugin {
					export class _apply_closure1 {
						public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._apply_closure1>;
						public getPlugin(): any;
						public constructor(param0: any, param1: any, param2: groovy.lang.Reference, param3: groovy.lang.Reference, param4: groovy.lang.Reference);
						public doCall(): any;
						public doCall(param0: any): any;
						public getExt(): any;
						public getProject(): org.gradle.api.Project;
					}
					export module _apply_closure1 {
						export class _closure8 {
							public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._apply_closure1._closure8>;
							public doCall(param0: any): any;
							public doCall(): any;
							public getProject(): org.gradle.api.Project;
							public getExt(): any;
							public getPlugin(): any;
							public constructor(param0: any, param1: any, param2: groovy.lang.Reference, param3: groovy.lang.Reference, param4: groovy.lang.Reference);
						}
						export module _closure8 {
							export class _closure9 {
								public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._apply_closure1._closure8._closure9>;
								public getExt(): any;
								public getPlugin(): any;
								public constructor(param0: any, param1: any, param2: groovy.lang.Reference, param3: groovy.lang.Reference, param4: groovy.lang.Reference);
								public doCall(param0: any): any;
								public getProject(): org.gradle.api.Project;
							}
							export module _closure9 {
								export class _closure10 {
									public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._apply_closure1._closure8._closure9._closure10>;
									public getProcessManifestTaskName(): any;
									public doCall(param0: any): any;
									public getPackageTaskName(): any;
									public getExt(): any;
									public getFullstoryTask(): any;
									public getProject(): org.gradle.api.Project;
									public getProcessManifestTask(): any;
									public getPackageBundleTask(): any;
									public constructor(param0: any, param1: any, param2: groovy.lang.Reference, param3: groovy.lang.Reference, param4: groovy.lang.Reference, param5: groovy.lang.Reference, param6: groovy.lang.Reference, param7: groovy.lang.Reference, param8: groovy.lang.Reference, param9: groovy.lang.Reference, param10: groovy.lang.Reference, param11: groovy.lang.Reference, param12: groovy.lang.Reference, param13: groovy.lang.Reference);
									public getPackageBundleTaskName(): any;
									public getVariant(): any;
									public getVariantName(): any;
									public getHasSigningConfig(): any;
									public getPlugin(): any;
								}
								export class _closure11 {
									public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._apply_closure1._closure8._closure9._closure11>;
									public doCall(param0: any): any;
									public doCall(): any;
									public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
									public getFullStoryApply(): any;
								}
								export class _closure12 {
									public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._apply_closure1._closure8._closure9._closure12>;
									public doCall(param0: any): any;
									public doCall(): any;
									public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
									public getFullStoryApply(): any;
								}
							}
						}
					}
					export class _findApplicationSubclass_closure4 {
						public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._findApplicationSubclass_closure4>;
						public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
						public doCall(param0: any): any;
						public getApplicationClass(): string;
					}
					export module _findApplicationSubclass_closure4 {
						export class _closure14 {
							public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._findApplicationSubclass_closure4._closure14>;
							public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
							public doCall(param0: any): any;
							public getApplicationClass(): string;
						}
					}
					export class _findTargetSdk_closure5 {
						public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._findTargetSdk_closure5>;
						public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
						public doCall(param0: any): any;
						public getTargetSdk(): string;
					}
					export module _findTargetSdk_closure5 {
						export class _closure15 {
							public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._findTargetSdk_closure5._closure15>;
							public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
							public doCall(param0: any): any;
							public getTargetSdk(): string;
						}
					}
					export class _getMergedManifestFile_closure2 {
						public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._getMergedManifestFile_closure2>;
						public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
						public doCall(param0: any): any;
						public getMaybeManifestFile(): java.io.File;
					}
					export class _hasPermission_closure3 {
						public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._hasPermission_closure3>;
						public doCall(param0: any): any;
						public constructor(param0: any, param1: any, param2: groovy.lang.Reference, param3: groovy.lang.Reference);
						public getPermission(): string;
						public getHasPerm(): java.lang.Boolean;
					}
					export module _hasPermission_closure3 {
						export class _closure13 {
							public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._hasPermission_closure3._closure13>;
							public doCall(param0: any): any;
							public constructor(param0: any, param1: any, param2: groovy.lang.Reference, param3: groovy.lang.Reference);
							public getHasPerm(): java.lang.Boolean;
							public getPermission(): string;
						}
					}
					export class _maybeAddFSRepo_closure7 {
						public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._maybeAddFSRepo_closure7>;
						public doCall(): any;
						public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
						public doCall(param0: any): any;
						public getFsRepoUrl(): string;
					}
					export class _reposContainMavenRepo_closure6 {
						public static class: java.lang.Class<com.fullstory.plugins.gradle.FullStoryPlugin._reposContainMavenRepo_closure6>;
						public doCall(): any;
						public constructor(param0: any, param1: any, param2: groovy.lang.Reference);
						public doCall(param0: any): any;
						public getFsRepoUrl(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module fullstory {
		export module plugins {
			export module gradle {
				export class KeyStoreHelper {
					public static class: java.lang.Class<com.fullstory.plugins.gradle.KeyStoreHelper>;
					public constructor();
					public static getCertificateInfo(param0: string, param1: java.io.File, param2: string, param3: string, param4: string): com.fullstory.plugins.gradle.CertificateInfo;
				}
			}
		}
	}
}

//Generics information:

