declare module io {
	export module nstudio {
		export module plugins {
			export module auth0 {
				export class Auth0 {
					public static class: java.lang.Class<io.nstudio.plugins.auth0.Auth0>;
					public static createCredentials(accessToken: string, tokenType: string, idToken: string, refreshToken: string, expiresIn: number, scope: string, recoveryCode: string): com.auth0.android.result.Credentials;
					public getAuth0(): com.auth0.android.Auth0;
					public static authentication(context: globalAndroid.content.Context): io.nstudio.plugins.auth0.Authentication;
					public static getInstance(context: globalAndroid.content.Context): io.nstudio.plugins.auth0.Auth0;
					public static authentication(clientId: string, domain: string): io.nstudio.plugins.auth0.Authentication;
					public constructor(auth0: com.auth0.android.Auth0);
					public webAuth(): io.nstudio.plugins.auth0.WebAuth;
					public static webAuth(clientId: string, domain: string): io.nstudio.plugins.auth0.WebAuth;
					public static decodeJWT(token: string): io.nstudio.plugins.auth0.DecodedJWT;
					public static credentialsManager(context: globalAndroid.content.Context, authentication: io.nstudio.plugins.auth0.Authentication): io.nstudio.plugins.auth0.CredentialsManager;
					public authentication(): io.nstudio.plugins.auth0.Authentication;
					public static webAuth(context: globalAndroid.content.Context): io.nstudio.plugins.auth0.WebAuth;
				}
				export module Auth0 {
					export class Companion {
						public static class: java.lang.Class<io.nstudio.plugins.auth0.Auth0.Companion>;
						public getInstance(context: globalAndroid.content.Context): io.nstudio.plugins.auth0.Auth0;
						public authentication(clientId: string, domain: string): io.nstudio.plugins.auth0.Authentication;
						public createCredentials(field: string, this_: string, accessToken: string, tokenType: string, idToken: number, refreshToken: string, expiresIn: string): com.auth0.android.result.Credentials;
						public webAuth(context: globalAndroid.content.Context): io.nstudio.plugins.auth0.WebAuth;
						public webAuth(clientId: string, domain: string): io.nstudio.plugins.auth0.WebAuth;
						public authentication(context: globalAndroid.content.Context): io.nstudio.plugins.auth0.Authentication;
						public decodeJWT(token: string): io.nstudio.plugins.auth0.DecodedJWT;
						public credentialsManager(this_: globalAndroid.content.Context, context: io.nstudio.plugins.auth0.Authentication): io.nstudio.plugins.auth0.CredentialsManager;
					}
				}
			}
		}
	}
}

declare module io {
	export module nstudio {
		export module plugins {
			export module auth0 {
				export class Authentication {
					public static class: java.lang.Class<io.nstudio.plugins.auth0.Authentication>;
					public signup(email: string, password: string, username: string, connection: string, userMetadata: java.util.Map<string, string>, callback: any): void;
					public userInfo(value: string, value: java.util.Map<string, string>, it: any): void;
					public revoke(value: string, value: java.util.Map<string, string>, it: any): void;
					public constructor(authentication: com.auth0.android.authentication.AuthenticationAPIClient);
					public refreshToken(value: string, scope?: string, audience?: string, value: java.util.Map<string, string>, it: any): void;
					public getAuthentication(): com.auth0.android.authentication.AuthenticationAPIClient;
				}
			}
		}
	}
}

declare module io {
	export module nstudio {
		export module plugins {
			export module auth0 {
				export class CredentialsManager {
					public static class: java.lang.Class<io.nstudio.plugins.auth0.CredentialsManager>;
					public getCredentialsManager(): com.auth0.android.authentication.storage.CredentialsManager;
					public hasValid(minTtL: number): boolean;
					public clear(): boolean;
					public user(callback: any): void;
					public store(this_: com.auth0.android.result.Credentials): boolean;
					public canRenew(): boolean;
					public constructor(credentialsManager: com.auth0.android.authentication.storage.CredentialsManager);
					public credentials(scope: string, minTtl: number, parameters: java.util.Map<string, string>, forceRefresh: boolean, callback: any): void;
				}
			}
		}
	}
}

