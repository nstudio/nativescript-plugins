declare module com {
	export module contentful {
		export module java {
			export module cda {
				export abstract class AbsQuery<Resource, Query> extends java.lang.Object {
					public static class: java.lang.Class<com.contentful.java.cda.AbsQuery<any, any>>;
					public linksToAssetId(assetId: string): Query;
					public select(selection: string): Query;
					public where(key: string, value: string): Query;
					public where(i: string, this_: com.contentful.java.cda.QueryOperation<any>, name: androidNative.Array<any>): com.contentful.java.cda.AbsQuery<any, any>;
					public skip(skip: number): Query;
					public withLocale(locale: string): Query;
					public limit(limit: number): Query;
					public reverseOrderBy(key: string): Query;
					public include(level: number): Query;
					public withContentType(contentType: string): Query;
					public linksToEntryId(entryId: string): Query;
					public select(argumentException: androidNative.Array<string>): Query;
					public orderBy(i: androidNative.Array<string>): Query;
					public orderBy(key: string): Query;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export abstract class ArrayResource extends com.contentful.java.cda.CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.ArrayResource>;
					public entries(): java.util.Map<string, com.contentful.java.cda.CDAEntry>;
					public constructor();
					public assets(): java.util.Map<string, com.contentful.java.cda.CDAAsset>;
					public items(): java.util.List<com.contentful.java.cda.CDAResource>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAArray extends com.contentful.java.cda.ArrayResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDAArray>;
					public setErrors(errors: java.util.List<com.contentful.java.cda.CDAError>): void;
					public constructor();
					public total(): number;
					public getErrors(): java.util.List<com.contentful.java.cda.CDAError>;
					public skip(): number;
					public limit(): number;
				}
				export module CDAArray {
					export class Includes {
						public static class: java.lang.Class<com.contentful.java.cda.CDAArray.Includes>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAAsset extends com.contentful.java.cda.LocalizedResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDAAsset>;
					public mimeType(): string;
					public toString(): string;
					public constructor();
					public metadata(): com.contentful.java.cda.CDAMetadata;
					public url(): string;
					public urlForImageWith(option: androidNative.Array<com.contentful.java.cda.image.ImageOption>): string;
					public fileField(key: string): any;
					public title(): string;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export abstract class CDACallback<T> extends java.lang.Object {
					public static class: java.lang.Class<com.contentful.java.cda.CDACallback<any>>;
					public onFailure(error: java.lang.Throwable): void;
					public constructor();
					public isCancelled(): boolean;
					public onSuccess(param0: T): void;
					public cancel(): void;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAClient {
					public static class: java.lang.Class<com.contentful.java.cda.CDAClient>;
					public observeContentTypeCachePopulation(): io.reactivex.rxjava3.core.Flowable<java.lang.Integer>;
					public sync(): com.contentful.java.cda.SyncQuery;
					public sync(synchronizedSpace: com.contentful.java.cda.SynchronizedSpace): com.contentful.java.cda.SyncQuery;
					public fetchSpace(callback: com.contentful.java.cda.CDACallback<any>): com.contentful.java.cda.CDACallback<any>;
					public populateContentTypeCache(limit: number): number;
					public sync(type: com.contentful.java.cda.SyncType): com.contentful.java.cda.SyncQuery;
					public sync(type: com.contentful.java.cda.SyncType, limit: number): com.contentful.java.cda.SyncQuery;
					public populateContentTypeCache(): number;
					public shouldLogSensitiveData(): boolean;
					public sync(limit: number): com.contentful.java.cda.SyncQuery;
					public observeSpace(): io.reactivex.rxjava3.core.Flowable<com.contentful.java.cda.CDASpace>;
					public static builder(): com.contentful.java.cda.CDAClient.Builder;
					public sync(syncToken: string): com.contentful.java.cda.SyncQuery;
					public fetch(type: java.lang.Class<any>): com.contentful.java.cda.FetchQuery<any>;
					public fetchSpace(): com.contentful.java.cda.CDASpace;
					public clearCache(): com.contentful.java.cda.CDAClient;
					public observeAndTransform(type: java.lang.Class<any>): com.contentful.java.cda.TransformQuery<any>;
					public observe(type: java.lang.Class<any>): com.contentful.java.cda.ObserveQuery<any>;
					public observeContentTypeCachePopulation(limit: number): io.reactivex.rxjava3.core.Flowable<java.lang.Integer>;
				}
				export module CDAClient {
					export class Builder {
						public static class: java.lang.Class<com.contentful.java.cda.CDAClient.Builder>;
						public setSpace(space: string): com.contentful.java.cda.CDAClient.Builder;
						public preview(): com.contentful.java.cda.CDAClient.Builder;
						public defaultCallFactoryBuilder(): okhttp3.OkHttpClient.Builder;
						public setLogger(logger: com.contentful.java.cda.Logger): com.contentful.java.cda.CDAClient.Builder;
						public setIntegration(name: string, version: string): com.contentful.java.cda.CDAClient.Builder;
						public setApplication(name: string, version: string): com.contentful.java.cda.CDAClient.Builder;
						public setCrossSpaceTokens(spaceIdToToken: java.util.Map<string, string>): com.contentful.java.cda.CDAClient.Builder;
						public setLogLevel(logLevel: com.contentful.java.cda.Logger.Level): com.contentful.java.cda.CDAClient.Builder;
						public setLogSensitiveData(logSensitiveData: boolean): com.contentful.java.cda.CDAClient.Builder;
						public setCallFactory(callFactory: okhttp3.Call.Factory): com.contentful.java.cda.CDAClient.Builder;
						public setConverterFactory(converterFactory: retrofit2.Converter.Factory): com.contentful.java.cda.CDAClient.Builder;
						public setEnvironment(environment: string): com.contentful.java.cda.CDAClient.Builder;
						public setToken(token: string): com.contentful.java.cda.CDAClient.Builder;
						public setTls12Implementation(implementation: com.contentful.java.cda.Tls12Implementation): com.contentful.java.cda.CDAClient.Builder;
						public setEndpoint(endpoint: string): com.contentful.java.cda.CDAClient.Builder;
						public build(): com.contentful.java.cda.CDAClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAContentType extends com.contentful.java.cda.CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDAContentType>;
					public name(): string;
					public toString(): string;
					public constructor();
					public fields(): java.util.List<com.contentful.java.cda.CDAField>;
					public displayField(): string;
					public description(): string;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAContentTypeNotFoundException {
					public static class: java.lang.Class<com.contentful.java.cda.CDAContentTypeNotFoundException>;
					public constructor(resourceId: string, resourceType: java.lang.Class<any>, resourceTypeId: string, throwable: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAEntry extends com.contentful.java.cda.LocalizedResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDAEntry>;
					public toString(): string;
					public setContentType(contentType: com.contentful.java.cda.CDAContentType): void;
					public getMetadata(): com.contentful.java.cda.CDAMetadata;
					public constructor();
					public metadata(): com.contentful.java.cda.CDAMetadata;
					public contentType(): com.contentful.java.cda.CDAContentType;
					public setMetadata(metadata: com.contentful.java.cda.CDAMetadata): void;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAError {
					public static class: java.lang.Class<com.contentful.java.cda.CDAError>;
					public constructor();
					public getDetails(): java.util.Map<string, any>;
					public getSys(): java.util.Map<string, any>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAField {
					public static class: java.lang.Class<com.contentful.java.cda.CDAField>;
					public name(): string;
					public items(): java.util.Map<string, any>;
					public constructor();
					public isDisabled(): boolean;
					public isLocalized(): boolean;
					public id(): string;
					public isRequired(): boolean;
					public linkType(): string;
					public type(): string;
					public validations(): java.util.List<java.util.Map<string, any>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAHttpException {
					public static class: java.lang.Class<com.contentful.java.cda.CDAHttpException>;
					public responseBody(): string;
					public toString(): string;
					public rateLimitSecondLimit(): number;
					public rateLimitReset(): number;
					public rateLimitHourLimit(): number;
					public rateLimitSecondRemaining(): number;
					public responseCode(): number;
					public responseMessage(): string;
					public rateLimitHourRemaining(): number;
					public constructor(request: okhttp3.Request, response: okhttp3.Response, logSensitiveData: boolean);
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDALocale extends com.contentful.java.cda.CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDALocale>;
					public name(): string;
					public toString(): string;
					public constructor();
					public code(): string;
					public fallbackLocaleCode(): string;
					public isDefaultLocale(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAMetadata {
					public static class: java.lang.Class<com.contentful.java.cda.CDAMetadata>;
					public getConcepts(): java.util.List<com.contentful.java.cda.CDATaxonomyConcept>;
					public toString(): string;
					public getTags(): java.util.List<com.contentful.java.cda.CDATag>;
					public constructor();
					public setConcepts(concepts: java.util.List<com.contentful.java.cda.CDATaxonomyConcept>): void;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export abstract class CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDAResource>;
					public type(): com.contentful.java.cda.CDAType;
					public toString(): string;
					public constructor();
					public getAttribute(key: string): any;
					public attrs(): java.util.Map<string, any>;
					public id(): string;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAResourceNotFoundException {
					public static class: java.lang.Class<com.contentful.java.cda.CDAResourceNotFoundException>;
					public constructor(resourceType: java.lang.Class<any>, resourceId: string);
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAService {
					public static class: java.lang.Class<com.contentful.java.cda.CDAService>;
					/**
					 * Constructs a new instance of the com.contentful.java.cda.CDAService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { space(param0: string): io.reactivex.rxjava3.core.Flowable<retrofit2.Response<com.contentful.java.cda.CDASpace>>; array(param0: string, param1: string, param2: string, param3: java.util.Map<string, string>): io.reactivex.rxjava3.core.Flowable<retrofit2.Response<com.contentful.java.cda.CDAArray>>; sync(param0: string, param1: string, param2: java.lang.Boolean, param3: string, param4: string, param5: string, param6: java.lang.Integer): io.reactivex.rxjava3.core.Flowable<retrofit2.Response<com.contentful.java.cda.SynchronizedSpace>> });
					public constructor();
					public space(param0: string): io.reactivex.rxjava3.core.Flowable<retrofit2.Response<com.contentful.java.cda.CDASpace>>;
					public array(param0: string, param1: string, param2: string, param3: java.util.Map<string, string>): io.reactivex.rxjava3.core.Flowable<retrofit2.Response<com.contentful.java.cda.CDAArray>>;
					public sync(param0: string, param1: string, param2: java.lang.Boolean, param3: string, param4: string, param5: string, param6: java.lang.Integer): io.reactivex.rxjava3.core.Flowable<retrofit2.Response<com.contentful.java.cda.SynchronizedSpace>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDASpace extends com.contentful.java.cda.CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDASpace>;
					public name(): string;
					public toString(): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDATag extends com.contentful.java.cda.CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDATag>;
					public name(): string;
					public toString(): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDATaxonomyConcept extends com.contentful.java.cda.CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.CDATaxonomyConcept>;
					public toString(): string;
					public constructor();
					public prefLabel(): java.util.Map<string, string>;
					public getPrefLabel(locale: string): string;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class CDAType {
					public static class: java.lang.Class<com.contentful.java.cda.CDAType>;
					public static ARRAY: com.contentful.java.cda.CDAType;
					public static ASSET: com.contentful.java.cda.CDAType;
					public static CONTENTTYPE: com.contentful.java.cda.CDAType;
					public static DELETEDASSET: com.contentful.java.cda.CDAType;
					public static DELETEDENTRY: com.contentful.java.cda.CDAType;
					public static ENTRY: com.contentful.java.cda.CDAType;
					public static LOCALE: com.contentful.java.cda.CDAType;
					public static SPACE: com.contentful.java.cda.CDAType;
					public static TAG: com.contentful.java.cda.CDAType;
					public static TAXONOMYCONCEPT: com.contentful.java.cda.CDAType;
					public static values(): androidNative.Array<com.contentful.java.cda.CDAType>;
					public static valueOf(name: string): com.contentful.java.cda.CDAType;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class Cache {
					public static class: java.lang.Class<com.contentful.java.cda.Cache>;
					public defaultLocale(): com.contentful.java.cda.CDALocale;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class Callbacks {
					public static class: java.lang.Class<com.contentful.java.cda.Callbacks>;
				}
				export module Callbacks {
					export abstract class BaseAction<E> extends io.reactivex.rxjava3.functions.Consumer<any> {
						public static class: java.lang.Class<com.contentful.java.cda.Callbacks.BaseAction<any>>;
						public callback: com.contentful.java.cda.CDACallback<any>;
						public client: com.contentful.java.cda.CDAClient;
						public execute(r: java.lang.Runnable): void;
						public accept(e: any): void;
						public doCall(param0: any): void;
					}
					export class FailureAction extends com.contentful.java.cda.Callbacks.BaseAction<java.lang.Throwable> {
						public static class: java.lang.Class<com.contentful.java.cda.Callbacks.FailureAction>;
						public doCall(t: java.lang.Throwable): void;
						public doCall(param0: any): void;
					}
					export class FailureRunnable {
						public static class: java.lang.Class<com.contentful.java.cda.Callbacks.FailureRunnable>;
						public run(): void;
					}
					export class SuccessAction<E> extends com.contentful.java.cda.Callbacks.BaseAction<any> {
						public static class: java.lang.Class<com.contentful.java.cda.Callbacks.SuccessAction<any>>;
						public doCall(e: any): void;
					}
					export class SuccessRunnable<E> extends java.lang.Runnable {
						public static class: java.lang.Class<com.contentful.java.cda.Callbacks.SuccessRunnable<any>>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class Constants {
					public static class: java.lang.Class<com.contentful.java.cda.Constants>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class DeletedResource extends com.contentful.java.cda.CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.DeletedResource>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class FetchQuery<T> extends com.contentful.java.cda.AbsQuery<any, com.contentful.java.cda.FetchQuery<any>> {
					public static class: java.lang.Class<com.contentful.java.cda.FetchQuery<any>>;
					public all(): com.contentful.java.cda.CDAArray;
					public all(callback: com.contentful.java.cda.CDACallback<any>): com.contentful.java.cda.CDACallback<any>;
					public constructor(type: java.lang.Class<any>, client: com.contentful.java.cda.CDAClient);
					public one(id: string, callback: com.contentful.java.cda.CDACallback<any>): com.contentful.java.cda.CDACallback<any>;
					public one(this_: string): any;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export abstract class LocalizedResource extends com.contentful.java.cda.CDAResource {
					public static class: java.lang.Class<com.contentful.java.cda.LocalizedResource>;
					public setField(locale: string, key: string, value: any): void;
					public constructor();
					public getField(locale: string, key: string): any;
					public getField(key: string): any;
					public localize(locale: string): com.contentful.java.cda.LocalizedResource.Localizer;
					public rawFields(): java.util.Map<string, any>;
				}
				export module LocalizedResource {
					export class Localizer {
						public static class: java.lang.Class<com.contentful.java.cda.LocalizedResource.Localizer>;
						public getField(key: string): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class Logger {
					public static class: java.lang.Class<com.contentful.java.cda.Logger>;
					/**
					 * Constructs a new instance of the com.contentful.java.cda.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { log(param0: string): void });
					public constructor();
					public log(param0: string): void;
				}
				export module Logger {
					export class Level {
						public static class: java.lang.Class<com.contentful.java.cda.Logger.Level>;
						public static NONE: com.contentful.java.cda.Logger.Level;
						public static BASIC: com.contentful.java.cda.Logger.Level;
						public static FULL: com.contentful.java.cda.Logger.Level;
						public static valueOf(name: string): com.contentful.java.cda.Logger.Level;
						public static values(): androidNative.Array<com.contentful.java.cda.Logger.Level>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class ObserveQuery<T> extends com.contentful.java.cda.AbsQuery<any, com.contentful.java.cda.ObserveQuery<any>> {
					public static class: java.lang.Class<com.contentful.java.cda.ObserveQuery<any>>;
					public one(id: string): io.reactivex.rxjava3.core.Flowable<any>;
					public all(): io.reactivex.rxjava3.core.Flowable<com.contentful.java.cda.CDAArray>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export abstract class Platform {
					public static class: java.lang.Class<com.contentful.java.cda.Platform>;
					public name(): string;
					public needsCustomTLSSocketFactory(): boolean;
					public constructor();
					public callbackExecutor(): java.util.concurrent.Executor;
					public static get(): com.contentful.java.cda.Platform;
					public version(): string;
				}
				export module Platform {
					export class Android extends com.contentful.java.cda.Platform {
						public static class: java.lang.Class<com.contentful.java.cda.Platform.Android>;
						public needsCustomTLSSocketFactory(): boolean;
						public version(): string;
						public callbackExecutor(): java.util.concurrent.Executor;
						public name(): string;
					}
					export class Base extends com.contentful.java.cda.Platform {
						public static class: java.lang.Class<com.contentful.java.cda.Platform.Base>;
						public needsCustomTLSSocketFactory(): boolean;
						public version(): string;
						public callbackExecutor(): java.util.concurrent.Executor;
						public name(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class QueryOperation<T> extends java.lang.Object {
					public static class: java.lang.Class<com.contentful.java.cda.QueryOperation<any>>;
					public static IsEqualTo: com.contentful.java.cda.QueryOperation<string>;
					public static IsNotEqualTo: com.contentful.java.cda.QueryOperation<string>;
					public static HasOneOf: com.contentful.java.cda.QueryOperation<string>;
					public static HasNoneOf: com.contentful.java.cda.QueryOperation<string>;
					public static HasAllOf: com.contentful.java.cda.QueryOperation<string>;
					public static IsLessThan: com.contentful.java.cda.QueryOperation<java.lang.Integer>;
					public static IsLessThanOrEqualTo: com.contentful.java.cda.QueryOperation<java.lang.Integer>;
					public static IsGreaterThan: com.contentful.java.cda.QueryOperation<java.lang.Integer>;
					public static IsGreaterThanOrEqualTo: com.contentful.java.cda.QueryOperation<java.lang.Integer>;
					public static Exists: com.contentful.java.cda.QueryOperation<java.lang.Boolean>;
					public static IsEarlierThan: com.contentful.java.cda.QueryOperation<string>;
					public static IsEarlierOrAt: com.contentful.java.cda.QueryOperation<string>;
					public static IsLaterThan: com.contentful.java.cda.QueryOperation<string>;
					public static IsLaterOrAt: com.contentful.java.cda.QueryOperation<string>;
					public static Matches: com.contentful.java.cda.QueryOperation<string>;
					public static IsCloseTo: com.contentful.java.cda.QueryOperation<com.contentful.java.cda.QueryOperation.Location>;
					public static IsWithinBoundingBoxOf: com.contentful.java.cda.QueryOperation<com.contentful.java.cda.QueryOperation.BoundingBox>;
					public static IsWithinCircleOf: com.contentful.java.cda.QueryOperation<com.contentful.java.cda.QueryOperation.BoundingCircle>;
					public constructor(operator: string);
					public hasDefaultValue(): boolean;
					public constructor(operator: string, defaultValue: T);
				}
				export module QueryOperation {
					export class BoundingBox {
						public static class: java.lang.Class<com.contentful.java.cda.QueryOperation.BoundingBox>;
						public constructor(bottom: number, left: number, top: number, right: number);
						public constructor(bottomLeft: com.contentful.java.cda.QueryOperation.Location, topRight: com.contentful.java.cda.QueryOperation.Location);
						public toString(): string;
					}
					export class BoundingCircle {
						public static class: java.lang.Class<com.contentful.java.cda.QueryOperation.BoundingCircle>;
						public constructor(center: com.contentful.java.cda.QueryOperation.Location, radius: number);
						public constructor(centerLatitude: number, centerLongitude: number, radius: number);
						public toString(): string;
					}
					export class Location {
						public static class: java.lang.Class<com.contentful.java.cda.QueryOperation.Location>;
						public constructor(latitude: number, longitude: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class ResourceDeserializer extends com.google.gson.JsonDeserializer<com.contentful.java.cda.CDAResource> {
					public static class: java.lang.Class<com.contentful.java.cda.ResourceDeserializer>;
					public deserialize(this_: com.google.gson.JsonElement, json: java.lang.reflect.Type, classType: com.google.gson.JsonDeserializationContext): com.contentful.java.cda.CDAResource;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class ResourceFactory {
					public static class: java.lang.Class<com.contentful.java.cda.ResourceFactory>;
					public constructor();
					public static createGson(): com.google.gson.Gson;
					public static arrayFromJson(array: com.contentful.java.cda.CDAArray, client: com.contentful.java.cda.CDAClient): com.contentful.java.cda.CDAArray;
					public static array(arrayResponse: retrofit2.Response<com.contentful.java.cda.CDAArray>, client: com.contentful.java.cda.CDAClient): com.contentful.java.cda.CDAArray;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class ResourceUtils {
					public static class: java.lang.Class<com.contentful.java.cda.ResourceUtils>;
					public static ensureContentType(e: com.contentful.java.cda.CDAEntry, entry: com.contentful.java.cda.CDAClient): void;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class SyncQuery {
					public static class: java.lang.Class<com.contentful.java.cda.SyncQuery>;
					public observe(): io.reactivex.rxjava3.core.Flowable<com.contentful.java.cda.SynchronizedSpace>;
					public fetch(): com.contentful.java.cda.SynchronizedSpace;
					public fetch(callback: com.contentful.java.cda.CDACallback<any>): com.contentful.java.cda.CDACallback<any>;
				}
				export module SyncQuery {
					export class Builder {
						public static class: java.lang.Class<com.contentful.java.cda.SyncQuery.Builder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class SyncType {
					public static class: java.lang.Class<com.contentful.java.cda.SyncType>;
					public static onlyDeletedEntries(): com.contentful.java.cda.SyncType;
					public static allEntries(): com.contentful.java.cda.SyncType;
					public getName(): string;
					public static onlyDeletedAssets(): com.contentful.java.cda.SyncType;
					public static onlyDeletion(): com.contentful.java.cda.SyncType;
					public getContentType(): string;
					public static onlyEntriesOfType(type: string): com.contentful.java.cda.SyncType;
					public static allAssets(): com.contentful.java.cda.SyncType;
				}
				export module SyncType {
					export class Type {
						public static class: java.lang.Class<com.contentful.java.cda.SyncType.Type>;
						public static Asset: com.contentful.java.cda.SyncType.Type;
						public static Entry: com.contentful.java.cda.SyncType.Type;
						public static Deletion: com.contentful.java.cda.SyncType.Type;
						public static DeletedAsset: com.contentful.java.cda.SyncType.Type;
						public static DeletedEntry: com.contentful.java.cda.SyncType.Type;
						public static valueOf(name: string): com.contentful.java.cda.SyncType.Type;
						public static values(): androidNative.Array<com.contentful.java.cda.SyncType.Type>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class SynchronizedSpace extends com.contentful.java.cda.ArrayResource {
					public static class: java.lang.Class<com.contentful.java.cda.SynchronizedSpace>;
					public nextSyncUrl(): string;
					public deletedAssets(): java.util.Set<string>;
					public deletedEntries(): java.util.Set<string>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class SynchronousExecutor {
					public static class: java.lang.Class<com.contentful.java.cda.SynchronousExecutor>;
					public execute(r: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class Tls12Implementation {
					public static class: java.lang.Class<com.contentful.java.cda.Tls12Implementation>;
					public static useRecommendation: com.contentful.java.cda.Tls12Implementation;
					public static systemProvided: com.contentful.java.cda.Tls12Implementation;
					public static sdkProvided: com.contentful.java.cda.Tls12Implementation;
					public static valueOf(name: string): com.contentful.java.cda.Tls12Implementation;
					public static values(): androidNative.Array<com.contentful.java.cda.Tls12Implementation>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class TlsSocketFactory {
					public static class: java.lang.Class<com.contentful.java.cda.TlsSocketFactory>;
					public getDefaultCipherSuites(): androidNative.Array<string>;
					public createSocket(address: java.net.InetAddress, port: number, localAddress: java.net.InetAddress, localPort: number): java.net.Socket;
					public createSocket(s: java.net.Socket, host: string, port: number, autoClose: boolean): java.net.Socket;
					public createSocket(host: string, port: number, localHost: java.net.InetAddress, localPort: number): java.net.Socket;
					public createSocket(host: java.net.InetAddress, port: number): java.net.Socket;
					public getSupportedCipherSuites(): androidNative.Array<string>;
					public createSocket(host: string, port: number): java.net.Socket;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class TransformQuery<Transformed> extends com.contentful.java.cda.AbsQuery<any, com.contentful.java.cda.TransformQuery<any>> {
					public static class: java.lang.Class<com.contentful.java.cda.TransformQuery<any>>;
					public all(callback: com.contentful.java.cda.CDACallback<java.util.Collection<any>>): com.contentful.java.cda.CDACallback<java.util.Collection<any>>;
					public all(): io.reactivex.rxjava3.core.Flowable<java.util.Collection<any>>;
					public one(id: string, callback: com.contentful.java.cda.CDACallback<any>): com.contentful.java.cda.CDACallback<any>;
					public one(this_: string): io.reactivex.rxjava3.core.Flowable<any>;
				}
				export module TransformQuery {
					export class ContentfulEntryModel {
						public static class: java.lang.Class<com.contentful.java.cda.TransformQuery.ContentfulEntryModel>;
						/**
						 * Constructs a new instance of the com.contentful.java.cda.TransformQuery$ContentfulEntryModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { value(): string; additionalModelHints(): androidNative.Array<java.lang.Class<any>> });
						public constructor();
						public value(): string;
						public additionalModelHints(): androidNative.Array<java.lang.Class<any>>;
					}
					export class ContentfulField {
						public static class: java.lang.Class<com.contentful.java.cda.TransformQuery.ContentfulField>;
						/**
						 * Constructs a new instance of the com.contentful.java.cda.TransformQuery$ContentfulField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { value(): string; locale(): string });
						public constructor();
						public value(): string;
						public locale(): string;
					}
					export class ContentfulMetadata {
						public static class: java.lang.Class<com.contentful.java.cda.TransformQuery.ContentfulMetadata>;
						/**
						 * Constructs a new instance of the com.contentful.java.cda.TransformQuery$ContentfulMetadata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { value(): string });
						public constructor();
						public value(): string;
					}
					export class ContentfulSystemField {
						public static class: java.lang.Class<com.contentful.java.cda.TransformQuery.ContentfulSystemField>;
						/**
						 * Constructs a new instance of the com.contentful.java.cda.TransformQuery$ContentfulSystemField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { value(): string });
						public constructor();
						public value(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export class Util {
					public static class: java.lang.Class<com.contentful.java.cda.Util>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module build {
					export class GeneratedBuildParameters {
						public static class: java.lang.Class<com.contentful.java.cda.build.GeneratedBuildParameters>;
						public static PROJECT_VERSION: string = '10.6.0';
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module image {
					export class ImageOption {
						public static class: java.lang.Class<com.contentful.java.cda.image.ImageOption>;
						public static jpegQualityOf(quality: number): com.contentful.java.cda.image.ImageOption;
						public static backgroundColorOf(r: number, g: number, b: number): com.contentful.java.cda.image.ImageOption;
						public static formatOf(format: com.contentful.java.cda.image.ImageOption.Format): com.contentful.java.cda.image.ImageOption;
						public static http(): com.contentful.java.cda.image.ImageOption;
						public apply(url: string): string;
						public getOperation(): string;
						public static https(): com.contentful.java.cda.image.ImageOption;
						public static widthOf(width: number): com.contentful.java.cda.image.ImageOption;
						public static blackBackgroundColor(): com.contentful.java.cda.image.ImageOption;
						public static fitOf(resize: com.contentful.java.cda.image.ImageOption.Resize): com.contentful.java.cda.image.ImageOption;
						public static focusOn(focus: com.contentful.java.cda.image.ImageOption.Focus): com.contentful.java.cda.image.ImageOption;
						public static backgroundColorOf(color: number): com.contentful.java.cda.image.ImageOption;
						public static heightOf(height: number): com.contentful.java.cda.image.ImageOption;
						public static roundedCornerRadiusOf(radius: number): com.contentful.java.cda.image.ImageOption;
					}
					export module ImageOption {
						export class Focus {
							public static class: java.lang.Class<com.contentful.java.cda.image.ImageOption.Focus>;
							public static top: com.contentful.java.cda.image.ImageOption.Focus;
							public static left: com.contentful.java.cda.image.ImageOption.Focus;
							public static right: com.contentful.java.cda.image.ImageOption.Focus;
							public static bottom: com.contentful.java.cda.image.ImageOption.Focus;
							public static top_left: com.contentful.java.cda.image.ImageOption.Focus;
							public static top_right: com.contentful.java.cda.image.ImageOption.Focus;
							public static bottom_left: com.contentful.java.cda.image.ImageOption.Focus;
							public static bottom_right: com.contentful.java.cda.image.ImageOption.Focus;
							public static face: com.contentful.java.cda.image.ImageOption.Focus;
							public static faces: com.contentful.java.cda.image.ImageOption.Focus;
							public static values(): androidNative.Array<com.contentful.java.cda.image.ImageOption.Focus>;
							public static valueOf(name: string): com.contentful.java.cda.image.ImageOption.Focus;
						}
						export class Format {
							public static class: java.lang.Class<com.contentful.java.cda.image.ImageOption.Format>;
							public static jpg: com.contentful.java.cda.image.ImageOption.Format;
							public static png: com.contentful.java.cda.image.ImageOption.Format;
							public static png8: com.contentful.java.cda.image.ImageOption.Format;
							public static webp: com.contentful.java.cda.image.ImageOption.Format;
							public static avif: com.contentful.java.cda.image.ImageOption.Format;
							public static values(): androidNative.Array<com.contentful.java.cda.image.ImageOption.Format>;
							public static valueOf(name: string): com.contentful.java.cda.image.ImageOption.Format;
							public toUrlParameter(): string;
						}
						export class Resize {
							public static class: java.lang.Class<com.contentful.java.cda.image.ImageOption.Resize>;
							public static pad: com.contentful.java.cda.image.ImageOption.Resize;
							public static crop: com.contentful.java.cda.image.ImageOption.Resize;
							public static fill: com.contentful.java.cda.image.ImageOption.Resize;
							public static thumb: com.contentful.java.cda.image.ImageOption.Resize;
							public static scale: com.contentful.java.cda.image.ImageOption.Resize;
							public static values(): androidNative.Array<com.contentful.java.cda.image.ImageOption.Resize>;
							public static valueOf(name: string): com.contentful.java.cda.image.ImageOption.Resize;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module interceptor {
					export class AuthorizationHeaderInterceptor extends com.contentful.java.cda.interceptor.HeaderInterceptor {
						public static class: java.lang.Class<com.contentful.java.cda.interceptor.AuthorizationHeaderInterceptor>;
						public static HEADER_NAME: string = 'Authorization';
						public constructor(token: string);
						public constructor(name: string, value: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module interceptor {
					export class ContentfulUserAgentHeaderInterceptor extends com.contentful.java.cda.interceptor.HeaderInterceptor {
						public static class: java.lang.Class<com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor>;
						public static HEADER_NAME: string = 'X-Contentful-User-Agent';
						public constructor(sections: androidNative.Array<com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section>);
						public constructor(name: string, value: string);
					}
					export module ContentfulUserAgentHeaderInterceptor {
						export class Section {
							public static class: java.lang.Class<com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section>;
							public static platform(name: string, version: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public static app(name: string, version: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public static sdk(name: string, version: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public getName(): string;
							public static os(os: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem, version: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public static integration(name: string, version: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public getIdentifier(): string;
							public toString(): string;
							public getVersion(): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version;
						}
						export module Section {
							export class OperatingSystem {
								public static class: java.lang.Class<com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem>;
								public static iOS: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static tvOS: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static watchOS: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static macOS: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static Windows: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static Linux: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static Android: com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static valueOf(name: string): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static parse(osName: string): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static values(): androidNative.Array<com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem>;
							}
							export class Version {
								public static class: java.lang.Class<com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version>;
								public getMajor(): number;
								public toString(): string;
								public constructor(major: number, minor: number, patch: number, stability: string);
								public getMinor(): number;
								public static parse(major: string): com.contentful.java.cda.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version;
								public getStability(): string;
								public constructor(major: number, minor: number, patch: number);
								public getPatch(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module interceptor {
					export class ErrorInterceptor {
						public static class: java.lang.Class<com.contentful.java.cda.interceptor.ErrorInterceptor>;
						public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(logSensitiveData: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module interceptor {
					export class HeaderInterceptor {
						public static class: java.lang.Class<com.contentful.java.cda.interceptor.HeaderInterceptor>;
						public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
						public getValue(): string;
						public getName(): string;
						public constructor(name: string, value: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module interceptor {
					export class LogInterceptor {
						public static class: java.lang.Class<com.contentful.java.cda.interceptor.LogInterceptor>;
						public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(logger: com.contentful.java.cda.Logger);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module interceptor {
					export class UserAgentHeaderInterceptor extends com.contentful.java.cda.interceptor.HeaderInterceptor {
						public static class: java.lang.Class<com.contentful.java.cda.interceptor.UserAgentHeaderInterceptor>;
						public static HEADER_NAME: string = 'User-Agent';
						public constructor(name: string, value: string);
						public constructor(userAgent: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichBlock extends com.contentful.java.cda.rich.CDARichNode {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichBlock>;
						public constructor();
						public getContent(): java.util.List<com.contentful.java.cda.rich.CDARichNode>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichDocument extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichDocument>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichEmbeddedBlock extends com.contentful.java.cda.rich.CDARichHyperLink {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichEmbeddedBlock>;
						public constructor();
						public constructor(target: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichEmbeddedInline extends com.contentful.java.cda.rich.CDARichHyperLink {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichEmbeddedInline>;
						public constructor();
						public constructor(target: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichHeading extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichHeading>;
						public getLevel(): number;
						public constructor();
						public constructor(level: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichHorizontalRule extends com.contentful.java.cda.rich.CDARichNode {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichHorizontalRule>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichHyperLink extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichHyperLink>;
						public constructor();
						public getData(): any;
						public constructor(target: any);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichList extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichList>;
						public constructor();
						public constructor(decoration: string);
						public getDecoration(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichListItem extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichListItem>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichMark {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichMark>;
						public type: string;
						public constructor(type: string);
						public getType(): string;
					}
					export module CDARichMark {
						export class CDARichMarkBold extends com.contentful.java.cda.rich.CDARichMark {
							public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichMark.CDARichMarkBold>;
							public constructor();
							public constructor(type: string);
						}
						export class CDARichMarkCode extends com.contentful.java.cda.rich.CDARichMark {
							public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichMark.CDARichMarkCode>;
							public constructor();
							public constructor(type: string);
						}
						export class CDARichMarkCustom extends com.contentful.java.cda.rich.CDARichMark {
							public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichMark.CDARichMarkCustom>;
							public constructor(type: string);
						}
						export class CDARichMarkItalic extends com.contentful.java.cda.rich.CDARichMark {
							public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichMark.CDARichMarkItalic>;
							public constructor();
							public constructor(type: string);
						}
						export class CDARichMarkSubscript extends com.contentful.java.cda.rich.CDARichMark {
							public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichMark.CDARichMarkSubscript>;
							public constructor();
							public constructor(type: string);
						}
						export class CDARichMarkSuperscript extends com.contentful.java.cda.rich.CDARichMark {
							public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichMark.CDARichMarkSuperscript>;
							public constructor();
							public constructor(type: string);
						}
						export class CDARichMarkUnderline extends com.contentful.java.cda.rich.CDARichMark {
							public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichMark.CDARichMarkUnderline>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichNode {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichNode>;
						public constructor();
						public getNodeType(): string;
						public setNodeType(nodeType: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichOrderedList extends com.contentful.java.cda.rich.CDARichList {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichOrderedList>;
						public constructor();
						public constructor(decoration: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichParagraph extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichParagraph>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichQuote extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichQuote>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichTable extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichTable>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichTableCell extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichTableCell>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichTableHeaderCell extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichTableHeaderCell>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichTableRow extends com.contentful.java.cda.rich.CDARichBlock {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichTableRow>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichText extends com.contentful.java.cda.rich.CDARichNode {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichText>;
						public getMarks(): java.util.List<com.contentful.java.cda.rich.CDARichMark>;
						public constructor();
						public getText(): string;
						public constructor(text: string, marks: java.util.List<com.contentful.java.cda.rich.CDARichMark>);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class CDARichUnorderedList extends com.contentful.java.cda.rich.CDARichList {
						public static class: java.lang.Class<com.contentful.java.cda.rich.CDARichUnorderedList>;
						public constructor();
						public constructor(decoration: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cda {
				export module rich {
					export class RichTextFactory {
						public static class: java.lang.Class<com.contentful.java.cda.rich.RichTextFactory>;
						public static RESOLVER_MAP: java.util.Map<string, com.contentful.java.cda.rich.RichTextFactory.Resolver>;
						public constructor();
						public static resolveRichTextField(field: com.contentful.java.cda.ArrayResource, contentType: com.contentful.java.cda.CDAClient): void;
						public static resolveRichNode(rawNode: java.util.Map<string, any>): com.contentful.java.cda.rich.CDARichNode;
					}
					export module RichTextFactory {
						export class BlockAndDataResolver<T> extends com.contentful.java.cda.rich.RichTextFactory.BlockResolver<any> {
							public static class: java.lang.Class<com.contentful.java.cda.rich.RichTextFactory.BlockAndDataResolver<any>>;
							public resolve(param0: java.util.Map<string, any>): com.contentful.java.cda.rich.CDARichNode;
						}
						export class BlockResolver<T> extends com.contentful.java.cda.rich.RichTextFactory.Resolver {
							public static class: java.lang.Class<com.contentful.java.cda.rich.RichTextFactory.BlockResolver<any>>;
							public resolve(rawNode: java.util.Map<string, any>): com.contentful.java.cda.rich.CDARichNode;
							public resolve(param0: java.util.Map<string, any>): com.contentful.java.cda.rich.CDARichNode;
							public constructor(supplier: com.contentful.java.cda.rich.RichTextFactory.Supplier<any>);
						}
						export class HeadingResolver extends com.contentful.java.cda.rich.RichTextFactory.BlockResolver<com.contentful.java.cda.rich.CDARichHeading> {
							public static class: java.lang.Class<com.contentful.java.cda.rich.RichTextFactory.HeadingResolver>;
							public resolve(raw: java.util.Map<string, any>): com.contentful.java.cda.rich.CDARichNode;
							public resolve(param0: java.util.Map<string, any>): com.contentful.java.cda.rich.CDARichNode;
						}
						export class Resolver {
							public static class: java.lang.Class<com.contentful.java.cda.rich.RichTextFactory.Resolver>;
							/**
							 * Constructs a new instance of the com.contentful.java.cda.rich.RichTextFactory$Resolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { resolve(param0: java.util.Map<string, any>): com.contentful.java.cda.rich.CDARichNode });
							public constructor();
							public resolve(param0: java.util.Map<string, any>): com.contentful.java.cda.rich.CDARichNode;
						}
						export class Supplier<T> extends java.lang.Object {
							public static class: java.lang.Class<com.contentful.java.cda.rich.RichTextFactory.Supplier<any>>;
							/**
							 * Constructs a new instance of the com.contentful.java.cda.rich.RichTextFactory$Supplier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { get(): T });
							public constructor();
							public get(): T;
						}
						export class SupplierWithData<T> extends java.lang.Object {
							public static class: java.lang.Class<com.contentful.java.cda.rich.RichTextFactory.SupplierWithData<any>>;
							/**
							 * Constructs a new instance of the com.contentful.java.cda.rich.RichTextFactory$SupplierWithData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { get(param0: any): T });
							public constructor();
							public get(param0: any): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export abstract class AbsModule<T> extends java.lang.Object {
					public static class: java.lang.Class<com.contentful.java.cma.AbsModule<any>>;
					public createService(param0: retrofit2.Retrofit): T;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export abstract class CMACallback<T> extends java.lang.Object {
					public static class: java.lang.Class<com.contentful.java.cma.CMACallback<any>>;
					public constructor();
					public isCancelled(): boolean;
					public onSuccess(param0: T): void;
					public cancel(): void;
					public onFailure(exception: java.lang.RuntimeException): void;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class CMAClient {
					public static class: java.lang.Class<com.contentful.java.cma.CMAClient>;
					public users(): com.contentful.java.cma.ModuleUsers;
					public previewApiKeys(): com.contentful.java.cma.ModulePreviewApiKeys;
					public roles(): com.contentful.java.cma.ModuleRoles;
					public contentTypes(): com.contentful.java.cma.ModuleContentTypes;
					public spaces(): com.contentful.java.cma.ModuleSpaces;
					public organizations(): com.contentful.java.cma.ModuleOrganizations;
					public editorInterfaces(): com.contentful.java.cma.ModuleEditorInterfaces;
					public uiExtensions(): com.contentful.java.cma.ModuleUiExtensions;
					public organizationUsage(): com.contentful.java.cma.ModuleOrganizationUsage;
					public spaceMemberships(): com.contentful.java.cma.ModuleSpaceMemberships;
					public bulkActions(): com.contentful.java.cma.ModuleBulkActions;
					public entries(): com.contentful.java.cma.ModuleEntries;
					public locales(): com.contentful.java.cma.ModuleLocales;
					public scheduledActions(): com.contentful.java.cma.ModuleScheduledActions;
					public spaceUsage(): com.contentful.java.cma.ModuleSpaceUsage;
					public environments(): com.contentful.java.cma.ModuleEnvironments;
					public apiKeys(): com.contentful.java.cma.ModuleApiKeys;
					public taxonomy(): com.contentful.java.cma.ModuleTaxonomy;
					public tags(): com.contentful.java.cma.ModuleTags;
					public personalAccessTokens(): com.contentful.java.cma.ModulePersonalAccessTokens;
					public assets(): com.contentful.java.cma.ModuleAssets;
					public webhooks(): com.contentful.java.cma.ModuleWebhooks;
					public uploads(): com.contentful.java.cma.ModuleUploads;
				}
				export module CMAClient {
					export class Builder {
						public static class: java.lang.Class<com.contentful.java.cma.CMAClient.Builder>;
						public constructor();
						public setApplication(name: string, version: string): com.contentful.java.cma.CMAClient.Builder;
						public setSpaceId(spaceId: string): com.contentful.java.cma.CMAClient.Builder;
						public setLogSensitiveData(logSensitiveData: boolean): com.contentful.java.cma.CMAClient.Builder;
						public setLogLevel(logLevel: com.contentful.java.cma.Logger.Level): com.contentful.java.cma.CMAClient.Builder;
						public build(): com.contentful.java.cma.CMAClient;
						public setAccessToken(accessToken: string): com.contentful.java.cma.CMAClient.Builder;
						public setCoreEndpoint(remoteUrl: string): com.contentful.java.cma.CMAClient.Builder;
						public setLogger(logger: com.contentful.java.cma.Logger): com.contentful.java.cma.CMAClient.Builder;
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.CMAClient.Builder;
						public setCallbackExecutor(executor: java.util.concurrent.Executor): com.contentful.java.cma.CMAClient.Builder;
						public setIntegration(name: string, version: string): com.contentful.java.cma.CMAClient.Builder;
						public defaultCoreCallFactoryBuilder(): okhttp3.OkHttpClient.Builder;
						public setUploadCallFactory(callFactory: okhttp3.Call.Factory): com.contentful.java.cma.CMAClient.Builder;
						public defaultUploadCallFactoryBuilder(): okhttp3.OkHttpClient.Builder;
						public setUploadEndpoint(remoteUrl: string): com.contentful.java.cma.CMAClient.Builder;
						public setCoreCallFactory(callFactory: okhttp3.Call.Factory): com.contentful.java.cma.CMAClient.Builder;
						public setRateLimitListener(listener: com.contentful.java.cma.interceptor.RateLimitsListener): com.contentful.java.cma.CMAClient.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class Constants {
					public static class: java.lang.Class<com.contentful.java.cma.Constants>;
					public static ENDPOINT_CMA: string = 'https://api.contentful.com/';
					public static ENDPOINT_UPLOAD: string = 'https://upload.contentful.com/';
					public static DEFAULT_CONTENT_TYPE: string = 'application/vnd.contentful.management.v1+json';
					public static OCTET_STREAM_CONTENT_TYPE: string = 'application/octet-stream';
					public static DEFAULT_ENVIRONMENT: string = 'master';
				}
				export module Constants {
					export class CMAFieldType {
						public static class: java.lang.Class<com.contentful.java.cma.Constants.CMAFieldType>;
						public static Array: com.contentful.java.cma.Constants.CMAFieldType;
						public static Boolean: com.contentful.java.cma.Constants.CMAFieldType;
						public static Date: com.contentful.java.cma.Constants.CMAFieldType;
						public static Integer: com.contentful.java.cma.Constants.CMAFieldType;
						public static Link: com.contentful.java.cma.Constants.CMAFieldType;
						public static ResourceLink: com.contentful.java.cma.Constants.CMAFieldType;
						public static Location: com.contentful.java.cma.Constants.CMAFieldType;
						public static Number: com.contentful.java.cma.Constants.CMAFieldType;
						public static Object: com.contentful.java.cma.Constants.CMAFieldType;
						public static Symbol: com.contentful.java.cma.Constants.CMAFieldType;
						public static Text: com.contentful.java.cma.Constants.CMAFieldType;
						public static RichText: com.contentful.java.cma.Constants.CMAFieldType;
						public static valueOf(name: string): com.contentful.java.cma.Constants.CMAFieldType;
						public static values(): androidNative.Array<com.contentful.java.cma.Constants.CMAFieldType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class DefaultQueryParameter {
					public static class: java.lang.Class<com.contentful.java.cma.DefaultQueryParameter>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class Logger {
					public static class: java.lang.Class<com.contentful.java.cma.Logger>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { log(param0: string): void });
					public constructor();
					public log(param0: string): void;
				}
				export module Logger {
					export class Level {
						public static class: java.lang.Class<com.contentful.java.cma.Logger.Level>;
						public static NONE: com.contentful.java.cma.Logger.Level;
						public static BASIC: com.contentful.java.cma.Logger.Level;
						public static FULL: com.contentful.java.cma.Logger.Level;
						public static values(): androidNative.Array<com.contentful.java.cma.Logger.Level>;
						public static valueOf(name: string): com.contentful.java.cma.Logger.Level;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleApiKeys extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceApiKeys> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleApiKeys>;
					public fetchAll(spaceId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>;
					public fetchOne(keyId: string): com.contentful.java.cma.model.CMAApiKey;
					public delete(key: com.contentful.java.cma.model.CMAApiKey): number;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchOne(spaceId: string, keyId: string): com.contentful.java.cma.model.CMAApiKey;
					public async(): com.contentful.java.cma.ModuleApiKeys.Async;
					public create(key: com.contentful.java.cma.model.CMAApiKey): com.contentful.java.cma.model.CMAApiKey;
					public fetchAll(spaceId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>;
					public createService(param0: retrofit2.Retrofit): any;
					public create(spaceId: string, key: com.contentful.java.cma.model.CMAApiKey): com.contentful.java.cma.model.CMAApiKey;
					public update(key: com.contentful.java.cma.model.CMAApiKey): com.contentful.java.cma.model.CMAApiKey;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceApiKeys;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>;
				}
				export module ModuleApiKeys {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleApiKeys.Async>;
						public constructor(this$0: com.contentful.java.cma.ModuleApiKeys);
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>;
						public update(key: com.contentful.java.cma.model.CMAApiKey, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>;
						public fetchOne(keyId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>;
						public fetchOne(spaceId: string, keyId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>;
						public fetchAll(spaceId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>;
						public fetchAll(spaceId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>;
						public delete(key: com.contentful.java.cma.model.CMAApiKey, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public create(key: com.contentful.java.cma.model.CMAApiKey, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>;
						public create(spaceId: string, key: com.contentful.java.cma.model.CMAApiKey, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAApiKey>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleAssets extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceAssets> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleAssets>;
					public fetchAll(map: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>;
					public fetchAll(spaceId: string, environmentId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>;
					public process(asset: com.contentful.java.cma.model.CMAAsset, locale: string): java.lang.Integer;
					public create(spaceId: string, environmentId: string, asset: com.contentful.java.cma.model.CMAAsset): com.contentful.java.cma.model.CMAAsset;
					public fetchOne(spaceId: string, environmentId: string, assetId: string): com.contentful.java.cma.model.CMAAsset;
					public async(): com.contentful.java.cma.ModuleAssets.Async;
					public createService(param0: retrofit2.Retrofit): any;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceAssets;
					public publish(asset: com.contentful.java.cma.model.CMAAsset): com.contentful.java.cma.model.CMAAsset;
					public update(asset: com.contentful.java.cma.model.CMAAsset): com.contentful.java.cma.model.CMAAsset;
					public delete(asset: com.contentful.java.cma.model.CMAAsset): java.lang.Integer;
					public archive(asset: com.contentful.java.cma.model.CMAAsset): com.contentful.java.cma.model.CMAAsset;
					public unPublish(asset: com.contentful.java.cma.model.CMAAsset): com.contentful.java.cma.model.CMAAsset;
					public create(asset: com.contentful.java.cma.model.CMAAsset): com.contentful.java.cma.model.CMAAsset;
					public fetchOne(assetId: string): com.contentful.java.cma.model.CMAAsset;
					public unArchive(asset: com.contentful.java.cma.model.CMAAsset): com.contentful.java.cma.model.CMAAsset;
				}
				export module ModuleAssets {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleAssets.Async>;
						public delete(asset: com.contentful.java.cma.model.CMAAsset, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public fetchAll(spaceId: string, environmentId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>;
						public constructor(this$0: com.contentful.java.cma.ModuleAssets);
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>;
						public process(asset: com.contentful.java.cma.model.CMAAsset, locale: string, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public fetchOne(assetId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
						public create(asset: com.contentful.java.cma.model.CMAAsset, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
						public archive(asset: com.contentful.java.cma.model.CMAAsset, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
						public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>;
						public unPublish(asset: com.contentful.java.cma.model.CMAAsset, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
						public unArchive(asset: com.contentful.java.cma.model.CMAAsset, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
						public publish(asset: com.contentful.java.cma.model.CMAAsset, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>;
						public fetchOne(spaceId: string, environmentId: string, assetId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
						public update(asset: com.contentful.java.cma.model.CMAAsset, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
						public create(spaceId: string, environmentId: string, asset: com.contentful.java.cma.model.CMAAsset, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAAsset>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleBulkActions extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceBulkActions> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleBulkActions>;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceBulkActions;
					public unpublish(spaceId: string, environmentId: string, payload: com.contentful.java.cma.model.CMAPayload): com.contentful.java.cma.model.CMABulkAction;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public async(): com.contentful.java.cma.ModuleBulkActions.Async;
					public fetch(spaceId: string, environmentId: string, bulkActionId: string): com.contentful.java.cma.model.CMABulkAction;
					public publish(spaceId: string, environmentId: string, payload: com.contentful.java.cma.model.CMAPayload): com.contentful.java.cma.model.CMABulkAction;
					public validate(spaceId: string, environmentId: string, payload: com.contentful.java.cma.model.CMAPayload): com.contentful.java.cma.model.CMABulkAction;
					public createService(param0: retrofit2.Retrofit): any;
				}
				export module ModuleBulkActions {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleBulkActions.Async>;
						public fetch(spaceId: string, environmentId: string, bulkActionId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMABulkAction>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMABulkAction>;
						public validate(spaceId: string, environmentId: string, payload: com.contentful.java.cma.model.CMAPayload, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMABulkAction>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMABulkAction>;
						public constructor(this$0: com.contentful.java.cma.ModuleBulkActions);
						public publish(spaceId: string, environmentId: string, payload: com.contentful.java.cma.model.CMAPayload, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMABulkAction>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMABulkAction>;
						public unpublish(spaceId: string, environmentId: string, payload: com.contentful.java.cma.model.CMAPayload, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMABulkAction>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMABulkAction>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleContentTypes extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceContentTypes> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleContentTypes>;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>;
					public fetchOne(contentTypeId: string): com.contentful.java.cma.model.CMAContentType;
					public fetchOneSnapshot(contentType: com.contentful.java.cma.model.CMAContentType, snapshotId: string): com.contentful.java.cma.model.CMASnapshot;
					public createService(param0: retrofit2.Retrofit): any;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceContentTypes;
					public create(spaceId: string, environmentId: string, contentType: com.contentful.java.cma.model.CMAContentType): com.contentful.java.cma.model.CMAContentType;
					public update(contentType: com.contentful.java.cma.model.CMAContentType): com.contentful.java.cma.model.CMAContentType;
					public create(contentType: com.contentful.java.cma.model.CMAContentType): com.contentful.java.cma.model.CMAContentType;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>;
					public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>;
					public fetchAllSnapshots(contentType: com.contentful.java.cma.model.CMAContentType): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>;
					public delete(contentType: com.contentful.java.cma.model.CMAContentType): java.lang.Integer;
					public publish(contentType: com.contentful.java.cma.model.CMAContentType): com.contentful.java.cma.model.CMAContentType;
					public fetchOne(spaceId: string, environmentId: string, contentTypeId: string): com.contentful.java.cma.model.CMAContentType;
					public async(): com.contentful.java.cma.ModuleContentTypes.Async;
					public unPublish(contentType: com.contentful.java.cma.model.CMAContentType): com.contentful.java.cma.model.CMAContentType;
					public fetchAll(spaceId: string, environmentId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>;
				}
				export module ModuleContentTypes {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleContentTypes.Async>;
						public fetchAll(spaceId: string, environmentId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>;
						public fetchOne(contentTypeId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>;
						public create(contentType: com.contentful.java.cma.model.CMAContentType, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>;
						public fetchOne(spaceId: string, environmentId: string, contentTypeId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>;
						public unPublish(contentType: com.contentful.java.cma.model.CMAContentType, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>;
						public fetchOneSnapshot(contentType: com.contentful.java.cma.model.CMAContentType, snapshotId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASnapshot>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASnapshot>;
						public fetchAllSnapshots(contentType: com.contentful.java.cma.model.CMAContentType, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
						public constructor(this$0: com.contentful.java.cma.ModuleContentTypes);
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>;
						public update(contentType: com.contentful.java.cma.model.CMAContentType, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>;
						public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>;
						public create(spaceId: string, environmentId: string, contentType: com.contentful.java.cma.model.CMAContentType, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>;
						public delete(contentType: com.contentful.java.cma.model.CMAContentType, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public publish(contentType: com.contentful.java.cma.model.CMAContentType, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAContentType>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleEditorInterfaces extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceEditorInterfaces> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleEditorInterfaces>;
					public fetchOne(spaceId: string, environmentId: string, contentTypeId: string): com.contentful.java.cma.model.CMAEditorInterface;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchOne(contentTypeId: string): com.contentful.java.cma.model.CMAEditorInterface;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceEditorInterfaces;
					public update(editor: com.contentful.java.cma.model.CMAEditorInterface): com.contentful.java.cma.model.CMAEditorInterface;
					public createService(param0: retrofit2.Retrofit): any;
					public async(): com.contentful.java.cma.ModuleEditorInterfaces.Async;
				}
				export module ModuleEditorInterfaces {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleEditorInterfaces.Async>;
						public update(editor: com.contentful.java.cma.model.CMAEditorInterface, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEditorInterface>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEditorInterface>;
						public fetchOne(contentTypeId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEditorInterface>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEditorInterface>;
						public fetchOne(spaceId: string, environmentId: string, contentTypeId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEditorInterface>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEditorInterface>;
						public constructor(this$0: com.contentful.java.cma.ModuleEditorInterfaces);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleEntries extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceEntries> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleEntries>;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>;
					public create(contentTypeId: string, entry: com.contentful.java.cma.model.CMAEntry): com.contentful.java.cma.model.CMAEntry;
					public delete(entry: com.contentful.java.cma.model.CMAEntry): java.lang.Integer;
					public createService(param0: retrofit2.Retrofit): any;
					public unPublishLocale(entry: com.contentful.java.cma.model.CMAEntry, locale: string): com.contentful.java.cma.model.CMAEntry;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>;
					public fetchOne(spaceId: string, environmentId: string, entryId: string): com.contentful.java.cma.model.CMAEntry;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceEntries;
					public fetchAll(spaceId: string, environmentId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>;
					public unArchive(entry: com.contentful.java.cma.model.CMAEntry): com.contentful.java.cma.model.CMAEntry;
					public patch(spaceId: string, environmentId: string, entryId: string, version: java.lang.Integer, operations: java.util.List<java.util.Map<string, any>>): com.contentful.java.cma.model.CMAEntry;
					public async(): com.contentful.java.cma.ModuleEntries.Async;
					public update(entry: com.contentful.java.cma.model.CMAEntry): com.contentful.java.cma.model.CMAEntry;
					public fetchAllSnapshotsWithQuery(entry: com.contentful.java.cma.model.CMAEntry, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>;
					public fetchOneSnapshot(entry: com.contentful.java.cma.model.CMAEntry, snapshotId: string): com.contentful.java.cma.model.CMASnapshot;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>;
					public fetchOne(entryId: string): com.contentful.java.cma.model.CMAEntry;
					public publish(entry: com.contentful.java.cma.model.CMAEntry): com.contentful.java.cma.model.CMAEntry;
					public publishLocale(entry: com.contentful.java.cma.model.CMAEntry, locale: string): com.contentful.java.cma.model.CMAEntry;
					public unPublish(entry: com.contentful.java.cma.model.CMAEntry): com.contentful.java.cma.model.CMAEntry;
					public patch(entry: com.contentful.java.cma.model.CMAEntry, operations: java.util.List<java.util.Map<string, any>>): com.contentful.java.cma.model.CMAEntry;
					public archive(entry: com.contentful.java.cma.model.CMAEntry): com.contentful.java.cma.model.CMAEntry;
					public fetchAllSnapshots(entry: com.contentful.java.cma.model.CMAEntry): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>;
					public create(spaceId: string, environmentId: string, contentTypeId: string, entry: com.contentful.java.cma.model.CMAEntry): com.contentful.java.cma.model.CMAEntry;
				}
				export module ModuleEntries {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleEntries.Async>;
						public fetchAllSnapshotsWithQuery(entry: com.contentful.java.cma.model.CMAEntry, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
						public fetchAllSnapshots(entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>;
						public create(spaceId: string, environmentId: string, contentTypeId: string, entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public delete(entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public publishLocale(entry: com.contentful.java.cma.model.CMAEntry, locale: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public fetchOneSnapshot(entry: com.contentful.java.cma.model.CMAEntry, snapshotId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASnapshot>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASnapshot>;
						public publish(entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public constructor(param0: com.contentful.java.cma.ModuleEntries);
						public patch(entry: com.contentful.java.cma.model.CMAEntry, operations: java.util.List<java.util.Map<string, any>>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public create(contentTypeId: string, entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public update(entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public unPublishLocale(entry: com.contentful.java.cma.model.CMAEntry, locale: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public archive(entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public fetchOne(spaceId: string, environmentId: string, entryId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public unPublish(entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public unArchive(entry: com.contentful.java.cma.model.CMAEntry, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>;
						public fetchAll(spaceId: string, environmentId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>;
						public fetchOne(entryId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
						public patch(spaceId: string, environmentId: string, entryId: string, version: java.lang.Integer, operations: java.util.List<java.util.Map<string, any>>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEntry>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleEnvironments extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceEnvironments> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleEnvironments>;
					public clone(sourceEnvironment: com.contentful.java.cma.model.CMAEnvironment, newEnvironment: com.contentful.java.cma.model.CMAEnvironment): com.contentful.java.cma.model.CMAEnvironment;
					public delete(environment: com.contentful.java.cma.model.CMAEnvironment): java.lang.Integer;
					public async(): com.contentful.java.cma.ModuleEnvironments.Async;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public create(spaceId: string, environment: com.contentful.java.cma.model.CMAEnvironment): com.contentful.java.cma.model.CMAEnvironment;
					public fetchOne(environmentId: string): com.contentful.java.cma.model.CMAEnvironment;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceEnvironments;
					public createService(param0: retrofit2.Retrofit): any;
					public create(environment: com.contentful.java.cma.model.CMAEnvironment): com.contentful.java.cma.model.CMAEnvironment;
					public update(environment: com.contentful.java.cma.model.CMAEnvironment): com.contentful.java.cma.model.CMAEnvironment;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEnvironment>;
					public fetchOne(spaceId: string, environmentId: string): com.contentful.java.cma.model.CMAEnvironment;
					public fetchAll(spaceId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEnvironment>;
					/** @deprecated */
					public branch(sourceEnvironment: com.contentful.java.cma.model.CMAEnvironment, newEnvironment: com.contentful.java.cma.model.CMAEnvironment): com.contentful.java.cma.model.CMAEnvironment;
				}
				export module ModuleEnvironments {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleEnvironments.Async>;
						public create(environment: com.contentful.java.cma.model.CMAEnvironment, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>;
						public clone(sourceEnvironment: com.contentful.java.cma.model.CMAEnvironment, newEnvironment: com.contentful.java.cma.model.CMAEnvironment, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>;
						public delete(environment: com.contentful.java.cma.model.CMAEnvironment, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public create(spaceId: string, environment: com.contentful.java.cma.model.CMAEnvironment, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>;
						/** @deprecated */
						public branch(sourceEnvironment: com.contentful.java.cma.model.CMAEnvironment, newEnvironment: com.contentful.java.cma.model.CMAEnvironment, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>;
						public update(environment: com.contentful.java.cma.model.CMAEnvironment, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>;
						public fetchOne(spaceId: string, environmentId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>;
						public fetchOne(environmentId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAEnvironment>;
						public constructor(this$0: com.contentful.java.cma.ModuleEnvironments);
						public fetchAll(spaceId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEnvironment>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEnvironment>>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEnvironment>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEnvironment>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleLocales extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceLocales> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleLocales>;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceLocales;
					public async(): com.contentful.java.cma.ModuleLocales.Async;
					public delete(this_: com.contentful.java.cma.model.CMALocale): number;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMALocale>;
					public fetchOne(localeId: string): com.contentful.java.cma.model.CMALocale;
					public fetchAll(spaceId: string, environmentId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMALocale>;
					public create(locale: com.contentful.java.cma.model.CMALocale): com.contentful.java.cma.model.CMALocale;
					public create(spaceId: string, environmentId: string, locale: com.contentful.java.cma.model.CMALocale): com.contentful.java.cma.model.CMALocale;
					public createService(param0: retrofit2.Retrofit): any;
					public fetchOne(spaceId: string, environmentId: string, localeId: string): com.contentful.java.cma.model.CMALocale;
					public update(locale: com.contentful.java.cma.model.CMALocale): com.contentful.java.cma.model.CMALocale;
				}
				export module ModuleLocales {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleLocales.Async>;
						public create(locale: com.contentful.java.cma.model.CMALocale, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>;
						public constructor(this$0: com.contentful.java.cma.ModuleLocales);
						public update(locale: com.contentful.java.cma.model.CMALocale, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>;
						public fetchOne(spaceId: string, environmentId: string, localeId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>;
						public create(spaceId: string, environmentId: string, locale: com.contentful.java.cma.model.CMALocale, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>;
						public fetchOne(localeId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMALocale>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMALocale>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMALocale>>;
						public fetchAll(spaceId: string, environmentId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMALocale>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMALocale>>;
						public delete(locale: com.contentful.java.cma.model.CMALocale, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleOrganizationUsage extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceOrganizationUsage> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleOrganizationUsage>;
					public fetchAll(organizationId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>;
					public async(): com.contentful.java.cma.ModuleOrganizationUsage.Async;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceOrganizationUsage;
					public createService(param0: retrofit2.Retrofit): any;
				}
				export module ModuleOrganizationUsage {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleOrganizationUsage.Async>;
						public constructor(this$0: com.contentful.java.cma.ModuleOrganizationUsage);
						public fetchAll(organizationId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleOrganizations extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceOrganizations> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleOrganizations>;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>;
					public async(): com.contentful.java.cma.ModuleOrganizations.Async;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceOrganizations;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, environmentIdConfigured: boolean);
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>;
					public createService(param0: retrofit2.Retrofit): any;
				}
				export module ModuleOrganizations {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleOrganizations.Async>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>>;
						public constructor(this$0: com.contentful.java.cma.ModuleOrganizations);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModulePersonalAccessTokens extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServicePersonalAccessTokens> {
					public static class: java.lang.Class<com.contentful.java.cma.ModulePersonalAccessTokens>;
					public revoke(token: com.contentful.java.cma.model.CMAPersonalAccessToken): com.contentful.java.cma.model.CMAPersonalAccessToken;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServicePersonalAccessTokens;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>;
					public fetchOne(tokenId: string): com.contentful.java.cma.model.CMAPersonalAccessToken;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, environmentIdConfigured: boolean);
					public async(): com.contentful.java.cma.ModulePersonalAccessTokens.Async;
					public createService(param0: retrofit2.Retrofit): any;
					public create(token: com.contentful.java.cma.model.CMAPersonalAccessToken): com.contentful.java.cma.model.CMAPersonalAccessToken;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>;
				}
				export module ModulePersonalAccessTokens {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModulePersonalAccessTokens.Async>;
						public constructor(this$0: com.contentful.java.cma.ModulePersonalAccessTokens);
						public create(token: com.contentful.java.cma.model.CMAPersonalAccessToken, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPersonalAccessToken>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPersonalAccessToken>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>>;
						public fetchOne(tokenId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPersonalAccessToken>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPersonalAccessToken>;
						public revoke(token: com.contentful.java.cma.model.CMAPersonalAccessToken, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPersonalAccessToken>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPersonalAccessToken>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModulePreviewApiKeys extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServicePreviewApiKeys> {
					public static class: java.lang.Class<com.contentful.java.cma.ModulePreviewApiKeys>;
					public fetchAll(spaceId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPreviewApiKey>;
					public async(): com.contentful.java.cma.ModulePreviewApiKeys.Async;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchOne(spaceId: string, keyId: string): com.contentful.java.cma.model.CMAPreviewApiKey;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServicePreviewApiKeys;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPreviewApiKey>;
					public fetchOne(keyId: string): com.contentful.java.cma.model.CMAPreviewApiKey;
					public createService(param0: retrofit2.Retrofit): any;
				}
				export module ModulePreviewApiKeys {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModulePreviewApiKeys.Async>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPreviewApiKey>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPreviewApiKey>>;
						public constructor(this$0: com.contentful.java.cma.ModulePreviewApiKeys);
						public fetchAll(spaceId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPreviewApiKey>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPreviewApiKey>>;
						public fetchOne(spaceId: string, keyId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPreviewApiKey>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPreviewApiKey>;
						public fetchOne(keyId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPreviewApiKey>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAPreviewApiKey>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleRoles extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceRoles> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleRoles>;
					public fetchAll(spaceId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public async(): com.contentful.java.cma.ModuleRoles.Async;
					public fetchOne(spaceId: string, roleId: string): com.contentful.java.cma.model.CMARole;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceRoles;
					public fetchAll(spaceId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>;
					public createService(param0: retrofit2.Retrofit): any;
					public create(role: com.contentful.java.cma.model.CMARole): com.contentful.java.cma.model.CMARole;
					public fetchOne(roleId: string): com.contentful.java.cma.model.CMARole;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>;
					public update(role: com.contentful.java.cma.model.CMARole): com.contentful.java.cma.model.CMARole;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>;
					public delete(this_: com.contentful.java.cma.model.CMARole): number;
					public create(spaceId: string, role: com.contentful.java.cma.model.CMARole): com.contentful.java.cma.model.CMARole;
				}
				export module ModuleRoles {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleRoles.Async>;
						public constructor(this$0: com.contentful.java.cma.ModuleRoles);
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>;
						public delete(role: com.contentful.java.cma.model.CMARole, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public fetchAll(spaceId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>;
						public create(spaceId: string, role: com.contentful.java.cma.model.CMARole, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>;
						public update(role: com.contentful.java.cma.model.CMARole, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>;
						public fetchOne(roleId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>;
						public create(role: com.contentful.java.cma.model.CMARole, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>;
						public fetchOne(spaceId: string, roleId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMARole>;
						public fetchAll(spaceId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleScheduledActions extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceScheduledActions> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleScheduledActions>;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceScheduledActions;
					public update(scheduledActionId: string, scheduledAction: com.contentful.java.cma.model.CMAScheduledAction): com.contentful.java.cma.model.CMAScheduledAction;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public create(scheduledAction: com.contentful.java.cma.model.CMAScheduledAction): com.contentful.java.cma.model.CMAScheduledAction;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAScheduledAction>;
					public fetchAll(spaceId: string, environmentId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAScheduledAction>;
					public cancel(scheduledActionId: string): com.contentful.java.cma.model.CMAScheduledAction;
					public fetchOne(spaceId: string, environmentId: string, scheduledActionId: string, entityId: string): com.contentful.java.cma.model.CMAScheduledAction;
					public createService(param0: retrofit2.Retrofit): any;
					public fetchOne(scheduledActionId: string, entityId: string): com.contentful.java.cma.model.CMAScheduledAction;
					public async(): com.contentful.java.cma.ModuleScheduledActions.Async;
				}
				export module ModuleScheduledActions {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleScheduledActions.Async>;
						public cancel(scheduledActionId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAScheduledAction>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAScheduledAction>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAScheduledAction>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAScheduledAction>>;
						public constructor(param0: com.contentful.java.cma.ModuleScheduledActions);
						public create(scheduledAction: com.contentful.java.cma.model.CMAScheduledAction, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAScheduledAction>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAScheduledAction>;
						public fetchOne(scheduledActionId: string, entityId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAScheduledAction>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAScheduledAction>;
						public update(scheduledActionId: string, scheduledAction: com.contentful.java.cma.model.CMAScheduledAction, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAScheduledAction>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAScheduledAction>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleSpaceMemberships extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceSpaceMemberships> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleSpaceMemberships>;
					public create(membership: com.contentful.java.cma.model.CMASpaceMembership): com.contentful.java.cma.model.CMASpaceMembership;
					public update(membership: com.contentful.java.cma.model.CMASpaceMembership): com.contentful.java.cma.model.CMASpaceMembership;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>;
					public fetchAll(spaceId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>;
					public fetchOne(membershipId: string): com.contentful.java.cma.model.CMASpaceMembership;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceSpaceMemberships;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>;
					public createService(param0: retrofit2.Retrofit): any;
					public fetchAll(spaceId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>;
					public create(spaceId: string, membership: com.contentful.java.cma.model.CMASpaceMembership): com.contentful.java.cma.model.CMASpaceMembership;
					public delete(this_: com.contentful.java.cma.model.CMASpaceMembership): number;
					public async(): com.contentful.java.cma.ModuleSpaceMemberships.Async;
					public fetchOne(spaceId: string, membershipId: string): com.contentful.java.cma.model.CMASpaceMembership;
				}
				export module ModuleSpaceMemberships {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleSpaceMemberships.Async>;
						public fetchAll(spaceId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>;
						public fetchAll(spaceId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>;
						public create(membership: com.contentful.java.cma.model.CMASpaceMembership, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>;
						public update(membership: com.contentful.java.cma.model.CMASpaceMembership, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>;
						public create(spaceId: string, membership: com.contentful.java.cma.model.CMASpaceMembership, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>;
						public constructor(this$0: com.contentful.java.cma.ModuleSpaceMemberships);
						public fetchOne(membershipId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>;
						public fetchOne(spaceId: string, membershipId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpaceMembership>;
						public delete(membership: com.contentful.java.cma.model.CMASpaceMembership, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleSpaceUsage extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceSpaceUsage> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleSpaceUsage>;
					public fetchAll(organizationId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceSpaceUsage;
					public async(): com.contentful.java.cma.ModuleSpaceUsage.Async;
					public createService(param0: retrofit2.Retrofit): any;
				}
				export module ModuleSpaceUsage {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleSpaceUsage.Async>;
						public fetchAll(organizationId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>;
						public constructor(this$0: com.contentful.java.cma.ModuleSpaceUsage);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleSpaces extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceSpaces> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleSpaces>;
					public fetchOne(spaceId: string): com.contentful.java.cma.model.CMASpace;
					public async(): com.contentful.java.cma.ModuleSpaces.Async;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpace>;
					public create(space: com.contentful.java.cma.model.CMASpace): com.contentful.java.cma.model.CMASpace;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, environmentIdConfigured: boolean);
					public createService(param0: retrofit2.Retrofit): any;
					public delete(space: com.contentful.java.cma.model.CMASpace): java.lang.Integer;
					public create(spaceName: string): com.contentful.java.cma.model.CMASpace;
					public delete(spaceId: string): java.lang.Integer;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpace>;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceSpaces;
					public create(spaceName: string, organizationId: string): com.contentful.java.cma.model.CMASpace;
					public create(space: com.contentful.java.cma.model.CMASpace, organizationId: string): com.contentful.java.cma.model.CMASpace;
					public update(space: com.contentful.java.cma.model.CMASpace): com.contentful.java.cma.model.CMASpace;
				}
				export module ModuleSpaces {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleSpaces.Async>;
						public constructor(this$0: com.contentful.java.cma.ModuleSpaces);
						public create(spaceName: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>;
						public create(space: com.contentful.java.cma.model.CMASpace, organizationId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>;
						public delete(space: com.contentful.java.cma.model.CMASpace, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpace>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpace>>;
						public update(space: com.contentful.java.cma.model.CMASpace, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>;
						public create(spaceName: string, organizationId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>;
						public delete(spaceId: string, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public fetchOne(spaceId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>;
						public create(space: com.contentful.java.cma.model.CMASpace, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMASpace>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpace>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpace>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleTags extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceContentTags> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleTags>;
					public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMATag>;
					public async(): com.contentful.java.cma.ModuleTags.Async;
					public fetchOne(spaceId: string, environmentId: string, tagId: string): com.contentful.java.cma.model.CMATag;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMATag>;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceContentTags;
					public delete(spaceId: string, environmentId: string, tagId: string): java.lang.Integer;
					public create(environmentId: string, spaceId: string, tagId: string, name: string, visibility: com.contentful.java.cma.model.CMAVisibility): com.contentful.java.cma.model.CMATag;
					public fetchOne(tagId: string): com.contentful.java.cma.model.CMATag;
					public createService(param0: retrofit2.Retrofit): any;
					public update(name: string, tagId: string): com.contentful.java.cma.model.CMATag;
				}
				export module ModuleTags {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleTags.Async>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMATag>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMATag>>;
						public delete(spaceId: string, environmentId: string, tagId: string, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public fetchOne(tagId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATag>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATag>;
						public fetchOne(spaceId: string, environmentId: string, tagId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATag>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATag>;
						public constructor(this$0: com.contentful.java.cma.ModuleTags);
						public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMATag>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMATag>>;
						public create(spaceId: string, environmentId: string, tagId: string, name: string, visibility: com.contentful.java.cma.model.CMAVisibility, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATag>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATag>;
						public update(name: string, tagId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATag>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATag>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleTaxonomy extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceTaxonomy> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleTaxonomy>;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchConceptSchemes(organizationId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConceptScheme>;
					public async(): com.contentful.java.cma.ModuleTaxonomy.Async;
					public fetchTotalConcepts(organizationId: string): com.contentful.java.cma.model.CMATotalConcepts;
					public createConceptSchemeWithId(organizationId: string, conceptSchemeId: string, conceptScheme: com.contentful.java.cma.model.CMAConceptScheme): com.contentful.java.cma.model.CMAConceptScheme;
					public deleteConceptScheme(organizationId: string, conceptSchemeId: string): void;
					public fetchConcepts(organizationId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>;
					public createService(param0: retrofit2.Retrofit): any;
					public deleteConcept(organizationId: string, conceptId: string): void;
					public createConceptScheme(organizationId: string, conceptScheme: com.contentful.java.cma.model.CMAConceptScheme): com.contentful.java.cma.model.CMAConceptScheme;
					public createConcept(organizationId: string, concept: com.contentful.java.cma.model.CMAConcept): com.contentful.java.cma.model.CMAConcept;
					public updateConceptScheme(organizationId: string, conceptSchemeId: string, version: number, operations: java.util.Map<string, any>): com.contentful.java.cma.model.CMAConceptScheme;
					public createConceptWithId(organizationId: string, conceptId: string, concept: com.contentful.java.cma.model.CMAConcept): com.contentful.java.cma.model.CMAConcept;
					public fetchTotalConceptSchemes(organizationId: string): com.contentful.java.cma.model.CMATotalConcepts;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceTaxonomy;
					public fetchConceptDescendants(organizationId: string, conceptId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>;
					public fetchConcept(organizationId: string, conceptId: string): com.contentful.java.cma.model.CMAConcept;
					public fetchConceptAncestors(organizationId: string, conceptId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>;
					public updateConcept(organizationId: string, conceptId: string, version: number, operations: java.util.List<java.util.Map<string, any>>): com.contentful.java.cma.model.CMAConcept;
					public fetchConceptScheme(organizationId: string, conceptSchemeId: string): com.contentful.java.cma.model.CMAConceptScheme;
				}
				export module ModuleTaxonomy {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleTaxonomy.Async>;
						public fetchConcepts(organizationId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
						public updateConceptScheme(organizationId: string, conceptSchemeId: string, version: number, operations: java.util.Map<string, any>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConceptScheme>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConceptScheme>;
						public createConceptWithId(organizationId: string, conceptId: string, concept: com.contentful.java.cma.model.CMAConcept, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConcept>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConcept>;
						public fetchConceptScheme(organizationId: string, conceptSchemeId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConceptScheme>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConceptScheme>;
						public createConcept(organizationId: string, concept: com.contentful.java.cma.model.CMAConcept, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConcept>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConcept>;
						public fetchConceptDescendants(organizationId: string, conceptId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
						public fetchConceptSchemes(organizationId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConceptScheme>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConceptScheme>>;
						public constructor(this$0: com.contentful.java.cma.ModuleTaxonomy);
						public fetchConcept(organizationId: string, conceptId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConcept>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConcept>;
						public fetchConceptAncestors(organizationId: string, conceptId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
						public deleteConcept(organizationId: string, conceptId: string, callback: com.contentful.java.cma.CMACallback<java.lang.Void>): com.contentful.java.cma.CMACallback<java.lang.Void>;
						public fetchTotalConcepts(organizationId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATotalConcepts>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATotalConcepts>;
						public deleteConceptScheme(organizationId: string, conceptSchemeId: string, callback: com.contentful.java.cma.CMACallback<java.lang.Void>): com.contentful.java.cma.CMACallback<java.lang.Void>;
						public createConceptSchemeWithId(organizationId: string, conceptSchemeId: string, conceptScheme: com.contentful.java.cma.model.CMAConceptScheme, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConceptScheme>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConceptScheme>;
						public updateConcept(organizationId: string, conceptId: string, version: number, operations: java.util.List<java.util.Map<string, any>>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConcept>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConcept>;
						public createConceptScheme(organizationId: string, conceptScheme: com.contentful.java.cma.model.CMAConceptScheme, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConceptScheme>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAConceptScheme>;
						public fetchTotalConceptSchemes(organizationId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATotalConcepts>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMATotalConcepts>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleUiExtensions extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceUiExtensions> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleUiExtensions>;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>;
					public delete(extension: com.contentful.java.cma.model.CMAUiExtension): java.lang.Integer;
					public fetchOne(extensionId: string): com.contentful.java.cma.model.CMAUiExtension;
					public update(extension: com.contentful.java.cma.model.CMAUiExtension): com.contentful.java.cma.model.CMAUiExtension;
					public async(): com.contentful.java.cma.ModuleUiExtensions.Async;
					public createService(param0: retrofit2.Retrofit): any;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceUiExtensions;
					public fetchAll(spaceId: string, environmentId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>;
					public fetchOne(spaceId: string, environmentId: string, extensionId: string): com.contentful.java.cma.model.CMAUiExtension;
					public create(extension: com.contentful.java.cma.model.CMAUiExtension): com.contentful.java.cma.model.CMAUiExtension;
					public create(spaceId: string, environmentId: string, extension: com.contentful.java.cma.model.CMAUiExtension): com.contentful.java.cma.model.CMAUiExtension;
				}
				export module ModuleUiExtensions {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleUiExtensions.Async>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>;
						public create(spaceId: string, environmentId: string, extension: com.contentful.java.cma.model.CMAUiExtension, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>;
						public constructor(this$0: com.contentful.java.cma.ModuleUiExtensions);
						public fetchAll(spaceId: string, environmentId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>;
						public delete(extension: com.contentful.java.cma.model.CMAUiExtension, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public fetchOne(spaceId: string, environmentId: string, extensionId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>;
						public fetchAll(spaceId: string, environmentId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>;
						public update(extension: com.contentful.java.cma.model.CMAUiExtension, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>;
						public fetchOne(extensionId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>;
						public create(extension: com.contentful.java.cma.model.CMAUiExtension, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUiExtension>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleUploads extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceUploads> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleUploads>;
					public fetchOne(uploadId: string, environmentId: string): com.contentful.java.cma.model.CMAUpload;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public create(stream: java.io.InputStream): com.contentful.java.cma.model.CMAUpload;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceUploads;
					public create(stream: java.io.InputStream, chunkSize: number): com.contentful.java.cma.model.CMAUpload;
					public fetchOne(spaceId: string, environmentId: string, uploadId: string): com.contentful.java.cma.model.CMAUpload;
					public delete(upload: com.contentful.java.cma.model.CMAUpload, environmentId: string): number;
					public createService(param0: retrofit2.Retrofit): any;
					public create(spaceId: string, environmentId: string, stream: java.io.InputStream): com.contentful.java.cma.model.CMAUpload;
					public create(spaceId: string, environmentId: string, stream: java.io.InputStream, chunkSize: number): com.contentful.java.cma.model.CMAUpload;
					public async(): com.contentful.java.cma.ModuleUploads.Async;
				}
				export module ModuleUploads {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleUploads.Async>;
						public create(stream: java.io.InputStream, chunkSize: number, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>;
						public create(stream: java.io.InputStream, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>;
						public create(spaceId: string, environmentId: string, stream: java.io.InputStream, chunkSize: number, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>;
						public delete(upload: com.contentful.java.cma.model.CMAUpload, environmentId: string, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public fetchOne(spaceId: string, environmentId: string, uploadId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>;
						public constructor(this$0: com.contentful.java.cma.ModuleUploads);
						public fetchOne(uploadId: string, environmentId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>;
						public create(spaceId: string, environmentId: string, stream: java.io.InputStream, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUpload>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleUsers extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceUsers> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleUsers>;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceUsers;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, environmentIdConfigured: boolean);
					public async(): com.contentful.java.cma.ModuleUsers.Async;
					public createService(param0: retrofit2.Retrofit): any;
					public fetchMe(): com.contentful.java.cma.model.CMAUser;
				}
				export module ModuleUsers {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleUsers.Async>;
						public constructor(this$0: com.contentful.java.cma.ModuleUsers);
						public fetchMe(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUser>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAUser>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ModuleWebhooks extends com.contentful.java.cma.AbsModule<com.contentful.java.cma.ServiceWebhooks> {
					public static class: java.lang.Class<com.contentful.java.cma.ModuleWebhooks>;
					public update(webhook: com.contentful.java.cma.model.CMAWebhook): com.contentful.java.cma.model.CMAWebhook;
					public constructor(retrofit: retrofit2.Retrofit, callbackExecutor: java.util.concurrent.Executor, spaceId: string, environmentId: string, environmentIdConfigured: boolean);
					public fetchOne(webhookId: string): com.contentful.java.cma.model.CMAWebhook;
					public callDetails(call: com.contentful.java.cma.model.CMAWebhookCall): com.contentful.java.cma.model.CMAWebhookCallDetail;
					public delete(webhook: com.contentful.java.cma.model.CMAWebhook): java.lang.Integer;
					public fetchAll(spaceId: string, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>;
					public fetchAll(): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>;
					public fetchAll(spaceId: string): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>;
					public createService(param0: retrofit2.Retrofit): any;
					public create(spaceId: string, webhook: com.contentful.java.cma.model.CMAWebhook): com.contentful.java.cma.model.CMAWebhook;
					public createService(retrofit: retrofit2.Retrofit): com.contentful.java.cma.ServiceWebhooks;
					public calls(webhook: com.contentful.java.cma.model.CMAWebhook, query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>;
					public health(webhook: com.contentful.java.cma.model.CMAWebhook): com.contentful.java.cma.model.CMAWebhookHealth;
					public async(): com.contentful.java.cma.ModuleWebhooks.Async;
					public fetchOne(spaceId: string, webhookId: string): com.contentful.java.cma.model.CMAWebhook;
					public create(webhook: com.contentful.java.cma.model.CMAWebhook): com.contentful.java.cma.model.CMAWebhook;
					public fetchAll(query: java.util.Map<string, string>): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>;
					public calls(webhook: com.contentful.java.cma.model.CMAWebhook): com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>;
				}
				export module ModuleWebhooks {
					export class Async {
						public static class: java.lang.Class<com.contentful.java.cma.ModuleWebhooks.Async>;
						public fetchAll(spaceId: string, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>;
						public callDetails(call: com.contentful.java.cma.model.CMAWebhookCall, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhookCallDetail>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhookCallDetail>;
						public create(webhook: com.contentful.java.cma.model.CMAWebhook, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>;
						public fetchAll(spaceId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>;
						public calls(webhook: com.contentful.java.cma.model.CMAWebhook, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>>;
						public calls(webhook: com.contentful.java.cma.model.CMAWebhook, query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>>;
						public create(spaceId: string, webhook: com.contentful.java.cma.model.CMAWebhook, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>;
						public fetchOne(webhookId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>;
						public fetchAll(callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>;
						public health(webhook: com.contentful.java.cma.model.CMAWebhook, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhookHealth>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhookHealth>;
						public delete(webhook: com.contentful.java.cma.model.CMAWebhook, callback: com.contentful.java.cma.CMACallback<java.lang.Integer>): com.contentful.java.cma.CMACallback<java.lang.Integer>;
						public update(webhook: com.contentful.java.cma.model.CMAWebhook, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>;
						public fetchOne(spaceId: string, webhookId: string, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAWebhook>;
						public fetchAll(query: java.util.Map<string, string>, callback: com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>): com.contentful.java.cma.CMACallback<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>;
						public constructor(param0: com.contentful.java.cma.ModuleWebhooks);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export abstract class Platform {
					public static class: java.lang.Class<com.contentful.java.cma.Platform>;
					public name(): string;
					public constructor();
					public callbackExecutor(): java.util.concurrent.Executor;
					public version(): string;
					public static get(): com.contentful.java.cma.Platform;
				}
				export module Platform {
					export class Android extends com.contentful.java.cma.Platform {
						public static class: java.lang.Class<com.contentful.java.cma.Platform.Android>;
						public version(): string;
						public callbackExecutor(): java.util.concurrent.Executor;
						public name(): string;
					}
					export class Base extends com.contentful.java.cma.Platform {
						public static class: java.lang.Class<com.contentful.java.cma.Platform.Base>;
						public version(): string;
						public callbackExecutor(): java.util.concurrent.Executor;
						public name(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class RxExtensions {
					public static class: java.lang.Class<com.contentful.java.cma.RxExtensions>;
				}
				export module RxExtensions {
					export abstract class AbsAction<T> extends io.reactivex.functions.Consumer<any> {
						public static class: java.lang.Class<com.contentful.java.cma.RxExtensions.AbsAction<any>>;
						public constructor(executor: java.util.concurrent.Executor, callback: com.contentful.java.cma.CMACallback<any>);
					}
					export class ActionError extends com.contentful.java.cma.RxExtensions.AbsAction<java.lang.Throwable> {
						public static class: java.lang.Class<com.contentful.java.cma.RxExtensions.ActionError>;
						public accept(t: java.lang.Throwable): void;
						public constructor(executor: java.util.concurrent.Executor, callback: com.contentful.java.cma.CMACallback<any>);
					}
					export class ActionSuccess<T> extends com.contentful.java.cma.RxExtensions.AbsAction<any> {
						public static class: java.lang.Class<com.contentful.java.cma.RxExtensions.ActionSuccess<any>>;
						public accept(t: any): void;
						public constructor(executor: java.util.concurrent.Executor, callback: com.contentful.java.cma.CMACallback<any>);
					}
					export abstract class DefFunc<T> extends java.util.concurrent.Callable<io.reactivex.Observable<any>> {
						public static class: java.lang.Class<com.contentful.java.cma.RxExtensions.DefFunc<any>>;
						public call(): io.reactivex.Observable<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceApiKeys {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceApiKeys>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceApiKeys interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>;
						fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>;
						fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAApiKey>;
						create(param0: string, param1: com.contentful.java.cma.model.CMAApiKey): io.reactivex.Flowable<com.contentful.java.cma.model.CMAApiKey>;
						update(param0: java.lang.Integer, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAApiKey): io.reactivex.Flowable<com.contentful.java.cma.model.CMAApiKey>;
						delete(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					});
					public constructor();
					public delete(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAApiKey>;
					public update(param0: java.lang.Integer, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAApiKey): io.reactivex.Flowable<com.contentful.java.cma.model.CMAApiKey>;
					public fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>;
					public create(param0: string, param1: com.contentful.java.cma.model.CMAApiKey): io.reactivex.Flowable<com.contentful.java.cma.model.CMAApiKey>;
					public fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAApiKey>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceAssets {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceAssets>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceAssets interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						archive(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
						create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAAsset): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
						create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAAsset): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
						delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>;
						fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
						process(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						publish(param0: java.lang.Integer, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
						unArchive(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
						unPublish(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
						update(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: com.contentful.java.cma.model.CMAAsset): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
					});
					public constructor();
					public create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAAsset): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
					public process(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
					public publish(param0: java.lang.Integer, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
					public unArchive(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
					public fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAAsset>>;
					public update(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: com.contentful.java.cma.model.CMAAsset): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
					public archive(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
					public delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public unPublish(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
					public create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAAsset): io.reactivex.Flowable<com.contentful.java.cma.model.CMAAsset>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceBulkActions {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceBulkActions>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceBulkActions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetch(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMABulkAction>;
						publish(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAPayload): io.reactivex.Flowable<com.contentful.java.cma.model.CMABulkAction>;
						unpublish(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAPayload): io.reactivex.Flowable<com.contentful.java.cma.model.CMABulkAction>;
						validate(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAPayload): io.reactivex.Flowable<com.contentful.java.cma.model.CMABulkAction>;
					});
					public constructor();
					public publish(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAPayload): io.reactivex.Flowable<com.contentful.java.cma.model.CMABulkAction>;
					public unpublish(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAPayload): io.reactivex.Flowable<com.contentful.java.cma.model.CMABulkAction>;
					public validate(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAPayload): io.reactivex.Flowable<com.contentful.java.cma.model.CMABulkAction>;
					public fetch(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMABulkAction>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceContentTags {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceContentTags>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceContentTags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMATag>>;
						create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMATag): io.reactivex.Flowable<com.contentful.java.cma.model.CMATag>;
						fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMATag>;
						update(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMATag): io.reactivex.Flowable<com.contentful.java.cma.model.CMATag>;
						delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					});
					public constructor();
					public fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMATag>>;
					public update(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMATag): io.reactivex.Flowable<com.contentful.java.cma.model.CMATag>;
					public fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMATag>;
					public delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMATag): io.reactivex.Flowable<com.contentful.java.cma.model.CMATag>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceContentTypes {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceContentTypes>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceContentTypes interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAContentType): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
						create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAContentType): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
						delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>;
						fetchAllSnapshots(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
						fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
						fetchOneSnapshot(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMASnapshot>;
						publish(param0: java.lang.Integer, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
						unPublish(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
						update(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: com.contentful.java.cma.model.CMAContentType): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
					});
					public constructor();
					public fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
					public fetchOneSnapshot(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMASnapshot>;
					public unPublish(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
					public fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAContentType>>;
					public create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAContentType): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
					public create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAContentType): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
					public update(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: com.contentful.java.cma.model.CMAContentType): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
					public fetchAllSnapshots(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
					public delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public publish(param0: java.lang.Integer, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAContentType>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceEditorInterfaces {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceEditorInterfaces>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceEditorInterfaces interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEditorInterface>; update(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAEditorInterface, param4: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEditorInterface> });
					public constructor();
					public update(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAEditorInterface, param4: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEditorInterface>;
					public fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEditorInterface>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceEntries {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceEntries>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceEntries interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						archive(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						unArchive(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAEntry): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						create(param0: string, param1: string, param2: string, param3: string, param4: com.contentful.java.cma.model.CMAEntry): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						fetchOneSnapshot(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMASnapshot>;
						fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>;
						fetchAllSnapshots(param0: string, param1: string, param2: string, param3: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
						fetchAllSnapshots(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
						publish(param0: java.lang.Integer, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						unPublish(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						update(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: com.contentful.java.cma.model.CMAEntry): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						patch(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: java.util.List<java.util.Map<string, any>>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						publishLocale(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
						unPublishLocale(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					});
					public constructor();
					public update(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: com.contentful.java.cma.model.CMAEntry): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public fetchOneSnapshot(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMASnapshot>;
					public archive(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAEntry): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public fetchAllSnapshots(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
					public unPublishLocale(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEntry>>;
					public fetchAllSnapshots(param0: string, param1: string, param2: string, param3: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASnapshot>>;
					public patch(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: java.util.List<java.util.Map<string, any>>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public unArchive(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public create(param0: string, param1: string, param2: string, param3: string, param4: com.contentful.java.cma.model.CMAEntry): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public publish(param0: java.lang.Integer, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public unPublish(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
					public publishLocale(param0: java.lang.Integer, param1: string, param2: string, param3: string, param4: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEntry>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceEnvironments {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceEnvironments>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceEnvironments interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: string, param1: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
						clone(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
						create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
						clone(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
						delete(param0: java.lang.Integer, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEnvironment>>;
						fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
						update(param0: java.lang.Integer, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
					});
					public constructor();
					public clone(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
					public fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
					public update(param0: java.lang.Integer, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
					public clone(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
					public delete(param0: java.lang.Integer, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAEnvironment>>;
					public create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
					public create(param0: string, param1: com.contentful.java.cma.model.CMAEnvironment): io.reactivex.Flowable<com.contentful.java.cma.model.CMAEnvironment>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceLocales {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceLocales>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceLocales interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchAll(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMALocale>>;
						fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMALocale>;
						create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMALocale): io.reactivex.Flowable<com.contentful.java.cma.model.CMALocale>;
						update(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMALocale, param4: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMALocale>;
						delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					});
					public constructor();
					public fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMALocale>;
					public create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMALocale): io.reactivex.Flowable<com.contentful.java.cma.model.CMALocale>;
					public fetchAll(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMALocale>>;
					public update(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMALocale, param4: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMALocale>;
					public delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceOrganizationUsage {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceOrganizationUsage>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceOrganizationUsage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>; fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>> });
					public constructor();
					public fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>;
					public fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceOrganizations {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceOrganizations>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceOrganizations interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fetchAll(): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>>; fetchAll(param0: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>> });
					public constructor();
					public fetchAll(param0: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>>;
					public fetchAll(): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAOrganization>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServicePersonalAccessTokens {
					public static class: java.lang.Class<com.contentful.java.cma.ServicePersonalAccessTokens>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServicePersonalAccessTokens interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchAll(): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>>;
						fetchAll(param0: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>>;
						fetchOne(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAPersonalAccessToken>;
						create(param0: com.contentful.java.cma.model.CMAPersonalAccessToken): io.reactivex.Flowable<com.contentful.java.cma.model.CMAPersonalAccessToken>;
						revoke(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAPersonalAccessToken>;
					});
					public constructor();
					public fetchAll(param0: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>>;
					public fetchOne(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAPersonalAccessToken>;
					public fetchAll(): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPersonalAccessToken>>;
					public create(param0: com.contentful.java.cma.model.CMAPersonalAccessToken): io.reactivex.Flowable<com.contentful.java.cma.model.CMAPersonalAccessToken>;
					public revoke(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAPersonalAccessToken>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServicePreviewApiKeys {
					public static class: java.lang.Class<com.contentful.java.cma.ServicePreviewApiKeys>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServicePreviewApiKeys interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPreviewApiKey>>; fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAPreviewApiKey> });
					public constructor();
					public fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAPreviewApiKey>>;
					public fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAPreviewApiKey>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceRoles {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceRoles>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceRoles interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>;
						fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>;
						fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMARole>;
						create(param0: string, param1: com.contentful.java.cma.model.CMARole): io.reactivex.Flowable<com.contentful.java.cma.model.CMARole>;
						update(param0: string, param1: string, param2: com.contentful.java.cma.model.CMARole, param3: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMARole>;
						delete(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					});
					public constructor();
					public create(param0: string, param1: com.contentful.java.cma.model.CMARole): io.reactivex.Flowable<com.contentful.java.cma.model.CMARole>;
					public delete(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>;
					public fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMARole>>;
					public fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMARole>;
					public update(param0: string, param1: string, param2: com.contentful.java.cma.model.CMARole, param3: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMARole>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceScheduledActions {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceScheduledActions>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceScheduledActions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchAll(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAScheduledAction>>;
						fetchOne(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAScheduledAction>;
						update(param0: java.lang.Integer, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAScheduledAction): io.reactivex.Flowable<com.contentful.java.cma.model.CMAScheduledAction>;
						create(param0: string, param1: com.contentful.java.cma.model.CMAScheduledAction): io.reactivex.Flowable<com.contentful.java.cma.model.CMAScheduledAction>;
						cancel(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAScheduledAction>;
					});
					public constructor();
					public update(param0: java.lang.Integer, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAScheduledAction): io.reactivex.Flowable<com.contentful.java.cma.model.CMAScheduledAction>;
					public fetchAll(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAScheduledAction>>;
					public create(param0: string, param1: com.contentful.java.cma.model.CMAScheduledAction): io.reactivex.Flowable<com.contentful.java.cma.model.CMAScheduledAction>;
					public fetchOne(param0: string, param1: string, param2: string, param3: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAScheduledAction>;
					public cancel(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAScheduledAction>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceSpaceMemberships {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceSpaceMemberships>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceSpaceMemberships interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>;
						fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>;
						fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpaceMembership>;
						create(param0: string, param1: com.contentful.java.cma.model.CMASpaceMembership): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpaceMembership>;
						update(param0: string, param1: string, param2: com.contentful.java.cma.model.CMASpaceMembership, param3: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpaceMembership>;
						delete(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					});
					public constructor();
					public fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>;
					public fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpaceMembership>;
					public delete(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public create(param0: string, param1: com.contentful.java.cma.model.CMASpaceMembership): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpaceMembership>;
					public update(param0: string, param1: string, param2: com.contentful.java.cma.model.CMASpaceMembership, param3: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpaceMembership>;
					public fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpaceMembership>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceSpaceUsage {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceSpaceUsage>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceSpaceUsage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>; fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>> });
					public constructor();
					public fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>;
					public fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUsage>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceSpaces {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceSpaces>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceSpaces interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: com.contentful.java.cma.model.CMASpace): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpace>;
						create(param0: string, param1: com.contentful.java.cma.model.CMASpace): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpace>;
						delete(param0: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						fetchAll(param0: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpace>>;
						fetchOne(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpace>;
						update(param0: java.lang.Integer, param1: string, param2: com.contentful.java.cma.model.CMASpace): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpace>;
					});
					public constructor();
					public create(param0: com.contentful.java.cma.model.CMASpace): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpace>;
					public fetchAll(param0: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMASpace>>;
					public fetchOne(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpace>;
					public update(param0: java.lang.Integer, param1: string, param2: com.contentful.java.cma.model.CMASpace): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpace>;
					public create(param0: string, param1: com.contentful.java.cma.model.CMASpace): io.reactivex.Flowable<com.contentful.java.cma.model.CMASpace>;
					public delete(param0: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceTaxonomy {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceTaxonomy>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceTaxonomy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchConcept(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConcept>;
						updateConcept(param0: string, param1: string, param2: number, param3: java.util.List<java.util.Map<string, any>>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConcept>;
						deleteConcept(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						createConcept(param0: string, param1: com.contentful.java.cma.model.CMAConcept): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConcept>;
						createConceptWithId(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAConcept): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConcept>;
						fetchConcepts(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
						fetchConceptDescendants(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
						fetchConceptAncestors(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
						fetchTotalConcepts(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMATotalConcepts>;
						fetchConceptScheme(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConceptScheme>;
						updateConceptScheme(param0: string, param1: string, param2: number, param3: java.util.Map<string, any>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConceptScheme>;
						deleteConceptScheme(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						createConceptScheme(param0: string, param1: com.contentful.java.cma.model.CMAConceptScheme): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConceptScheme>;
						createConceptSchemeWithId(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAConceptScheme): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConceptScheme>;
						fetchConceptSchemes(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConceptScheme>>;
						fetchTotalConceptSchemes(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMATotalConcepts>;
					});
					public constructor();
					public updateConceptScheme(param0: string, param1: string, param2: number, param3: java.util.Map<string, any>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConceptScheme>;
					public updateConcept(param0: string, param1: string, param2: number, param3: java.util.List<java.util.Map<string, any>>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConcept>;
					public deleteConcept(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public createConcept(param0: string, param1: com.contentful.java.cma.model.CMAConcept): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConcept>;
					public fetchConceptAncestors(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
					public fetchTotalConcepts(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMATotalConcepts>;
					public fetchTotalConceptSchemes(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMATotalConcepts>;
					public fetchConceptDescendants(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
					public fetchConceptScheme(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConceptScheme>;
					public fetchConcepts(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConcept>>;
					public createConceptSchemeWithId(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAConceptScheme): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConceptScheme>;
					public deleteConceptScheme(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public createConceptWithId(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAConcept): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConcept>;
					public createConceptScheme(param0: string, param1: com.contentful.java.cma.model.CMAConceptScheme): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConceptScheme>;
					public fetchConceptSchemes(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAConceptScheme>>;
					public fetchConcept(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAConcept>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceUiExtensions {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceUiExtensions>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceUiExtensions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						fetchAll(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>;
						fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>;
						fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUiExtension>;
						create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAUiExtension): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUiExtension>;
						create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAUiExtension): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUiExtension>;
						update(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAUiExtension, param4: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUiExtension>;
						delete(param0: string, param1: string, param2: string, param3: java.lang.Integer): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					});
					public constructor();
					public fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUiExtension>;
					public delete(param0: string, param1: string, param2: string, param3: java.lang.Integer): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public fetchAll(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>;
					public update(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAUiExtension, param4: java.lang.Integer): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUiExtension>;
					public create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAUiExtension): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUiExtension>;
					public create(param0: string, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAUiExtension): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUiExtension>;
					public fetchAll(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAUiExtension>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceUploads {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceUploads>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceUploads interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { create(param0: string, param1: string, param2: okhttp3.RequestBody): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUpload>; fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUpload>; delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>> });
					public constructor();
					public create(param0: string, param1: string, param2: okhttp3.RequestBody): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUpload>;
					public delete(param0: string, param1: string, param2: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public fetchOne(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUpload>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceUsers {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceUsers>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceUsers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fetchMe(): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUser> });
					public constructor();
					public fetchMe(): io.reactivex.Flowable<com.contentful.java.cma.model.CMAUser>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class ServiceWebhooks {
					public static class: java.lang.Class<com.contentful.java.cma.ServiceWebhooks>;
					/**
					 * Constructs a new instance of the com.contentful.java.cma.ServiceWebhooks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						create(param0: string, param1: com.contentful.java.cma.model.CMAWebhook): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhook>;
						create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAWebhook): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhook>;
						delete(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
						fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>;
						fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>;
						fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhook>;
						update(param0: java.lang.Integer, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAWebhook): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhook>;
						calls(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>>;
						calls(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>>;
						callDetails(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhookCallDetail>;
						health(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhookHealth>;
					});
					public constructor();
					public delete(param0: string, param1: string): io.reactivex.Flowable<retrofit2.Response<java.lang.Void>>;
					public create(param0: string, param1: string, param2: com.contentful.java.cma.model.CMAWebhook): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhook>;
					public update(param0: java.lang.Integer, param1: string, param2: string, param3: com.contentful.java.cma.model.CMAWebhook): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhook>;
					public callDetails(param0: string, param1: string, param2: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhookCallDetail>;
					public fetchOne(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhook>;
					public calls(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>>;
					public health(param0: string, param1: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhookHealth>;
					public fetchAll(param0: string): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>;
					public calls(param0: string, param1: string, param2: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhookCall>>;
					public create(param0: string, param1: com.contentful.java.cma.model.CMAWebhook): io.reactivex.Flowable<com.contentful.java.cma.model.CMAWebhook>;
					public fetchAll(param0: string, param1: java.util.Map<string, string>): io.reactivex.Flowable<com.contentful.java.cma.model.CMAArray<com.contentful.java.cma.model.CMAWebhook>>;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export class SynchronousExecutor {
					public static class: java.lang.Class<com.contentful.java.cma.SynchronousExecutor>;
					public execute(runnable: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module build {
					export class GeneratedBuildParameters {
						public static class: java.lang.Class<com.contentful.java.cma.build.GeneratedBuildParameters>;
						public static PROJECT_VERSION: string = '3.4.23';
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module gson {
					export class CMASystemDeserializer extends com.google.gson.JsonDeserializer<com.contentful.java.cma.model.CMASystem> {
						public static class: java.lang.Class<com.contentful.java.cma.gson.CMASystemDeserializer>;
						public constructor();
						public deserialize(statusStr: com.google.gson.JsonElement, scheduledActionStatus: java.lang.reflect.Type, statusElement: com.google.gson.JsonDeserializationContext): com.contentful.java.cma.model.CMASystem;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module gson {
					export class EntrySerializer extends java.lang.Object {
						public static class: java.lang.Class<com.contentful.java.cma.gson.EntrySerializer>;
						public serialize(fieldId: com.contentful.java.cma.model.CMAEntry, jsonField: java.lang.reflect.Type, field: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
						public constructor();
						public deserialize(json: com.google.gson.JsonElement, type: java.lang.reflect.Type, context: com.google.gson.JsonDeserializationContext): com.contentful.java.cma.model.CMAEntry;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module gson {
					export class FieldTypeAdapter extends com.google.gson.JsonSerializer<com.contentful.java.cma.model.CMAField> {
						public static class: java.lang.Class<com.contentful.java.cma.gson.FieldTypeAdapter>;
						public constructor();
						public serialize(field: com.contentful.java.cma.model.CMAField, type: java.lang.reflect.Type, context: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module gson {
					export class LocaleSerializer extends com.google.gson.JsonSerializer<com.contentful.java.cma.model.CMALocale> {
						public static class: java.lang.Class<com.contentful.java.cma.gson.LocaleSerializer>;
						public constructor();
						public serialize(src: com.contentful.java.cma.model.CMALocale, typeOfSrc: java.lang.reflect.Type, context: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module gson {
					export class MetadataSerializer extends com.google.gson.JsonSerializer<com.contentful.java.cma.model.CMAMetadata> {
						public static class: java.lang.Class<com.contentful.java.cma.gson.MetadataSerializer>;
						public constructor();
						public serialize(src: com.contentful.java.cma.model.CMAMetadata, typeOfSrc: java.lang.reflect.Type, ctx: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module gson {
					export class SnapshotDeserializer extends com.google.gson.JsonDeserializer<com.contentful.java.cma.model.CMASnapshot> {
						public static class: java.lang.Class<com.contentful.java.cma.gson.SnapshotDeserializer>;
						public constructor();
						public deserialize(json: com.google.gson.JsonElement, typeOfT: java.lang.reflect.Type, context: com.google.gson.JsonDeserializationContext): com.contentful.java.cma.model.CMASnapshot;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module gson {
					export class WebHookBodyDeserializer extends com.google.gson.JsonDeserializer<com.contentful.java.cma.model.CMAWebhookTransformation> {
						public static class: java.lang.Class<com.contentful.java.cma.gson.WebHookBodyDeserializer>;
						public constructor();
						public deserialize(json: com.google.gson.JsonElement, typeOfT: java.lang.reflect.Type, context: com.google.gson.JsonDeserializationContext): com.contentful.java.cma.model.CMAWebhookTransformation;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class AuthorizationHeaderInterceptor extends com.contentful.java.cma.interceptor.HeaderInterceptor {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.AuthorizationHeaderInterceptor>;
						public static HEADER_NAME: string = 'Authorization';
						public constructor(token: string);
						public constructor(name: string, value: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class ContentTypeInterceptor {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.ContentTypeInterceptor>;
						public static HEADER_NAME: string = 'Content-Type';
						public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(contentType: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class ContentfulUserAgentHeaderInterceptor extends com.contentful.java.cma.interceptor.HeaderInterceptor {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor>;
						public static HEADER_NAME: string = 'X-Contentful-User-Agent';
						public constructor(sections: androidNative.Array<com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section>);
						public constructor(name: string, value: string);
					}
					export module ContentfulUserAgentHeaderInterceptor {
						export class Section {
							public static class: java.lang.Class<com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section>;
							public static sdk(name: string, version: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public static integration(name: string, version: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public getName(): string;
							public getVersion(): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version;
							public static os(os: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem, version: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public static app(name: string, version: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
							public getIdentifier(): string;
							public toString(): string;
							public static platform(name: string, version: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section;
						}
						export module Section {
							export class OperatingSystem {
								public static class: java.lang.Class<com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem>;
								public static iOS: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static tvOS: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static watchOS: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static macOS: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static Windows: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static Linux: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static Android: com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static valueOf(name: string): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
								public static values(): androidNative.Array<com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem>;
								public static parse(osName: string): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.OperatingSystem;
							}
							export class Version {
								public static class: java.lang.Class<com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version>;
								public getMajor(): number;
								public toString(): string;
								public constructor(major: number, minor: number, patch: number, stability: string);
								public static parse(major: string): com.contentful.java.cma.interceptor.ContentfulUserAgentHeaderInterceptor.Section.Version;
								public getMinor(): number;
								public getStability(): string;
								public constructor(major: number, minor: number, patch: number);
								public getPatch(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class ErrorInterceptor {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.ErrorInterceptor>;
						public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(logSensitiveData: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class HeaderInterceptor {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.HeaderInterceptor>;
						public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
						public getValue(): string;
						public getName(): string;
						public constructor(name: string, value: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class LogInterceptor {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.LogInterceptor>;
						public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(logger: com.contentful.java.cma.Logger);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class RateLimitInterceptor {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.RateLimitInterceptor>;
						public intercept(chain: okhttp3.Interceptor.Chain): okhttp3.Response;
						public constructor(listener: com.contentful.java.cma.interceptor.RateLimitsListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class RateLimitsListener {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.RateLimitsListener>;
						/**
						 * Constructs a new instance of the com.contentful.java.cma.interceptor.RateLimitsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onRateLimitHeaderReceived(param0: com.contentful.java.cma.model.RateLimits): void });
						public constructor();
						public onRateLimitHeaderReceived(param0: com.contentful.java.cma.model.RateLimits): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module interceptor {
					export class UserAgentHeaderInterceptor extends com.contentful.java.cma.interceptor.HeaderInterceptor {
						public static class: java.lang.Class<com.contentful.java.cma.interceptor.UserAgentHeaderInterceptor>;
						public static HEADER_NAME: string = 'User-Agent';
						public constructor(name: string, value: string);
						public constructor(userAgent: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAApiKey extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAApiKey>;
						public constructor();
						public setAccessToken(accessToken: string): com.contentful.java.cma.model.CMAApiKey;
						public getPreviewApiKey(): com.contentful.java.cma.model.CMALink;
						public setPreviewApiKey(previewApiKey: com.contentful.java.cma.model.CMALink): com.contentful.java.cma.model.CMAApiKey;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getName(): string;
						public getAccessToken(): string;
						public toString(): string;
						public setName(name: string): com.contentful.java.cma.model.CMAApiKey;
						public setDescription(description: string): com.contentful.java.cma.model.CMAApiKey;
						public addEnvironment(environment: string): com.contentful.java.cma.model.CMAApiKey;
						public getDescription(): string;
						public getEnvironments(): java.util.List<com.contentful.java.cma.model.CMALink>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAArray<T> extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAArray<any>>;
						public constructor();
						public getSkip(): number;
						public getPages(): com.contentful.java.cma.model.CMAPages;
						public getTotal(): number;
						public getIncludes(): java.util.Map<string, any>;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getItems(): java.util.List<any>;
						public setPages(pages: com.contentful.java.cma.model.CMAPages): void;
						public getLimit(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAAsset extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAAsset>;
						public metadata: com.contentful.java.cma.model.CMAMetadata;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public getMetadata(): com.contentful.java.cma.model.CMAMetadata;
						public setId(id: string): com.contentful.java.cma.model.CMAAsset;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAAsset;
						public getVersion(): java.lang.Integer;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAResource;
						public getFields(): com.contentful.java.cma.model.CMAAsset.Fields;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAAsset;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAAsset;
						public toString(): string;
						public setFields(fields: com.contentful.java.cma.model.CMAAsset.Fields): com.contentful.java.cma.model.CMAAsset;
						public setMetadata(metadata: com.contentful.java.cma.model.CMAMetadata): com.contentful.java.cma.model.CMAAsset;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAAsset;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
					}
					export module CMAAsset {
						export class Fields {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAAsset.Fields>;
							public constructor();
							public setDescription(locale: string, description: string): com.contentful.java.cma.model.CMAAsset.Fields;
							public getFile(locale: string): com.contentful.java.cma.model.CMAAssetFile;
							public getTitle(locale: string): string;
							public getDescription(locale: string): string;
							public localize(locale: string): com.contentful.java.cma.model.CMAAsset.Fields.Localized;
							public toString(): string;
							public setTitle(locale: string, title: string): com.contentful.java.cma.model.CMAAsset.Fields;
							public setFile(locale: string, file: com.contentful.java.cma.model.CMAAssetFile): com.contentful.java.cma.model.CMAAsset.Fields;
							public toString(locale: string): string;
						}
						export module Fields {
							export class Localized {
								public static class: java.lang.Class<com.contentful.java.cma.model.CMAAsset.Fields.Localized>;
								public toString(): string;
								public getTitle(): string;
								public setTitle(value: string): com.contentful.java.cma.model.CMAAsset.Fields.Localized;
								public getDescription(): string;
								public setDescription(value: string): com.contentful.java.cma.model.CMAAsset.Fields.Localized;
								public getFile(): com.contentful.java.cma.model.CMAAssetFile;
								public setFile(value: com.contentful.java.cma.model.CMAAssetFile): com.contentful.java.cma.model.CMAAsset.Fields.Localized;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAAssetFile {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAAssetFile>;
						public setUploadUrl(upload: string): com.contentful.java.cma.model.CMAAssetFile;
						public constructor();
						public getUploadFrom(): com.contentful.java.cma.model.CMALink;
						public getDetails(): com.contentful.java.cma.model.CMAAssetFile.Details;
						public setFileName(fileName: string): com.contentful.java.cma.model.CMAAssetFile;
						public getContentType(): string;
						public setContentType(contentType: string): com.contentful.java.cma.model.CMAAssetFile;
						public getFileName(): string;
						public getUrl(): string;
						public setUploadFrom(uploadFrom: com.contentful.java.cma.model.CMALink): com.contentful.java.cma.model.CMAAssetFile;
						public toString(): string;
						public getUploadUrl(): string;
					}
					export module CMAAssetFile {
						export class Details {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAAssetFile.Details>;
							public constructor();
							public getSize(): java.lang.Long;
							public toString(): string;
							public getImageMeta(): com.contentful.java.cma.model.CMAAssetFile.Details.ImageMeta;
						}
						export module Details {
							export class ImageMeta {
								public static class: java.lang.Class<com.contentful.java.cma.model.CMAAssetFile.Details.ImageMeta>;
								public getWidth(): java.lang.Long;
								public toString(): string;
								public constructor();
								public getHeight(): java.lang.Long;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMABulkAction extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMABulkAction>;
						public getAction(): string;
						public constructor();
						public getPayload(): com.contentful.java.cma.model.CMAPayload;
						public setError(error: com.contentful.java.cma.model.CMAError): void;
						public setAction(action: string): com.contentful.java.cma.model.CMABulkAction;
						public getError(): com.contentful.java.cma.model.CMAError;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setPayload(payload: com.contentful.java.cma.model.CMAPayload): com.contentful.java.cma.model.CMABulkAction;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMABulkAction;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMABulkStatus {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMABulkStatus>;
						public static CREATED: com.contentful.java.cma.model.CMABulkStatus;
						public static IN_PROGRESS: com.contentful.java.cma.model.CMABulkStatus;
						public static SUCCEEDED: com.contentful.java.cma.model.CMABulkStatus;
						public static FAILED: com.contentful.java.cma.model.CMABulkStatus;
						public static from(status: string): com.contentful.java.cma.model.CMABulkStatus;
						public getStatus(): string;
						public static values(): androidNative.Array<com.contentful.java.cma.model.CMABulkStatus>;
						public static valueOf(param0: string): com.contentful.java.cma.model.CMABulkStatus;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAConcept extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAConcept>;
						public setChangeNote(changeNote: java.util.LinkedHashMap<string, string>): void;
						public getBroader(): java.util.List<com.contentful.java.cma.model.CMALink>;
						public getRelated(): java.util.List<com.contentful.java.cma.model.CMALink>;
						public getNote(): java.util.LinkedHashMap<string, string>;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setUri(uri: string): void;
						public getChangeNote(): java.util.LinkedHashMap<string, string>;
						public getEditorialNote(): java.util.LinkedHashMap<string, string>;
						public getUri(): string;
						public getHiddenLabels(): java.util.LinkedHashMap<string, java.util.List<string>>;
						public getScopeNote(): java.util.LinkedHashMap<string, string>;
						public setAltLabels(altLabels: java.util.LinkedHashMap<string, java.util.List<string>>): void;
						public setEditorialNote(editorialNote: java.util.LinkedHashMap<string, string>): void;
						public setRelated(related: java.util.List<com.contentful.java.cma.model.CMALink>): void;
						public setHistoryNote(historyNote: java.util.LinkedHashMap<string, string>): void;
						public setNotations(notations: java.util.List<string>): void;
						public constructor();
						public setDefinition(definition: java.util.LinkedHashMap<string, string>): void;
						public getExample(): java.util.LinkedHashMap<string, string>;
						public getPrefLabel(): java.util.LinkedHashMap<string, string>;
						public getNotations(): java.util.List<string>;
						public setScopeNote(scopeNote: java.util.LinkedHashMap<string, string>): void;
						public setPrefLabel(prefLabel: java.util.LinkedHashMap<string, string>): void;
						public setHiddenLabels(hiddenLabels: java.util.LinkedHashMap<string, java.util.List<string>>): void;
						public getHistoryNote(): java.util.LinkedHashMap<string, string>;
						public setExample(example: java.util.LinkedHashMap<string, string>): void;
						public setBroader(broader: java.util.List<com.contentful.java.cma.model.CMALink>): void;
						public setNote(note: java.util.LinkedHashMap<string, string>): void;
						public getDefinition(): java.util.LinkedHashMap<string, string>;
						public getAltLabels(): java.util.LinkedHashMap<string, java.util.List<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAConceptScheme extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAConceptScheme>;
						public constructor();
						public setDefinition(definition: java.util.LinkedHashMap<string, string>): void;
						public setConcepts(concepts: java.util.List<com.contentful.java.cma.model.CMALink>): void;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getPrefLabel(): java.util.LinkedHashMap<string, string>;
						public setUri(uri: string): void;
						public setPrefLabel(prefLabel: java.util.LinkedHashMap<string, string>): void;
						public getTopConcepts(): java.util.List<com.contentful.java.cma.model.CMALink>;
						public getConcepts(): java.util.List<com.contentful.java.cma.model.CMALink>;
						public getUri(): string;
						public getDefinition(): java.util.LinkedHashMap<string, string>;
						public getTotalConcepts(): number;
						public setTopConcepts(topConcepts: java.util.List<com.contentful.java.cma.model.CMALink>): void;
						public setTotalConcepts(totalConcepts: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAConstraint {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAConstraint>;
						public getEquals(): com.contentful.java.cma.model.CMAConstraint.Equals;
						public constructor();
						public getAnd(): androidNative.Array<com.contentful.java.cma.model.CMAConstraint>;
						public getOr(): androidNative.Array<com.contentful.java.cma.model.CMAConstraint>;
						public setFieldKeyPaths(fieldKeyPaths: androidNative.Array<com.contentful.java.cma.model.CMAConstraint.FieldKeyPath>): com.contentful.java.cma.model.CMAConstraint;
						public getNot(): androidNative.Array<com.contentful.java.cma.model.CMAConstraint>;
						public setNot(not: androidNative.Array<com.contentful.java.cma.model.CMAConstraint>): com.contentful.java.cma.model.CMAConstraint;
						public setAnd(and: androidNative.Array<com.contentful.java.cma.model.CMAConstraint>): com.contentful.java.cma.model.CMAConstraint;
						public setEquals(equals: com.contentful.java.cma.model.CMAConstraint.Equals): com.contentful.java.cma.model.CMAConstraint;
						public getFieldKeyPaths(): androidNative.Array<com.contentful.java.cma.model.CMAConstraint.FieldKeyPath>;
						public setOr(or: androidNative.Array<com.contentful.java.cma.model.CMAConstraint>): com.contentful.java.cma.model.CMAConstraint;
						public toString(): string;
					}
					export module CMAConstraint {
						export class Equals extends java.util.ArrayList<any> {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAConstraint.Equals>;
							public constructor();
							public setPath(fieldKeyPath: com.contentful.java.cma.model.CMAConstraint.FieldKeyPath): com.contentful.java.cma.model.CMAConstraint.Equals;
							public getValue(): string;
							public toString(): string;
							public getPath(): com.contentful.java.cma.model.CMAConstraint.FieldKeyPath;
							public setValue(value: string): com.contentful.java.cma.model.CMAConstraint.Equals;
						}
						export class FieldKeyPath {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAConstraint.FieldKeyPath>;
							public constructor();
							public getDoc(): string;
							public toString(): string;
							public setDoc(doc: string): com.contentful.java.cma.model.CMAConstraint.FieldKeyPath;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAContentType extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAContentType>;
						public setId(id: string): com.contentful.java.cma.model.CMAContentType;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAContentType;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getDisplayField(): string;
						public getName(): string;
						public setFields(fields: java.util.List<com.contentful.java.cma.model.CMAField>): com.contentful.java.cma.model.CMAContentType;
						public addField(field: com.contentful.java.cma.model.CMAField): com.contentful.java.cma.model.CMAContentType;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public getMetadata(): com.contentful.java.cma.model.CMAMetadata;
						public getVersion(): java.lang.Integer;
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAResource;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public setName(name: string): com.contentful.java.cma.model.CMAContentType;
						public toString(): string;
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAContentType;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAContentType;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAContentType;
						public getFields(): java.util.List<com.contentful.java.cma.model.CMAField>;
						public setDisplayField(displayField: string): com.contentful.java.cma.model.CMAContentType;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setMetadata(metadata: com.contentful.java.cma.model.CMAMetadata): void;
						public getDescription(): string;
						public setDescription(description: string): com.contentful.java.cma.model.CMAContentType;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAEditorInterface extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAEditorInterface>;
						public addControl(control: com.contentful.java.cma.model.CMAEditorInterface.Control): com.contentful.java.cma.model.CMAEditorInterface;
						public constructor();
						public getControls(): java.util.List<com.contentful.java.cma.model.CMAEditorInterface.Control>;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public toString(): string;
					}
					export module CMAEditorInterface {
						export class Control {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAEditorInterface.Control>;
							public constructor();
							public getFieldId(): string;
							public setFieldId(fieldId: string): com.contentful.java.cma.model.CMAEditorInterface.Control;
							public addHelpText(helpText: string): com.contentful.java.cma.model.CMAEditorInterface.Control;
							public getSettings(): java.util.Map<string, string>;
							public getBuildInWidgetId(): com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
							public getHelpText(): string;
							public setWidgetId(widgetId: string): com.contentful.java.cma.model.CMAEditorInterface.Control;
							public toString(): string;
							public addSetting(key: string, value: string): com.contentful.java.cma.model.CMAEditorInterface.Control;
							public setBuildInWidgetId(buildInWidgetId: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId): com.contentful.java.cma.model.CMAEditorInterface.Control;
							public getWidgetId(): string;
						}
						export module Control {
							export class BuildInWidgetId {
								public static class: java.lang.Class<com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId>;
								public static AssetGalleryEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static AssetLinkEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static AssetLinksEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static Boolean: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static Checkbox: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static DatePicker: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static Dropdown: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static EntryCardEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static EntryCardsEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static EntryLinkEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static EntryLinksEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static KalturaEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static KalturaMultiVideoEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static ListInput: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static LocationEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static Markdown: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static MultipleLine: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static NumberEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static ObjectEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static OoyalaEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static OoyalaMultiAssetEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static Radio: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static Rating: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static SingleLine: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static SlugEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static TagEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static UrlEditor: com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static valueOf(name: string): com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId;
								public static values(): androidNative.Array<com.contentful.java.cma.model.CMAEditorInterface.Control.BuildInWidgetId>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAEntities {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAEntities>;
						public constructor();
						public getItems(): java.util.List<com.contentful.java.cma.model.CMAResource>;
						public setItems(items: java.util.List<com.contentful.java.cma.model.CMAResource>): com.contentful.java.cma.model.CMAEntities;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAEntry extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAEntry>;
						public metadata: com.contentful.java.cma.model.CMAMetadata;
						public setFields(fields: java.util.LinkedHashMap<string, java.util.LinkedHashMap<string, any>>): com.contentful.java.cma.model.CMAEntry;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public getMetadata(): com.contentful.java.cma.model.CMAMetadata;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAEntry;
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAEntry;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAResource;
						public getField(key: string, locale: string): any;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public toString(): string;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAEntry;
						public getFields(): java.util.LinkedHashMap<string, java.util.LinkedHashMap<string, any>>;
						public localize(locale: string): com.contentful.java.cma.model.CMAEntry.Localized;
						public setMetadata(metadata: com.contentful.java.cma.model.CMAMetadata): com.contentful.java.cma.model.CMAEntry;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAEntry;
						public setField(key: string, locale: string, value: any): com.contentful.java.cma.model.CMAEntry;
						public setId(id: string): com.contentful.java.cma.model.CMAEntry;
					}
					export module CMAEntry {
						export class Localized {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAEntry.Localized>;
							public setField(key: string, value: any): com.contentful.java.cma.model.CMAEntry.Localized;
							public toString(): string;
							public getField(key: string): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAEnvironment extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAEnvironment>;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAResource;
						public getName(): string;
						public toString(): string;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAEnvironment;
						public getEnvironmentId(): string;
						public setName(name: string): com.contentful.java.cma.model.CMAEnvironment;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setId(id: string): com.contentful.java.cma.model.CMAEnvironment;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public getStatus(): com.contentful.java.cma.model.CMAEnvironmentStatus;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAEnvironment;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAEnvironmentStatus {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAEnvironmentStatus>;
						public static Ready: com.contentful.java.cma.model.CMAEnvironmentStatus;
						public static Queued: com.contentful.java.cma.model.CMAEnvironmentStatus;
						public static Creating: com.contentful.java.cma.model.CMAEnvironmentStatus;
						public static Failed: com.contentful.java.cma.model.CMAEnvironmentStatus;
						public static values(): androidNative.Array<com.contentful.java.cma.model.CMAEnvironmentStatus>;
						public static valueOf(name: string): com.contentful.java.cma.model.CMAEnvironmentStatus;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAError extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAError>;
						public constructor();
						public constructor(type: com.contentful.java.cma.model.CMAType);
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAField {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAField>;
						public defaultValue: java.util.Map<string, any>;
						public isRequired(): boolean;
						public setOmitted(omitted: boolean): com.contentful.java.cma.model.CMAField;
						public setArrayItems(arrayItems: java.util.Map<string, any>): com.contentful.java.cma.model.CMAField;
						public getName(): string;
						public setRequired(required: boolean): com.contentful.java.cma.model.CMAField;
						public setLocalized(localized: boolean): com.contentful.java.cma.model.CMAField;
						public setName(name: string): com.contentful.java.cma.model.CMAField;
						public setType(type: com.contentful.java.cma.Constants.CMAFieldType): com.contentful.java.cma.model.CMAField;
						public setAllowedResources(allowedResources: java.util.List<java.util.Map<string, any>>): com.contentful.java.cma.model.CMAField;
						public setDisabled(disabled: boolean): com.contentful.java.cma.model.CMAField;
						public isLocalized(): boolean;
						public getId(): string;
						public getAllowedResources(): java.util.List<java.util.Map<string, any>>;
						public getLinkType(): string;
						public setValidations(validations: java.util.List<java.util.Map<string, any>>): com.contentful.java.cma.model.CMAField;
						public setId(id: string): com.contentful.java.cma.model.CMAField;
						public constructor();
						public getDefaultValue(): java.util.Map<string, any>;
						public setLinkType(linkType: string): com.contentful.java.cma.model.CMAField;
						public isDisabled(): java.lang.Boolean;
						public getType(): com.contentful.java.cma.Constants.CMAFieldType;
						public toString(): string;
						public getArrayItems(): java.util.Map<string, any>;
						public isOmitted(): java.lang.Boolean;
						public setDefaultValue(defaultValue: java.util.Map<string, any>): com.contentful.java.cma.model.CMAField;
						public getValidations(): java.util.List<java.util.Map<string, any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAHttpException {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAHttpException>;
						public getErrorBody(): com.contentful.java.cma.model.CMAHttpException.ErrorBody;
						public shouldLogSensitiveData(): boolean;
						public rateLimitReset(): number;
						public responseCode(): number;
						public constructor(e: okhttp3.Request, this_: okhttp3.Response, request: boolean);
						public rateLimitSecondLimit(): number;
						public rateLimitSecondRemaining(): number;
						public toString(): string;
						public rateLimitHourLimit(): number;
						public rateLimitHourRemaining(): number;
						public constructor(e: okhttp3.Request, this_: okhttp3.Response);
						public responseMessage(): string;
					}
					export module CMAHttpException {
						export class ErrorBody {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAHttpException.ErrorBody>;
							public constructor();
							public getRequestId(): string;
							public getSys(): com.contentful.java.cma.model.CMAHttpException.ErrorBody.Sys;
							public toString(): string;
							public getMessage(): string;
							public getDetails(): com.contentful.java.cma.model.CMAHttpException.ErrorBody.Details;
						}
						export module ErrorBody {
							export class Details {
								public static class: java.lang.Class<com.contentful.java.cma.model.CMAHttpException.ErrorBody.Details>;
								public toString(): string;
								public getErrors(): java.util.List<com.contentful.java.cma.model.CMAHttpException.ErrorBody.Details.Error>;
								public getKeys(): java.util.List<string>;
								public constructor();
								public getSpace(): string;
								public getType(): string;
							}
							export module Details {
								export class Error {
									public static class: java.lang.Class<com.contentful.java.cma.model.CMAHttpException.ErrorBody.Details.Error>;
									public constructor();
									public getType(): string;
									public getExpected(): java.util.List<string>;
									public getPath(): any;
									public getFilter(): string;
									public getDetails(): string;
									public toString(): string;
									public getName(): string;
									public getValue(): any;
								}
							}
							export class Sys {
								public static class: java.lang.Class<com.contentful.java.cma.model.CMAHttpException.ErrorBody.Sys>;
								public toString(): string;
								public constructor();
								public getId(): string;
								public getType(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMALink extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMALink>;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public constructor(resource: com.contentful.java.cma.model.CMAResource);
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMALink;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public constructor(linkedType: com.contentful.java.cma.model.CMAType);
						public setId(id: string): com.contentful.java.cma.model.CMALink;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMALink;
						public toString(): string;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMALink;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMALocale extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMALocale>;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setName(name: string): com.contentful.java.cma.model.CMALocale;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMALocale;
						public setCode(code: string): com.contentful.java.cma.model.CMALocale;
						public getName(): string;
						public setContentDeliveryApi(contentDeliveryApi: boolean): com.contentful.java.cma.model.CMALocale;
						public isContentDeliveryApi(): boolean;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMALocale;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMALocale;
						public getCode(): string;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public getFallbackCode(): string;
						public constructor();
						public setId(id: string): com.contentful.java.cma.model.CMALocale;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public setContentManagementApi(contentManagementApi: boolean): com.contentful.java.cma.model.CMALocale;
						public setOptional(optional: boolean): com.contentful.java.cma.model.CMALocale;
						public toString(): string;
						public isContentManagementApi(): boolean;
						public setFallbackCode(fallbackCode: string): com.contentful.java.cma.model.CMALocale;
						public isDefault(): boolean;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						/** @deprecated */
						public setDefault(isDefault: boolean): com.contentful.java.cma.model.CMALocale;
						public isOptional(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAMetadata {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAMetadata>;
						public constructor();
						public setConcepts(concepts: java.util.List<com.contentful.java.cma.model.CMALink>): void;
						public getTags(): java.util.List<com.contentful.java.cma.model.CMATag>;
						public setTags(tags: java.util.List<com.contentful.java.cma.model.CMATag>): void;
						public getConcepts(): java.util.List<com.contentful.java.cma.model.CMALink>;
						public getTaxonomy(): java.util.List<com.contentful.java.cma.model.CMALink>;
						public setTaxonomy(taxonomy: java.util.List<com.contentful.java.cma.model.CMALink>): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMANotWithEnvironmentsException {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMANotWithEnvironmentsException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAOrganization extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAOrganization>;
						public constructor();
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setName(name: string): com.contentful.java.cma.model.CMAOrganization;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAPages {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAPages>;
						public constructor();
						public setPrev(prev: string): void;
						public getNext(): string;
						public getPrev(): string;
						public setNext(next: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAPayload {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAPayload>;
						public constructor();
						public setEntities(entities: com.contentful.java.cma.model.CMAEntities): com.contentful.java.cma.model.CMAPayload;
						public getEntities(): com.contentful.java.cma.model.CMAEntities;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAPermissions {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAPermissions>;
						public constructor();
						public getContentDelivery(): any;
						public setContentModel(contentModel: any): com.contentful.java.cma.model.CMAPermissions;
						public setSettings(settings: any): com.contentful.java.cma.model.CMAPermissions;
						public getSettings(): any;
						public getContentModel(): any;
						public setContentDelivery(contentDelivery: any): com.contentful.java.cma.model.CMAPermissions;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAPersonalAccessToken extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAPersonalAccessToken>;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAPersonalAccessToken;
						public getScopes(): java.util.List<com.contentful.java.cma.model.CMAPersonalAccessToken.Scope>;
						public setName(name: string): com.contentful.java.cma.model.CMAPersonalAccessToken;
						public constructor();
						public addScope(scope: com.contentful.java.cma.model.CMAPersonalAccessToken.Scope): com.contentful.java.cma.model.CMAPersonalAccessToken;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public getName(): string;
						public getRevokedAt(): string;
						public getToken(): string;
						public toString(): string;
					}
					export module CMAPersonalAccessToken {
						export class Scope {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAPersonalAccessToken.Scope>;
							public static Read: com.contentful.java.cma.model.CMAPersonalAccessToken.Scope;
							public static Manage: com.contentful.java.cma.model.CMAPersonalAccessToken.Scope;
							public static valueOf(param0: string): com.contentful.java.cma.model.CMAPersonalAccessToken.Scope;
							public static values(): androidNative.Array<com.contentful.java.cma.model.CMAPersonalAccessToken.Scope>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAPolicy {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAPolicy>;
						public static ALLOW: string = 'allow';
						public static DENY: string = 'deny';
						public setEffect(effect: string): com.contentful.java.cma.model.CMAPolicy;
						public publish(): com.contentful.java.cma.model.CMAPolicy;
						public constructor();
						public unpublish(): com.contentful.java.cma.model.CMAPolicy;
						public getEffect(): string;
						public deny(): com.contentful.java.cma.model.CMAPolicy;
						public unarchive(): com.contentful.java.cma.model.CMAPolicy;
						public update(): com.contentful.java.cma.model.CMAPolicy;
						public getActions(): any;
						public toString(): string;
						public create(): com.contentful.java.cma.model.CMAPolicy;
						public getConstraint(): com.contentful.java.cma.model.CMAConstraint;
						public read(): com.contentful.java.cma.model.CMAPolicy;
						public archive(): com.contentful.java.cma.model.CMAPolicy;
						public setActions(actions: java.util.List<string>): com.contentful.java.cma.model.CMAPolicy;
						public allow(): com.contentful.java.cma.model.CMAPolicy;
						public setConstraint(constraint: com.contentful.java.cma.model.CMAConstraint): com.contentful.java.cma.model.CMAPolicy;
						public delete(): com.contentful.java.cma.model.CMAPolicy;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAPreviewApiKey extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAPreviewApiKey>;
						public constructor();
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getAccessToken(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAResource>;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public getSpaceId(): string;
						public getVersion(): java.lang.Integer;
						public getSystem(): com.contentful.java.cma.model.CMASystem;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getVisibility(): com.contentful.java.cma.model.CMAVisibility;
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAResource;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public toString(): string;
						public getEnvironmentId(): string;
						public setVisibility(visibility: com.contentful.java.cma.model.CMAVisibility): com.contentful.java.cma.model.CMAResource;
						public getId(): string;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public isArchived(): java.lang.Boolean;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public isPublished(): java.lang.Boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMARole extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMARole>;
						public setPermissions(permissions: com.contentful.java.cma.model.CMAPermissions): com.contentful.java.cma.model.CMARole;
						public setSpaceId(id: string): com.contentful.java.cma.model.CMARole;
						public setId(id: string): com.contentful.java.cma.model.CMARole;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMARole;
						public setName(name: string): com.contentful.java.cma.model.CMARole;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getName(): string;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public toString(): string;
						public getPolicies(): java.util.List<com.contentful.java.cma.model.CMAPolicy>;
						public setDescription(description: string): com.contentful.java.cma.model.CMARole;
						public getPermissions(): com.contentful.java.cma.model.CMAPermissions;
						public setPolicies(policies: java.util.List<com.contentful.java.cma.model.CMAPolicy>): void;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public getDescription(): string;
						public addPolicy(policy: com.contentful.java.cma.model.CMAPolicy): com.contentful.java.cma.model.CMARole;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAScheduledAction extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAScheduledAction>;
						public getAction(): string;
						public getScheduledFor(): com.contentful.java.cma.model.CMAScheduledFor;
						public getEnvironment(): com.contentful.java.cma.model.CMALink;
						public setEntity(entity: com.contentful.java.cma.model.CMALink): void;
						public getEntity(): com.contentful.java.cma.model.CMALink;
						public setEnvironment(environment: com.contentful.java.cma.model.CMALink): void;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAScheduledAction;
						public setScheduledFor(scheduledFor: com.contentful.java.cma.model.CMAScheduledFor): void;
						public setAction(action: string): com.contentful.java.cma.model.CMAScheduledAction;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAScheduledActionStatus {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAScheduledActionStatus>;
						public static CANCELED: com.contentful.java.cma.model.CMAScheduledActionStatus;
						public static FAILED: com.contentful.java.cma.model.CMAScheduledActionStatus;
						public static SCHEDULED: com.contentful.java.cma.model.CMAScheduledActionStatus;
						public static SUCCEEDED: com.contentful.java.cma.model.CMAScheduledActionStatus;
						public static from(status: string): com.contentful.java.cma.model.CMAScheduledActionStatus;
						public static values(): androidNative.Array<com.contentful.java.cma.model.CMAScheduledActionStatus>;
						public static valueOf(param0: string): com.contentful.java.cma.model.CMAScheduledActionStatus;
						public getStatus(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAScheduledFor {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAScheduledFor>;
						public getTimezone(): string;
						public constructor();
						public getDatetime(): string;
						public setDatetime(datetime: string): void;
						public setTimezone(timezone: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMASnapshot extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMASnapshot>;
						public setSnapshot(snapshot: com.contentful.java.cma.model.CMAResource): com.contentful.java.cma.model.CMASnapshot;
						public constructor();
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getSnapshot(): com.contentful.java.cma.model.CMAResource;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMASpace extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMASpace>;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public getSpaceId(): string;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMASpace;
						public setDefaultLocale(defaultLocale: string): com.contentful.java.cma.model.CMASpace;
						public getName(): string;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public toString(): string;
						public setSpaceId(id: string): com.contentful.java.cma.model.CMASpace;
						public getDefaultLocale(): string;
						public setName(name: string): com.contentful.java.cma.model.CMASpace;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMASpace;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setId(id: string): com.contentful.java.cma.model.CMASpace;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMASpaceMembership extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMASpaceMembership>;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public addRole(role: com.contentful.java.cma.model.CMALink): com.contentful.java.cma.model.CMASpaceMembership;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMASpaceMembership;
						public getEmail(): string;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setEmail(email: string): com.contentful.java.cma.model.CMASpaceMembership;
						public setId(id: string): com.contentful.java.cma.model.CMASpaceMembership;
						public setSpaceId(id: string): com.contentful.java.cma.model.CMASpaceMembership;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public toString(): string;
						public setIsAdmin(admin: boolean): com.contentful.java.cma.model.CMASpaceMembership;
						public getUser(): com.contentful.java.cma.model.CMALink;
						public setUser(user: com.contentful.java.cma.model.CMALink): com.contentful.java.cma.model.CMASpaceMembership;
						public setRoles(roles: androidNative.Array<com.contentful.java.cma.model.CMALink>): com.contentful.java.cma.model.CMASpaceMembership;
						public isAdmin(): boolean;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setAdmin(admin: boolean): com.contentful.java.cma.model.CMASpaceMembership;
						public getRoles(): java.util.List<com.contentful.java.cma.model.CMALink>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMASystem {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMASystem>;
						public setScheduledActionStatus(scheduledActionStatus: com.contentful.java.cma.model.CMAScheduledActionStatus): void;
						public setPublishedCounter(publishedCounter: java.lang.Integer): void;
						public getFirstPublishedAt(): string;
						public getOrganization(): com.contentful.java.cma.model.CMALink;
						public setBulkActionStatus(bulkActionStatus: com.contentful.java.cma.model.CMABulkStatus): void;
						public setUpdatedBy(updatedBy: com.contentful.java.cma.model.CMALink): void;
						public setType(type: com.contentful.java.cma.model.CMAType): com.contentful.java.cma.model.CMASystem;
						public getPublishedVersion(): java.lang.Integer;
						public getPublishedBy(): com.contentful.java.cma.model.CMALink;
						public constructor();
						public getType(): com.contentful.java.cma.model.CMAType;
						public setOrganization(organization: com.contentful.java.cma.model.CMALink): void;
						public getVersion(): java.lang.Integer;
						public setCreatedBy(createdBy: com.contentful.java.cma.model.CMALink): void;
						public toString(): string;
						public getPublishedCounter(): java.lang.Integer;
						public getBulkActionStatus(): com.contentful.java.cma.model.CMABulkStatus;
						public setEnvironmentalStatus(status: com.contentful.java.cma.model.CMALink): com.contentful.java.cma.model.CMASystem;
						public setPublishedVersion(publishedVersion: java.lang.Integer): void;
						public setLinkType(linkType: com.contentful.java.cma.model.CMAType): com.contentful.java.cma.model.CMASystem;
						public getStatus(): com.contentful.java.cma.model.CMALink;
						public getUrn(): string;
						public setUpdatedAt(updatedAt: string): void;
						public getPublishedAt(): string;
						public setCreatedAt(createdAt: string): void;
						public getContentType(): com.contentful.java.cma.model.CMALink;
						public setPublishedBy(publishedBy: com.contentful.java.cma.model.CMALink): void;
						public getCreatedBy(): com.contentful.java.cma.model.CMALink;
						public setEnvironment(environment: com.contentful.java.cma.model.CMALink): void;
						public getLinkType(): com.contentful.java.cma.model.CMAType;
						public getId(): string;
						public getUpdatedBy(): com.contentful.java.cma.model.CMALink;
						public setId(id: string): com.contentful.java.cma.model.CMASystem;
						public setVisibility(visibility: com.contentful.java.cma.model.CMAVisibility): void;
						public setSpace(space: com.contentful.java.cma.model.CMALink): com.contentful.java.cma.model.CMASystem;
						public setArchivedVersion(archivedVersion: java.lang.Integer): void;
						public getSpace(): com.contentful.java.cma.model.CMALink;
						public getArchivedVersion(): java.lang.Integer;
						public setPublishedAt(publishedAt: string): void;
						public getEnvironment(): com.contentful.java.cma.model.CMALink;
						public getScheduledActionStatus(): com.contentful.java.cma.model.CMAScheduledActionStatus;
						public setContentType(contentType: com.contentful.java.cma.model.CMALink): com.contentful.java.cma.model.CMASystem;
						public getEnvironmentalStatus(): com.contentful.java.cma.model.CMALink;
						public getCreatedAt(): string;
						public getVisibility(): com.contentful.java.cma.model.CMAVisibility;
						public setUrn(urn: string): void;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMASystem;
						public setFirstPublishedAt(firstPublishedAt: string): void;
						public setStatus(status: com.contentful.java.cma.model.CMALink): void;
						public getUpdatedAt(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMATag extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMATag>;
						public constructor();
						public setName(name: string): com.contentful.java.cma.model.CMATag;
						public setId(id: string): com.contentful.java.cma.model.CMATag;
						public setVisibility(visibility: com.contentful.java.cma.model.CMAVisibility): com.contentful.java.cma.model.CMAResource;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public getId(): string;
						public getVisibility(): com.contentful.java.cma.model.CMAVisibility;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMATag;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMATotalConcepts {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMATotalConcepts>;
						public constructor();
						public getTotal(): number;
						public setTotal(total: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAType {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAType>;
						public static ApiKey: com.contentful.java.cma.model.CMAType;
						public static Array: com.contentful.java.cma.model.CMAType;
						public static Asset: com.contentful.java.cma.model.CMAType;
						public static BulkAction: com.contentful.java.cma.model.CMAType;
						public static ContentType: com.contentful.java.cma.model.CMAType;
						public static EditorInterface: com.contentful.java.cma.model.CMAType;
						public static Entry: com.contentful.java.cma.model.CMAType;
						public static Error: com.contentful.java.cma.model.CMAType;
						public static Environment: com.contentful.java.cma.model.CMAType;
						public static Link: com.contentful.java.cma.model.CMAType;
						public static Locale: com.contentful.java.cma.model.CMAType;
						public static Organization: com.contentful.java.cma.model.CMAType;
						public static OrganizationPeriodicUsage: com.contentful.java.cma.model.CMAType;
						public static SpacePeriodicUsage: com.contentful.java.cma.model.CMAType;
						public static PersonalAccessToken: com.contentful.java.cma.model.CMAType;
						public static PreviewApiKey: com.contentful.java.cma.model.CMAType;
						public static Role: com.contentful.java.cma.model.CMAType;
						public static ScheduledAction: com.contentful.java.cma.model.CMAType;
						public static Snapshot: com.contentful.java.cma.model.CMAType;
						public static Space: com.contentful.java.cma.model.CMAType;
						public static SpaceMembership: com.contentful.java.cma.model.CMAType;
						public static Tag: com.contentful.java.cma.model.CMAType;
						public static TaxonomyConcept: com.contentful.java.cma.model.CMAType;
						public static TaxonomyConceptScheme: com.contentful.java.cma.model.CMAType;
						public static Upload: com.contentful.java.cma.model.CMAType;
						public static User: com.contentful.java.cma.model.CMAType;
						public static UiExtension: com.contentful.java.cma.model.CMAType;
						public static Webhook: com.contentful.java.cma.model.CMAType;
						public static WebhookCallOverview: com.contentful.java.cma.model.CMAType;
						public static WebhookDefinition: com.contentful.java.cma.model.CMAType;
						public static valueOf(param0: string): com.contentful.java.cma.model.CMAType;
						public static values(): androidNative.Array<com.contentful.java.cma.model.CMAType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAUiExtension extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAUiExtension>;
						public constructor();
						public setId(id: string): com.contentful.java.cma.model.CMAUiExtension;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public getExtension(): com.contentful.java.cma.model.CMAUiExtension.Extension;
						public toString(): string;
					}
					export module CMAUiExtension {
						export class Extension {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAUiExtension.Extension>;
							public constructor();
							public setSourceContent(sourceContent: string): com.contentful.java.cma.model.CMAUiExtension.Extension;
							public setIsOnSidebar(available: boolean): com.contentful.java.cma.model.CMAUiExtension.Extension;
							public getSourceUrl(): string;
							public getSourceContent(): string;
							public toString(): string;
							public setName(name: string): com.contentful.java.cma.model.CMAUiExtension.Extension;
							public setParameters(parameters: com.contentful.java.cma.model.CMAUiExtensionParameters): com.contentful.java.cma.model.CMAUiExtension.Extension;
							public addFieldType(type: com.contentful.java.cma.Constants.CMAFieldType): com.contentful.java.cma.model.CMAUiExtension.Extension;
							public getName(): string;
							public getFieldTypes(): java.util.List<com.contentful.java.cma.model.CMAUiExtension.Extension.FieldType>;
							public setSourceUrl(sourceUrl: string): com.contentful.java.cma.model.CMAUiExtension.Extension;
							public isOnSidebar(): boolean;
							public getParameters(): com.contentful.java.cma.model.CMAUiExtensionParameters;
						}
						export module Extension {
							export class FieldType {
								public static class: java.lang.Class<com.contentful.java.cma.model.CMAUiExtension.Extension.FieldType>;
								public toString(): string;
								public constructor();
								public setType(type: com.contentful.java.cma.Constants.CMAFieldType): com.contentful.java.cma.model.CMAUiExtension.Extension.FieldType;
								public getType(): com.contentful.java.cma.Constants.CMAFieldType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAUiExtensionParameter {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAUiExtensionParameter>;
						public setDescription(description: string): com.contentful.java.cma.model.CMAUiExtensionParameter;
						public getType(): com.contentful.java.cma.model.CMAUiExtensionParameterType;
						public isRequired(): boolean;
						public constructor();
						public setType(type: com.contentful.java.cma.model.CMAUiExtensionParameterType): com.contentful.java.cma.model.CMAUiExtensionParameter;
						public setDefaultValue(defaultValue: string): com.contentful.java.cma.model.CMAUiExtensionParameter;
						public setName(name: string): com.contentful.java.cma.model.CMAUiExtensionParameter;
						public addOption(value: string): com.contentful.java.cma.model.CMAUiExtensionParameter;
						public getName(): string;
						public addLabel(key: string, value: string): com.contentful.java.cma.model.CMAUiExtensionParameter;
						public toString(): string;
						public setRequired(required: boolean): com.contentful.java.cma.model.CMAUiExtensionParameter;
						public getDefaultValue(): string;
						public getId(): string;
						public getLabels(): java.util.List<java.util.Map<string, string>>;
						public getDescription(): string;
						public getOptions(): java.util.List<any>;
						public setId(id: string): com.contentful.java.cma.model.CMAUiExtensionParameter;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAUiExtensionParameterType {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAUiExtensionParameterType>;
						public static Boolean: com.contentful.java.cma.model.CMAUiExtensionParameterType;
						public static Enum: com.contentful.java.cma.model.CMAUiExtensionParameterType;
						public static Number: com.contentful.java.cma.model.CMAUiExtensionParameterType;
						public static Symbol: com.contentful.java.cma.model.CMAUiExtensionParameterType;
						public static valueOf(name: string): com.contentful.java.cma.model.CMAUiExtensionParameterType;
						public static values(): androidNative.Array<com.contentful.java.cma.model.CMAUiExtensionParameterType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAUiExtensionParameters {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAUiExtensionParameters>;
						public addInstallationParameters(): com.contentful.java.cma.model.CMAUiExtensionParameters;
						public getInstallation(): java.util.List<com.contentful.java.cma.model.CMAUiExtensionParameter>;
						public addInstanceParameters(parameter: com.contentful.java.cma.model.CMAUiExtensionParameter): com.contentful.java.cma.model.CMAUiExtensionParameters;
						public constructor();
						public getInstance(): java.util.List<com.contentful.java.cma.model.CMAUiExtensionParameter>;
						public toString(): string;
						public addInstallationParameters(parameter: com.contentful.java.cma.model.CMAUiExtensionParameter): com.contentful.java.cma.model.CMAUiExtensionParameters;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAUpload extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAUpload>;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public constructor();
						public setId(id: string): com.contentful.java.cma.model.CMAUpload;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAResource;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public setEnvironmentId(environmentId: string): com.contentful.java.cma.model.CMAUpload;
						public toString(): string;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAUpload;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAUpload;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAUpload;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAUsage extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAUsage>;
						public getMetric(): com.contentful.java.cma.model.CMAUsage.UsageMetric;
						public getUsagePerDay(): java.util.LinkedHashMap<string, java.lang.Integer>;
						public setUnitOfMeasure(unitOfMeasure: string): void;
						public getDateRange(): com.contentful.java.cma.model.CMAUsage.DateRange;
						public setDateRange(dateRange: com.contentful.java.cma.model.CMAUsage.DateRange): void;
						public getUsage(): number;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getUnitOfMeasure(): string;
						public setMetric(metric: com.contentful.java.cma.model.CMAUsage.UsageMetric): void;
						public setUsage(usage: number): void;
						public setUsagePerDay(usagePerDay: java.util.LinkedHashMap<string, java.lang.Integer>): void;
					}
					export module CMAUsage {
						export class DateRange {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAUsage.DateRange>;
							public constructor();
							public getStartAt(): string;
							public setStartAt(startAt: string): void;
							public setEndAt(endAt: string): void;
							public getEndAt(): string;
						}
						export class UsageMetric {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAUsage.UsageMetric>;
							public static cda: com.contentful.java.cma.model.CMAUsage.UsageMetric;
							public static cma: com.contentful.java.cma.model.CMAUsage.UsageMetric;
							public static cpa: com.contentful.java.cma.model.CMAUsage.UsageMetric;
							public static gql1: com.contentful.java.cma.model.CMAUsage.UsageMetric;
							public static values(): androidNative.Array<com.contentful.java.cma.model.CMAUsage.UsageMetric>;
							public static valueOf(name: string): com.contentful.java.cma.model.CMAUsage.UsageMetric;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAUser extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAUser>;
						public getSignInCount(): java.lang.Integer;
						public constructor();
						public getEmail(): string;
						public getLastName(): string;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getFirstName(): string;
						public isConfirmed(): java.lang.Boolean;
						public isActivated(): java.lang.Boolean;
						public getAvatarUrl(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAVisibility {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAVisibility>;
						public static privateVisibility: com.contentful.java.cma.model.CMAVisibility;
						public static publicVisibility: com.contentful.java.cma.model.CMAVisibility;
						public static values(): androidNative.Array<com.contentful.java.cma.model.CMAVisibility>;
						public static valueOf(param0: string): com.contentful.java.cma.model.CMAVisibility;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhook extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhook>;
						public getUser(): string;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAResource;
						public addHeader(key: string, value: string): com.contentful.java.cma.model.CMAWebhook;
						public constructor();
						public setName(name: string): com.contentful.java.cma.model.CMAWebhook;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAWebhook;
						public setVersion(version: java.lang.Integer): com.contentful.java.cma.model.CMAWebhook;
						public getPassword(): string;
						public setId(id: string): com.contentful.java.cma.model.CMAWebhook;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAWebhook;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getUrl(): string;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public getName(): string;
						public toString(): string;
						public setBasicAuthorization(user: string, password: string): com.contentful.java.cma.model.CMAWebhook;
						public setTransformation(transformation: com.contentful.java.cma.model.CMAWebhookTransformation): com.contentful.java.cma.model.CMAWebhook;
						public getTopics(): java.util.List<com.contentful.java.cma.model.CMAWebhookTopic>;
						public getTransformation(): com.contentful.java.cma.model.CMAWebhookTransformation;
						public setId(id: string): com.contentful.java.cma.model.CMAResource;
						public setSystem(system: com.contentful.java.cma.model.CMASystem): com.contentful.java.cma.model.CMAResource;
						public addTopic(topic: com.contentful.java.cma.model.CMAWebhookTopic): com.contentful.java.cma.model.CMAWebhook;
						public setUrl(url: string): com.contentful.java.cma.model.CMAWebhook;
						public getHeaders(): java.util.List<com.contentful.java.cma.model.CMAWebhookHeader>;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhookCall extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookCall>;
						public constructor();
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAWebhookCall;
						public getResponseAt(): string;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getStatusCode(): java.lang.Integer;
						public getErrors(): java.util.List<string>;
						public getUrl(): string;
						public setSpaceId(spaceId: string): com.contentful.java.cma.model.CMAResource;
						public getEventType(): string;
						public toString(): string;
						public getRequestAt(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhookCallDetail extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookCallDetail>;
						public constructor();
						public getResponseAt(): string;
						public getResponse(): com.contentful.java.cma.model.CMAWebhookResponse;
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getUrl(): string;
						public getRequest(): com.contentful.java.cma.model.CMAWebhookRequest;
						public getStatusCode(): java.lang.Integer;
						public getErrors(): java.util.List<string>;
						public getEventType(): string;
						public toString(): string;
						public getRequestAt(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhookHeader {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookHeader>;
						public constructor(key: string, value: string);
						public getValue(): string;
						public getKey(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhookHealth extends com.contentful.java.cma.model.CMAResource {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookHealth>;
						public constructor();
						public constructor(type: com.contentful.java.cma.model.CMAType);
						public getCalls(): com.contentful.java.cma.model.CMAWebhookHealth.CMAWebhookHealthCall;
						public toString(): string;
					}
					export module CMAWebhookHealth {
						export class CMAWebhookHealthCall {
							public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookHealth.CMAWebhookHealthCall>;
							public constructor();
							public getTotal(): java.lang.Integer;
							public toString(): string;
							public getHealthy(): java.lang.Integer;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhookRequest {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookRequest>;
						public getJSONBody(): string;
						public constructor();
						public getHeaders(): java.util.Map<string, string>;
						public getUrl(): string;
						public getMethod(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhookResponse {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookResponse>;
						public getBody(): string;
						public constructor();
						public getHeaders(): java.util.Map<string, string>;
						public getUrl(): string;
						public getStatusCode(): java.lang.Integer;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhookTopic {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookTopic>;
						public static All: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntryAll: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntryCreate: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntrySave: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntryAutoSave: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntryArchive: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntryUnarchive: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntryPublish: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntryUnpublish: com.contentful.java.cma.model.CMAWebhookTopic;
						public static EntryDelete: com.contentful.java.cma.model.CMAWebhookTopic;
						public static ContentTypeAll: com.contentful.java.cma.model.CMAWebhookTopic;
						public static ContentTypeCreate: com.contentful.java.cma.model.CMAWebhookTopic;
						public static ContentTypeSave: com.contentful.java.cma.model.CMAWebhookTopic;
						public static ContentTypePublish: com.contentful.java.cma.model.CMAWebhookTopic;
						public static ContentTypeUnpublish: com.contentful.java.cma.model.CMAWebhookTopic;
						public static ContentTypeDelete: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetAll: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetCreate: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetSave: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetAutoSave: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetArchive: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetUnarchive: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetPublish: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetUnpublish: com.contentful.java.cma.model.CMAWebhookTopic;
						public static AssetDelete: com.contentful.java.cma.model.CMAWebhookTopic;
						public static values(): androidNative.Array<com.contentful.java.cma.model.CMAWebhookTopic>;
						public static valueOf(param0: string): com.contentful.java.cma.model.CMAWebhookTopic;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class CMAWebhookTransformation {
						public static class: java.lang.Class<com.contentful.java.cma.model.CMAWebhookTransformation>;
						public getBody(): string;
						public getIncludeContentLength(): java.lang.Boolean;
						public constructor();
						public setIncludeContentLength(includeContentLength: java.lang.Boolean): com.contentful.java.cma.model.CMAWebhookTransformation;
						public getContentType(): string;
						public setBody(body: string): com.contentful.java.cma.model.CMAWebhookTransformation;
						public getMethod(): string;
						public setContentType(contentType: string): com.contentful.java.cma.model.CMAWebhookTransformation;
						public toString(): string;
						public setMethod(method: string): com.contentful.java.cma.model.CMAWebhookTransformation;
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export class RateLimits {
						public static class: java.lang.Class<com.contentful.java.cma.model.RateLimits>;
						public getSecondRemaining(): number;
						public getHourLimit(): number;
						public constructor();
						public getSecondLimit(): number;
						public getReset(): number;
						public getHourRemaining(): number;
					}
					export module RateLimits {
						export class Builder {
							public static class: java.lang.Class<com.contentful.java.cma.model.RateLimits.Builder>;
							public constructor();
							public setReset(reset: number): com.contentful.java.cma.model.RateLimits.Builder;
							public setHourLimit(hourLimit: number): com.contentful.java.cma.model.RateLimits.Builder;
							public setSecondRemaining(secondRemaining: number): com.contentful.java.cma.model.RateLimits.Builder;
							public setHourRemaining(hourRemaining: number): com.contentful.java.cma.model.RateLimits.Builder;
							public setSecondLimit(secondLimit: number): com.contentful.java.cma.model.RateLimits.Builder;
							public build(): com.contentful.java.cma.model.RateLimits;
						}
						export class DefaultParser extends com.contentful.java.cma.model.RateLimits.Parser {
							public static class: java.lang.Class<com.contentful.java.cma.model.RateLimits.DefaultParser>;
							public constructor();
							public parse(headers: java.util.Map<string, java.util.List<string>>): com.contentful.java.cma.model.RateLimits;
							public parse(param0: java.util.Map<string, java.util.List<string>>): com.contentful.java.cma.model.RateLimits;
						}
						export class Parser {
							public static class: java.lang.Class<com.contentful.java.cma.model.RateLimits.Parser>;
							/**
							 * Constructs a new instance of the com.contentful.java.cma.model.RateLimits$Parser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { parse(param0: java.util.Map<string, java.util.List<string>>): com.contentful.java.cma.model.RateLimits });
							public constructor();
							public static HEADER_HOUR_REMAINING: string = 'X-Contentful-RateLimit-Hour-Remaining';
							public static HEADER_SECOND_LIMIT: string = 'X-Contentful-RateLimit-Second-Limit';
							public static HEADER_SECOND_REMAINING: string = 'X-Contentful-RateLimit-Second-Remaining';
							public static HEADER_RESET: string = 'X-Contentful-RateLimit-Reset';
							public static HEADER_HOUR_LIMIT: string = 'X-Contentful-RateLimit-Hour-Limit';
							public parse(param0: java.util.Map<string, java.util.List<string>>): com.contentful.java.cma.model.RateLimits;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichBlock extends com.contentful.java.cma.model.rich.CMARichNode {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichBlock>;
							public addContent(content: androidNative.Array<com.contentful.java.cma.model.rich.CMARichNode>): com.contentful.java.cma.model.rich.CMARichBlock;
							public setContent(content: java.util.List<com.contentful.java.cma.model.rich.CMARichNode>): com.contentful.java.cma.model.rich.CMARichBlock;
							public getContent(): java.util.List<com.contentful.java.cma.model.rich.CMARichNode>;
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichDocument extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichDocument>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichEmbeddedLink extends com.contentful.java.cma.model.rich.CMARichHyperLink {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichEmbeddedLink>;
							public constructor();
							public constructor(target: any, inline: boolean);
							public constructor(type: string);
							public getNodeType(): string;
							public constructor(target: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichHeading extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichHeading>;
							public getLevel(): number;
							public constructor(level: number);
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichHorizontalRule extends com.contentful.java.cma.model.rich.CMARichNode {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichHorizontalRule>;
							public constructor();
							public constructor(nodeType: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichHyperLink extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichHyperLink>;
							public constructor();
							public constructor(type: string);
							public getNodeType(): string;
							public getData(): any;
							public constructor(target: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichListItem extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichListItem>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichMark {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichMark>;
							public constructor(type: string);
						}
						export module CMARichMark {
							export class CMARichMarkBold extends com.contentful.java.cma.model.rich.CMARichMark {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichMark.CMARichMarkBold>;
								public constructor(type: string);
								public constructor();
							}
							export class CMARichMarkCode extends com.contentful.java.cma.model.rich.CMARichMark {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichMark.CMARichMarkCode>;
								public constructor(type: string);
								public constructor();
							}
							export class CMARichMarkCustom extends com.contentful.java.cma.model.rich.CMARichMark {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichMark.CMARichMarkCustom>;
								public constructor(type: string);
							}
							export class CMARichMarkItalic extends com.contentful.java.cma.model.rich.CMARichMark {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichMark.CMARichMarkItalic>;
								public constructor(type: string);
								public constructor();
							}
							export class CMARichMarkUnderline extends com.contentful.java.cma.model.rich.CMARichMark {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichMark.CMARichMarkUnderline>;
								public constructor(type: string);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichNode {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichNode>;
							public data: any;
							public constructor(nodeType: string);
							public getNodeType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichOrderedList extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichOrderedList>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichParagraph extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichParagraph>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichQuote extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichQuote>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichTable extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichTable>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichTableCell extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichTableCell>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichTableHeaderCell extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichTableHeaderCell>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichTableRow extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichTableRow>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichText extends com.contentful.java.cma.model.rich.CMARichNode {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichText>;
							public setMarks(marks: java.util.List<com.contentful.java.cma.model.rich.CMARichMark>): com.contentful.java.cma.model.rich.CMARichText;
							public constructor(nodeType: string);
							public getMarks(): java.util.List<com.contentful.java.cma.model.rich.CMARichMark>;
							public constructor(value: string, marks: java.util.List<com.contentful.java.cma.model.rich.CMARichMark>);
							public getValue(): string;
							public setValue(value: string): com.contentful.java.cma.model.rich.CMARichText;
							public constructor(value: string);
							public addMarks(marks: androidNative.Array<com.contentful.java.cma.model.rich.CMARichMark>): com.contentful.java.cma.model.rich.CMARichText;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class CMARichUnorderedList extends com.contentful.java.cma.model.rich.CMARichBlock {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.CMARichUnorderedList>;
							public constructor();
							public constructor(type: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module contentful {
		export module java {
			export module cma {
				export module model {
					export module rich {
						export class RichTextFactory {
							public static class: java.lang.Class<com.contentful.java.cma.model.rich.RichTextFactory>;
							public constructor();
							public static resolveRichTextField(nodeType: com.contentful.java.cma.model.CMAEntry): void;
						}
						export module RichTextFactory {
							export class BlockAndDataResolver<T> extends com.contentful.java.cma.model.rich.RichTextFactory.BlockResolver<any> {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.RichTextFactory.BlockAndDataResolver<any>>;
								public resolve(param0: java.util.Map<string, any>): com.contentful.java.cma.model.rich.CMARichNode;
							}
							export class BlockResolver<T> extends com.contentful.java.cma.model.rich.RichTextFactory.Resolver {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.RichTextFactory.BlockResolver<any>>;
								public resolve(rawNode: java.util.Map<string, any>): com.contentful.java.cma.model.rich.CMARichNode;
								public resolve(param0: java.util.Map<string, any>): com.contentful.java.cma.model.rich.CMARichNode;
							}
							export class HeadingResolver extends com.contentful.java.cma.model.rich.RichTextFactory.BlockResolver<com.contentful.java.cma.model.rich.CMARichHeading> {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.RichTextFactory.HeadingResolver>;
								public resolve(param0: java.util.Map<string, any>): com.contentful.java.cma.model.rich.CMARichNode;
							}
							export class Resolver {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.RichTextFactory.Resolver>;
								/**
								 * Constructs a new instance of the com.contentful.java.cma.model.rich.RichTextFactory$Resolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { resolve(param0: java.util.Map<string, any>): com.contentful.java.cma.model.rich.CMARichNode });
								public constructor();
								public resolve(param0: java.util.Map<string, any>): com.contentful.java.cma.model.rich.CMARichNode;
							}
							export class SupplierWithData<T> extends java.lang.Object {
								public static class: java.lang.Class<com.contentful.java.cma.model.rich.RichTextFactory.SupplierWithData<any>>;
								/**
								 * Constructs a new instance of the com.contentful.java.cma.model.rich.RichTextFactory$SupplierWithData interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: { get(param0: any): T });
								public constructor();
								public get(param0: any): T;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.contentful.java.cda.AbsQuery:2
//com.contentful.java.cda.CDACallback:1
//com.contentful.java.cda.Callbacks.BaseAction:1
//com.contentful.java.cda.Callbacks.SuccessAction:1
//com.contentful.java.cda.Callbacks.SuccessRunnable:1
//com.contentful.java.cda.FetchQuery:1
//com.contentful.java.cda.ObserveQuery:1
//com.contentful.java.cda.QueryOperation:1
//com.contentful.java.cda.TransformQuery:1
//com.contentful.java.cda.rich.RichTextFactory.BlockAndDataResolver:1
//com.contentful.java.cda.rich.RichTextFactory.BlockResolver:1
//com.contentful.java.cda.rich.RichTextFactory.Supplier:1
//com.contentful.java.cda.rich.RichTextFactory.SupplierWithData:1
//com.contentful.java.cma.AbsModule:1
//com.contentful.java.cma.CMACallback:1
//com.contentful.java.cma.RxExtensions.AbsAction:1
//com.contentful.java.cma.RxExtensions.ActionSuccess:1
//com.contentful.java.cma.RxExtensions.DefFunc:1
//com.contentful.java.cma.model.CMAArray:1
//com.contentful.java.cma.model.rich.RichTextFactory.BlockAndDataResolver:1
//com.contentful.java.cma.model.rich.RichTextFactory.BlockResolver:1
//com.contentful.java.cma.model.rich.RichTextFactory.SupplierWithData:1
