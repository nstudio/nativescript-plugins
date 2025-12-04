export class Credentials {
	constructor(info?: { accessToken?: string; tokenType?: string; idToken?: string; refreshToken?: string; expiresIn?: Date; scope?: string; recoveryCode: string });

	readonly native;

	readonly accessToken: string;

	readonly expiresIn: number;

	readonly expiresAt: Date | null;

	readonly idToken: string;

	readonly recoveryCode: string;

	readonly refreshToken: string;

	readonly scope: string;

	readonly tokenType: string;
}

export class CredentialsManager {
	readonly native;

	clear();

	credentials(scope?: string, minTtl?: number, parameters?: Record<string, any>, forceRefresh?: boolean): Promise<Credentials>;

	store(credentials: Credentials);

	hasValidCredentials(minTtl?: number): boolean;
}

export class WebAuth {
	readonly native;

	useHTTPS(): this;

	start(options?: { scheme?: string; scope?: string; audience?: string; redirectUrl?: string; parameters?: Record<string, string> }): Promise<Credentials>;

	clear(options?: { scheme?: string; federated?: boolean; returnToUrl?: string }): Promise<void>;
}

export class JWT {
	readonly native;

	readonly identifier: string;

	readonly subject: string;

	readonly issuer: string;

	readonly audience: string;

	readonly issuedAt: Date | null;

	readonly expiresAt: Date | null;

	readonly notBefore: Date | null;

	readonly body: Record<string, any>;
}

export function decodeJWT(token: string): JWT;

export class UserInfo {
	readonly native;

	readonly address;

	readonly birthdate: string;

	readonly customClaims: Record<string, any>;

	readonly email: string | null;

	readonly emailVerified: boolean;

	readonly familyName: string;

	readonly gender: string | null;

	readonly givenName: string;

	readonly locale: string | null;

	readonly middleName: string | null;

	readonly name: string;

	readonly nickname: string;

	readonly phoneNumber: string | null;

	readonly phoneNumberVerified: boolean;

	readonly picture: string | null;

	readonly preferredUsername: string | null;

	readonly profile: string | null;

	readonly sub: string | null;

	readonly updatedAt: Date;

	readonly website: string | null;

	readonly zoneinfo: string | null;
}

export class Authentication {
	readonly native;

	userInfo(options: { accessToken: string; headers?: Record<string, string> }): Promise<UserInfo>;

	refreshToken(options: { refreshToken: string; scope?: string; audience: string; headers?: Record<string, string> }): Promise<Credentials>;

	revoke(options: { refreshToken: string; headers?: Record<string, string> }): Promise<void>;
}

export class Auth0 {
	readonly clientId: string;
	readonly domain: string;
	readonly webAuth: WebAuth;
	readonly auth: Authentication;
	readonly credentialsManager: CredentialsManager;

	constructor(options: { clientId: string; domain: string });
}
