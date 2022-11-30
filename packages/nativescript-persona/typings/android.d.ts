declare module io {
	export module nstudio {
		export module plugins {
			export module persona {
				export class NSCPersona {
					public static class: java.lang.Class<io.nstudio.plugins.persona.NSCPersona>;
					public accountId(param0: string): io.nstudio.plugins.persona.NSCPersona;
					public sessionToken(param0: string): io.nstudio.plugins.persona.NSCPersona;
					public getCallback(): io.nstudio.plugins.persona.NSCPersona.Callback;
					public referenceId(param0: string): io.nstudio.plugins.persona.NSCPersona;
					public static fromTemplate(param0: string): io.nstudio.plugins.persona.NSCPersona;
					public setCallback(param0: io.nstudio.plugins.persona.NSCPersona.Callback): void;
					public build(): io.nstudio.plugins.persona.NSCPersona;
					public fields(param0: java.util.HashMap<string, any>): io.nstudio.plugins.persona.NSCPersona;
					public fields(param0: com.withpersona.sdk2.inquiry.Fields): io.nstudio.plugins.persona.NSCPersona;
					public static fromTemplateVersion(param0: string): io.nstudio.plugins.persona.NSCPersona;
					public static fromInquiry(param0: string): io.nstudio.plugins.persona.NSCPersona;
					public environment(param0: java.lang.Integer): io.nstudio.plugins.persona.NSCPersona;
					public start(): void;
					public static init(param0: androidx.appcompat.app.AppCompatActivity): void;
				}
				export module NSCPersona {
					export class Callback {
						public static class: java.lang.Class<io.nstudio.plugins.persona.NSCPersona.Callback>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.persona.NSCPersona$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: string, param1: string, param2: string): void;
							onCancel(param0: string, param1: string): void;
							onError(param0: string): void;
						});
						public constructor();
						public onComplete(param0: string, param1: string, param2: string): void;
						public onCancel(param0: string, param1: string): void;
						public onError(param0: string): void;
					}
					export class Companion {
						public static class: java.lang.Class<io.nstudio.plugins.persona.NSCPersona.Companion>;
						public fromInquiry(param0: string): io.nstudio.plugins.persona.NSCPersona;
						public fromTemplateVersion(param0: string): io.nstudio.plugins.persona.NSCPersona;
						public fromTemplate(param0: string): io.nstudio.plugins.persona.NSCPersona;
						public init(param0: androidx.appcompat.app.AppCompatActivity): void;
					}
					export class FieldItem {
						public static class: java.lang.Class<io.nstudio.plugins.persona.NSCPersona.FieldItem>;
						public constructor();
						public constructor(param0: string, param1: any);
						public getValue(): any;
						public getType(): string;
						public setType(param0: string): void;
						public setValue(param0: any): void;
					}
				}
			}
		}
	}
}

//Generics information:









declare module com {
	export module withpersona {
		export module sdk2 {
			export module inquiry {
				export class BuildConfig {
					public static class: java.lang.Class<com.withpersona.sdk2.inquiry.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static INQUIRY_SDK_VERSION: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module withpersona {
		export module sdk2 {
			export module inquiry {
				export class Environment {
					public static class: java.lang.Class<com.withpersona.sdk2.inquiry.Environment>;
					public static PRODUCTION: com.withpersona.sdk2.inquiry.Environment;
					public static SANDBOX: com.withpersona.sdk2.inquiry.Environment;
					public static values(): androidNative.Array<com.withpersona.sdk2.inquiry.Environment>;
					public static valueOf(param0: string): com.withpersona.sdk2.inquiry.Environment;
				}
			}
		}
	}
}

declare module com {
	export module withpersona {
		export module sdk2 {
			export module inquiry {
				export class Fields {
					public static class: java.lang.Class<com.withpersona.sdk2.inquiry.Fields>;
					public getFields$inquiry_public_productionRelease(): java.util.Map<string,com.withpersona.sdk2.inquiry.internal.InquiryField>;
				}
				export module Fields {
					export class Builder {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.Fields.Builder>;
						public constructor();
						public field(param0: string, param1: boolean): com.withpersona.sdk2.inquiry.Fields.Builder;
						public field(param0: string, param1: string): com.withpersona.sdk2.inquiry.Fields.Builder;
						public build(): com.withpersona.sdk2.inquiry.Fields;
						public field(param0: string, param1: number): com.withpersona.sdk2.inquiry.Fields.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module withpersona {
		export module sdk2 {
			export module inquiry {
				export class Inquiry {
					public static class: java.lang.Class<com.withpersona.sdk2.inquiry.Inquiry>;
					public static fromTemplateVersion(param0: string): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
					public static fromTemplate(param0: string): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: com.withpersona.sdk2.inquiry.Fields, param7: java.lang.Integer, param8: com.withpersona.sdk2.inquiry.Environment);
					public static fromInquiry(param0: string): com.withpersona.sdk2.inquiry.InquiryBuilder;
					/** @deprecated */
					public static onActivityResult(param0: globalAndroid.content.Intent): com.withpersona.sdk2.inquiry.InquiryResponse;
					/** @deprecated */
					public start(param0: globalAndroid.app.Activity, param1: number): void;
				}
				export module Inquiry {
					export class Companion {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.Inquiry.Companion>;
						public fromInquiry(param0: string): com.withpersona.sdk2.inquiry.InquiryBuilder;
						/** @deprecated */
						public onActivityResult(param0: globalAndroid.content.Intent): com.withpersona.sdk2.inquiry.InquiryResponse;
						public fromTemplate(param0: string): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
						public fromTemplateVersion(param0: string): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
					}
					export module Companion {
						export class WhenMappings {
							public static class: java.lang.Class<com.withpersona.sdk2.inquiry.Inquiry.Companion.WhenMappings>;
						}
					}
					export class Contract extends androidx.activity.result.contract.ActivityResultContract<com.withpersona.sdk2.inquiry.Inquiry,com.withpersona.sdk2.inquiry.InquiryResponse> {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.Inquiry.Contract>;
						public constructor();
						public parseResult(param0: number, param1: globalAndroid.content.Intent): com.withpersona.sdk2.inquiry.InquiryResponse;
						public createIntent(param0: globalAndroid.content.Context, param1: com.withpersona.sdk2.inquiry.Inquiry): globalAndroid.content.Intent;
					}
				}
			}
		}
	}
}

declare module com {
	export module withpersona {
		export module sdk2 {
			export module inquiry {
				export class InquiryBuilder {
					public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryBuilder>;
					public constructor(param0: string);
					public theme(param0: number): com.withpersona.sdk2.inquiry.InquiryBuilder;
					public sessionToken(param0: string): com.withpersona.sdk2.inquiry.InquiryBuilder;
					public build(): com.withpersona.sdk2.inquiry.Inquiry;
				}
			}
		}
	}
}

declare module com {
	export module withpersona {
		export module sdk2 {
			export module inquiry {
				export abstract class InquiryField {
					public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryField>;
				}
				export module InquiryField {
					export class BooleanField extends com.withpersona.sdk2.inquiry.InquiryField {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryField.BooleanField>;
						public constructor(param0: java.lang.Boolean);
						public getValue(): java.lang.Boolean;
					}
					export class DateField extends com.withpersona.sdk2.inquiry.InquiryField {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryField.DateField>;
						public constructor(param0: java.util.Date);
						public getValue(): java.util.Date;
					}
					export class DatetimeField extends com.withpersona.sdk2.inquiry.InquiryField {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryField.DatetimeField>;
						public constructor(param0: java.util.Date);
						public getValue(): java.util.Date;
					}
					export class FloatField extends com.withpersona.sdk2.inquiry.InquiryField {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryField.FloatField>;
						public constructor(param0: java.lang.Float);
						public getValue(): java.lang.Float;
					}
					export class IntegerField extends com.withpersona.sdk2.inquiry.InquiryField {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryField.IntegerField>;
						public getValue(): java.lang.Integer;
						public constructor(param0: java.lang.Integer);
					}
					export class StringField extends com.withpersona.sdk2.inquiry.InquiryField {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryField.StringField>;
						public getValue(): string;
						public constructor(param0: string);
					}
					export class UnknownField extends com.withpersona.sdk2.inquiry.InquiryField {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryField.UnknownField>;
						public getType(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module withpersona {
		export module sdk2 {
			export module inquiry {
				export abstract class InquiryResponse {
					public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryResponse>;
				}
				export module InquiryResponse {
					export class Cancel extends com.withpersona.sdk2.inquiry.InquiryResponse {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryResponse.Cancel>;
						public getSessionToken(): string;
						public constructor(param0: string, param1: string);
						public getInquiryId(): string;
					}
					export class Complete extends com.withpersona.sdk2.inquiry.InquiryResponse {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryResponse.Complete>;
						public getFields(): java.util.Map<string,com.withpersona.sdk2.inquiry.InquiryField>;
						public constructor(param0: string, param1: string, param2: java.util.Map<string,any>);
						public getInquiryId(): string;
						public getStatus(): string;
					}
					export class Error extends com.withpersona.sdk2.inquiry.InquiryResponse {
						public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryResponse.Error>;
						public getDebugMessage(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module withpersona {
		export module sdk2 {
			export module inquiry {
				export class InquiryTemplateBuilder {
					public static class: java.lang.Class<com.withpersona.sdk2.inquiry.InquiryTemplateBuilder>;
					public constructor(param0: string, param1: string);
					public accountId(param0: string): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
					public fields(param0: com.withpersona.sdk2.inquiry.Fields): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
					public constructor();
					public referenceId(param0: string): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
					public build(): com.withpersona.sdk2.inquiry.Inquiry;
					public fromTemplateId(param0: string): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
					public environment(param0: com.withpersona.sdk2.inquiry.Environment): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
					public theme(param0: number): com.withpersona.sdk2.inquiry.InquiryTemplateBuilder;
				}
			}
		}
	}
}

//Generics information:
