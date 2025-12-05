import { Device, Utils } from '@nativescript/core';
import { isRealDevice } from '@nativescript/core/utils';

export class Credentials {
	static fromNative(credentials: NSCAuth0Credentials): Credentials {
		if (credentials instanceof NSCAuth0Credentials) {
			const ret = new Credentials();
			ret.credentials = credentials;
			return ret;
		}
		return null;
	}

	private credentials: NSCAuth0Credentials;

	constructor(info?: { accessToken?: string; tokenType?: string; idToken?: string; refreshToken?: string; expiresIn?: Date; scope?: string; recoveryCode: string }) {
		if (info) {
			this.credentials = NSCAuth0Credentials.alloc().init(info.accessToken ?? null, info.tokenType ?? null, info.idToken ?? null, info.refreshToken ?? null, info.expiresIn ?? null, info.scope ?? null, info.recoveryCode ?? null);
		}
	}

	get native() {
		return this.credentials;
	}

	get accessToken(): string {
		return this.credentials.accessToken;
	}

	get expiresIn(): Date {
		return this.credentials.expiresIn;
	}

	get idToken(): string {
		return this.credentials.idToken;
	}

	get recoveryCode(): string {
		return this.credentials.recoveryCode;
	}

	get refreshToken(): string {
		return this.credentials.refreshToken;
	}

	get scope(): string {
		return this.credentials.scope;
	}

	get tokenType(): string {
		return this.credentials.tokenType;
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
	static fromNative(manager: NSCAuth0CredentialsManager): CredentialsManager {
		if (manager instanceof NSCAuth0CredentialsManager) {
			const ret = new CredentialsManager();
			ret.credentialsManager = manager;
			return ret;
		}
		return null;
	}

	private credentialsManager: NSCAuth0CredentialsManager;

	get native() {
		return this.credentialsManager;
	}

	clear() {
		this.credentialsManager.clear();
	}

	credentials(scope?: string, minTtl?: number, parameters?: Record<string, any>, forceRefresh?: boolean): Promise<Credentials> {
		return new Promise((resolve, reject) => {
			this.credentialsManager.credentials(scope ?? null, minTtl ?? 0, Utils.dataSerialize(parameters ?? {}), forceRefresh ?? false, (credentials, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(Credentials.fromNative(credentials));
				}
			});
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
	static fromNative(auth: NSCAuth0WebAuth): WebAuth {
		if (auth instanceof NSCAuth0WebAuth) {
			const ret = new WebAuth();
			ret.webAuth = auth;
			return ret;
		}
		return null;
	}

	get native() {
		return this.webAuth;
	}

	private webAuth: NSCAuth0WebAuth;

	useHTTPS(): this {
		this.webAuth.useHTTPS();
		return this;
	}

	start(options?: { scheme?: string; scope?: string; audience?: string; redirectUrl?: string; parameters?: Record<string, string> }) {
		return new Promise<Credentials>((resolve, reject) => {
			this.webAuth.start(options?.scope, options?.audience, Utils.dataSerialize(options?.parameters ?? {}) as any, (credentials, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(Credentials.fromNative(credentials));
				}
			});
		});
	}

	clear(options?: { scheme?: string; federated?: boolean; returnToUrl?: string }) {
		return new Promise<void>((resolve, reject) => {
			this.webAuth.clearSessionWithFederated(options?.federated ?? false, (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});
	}
}

export class JWT {
	static fromNative(jwt: NSCAuth0DecodedJWT): JWT {
		if (jwt instanceof NSCAuth0DecodedJWT) {
			const ret = new JWT();
			ret.jwt = jwt;
			return ret;
		}
		return null;
	}

	private jwt: NSCAuth0DecodedJWT;

	get native() {
		return this.jwt;
	}

	get identifier() {
		return this.jwt.identifier;
	}

	get subject() {
		return this.jwt.subject;
	}

	get issuer() {
		return this.jwt.issuer;
	}

	get audience() {
		return Utils.dataDeserialize(this.jwt.audience);
	}

	get issuedAt() {
		return this.jwt.issuedAt;
	}

	get expiresAt() {
		return this.jwt.expiresAt;
	}

	get notBefore() {
		return this.jwt.notBefore;
	}

	get body() {
		return Utils.dataDeserialize(this.jwt.body);
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
	return JWT.fromNative(NSCAuth0.decodeJWTError(token));
}

export class UserInfo {
	static fromNative(userInfo: NSCAuth0UserInfo): UserInfo {
		if (userInfo instanceof NSCAuth0UserInfo) {
			const ret = new UserInfo();
			ret.userInfo = userInfo;
			return ret;
		}
		return null;
	}
	private userInfo: NSCAuth0UserInfo;

	get native() {
		return this.userInfo;
	}

	get address() {
		return Utils.dataDeserialize(this.userInfo.address);
	}

	get birthdate(): string {
		return this.userInfo.birthdate;
	}

	get customClaims(): Record<string, any> {
		return Utils.dataDeserialize(this.userInfo.customClaims);
	}

	get email(): string {
		return this.userInfo.email;
	}

	get emailVerified(): boolean {
		return this.userInfo.emailVerified;
	}

	get familyName(): string {
		return this.userInfo.familyName;
	}

	get gender(): string {
		return this.userInfo.gender;
	}

	get givenName(): string {
		return this.userInfo.givenName;
	}

	get locale(): string {
		return this.userInfo.locale.languageCode;
	}

	get middleName(): string {
		return this.userInfo.middleName;
	}

	get name(): string {
		return this.userInfo.name;
	}

	get nickname(): string {
		return this.userInfo.nickname;
	}

	get phoneNumber(): string {
		return this.userInfo.phoneNumber;
	}

	get phoneNumberVerified(): boolean {
		return this.userInfo.phoneNumberVerified;
	}

	get picture(): string | null {
		const picture = this.userInfo.picture;
		if (picture) {
			return picture.absoluteString;
		}
		return null;
	}

	get preferredUsername(): string {
		return this.userInfo.preferredUsername;
	}

	get profile(): string | null {
		const profile = this.userInfo.profile;
		if (profile) {
			return profile.absoluteString;
		}
		return null;
	}

	get sub(): string {
		return this.userInfo.sub;
	}

	get updatedAt(): Date {
		return this.userInfo.updatedAt;
	}

	get website(): string | null {
		const website = this.userInfo.website;
		if (website) {
			return website.absoluteString;
		}
		return null;
	}

	get zoneinfo(): string {
		return this.userInfo.zoneinfo.name;
	}
}

export class Authentication {
	static fromNative(auth: NSCAuth0Authentication): Authentication {
		if (auth instanceof NSCAuth0Authentication) {
			const ret = new Authentication();
			ret.authentication = auth;
			return ret;
		}
		return null;
	}

	private authentication: NSCAuth0Authentication;

	get native() {
		return this.authentication;
	}

	userInfo(options: { accessToken: string; headers?: Record<string, string> }) {
		return new Promise<UserInfo>((resolve, reject) => {
			this.authentication.userInfo(options.accessToken, Utils.dataSerialize(options.headers ?? {}), (userInfo, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(UserInfo.fromNative(userInfo));
				}
			});
		});
	}

	refreshToken(options: { refreshToken: string; audience?: string; scope?: string; headers?: Record<string, string> }) {
		return new Promise<Credentials>((resolve, reject) => {
			this.authentication.refreshToken(options.refreshToken, options.scope ?? null, options.audience ?? null, Utils.dataSerialize(options.headers ?? {}), (credentials, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(Credentials.fromNative(credentials));
				}
			});
		});
	}

	revoke(options: { refreshToken: string; headers?: Record<string, string> }) {
		return new Promise<void>((resolve, reject) => {
			this.authentication.revoke(options.refreshToken, Utils.dataSerialize(options.headers ?? {}), (error) => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
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

		const sessionConfig = parseFloat(Device.sdkVersion) >= 18.0 && !isRealDevice() ? NSURLSessionConfiguration.ephemeralSessionConfiguration : NSURLSessionConfiguration.defaultSessionConfiguration;

		const session = NSURLSession.sessionWithConfiguration(sessionConfig);

		this.webAuth = WebAuth.fromNative(NSCAuth0.webAuthWithClientIdDomainSession(this.clientId, this.domain, session));
		const authentication = NSCAuth0.authenticationWithClientIdDomainSession(this.clientId, this.domain, session);

		this.auth = Authentication.fromNative(authentication);
		this.credentialsManager = CredentialsManager.fromNative(NSCAuth0.credentialsManagerWithAuthentication(authentication));
	}
}
