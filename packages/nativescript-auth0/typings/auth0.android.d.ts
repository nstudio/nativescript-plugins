declare module com {
	export module auth0 {
		export module android {
			export class Auth0 {
				public static class: java.lang.Class<com.auth0.android.Auth0>;
				public getConfigurationDomain(): string;
				public getAuth0UserAgent(): com.auth0.android.util.Auth0UserAgent;
				public getAuthorizeUrl(): string;
				public getClientId(): string;
				public getNetworkingClient(): com.auth0.android.request.NetworkingClient;
				public static getInstance(clientId: string, domain: string): com.auth0.android.Auth0;
				public static getInstance(clientId: string, domain: string, configurationDomain: string): com.auth0.android.Auth0;
				public setAuth0UserAgent(value: com.auth0.android.util.Auth0UserAgent): void;
				public static getInstance(context: globalAndroid.content.Context): com.auth0.android.Auth0;
				public getDomainUrl(): string;
				public getConfigurationUrl(): string;
				public getLogoutUrl(): string;
				public getExecutor(): java.util.concurrent.Executor;
				public getDomain(): string;
				public setNetworkingClient(value: com.auth0.android.request.NetworkingClient): void;
			}
			export module Auth0 {
				export class Companion {
					public static class: java.lang.Class<com.auth0.android.Auth0.Companion>;
					public getInstance(domain: globalAndroid.content.Context): com.auth0.android.Auth0;
					public getInstance(clientId: string, domain: string): com.auth0.android.Auth0;
					public getInstance(domainUrl: string, this_: string, clientId: string): com.auth0.android.Auth0;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export class Auth0Exception {
				public static class: java.lang.Class<com.auth0.android.Auth0Exception>;
				public static UNKNOWN_ERROR: string = 'a0.sdk.internal_error.unknown';
				public static NON_JSON_ERROR: string = 'a0.sdk.internal_error.plain';
				public static EMPTY_BODY_ERROR: string = 'a0.sdk.internal_error.empty';
				public static EMPTY_RESPONSE_BODY_DESCRIPTION: string = 'Empty response body';
				public constructor(message: string, cause: java.lang.Throwable);
			}
			export module Auth0Exception {
				export class Companion {
					public static class: java.lang.Class<com.auth0.android.Auth0Exception.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export class NetworkErrorException extends com.auth0.android.Auth0Exception {
				public static class: java.lang.Class<com.auth0.android.NetworkErrorException>;
				public constructor(cause: java.lang.Throwable);
				public constructor(message: string, cause: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module annotation {
				export class ExperimentalAuth0Api {
					public static class: java.lang.Class<com.auth0.android.annotation.ExperimentalAuth0Api>;
					/**
					 * Constructs a new instance of the com.auth0.android.annotation.ExperimentalAuth0Api interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module auth0 {
				export class BuildConfig {
					public static class: java.lang.Class<com.auth0.android.auth0.BuildConfig>;
					public static DEBUG: boolean = 0;
					public static LIBRARY_PACKAGE_NAME: string = 'com.auth0.android.auth0';
					public static BUILD_TYPE: string = 'release';
					public static LIBRARY_NAME: string = 'Auth0.Android';
					public static VERSION_NAME: string = '3.8.0';
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class AuthenticationAPIClient {
					public static class: java.lang.Class<com.auth0.android.authentication.AuthenticationAPIClient>;
					public createUser(it: string, url: string, parameters: string, databaseUserAdapter: string, post: java.util.Map<string, string>): com.auth0.android.request.Request<com.auth0.android.result.DatabaseUser, com.auth0.android.authentication.AuthenticationException>;
					public passwordlessWithSMS(phoneNumber: string, passwordlessType: com.auth0.android.authentication.PasswordlessType): com.auth0.android.request.Request<java.lang.Void, com.auth0.android.authentication.AuthenticationException>;
					public fetchJsonWebKeys(): com.auth0.android.request.Request<java.util.Map<string, java.security.PublicKey>, com.auth0.android.authentication.AuthenticationException>;
					public signinWithPasskey(it: string, credentials: com.auth0.android.request.PublicKeyCredentials, value: string): com.auth0.android.request.AuthenticationRequest;
					public signUp(authenticationRequest: string, this_: string, email: string, password: string, username: java.util.Map<string, string>): com.auth0.android.request.SignUpRequest;
					public loginWithOOB(this_: string, mfaToken: string, oobCode: string): com.auth0.android.request.AuthenticationRequest;
					public loginWithEmail(email: string, verificationCode: string): com.auth0.android.request.AuthenticationRequest;
					public multifactorChallenge(url: string, challengeAdapter: string, this_: string): com.auth0.android.request.Request<com.auth0.android.result.Challenge, com.auth0.android.authentication.AuthenticationException>;
					public constructor(this_: com.auth0.android.Auth0, auth0: com.auth0.android.request.internal.RequestFactory<com.auth0.android.authentication.AuthenticationException>, factory: com.google.gson.Gson);
					public signupWithPasskey(it: com.auth0.android.request.UserData, value: string): com.auth0.android.request.Request<com.auth0.android.result.PasskeyRegistrationChallenge, com.auth0.android.authentication.AuthenticationException>;
					public resetPassword(parameters: string, this_: string): com.auth0.android.request.Request<java.lang.Void, com.auth0.android.authentication.AuthenticationException>;
					public login(this_: string, usernameOrEmail: string): com.auth0.android.request.AuthenticationRequest;
					public login(this_: string, usernameOrEmail: string, password: string): com.auth0.android.request.AuthenticationRequest;
					public loginWithOTP(this_: string, mfaToken: string): com.auth0.android.request.AuthenticationRequest;
					public loginWithEmail(this_: string, email: string, verificationCode: string): com.auth0.android.request.AuthenticationRequest;
					public passwordlessWithSMS(this_: string, phoneNumber: com.auth0.android.authentication.PasswordlessType, passwordlessType: string): com.auth0.android.request.Request<java.lang.Void, com.auth0.android.authentication.AuthenticationException>;
					public getProfileAfter(authenticationRequest: com.auth0.android.request.AuthenticationRequest): com.auth0.android.request.ProfileRequest;
					public createUser(email: string, password: string, connection: string): com.auth0.android.request.Request<com.auth0.android.result.DatabaseUser, com.auth0.android.authentication.AuthenticationException>;
					public passwordlessWithEmail(email: string, passwordlessType: com.auth0.android.authentication.PasswordlessType): com.auth0.android.request.Request<java.lang.Void, com.auth0.android.authentication.AuthenticationException>;
					public signinWithPasskey(this_: string, authSession: string, authResponse: string): com.auth0.android.request.AuthenticationRequest;
					public revokeToken(url: string): com.auth0.android.request.Request<java.lang.Void, com.auth0.android.authentication.AuthenticationException>;
					public passwordlessWithEmail(this_: string, email: com.auth0.android.authentication.PasswordlessType, passwordlessType: string): com.auth0.android.request.Request<java.lang.Void, com.auth0.android.authentication.AuthenticationException>;
					public passkeyChallenge(it: string): com.auth0.android.request.Request<com.auth0.android.result.PasskeyChallenge, com.auth0.android.authentication.AuthenticationException>;
					public getBaseURL(): string;
					public token(url: string, credentialsAdapter: string, request: string): com.auth0.android.request.Request<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>;
					public getClientId(): string;
					public constructor(auth0: com.auth0.android.Auth0);
					public createUser(email: string, password: string, username: string, connection: string): com.auth0.android.request.Request<com.auth0.android.result.DatabaseUser, com.auth0.android.authentication.AuthenticationException>;
					public loginWithPhoneNumber(phoneNumber: string, verificationCode: string): com.auth0.android.request.AuthenticationRequest;
					public ssoExchange(url$iv: string): com.auth0.android.request.Request<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.AuthenticationException>;
					public loginWithNativeSocialToken(token: string, tokenType: string): com.auth0.android.request.AuthenticationRequest;
					public loginWithRecoveryCode(this_: string, mfaToken: string): com.auth0.android.request.AuthenticationRequest;
					public userInfo(accessToken: string): com.auth0.android.request.Request<com.auth0.android.result.UserProfile, com.auth0.android.authentication.AuthenticationException>;
					public renewAuth(it: string, value: string, it: string): com.auth0.android.request.Request<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>;
					public signUp(email: string, password: string, username: string, connection: string): com.auth0.android.request.SignUpRequest;
					public signUp(email: string, password: string, connection: string): com.auth0.android.request.SignUpRequest;
					public loginWithPhoneNumber(this_: string, phoneNumber: string, verificationCode: string): com.auth0.android.request.AuthenticationRequest;
					public customTokenExchange(subjectTokenType: string, subjectToken: string): com.auth0.android.request.AuthenticationRequest;
				}
				export module AuthenticationAPIClient {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.authentication.AuthenticationAPIClient.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class AuthenticationException extends com.auth0.android.Auth0Exception {
					public static class: java.lang.Class<com.auth0.android.authentication.AuthenticationException>;
					public static ERROR_VALUE_AUTHENTICATION_CANCELED: string = 'a0.authentication_canceled';
					public static ERROR_KEY_URI_NULL: string = 'a0.auth.authorize_uri';
					public static ERROR_VALUE_AUTHORIZE_URI_INVALID: string = 'Authorization URI is received as null from the intent';
					public static ERROR_KEY_CT_OPTIONS_NULL: string = 'a0.auth.ct_options';
					public static ERROR_VALUE_CT_OPTIONS_INVALID: string = 'Custom tab options are received as null from the intent';
					public getStatusCode(): number;
					public isMultifactorTokenInvalid(): boolean;
					public isInvalidCredentials(): boolean;
					public isInvalidConfiguration(): boolean;
					public isRuleError(): boolean;
					public constructor(message: string, cause: java.lang.Exception);
					public isPKCENotAvailable(): boolean;
					public isMultifactorCodeInvalid(): boolean;
					public isCanceled(): boolean;
					public getCode(): string;
					public isPasswordLeaked(): boolean;
					public isPasswordNotStrongEnough(): boolean;
					/** @deprecated */
					public isAuthenticationCanceled(): boolean;
					public constructor(code: string, description: string, cause: java.lang.Exception);
					public isIdTokenValidationError(): boolean;
					public constructor(payload: string, statusCode: number);
					public isMultifactorRequired(): boolean;
					public isInvalidAuthorizeURL(): boolean;
					public constructor(values: java.util.Map<string, any>);
					public isInvalidRefreshToken(): boolean;
					public isRefreshTokenDeleted(): boolean;
					public isVerificationRequired(): boolean;
					public getValue(key: string): any;
					public constructor(codeValue: java.util.Map<string, any>, description: number);
					public isTooManyAttempts(): boolean;
					public isPasswordAlreadyUsed(): boolean;
					public isAccessDenied(): boolean;
					public isNetworkError(): boolean;
					public isLoginRequired(): boolean;
					public constructor(code: string, description: string);
					public isMultifactorEnrollRequired(): boolean;
					public getDescription(): string;
					public constructor(message: string, cause: java.lang.Throwable);
					public isBrowserAppNotAvailable(): boolean;
				}
				export module AuthenticationException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.authentication.AuthenticationException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class ParameterBuilder {
					public static class: java.lang.Class<com.auth0.android.authentication.ParameterBuilder>;
					public static GRANT_TYPE_REFRESH_TOKEN: string = 'refresh_token';
					public static GRANT_TYPE_PASSWORD: string = 'password';
					public static GRANT_TYPE_PASSWORD_REALM: string = 'http://auth0.com/oauth/grant-type/password-realm';
					public static GRANT_TYPE_AUTHORIZATION_CODE: string = 'authorization_code';
					public static GRANT_TYPE_MFA_OTP: string = 'http://auth0.com/oauth/grant-type/mfa-otp';
					public static GRANT_TYPE_MFA_OOB: string = 'http://auth0.com/oauth/grant-type/mfa-oob';
					public static GRANT_TYPE_MFA_RECOVERY_CODE: string = 'http://auth0.com/oauth/grant-type/mfa-recovery-code';
					public static GRANT_TYPE_PASSWORDLESS_OTP: string = 'http://auth0.com/oauth/grant-type/passwordless/otp';
					public static GRANT_TYPE_TOKEN_EXCHANGE: string = 'urn:ietf:params:oauth:grant-type:token-exchange';
					public static GRANT_TYPE_PASSKEY: string = 'urn:okta:params:oauth:grant-type:webauthn';
					public static SCOPE_OFFLINE_ACCESS: string = 'openid offline_access';
					public static SCOPE_KEY: string = 'scope';
					public static REFRESH_TOKEN_KEY: string = 'refresh_token';
					public static CONNECTION_KEY: string = 'connection';
					public static REALM_KEY: string = 'realm';
					public static SEND_KEY: string = 'send';
					public static CLIENT_ID_KEY: string = 'client_id';
					public static GRANT_TYPE_KEY: string = 'grant_type';
					public static AUDIENCE_KEY: string = 'audience';
					public setRefreshToken(refreshToken: string): com.auth0.android.authentication.ParameterBuilder;
					public static newBuilder(parameters: java.util.Map<string, string>): com.auth0.android.authentication.ParameterBuilder;
					public setClientId(clientId: string): com.auth0.android.authentication.ParameterBuilder;
					public asDictionary(): java.util.Map<string, string>;
					public static newAuthenticationBuilder(): com.auth0.android.authentication.ParameterBuilder;
					public setGrantType(grantType: string): com.auth0.android.authentication.ParameterBuilder;
					public setSend(passwordlessType: com.auth0.android.authentication.PasswordlessType): com.auth0.android.authentication.ParameterBuilder;
					public setRealm(realm: string): com.auth0.android.authentication.ParameterBuilder;
					public addAll(it: java.util.Map<string, string>): com.auth0.android.authentication.ParameterBuilder;
					public setScope(scope: string): com.auth0.android.authentication.ParameterBuilder;
					public clearAll(): com.auth0.android.authentication.ParameterBuilder;
					public static newBuilder(): com.auth0.android.authentication.ParameterBuilder;
					public setAudience(audience: string): com.auth0.android.authentication.ParameterBuilder;
					public setConnection(connection: string): com.auth0.android.authentication.ParameterBuilder;
					public set(key: string, value: string): com.auth0.android.authentication.ParameterBuilder;
				}
				export module ParameterBuilder {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.authentication.ParameterBuilder.Companion>;
						public newBuilder(parameters: java.util.Map<string, string>): com.auth0.android.authentication.ParameterBuilder;
						public newBuilder(): com.auth0.android.authentication.ParameterBuilder;
						public newAuthenticationBuilder(): com.auth0.android.authentication.ParameterBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class PasswordStrengthErrorParser {
					public static class: java.lang.Class<com.auth0.android.authentication.PasswordStrengthErrorParser>;
					public getDescription(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class PasswordlessType {
					public static class: java.lang.Class<com.auth0.android.authentication.PasswordlessType>;
					public static WEB_LINK: com.auth0.android.authentication.PasswordlessType;
					public static ANDROID_LINK: com.auth0.android.authentication.PasswordlessType;
					public static CODE: com.auth0.android.authentication.PasswordlessType;
					public getValue(): string;
					public static values(): androidNative.Array<com.auth0.android.authentication.PasswordlessType>;
					public static valueOf(name: string): com.auth0.android.authentication.PasswordlessType;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class AuthenticationLevel {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.AuthenticationLevel>;
						public static STRONG: com.auth0.android.authentication.storage.AuthenticationLevel;
						public static WEAK: com.auth0.android.authentication.storage.AuthenticationLevel;
						public static DEVICE_CREDENTIAL: com.auth0.android.authentication.storage.AuthenticationLevel;
						public static values(): androidNative.Array<com.auth0.android.authentication.storage.AuthenticationLevel>;
						public getValue(): number;
						public static valueOf(value: string): com.auth0.android.authentication.storage.AuthenticationLevel;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export abstract class BaseCredentialsManager {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.BaseCredentialsManager>;
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: boolean, param4: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public setClock(clock: com.auth0.android.util.Clock): void;
						public getAuthenticationClient(): com.auth0.android.authentication.AuthenticationAPIClient;
						public hasScopeChanged(thisCollection$iv: string, $this$toTypedArray$iv: string): boolean;
						public saveCredentials(param0: com.auth0.android.result.Credentials): void;
						public getSsoCredentials(param0: java.util.Map<string, string>, param1: com.auth0.android.callback.Callback<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getSsoCredentials(param0: com.auth0.android.callback.Callback<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getCurrentTimeInMillis$auth0_release(): number;
						public getCredentials(param0: string, param1: number, param2: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public willExpire(this_: number, expiresAt: number): boolean;
						public hasValidCredentials(param0: number): boolean;
						public getApiCredentials(param0: string, param1: string, param2: number, param3: java.util.Map<string, string>, param4: java.util.Map<string, string>, param5: com.auth0.android.callback.Callback<com.auth0.android.result.APICredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getStorage(): com.auth0.android.authentication.storage.Storage;
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public hasValidCredentials(): boolean;
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: java.util.Map<string, string>, param4: boolean, param5: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public saveApiCredentials(param0: com.auth0.android.result.APICredentials, param1: string): void;
						public clearCredentials(): void;
						public hasExpired(expiresAt: number): boolean;
						public constructor(authenticationClient: com.auth0.android.authentication.AuthenticationAPIClient, storage: com.auth0.android.authentication.storage.Storage, jwtDecoder: com.auth0.android.authentication.storage.JWTDecoder);
						public getCredentials(param0: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public clearApiCredentials(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class ClockImpl extends com.auth0.android.util.Clock {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.ClockImpl>;
						public getCurrentTimeMillis(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class CredentialsManager extends com.auth0.android.authentication.storage.BaseCredentialsManager {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.CredentialsManager>;
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: boolean, param4: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public saveApiCredentials(it: com.auth0.android.result.APICredentials, this_: string): void;
						public getCredentials(scope: string, minTtl: number, parameters: java.util.Map<string, string>, forceRefresh: boolean, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getCredentials(param0: string, param1: number, param2: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getApiCredentials(audience: string, scope: string, minTtl: number, parameters: java.util.Map<string, string>, headers: java.util.Map<string, string>, callback: com.auth0.android.callback.Callback<com.auth0.android.result.APICredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public hasValidCredentials(param0: number): boolean;
						public getCredentials(scope: string, minTtl: number, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public saveCredentials(credentials: com.auth0.android.result.Credentials): void;
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: java.util.Map<string, string>, param4: boolean, param5: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public saveSsoCredentials$auth0_release(this_: com.auth0.android.result.SSOCredentials): void;
						public hasValidCredentials(refreshToken: number): boolean;
						public getSsoCredentials(param0: java.util.Map<string, string>, param1: com.auth0.android.callback.Callback<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getCredentials(callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public clearApiCredentials(audience: string): void;
						public constructor(authenticationClient: com.auth0.android.authentication.AuthenticationAPIClient, storage: com.auth0.android.authentication.storage.Storage);
						public hasValidCredentials(): boolean;
						public getSsoCredentials(callback: com.auth0.android.callback.Callback<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getCredentials(scope: string, minTtl: number, parameters: java.util.Map<string, string>, headers: java.util.Map<string, string>, forceRefresh: boolean, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public constructor(authenticationClient: com.auth0.android.authentication.AuthenticationAPIClient, storage: com.auth0.android.authentication.storage.Storage, jwtDecoder: com.auth0.android.authentication.storage.JWTDecoder, serialExecutor: java.util.concurrent.Executor);
						public getCredentials(scope: string, minTtl: number, parameters: java.util.Map<string, string>, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public clearCredentials(): void;
						public constructor(authenticationClient: com.auth0.android.authentication.AuthenticationAPIClient, storage: com.auth0.android.authentication.storage.Storage, jwtDecoder: com.auth0.android.authentication.storage.JWTDecoder);
						public getSsoCredentials(parameters: java.util.Map<string, string>, callback: com.auth0.android.callback.Callback<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public recreateCredentials$auth0_release(idToken: string, accessToken: string, tokenType: string, refreshToken: string, expiresAt: java.util.Date, scope: string): com.auth0.android.result.Credentials;
					}
					export module CredentialsManager {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.authentication.storage.CredentialsManager.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class CredentialsManagerException extends com.auth0.android.Auth0Exception {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.CredentialsManagerException>;
						public isDeviceIncompatible(): boolean;
						public equals(other: any): boolean;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(code: com.auth0.android.authentication.storage.CredentialsManagerException.Code, cause: java.lang.Throwable);
						public hashCode(): number;
						public getRefreshedCredentials(): com.auth0.android.result.Credentials;
						public setRefreshedCredentials$auth0_release(value: com.auth0.android.result.Credentials): void;
						public constructor(code: com.auth0.android.authentication.storage.CredentialsManagerException.Code, message: string, cause: java.lang.Throwable);
					}
					export module CredentialsManagerException {
						export class Code {
							public static class: java.lang.Class<com.auth0.android.authentication.storage.CredentialsManagerException.Code>;
							public static INVALID_CREDENTIALS: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static NO_CREDENTIALS: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static NO_REFRESH_TOKEN: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static RENEW_FAILED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static STORE_FAILED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static REVOKE_FAILED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static LARGE_MIN_TTL: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static INCOMPATIBLE_DEVICE: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static CRYPTO_EXCEPTION: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_NO_ACTIVITY: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_STATUS_UNKNOWN: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_UNSUPPORTED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_HW_UNAVAILABLE: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_NONE_ENROLLED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_NO_HARDWARE: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_DEVICE_CREDENTIAL_NOT_AVAILABLE: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_STRONG_AND_DEVICE_CREDENTIAL_NOT_AVAILABLE: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_AUTHENTICATION_CHECK_FAILED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_NO_DEVICE_CREDENTIAL: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_NEGATIVE_BUTTON: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_HW_NOT_PRESENT: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_NO_BIOMETRICS: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_USER_CANCELED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_LOCKOUT_PERMANENT: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_VENDOR: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_LOCKOUT: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_CANCELED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_NO_SPACE: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_TIMEOUT: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_ERROR_UNABLE_TO_PROCESS: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRICS_INVALID_USER: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static BIOMETRIC_AUTHENTICATION_FAILED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static NO_NETWORK: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static API_ERROR: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static SSO_EXCHANGE_FAILED: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static UNKNOWN_ERROR: com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static valueOf(value: string): com.auth0.android.authentication.storage.CredentialsManagerException.Code;
							public static values(): androidNative.Array<com.auth0.android.authentication.storage.CredentialsManagerException.Code>;
						}
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.authentication.storage.CredentialsManagerException.Companion>;
							public getBIOMETRIC_ERROR_STRONG_AND_DEVICE_CREDENTIAL_NOT_AVAILABLE(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_NO_HARDWARE(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_SECURITY_UPDATE_REQUIRED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_UNABLE_TO_PROCESS(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_NEGATIVE_BUTTON(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_HW_NOT_PRESENT(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getSSO_EXCHANGE_FAILED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_LOCKOUT_PERMANENT(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRICS_INVALID_USER(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_NO_DEVICE_CREDENTIAL(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_NO_ACTIVITY(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getAPI_ERROR(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_USER_CANCELED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getUNKNOWN_ERROR(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getNO_CREDENTIALS(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getCRYPTO_EXCEPTION(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_NONE_ENROLLED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_NO_SPACE(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getLARGE_MIN_TTL(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getINCOMPATIBLE_DEVICE(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_HW_UNAVAILABLE(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_STATUS_UNKNOWN(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getINVALID_CREDENTIALS(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_AUTHENTICATION_FAILED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getNO_REFRESH_TOKEN(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getSTORE_FAILED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_VENDOR(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_NO_BIOMETRICS(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_DEVICE_CREDENTIAL_NOT_AVAILABLE(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_TIMEOUT(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_CANCELED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getREVOKE_FAILED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_AUTHENTICATION_CHECK_FAILED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_LOCKOUT(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getNO_NETWORK(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getBIOMETRIC_ERROR_UNSUPPORTED(): com.auth0.android.authentication.storage.CredentialsManagerException;
							public getRENEW_FAILED(): com.auth0.android.authentication.storage.CredentialsManagerException;
						}
						export module Companion {
							export class WhenMappings {
								public static class: java.lang.Class<com.auth0.android.authentication.storage.CredentialsManagerException.Companion.WhenMappings>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class CryptoException {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.CryptoException>;
						public constructor(message: string, cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class CryptoUtil {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.CryptoUtil>;
						public constructor(context: globalAndroid.content.Context, storage: com.auth0.android.authentication.storage.Storage, keyAlias: string);
						public decrypt(cipher: androidNative.Array<number>): androidNative.Array<number>;
						public encrypt(cipher: androidNative.Array<number>): androidNative.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class DefaultLocalAuthenticationManagerFactory extends com.auth0.android.authentication.storage.LocalAuthenticationManagerFactory {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.DefaultLocalAuthenticationManagerFactory>;
						public constructor();
						public create(activity: androidx.fragment.app.FragmentActivity, authenticationOptions: com.auth0.android.authentication.storage.LocalAuthenticationOptions, resultCallback: com.auth0.android.callback.Callback<java.lang.Boolean, com.auth0.android.authentication.storage.CredentialsManagerException>): com.auth0.android.authentication.storage.LocalAuthenticationManager;
						public create(param0: androidx.fragment.app.FragmentActivity, param1: com.auth0.android.authentication.storage.LocalAuthenticationOptions, param2: com.auth0.android.callback.Callback<java.lang.Boolean, com.auth0.android.authentication.storage.CredentialsManagerException>): com.auth0.android.authentication.storage.LocalAuthenticationManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class IncompatibleDeviceException extends com.auth0.android.authentication.storage.CryptoException {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.IncompatibleDeviceException>;
						public constructor(message: string, cause: java.lang.Throwable);
						public constructor(cause: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class JWTDecoder {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.JWTDecoder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class LocalAuthenticationManager {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.LocalAuthenticationManager>;
						public onAuthenticationFailed(): void;
						public getResultCallback$auth0_release(): com.auth0.android.callback.Callback<java.lang.Boolean, com.auth0.android.authentication.storage.CredentialsManagerException>;
						public onAuthenticationError(errorCode: number, errString: string): void;
						public onAuthenticationSucceeded(result: androidx.biometric.BiometricPrompt.AuthenticationResult): void;
						public constructor(activity: androidx.fragment.app.FragmentActivity, authenticationOptions: com.auth0.android.authentication.storage.LocalAuthenticationOptions, biometricManager: androidx.biometric.BiometricManager, resultCallback: com.auth0.android.callback.Callback<java.lang.Boolean, com.auth0.android.authentication.storage.CredentialsManagerException>);
						public authenticate(): void;
					}
					export module LocalAuthenticationManager {
						export class UiThreadExecutor {
							public static class: java.lang.Class<com.auth0.android.authentication.storage.LocalAuthenticationManager.UiThreadExecutor>;
							public constructor();
							public execute(command: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class LocalAuthenticationManagerFactory {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.LocalAuthenticationManagerFactory>;
						/**
						 * Constructs a new instance of the com.auth0.android.authentication.storage.LocalAuthenticationManagerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { create(param0: androidx.fragment.app.FragmentActivity, param1: com.auth0.android.authentication.storage.LocalAuthenticationOptions, param2: com.auth0.android.callback.Callback<java.lang.Boolean, com.auth0.android.authentication.storage.CredentialsManagerException>): com.auth0.android.authentication.storage.LocalAuthenticationManager });
						public constructor();
						public create(param0: androidx.fragment.app.FragmentActivity, param1: com.auth0.android.authentication.storage.LocalAuthenticationOptions, param2: com.auth0.android.callback.Callback<java.lang.Boolean, com.auth0.android.authentication.storage.CredentialsManagerException>): com.auth0.android.authentication.storage.LocalAuthenticationManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class LocalAuthenticationOptions {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.LocalAuthenticationOptions>;
						public getNegativeButtonText(): string;
						public getEnableDeviceCredentialFallback(): boolean;
						public getDescription(): string;
						public getTitle(): string;
						public getSubtitle(): string;
						public getAuthenticationLevel(): com.auth0.android.authentication.storage.AuthenticationLevel;
					}
					export module LocalAuthenticationOptions {
						export class Builder {
							public static class: java.lang.Class<com.auth0.android.authentication.storage.LocalAuthenticationOptions.Builder>;
							public constructor();
							public setDescription($this$setDescription_u24lambda_u242: string): com.auth0.android.authentication.storage.LocalAuthenticationOptions.Builder;
							public setAuthenticationLevel($this$setAuthenticationLevel_u24lambda_u243: com.auth0.android.authentication.storage.AuthenticationLevel): com.auth0.android.authentication.storage.LocalAuthenticationOptions.Builder;
							public setTitle($this$setTitle_u24lambda_u240: string): com.auth0.android.authentication.storage.LocalAuthenticationOptions.Builder;
							public build(): com.auth0.android.authentication.storage.LocalAuthenticationOptions;
							public setSubTitle($this$setSubTitle_u24lambda_u241: string): com.auth0.android.authentication.storage.LocalAuthenticationOptions.Builder;
							public setDeviceCredentialFallback($this$setDeviceCredentialFallback_u24lambda_u244: boolean): com.auth0.android.authentication.storage.LocalAuthenticationOptions.Builder;
							public setNegativeButtonText($this$setNegativeButtonText_u24lambda_u245: string): com.auth0.android.authentication.storage.LocalAuthenticationOptions.Builder;
							public constructor(title: string, subtitle: string, description: string, authenticationLevel: com.auth0.android.authentication.storage.AuthenticationLevel, enableDeviceCredentialFallback: boolean, negativeButtonText: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class SecureCredentialsManager extends com.auth0.android.authentication.storage.BaseCredentialsManager {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.SecureCredentialsManager>;
						public static KEY_CREDENTIALS: string = 'com.auth0.credentials';
						public static KEY_EXPIRES_AT: string = 'com.auth0.credentials_access_token_expires_at';
						public static LEGACY_KEY_CACHE_EXPIRES_AT: string = 'com.auth0.credentials_expires_at';
						public static KEY_CAN_REFRESH: string = 'com.auth0.credentials_can_refresh';
						public static KEY_ALIAS: string = 'com.auth0.key';
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: boolean, param4: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public saveCredentials(encryptedEncoded: com.auth0.android.result.Credentials): void;
						public getCredentials(scope: string, minTtl: number, parameters: java.util.Map<string, string>, forceRefresh: boolean, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public saveApiCredentials(encryptedEncoded: com.auth0.android.result.APICredentials, e: string): void;
						public getCredentials(param0: string, param1: number, param2: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public hasValidCredentials(param0: number): boolean;
						public getCredentials(scope: string, minTtl: number, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public continueGetApiCredentials$auth0_release(audience: string, scope: string, minTtl: number, parameters: java.util.Map<string, string>, headers: java.util.Map<string, string>, callback: com.auth0.android.callback.Callback<com.auth0.android.result.APICredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getApiCredentials(fragmentActivity: string, value: string, value: number, this_: java.util.Map<string, string>, audience: java.util.Map<string, string>, scope: com.auth0.android.callback.Callback<com.auth0.android.result.APICredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public continueGetCredentials$auth0_release(scope: string, minTtl: number, parameters: java.util.Map<string, string>, headers: java.util.Map<string, string>, forceRefresh: boolean, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public constructor(
							apiClient: com.auth0.android.authentication.AuthenticationAPIClient,
							storage: com.auth0.android.authentication.storage.Storage,
							crypto: com.auth0.android.authentication.storage.CryptoUtil,
							jwtDecoder: com.auth0.android.authentication.storage.JWTDecoder,
							serialExecutor: java.util.concurrent.Executor,
							fragmentActivity: java.lang.ref.WeakReference<androidx.fragment.app.FragmentActivity>,
							localAuthenticationOptions: com.auth0.android.authentication.storage.LocalAuthenticationOptions,
							localAuthenticationManagerFactory: com.auth0.android.authentication.storage.LocalAuthenticationManagerFactory,
						);
						public getCredentials(param0: string, param1: number, param2: java.util.Map<string, string>, param3: java.util.Map<string, string>, param4: boolean, param5: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public hasValidCredentials(expiresAt: number): boolean;
						public constructor(context: globalAndroid.content.Context, auth0: com.auth0.android.Auth0, storage: com.auth0.android.authentication.storage.Storage);
						public constructor(context: globalAndroid.content.Context, auth0: com.auth0.android.Auth0, storage: com.auth0.android.authentication.storage.Storage, fragmentActivity: androidx.fragment.app.FragmentActivity, localAuthenticationOptions: com.auth0.android.authentication.storage.LocalAuthenticationOptions);
						public clearFragmentActivity$auth0_release(): void;
						public getSsoCredentials(param0: java.util.Map<string, string>, param1: com.auth0.android.callback.Callback<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getCredentials(callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public clearApiCredentials(audience: string): void;
						public getCredentials(fragmentActivity: string, value: number, $this$getCredentials_u24lambda_u245: java.util.Map<string, string>, this_: java.util.Map<string, string>, scope: boolean, minTtl: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public hasValidCredentials(): boolean;
						public getSsoCredentials(callback: com.auth0.android.callback.Callback<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public getCredentials(scope: string, minTtl: number, parameters: java.util.Map<string, string>, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public clearCredentials(): void;
						public saveSsoCredentials$auth0_release(existingCredentials: com.auth0.android.result.SSOCredentials): void;
						public constructor(authenticationClient: com.auth0.android.authentication.AuthenticationAPIClient, storage: com.auth0.android.authentication.storage.Storage, jwtDecoder: com.auth0.android.authentication.storage.JWTDecoder);
						public getSsoCredentials(parameters: java.util.Map<string, string>, callback: com.auth0.android.callback.Callback<com.auth0.android.result.SSOCredentials, com.auth0.android.authentication.storage.CredentialsManagerException>): void;
					}
					export module SecureCredentialsManager {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.authentication.storage.SecureCredentialsManager.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class SharedPreferencesStorage extends com.auth0.android.authentication.storage.Storage {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.SharedPreferencesStorage>;
						public store(param0: string, param1: string): void;
						public retrieveInteger(param0: string): java.lang.Integer;
						public remove(param0: string): void;
						public store(name: string, value: java.lang.Integer): void;
						public store(name: string, value: string): void;
						public store(name: string, value: java.lang.Boolean): void;
						public constructor(this_: globalAndroid.content.Context, context: string);
						public retrieveLong(param0: string): java.lang.Long;
						public retrieveLong(name: string): java.lang.Long;
						public retrieveString(param0: string): string;
						public retrieveBoolean(param0: string): java.lang.Boolean;
						public retrieveString(name: string): string;
						public retrieveInteger(name: string): java.lang.Integer;
						public store(param0: string, param1: java.lang.Integer): void;
						public remove(name: string): void;
						public retrieveBoolean(name: string): java.lang.Boolean;
						public store(param0: string, param1: java.lang.Long): void;
						public store(param0: string, param1: java.lang.Boolean): void;
						public store(name: string, value: java.lang.Long): void;
						public constructor(context: globalAndroid.content.Context);
					}
					export module SharedPreferencesStorage {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.authentication.storage.SharedPreferencesStorage.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class Storage {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.Storage>;
						/**
						 * Constructs a new instance of the com.auth0.android.authentication.storage.Storage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { store(param0: string, param1: java.lang.Long): void; store(param0: string, param1: java.lang.Integer): void; store(param0: string, param1: string): void; store(param0: string, param1: java.lang.Boolean): void; retrieveLong(param0: string): java.lang.Long; retrieveString(param0: string): string; retrieveInteger(param0: string): java.lang.Integer; retrieveBoolean(param0: string): java.lang.Boolean; remove(param0: string): void });
						public constructor();
						public store(param0: string, param1: string): void;
						public store(param0: string, param1: java.lang.Long): void;
						public retrieveInteger(param0: string): java.lang.Integer;
						public remove(param0: string): void;
						public store(param0: string, param1: java.lang.Boolean): void;
						public retrieveLong(param0: string): java.lang.Long;
						public retrieveString(param0: string): string;
						public retrieveBoolean(param0: string): java.lang.Boolean;
						public store(param0: string, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class AuthenticationCallback<T> extends com.auth0.android.callback.Callback<any, com.auth0.android.authentication.AuthenticationException> {
					public static class: java.lang.Class<com.auth0.android.callback.AuthenticationCallback<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.AuthenticationCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onSuccess(param0: any): void; onFailure(param0: any): void });
					public constructor();
					public onFailure(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class BaseCallback<T, U> extends com.auth0.android.callback.Callback<any, any> {
					public static class: java.lang.Class<com.auth0.android.callback.BaseCallback<any, any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.BaseCallback<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onSuccess(param0: any): void; onFailure(param0: any): void });
					public constructor();
					public onFailure(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class Callback<T, U> extends java.lang.Object {
					public static class: java.lang.Class<com.auth0.android.callback.Callback<any, any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.Callback<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onSuccess(param0: T): void; onFailure(param0: U): void });
					public constructor();
					public onSuccess(param0: T): void;
					public onFailure(param0: U): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class ManagementCallback<T> extends com.auth0.android.callback.Callback<any, com.auth0.android.management.ManagementException> {
					public static class: java.lang.Class<com.auth0.android.callback.ManagementCallback<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.ManagementCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onSuccess(param0: any): void; onFailure(param0: any): void });
					public constructor();
					public onFailure(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class MyAccountCallback<T> extends com.auth0.android.callback.Callback<any, com.auth0.android.myaccount.MyAccountException> {
					public static class: java.lang.Class<com.auth0.android.callback.MyAccountCallback<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.MyAccountCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onSuccess(param0: any): void; onFailure(param0: any): void });
					public constructor();
					public onFailure(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class RunnableTask<T> extends java.lang.Object {
					public static class: java.lang.Class<com.auth0.android.callback.RunnableTask<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.RunnableTask<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { apply(param0: T): void });
					public constructor();
					public apply(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module management {
				export class ManagementException extends com.auth0.android.Auth0Exception {
					public static class: java.lang.Class<com.auth0.android.management.ManagementException>;
					public constructor(message: string);
					public getStatusCode(): number;
					public constructor(payload: string, statusCode: number);
					public getCode(): string;
					public isNetworkError(): boolean;
					public constructor(this_: java.util.Map<string, any>);
					public constructor(message: string, exception: com.auth0.android.Auth0Exception);
					public getDescription(): string;
					public constructor(message: string, cause: java.lang.Throwable);
					public getValue(key: string): any;
				}
				export module ManagementException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.management.ManagementException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module management {
				export class UsersAPIClient {
					public static class: java.lang.Class<com.auth0.android.management.UsersAPIClient>;
					public getClientId(): string;
					public unlink(userIdentitiesAdapter: string, this_: string, primaryUserId: string): com.auth0.android.request.Request<java.util.List<com.auth0.android.result.UserIdentity>, com.auth0.android.management.ManagementException>;
					public constructor(auth0: com.auth0.android.Auth0, factory: com.auth0.android.request.internal.RequestFactory<com.auth0.android.management.ManagementException>, gson: com.google.gson.Gson);
					public link(parameters: string, userIdentitiesAdapter: string): com.auth0.android.request.Request<java.util.List<com.auth0.android.result.UserIdentity>, com.auth0.android.management.ManagementException>;
					public getProfile(userProfileAdapter: string): com.auth0.android.request.Request<com.auth0.android.result.UserProfile, com.auth0.android.management.ManagementException>;
					public constructor(auth0: com.auth0.android.Auth0, token: string);
					public updateMetadata(userProfileAdapter: string, patch: java.util.Map<string, any>): com.auth0.android.request.Request<com.auth0.android.result.UserProfile, com.auth0.android.management.ManagementException>;
					public getBaseURL(): string;
				}
				export module UsersAPIClient {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.management.UsersAPIClient.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module myaccount {
				export class MyAccountAPIClient {
					public static class: java.lang.Class<com.auth0.android.myaccount.MyAccountAPIClient>;
					public enroll($this$enroll_u24lambda_u243: com.auth0.android.request.PublicKeyCredentials, authMethodId: com.auth0.android.result.PasskeyEnrollmentChallenge): com.auth0.android.request.Request<com.auth0.android.result.PasskeyAuthenticationMethod, com.auth0.android.myaccount.MyAccountException>;
					public constructor(auth0: com.auth0.android.Auth0, accessToken: string, factory: com.auth0.android.request.internal.RequestFactory<com.auth0.android.myaccount.MyAccountException>, gson: com.google.gson.Gson);
					public constructor(auth0: com.auth0.android.Auth0, accessToken: string);
					public passkeyEnrollmentChallenge(it: string, value: string): com.auth0.android.request.Request<com.auth0.android.result.PasskeyEnrollmentChallenge, com.auth0.android.myaccount.MyAccountException>;
				}
				export module MyAccountAPIClient {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.myaccount.MyAccountAPIClient.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module myaccount {
				export class MyAccountException extends com.auth0.android.Auth0Exception {
					public static class: java.lang.Class<com.auth0.android.myaccount.MyAccountException>;
					public getTitle(): string;
					public getStatusCode(): number;
					public constructor(payload: string, statusCode: number);
					public constructor(this_: java.util.Map<string, any>, values: number);
					public constructor(message: string, exception: com.auth0.android.Auth0Exception);
					public getValue(key: string): any;
					public getValidationErrors(): java.util.List<com.auth0.android.myaccount.MyAccountException.ValidationError>;
					public constructor(message: string);
					public getCode(): string;
					public isNetworkError(): boolean;
					public getType(): string;
					public getDetail(): string;
					public getDescription(): string;
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module MyAccountException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.myaccount.MyAccountException.Companion>;
					}
					export class ValidationError {
						public static class: java.lang.Class<com.auth0.android.myaccount.MyAccountException.ValidationError>;
						public component3(): string;
						public equals(other: any): boolean;
						public component1(): string;
						public hashCode(): number;
						public getPointer(): string;
						public copy(detail: string, field: string, pointer: string, source: string): com.auth0.android.myaccount.MyAccountException.ValidationError;
						public toString(): string;
						public component4(): string;
						public getSource(): string;
						public getField(): string;
						public component2(): string;
						public constructor(detail: string, field: string, pointer: string, source: string);
						public getDetail(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AlgorithmHelper {
					public static class: java.lang.Class<com.auth0.android.provider.AlgorithmHelper>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AsymmetricSignatureVerifier extends com.auth0.android.provider.SignatureVerifier {
					public static class: java.lang.Class<com.auth0.android.provider.AsymmetricSignatureVerifier>;
					public checkSignature(this_: androidNative.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AudClaimMismatchException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.AudClaimMismatchException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(expected: string, received: java.util.List<string>);
				}
				export module AudClaimMismatchException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.AudClaimMismatchException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AudClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.AudClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module AudClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.AudClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthCallback {
					public static class: java.lang.Class<com.auth0.android.provider.AuthCallback>;
					/**
					 * Constructs a new instance of the com.auth0.android.provider.AuthCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onFailure(param0: globalAndroid.app.Dialog): void; onFailure(param0: com.auth0.android.authentication.AuthenticationException): void; onSuccess(param0: com.auth0.android.result.Credentials): void });
					public constructor();
					public onSuccess(param0: com.auth0.android.result.Credentials): void;
					public onFailure(param0: com.auth0.android.authentication.AuthenticationException): void;
					public onFailure(param0: globalAndroid.app.Dialog): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthHandler {
					public static class: java.lang.Class<com.auth0.android.provider.AuthHandler>;
					/**
					 * Constructs a new instance of the com.auth0.android.provider.AuthHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { providerFor(param0: string, param1: string): com.auth0.android.provider.AuthProvider });
					public constructor();
					public providerFor(param0: string, param1: string): com.auth0.android.provider.AuthProvider;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class AuthProvider {
					public static class: java.lang.Class<com.auth0.android.provider.AuthProvider>;
					public getParameters(): java.util.Map<string, any>;
					public setParameters(parameters: java.util.Map<string, any>): void;
					public constructor();
					public clearSession(): void;
					public start(activity: globalAndroid.app.Activity, callback: com.auth0.android.provider.AuthCallback, permissionRequestCode: number, authenticationRequestCode: number): void;
					public authorize(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
					public requestAuth(param0: globalAndroid.app.Activity, param1: number): void;
					public getCallback(): com.auth0.android.provider.AuthCallback;
					public stop(): void;
					public authorize(intent: globalAndroid.content.Intent): boolean;
					public getRequiredAndroidPermissions(): androidNative.Array<string>;
					public onRequestPermissionsResult(permissionDialog: globalAndroid.app.Activity, this_: number, activity: androidNative.Array<string>, requestCode: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthTimeClaimMismatchException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.AuthTimeClaimMismatchException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(expected: number, received: java.lang.Long);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module AuthTimeClaimMismatchException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.AuthTimeClaimMismatchException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthTimeClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.AuthTimeClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module AuthTimeClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.AuthTimeClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthenticationActivity {
					public static class: java.lang.Class<com.auth0.android.provider.AuthenticationActivity>;
					public static EXTRA_AUTHORIZE_URI: string = 'com.auth0.android.EXTRA_AUTHORIZE_URI';
					public static EXTRA_LAUNCH_AS_TWA: string = 'com.auth0.android.EXTRA_LAUNCH_AS_TWA';
					public static EXTRA_CT_OPTIONS: string = 'com.auth0.android.EXTRA_CT_OPTIONS';
					public static authenticateUsingBrowser$auth0_release(context: globalAndroid.content.Context, authorizeUri: globalAndroid.net.Uri, launchAsTwa: boolean, options: com.auth0.android.provider.CustomTabsOptions): void;
					public onNewIntent(intent: globalAndroid.content.Intent): void;
					public deliverAuthenticationFailure$auth0_release(ex: com.auth0.android.authentication.AuthenticationException): void;
					public constructor();
					public onCreate(savedInstanceState: globalAndroid.os.Bundle): void;
					public deliverAuthenticationResult$auth0_release(result: globalAndroid.content.Intent): void;
					public onActivityResult(this_: number, requestCode: number, resultCode: globalAndroid.content.Intent): void;
					public createCustomTabsController$auth0_release(context: globalAndroid.content.Context, options: com.auth0.android.provider.CustomTabsOptions): com.auth0.android.provider.CustomTabsController;
					public onDestroy(): void;
					public onSaveInstanceState(outState: globalAndroid.os.Bundle): void;
					public onResume(): void;
				}
				export module AuthenticationActivity {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.AuthenticationActivity.Companion>;
						public authenticateUsingBrowser$auth0_release(this_: globalAndroid.content.Context, context: globalAndroid.net.Uri, authorizeUri: boolean, launchAsTwa: com.auth0.android.provider.CustomTabsOptions): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthorizeResult {
					public static class: java.lang.Class<com.auth0.android.provider.AuthorizeResult>;
					public constructor(requestCode: number, resultCode: number, intent: globalAndroid.content.Intent);
					public isValid(expectedRequestCode: number): boolean;
					public constructor(intent: globalAndroid.content.Intent);
					public getIntentData(): globalAndroid.net.Uri;
					public isCanceled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AzpClaimMismatchException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.AzpClaimMismatchException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(expected: string, received: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module AzpClaimMismatchException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.AzpClaimMismatchException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AzpClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.AzpClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module AzpClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.AzpClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class BrowserPicker {
					public static class: java.lang.Class<com.auth0.android.provider.BrowserPicker>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.auth0.android.provider.BrowserPicker>;
					public static newBuilder(): com.auth0.android.provider.BrowserPicker.Builder;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public describeContents(): number;
					public constructor(in_: globalAndroid.os.Parcel);
				}
				export module BrowserPicker {
					export class Builder {
						public static class: java.lang.Class<com.auth0.android.provider.BrowserPicker.Builder>;
						public withAllowedPackages(allowedPackages: java.util.List<string>): com.auth0.android.provider.BrowserPicker.Builder;
						public build(): com.auth0.android.provider.BrowserPicker;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class CallbackHelper {
					public static class: java.lang.Class<com.auth0.android.provider.CallbackHelper>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class CustomTabsController {
					public static class: java.lang.Class<com.auth0.android.provider.CustomTabsController>;
					public launchUri(uri: globalAndroid.net.Uri, launchAsTwa: boolean, threadSwitcher: com.auth0.android.request.internal.ThreadSwitcher, failureCallback: com.auth0.android.callback.RunnableTask<com.auth0.android.authentication.AuthenticationException>): void;
					public onCustomTabsServiceConnected(componentName: globalAndroid.content.ComponentName, customTabsClient: androidx.browser.customtabs.CustomTabsClient): void;
					public bindService(): void;
					public unbindService(): void;
					public onServiceDisconnected(componentName: globalAndroid.content.ComponentName): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class CustomTabsOptions {
					public static class: java.lang.Class<com.auth0.android.provider.CustomTabsOptions>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.auth0.android.provider.CustomTabsOptions>;
					public writeToParcel(dest: globalAndroid.os.Parcel, flags: number): void;
					public describeContents(): number;
					public static newBuilder(): com.auth0.android.provider.CustomTabsOptions.Builder;
					public constructor(in_: globalAndroid.os.Parcel);
				}
				export module CustomTabsOptions {
					export class Builder {
						public static class: java.lang.Class<com.auth0.android.provider.CustomTabsOptions.Builder>;
						public showTitle(showTitle: boolean): com.auth0.android.provider.CustomTabsOptions.Builder;
						public withDisabledCustomTabsPackages(disabledCustomTabsPackages: java.util.List<string>): com.auth0.android.provider.CustomTabsOptions.Builder;
						public withToolbarColor(toolbarColor: number): com.auth0.android.provider.CustomTabsOptions.Builder;
						public withBrowserPicker(browserPicker: com.auth0.android.provider.BrowserPicker): com.auth0.android.provider.CustomTabsOptions.Builder;
						public build(): com.auth0.android.provider.CustomTabsOptions;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class ExpClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.ExpClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module ExpClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.ExpClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class FlagChecker {
					public static class: java.lang.Class<com.auth0.android.provider.FlagChecker>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IatClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.IatClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module IatClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.IatClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IdTokenAlgorithmNotSupportedException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.IdTokenAlgorithmNotSupportedException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(message: string, cause: java.lang.Throwable);
					public constructor(tokenAlgorithm: string, supportedAlgorithms: java.util.List<string>);
				}
				export module IdTokenAlgorithmNotSupportedException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.IdTokenAlgorithmNotSupportedException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IdTokenExpiredException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.IdTokenExpiredException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(expected: number, received: java.lang.Long);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module IdTokenExpiredException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.IdTokenExpiredException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IdTokenMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.IdTokenMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module IdTokenMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.IdTokenMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IdTokenVerificationOptions {
					public static class: java.lang.Class<com.auth0.android.provider.IdTokenVerificationOptions>;
					public setClock(value: java.util.Date): void;
					public getNonce(): string;
					public getSignatureVerifier(): com.auth0.android.provider.SignatureVerifier;
					public setNonce(value: string): void;
					public setClockSkew(value: java.lang.Integer): void;
					public getClock(): java.util.Date;
					public getMaxAge(): java.lang.Integer;
					public constructor(issuer: string, audience: string, signatureVerifier: com.auth0.android.provider.SignatureVerifier);
					public getClockSkew(): java.lang.Integer;
					public getOrganization(): string;
					public setOrganization(value: string): void;
					public getIssuer(): string;
					public getAudience(): string;
					public setMaxAge(value: java.lang.Integer): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IdTokenVerifier {
					public static class: java.lang.Class<com.auth0.android.provider.IdTokenVerifier>;
					public constructor();
					public verify(orgClaim: com.auth0.android.request.internal.Jwt, orgNameClaim: com.auth0.android.provider.IdTokenVerificationOptions, value: boolean): void;
				}
				export module IdTokenVerifier {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.IdTokenVerifier.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class InvalidIdTokenSignatureException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.InvalidIdTokenSignatureException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module InvalidIdTokenSignatureException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.InvalidIdTokenSignatureException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IssClaimMismatchException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.IssClaimMismatchException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(expected: string, received: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module IssClaimMismatchException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.IssClaimMismatchException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IssClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.IssClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module IssClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.IssClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class LogoutManager extends com.auth0.android.provider.ResumableManager {
					public static class: java.lang.Class<com.auth0.android.provider.LogoutManager>;
					public startLogout(this_: globalAndroid.content.Context): void;
					public constructor(account: com.auth0.android.Auth0, callback: com.auth0.android.callback.Callback<java.lang.Void, com.auth0.android.authentication.AuthenticationException>, returnToUrl: string, ctOptions: com.auth0.android.provider.CustomTabsOptions, federated: boolean, launchAsTwa: boolean, customLogoutUrl: string);
					public failure(exception: com.auth0.android.authentication.AuthenticationException): void;
					public resume(this_: com.auth0.android.provider.AuthorizeResult): boolean;
				}
				export module LogoutManager {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.LogoutManager.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class NonceClaimMismatchException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.NonceClaimMismatchException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(expected: string, received: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module NonceClaimMismatchException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.NonceClaimMismatchException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class NonceClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.NonceClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module NonceClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.NonceClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class OAuthManager extends com.auth0.android.provider.ResumableManager {
					public static class: java.lang.Class<com.auth0.android.provider.OAuthManager>;
					public static KEY_RESPONSE_TYPE: string = 'response_type';
					public static KEY_STATE: string = 'state';
					public static KEY_NONCE: string = 'nonce';
					public static KEY_MAX_AGE: string = 'max_age';
					public static KEY_CONNECTION: string = 'connection';
					public static KEY_ORGANIZATION: string = 'organization';
					public static KEY_INVITATION: string = 'invitation';
					public static KEY_SCOPE: string = 'scope';
					public static RESPONSE_TYPE_CODE: string = 'code';
					public setPKCE(pkce: com.auth0.android.provider.PKCE): void;
					public setIdTokenVerificationLeeway(leeway: java.lang.Integer): void;
					public setCurrentTimeInMillis$auth0_release(value: number): void;
					public failure(exception: com.auth0.android.authentication.AuthenticationException): void;
					public getCurrentTimeInMillis$auth0_release(): number;
					public setHeaders(headers: java.util.Map<string, string>): void;
					public static assertValidState(requestState: string, responseState: string): void;
					public resume(e: com.auth0.android.provider.AuthorizeResult): boolean;
					public constructor(account: com.auth0.android.Auth0, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>, parameters: java.util.Map<string, string>, ctOptions: com.auth0.android.provider.CustomTabsOptions, launchAsTwa: boolean, customAuthorizeUrl: string);
					public startAuthentication(this_: globalAndroid.content.Context, context: string, redirectUri: number): void;
					public toState$auth0_release(): com.auth0.android.provider.OAuthManagerState;
					public setIdTokenVerificationIssuer(issuer: string): void;
				}
				export module OAuthManager {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.OAuthManager.Companion>;
						public getRandomString(defaultValue: string): string;
						public assertValidState(requestState: string, responseState: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class OAuthManagerState {
					public static class: java.lang.Class<com.auth0.android.provider.OAuthManagerState>;
					public component5(): com.auth0.android.provider.CustomTabsOptions;
					public getAuth0(): com.auth0.android.Auth0;
					public getHeaders(): java.util.Map<string, string>;
					public component2(): java.util.Map<string, string>;
					public component3(): java.util.Map<string, string>;
					public copy(auth0: com.auth0.android.Auth0, parameters: java.util.Map<string, string>, headers: java.util.Map<string, string>, requestCode: number, ctOptions: com.auth0.android.provider.CustomTabsOptions, pkce: com.auth0.android.provider.PKCE, idTokenVerificationLeeway: java.lang.Integer, idTokenVerificationIssuer: string, customAuthorizeUrl: string): com.auth0.android.provider.OAuthManagerState;
					public equals(other: any): boolean;
					public getRequestCode(): number;
					public getIdTokenVerificationLeeway(): java.lang.Integer;
					public serializeToJson(ctOptionsEncoded: com.google.gson.Gson): string;
					public component1(): com.auth0.android.Auth0;
					public getCtOptions(): com.auth0.android.provider.CustomTabsOptions;
					public getIdTokenVerificationIssuer(): string;
					public toString(): string;
					public getCustomAuthorizeUrl(): string;
					public component8(): string;
					public component4(): number;
					public component9(): string;
					public getPkce(): com.auth0.android.provider.PKCE;
					public constructor(auth0: com.auth0.android.Auth0, parameters: java.util.Map<string, string>, headers: java.util.Map<string, string>, requestCode: number, ctOptions: com.auth0.android.provider.CustomTabsOptions, pkce: com.auth0.android.provider.PKCE, idTokenVerificationLeeway: java.lang.Integer, idTokenVerificationIssuer: string, customAuthorizeUrl: string);
					public getParameters(): java.util.Map<string, string>;
					public hashCode(): number;
					public component6(): com.auth0.android.provider.PKCE;
					public component7(): java.lang.Integer;
				}
				export module OAuthManagerState {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.OAuthManagerState.Companion>;
						public deserializeState(oauthManagerJson: string, decodedCtOptionsBytes: com.google.gson.Gson): com.auth0.android.provider.OAuthManagerState;
					}
					export class OAuthManagerJson {
						public static class: java.lang.Class<com.auth0.android.provider.OAuthManagerState.OAuthManagerJson>;
						public constructor(auth0ClientId: string, auth0DomainUrl: string, auth0ConfigurationUrl: string, parameters: java.util.Map<string, string>, headers: java.util.Map<string, string>, requestCode: number, ctOptions: string, redirectUri: string, codeChallenge: string, codeVerifier: string, idTokenVerificationLeeway: java.lang.Integer, idTokenVerificationIssuer: string, customAuthorizeUrl: string);
						public getCodeVerifier(): string;
						public getAuth0DomainUrl(): string;
						public getParameters(): java.util.Map<string, string>;
						public getRedirectUri(): string;
						public getAuth0ConfigurationUrl(): string;
						public getCtOptions(): string;
						public getRequestCode(): number;
						public getHeaders(): java.util.Map<string, string>;
						public getIdTokenVerificationIssuer(): string;
						public getAuth0ClientId(): string;
						public getIdTokenVerificationLeeway(): java.lang.Integer;
						public getCustomAuthorizeUrl(): string;
						public getCodeChallenge(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class OrgClaimMismatchException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.OrgClaimMismatchException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(expected: string, received: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module OrgClaimMismatchException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.OrgClaimMismatchException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class OrgClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.OrgClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module OrgClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.OrgClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class OrgNameClaimMismatchException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.OrgNameClaimMismatchException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(expected: string, received: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module OrgNameClaimMismatchException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.OrgNameClaimMismatchException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class OrgNameClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.OrgNameClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module OrgNameClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.OrgNameClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class PKCE {
					public static class: java.lang.Class<com.auth0.android.provider.PKCE>;
					public getCodeChallenge(): string;
					public getCodeVerifier(): string;
					public constructor(apiClient: com.auth0.android.authentication.AuthenticationAPIClient, redirectUri: string, headers: java.util.Map<string, string>);
					public getRedirectUri(): string;
					public getToken(this_: string, authorizationCode: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class PasskeyAuthProvider {
					public static class: java.lang.Class<com.auth0.android.provider.PasskeyAuthProvider>;
					public static INSTANCE: com.auth0.android.provider.PasskeyAuthProvider;
					public static signIn(auth0: com.auth0.android.Auth0): com.auth0.android.provider.PasskeyAuthProvider.SignInBuilder;
					public static signUp(auth0: com.auth0.android.Auth0): com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder;
				}
				export module PasskeyAuthProvider {
					export class SignInBuilder {
						public static class: java.lang.Class<com.auth0.android.provider.PasskeyAuthProvider.SignInBuilder>;
						public setRealm($this$setRealm_u24lambda_u242: string): com.auth0.android.provider.PasskeyAuthProvider.SignInBuilder;
						public start(passkeyManager: globalAndroid.content.Context, this_: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>, context: java.util.concurrent.Executor): void;
						public constructor(auth0: com.auth0.android.Auth0);
						public setScope($this$setScope_u24lambda_u240: string): com.auth0.android.provider.PasskeyAuthProvider.SignInBuilder;
						public setAudience($this$setAudience_u24lambda_u241: string): com.auth0.android.provider.PasskeyAuthProvider.SignInBuilder;
					}
					export class SignupBuilder {
						public static class: java.lang.Class<com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder>;
						public setRealm($this$setRealm_u24lambda_u240: string): com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder;
						public setName($this$setName_u24lambda_u243: string): com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder;
						public setEmail($this$setEmail_u24lambda_u241: string): com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder;
						public constructor(auth0: com.auth0.android.Auth0);
						public start(passkeyManager: globalAndroid.content.Context, userData: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>, this_: java.util.concurrent.Executor): void;
						public setPhoneNumber($this$setPhoneNumber_u24lambda_u244: string): com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder;
						public setAudience($this$setAudience_u24lambda_u246: string): com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder;
						public setUserName($this$setUserName_u24lambda_u242: string): com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder;
						public setScope($this$setScope_u24lambda_u245: string): com.auth0.android.provider.PasskeyAuthProvider.SignupBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class PasskeyManager {
					public static class: java.lang.Class<com.auth0.android.provider.PasskeyManager>;
					public signup(context: globalAndroid.content.Context, userData: com.auth0.android.request.UserData, realm: string, parameters: java.util.Map<string, string>, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>, executor: java.util.concurrent.Executor): void;
					public constructor(authenticationAPIClient: com.auth0.android.authentication.AuthenticationAPIClient, credentialManager: androidx.credentials.CredentialManager);
					public signin(context: globalAndroid.content.Context, realm: string, parameters: java.util.Map<string, string>, callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>, executor: java.util.concurrent.Executor): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class PermissionHandler {
					public static class: java.lang.Class<com.auth0.android.provider.PermissionHandler>;
					public isPermissionGranted(activity: globalAndroid.app.Activity, permission: string): boolean;
					public parseRequestResult(this_: number, requestCode: androidNative.Array<string>, permissions: androidNative.Array<number>): java.util.List<string>;
					public constructor();
					public areAllPermissionsGranted(this_: globalAndroid.app.Activity, activity: androidNative.Array<string>): boolean;
					public requestPermissions(this_: globalAndroid.app.Activity, activity: androidNative.Array<string>, permissions: number): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class PublicKeyNotFoundException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.PublicKeyNotFoundException>;
					public constructor(keyId: string);
					public toString(): string;
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module PublicKeyNotFoundException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.PublicKeyNotFoundException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class RedirectActivity {
					public static class: java.lang.Class<com.auth0.android.provider.RedirectActivity>;
					public constructor();
					public onCreate(this_: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class ResumableManager {
					public static class: java.lang.Class<com.auth0.android.provider.ResumableManager>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class SignatureVerifier {
					public static class: java.lang.Class<com.auth0.android.provider.SignatureVerifier>;
					public checkSignature(param0: androidNative.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class SignatureVerifierMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.SignatureVerifierMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module SignatureVerifierMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.SignatureVerifierMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class SubClaimMissingException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.SubClaimMissingException>;
					public constructor(message: string);
					public toString(): string;
					public constructor();
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module SubClaimMissingException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.SubClaimMissingException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class TokenValidationException extends com.auth0.android.Auth0Exception {
					public static class: java.lang.Class<com.auth0.android.provider.TokenValidationException>;
					public constructor(message: string);
					public constructor(message: string, cause: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class UnexpectedIdTokenException extends com.auth0.android.provider.TokenValidationException {
					public static class: java.lang.Class<com.auth0.android.provider.UnexpectedIdTokenException>;
					public constructor(message: string);
					public toString(): string;
					public constructor(cause: java.lang.Throwable);
					public constructor(message: string, cause: java.lang.Throwable);
				}
				export module UnexpectedIdTokenException {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.provider.UnexpectedIdTokenException.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class WebAuthProvider {
					public static class: java.lang.Class<com.auth0.android.provider.WebAuthProvider>;
					public static INSTANCE: com.auth0.android.provider.WebAuthProvider;
					public static removeCallback(callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>): void;
					public static resume(result: globalAndroid.content.Intent): boolean;
					public static resetManagerInstance$auth0_release(): void;
					public static login(account: com.auth0.android.Auth0): com.auth0.android.provider.WebAuthProvider.Builder;
					public failure$auth0_release(exception: com.auth0.android.authentication.AuthenticationException): void;
					public static logout(account: com.auth0.android.Auth0): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
					public onRestoreInstanceState$auth0_release(stateJson: globalAndroid.os.Bundle): void;
					public static getManagerInstance$auth0_release(): com.auth0.android.provider.ResumableManager;
					public static addCallback(callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>): void;
					public onSaveInstanceState$auth0_release(manager: globalAndroid.os.Bundle): void;
				}
				export module WebAuthProvider {
					export class Builder {
						public static class: java.lang.Class<com.auth0.android.provider.WebAuthProvider.Builder>;
						public withAuthorizeUrl(authorizeUrl: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public await$auth0_release(context: globalAndroid.content.Context, coroutineContext: any, $completion: any): any;
						public constructor(account: com.auth0.android.Auth0);
						public withPKCE$auth0_release(pkce: com.auth0.android.provider.PKCE): com.auth0.android.provider.WebAuthProvider.Builder;
						public withCustomTabsOptions(options: com.auth0.android.provider.CustomTabsOptions): com.auth0.android.provider.WebAuthProvider.Builder;
						public withParameters(value: java.util.Map<string, any>): com.auth0.android.provider.WebAuthProvider.Builder;
						public withState(state: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withNonce(nonce: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withIdTokenVerificationIssuer(issuer: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withAudience(audience: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withMaxAge(maxAge: number): com.auth0.android.provider.WebAuthProvider.Builder;
						public withScheme(this_: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withConnection(connectionName: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public start(ex: globalAndroid.content.Context, value: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>): void;
						public withRedirectUri(redirectUri: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withTrustedWebActivity(): com.auth0.android.provider.WebAuthProvider.Builder;
						public withIdTokenVerificationLeeway(leeway: number): com.auth0.android.provider.WebAuthProvider.Builder;
						public withConnectionScope(connectionScope: androidNative.Array<string>): com.auth0.android.provider.WebAuthProvider.Builder;
						public withScope(scope: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withOrganization(organization: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withInvitationUrl(invitationUrl: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withHeaders(headers: java.util.Map<string, string>): com.auth0.android.provider.WebAuthProvider.Builder;
					}
					export module Builder {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.provider.WebAuthProvider.Builder.Companion>;
						}
					}
					export class LogoutBuilder {
						public static class: java.lang.Class<com.auth0.android.provider.WebAuthProvider.LogoutBuilder>;
						public withLogoutUrl(logoutUrl: string): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
						public await$auth0_release(context: globalAndroid.content.Context, coroutineContext: any, $completion: any): any;
						public constructor(account: com.auth0.android.Auth0);
						public start(logoutManager: globalAndroid.content.Context, this_: com.auth0.android.callback.Callback<java.lang.Void, com.auth0.android.authentication.AuthenticationException>): void;
						public withReturnToUrl(returnToUrl: string): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
						public withScheme(this_: string): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
						public withTrustedWebActivity(): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
						public withCustomTabsOptions(options: com.auth0.android.provider.CustomTabsOptions): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
						public withFederated(): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class AuthenticationRequest extends com.auth0.android.request.Request<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException> {
					public static class: java.lang.Class<com.auth0.android.request.AuthenticationRequest>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.AuthenticationRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
						setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
						setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
						setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
						setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
						validateClaims(): com.auth0.android.request.AuthenticationRequest;
						withIdTokenVerificationLeeway(param0: number): com.auth0.android.request.AuthenticationRequest;
						withIdTokenVerificationIssuer(param0: string): com.auth0.android.request.AuthenticationRequest;
						start(param0: com.auth0.android.callback.Callback<any, any>): void;
						await(param0: any): any;
						execute(): any;
						addParameters(param0: java.util.Map<string, string>): com.auth0.android.request.Request<any, any>;
						addParameter(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
						addParameter(param0: string, param1: any): com.auth0.android.request.Request<any, any>;
						addHeader(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
					});
					public constructor();
					public addHeader(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
					public setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
					public start(param0: com.auth0.android.callback.Callback<any, any>): void;
					public setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
					public withIdTokenVerificationIssuer(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
					public addParameter(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
					public execute(): any;
					public addParameters(param0: java.util.Map<string, string>): com.auth0.android.request.Request<any, any>;
					public setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
					public withIdTokenVerificationLeeway(param0: number): com.auth0.android.request.AuthenticationRequest;
					public validateClaims(): com.auth0.android.request.AuthenticationRequest;
					public setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
					public addParameter(param0: string, param1: any): com.auth0.android.request.Request<any, any>;
				}
				export module AuthenticationRequest {
					export class DefaultImpls {
						public static class: java.lang.Class<com.auth0.android.request.AuthenticationRequest.DefaultImpls>;
						public static addParameter($this: com.auth0.android.request.AuthenticationRequest, name: string, value: any): com.auth0.android.request.Request<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class ClientExtensionResults {
					public static class: java.lang.Class<com.auth0.android.request.ClientExtensionResults>;
					public constructor(credProps: com.auth0.android.request.CredProps);
					public toString(): string;
					public getCredProps(): com.auth0.android.request.CredProps;
					public copy(credProps: com.auth0.android.request.CredProps): com.auth0.android.request.ClientExtensionResults;
					public equals(other: any): boolean;
					public hashCode(): number;
					public component1(): com.auth0.android.request.CredProps;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class CredProps {
					public static class: java.lang.Class<com.auth0.android.request.CredProps>;
					public toString(): string;
					public equals(other: any): boolean;
					public getRk(): boolean;
					public constructor(rk: boolean);
					public component1(): boolean;
					public hashCode(): number;
					public copy(rk: boolean): com.auth0.android.request.CredProps;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class DefaultClient extends com.auth0.android.request.NetworkingClient {
					public static class: java.lang.Class<com.auth0.android.request.DefaultClient>;
					public static DEFAULT_TIMEOUT_SECONDS: number = 10;
					public constructor(connectTimeout: number, readTimeout: number, defaultHeaders: java.util.Map<string, string>, enableLogging: boolean);
					public constructor(connectTimeout: number, readTimeout: number);
					public constructor(builder: number, this_: number, connectTimeout: java.util.Map<string, string>, readTimeout: boolean, defaultHeaders: com.google.gson.Gson, enableLogging: javax.net.ssl.SSLSocketFactory, gson: javax.net.ssl.X509TrustManager);
					public constructor();
					public constructor(connectTimeout: number);
					public constructor(connectTimeout: number, readTimeout: number, defaultHeaders: java.util.Map<string, string>);
					public getOkHttpClient$auth0_release(): okhttp3.OkHttpClient;
					public load(this_: string, url: com.auth0.android.request.RequestOptions): com.auth0.android.request.ServerResponse;
					public load(param0: string, param1: com.auth0.android.request.RequestOptions): com.auth0.android.request.ServerResponse;
				}
				export module DefaultClient {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.request.DefaultClient.Companion>;
						public getAPPLICATION_JSON_UTF8(): okhttp3.MediaType;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class ErrorAdapter<T> extends java.lang.Object {
					public static class: java.lang.Class<com.auth0.android.request.ErrorAdapter<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.ErrorAdapter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fromJsonResponse(param0: number, param1: java.io.Reader): T; fromRawResponse(param0: number, param1: string, param2: java.util.Map<string, any>): T; fromException(param0: java.lang.Throwable): T });
					public constructor();
					public fromException(param0: java.lang.Throwable): T;
					public fromJsonResponse(param0: number, param1: java.io.Reader): T;
					public fromRawResponse(param0: number, param1: string, param2: java.util.Map<string, any>): T;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export abstract class HttpMethod {
					public static class: java.lang.Class<com.auth0.android.request.HttpMethod>;
					public toString(): string;
				}
				export module HttpMethod {
					export class DELETE extends com.auth0.android.request.HttpMethod {
						public static class: java.lang.Class<com.auth0.android.request.HttpMethod.DELETE>;
						public static INSTANCE: com.auth0.android.request.HttpMethod.DELETE;
					}
					export class GET extends com.auth0.android.request.HttpMethod {
						public static class: java.lang.Class<com.auth0.android.request.HttpMethod.GET>;
						public static INSTANCE: com.auth0.android.request.HttpMethod.GET;
					}
					export class PATCH extends com.auth0.android.request.HttpMethod {
						public static class: java.lang.Class<com.auth0.android.request.HttpMethod.PATCH>;
						public static INSTANCE: com.auth0.android.request.HttpMethod.PATCH;
					}
					export class POST extends com.auth0.android.request.HttpMethod {
						public static class: java.lang.Class<com.auth0.android.request.HttpMethod.POST>;
						public static INSTANCE: com.auth0.android.request.HttpMethod.POST;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class JsonAdapter<T> extends java.lang.Object {
					public static class: java.lang.Class<com.auth0.android.request.JsonAdapter<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.JsonAdapter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { fromJson(param0: java.io.Reader, param1: java.util.Map<string, any>): T });
					public constructor();
					public fromJson(param0: java.io.Reader, param1: java.util.Map<string, any>): T;
				}
				export module JsonAdapter {
					export class DefaultImpls {
						public static class: java.lang.Class<com.auth0.android.request.JsonAdapter.DefaultImpls>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class NetworkingClient {
					public static class: java.lang.Class<com.auth0.android.request.NetworkingClient>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.NetworkingClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { load(param0: string, param1: com.auth0.android.request.RequestOptions): com.auth0.android.request.ServerResponse });
					public constructor();
					public load(param0: string, param1: com.auth0.android.request.RequestOptions): com.auth0.android.request.ServerResponse;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class ProfileRequest extends com.auth0.android.request.Request<com.auth0.android.result.Authentication, com.auth0.android.authentication.AuthenticationException> {
					public static class: java.lang.Class<com.auth0.android.request.ProfileRequest>;
					public addHeader(name: string, value: string): com.auth0.android.request.ProfileRequest;
					public addHeader(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
					public start(param0: com.auth0.android.callback.Callback<any, any>): void;
					public execute(): com.auth0.android.result.Authentication;
					public addParameter(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
					public addParameters(parameters: java.util.Map<string, string>): com.auth0.android.request.ProfileRequest;
					public execute(): any;
					public addParameters(param0: java.util.Map<string, string>): com.auth0.android.request.Request<any, any>;
					public start(callback: com.auth0.android.callback.Callback<com.auth0.android.result.Authentication, com.auth0.android.authentication.AuthenticationException>): void;
					public constructor(authenticationRequest: com.auth0.android.request.AuthenticationRequest, userInfoRequest: com.auth0.android.request.Request<com.auth0.android.result.UserProfile, com.auth0.android.authentication.AuthenticationException>);
					public setScope(scope: string): com.auth0.android.request.ProfileRequest;
					public addParameter(name: string, value: any): com.auth0.android.request.Request<com.auth0.android.result.Authentication, com.auth0.android.authentication.AuthenticationException>;
					public addParameter(name: string, value: string): com.auth0.android.request.ProfileRequest;
					public setConnection(connection: string): com.auth0.android.request.ProfileRequest;
					public addParameter(param0: string, param1: any): com.auth0.android.request.Request<any, any>;
				}
				export module ProfileRequest {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.request.ProfileRequest.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class PublicKeyCredentials {
					public static class: java.lang.Class<com.auth0.android.request.PublicKeyCredentials>;
					public getId(): string;
					public equals(other: any): boolean;
					public getResponse(): com.auth0.android.request.Response;
					public getClientExtensionResults(): com.auth0.android.request.ClientExtensionResults;
					public component3(): string;
					public getAuthenticatorAttachment(): string;
					public copy(authenticatorAttachment: string, clientExtensionResults: com.auth0.android.request.ClientExtensionResults, id: string, rawId: string, response: com.auth0.android.request.Response, type: string): com.auth0.android.request.PublicKeyCredentials;
					public toString(): string;
					public component1(): string;
					public component6(): string;
					public component2(): com.auth0.android.request.ClientExtensionResults;
					public component4(): string;
					public component5(): com.auth0.android.request.Response;
					public getRawId(): string;
					public getType(): string;
					public hashCode(): number;
					public constructor(authenticatorAttachment: string, clientExtensionResults: com.auth0.android.request.ClientExtensionResults, id: string, rawId: string, response: com.auth0.android.request.Response, type: string);
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class Request<T, U> extends java.lang.Object {
					public static class: java.lang.Class<com.auth0.android.request.Request<any, any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.Request<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { start(param0: com.auth0.android.callback.Callback<T, U>): void; await(param0: any): any; execute(): T; addParameters(param0: java.util.Map<string, string>): com.auth0.android.request.Request<T, U>; addParameter(param0: string, param1: string): com.auth0.android.request.Request<T, U>; addParameter(param0: string, param1: any): com.auth0.android.request.Request<T, U>; addHeader(param0: string, param1: string): com.auth0.android.request.Request<T, U> });
					public constructor();
					public execute(): T;
					public addHeader(param0: string, param1: string): com.auth0.android.request.Request<T, U>;
					public addParameter(param0: string, param1: string): com.auth0.android.request.Request<T, U>;
					public addParameter(param0: string, param1: any): com.auth0.android.request.Request<T, U>;
					public start(param0: com.auth0.android.callback.Callback<T, U>): void;
					public addParameters(param0: java.util.Map<string, string>): com.auth0.android.request.Request<T, U>;
				}
				export module Request {
					export class DefaultImpls {
						public static class: java.lang.Class<com.auth0.android.request.Request.DefaultImpls>;
						public static addParameter($this: com.auth0.android.request.Request<any, any>, name: string, value: any): com.auth0.android.request.Request<any, any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class RequestOptions {
					public static class: java.lang.Class<com.auth0.android.request.RequestOptions>;
					public getParameters(): java.util.Map<string, any>;
					public getHeaders(): java.util.Map<string, string>;
					public constructor(method: com.auth0.android.request.HttpMethod);
					public getMethod(): com.auth0.android.request.HttpMethod;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class Response {
					public static class: java.lang.Class<com.auth0.android.request.Response>;
					public component2(): string;
					public component5(): string;
					public getAttestationObject(): string;
					public equals(other: any): boolean;
					public component3(): string;
					public component4(): java.util.List<string>;
					public copy(attestationObject: string, authenticatorData: string, clientDataJSON: string, transports: java.util.List<string>, signature: string, userHandle: string): com.auth0.android.request.Response;
					public getClientDataJSON(): string;
					public getAuthenticatorData(): string;
					public toString(): string;
					public component1(): string;
					public getSignature(): string;
					public getUserHandle(): string;
					public component6(): string;
					public getTransports(): java.util.List<string>;
					public hashCode(): number;
					public constructor(attestationObject: string, authenticatorData: string, clientDataJSON: string, transports: java.util.List<string>, signature: string, userHandle: string);
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class ServerResponse {
					public static class: java.lang.Class<com.auth0.android.request.ServerResponse>;
					public constructor(statusCode: number, body: java.io.InputStream, headers: java.util.Map<string, any>);
					public getStatusCode(): number;
					public getHeaders(): java.util.Map<string, java.util.List<string>>;
					public equals(other: any): boolean;
					public isJson(): boolean;
					public component2(): java.io.InputStream;
					public component3(): java.util.Map<string, java.util.List<string>>;
					public toString(): string;
					public getBody(): java.io.InputStream;
					public component1(): number;
					public copy(statusCode: number, body: java.io.InputStream, headers: java.util.Map<string, any>): com.auth0.android.request.ServerResponse;
					public hashCode(): number;
					public isSuccess(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class SignUpRequest extends com.auth0.android.request.AuthenticationRequest {
					public static class: java.lang.Class<com.auth0.android.request.SignUpRequest>;
					public addSignUpParameters(parameters: java.util.Map<string, string>): com.auth0.android.request.SignUpRequest;
					public addParameter(name: string, value: string): com.auth0.android.request.SignUpRequest;
					public addHeader(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
					public setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setRealm(realm: string): com.auth0.android.request.SignUpRequest;
					public start(param0: com.auth0.android.callback.Callback<any, any>): void;
					public setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
					public addHeader(name: string, value: string): com.auth0.android.request.SignUpRequest;
					public setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
					public execute(): any;
					public execute(): com.auth0.android.result.Credentials;
					public setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setAudience(audience: string): com.auth0.android.request.SignUpRequest;
					public addParameter(name: string, value: any): com.auth0.android.request.Request<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>;
					public withIdTokenVerificationLeeway(leeway: number): com.auth0.android.request.SignUpRequest;
					public withIdTokenVerificationIssuer(issuer: string): com.auth0.android.request.SignUpRequest;
					public constructor(signUpRequest: com.auth0.android.request.Request<com.auth0.android.result.DatabaseUser, com.auth0.android.authentication.AuthenticationException>, authenticationRequest: com.auth0.android.request.AuthenticationRequest);
					public addAuthenticationParameters(parameters: java.util.Map<string, string>): com.auth0.android.request.SignUpRequest;
					public setGrantType(grantType: string): com.auth0.android.request.SignUpRequest;
					public withIdTokenVerificationIssuer(param0: string): com.auth0.android.request.AuthenticationRequest;
					public addParameter(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
					public setConnection(connection: string): com.auth0.android.request.SignUpRequest;
					public addParameters(param0: java.util.Map<string, string>): com.auth0.android.request.Request<any, any>;
					public withIdTokenVerificationLeeway(param0: number): com.auth0.android.request.AuthenticationRequest;
					public validateClaims(): com.auth0.android.request.AuthenticationRequest;
					public addParameters(parameters: java.util.Map<string, string>): com.auth0.android.request.SignUpRequest;
					public validateClaims(): com.auth0.android.request.SignUpRequest;
					public start(callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>): void;
					public setScope(scope: string): com.auth0.android.request.SignUpRequest;
					public setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
					public addParameter(param0: string, param1: any): com.auth0.android.request.Request<any, any>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class UserData {
					public static class: java.lang.Class<com.auth0.android.request.UserData>;
					public component2(): string;
					public equals(other: any): boolean;
					public component3(): string;
					public constructor(email: string, phoneNumber: string, userName: string, name: string);
					public getUserName(): string;
					public copy(email: string, phoneNumber: string, userName: string, name: string): com.auth0.android.request.UserData;
					public toString(): string;
					public component1(): string;
					public getName(): string;
					public constructor();
					public getPhoneNumber(): string;
					public component4(): string;
					public hashCode(): number;
					public getEmail(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class BaseAuthenticationRequest extends com.auth0.android.request.AuthenticationRequest {
						public static class: java.lang.Class<com.auth0.android.request.internal.BaseAuthenticationRequest>;
						public addParameter(name: string, value: any): com.auth0.android.request.AuthenticationRequest;
						public setConnection(connection: string): com.auth0.android.request.AuthenticationRequest;
						public getValidateClaims$auth0_release(): boolean;
						public getCurrentTimeInMillis$auth0_release(): number;
						public start(callback: com.auth0.android.callback.Callback<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>): void;
						public addParameter(param0: string, param1: any): com.auth0.android.request.Request<any, any>;
						public setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
						public addHeader(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
						public withIdTokenVerificationLeeway(param0: number): com.auth0.android.request.AuthenticationRequest;
						public setIdTokenVerificationLeeway$auth0_release(value: java.lang.Integer): void;
						public setGrantType(grantType: string): com.auth0.android.request.AuthenticationRequest;
						public setRealm(realm: string): com.auth0.android.request.AuthenticationRequest;
						public withIdTokenVerificationLeeway(leeway: number): com.auth0.android.request.AuthenticationRequest;
						public addParameter(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
						public getIdTokenVerificationIssuer$auth0_release(): string;
						public setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
						public execute(): any;
						public setAudience(audience: string): com.auth0.android.request.AuthenticationRequest;
						public start(param0: com.auth0.android.callback.Callback<any, any>): void;
						public withIdTokenVerificationIssuer(issuer: string): com.auth0.android.request.AuthenticationRequest;
						public setCurrentTimeInMillis$auth0_release(value: number): void;
						public getIdTokenVerificationLeeway$auth0_release(): java.lang.Integer;
						public setIdTokenVerificationIssuer$auth0_release(value: string): void;
						public setValidateClaims$auth0_release(value: boolean): void;
						public verifyClaims$auth0_release(decodedIdToken: string): void;
						public constructor(request: com.auth0.android.request.Request<com.auth0.android.result.Credentials, com.auth0.android.authentication.AuthenticationException>, clientId: string, baseURL: string);
						public setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
						public addParameters(parameters: java.util.Map<string, string>): com.auth0.android.request.AuthenticationRequest;
						public addParameters(param0: java.util.Map<string, string>): com.auth0.android.request.Request<any, any>;
						public validateClaims(): com.auth0.android.request.AuthenticationRequest;
						public addHeader(name: string, value: string): com.auth0.android.request.AuthenticationRequest;
						public addParameter(name: string, value: string): com.auth0.android.request.AuthenticationRequest;
						public withIdTokenVerificationIssuer(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setScope(scope: string): com.auth0.android.request.AuthenticationRequest;
						public execute(): com.auth0.android.result.Credentials;
						public setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
					}
					export module BaseAuthenticationRequest {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.request.internal.BaseAuthenticationRequest.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class BaseRequest<T, U> extends com.auth0.android.request.Request<any, any> {
						public static class: java.lang.Class<com.auth0.android.request.internal.BaseRequest<any, any>>;
						public start(param0: com.auth0.android.callback.Callback<any, any>): void;
						public addParameter(param0: string, param1: any): com.auth0.android.request.Request<any, any>;
						public addParameters(mapCopy: java.util.Map<string, string>): com.auth0.android.request.Request<any, any>;
						public constructor(method: com.auth0.android.request.HttpMethod, url: string, client: com.auth0.android.request.NetworkingClient, resultAdapter: com.auth0.android.request.JsonAdapter<any>, errorAdapter: com.auth0.android.request.ErrorAdapter<any>, threadSwitcher: com.auth0.android.request.internal.ThreadSwitcher);
						public addHeader(name: string, value: string): com.auth0.android.request.Request<any, any>;
						public addHeader(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
						public addParameters(param0: java.util.Map<string, string>): com.auth0.android.request.Request<any, any>;
						public addParameter(this_: string, name: string): com.auth0.android.request.Request<any, any>;
						public addParameter(name: string, value: any): com.auth0.android.request.Request<any, any>;
						public addParameter(param0: string, param1: string): com.auth0.android.request.Request<any, any>;
						public switchRequestContext$auth0_release(dispatcher: kotlinx.coroutines.CoroutineDispatcher, runnable: any, $completion: any): any;
						public start(callback: com.auth0.android.callback.Callback<any, any>): void;
						public execute(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class CommonThreadSwitcher extends com.auth0.android.request.internal.ThreadSwitcher {
						public static class: java.lang.Class<com.auth0.android.request.internal.CommonThreadSwitcher>;
						public backgroundThread(runnable: java.lang.Runnable): void;
						public constructor(defaultThreadSwitcher: com.auth0.android.request.internal.ThreadSwitcher);
						public mainThread(param0: java.lang.Runnable): void;
						public getDelegateThreadSwitcher$auth0_release(): com.auth0.android.request.internal.ThreadSwitcher;
						public setDelegateThreadSwitcher$auth0_release(value: com.auth0.android.request.internal.ThreadSwitcher): void;
						public static getInstance(): com.auth0.android.request.internal.CommonThreadSwitcher;
						public setDelegate(threadSwitcher: com.auth0.android.request.internal.ThreadSwitcher): void;
						public mainThread(runnable: java.lang.Runnable): void;
						public backgroundThread(param0: java.lang.Runnable): void;
					}
					export module CommonThreadSwitcher {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.request.internal.CommonThreadSwitcher.Companion>;
							public getInstance(): com.auth0.android.request.internal.CommonThreadSwitcher;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class CredentialsDeserializer extends com.google.gson.JsonDeserializer<com.auth0.android.result.Credentials> {
						public static class: java.lang.Class<com.auth0.android.request.internal.CredentialsDeserializer>;
						public constructor();
						public deserialize(idToken: com.google.gson.JsonElement, accessToken: java.lang.reflect.Type, type: com.google.gson.JsonDeserializationContext): com.auth0.android.result.Credentials;
						public getCurrentTimeInMillis(): number;
						public createCredentials(this_: string, idToken: string, accessToken: string, type: string, refreshToken: java.util.Date, expiresAt: string, scope: string): com.auth0.android.result.Credentials;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class DefaultThreadSwitcher extends com.auth0.android.request.internal.ThreadSwitcher {
						public static class: java.lang.Class<com.auth0.android.request.internal.DefaultThreadSwitcher>;
						public backgroundThread(runnable: java.lang.Runnable): void;
						public constructor();
						public mainThread(this_: java.lang.Runnable): void;
						public mainThread(param0: java.lang.Runnable): void;
						public backgroundThread(param0: java.lang.Runnable): void;
						public constructor(backgroundExecutor: java.util.concurrent.Executor);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class GsonAdapter<T> extends com.auth0.android.request.JsonAdapter<any> {
						public static class: java.lang.Class<com.auth0.android.request.internal.GsonAdapter<any>>;
						public constructor(tTypeToken: com.google.gson.reflect.TypeToken<any>, gson: com.google.gson.Gson);
						public fromJson(reader: java.io.Reader, metadata: java.util.Map<string, any>): any;
						public constructor(tClass: java.lang.Class<any>, gson: com.google.gson.Gson);
						public fromJson(param0: java.io.Reader, param1: java.util.Map<string, any>): any;
					}
					export module GsonAdapter {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.request.internal.GsonAdapter.Companion>;
							public forListOf(this_: java.lang.Class<any>, tClass: com.google.gson.Gson): com.auth0.android.request.internal.GsonAdapter<any>;
							public forMapOf(this_: java.lang.Class<any>, tClass: com.google.gson.Gson): com.auth0.android.request.internal.GsonAdapter<any>;
							public forMap(gson: com.google.gson.Gson): com.auth0.android.request.internal.GsonAdapter<java.util.Map<string, any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class GsonProvider {
						public static class: java.lang.Class<com.auth0.android.request.internal.GsonProvider>;
						public static INSTANCE: com.auth0.android.request.internal.GsonProvider;
						public getGson$auth0_release(): com.google.gson.Gson;
						public static formatDate(date: java.util.Date): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class JsonRequired {
						public static class: java.lang.Class<com.auth0.android.request.internal.JsonRequired>;
						/**
						 * Constructs a new instance of the com.auth0.android.request.internal.JsonRequired interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class JsonRequiredTypeAdapterFactory {
						public static class: java.lang.Class<com.auth0.android.request.internal.JsonRequiredTypeAdapterFactory>;
						public create(gson: com.google.gson.Gson, type: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class JwksDeserializer extends com.google.gson.JsonDeserializer<java.util.Map<string, any>> {
						public static class: java.lang.Class<com.auth0.android.request.internal.JwksDeserializer>;
						public constructor();
						public deserialize(modulus: com.google.gson.JsonElement, exponent: java.lang.reflect.Type, pub: com.google.gson.JsonDeserializationContext): java.util.Map<string, java.security.PublicKey>;
					}
					export module JwksDeserializer {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.request.internal.JwksDeserializer.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class Jwt {
						public static class: java.lang.Class<com.auth0.android.request.internal.Jwt>;
						public getAuthorizedParty(): string;
						public getNonce(): string;
						public getIssuer(): string;
						public constructor(it: string);
						public getSubject(): string;
						public getAudience(): java.util.List<string>;
						public getAlgorithm(): string;
						public getExpiresAt(): java.util.Date;
						public getAuthenticationTime(): java.util.Date;
						public getOrganizationId(): string;
						public getOrganizationName(): string;
						public getIssuedAt(): java.util.Date;
						public getParts(): androidNative.Array<string>;
						public getKeyId(): string;
					}
					export module Jwt {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.request.internal.Jwt.Companion>;
							public decodeBase64(this_: string): string;
							public splitToken(thisCollection$iv: string): androidNative.Array<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class OidcUtils {
						public static class: java.lang.Class<com.auth0.android.request.internal.OidcUtils>;
						public static INSTANCE: com.auth0.android.request.internal.OidcUtils;
						public static KEY_SCOPE: string = 'scope';
						public static DEFAULT_SCOPE: string = 'openid profile email';
						public includeDefaultScope(parameters: java.util.Map<string, string>): void;
						public includeRequiredScope(it: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class RequestFactory<U> extends java.lang.Object {
						public static class: java.lang.Class<com.auth0.android.request.internal.RequestFactory<any>>;
						public post(url: string, resultAdapter: com.auth0.android.request.JsonAdapter<any>): com.auth0.android.request.Request<any, any>;
						public patch(url: string, resultAdapter: com.auth0.android.request.JsonAdapter<any>): com.auth0.android.request.Request<any, any>;
						public setHeader(name: string, value: string): void;
						public createRequest(method: com.auth0.android.request.HttpMethod, url: string, client: com.auth0.android.request.NetworkingClient, resultAdapter: com.auth0.android.request.JsonAdapter<any>, errorAdapter: com.auth0.android.request.ErrorAdapter<any>, threadSwitcher: com.auth0.android.request.internal.ThreadSwitcher): com.auth0.android.request.Request<any, any>;
						public get(url: string, resultAdapter: com.auth0.android.request.JsonAdapter<any>): com.auth0.android.request.Request<any, any>;
						public post(url: string): com.auth0.android.request.Request<java.lang.Void, U>;
						public delete(url: string, resultAdapter: com.auth0.android.request.JsonAdapter<any>): com.auth0.android.request.Request<any, any>;
						public constructor(client: com.auth0.android.request.NetworkingClient, errorAdapter: com.auth0.android.request.ErrorAdapter<U>);
						public setAuth0ClientInfo(clientInfo: string): void;
					}
					export module RequestFactory {
						export class Companion {
							public static class: java.lang.Class<com.auth0.android.request.internal.RequestFactory.Companion>;
							public getDefaultLocale(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class ResponseUtils {
						public static class: java.lang.Class<com.auth0.android.request.internal.ResponseUtils>;
						public static INSTANCE: com.auth0.android.request.internal.ResponseUtils;
						public isNetworkError(cause: java.lang.Throwable): boolean;
						public closeStream(closeable: java.io.Closeable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class TLS12SocketFactory {
						public static class: java.lang.Class<com.auth0.android.request.internal.TLS12SocketFactory>;
						public createSocket(host: java.net.InetAddress, port: number): java.net.Socket;
						public createSocket(host: string, port: number, localHost: java.net.InetAddress, localPort: number): java.net.Socket;
						public getDefaultCipherSuites(): androidNative.Array<string>;
						public createSocket(s: java.net.Socket, host: string, port: number, autoClose: boolean): java.net.Socket;
						public getSupportedCipherSuites(): androidNative.Array<string>;
						public createSocket(address: java.net.InetAddress, port: number, localAddress: java.net.InetAddress, localPort: number): java.net.Socket;
						public createSocket(host: string, port: number): java.net.Socket;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class ThreadSwitcher {
						public static class: java.lang.Class<com.auth0.android.request.internal.ThreadSwitcher>;
						/**
						 * Constructs a new instance of the com.auth0.android.request.internal.ThreadSwitcher interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { mainThread(param0: java.lang.Runnable): void; backgroundThread(param0: java.lang.Runnable): void });
						public constructor();
						public mainThread(param0: java.lang.Runnable): void;
						public backgroundThread(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class UserProfileDeserializer extends com.google.gson.JsonDeserializer<com.auth0.android.result.UserProfile> {
						public static class: java.lang.Class<com.auth0.android.request.internal.UserProfileDeserializer>;
						public constructor();
						public deserialize(json: com.google.gson.JsonElement, typeOfT: java.lang.reflect.Type, context: com.google.gson.JsonDeserializationContext): com.auth0.android.result.UserProfile;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class APICredentials {
					public static class: java.lang.Class<com.auth0.android.result.APICredentials>;
					public getExpiresAt(): java.util.Date;
					public getScope(): string;
					public component2(): string;
					public equals(other: any): boolean;
					public getAccessToken(): string;
					public copy(accessToken: string, type: string, expiresAt: java.util.Date, scope: string): com.auth0.android.result.APICredentials;
					public constructor(accessToken: string, type: string, expiresAt: java.util.Date, scope: string);
					public toString(): string;
					public component1(): string;
					public component4(): string;
					public getType(): string;
					public hashCode(): number;
					public component3(): java.util.Date;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class AuthParamsPublicKey {
					public static class: java.lang.Class<com.auth0.android.result.AuthParamsPublicKey>;
					public getTimeout(): number;
					public component2(): string;
					public component3(): number;
					public equals(other: any): boolean;
					public constructor(challenge: string, rpId: string, timeout: number, userVerification: string);
					public getUserVerification(): string;
					public getRpId(): string;
					public toString(): string;
					public component1(): string;
					public component4(): string;
					public hashCode(): number;
					public getChallenge(): string;
					public copy(challenge: string, rpId: string, timeout: number, userVerification: string): com.auth0.android.result.AuthParamsPublicKey;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class Authentication {
					public static class: java.lang.Class<com.auth0.android.result.Authentication>;
					public getProfile(): com.auth0.android.result.UserProfile;
					public getCredentials(): com.auth0.android.result.Credentials;
					public constructor(profile: com.auth0.android.result.UserProfile, credentials: com.auth0.android.result.Credentials);
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class AuthenticatorSelection {
					public static class: java.lang.Class<com.auth0.android.result.AuthenticatorSelection>;
					public toString(): string;
					public component1(): string;
					public constructor(residentKey: string, userVerification: string);
					public component2(): string;
					public equals(other: any): boolean;
					public hashCode(): number;
					public getResidentKey(): string;
					public getUserVerification(): string;
					public copy(residentKey: string, userVerification: string): com.auth0.android.result.AuthenticatorSelection;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class AuthnParamsPublicKey {
					public static class: java.lang.Class<com.auth0.android.result.AuthnParamsPublicKey>;
					public component5(): number;
					public component1(): com.auth0.android.result.AuthenticatorSelection;
					public getTimeout(): number;
					public component2(): string;
					public component3(): java.util.List<com.auth0.android.result.PubKeyCredParam>;
					public equals(other: any): boolean;
					public component6(): com.auth0.android.result.PasskeyUser;
					public getUser(): com.auth0.android.result.PasskeyUser;
					public toString(): string;
					public getRelyingParty(): com.auth0.android.result.RelyingParty;
					public component4(): com.auth0.android.result.RelyingParty;
					public getAuthenticatorSelection(): com.auth0.android.result.AuthenticatorSelection;
					public hashCode(): number;
					public getPubKeyCredParams(): java.util.List<com.auth0.android.result.PubKeyCredParam>;
					public copy(authenticatorSelection: com.auth0.android.result.AuthenticatorSelection, challenge: string, pubKeyCredParams: java.util.List<com.auth0.android.result.PubKeyCredParam>, relyingParty: com.auth0.android.result.RelyingParty, timeout: number, user: com.auth0.android.result.PasskeyUser): com.auth0.android.result.AuthnParamsPublicKey;
					public constructor(authenticatorSelection: com.auth0.android.result.AuthenticatorSelection, challenge: string, pubKeyCredParams: java.util.List<com.auth0.android.result.PubKeyCredParam>, relyingParty: com.auth0.android.result.RelyingParty, timeout: number, user: com.auth0.android.result.PasskeyUser);
					public getChallenge(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class Challenge {
					public static class: java.lang.Class<com.auth0.android.result.Challenge>;
					public getChallengeType(): string;
					public constructor(challengeType: string, oobCode: string, bindingMethod: string);
					public getOobCode(): string;
					public getBindingMethod(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class Credentials {
					public static class: java.lang.Class<com.auth0.android.result.Credentials>;
					public getExpiresAt(): java.util.Date;
					public getScope(): string;
					public setRecoveryCode$auth0_release(value: string): void;
					public component5(): java.util.Date;
					public getUser(): com.auth0.android.result.UserProfile;
					public component2(): string;
					public getRefreshToken(): string;
					public equals(other: any): boolean;
					public component3(): string;
					public copy(idToken: string, accessToken: string, type: string, refreshToken: string, expiresAt: java.util.Date, scope: string): com.auth0.android.result.Credentials;
					public getAccessToken(): string;
					public getRecoveryCode(): string;
					public toString(): string;
					public component1(): string;
					public component6(): string;
					public constructor(idToken: string, accessToken: string, type: string, refreshToken: string, expiresAt: java.util.Date, scope: string);
					public component4(): string;
					public getIdToken(): string;
					public getType(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class DatabaseUser {
					public static class: java.lang.Class<com.auth0.android.result.DatabaseUser>;
					public getUsername(): string;
					public constructor(email: string, username: string, isEmailVerified: boolean);
					public getEmail(): string;
					public isEmailVerified(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class OptionalCredentials {
					public static class: java.lang.Class<com.auth0.android.result.OptionalCredentials>;
					public getExpiresAt(): java.util.Date;
					public getScope(): string;
					public component5(): java.util.Date;
					public component2(): string;
					public getRefreshToken(): string;
					public equals(other: any): boolean;
					public component3(): string;
					public getAccessToken(): string;
					public copy(idToken: string, accessToken: string, type: string, refreshToken: string, expiresAt: java.util.Date, scope: string): com.auth0.android.result.OptionalCredentials;
					public toString(): string;
					public component1(): string;
					public component6(): string;
					public constructor(idToken: string, accessToken: string, type: string, refreshToken: string, expiresAt: java.util.Date, scope: string);
					public component4(): string;
					public getIdToken(): string;
					public getType(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class PasskeyAuthenticationMethod {
					public static class: java.lang.Class<com.auth0.android.result.PasskeyAuthenticationMethod>;
					public getId(): string;
					public component5(): string;
					public getCreatedAt(): string;
					public getUserAgent(): string;
					public getPublicKey(): string;
					public component8(): java.util.List<string>;
					public toString(): string;
					public getCredentialBackedUp(): boolean;
					public getUserHandle(): string;
					public component4(): string;
					public getType(): string;
					public hashCode(): number;
					public getIdentityUserId(): string;
					public component11(): string;
					public component7(): string;
					public equals(other: any): boolean;
					public copy(createdAt: string, credentialBackedUp: boolean, credentialDeviceType: string, id: string, identityUserId: string, keyId: string, publicKey: string, transports: java.util.List<string>, type: string, userAgent: string, userHandle: string): com.auth0.android.result.PasskeyAuthenticationMethod;
					public component3(): string;
					public getKeyId(): string;
					public component10(): string;
					public component1(): string;
					public component6(): string;
					public getTransports(): java.util.List<string>;
					public component9(): string;
					public getCredentialDeviceType(): string;
					public component2(): boolean;
					public constructor(createdAt: string, credentialBackedUp: boolean, credentialDeviceType: string, id: string, identityUserId: string, keyId: string, publicKey: string, transports: java.util.List<string>, type: string, userAgent: string, userHandle: string);
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class PasskeyChallenge {
					public static class: java.lang.Class<com.auth0.android.result.PasskeyChallenge>;
					public constructor(authSession: string, authParamsPublicKey: com.auth0.android.result.AuthParamsPublicKey);
					public getAuthSession(): string;
					public getAuthParamsPublicKey(): com.auth0.android.result.AuthParamsPublicKey;
					public toString(): string;
					public component1(): string;
					public copy(authSession: string, authParamsPublicKey: com.auth0.android.result.AuthParamsPublicKey): com.auth0.android.result.PasskeyChallenge;
					public equals(other: any): boolean;
					public hashCode(): number;
					public component2(): com.auth0.android.result.AuthParamsPublicKey;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class PasskeyEnrollmentChallenge {
					public static class: java.lang.Class<com.auth0.android.result.PasskeyEnrollmentChallenge>;
					public getAuthParamsPublicKey(): com.auth0.android.result.AuthnParamsPublicKey;
					public getAuthSession(): string;
					public toString(): string;
					public component1(): string;
					public component2(): string;
					public copy(authenticationMethodId: string, authSession: string, authParamsPublicKey: com.auth0.android.result.AuthnParamsPublicKey): com.auth0.android.result.PasskeyEnrollmentChallenge;
					public equals(other: any): boolean;
					public getAuthenticationMethodId(): string;
					public component3(): com.auth0.android.result.AuthnParamsPublicKey;
					public constructor(authenticationMethodId: string, authSession: string, authParamsPublicKey: com.auth0.android.result.AuthnParamsPublicKey);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class PasskeyRegistrationChallenge {
					public static class: java.lang.Class<com.auth0.android.result.PasskeyRegistrationChallenge>;
					public getAuthParamsPublicKey(): com.auth0.android.result.AuthnParamsPublicKey;
					public component2(): com.auth0.android.result.AuthnParamsPublicKey;
					public getAuthSession(): string;
					public toString(): string;
					public component1(): string;
					public equals(other: any): boolean;
					public copy(authSession: string, authParamsPublicKey: com.auth0.android.result.AuthnParamsPublicKey): com.auth0.android.result.PasskeyRegistrationChallenge;
					public hashCode(): number;
					public constructor(authSession: string, authParamsPublicKey: com.auth0.android.result.AuthnParamsPublicKey);
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class PasskeyUser {
					public static class: java.lang.Class<com.auth0.android.result.PasskeyUser>;
					public copy(displayName: string, id: string, name: string): com.auth0.android.result.PasskeyUser;
					public getDisplayName(): string;
					public toString(): string;
					public getId(): string;
					public component1(): string;
					public component2(): string;
					public getName(): string;
					public equals(other: any): boolean;
					public component3(): string;
					public constructor(displayName: string, id: string, name: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class PubKeyCredParam {
					public static class: java.lang.Class<com.auth0.android.result.PubKeyCredParam>;
					public getAlg(): number;
					public toString(): string;
					public copy(alg: number, type: string): com.auth0.android.result.PubKeyCredParam;
					public component2(): string;
					public component1(): number;
					public equals(other: any): boolean;
					public constructor(alg: number, type: string);
					public getType(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class RelyingParty {
					public static class: java.lang.Class<com.auth0.android.result.RelyingParty>;
					public constructor(id: string, name: string);
					public toString(): string;
					public getId(): string;
					public component1(): string;
					public component2(): string;
					public getName(): string;
					public equals(other: any): boolean;
					public copy(id: string, name: string): com.auth0.android.result.RelyingParty;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class SSOCredentials {
					public static class: java.lang.Class<com.auth0.android.result.SSOCredentials>;
					public component5(): number;
					public component2(): string;
					public getRefreshToken(): string;
					public equals(other: any): boolean;
					public copy(sessionTransferToken: string, idToken: string, issuedTokenType: string, tokenType: string, expiresIn: number, refreshToken: string): com.auth0.android.result.SSOCredentials;
					public component3(): string;
					public getIssuedTokenType(): string;
					public toString(): string;
					public component1(): string;
					public constructor(sessionTransferToken: string, idToken: string, issuedTokenType: string, tokenType: string, expiresIn: number, refreshToken: string);
					public component6(): string;
					public component4(): string;
					public getTokenType(): string;
					public getExpiresIn(): number;
					public getIdToken(): string;
					public getSessionTransferToken(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class UserIdentity {
					public static class: java.lang.Class<com.auth0.android.result.UserIdentity>;
					public getProfileInfo(): java.util.Map<string, any>;
					public getConnection(): string;
					public getAccessTokenSecret(): string;
					public getId(): string;
					public constructor(id: string, connection: string, provider: string, isSocial: boolean, accessToken: string, accessTokenSecret: string, profileInfo: java.util.Map<string, any>);
					public isSocial(): boolean;
					public getAccessToken(): string;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class UserProfile {
					public static class: java.lang.Class<com.auth0.android.result.UserProfile>;
					public getCreatedAt(): java.util.Date;
					public getId(): string;
					public getNickname(): string;
					public getPictureURL(): string;
					public getUserMetadata(): java.util.Map<string, any>;
					public getIdentities(): java.util.List<com.auth0.android.result.UserIdentity>;
					public getFamilyName(): string;
					public getExtraInfo(): java.util.Map<string, any>;
					public getName(): string;
					public constructor(id: string, name: string, nickname: string, pictureURL: string, email: string, isEmailVerified: java.lang.Boolean, familyName: string, createdAt: java.util.Date, identities: java.util.List<com.auth0.android.result.UserIdentity>, extraInfo: java.util.Map<string, any>, userMetadata: java.util.Map<string, any>, appMetadata: java.util.Map<string, any>, givenName: string);
					public getAppMetadata(): java.util.Map<string, any>;
					public isEmailVerified(): java.lang.Boolean;
					public getGivenName(): string;
					public getEmail(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module util {
				export class Auth0UserAgent {
					public static class: java.lang.Class<com.auth0.android.util.Auth0UserAgent>;
					public static HEADER_NAME: string = 'Auth0-Client';
					public getVersion(): string;
					public getValue(): string;
					public constructor(values: string, json: string, bytes: string);
					public getLibraryVersion(): string;
					public constructor();
					public getName(): string;
					public constructor(name: string, version: string);
					public getEnvironment(): java.util.Map<string, string>;
				}
				export module Auth0UserAgent {
					export class Companion {
						public static class: java.lang.Class<com.auth0.android.util.Auth0UserAgent.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module util {
				export class Clock {
					public static class: java.lang.Class<com.auth0.android.util.Clock>;
					/**
					 * Constructs a new instance of the com.auth0.android.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getCurrentTimeMillis(): number });
					public constructor();
					public getCurrentTimeMillis(): number;
				}
			}
		}
	}
}

//Generics information:
//com.auth0.android.callback.AuthenticationCallback:1
//com.auth0.android.callback.BaseCallback:2
//com.auth0.android.callback.Callback:2
//com.auth0.android.callback.ManagementCallback:1
//com.auth0.android.callback.MyAccountCallback:1
//com.auth0.android.callback.RunnableTask:1
//com.auth0.android.request.ErrorAdapter:1
//com.auth0.android.request.JsonAdapter:1
//com.auth0.android.request.Request:2
//com.auth0.android.request.internal.BaseRequest:2
//com.auth0.android.request.internal.GsonAdapter:1
//com.auth0.android.request.internal.RequestFactory:1
