declare module io {
	export module nstudio {
		export module plugins {
			export module contentful {
				export class Contenful {
					public static class: java.lang.Class<io.nstudio.plugins.contentful.Contenful>;
					public static spaceToJson(m: com.contentful.java.cda.CDASpace): string;
					public constructor();
					public static entryToJson(t: com.contentful.java.cda.CDAEntry): string;
					public static observeEntries(flow: com.contentful.java.cda.CDAClient, d: io.nstudio.plugins.contentful.Contenful.EntriesListener): io.nstudio.plugins.contentful.Contenful.Subscription;
					public static observeContentTypeCachePopulation(flow: com.contentful.java.cda.CDAClient, d: io.nstudio.plugins.contentful.Contenful.ContentTypeCacheListener): io.nstudio.plugins.contentful.Contenful.Subscription;
					public static arrayToJson(t: com.contentful.java.cda.CDAArray): string;
					public static assetToJson(t: com.contentful.java.cda.CDAAsset): string;
					public static synchronizedSpaceToJson(m: com.contentful.java.cda.SynchronizedSpace): string;
					public static fetchEntries(ct: com.contentful.java.cda.CDAClient, lim: java.util.Map<any, any>, sk: io.nstudio.plugins.contentful.Contenful.EntriesFetchCallback): void;
				}
				export module Contenful {
					export class ContentTypeCacheListener {
						public static class: java.lang.Class<io.nstudio.plugins.contentful.Contenful.ContentTypeCacheListener>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.contentful.Contenful$ContentTypeCacheListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onNext(param0: number): void; onError(param0: java.lang.Throwable): void });
						public constructor();
						public onNext(param0: number): void;
						public onError(param0: java.lang.Throwable): void;
					}
					export class EntriesFetchCallback {
						public static class: java.lang.Class<io.nstudio.plugins.contentful.Contenful.EntriesFetchCallback>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.contentful.Contenful$EntriesFetchCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: string): void; onFailure(param0: java.lang.Throwable): void });
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public onSuccess(param0: string): void;
					}
					export class EntriesListener {
						public static class: java.lang.Class<io.nstudio.plugins.contentful.Contenful.EntriesListener>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.contentful.Contenful$EntriesListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onNext(param0: string): void; onError(param0: java.lang.Throwable): void });
						public constructor();
						public onNext(param0: string): void;
						public onError(param0: java.lang.Throwable): void;
					}
					export class Subscription {
						public static class: java.lang.Class<io.nstudio.plugins.contentful.Contenful.Subscription>;
						public constructor(d: io.reactivex.rxjava3.disposables.Disposable);
						public unsubscribe(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module nstudio {
		export module plugins {
			export module contentful {
				export class ContenfulFetchHelper {
					public static class: java.lang.Class<io.nstudio.plugins.contentful.ContenfulFetchHelper>;
					public static fetchUrlToBase64Async(urlString: string, cb: io.nstudio.plugins.contentful.ContenfulFetchHelper.FetchCallback): void;
					public static shutdown(): void;
					public constructor();
				}
				export module ContenfulFetchHelper {
					export class FetchCallback {
						public static class: java.lang.Class<io.nstudio.plugins.contentful.ContenfulFetchHelper.FetchCallback>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.contentful.ContenfulFetchHelper$FetchCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuccess(param0: string): void; onFailure(param0: java.lang.Throwable): void });
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public onSuccess(param0: string): void;
					}
				}
			}
		}
	}
}

//Generics information:
