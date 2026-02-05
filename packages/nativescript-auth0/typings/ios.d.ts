declare class NSCAuth0 extends NSObject {
	static alloc(): NSCAuth0; // inherited from NSObject

	static authenticationWithClientIdDomainSession(clientId: string, domain: string, session: NSURLSession): NSCAuth0Authentication;

	static authenticationWithSessionBundle(session: NSURLSession, bundle: NSBundle): NSCAuth0Authentication;

	static credentialsManagerWithAuthentication(authentication: NSCAuth0Authentication): NSCAuth0CredentialsManager;

	static decodeJWTError(token: string): NSCAuth0DecodedJWT;

	static new(): NSCAuth0; // inherited from NSObject

	static webAuthWithClientIdDomainSession(clientId: string, domain: string, session: NSURLSession): NSCAuth0WebAuth;

	static webAuthWithSessionBundle(session: NSURLSession, bundle: NSBundle): NSCAuth0WebAuth;
}

declare class NSCAuth0Authentication extends NSObject {
	static alloc(): NSCAuth0Authentication; // inherited from NSObject

	static new(): NSCAuth0Authentication; // inherited from NSObject

	refreshToken(refreshToken: string, scope: string, audience: string, headers: NSDictionary<string, string>, callback: (p1: NSCAuth0Credentials, p2: NSError) => void): void;

	revoke(refreshToken: string, headers: NSDictionary<string, string>, callback: (p1: NSError) => void): void;

	userInfo(token: string, headers: NSDictionary<string, string>, callback: (p1: NSCAuth0UserInfo, p2: NSError) => void): void;
}

declare class NSCAuth0Credentials extends NSObject {
	static alloc(): NSCAuth0Credentials; // inherited from NSObject

	static new(): NSCAuth0Credentials; // inherited from NSObject

	readonly accessToken: string;

	readonly expiresIn: Date;

	readonly idToken: string;

	readonly recoveryCode: string;

	readonly refreshToken: string;

	readonly scope: string;

	readonly tokenType: string;

	constructor();

	init(accessToken: string, tokenType: string, idToken: string, refreshToken: string, expiresIn: Date, scope: string, recoveryCode: string): this;
}

declare class NSCAuth0CredentialsManager extends NSObject {
	static alloc(): NSCAuth0CredentialsManager; // inherited from NSObject

	static new(): NSCAuth0CredentialsManager; // inherited from NSObject

	canRenew(): boolean;

	clear(): boolean;

	credentials(scope: string, minTtl: number, parameters: NSDictionary<string, any>, forceRefresh: boolean, callback: (p1: NSCAuth0Credentials, p2: NSError) => void): void;

	hasValid(minTTL: number): boolean;

	store(credentials: NSCAuth0Credentials): boolean;

	user(): NSCAuth0UserInfo;
}

declare class NSCAuth0DecodedJWT extends NSObject {
	static alloc(): NSCAuth0DecodedJWT; // inherited from NSObject

	static new(): NSCAuth0DecodedJWT; // inherited from NSObject

	readonly audience: NSArray<string>;

	readonly body: NSDictionary<string, any>;

	readonly expired: boolean;

	readonly expiresAt: Date;

	readonly header: NSDictionary<string, any>;

	readonly identifier: string;

	readonly issuedAt: Date;

	readonly issuer: string;

	readonly notBefore: Date;

	readonly signature: string;

	readonly string: string;

	readonly subject: string;

	expiresIn(seconds: number): boolean;
}

declare class NSCAuth0UserInfo extends NSObject {
	static alloc(): NSCAuth0UserInfo; // inherited from NSObject

	static new(): NSCAuth0UserInfo; // inherited from NSObject

	readonly address: NSDictionary<string, string>;

	readonly birthdate: string;

	readonly customClaims: NSDictionary<string, any>;

	readonly email: string;

	readonly emailVerified: boolean;

	readonly familyName: string;

	readonly gender: string;

	readonly givenName: string;

	readonly locale: NSLocale;

	readonly middleName: string;

	readonly name: string;

	readonly nickname: string;

	readonly phoneNumber: string;

	readonly phoneNumberVerified: boolean;

	readonly picture: NSURL;

	readonly preferredUsername: string;

	readonly profile: NSURL;

	readonly sub: string;

	readonly updatedAt: Date;

	readonly website: NSURL;

	readonly zoneinfo: NSTimeZone;
}

declare class NSCAuth0WebAuth extends NSObject {
	static alloc(): NSCAuth0WebAuth; // inherited from NSObject

	static new(): NSCAuth0WebAuth; // inherited from NSObject

	clearSessionWithFederated(federated: boolean, callback: (p1: NSError) => void): void;

	start(scope: string, audience: string, parameters: NSDictionary<string, string>, ephemeral: boolean, callback: (p1: NSCAuth0Credentials, p2: NSError) => void): void;

	useHTTPS(): NSCAuth0WebAuth;
}
