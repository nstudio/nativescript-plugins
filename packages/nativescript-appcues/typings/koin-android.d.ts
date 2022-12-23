declare module androidx {
	export module lifecycle {
		export class StateViewModelFactory<T>  extends androidx.lifecycle.AbstractSavedStateViewModelFactory {
			public static class: java.lang.Class<androidx.lifecycle.StateViewModelFactory<any>>;
			public constructor(param0: org.koin.core.scope.Scope, param1: org.koin.androidx.viewmodel.ViewModelParameter<any>);
			public create(param0: string, param1: java.lang.Class<any>, param2: androidx.lifecycle.SavedStateHandle): androidx.lifecycle.ViewModel;
			public getScope(): org.koin.core.scope.Scope;
			public getParameters(): org.koin.androidx.viewmodel.ViewModelParameter<any>;
		}
	}
}

declare module org {
	export module koin {
		export module android {
			export class BuildConfig {
				public static class: java.lang.Class<org.koin.android.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module koin {
		export module android {
			export module error {
				export class MissingAndroidContextException {
					public static class: java.lang.Class<org.koin.android.error.MissingAndroidContextException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module android {
			export module java {
				export class KoinAndroidApplication {
					public static class: java.lang.Class<org.koin.android.java.KoinAndroidApplication>;
					public static INSTANCE: org.koin.android.java.KoinAndroidApplication;
					public static create(param0: globalAndroid.content.Context): org.koin.core.KoinApplication;
					public static create(param0: globalAndroid.content.Context, param1: org.koin.core.logger.Level): org.koin.core.KoinApplication;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module android {
			export module logger {
				export class AndroidLogger {
					public static class: java.lang.Class<org.koin.android.logger.AndroidLogger>;
					public constructor(param0: org.koin.core.logger.Level);
					public constructor();
					public display(param0: org.koin.core.logger.Level, param1: string): void;
				}
				export module AndroidLogger {
					export class WhenMappings {
						public static class: java.lang.Class<org.koin.android.logger.AndroidLogger.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module android {
			export module scope {
				export class AndroidScopeComponent {
					public static class: java.lang.Class<org.koin.android.scope.AndroidScopeComponent>;
					/**
					 * Constructs a new instance of the org.koin.android.scope.AndroidScopeComponent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getScope(): org.koin.core.scope.Scope;
					});
					public constructor();
					public getScope(): org.koin.core.scope.Scope;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module android {
			export module scope {
				export abstract class ScopeService implements org.koin.android.scope.AndroidScopeComponent {
					public static class: java.lang.Class<org.koin.android.scope.ScopeService>;
					public onCreate(): void;
					public constructor();
					public getScope(): org.koin.core.scope.Scope;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module fragment {
				export module android {
					export class KoinFragmentFactory {
						public static class: java.lang.Class<org.koin.androidx.fragment.android.KoinFragmentFactory>;
						public constructor();
						public getKoin(): org.koin.core.Koin;
						public instantiate(param0: java.lang.ClassLoader, param1: string): androidx.fragment.app.Fragment;
						public constructor(param0: org.koin.core.scope.Scope);
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module scope {
				export class LifecycleScopeDelegate<T>  extends any<androidx.lifecycle.LifecycleOwner,org.koin.core.scope.Scope> {
					public static class: java.lang.Class<org.koin.androidx.scope.LifecycleScopeDelegate<any>>;
					public constructor(param0: androidx.lifecycle.LifecycleOwner, param1: org.koin.core.Koin, param2: any);
					public getValue(param0: androidx.lifecycle.LifecycleOwner, param1: any): org.koin.core.scope.Scope;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module scope {
				export class LifecycleViewModelScopeDelegate extends any<androidx.lifecycle.LifecycleOwner,org.koin.core.scope.Scope> {
					public static class: java.lang.Class<org.koin.androidx.scope.LifecycleViewModelScopeDelegate>;
					public constructor(param0: androidx.activity.ComponentActivity, param1: org.koin.core.Koin, param2: any);
					public getValue(param0: androidx.lifecycle.LifecycleOwner, param1: any): org.koin.core.scope.Scope;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module scope {
				export abstract class RetainedScopeActivity implements org.koin.android.scope.AndroidScopeComponent {
					public static class: java.lang.Class<org.koin.androidx.scope.RetainedScopeActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public getScope(): org.koin.core.scope.Scope;
					public constructor();
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module scope {
				export abstract class ScopeActivity implements org.koin.android.scope.AndroidScopeComponent {
					public static class: java.lang.Class<org.koin.androidx.scope.ScopeActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public getScope(): org.koin.core.scope.Scope;
					public constructor();
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module scope {
				export abstract class ScopeFragment implements org.koin.android.scope.AndroidScopeComponent {
					public static class: java.lang.Class<org.koin.androidx.scope.ScopeFragment>;
					public getScope(): org.koin.core.scope.Scope;
					public constructor();
					public constructor(param0: number);
					public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module scope {
				export class ScopeHandlerViewModel {
					public static class: java.lang.Class<org.koin.androidx.scope.ScopeHandlerViewModel>;
					public constructor();
					public getScope(): org.koin.core.scope.Scope;
					public onCleared(): void;
					public setScope(param0: org.koin.core.scope.Scope): void;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module viewmodel {
				export class ViewModelOwner {
					public static class: java.lang.Class<org.koin.androidx.viewmodel.ViewModelOwner>;
					public constructor(param0: androidx.lifecycle.ViewModelStoreOwner, param1: androidx.savedstate.SavedStateRegistryOwner);
					public getStateRegistry(): androidx.savedstate.SavedStateRegistryOwner;
					public getStoreOwner(): androidx.lifecycle.ViewModelStoreOwner;
				}
				export module ViewModelOwner {
					export class Companion {
						public static class: java.lang.Class<org.koin.androidx.viewmodel.ViewModelOwner.Companion>;
						/** @deprecated */
						public fromAny(param0: any): org.koin.androidx.viewmodel.ViewModelOwner;
						/** @deprecated */
						public from(param0: androidx.lifecycle.ViewModelStoreOwner): org.koin.androidx.viewmodel.ViewModelOwner;
						/** @deprecated */
						public from(param0: androidx.lifecycle.ViewModelStoreOwner, param1: androidx.savedstate.SavedStateRegistryOwner): org.koin.androidx.viewmodel.ViewModelOwner;
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module viewmodel {
				export class ViewModelParameter<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.koin.androidx.viewmodel.ViewModelParameter<any>>;
					public getClazz(): any;
					public getViewModelStoreOwner(): androidx.lifecycle.ViewModelStoreOwner;
					public getQualifier(): org.koin.core.qualifier.Qualifier;
					public constructor(param0: any, param1: org.koin.core.qualifier.Qualifier, param2: any, param3: any, param4: androidx.lifecycle.ViewModelStoreOwner, param5: androidx.savedstate.SavedStateRegistryOwner);
					public getState(): any;
					public getParameters(): any;
					public getRegistryOwner(): androidx.savedstate.SavedStateRegistryOwner;
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module viewmodel {
				export module factory {
					export class DefaultViewModelFactory<T>  extends androidx.lifecycle.ViewModelProvider.Factory {
						public static class: java.lang.Class<org.koin.androidx.viewmodel.factory.DefaultViewModelFactory<any>>;
						public create(param0: java.lang.Class<any>): androidx.lifecycle.ViewModel;
						public getScope(): org.koin.core.scope.Scope;
						public getParameters(): org.koin.androidx.viewmodel.ViewModelParameter<any>;
						public constructor(param0: org.koin.core.scope.Scope, param1: org.koin.androidx.viewmodel.ViewModelParameter<any>);
					}
				}
			}
		}
	}
}

declare module org {
	export module koin {
		export module androidx {
			export module viewmodel {
				export module factory {
					export class KoinViewModelFactory {
						public static class: java.lang.Class<org.koin.androidx.viewmodel.factory.KoinViewModelFactory>;
						public create(param0: java.lang.Class<any>, param1: androidx.lifecycle.viewmodel.CreationExtras): androidx.lifecycle.ViewModel;
						public constructor(param0: any, param1: org.koin.core.scope.Scope, param2: org.koin.core.qualifier.Qualifier, param3: any);
					}
				}
			}
		}
	}
}