declare module io {
	export module nstudio {
		export module plugins {
			export module auth0 {
				export class DecodedJWT {
					public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT>;
					public getAuthenticationTime(): java.util.Date;
					public getNonce(): string;
					public getExpiresAt(): java.util.Date;
					public getNotBefore(): java.util.Date;
					public constructor(it: string);
					public getAuthorizedParty(): string;
					public getIdentifier(): string;
					public getSubject(): string;
					public getKeyId(): string;
					public getIssuedAt(): java.util.Date;
					public getOrganizationId(): string;
					public getAudience(): java.util.List<string>;
					public getBody(): java.util.Map<string, any>;
					public getIssuer(): string;
					public getParts(): androidNative.Array<string>;
					public getAlgorithm(): string;
					public getOrganizationName(): string;
				}
				export module DecodedJWT {
					export class Companion {
						public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT.Companion>;
						public decodeBase64(this_: string): string;
						public splitToken(thisCollection$iv: string): androidNative.Array<string>;
					}
					export class CredentialsDeserializer extends com.google.gson.JsonDeserializer<com.auth0.android.result.Credentials> {
						public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT.CredentialsDeserializer>;
						public constructor();
						public deserialize(idToken: com.google.gson.JsonElement, accessToken: java.lang.reflect.Type, type: com.google.gson.JsonDeserializationContext): com.auth0.android.result.Credentials;
						public getCurrentTimeInMillis(): number;
						public createCredentials(field: string, this_: string, idToken: string, accessToken: string, type: java.util.Date, refreshToken: string, expiresAt: string): com.auth0.android.result.Credentials;
					}
					export class GsonProvider {
						public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT.GsonProvider>;
						public static INSTANCE: io.nstudio.plugins.auth0.DecodedJWT.GsonProvider;
						public getGson$nativescript_auth0_release(): com.google.gson.Gson;
						public static formatDate(date: java.util.Date): string;
					}
					export class JsonRequired {
						public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT.JsonRequired>;
						/**
						 * Constructs a new instance of the io.nstudio.plugins.auth0.DecodedJWT$JsonRequired interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
					export class JsonRequiredTypeAdapterFactory {
						public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT.JsonRequiredTypeAdapterFactory>;
						public constructor();
						public create(this_: com.google.gson.Gson, gson: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
					}
					export class JwksDeserializer extends com.google.gson.JsonDeserializer<java.util.Map<string, any>> {
						public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT.JwksDeserializer>;
						public constructor();
						public deserialize(modulus: com.google.gson.JsonElement, exponent: java.lang.reflect.Type, pub: com.google.gson.JsonDeserializationContext): java.util.Map<string, java.security.PublicKey>;
					}
					export module JwksDeserializer {
						export class Companion {
							public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT.JwksDeserializer.Companion>;
						}
					}
					export class UserProfileDeserializer extends com.google.gson.JsonDeserializer<com.auth0.android.result.UserProfile> {
						public static class: java.lang.Class<io.nstudio.plugins.auth0.DecodedJWT.UserProfileDeserializer>;
						public constructor();
						public deserialize(id: com.google.gson.JsonElement, name: java.lang.reflect.Type, nickname: com.google.gson.JsonDeserializationContext): com.auth0.android.result.UserProfile;
					}
				}
			}
		}
	}
}

declare module io {
	export module nstudio {
		export module plugins {
			export module auth0 {
				export class WebAuth {
					public static class: java.lang.Class<io.nstudio.plugins.auth0.WebAuth>;
					public getAuth0(): com.auth0.android.Auth0;
					public constructor(auth0: com.auth0.android.Auth0);
					public clearSession(it: globalAndroid.content.Context, value: string, it: boolean, logout: string, this_: any): void;
					public start(it: globalAndroid.content.Context, value: string, it: string, value: string, it: string, value: any): void;
				}
			}
		}
	}
}

//Generics information:
