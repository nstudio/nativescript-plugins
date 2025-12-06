import { Utils } from '@nativescript/core';

declare const kotlin: any;
export class Credentials {
	static fromNative(credentials: com.auth0.android.result.Credentials): Credentials {
		if (credentials instanceof com.auth0.android.result.Credentials) {
			const ret = new Credentials();
			ret.credentials = credentials;
			return ret;
		}
		return null;
	}

	private credentials: com.auth0.android.result.Credentials;

	constructor(info?: { accessToken?: string; tokenType?: string; idToken?: string; refreshToken?: string; expiresIn?: Date; scope?: string; recoveryCode: string }) {
		if (info) {
			let date: number;
			if (info.expiresIn && info.expiresIn instanceof Date) {
				date = info.expiresIn.getTime();
			} else {
				date = Date.now() + 86400 * 1000;
			}

			this.credentials = io.nstudio.plugins.auth0.Auth0.createCredentials(info.accessToken ?? null, info.tokenType ?? null, info.idToken ?? null, info.refreshToken ?? null, date, info.scope ?? null, info.recoveryCode ?? null);
		}
	}

	get native() {
		return this.credentials;
	}

	get accessToken(): string {
		return this.credentials.getAccessToken();
	}

	get expiresIn(): number {
		return this.credentials.getExpiresAt().getTime() - Date.now();
	}

	get expiresAt(): Date {
		return new Date(this.credentials.getExpiresAt().getTime());
	}

	get idToken(): string {
		return this.credentials.getIdToken();
	}

	get recoveryCode(): string {
		return this.credentials.getRecoveryCode();
	}

	get refreshToken(): string {
		return this.credentials.getRefreshToken();
	}

	get scope(): string {
		return this.credentials.getScope();
	}

	get tokenType(): string {
		return this.credentials.getType();
	}

	toJSON() {
		const redacted = '<REDACTED>';
		return {
			accessToken: redacted,
			expiresIn: this.expiresIn,
			idToken: redacted,
			recoveryCode: this.recoveryCode,
			refreshToken: this.refreshToken ? redacted : null,
			scope: this.scope,
			tokenType: this.tokenType ? redacted : null,
		};
	}
}

export class CredentialsManager {
	static fromNative(manager: io.nstudio.plugins.auth0.CredentialsManager): CredentialsManager {
		if (manager instanceof io.nstudio.plugins.auth0.CredentialsManager) {
			const ret = new CredentialsManager();
			ret.credentialsManager = manager;
			return ret;
		}
		return null;
	}

	private credentialsManager: io.nstudio.plugins.auth0.CredentialsManager;

	get native() {
		return this.credentialsManager;
	}

	clear() {
		this.credentialsManager.clear();
	}

	credentials(scope?: string, minTtl?: number, parameters?: Record<string, any>, forceRefresh?: boolean): Promise<Credentials> {
		return new Promise((resolve, reject) => {
			this.credentialsManager.credentials(
				scope ?? null,
				minTtl ?? 0,
				Utils.dataSerialize(parameters ?? {}),
				forceRefresh ?? false,
				new kotlin.jvm.functions.Function2({
					invoke: (credentials: com.auth0.android.result.Credentials, error: java.lang.Throwable) => {
						if (error) {
							reject(error);
						} else {
							resolve(Credentials.fromNative(credentials));
						}
					},
				}),
			);
		});
	}

	store(credentials: Credentials) {
		this.credentialsManager.store(credentials.native);
	}

	hasValidCredentials(minTtl?: number): boolean {
		return this.credentialsManager.hasValid(minTtl ?? 0);
	}
}

export class WebAuth {
	static fromNative(auth: io.nstudio.plugins.auth0.WebAuth): WebAuth {
		if (auth instanceof io.nstudio.plugins.auth0.WebAuth) {
			const ret = new WebAuth();
			ret.webAuth = auth;
			return ret;
		}
		return null;
	}

	get native() {
		return this.webAuth;
	}

	private webAuth: io.nstudio.plugins.auth0.WebAuth;

	useHTTPS(): this {
		return this;
	}

	start(options?: { scheme?: string; scope?: string; audience?: string; redirectUrl?: string; parameters?: Record<string, string> }) {
		return new Promise<Credentials>((resolve, reject) => {
			this.webAuth.start(
				Utils.android.getCurrentActivity(),
				options?.scheme ?? null,
				options.scope ?? null,
				options?.audience ?? null,
				options?.redirectUrl ?? null,
				Utils.dataSerialize(options?.parameters ?? {}) as any,
				new kotlin.jvm.functions.Function2({
					invoke: (credentials: com.auth0.android.result.Credentials, error: java.lang.Throwable) => {
						if (error) {
							reject(error);
						} else {
							resolve(Credentials.fromNative(credentials));
						}
					},
				}),
			);
		});
	}

	clear(options?: { scheme?: string; federated?: boolean; returnToUrl?: string }) {
		return new Promise<void>((resolve, reject) => {
			this.webAuth.clearSession(
				Utils.android.getCurrentActivity(),
				options?.scheme ?? null,
				options?.federated ?? false,
				options?.returnToUrl ?? null,
				new kotlin.jvm.functions.Function1({
					invoke: (error: java.lang.Throwable) => {
						if (error) {
							reject(error);
						} else {
							resolve();
						}
					},
				}),
			);
		});
	}
}

export class JWT {
	static fromNative(jwt: io.nstudio.plugins.auth0.DecodedJWT): JWT {
		if (jwt instanceof io.nstudio.plugins.auth0.DecodedJWT) {
			const ret = new JWT();
			ret.jwt = jwt;
			return ret;
		}
		return null;
	}

	private jwt: io.nstudio.plugins.auth0.DecodedJWT;

	get native() {
		return this.jwt;
	}

	get identifier() {
		return this.jwt.getIdentifier();
	}

	get subject() {
		return this.jwt.getSubject();
	}

	get issuer() {
		return this.jwt.getIssuer();
	}

	get audience() {
		return Utils.dataDeserialize(this.jwt.getAudience());
	}

	get issuedAt() {
		const issuedAt = this.jwt.getIssuedAt();
		if (issuedAt) {
			return new Date(issuedAt.getTime());
		}
		return null;
	}

	get expiresAt() {
		const expiresAt = this.jwt.getExpiresAt();
		if (expiresAt) {
			return new Date(expiresAt.getTime());
		}
		return null;
	}

	get notBefore() {
		const nb = this.jwt.getNotBefore();
		if (nb) {
			return new Date(nb.getTime());
		}
		return null;
	}

	get body() {
		return Utils.dataDeserialize(this.jwt.getBody());
	}

	toJSON() {
		return {
			identifier: this.identifier,
			subject: this.subject,
			issuer: this.issuer,
			audience: this.audience,
			issuedAt: this.issuedAt,
			expiresAt: this.expiresAt,
			notBefore: this.notBefore,
			body: this.body,
		};
	}
}

export function decodeJWT(token: string): JWT {
	return JWT.fromNative(io.nstudio.plugins.auth0.Auth0.decodeJWT(token));
}

export class UserInfo {
	static fromNative(userInfo: com.auth0.android.result.UserProfile): UserInfo {
		if (userInfo instanceof com.auth0.android.result.UserProfile) {
			const ret = new UserInfo();
			ret.userInfo = userInfo;
			return ret;
		}
		return null;
	}
	private userInfo: com.auth0.android.result.UserProfile;

	get native() {
		return this.userInfo;
	}

	get address() {
		// todo
		return [];
	}

	get birthdate(): string {
		return null;
	}

	get customClaims(): Record<string, any> {
		return {};
	}

	get email(): string {
		return null;
	}

	get emailVerified(): boolean {
		const verified = this.userInfo.isEmailVerified();

		return verified.booleanValue?.() || (verified as never);
	}

	get familyName(): string {
		return this.userInfo.getFamilyName();
	}

	get gender(): string {
		return null;
	}

	get givenName(): string {
		return this.userInfo.getGivenName();
	}

	get locale(): string {
		return null;
	}

	get middleName(): string {
		return null;
	}

	get name(): string {
		return this.userInfo.getName();
	}

	get nickname(): string {
		return this.userInfo.getNickname();
	}

	get phoneNumber(): string {
		return null;
	}

	get phoneNumberVerified(): boolean {
		return false; // todo
	}

	get picture(): string | null {
		return this.userInfo.getPictureURL();
	}

	get preferredUsername(): string {
		return null;
	}

	get profile(): string | null {
		return null;
	}

	get sub(): string {
		return null;
	}

	get updatedAt(): Date {
		return null;
	}

	get website(): string | null {
		return null;
	}

	get zoneinfo(): string {
		return null;
	}
}

export class Authentication {
	static fromNative(auth: io.nstudio.plugins.auth0.Authentication): Authentication {
		if (auth instanceof io.nstudio.plugins.auth0.Authentication) {
			const ret = new Authentication();
			ret.authentication = auth;
			return ret;
		}
		return null;
	}

	private authentication: io.nstudio.plugins.auth0.Authentication;

	get native() {
		return this.authentication;
	}

	userInfo(options: { accessToken: string; headers?: Record<string, string> }) {
		return new Promise<UserInfo>((resolve, reject) => {
			this.authentication.userInfo(
				options.accessToken,
				Utils.dataSerialize(options.headers ?? {}),
				new kotlin.jvm.functions.Function2({
					invoke: (userInfo: com.auth0.android.result.UserProfile, error: java.lang.Throwable) => {
						if (error) {
							reject(error);
						} else {
							resolve(UserInfo.fromNative(userInfo));
						}
					},
				}),
			);
		});
	}

	refreshToken(options: { refreshToken: string; scope?: string; audience: string; headers?: Record<string, string> }) {
		return new Promise<Credentials>((resolve, reject) => {
			this.authentication.refreshToken(
				options.refreshToken,
				options.scope ?? null,
				options?.audience ?? null,
				Utils.dataSerialize(options.headers ?? {}),
				new kotlin.jvm.functions.Function2({
					invoke: (credentials: com.auth0.android.result.Credentials, error: java.lang.Throwable) => {
						if (error) {
							reject(error);
						} else {
							resolve(Credentials.fromNative(credentials));
						}
					},
				}),
			);
		});
	}

	revoke(options: { refreshToken: string; headers?: Record<string, string> }) {
		return new Promise<void>((resolve, reject) => {
			this.authentication.revoke(
				options.refreshToken,
				Utils.dataSerialize(options.headers ?? {}),
				new kotlin.jvm.functions.Function1({
					invoke: (error: java.lang.Throwable) => {
						if (error) {
							reject(error);
						} else {
							resolve();
						}
					},
				}),
			);
		});
	}
}

export class Auth0 {
	readonly clientId: string;
	readonly domain: string;
	readonly webAuth: WebAuth;
	readonly auth: Authentication;
	readonly credentialsManager: CredentialsManager;

	constructor(options: { clientId: string; domain: string }) {
		this.clientId = options.clientId;
		this.domain = options.domain;

		this.webAuth = WebAuth.fromNative(io.nstudio.plugins.auth0.Auth0.webAuth(this.clientId, this.domain));
		const authentication = io.nstudio.plugins.auth0.Auth0.authentication(this.clientId, this.domain);

		this.auth = Authentication.fromNative(authentication);

		this.credentialsManager = CredentialsManager.fromNative(io.nstudio.plugins.auth0.Auth0.credentialsManager(Utils.android.getApplicationContext(), authentication));
	}
}
