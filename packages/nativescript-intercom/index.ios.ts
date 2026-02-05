import { IIntercomRegisterUser } from './common';

export class IntercomModule {
	static initialized = false;
	static init(apiKey: string, appId: string) {
		Intercom.setApiKeyForAppId(apiKey, appId);
		IntercomModule.initialized = true;
	}
	static registerIdentifiedUser(options: IIntercomRegisterUser) {
		if (typeof options.userId == 'number') {
			options.userId = String(options.userId);
		}
		const attrs = ICMUserAttributes.new();
		if (options.userId && options.userId.length > 0) {
			attrs.userId = options.userId;
		} else if (options.email && options.email.length > 0) {
			attrs.email = options.email;
		}
		if (attrs.userId || attrs.email) {
			Intercom.loginUserWithUserAttributesSuccessFailure(
				attrs,
				() => {},
				(error) => {},
			);
		} else {
			console.info('IntercomModule Error - No user registered. You must supply an email, a userId or both');
		}
	}
	static registerUnidentifiedUser() {
		Intercom.loginUnidentifiedUserWithSuccessFailure(
			() => {},
			(error) => {},
		);
	}
	static setUserJwt(jwt: string) {
		Intercom.setUserJwt(jwt);
	}
	static displayMessenger() {
		Intercom.presentIntercom(Space.helpCenter);
	}
	static displayMessageComposer(initialMessage?: string) {
		Intercom.presentMessageComposer(initialMessage || '');
	}
	static hideMessenger() {
		Intercom.hideIntercom();
	}
	static setThemeOverride(style: 'none' | 'light' | 'dark' | 'system') {
		let themeOverride: ICMThemeOverride;
		switch (style) {
			case 'light':
				themeOverride = ICMThemeOverride.Light;
				break;
			case 'dark':
				themeOverride = ICMThemeOverride.Dark;
				break;
			case 'system':
				themeOverride = ICMThemeOverride.System;
				break;
			case 'none':
			default:
				themeOverride = ICMThemeOverride.None;
				break;
		}
		Intercom.setThemeOverride(themeOverride);
	}
	static reset() {
		Intercom.logout();
	}
}
