declare module org {
	export module koin {
		export module core {
			export class Koin {
				public static class: java.lang.Class<org.koin.core.Koin>;
				public getOrNull(param0: any, param1: org.koin.core.qualifier.Qualifier, param2: any): any;
				public createScope(param0: string, param1: org.koin.core.qualifier.Qualifier, param2: any): org.koin.core.scope.Scope;
				public close(): void;
				public setupLogger(param0: org.koin.core.logger.Logger): void;
				public getScope(param0: string): org.koin.core.scope.Scope;
				public getProperty(param0: string, param1: any): any;
				public get(param0: any, param1: org.koin.core.qualifier.Qualifier, param2: any): any;
				public getOrCreateScope(param0: string, param1: org.koin.core.qualifier.Qualifier, param2: any): org.koin.core.scope.Scope;
				public getProperty(param0: string): any;
				public createEagerInstances(): void;
				public getScopeRegistry(): org.koin.core.registry.ScopeRegistry;
				public getInstanceRegistry(): org.koin.core.registry.InstanceRegistry;
				public getScopeOrNull(param0: string): org.koin.core.scope.Scope;
				public setProperty(param0: string, param1: any): void;
				public constructor();
				public getLogger(): org.koin.core.logger.Logger;
				public unloadModules(param0: java.util.List<org.koin.core.module.Module>): void;
				public getPropertyRegistry(): org.koin.core.registry.PropertyRegistry;
				public deleteProperty(param0: string): void;
				public loadModules(param0: java.util.List<org.koin.core.module.Module>, param1: boolean): void;
				public deleteScope(param0: string): void;
				public createScope(param0: org.koin.core.component.KoinScopeComponent): org.koin.core.scope.Scope;
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export class KoinApplication {
				public static class: java.lang.Class<org.koin.core.KoinApplication>;
				public modules(param0: androidNative.Array<org.koin.core.module.Module>): org.koin.core.KoinApplication;
				public properties(param0: java.util.Map<string,any>): org.koin.core.KoinApplication;
				public printLogger(param0: org.koin.core.logger.Level): org.koin.core.KoinApplication;
				public close(): void;
				public unloadModules$koin_core(param0: org.koin.core.module.Module): void;
				public getKoin(): org.koin.core.Koin;
				public modules(param0: java.util.List<org.koin.core.module.Module>): org.koin.core.KoinApplication;
				public modules(param0: org.koin.core.module.Module): org.koin.core.KoinApplication;
				public createEagerInstances(): void;
				public logger(param0: org.koin.core.logger.Logger): org.koin.core.KoinApplication;
				public allowOverride(param0: boolean): void;
				public unloadModules$koin_core(param0: java.util.List<org.koin.core.module.Module>): void;
			}
			export module KoinApplication {
				export class Companion {
					public static class: java.lang.Class<org.koin.core.KoinApplication.Companion>;
					public init(): org.koin.core.KoinApplication;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module annotation {
				export class KoinExperimentalAPI {
					public static class: java.lang.Class<org.koin.core.annotation.KoinExperimentalAPI>;
					/**
					 * Constructs a new instance of the org.koin.core.annotation.KoinExperimentalAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module annotation {
				export class KoinInternalApi {
					public static class: java.lang.Class<org.koin.core.annotation.KoinInternalApi>;
					/**
					 * Constructs a new instance of the org.koin.core.annotation.KoinInternalApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module annotation {
				export class KoinReflectAPI {
					public static class: java.lang.Class<org.koin.core.annotation.KoinReflectAPI>;
					/**
					 * Constructs a new instance of the org.koin.core.annotation.KoinReflectAPI interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module component {
				export class KoinComponent {
					public static class: java.lang.Class<org.koin.core.component.KoinComponent>;
					/**
					 * Constructs a new instance of the org.koin.core.component.KoinComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getKoin(): org.koin.core.Koin;
					});
					public constructor();
					public getKoin(): org.koin.core.Koin;
				}
				export module KoinComponent {
					export class DefaultImpls {
						public static class: java.lang.Class<org.koin.core.component.KoinComponent.DefaultImpls>;
						public static getKoin(param0: org.koin.core.component.KoinComponent): org.koin.core.Koin;
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module component {
				export class KoinScopeComponent extends org.koin.core.component.KoinComponent {
					public static class: java.lang.Class<org.koin.core.component.KoinScopeComponent>;
					/**
					 * Constructs a new instance of the org.koin.core.component.KoinScopeComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getScope(): org.koin.core.scope.Scope;
						closeScope(): void;
						getKoin(): org.koin.core.Koin;
					});
					public constructor();
					public closeScope(): void;
					public getScope(): org.koin.core.scope.Scope;
					public getKoin(): org.koin.core.Koin;
				}
				export module KoinScopeComponent {
					export class DefaultImpls {
						public static class: java.lang.Class<org.koin.core.component.KoinScopeComponent.DefaultImpls>;
						public static getKoin(param0: org.koin.core.component.KoinScopeComponent): org.koin.core.Koin;
						public static closeScope(param0: org.koin.core.component.KoinScopeComponent): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module context {
				export class GlobalContext extends org.koin.core.context.KoinContext {
					public static class: java.lang.Class<org.koin.core.context.GlobalContext>;
					public static INSTANCE: org.koin.core.context.GlobalContext;
					public startKoin(param0: org.koin.core.KoinApplication): org.koin.core.KoinApplication;
					public unloadKoinModules(param0: org.koin.core.module.Module): void;
					public loadKoinModules(param0: org.koin.core.module.Module): void;
					public getOrNull(): org.koin.core.Koin;
					public get(): org.koin.core.Koin;
					public stopKoin(): void;
					public startKoin(param0: any): org.koin.core.KoinApplication;
					public loadKoinModules(param0: java.util.List<org.koin.core.module.Module>): void;
					public getKoinApplicationOrNull(): org.koin.core.KoinApplication;
					public unloadKoinModules(param0: java.util.List<org.koin.core.module.Module>): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module context {
				export class KoinContext {
					public static class: java.lang.Class<org.koin.core.context.KoinContext>;
					/**
					 * Constructs a new instance of the org.koin.core.context.KoinContext interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(): org.koin.core.Koin;
						getOrNull(): org.koin.core.Koin;
						stopKoin(): void;
						startKoin(param0: org.koin.core.KoinApplication): org.koin.core.KoinApplication;
						startKoin(param0: any): org.koin.core.KoinApplication;
						loadKoinModules(param0: org.koin.core.module.Module): void;
						loadKoinModules(param0: java.util.List<org.koin.core.module.Module>): void;
						unloadKoinModules(param0: org.koin.core.module.Module): void;
						unloadKoinModules(param0: java.util.List<org.koin.core.module.Module>): void;
					});
					public constructor();
					public startKoin(param0: org.koin.core.KoinApplication): org.koin.core.KoinApplication;
					public unloadKoinModules(param0: org.koin.core.module.Module): void;
					public loadKoinModules(param0: org.koin.core.module.Module): void;
					public getOrNull(): org.koin.core.Koin;
					public get(): org.koin.core.Koin;
					public stopKoin(): void;
					public startKoin(param0: any): org.koin.core.KoinApplication;
					public loadKoinModules(param0: java.util.List<org.koin.core.module.Module>): void;
					public unloadKoinModules(param0: java.util.List<org.koin.core.module.Module>): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module definition {
				export class BeanDefinition<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.koin.core.definition.BeanDefinition<any>>;
					public hasType(param0: any): boolean;
					public is(param0: any, param1: org.koin.core.qualifier.Qualifier, param2: org.koin.core.qualifier.Qualifier): boolean;
					public setQualifier(param0: org.koin.core.qualifier.Qualifier): void;
					public getDefinition(): any;
					public getQualifier(): org.koin.core.qualifier.Qualifier;
					public toString(): string;
					public constructor(param0: org.koin.core.qualifier.Qualifier, param1: any, param2: org.koin.core.qualifier.Qualifier, param3: any, param4: org.koin.core.definition.Kind, param5: java.util.List<any>);
					public hashCode(): number;
					public setSecondaryTypes(param0: java.util.List<any>): void;
					public component4(): any;
					public component5(): org.koin.core.definition.Kind;
					public getPrimaryType(): any;
					public getKind(): org.koin.core.definition.Kind;
					public get_createdAtStart(): boolean;
					public set_createdAtStart(param0: boolean): void;
					public copy(param0: org.koin.core.qualifier.Qualifier, param1: any, param2: org.koin.core.qualifier.Qualifier, param3: any, param4: org.koin.core.definition.Kind, param5: java.util.List<any>): org.koin.core.definition.BeanDefinition<T>;
					public component2(): any;
					public getScopeQualifier(): org.koin.core.qualifier.Qualifier;
					public setCallbacks(param0: org.koin.core.definition.Callbacks<T>): void;
					public getSecondaryTypes(): java.util.List<any>;
					public equals(param0: any): boolean;
					public getCallbacks(): org.koin.core.definition.Callbacks<T>;
					public component1(): org.koin.core.qualifier.Qualifier;
					public component3(): org.koin.core.qualifier.Qualifier;
					public component6(): java.util.List<any>;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module definition {
				export class Callbacks<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.koin.core.definition.Callbacks<any>>;
					public equals(param0: any): boolean;
					public constructor(param0: any);
					public getOnClose(): any;
					public toString(): string;
					public component1(): any;
					public constructor();
					public copy(param0: any): org.koin.core.definition.Callbacks<T>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module definition {
				export class Kind {
					public static class: java.lang.Class<org.koin.core.definition.Kind>;
					public static Singleton: org.koin.core.definition.Kind;
					public static Factory: org.koin.core.definition.Kind;
					public static Scoped: org.koin.core.definition.Kind;
					public static values(): androidNative.Array<org.koin.core.definition.Kind>;
					public static valueOf(param0: string): org.koin.core.definition.Kind;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module definition {
				export class KoinDefinition<R>  extends java.lang.Object {
					public static class: java.lang.Class<org.koin.core.definition.KoinDefinition<any>>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: org.koin.core.module.Module, param1: org.koin.core.instance.InstanceFactory<R>);
					public getFactory(): org.koin.core.instance.InstanceFactory<R>;
					public getModule(): org.koin.core.module.Module;
					public component2(): org.koin.core.instance.InstanceFactory<R>;
					public hashCode(): number;
					public component1(): org.koin.core.module.Module;
					public copy(param0: org.koin.core.module.Module, param1: org.koin.core.instance.InstanceFactory<R>): org.koin.core.definition.KoinDefinition<R>;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class ClosedScopeException {
					public static class: java.lang.Class<org.koin.core.error.ClosedScopeException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class DefinitionOverrideException {
					public static class: java.lang.Class<org.koin.core.error.DefinitionOverrideException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class DefinitionParameterException {
					public static class: java.lang.Class<org.koin.core.error.DefinitionParameterException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class InstanceCreationException {
					public static class: java.lang.Class<org.koin.core.error.InstanceCreationException>;
					public constructor(param0: string, param1: java.lang.Exception);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class KoinAppAlreadyStartedException {
					public static class: java.lang.Class<org.koin.core.error.KoinAppAlreadyStartedException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class MissingPropertyException {
					public static class: java.lang.Class<org.koin.core.error.MissingPropertyException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class NoBeanDefFoundException {
					public static class: java.lang.Class<org.koin.core.error.NoBeanDefFoundException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class NoParameterFoundException {
					public static class: java.lang.Class<org.koin.core.error.NoParameterFoundException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class NoPropertyFileFoundException {
					public static class: java.lang.Class<org.koin.core.error.NoPropertyFileFoundException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class NoScopeDefFoundException {
					public static class: java.lang.Class<org.koin.core.error.NoScopeDefFoundException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class ScopeAlreadyCreatedException {
					public static class: java.lang.Class<org.koin.core.error.ScopeAlreadyCreatedException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module error {
				export class ScopeNotCreatedException {
					public static class: java.lang.Class<org.koin.core.error.ScopeNotCreatedException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module instance {
				export class FactoryInstanceFactory<T>  extends org.koin.core.instance.InstanceFactory<any> {
					public static class: java.lang.Class<org.koin.core.instance.FactoryInstanceFactory<any>>;
					public dropAll(): void;
					public isCreated(param0: org.koin.core.instance.InstanceContext): boolean;
					public get(param0: org.koin.core.instance.InstanceContext): any;
					public constructor(param0: org.koin.core.definition.BeanDefinition<any>);
					public drop(param0: org.koin.core.scope.Scope): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module instance {
				export class InstanceContext {
					public static class: java.lang.Class<org.koin.core.instance.InstanceContext>;
					public getParameters(): org.koin.core.parameter.ParametersHolder;
					public getScope(): org.koin.core.scope.Scope;
					public constructor(param0: org.koin.core.Koin, param1: org.koin.core.scope.Scope, param2: org.koin.core.parameter.ParametersHolder);
					public getKoin(): org.koin.core.Koin;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module instance {
				export abstract class InstanceFactory<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.koin.core.instance.InstanceFactory<any>>;
					public static ERROR_SEPARATOR: string;
					public dropAll(): void;
					public create(param0: org.koin.core.instance.InstanceContext): T;
					public isCreated(param0: org.koin.core.instance.InstanceContext): boolean;
					public constructor(param0: org.koin.core.definition.BeanDefinition<T>);
					public getBeanDefinition(): org.koin.core.definition.BeanDefinition<T>;
					public get(param0: org.koin.core.instance.InstanceContext): T;
					public drop(param0: org.koin.core.scope.Scope): void;
				}
				export module InstanceFactory {
					export class Companion {
						public static class: java.lang.Class<org.koin.core.instance.InstanceFactory.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module instance {
				export class ScopedInstanceFactory<T>  extends org.koin.core.instance.InstanceFactory<any> {
					public static class: java.lang.Class<org.koin.core.instance.ScopedInstanceFactory<any>>;
					public dropAll(): void;
					public isCreated(param0: org.koin.core.instance.InstanceContext): boolean;
					public get(param0: org.koin.core.instance.InstanceContext): any;
					public constructor(param0: org.koin.core.definition.BeanDefinition<any>);
					public create(param0: org.koin.core.instance.InstanceContext): any;
					public refreshInstance(param0: string, param1: any): void;
					public drop(param0: org.koin.core.scope.Scope): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module instance {
				export class SingleInstanceFactory<T>  extends org.koin.core.instance.InstanceFactory<any> {
					public static class: java.lang.Class<org.koin.core.instance.SingleInstanceFactory<any>>;
					public dropAll(): void;
					public isCreated(param0: org.koin.core.instance.InstanceContext): boolean;
					public get(param0: org.koin.core.instance.InstanceContext): any;
					public constructor(param0: org.koin.core.definition.BeanDefinition<any>);
					public create(param0: org.koin.core.instance.InstanceContext): any;
					public drop(param0: org.koin.core.scope.Scope): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module logger {
				export class EmptyLogger extends org.koin.core.logger.Logger {
					public static class: java.lang.Class<org.koin.core.logger.EmptyLogger>;
					public constructor(param0: org.koin.core.logger.Level);
					public constructor();
					public display(param0: org.koin.core.logger.Level, param1: string): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module logger {
				export class Level {
					public static class: java.lang.Class<org.koin.core.logger.Level>;
					public static DEBUG: org.koin.core.logger.Level;
					public static INFO: org.koin.core.logger.Level;
					public static WARNING: org.koin.core.logger.Level;
					public static ERROR: org.koin.core.logger.Level;
					public static NONE: org.koin.core.logger.Level;
					public static valueOf(param0: string): org.koin.core.logger.Level;
					public static values(): androidNative.Array<org.koin.core.logger.Level>;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module logger {
				export abstract class Logger {
					public static class: java.lang.Class<org.koin.core.logger.Logger>;
					public setLevel(param0: org.koin.core.logger.Level): void;
					public info(param0: string): void;
					public warn(param0: string): void;
					public constructor(param0: org.koin.core.logger.Level);
					public constructor();
					public getLevel(): org.koin.core.logger.Level;
					public display(param0: org.koin.core.logger.Level, param1: string): void;
					public log(param0: org.koin.core.logger.Level, param1: string): void;
					public isAt(param0: org.koin.core.logger.Level): boolean;
					public debug(param0: string): void;
					public error(param0: string): void;
					public log(param0: org.koin.core.logger.Level, param1: any): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module logger {
				export class PrintLogger extends org.koin.core.logger.Logger {
					public static class: java.lang.Class<org.koin.core.logger.PrintLogger>;
					public constructor(param0: org.koin.core.logger.Level);
					public constructor();
					public display(param0: org.koin.core.logger.Level, param1: string): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module module {
				export class KoinApplicationDslMarker {
					public static class: java.lang.Class<org.koin.core.module.KoinApplicationDslMarker>;
					/**
					 * Constructs a new instance of the org.koin.core.module.KoinApplicationDslMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module module {
				export class KoinDslMarker {
					public static class: java.lang.Class<org.koin.core.module.KoinDslMarker>;
					/**
					 * Constructs a new instance of the org.koin.core.module.KoinDslMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module module {
				export class Module {
					public static class: java.lang.Class<org.koin.core.module.Module>;
					public plus(param0: org.koin.core.module.Module): java.util.List<org.koin.core.module.Module>;
					public getMappings(): java.util.HashMap<string,org.koin.core.instance.InstanceFactory<any>>;
					public get_createdAtStart(): boolean;
					public getId(): string;
					public includes(param0: java.util.List<org.koin.core.module.Module>): void;
					public getEagerInstances(): java.util.HashSet<org.koin.core.instance.SingleInstanceFactory<any>>;
					public setEagerInstances$koin_core(param0: java.util.HashSet<org.koin.core.instance.SingleInstanceFactory<any>>): void;
					public plus(param0: java.util.List<org.koin.core.module.Module>): java.util.List<org.koin.core.module.Module>;
					public prepareForCreationAtStart(param0: org.koin.core.instance.SingleInstanceFactory<any>): void;
					public equals(param0: any): boolean;
					public includes(param0: androidNative.Array<org.koin.core.module.Module>): void;
					public constructor(param0: boolean);
					public scope(param0: org.koin.core.qualifier.Qualifier, param1: any): void;
					public indexSecondaryTypes(param0: org.koin.core.instance.InstanceFactory<any>): void;
					public constructor();
					public saveMapping(param0: string, param1: org.koin.core.instance.InstanceFactory<any>): void;
					public indexPrimaryType(param0: org.koin.core.instance.InstanceFactory<any>): void;
					public getIncludedModules(): java.util.List<org.koin.core.module.Module>;
					public getScopes(): java.util.HashSet<org.koin.core.qualifier.Qualifier>;
					public hashCode(): number;
					public isLoaded(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module module {
				export class OptionDslMarker {
					public static class: java.lang.Class<org.koin.core.module.OptionDslMarker>;
					/**
					 * Constructs a new instance of the org.koin.core.module.OptionDslMarker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module parameter {
				export class ParametersHolder {
					public static class: java.lang.Class<org.koin.core.parameter.ParametersHolder>;
					public static MAX_PARAMS: number;
					public constructor(param0: java.util.List<any>);
					public isEmpty(): boolean;
					public getValues(): java.util.List<any>;
					public insert(param0: number, param1: any): org.koin.core.parameter.ParametersHolder;
					public get_values(): java.util.List<any>;
					public elementAt(param0: number, param1: any): any;
					public size(): number;
					public isNotEmpty(): boolean;
					public getOrNull(param0: any): any;
					public toString(): string;
					public constructor();
					public add(param0: any): org.koin.core.parameter.ParametersHolder;
					public get(param0: number): any;
					public set(param0: number, param1: any): void;
				}
				export module ParametersHolder {
					export class Companion {
						public static class: java.lang.Class<org.koin.core.parameter.ParametersHolder.Companion>;
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module qualifier {
				export class Qualifier {
					public static class: java.lang.Class<org.koin.core.qualifier.Qualifier>;
					/**
					 * Constructs a new instance of the org.koin.core.qualifier.Qualifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getValue(): string;
					});
					public constructor();
					public getValue(): string;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module qualifier {
				export class StringQualifier extends org.koin.core.qualifier.Qualifier {
					public static class: java.lang.Class<org.koin.core.qualifier.StringQualifier>;
					public equals(param0: any): boolean;
					public getValue(): string;
					public toString(): string;
					public component1(): string;
					public constructor(param0: string);
					public hashCode(): number;
					public copy(param0: string): org.koin.core.qualifier.StringQualifier;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module qualifier {
				export class TypeQualifier extends org.koin.core.qualifier.Qualifier {
					public static class: java.lang.Class<org.koin.core.qualifier.TypeQualifier>;
					public equals(param0: any): boolean;
					public getValue(): string;
					public toString(): string;
					public constructor(param0: any);
					public hashCode(): number;
					public getType(): any;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module registry {
				export class InstanceRegistry {
					public static class: java.lang.Class<org.koin.core.registry.InstanceRegistry>;
					public getInstances(): java.util.Map<string,org.koin.core.instance.InstanceFactory<any>>;
					public close$koin_core(): void;
					public getAll$koin_core(param0: any, param1: org.koin.core.instance.InstanceContext): java.util.List<any>;
					public get_koin(): org.koin.core.Koin;
					public saveMapping(param0: boolean, param1: string, param2: org.koin.core.instance.InstanceFactory<any>, param3: boolean): void;
					public resolveInstance$koin_core(param0: org.koin.core.qualifier.Qualifier, param1: any, param2: org.koin.core.qualifier.Qualifier, param3: org.koin.core.instance.InstanceContext): any;
					public size(): number;
					public createAllEagerInstances$koin_core(): void;
					public constructor(param0: org.koin.core.Koin);
					public resolveDefinition$koin_core(param0: any, param1: org.koin.core.qualifier.Qualifier, param2: org.koin.core.qualifier.Qualifier): org.koin.core.instance.InstanceFactory<any>;
					public loadModules$koin_core(param0: java.util.Set<org.koin.core.module.Module>, param1: boolean): void;
					public dropScopeInstances$koin_core(param0: org.koin.core.scope.Scope): void;
					public unloadModules$koin_core(param0: java.util.Set<org.koin.core.module.Module>): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module registry {
				export class PropertyRegistry {
					public static class: java.lang.Class<org.koin.core.registry.PropertyRegistry>;
					public constructor(param0: org.koin.core.Koin);
					public deleteProperty(param0: string): void;
					public saveProperty$koin_core(param0: string, param1: any): void;
					public getProperty(param0: string): any;
					public close(): void;
					public saveProperties(param0: java.util.Map<string,any>): void;
					public get_koin$koin_core(): org.koin.core.Koin;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module registry {
				export class ScopeRegistry {
					public static class: java.lang.Class<org.koin.core.registry.ScopeRegistry>;
					public constructor(param0: org.koin.core.Koin);
					public close$koin_core(): void;
					public getRootScope(): org.koin.core.scope.Scope;
					public deleteScope$koin_core(param0: org.koin.core.scope.Scope): void;
					public getScopeOrNull(param0: string): org.koin.core.scope.Scope;
					public createScope(param0: string, param1: org.koin.core.qualifier.Qualifier, param2: any): org.koin.core.scope.Scope;
					public loadScopes(param0: java.util.Set<org.koin.core.module.Module>): void;
					public deleteScope$koin_core(param0: string): void;
					public getScopeDefinitions(): java.util.Set<org.koin.core.qualifier.Qualifier>;
				}
				export module ScopeRegistry {
					export class Companion {
						public static class: java.lang.Class<org.koin.core.registry.ScopeRegistry.Companion>;
						public getRootScopeQualifier(): org.koin.core.qualifier.StringQualifier;
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module scope {
				export class Scope {
					public static class: java.lang.Class<org.koin.core.scope.Scope>;
					public registerCallback(param0: org.koin.core.scope.ScopeCallback): void;
					public unlink(param0: androidNative.Array<org.koin.core.scope.Scope>): void;
					public getOrNull(param0: any, param1: org.koin.core.qualifier.Qualifier, param2: any): any;
					public getId(): string;
					public getProperty(param0: string, param1: any): any;
					public component2(): string;
					public constructor(param0: org.koin.core.qualifier.Qualifier, param1: string, param2: boolean, param3: org.koin.core.Koin);
					public getAll(param0: any): java.util.List<any>;
					public isRoot(): boolean;
					public toString(): string;
					public set_source(param0: any): void;
					public getPropertyOrNull(param0: string): any;
					public close(): void;
					public getLogger(): org.koin.core.logger.Logger;
					public get(param0: any, param1: org.koin.core.qualifier.Qualifier, param2: any): any;
					public hashCode(): number;
					public get_source(): any;
					public component4$koin_core(): org.koin.core.Koin;
					public get_koin(): org.koin.core.Koin;
					public getClosed(): boolean;
					public getProperty(param0: string): any;
					public copy(param0: org.koin.core.qualifier.Qualifier, param1: string, param2: boolean, param3: org.koin.core.Koin): org.koin.core.scope.Scope;
					public getScopeQualifier(): org.koin.core.qualifier.Qualifier;
					public getKoin(): org.koin.core.Koin;
					public equals(param0: any): boolean;
					public get_parameterStack(): any;
					public getScope(param0: string): org.koin.core.scope.Scope;
					public create$koin_core(param0: java.util.List<org.koin.core.scope.Scope>): void;
					public linkTo(param0: androidNative.Array<org.koin.core.scope.Scope>): void;
					public component3(): boolean;
					public component1(): org.koin.core.qualifier.Qualifier;
					public isNotClosed(): boolean;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module scope {
				export class ScopeCallback {
					public static class: java.lang.Class<org.koin.core.scope.ScopeCallback>;
					/**
					 * Constructs a new instance of the org.koin.core.scope.ScopeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScopeClose(param0: org.koin.core.scope.Scope): void;
					});
					public constructor();
					public onScopeClose(param0: org.koin.core.scope.Scope): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module core {
			export module time {
				export class Timer {
					public static class: java.lang.Class<org.koin.core.time.Timer>;
					public static NANO_TO_MILLI: number;
					public getTimeInMillis(): number;
					public constructor();
					public getTimeInNanos(): number;
					public stop(): void;
					public getTimeInSeconds(): number;
				}
				export module Timer {
					export class Companion {
						public static class: java.lang.Class<org.koin.core.time.Timer.Companion>;
						public start(): org.koin.core.time.Timer;
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module dsl {
			export class ScopeDSL {
				public static class: java.lang.Class<org.koin.dsl.ScopeDSL>;
				public constructor(param0: org.koin.core.qualifier.Qualifier, param1: org.koin.core.module.Module);
				public getScopeQualifier(): org.koin.core.qualifier.Qualifier;
				public getModule(): org.koin.core.module.Module;
			}
		}
	}
}

declare module org {
	export module koin {
		export module java {
			export class KoinJavaComponent {
				public static class: java.lang.Class<org.koin.java.KoinJavaComponent>;
				public static INSTANCE: org.koin.java.KoinJavaComponent;
				public static get(param0: java.lang.Class<any>, param1: org.koin.core.qualifier.Qualifier, param2: any): any;
				public static getOrNull(param0: java.lang.Class<any>, param1: org.koin.core.qualifier.Qualifier, param2: any): any;
				public static inject(param0: java.lang.Class<any>): any;
				public static getKoin(): org.koin.core.Koin;
				public static inject(param0: java.lang.Class<any>, param1: org.koin.core.qualifier.Qualifier, param2: any): any;
				public static inject(param0: java.lang.Class<any>, param1: org.koin.core.qualifier.Qualifier): any;
				public static injectOrNull(param0: java.lang.Class<any>, param1: org.koin.core.qualifier.Qualifier): any;
				public static injectOrNull(param0: java.lang.Class<any>): any;
				public static getOrNull(param0: java.lang.Class<any>): any;
				public static injectOrNull(param0: java.lang.Class<any>, param1: org.koin.core.qualifier.Qualifier, param2: any): any;
				public static get(param0: java.lang.Class<any>): any;
				public static get(param0: java.lang.Class<any>, param1: org.koin.core.qualifier.Qualifier): any;
				public static getOrNull(param0: java.lang.Class<any>, param1: org.koin.core.qualifier.Qualifier): any;
			}
		}
	}
}

declare module org {
	export module koin {
		export module mp {
			export class KoinPlatformTimeTools {
				public static class: java.lang.Class<org.koin.mp.KoinPlatformTimeTools>;
				public static INSTANCE: org.koin.mp.KoinPlatformTimeTools;
				public getTimeInNanoSeconds(): number;
			}
		}
	}
}

declare module org {
	export module koin {
		export module mp {
			export class KoinPlatformTools {
				public static class: java.lang.Class<org.koin.mp.KoinPlatformTools>;
				public static INSTANCE: org.koin.mp.KoinPlatformTools;
				public defaultLazyMode(): any;
				public getClassName(param0: any): string;
				public defaultLogger(param0: org.koin.core.logger.Level): org.koin.core.logger.Logger;
				public generateId(): string;
				public getStackTrace(param0: java.lang.Exception): string;
				public defaultContext(): org.koin.core.context.KoinContext;
				public safeHashMap(): java.util.Map;
				public synchronized(param0: any, param1: any): any;
			}
		}
	}
}

//Generics information:
//org.koin.core.definition.BeanDefinition:1
//org.koin.core.definition.Callbacks:1
//org.koin.core.definition.KoinDefinition:1
//org.koin.core.instance.FactoryInstanceFactory:1
//org.koin.core.instance.InstanceFactory:1
//org.koin.core.instance.ScopedInstanceFactory:1
//org.koin.core.instance.SingleInstanceFactory:1

