import { Utils } from '@nativescript/core';
import { IIntercomRegisterUser } from './common';

// declare var io;
export class IntercomModule {
	static init(apiKey: string, appId: string) {
		io.intercom.android.sdk.Intercom.initialize(Utils.android.getApplicationContext() as any, apiKey, appId);
	}
	static registerIdentifiedUser(options: IIntercomRegisterUser) {
		if (typeof options.userId == 'number') {
			options.userId = String(options.userId);
		}
		var registration = io.intercom.android.sdk.identity.Registration.create();
		if (options.userId && options.userId.length > 0) {
			registration.withUserId(options.userId);
		}
		if (options.email && options.email.length > 0) {
			registration.withEmail(options.email);
		}
		io.intercom.android.sdk.Intercom.client().registerIdentifiedUser(registration);
	}
	static registerUnidentifiedUser() {
		io.intercom.android.sdk.Intercom.client().registerUnidentifiedUser();
	}
	static setUserJwt(jwt: string) {
		io.intercom.android.sdk.Intercom.client().setUserJwt(jwt);
	}
	static reset() {
		io.intercom.android.sdk.Intercom.client().reset();
	}
	static setSecureMode(secureHash, secureData) {
		// @ts-ignore
		io.intercom.android.sdk.Intercom.client().setSecureMode(secureHash, secureData);
	}
	static updateUser(attributes) {
		io.intercom.android.sdk.Intercom.client().updateUser(attributes);
	}
	static logEvent(eventName, metaData) {
		if (metaData && metaData.length) {
			io.intercom.android.sdk.Intercom.client().logEvent(eventName, metaData);
		} else {
			io.intercom.android.sdk.Intercom.client().logEvent(eventName);
		}
	}
	static displayMessenger() {
		io.intercom.android.sdk.Intercom.client().displayMessenger();
	}
	static displayMessageComposer() {
		io.intercom.android.sdk.Intercom.client().displayMessageComposer();
	}
	static displayMessageComposerWithInitialMessage(initialMessage?: string) {
		io.intercom.android.sdk.Intercom.client().displayMessageComposer(initialMessage);
	}
	static displayConversationsList() {
		io.intercom.android.sdk.Intercom.client().displayConversationsList();
	}
	static unreadConversationCount() {
		return io.intercom.android.sdk.Intercom.client().getUnreadConversationCount();
	}
	static setLauncherVisibility(visible) {
		io.intercom.android.sdk.Intercom.client().setLauncherVisibility(visible ? io.intercom.android.sdk.Intercom.VISIBLE : io.intercom.android.sdk.Intercom.GONE);
	}
	static setInAppMessageVisibility(visible) {
		io.intercom.android.sdk.Intercom.client().setInAppMessageVisibility(visible ? io.intercom.android.sdk.Intercom.VISIBLE : io.intercom.android.sdk.Intercom.GONE);
	}
	static hideMessenger() {
		io.intercom.android.sdk.Intercom.client().hideIntercom();
	}
	static setThemeOverride(style: 'none' | 'light' | 'dark' | 'system') {
		let themeOverride: io.intercom.android.sdk.ui.theme.ThemeMode;
		switch (style) {
			case 'light':
				themeOverride = io.intercom.android.sdk.ui.theme.ThemeMode.LIGHT;
				break;
			case 'dark':
				themeOverride = io.intercom.android.sdk.ui.theme.ThemeMode.DARK;
				break;
			case 'system':
				themeOverride = io.intercom.android.sdk.ui.theme.ThemeMode.SYSTEM;
				break;
			case 'none':
			default:
				themeOverride = io.intercom.android.sdk.ui.theme.ThemeMode.LIGHT;
				break;
		}
		io.intercom.android.sdk.Intercom.client().setThemeMode(themeOverride);
	}
	static enableLogging() {
		io.intercom.android.sdk.Intercom.setLogLevel(io.intercom.android.sdk.Intercom.LogLevel.DEBUG);
	}
}
