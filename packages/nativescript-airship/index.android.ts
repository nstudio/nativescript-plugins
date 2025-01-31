import { Airship as IAirship, AirshipPush as IAirshipPush, AirshipChannel as IAirshipChannel, AirshipContact as IAirshipContact, AirshipPrivacyManager as IAirshipPrivacyManager, AirshipConfig as IAirshipConfig, AirshipPushPresentationOptions } from '.';

import { Application, Utils } from '@nativescript/core';

import { LogLevel, PrivacyFeature } from './common';
export { LogLevel, PrivacyFeature } from './common';

function toFeature(feature: PrivacyFeature) {
	switch (feature) {
		case PrivacyFeature.Push:
			return com.urbanairship.PrivacyManager.FEATURE_PUSH;
		case PrivacyFeature.All:
			return com.urbanairship.PrivacyManager.FEATURE_ALL;
		case PrivacyFeature.Chat:
			return com.urbanairship.PrivacyManager.FEATURE_ANALYTICS;
		case PrivacyFeature.Contacts:
			return com.urbanairship.PrivacyManager.FEATURE_CONTACTS;
		case PrivacyFeature.InAppAutomation:
			return com.urbanairship.PrivacyManager.FEATURE_IN_APP_AUTOMATION;
		case PrivacyFeature.MessageCenter:
			return com.urbanairship.PrivacyManager.FEATURE_MESSAGE_CENTER;
		case PrivacyFeature.None:
			return com.urbanairship.PrivacyManager.FEATURE_NONE;
		case PrivacyFeature.TagsAndAttributes:
			return com.urbanairship.PrivacyManager.FEATURE_TAGS_AND_ATTRIBUTES;
		case PrivacyFeature.Analytics:
			return com.urbanairship.PrivacyManager.FEATURE_ANALYTICS;
	}
	return undefined;
}

export class AirshipPrivacyManager implements IAirshipPrivacyManager {
	private static _instance: com.urbanairship.PrivacyManager;
	private static getInstance() {
		if (!this._instance) {
			this._instance = com.urbanairship.UAirship.shared().getPrivacyManager();
		}
		return this._instance;
	}

	enableFeature(feature: PrivacyFeature) {
		const feat = toFeature(feature);
		if (feat !== undefined) {
			AirshipPrivacyManager.getInstance().setEnabledFeatures([feat]);
		}
	}

	enableFeatures(features: PrivacyFeature[]) {
		const feats = [];
		for (let i = 0; i < features.length; i++) {
			const feature = toFeature(features[i]);
			if (feature !== undefined) {
				feats.push(feature);
			}
		}
		if (feats.length > 0) {
			AirshipPrivacyManager.getInstance().setEnabledFeatures(feats);
		}
	}

	disableFeature(feature: PrivacyFeature) {
		const feat = toFeature(feature);
		if (feat !== undefined) {
			AirshipPrivacyManager.getInstance().disable([feat]);
		}
	}

	disableFeatures(features: PrivacyFeature[]) {
		const feats = [];
		for (let i = 0; i < features.length; i++) {
			const feature = toFeature(features[i]);
			if (feature !== undefined) {
				feats.push(feature);
			}
		}
		if (feats.length > 0) {
			AirshipPrivacyManager.getInstance().disable(feats);
		}
	}
}

export class AirshipContact implements IAirshipContact {
	private static _instance: com.urbanairship.contacts.Contact;
	private static getInstance() {
		if (!this._instance) {
			this._instance = com.urbanairship.UAirship.shared().getContact();
		}
		return this._instance;
	}
	identify(value: string) {
		return AirshipContact.getInstance().identify(value);
	}

	reset() {
		AirshipContact.getInstance().reset();
	}
}

export class AirshipChannel implements IAirshipChannel {
	private static _instance: com.urbanairship.channel.AirshipChannel;
	private static getInstance() {
		if (!this._instance) {
			this._instance = com.urbanairship.UAirship.shared().getChannel();
		}
		return this._instance;
	}

	get id(): string {
		return AirshipChannel.getInstance().getChannelId().get();
	}

	removeTags(names: string[]) {
		AirshipChannel.getInstance().editTags().removeTags(toSet(names));
	}
	removeTag(name: string) {
		AirshipChannel.getInstance().editTags().removeTag(name);
	}
	addTag(name: string) {
		AirshipChannel.getInstance().editTags().addTag(name);
	}
	addTags(names: string[]) {
		AirshipChannel.getInstance().editTags().addTags(toSet(names));
	}

	getTags(): string[] {
		return fromSet(AirshipChannel.getInstance().getTags());
	}
}

export class AirshipPush implements IAirshipPush {
	private static _instance: com.urbanairship.push.PushManager;
	private static getInstance() {
		if (!this._instance) {
			this._instance = com.urbanairship.UAirship.shared().getPushManager();
		}
		return this._instance;
	}
	autobadge: boolean;
	presentationOptions: AirshipPushPresentationOptions[];

	setQuietTime(startHour: number, startMinute: number, endHour: number, endMinute: number) {}
	setBadge(count: number) {}
	resetBadget() {}

	enable() {
		return new Promise<boolean>((resolve, reject) => {
			AirshipPush.getInstance().setUserNotificationsEnabled(true);
			resolve(com.urbanairship.UAirship.shared().getPrivacyManager().isEnabled([com.urbanairship.PrivacyManager.FEATURE_PUSH]));
		});
	}
}

export class AirshipConfig implements IAirshipConfig {
	_native: com.urbanairship.AirshipConfigOptions.Builder;
	constructor() {
		this._native = new com.urbanairship.AirshipConfigOptions.Builder();
	}

	static defaultConfig() {
		const config = new AirshipConfig();
		config._native = new com.urbanairship.AirshipConfigOptions.Builder().applyDefaultProperties(Utils.android.getApplicationContext());
		return config;
	}

	get inProduction(): boolean {
		return this._native.build().inProduction;
	}

	set inProduction(value: boolean) {
		this._native.setInProduction(value);
	}

	get logLevel(): LogLevel {
		const config = this._native.build();
		switch (config.logLevel) {
			case android.util.Log.DEBUG:
				return LogLevel.Debug;
			case android.util.Log.ERROR:
				return LogLevel.Error;
			case android.util.Log.INFO:
				return LogLevel.Info;
			case android.util.Log.ASSERT:
				return LogLevel.None;
			case android.util.Log.VERBOSE:
				return LogLevel.Trace;
			case android.util.Log.WARN:
				return LogLevel.Warn;
			default:
				return LogLevel.Undefined;
		}
	}

	get appKey(): string {
		return this._native.build().appKey;
	}
	get appSecret(): string {
		return this._native.build().appSecret;
	}

	setProdAppKey(key: string) {
		this._native.setProductionAppKey(key);
	}
	setProdSecretKey(key: string) {
		this._native.setProductionAppSecret(key);
	}
	setDevAppKey(key: string) {
		this._native.setDevelopmentAppKey(key);
	}
	setDevSecretKey(key: string) {
		this._native.setDevelopmentAppSecret(key);
	}

	setProdLogLevel(level: LogLevel) {
		let lvl;
		switch (level) {
			case LogLevel.Debug:
				lvl = android.util.Log.DEBUG;
				break;
			case LogLevel.Error:
				lvl = android.util.Log.ERROR;
				break;
			case LogLevel.Info:
				lvl = android.util.Log.INFO;
				break;
			case LogLevel.None:
				lvl = android.util.Log.ASSERT;
				break;
			case LogLevel.Trace:
				lvl = android.util.Log.VERBOSE;
				break;
			case LogLevel.Warn:
				lvl = android.util.Log.WARN;
				break;
			default:
				break;
		}
		if (lvl !== undefined) {
			this._native.setProductionLogLevel(lvl);
		}
	}

	setDevLogLevel(level: LogLevel) {
		let lvl;
		switch (level) {
			case LogLevel.Debug:
				lvl = android.util.Log.DEBUG;
				break;
			case LogLevel.Error:
				lvl = android.util.Log.ERROR;
				break;
			case LogLevel.Info:
				lvl = android.util.Log.INFO;
				break;
			case LogLevel.None:
				lvl = android.util.Log.ASSERT;
				break;
			case LogLevel.Trace:
				lvl = android.util.Log.VERBOSE;
				break;
			case LogLevel.Warn:
				lvl = android.util.Log.WARN;
				break;
			default:
				break;
		}
		if (lvl !== undefined) {
			this._native.setDevelopmentLogLevel(lvl);
		}
	}
}

export class Airship implements IAirship {
	private static _instance: Airship;
	private static _nativeInstance: com.urbanairship.UAirship;
	private static _pushInstance: AirshipPush;
	private static _channelInstance: AirshipChannel;
	private static _contactInstance: AirshipContact;
	private static _privacyInstance: AirshipPrivacyManager;

	private _deepLinkDelegate: com.urbanairship.actions.DeepLinkListener;
	_onDeeplink?: (data: string) => void;
	onDeeplink(onLink: (data: string) => void) {
		if (!onLink) {
			Airship._nativeInstance.setDeepLinkListener(null);
		} else {
			if (!this._deepLinkDelegate) {
				const ref = new WeakRef(this);
				this._deepLinkDelegate = new com.urbanairship.actions.DeepLinkListener({
					onDeepLink(param0: string): boolean {
						ref?.get?.()._onDeeplink(param0);
						return true;
					},
				});
			}
			Airship._nativeInstance.setDeepLinkListener(this._deepLinkDelegate);
		}
		this._onDeeplink = onLink;
	}

	static getInstance() {
		if (!this._nativeInstance) {
			this._nativeInstance = com.urbanairship.UAirship.shared();
		}
		if (!this._nativeInstance) {
			return null;
		}

		if (!this._instance) {
			this._instance = new Airship();
		}

		return this._instance;
	}

	static get push() {
		if (!Airship.getInstance()) {
			return null;
		}

		if (!this._pushInstance) {
			this._pushInstance = new AirshipPush();
		}

		return this._pushInstance;
	}

	static get channel() {
		if (!Airship.getInstance()) {
			return null;
		}

		if (!this._channelInstance) {
			this._channelInstance = new AirshipChannel();
		}

		return this._channelInstance;
	}

	static get contact() {
		if (!Airship.getInstance()) {
			return null;
		}

		if (!this._contactInstance) {
			this._contactInstance = new AirshipContact();
		}

		return this._contactInstance;
	}

	static get privacyManager() {
		if (!Airship.getInstance()) {
			return null;
		}

		if (!this._privacyInstance) {
			this._privacyInstance = new AirshipPrivacyManager();
		}

		return this._privacyInstance;
	}

	static takeOff(config?: AirshipConfig, onReady?: (airship: Airship) => void) {
		const cb = () => {
			if (config) {
				if (onReady) {
					com.urbanairship.UAirship.takeOff(
						// @ts-ignore
						Utils.android.getApplicationContext(),
						config._native.build(),
						new com.urbanairship.UAirship.OnReadyCallback({
							onAirshipReady(param0: com.urbanairship.UAirship) {
								Airship._nativeInstance = param0;
								onReady(Airship.getInstance());
							},
						})
					);
				} else {
					// @ts-ignore
					com.urbanairship.UAirship.takeOff(Utils.android.getApplicationContext(), config._native.build());
				}
			} else {
				if (onReady) {
					com.urbanairship.UAirship.takeOff(
						// @ts-ignore
						Utils.android.getApplicationContext(),
						AirshipConfig.defaultConfig()._native.build(),
						new com.urbanairship.UAirship.OnReadyCallback({
							onAirshipReady(param0: com.urbanairship.UAirship) {
								Airship._nativeInstance = param0;
								onReady(Airship.getInstance());
							},
						})
					);
				} else {
					// @ts-ignore
					com.urbanairship.UAirship.takeOff(Utils.android.getApplicationContext(), AirshipConfig.defaultConfig()._native.build());
				}
			}
			Application.off(Application.launchEvent, cb);
		};
		Application.on(Application.launchEvent, cb);
	}
}

function toSet(values: string[]) {
	const set = new java.util.HashSet();
	values.forEach((item) => {
		set.add(item);
	});
	return set;
}

function fromSet(values: java.util.Set<string>): string[] {
	const arr = values.toArray();
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i]);
	}
	return result;
}
