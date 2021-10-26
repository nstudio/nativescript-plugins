import { Airship as IAirship, AirshipPush as IAirshipPush, AirshipChannel as IAirshipChannel, AirshipContact as IAirshipContact, AirshipPrivacyManager as IAirshipPrivacyManager, PrivacyFeature, AirshipConfig as IAirshipConfig, LogLevel, AirshipPushPresentationOptions } from '.';

import { Application } from '@nativescript/core';

function toFeature(feature: PrivacyFeature) {
    switch (feature) {
        case PrivacyFeature.Push:
            return UAFeatures.Push;
        case PrivacyFeature.All:
            return UAFeatures.All;
        case PrivacyFeature.Chat:
            return UAFeatures.Chat;
        case PrivacyFeature.Contacts:
            return UAFeatures.Contacts;
        case PrivacyFeature.InAppAutomation:
            return UAFeatures.InAppAutomation;
        case PrivacyFeature.MessageCenter:
            return UAFeatures.MessageCenter;
        case PrivacyFeature.None:
            return UAFeaturesNone;
        case PrivacyFeature.TagsAndAttributes:
            return UAFeatures.TagsAndAttributes;
        case PrivacyFeature.Analytics:
            return UAFeatures.Analytics;
    }
    return undefined;
}


export class AirshipPrivacyManager implements IAirshipPrivacyManager {
    private static _instance: UAPrivacyManager;
    private static getInstance() {
        if (!this._instance) {
            this._instance = UAirship.shared.privacyManager;
        }
        return this._instance;
    }


    enableFeature(feature: PrivacyFeature) {
        const feat = toFeature(feature);
        if (feat !== undefined) {
            AirshipPrivacyManager.getInstance().enableFeatures(feat);
        }
    }


    enableFeatures(features: PrivacyFeature[]) {
        let enableFeatures: UAFeatures;
        for (let i = 0; i < features.length; i++) {
            const feature = toFeature(features[i]);
            if (feature !== undefined) {
                enableFeatures |= feature;
            }
        }
        if (enableFeatures !== undefined) {
            AirshipPrivacyManager.getInstance().enableFeatures(enableFeatures);
        }
    }


    disableFeature(feature: PrivacyFeature) {
        const feat = toFeature(feature);
        if (feat !== undefined) {
            AirshipPrivacyManager.getInstance().disableFeatures(feat);
        }
    }



    disableFeatures(features: PrivacyFeature[]) {
        let disableFeatures: UAFeatures;
        for (let i = 0; i < features.length; i++) {
            const feature = toFeature(features[i]);
            if (feature !== undefined) {
                disableFeatures |= feature;
            }
        }
        if (disableFeatures !== undefined) {
            AirshipPrivacyManager.getInstance().disableFeatures(disableFeatures);
        }
    }

}

export class AirshipContact implements IAirshipContact {
    private static _instance: UAContact;
    private static getInstance() {
        if (!this._instance) {
            this._instance = UAContact.shared;
        }
        return this._instance;
    }
    identify(value: string) {
        return AirshipContact.getInstance().identify(value)
    }

    reset() {
        AirshipContact.getInstance().reset();
    }
}


export class AirshipChannel implements IAirshipChannel {
    private static _instance: UAChannel;
    private static getInstance() {
        if (!this._instance) {
            this._instance = UAChannel.shared;
        }
        return this._instance;
    }
    getTags(): string[] {
        const result = [];
        const tags = AirshipChannel.getInstance().tags;
        for (let i = 0; i < tags.count; i++) {
            result.push(tags.objectAtIndex(i));
        }
        return result;
    }
    get id(): string {
        return AirshipChannel.getInstance().identifier;
    }
    removeTags(names: string[]) {
        AirshipChannel.getInstance().removeTags(names);
    }
    removeTag(name: string) {
        AirshipChannel.getInstance().removeTag(name);
    }
    addTag(name: string) {
        AirshipChannel.getInstance().addTag(name);
    }
    addTags(names: string[]) {
        AirshipChannel.getInstance().addTags(names);
    }
}


@NativeClass
@ObjCClass(UAPushNotificationDelegate)
class UAPushNotificationDelegateImpl extends NSObject implements UAPushNotificationDelegate {
    _owner: WeakRef<AirshipPush>;
    static initWithOwner(owner: WeakRef<AirshipPush>) {
        const delegate = <UAPushNotificationDelegateImpl>UAPushNotificationDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    }

    extendPresentationOptionsNotification(options: UNNotificationPresentationOptions, notification: UNNotification): UNNotificationPresentationOptions {
        return UAPush.shared?.defaultPresentationOptions || UNNotificationPresentationOptionNone;
    }

    receivedBackgroundNotificationCompletionHandler(userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void {
        completionHandler(UIBackgroundFetchResult.NoData);
    }

    receivedForegroundNotificationCompletionHandler(userInfo: NSDictionary<any, any>, completionHandler: () => void): void {
        completionHandler();
    }

    receivedNotificationResponseCompletionHandler(notificationResponse: UNNotificationResponse, completionHandler: () => void): void {
        completionHandler();
    }
}


@NativeClass
@ObjCClass(UADeepLinkDelegate)
class UADeepLinkDelegateImpl extends NSObject implements UADeepLinkDelegate {
    _owner: WeakRef<Airship>;
    static initWithOwner(owner: WeakRef<Airship>) {
        const delegate = <UADeepLinkDelegateImpl>UADeepLinkDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    }
    receivedDeepLinkCompletionHandler(deepLink: NSURL, completionHandler: () => void): void {
        this._owner?.get?.()._onDeeplink?.(
            deepLink?.absoluteString
        );
        completionHandler();
    }
}


export class AirshipPush implements IAirshipPush {
    private static _instance: UAPush;
    private static getInstance() {
        if (!this._instance) {
            this._instance = UAPush.shared;
        }
        return this._instance;
    }
    get autobadge() {
        return AirshipPush.getInstance().autobadgeEnabled;
    }

    set autobadge(enabled) {
        AirshipPush.getInstance().autobadgeEnabled = enabled;
    }

    private _presentationOptions: AirshipPushPresentationOptions[];

    set presentationOptions(options: AirshipPushPresentationOptions[]) {
        let presentationOptions;
        for (let i = 0; i < options.length; i++) {
            const option = options[i];
            if (option === 'alert') {
                presentationOptions |= UNNotificationPresentationOptions.Alert;
            } else if (option === 'badge') {
                presentationOptions |= UNNotificationPresentationOptions.Badge;
            } else if (option === 'banner') {
                presentationOptions |= UNNotificationPresentationOptions.Banner;
            } else if (option === 'list') {
                presentationOptions |= UNNotificationPresentationOptions.List;
            } else if (option === 'sound') {
                presentationOptions |= UNNotificationPresentationOptions.Sound;
            } else if (option === 'none') {
                presentationOptions = UNNotificationPresentationOptionNone;
                this._presentationOptions = ['none'];
                break;
            }
        }

        this._presentationOptions = options;

        AirshipPush.getInstance().defaultPresentationOptions = presentationOptions;
    }

    setQuietTime(startHour: number, startMinute: number, endHour: number, endMinute: number) {
        AirshipPush.getInstance().setQuietTimeStartHourStartMinuteEndHourEndMinute(startHour, startMinute, endHour, endMinute);
        AirshipPush.getInstance().quietTimeEnabled = true;
        AirshipPush.getInstance().updateRegistration();
    }
    setBadge(count: number) {
        AirshipPush.getInstance().badgeNumber = count;
    }
    resetBadget() {
        AirshipPush.getInstance().resetBadge();
    }

    enable() {
        return new Promise<boolean>((resolve, reject) => {
            UAPush.shared.enableUserPushNotifications((enabled) => {
                resolve(enabled);
            })
        })
    }
}

export class AirshipConfig implements IAirshipConfig {
    _native: UAConfig;
    constructor() {
        this._native = UAConfig.new();
    }

    static defaultConfig() {
        const config = new AirshipConfig();
        config._native = UAConfig.defaultConfig();
        return config;
    }

    get inProduction(): boolean {
        return this._native.inProduction;
    }

    set inProduction(value: boolean) {
        this._native.inProduction = value;
    }

    get appKey(): string {
        return this._native.appKey;
    }
    get appSecret(): string {
        return this._native.appSecret;
    }

    get logLevel(): LogLevel {
        switch (this._native.logLevel) {
            case UALogLevel.Undefined:
                return LogLevel.Undefined;
            case UALogLevel.Debug:
                return LogLevel.Debug;
            case UALogLevel.Error:
                return LogLevel.Error;
            case UALogLevel.Info:
                return LogLevel.Info;
            case UALogLevel.None:
                return LogLevel.None;
            case UALogLevel.Trace:
                return LogLevel.Trace;
            case UALogLevel.Warn:
                return LogLevel.Warn;
        }
    }

    setProdAppKey(key: string) {
        this._native.productionAppKey = key;
    }
    setProdSecretKey(key: string) {
        this._native.productionAppSecret = key;
    }
    setDevAppKey(key: string) {
        this._native.developmentAppKey = key;
    }
    setDevSecretKey(key: string) {
        this._native.developmentAppSecret = key;
    }

    setProdLogLevel(level: LogLevel) {
        let lvl;
        switch (level) {
            case LogLevel.Debug:
                lvl = UALogLevel.Debug;
                break;
            case LogLevel.Error:
                lvl = UALogLevel.Error;
                break;
            case LogLevel.Info:
                lvl = UALogLevel.Info;
                break;
            case LogLevel.None:
                lvl = UALogLevel.None;
                break;
            case LogLevel.Trace:
                lvl = UALogLevel.Trace;
                break;
            case LogLevel.Warn:
                lvl = UALogLevel.Warn;
                break;
            default:
                break;
        }
        if (lvl !== undefined) {
            this._native.productionLogLevel = lvl;
        }
    }

    setDevLogLevel(level: LogLevel) {
        let lvl;
        switch (level) {
            case LogLevel.Debug:
                lvl = UALogLevel.Debug;
                break;
            case LogLevel.Error:
                lvl = UALogLevel.Error;
                break;
            case LogLevel.Info:
                lvl = UALogLevel.Info;
                break;
            case LogLevel.None:
                lvl = UALogLevel.None;
                break;
            case LogLevel.Trace:
                lvl = UALogLevel.Trace;
                break;
            case LogLevel.Warn:
                lvl = UALogLevel.Warn;
                break;
            default:
                break;
        }
        if (lvl !== undefined) {
            this._native.developmentLogLevel = lvl;
        }
    }
}

export class Airship implements IAirship {
    private static _instance: Airship;
    private static _nativeInstance: UAirship;
    private static _pushInstance: AirshipPush;
    private static _channelInstance: AirshipChannel;
    private static _contactInstance: AirshipContact;
    private static _privacyInstance: AirshipPrivacyManager;
    private _deepLinkDelegate: UADeepLinkDelegateImpl;
    _onDeeplink?: (data?: string) => void;
    onDeeplink(onLink?: (data?: string) => void) {
        if (!onLink) {
            Airship._nativeInstance.deepLinkDelegate = null;
        } else {
            if (!this._deepLinkDelegate) {
                this._deepLinkDelegate = UADeepLinkDelegateImpl.initWithOwner(new WeakRef(this));
            }
            Airship._nativeInstance.deepLinkDelegate = this._deepLinkDelegate;
        }
    }

    static getInstance() {
        if (!this._nativeInstance) {
            this._nativeInstance = UAirship.shared;
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
        Application.ios.addNotificationObserver(
            UIApplicationDidFinishLaunchingNotification, (notif) => {
                const opts = notif?.userInfo?.[UIApplicationLaunchOptionsLocationKey] || notif?.userInfo?.objectForKey(UIApplicationLaunchOptionsLocationKey);
                if (config) {
                    UAirship.takeOffLaunchOptions(config._native, opts);
                    onReady?.(Airship.getInstance());
                } else {
                    UAirship.takeOffLaunchOptions(AirshipConfig.defaultConfig()._native, opts);
                    onReady?.(Airship.getInstance());
                }
            }
        )
    }


}