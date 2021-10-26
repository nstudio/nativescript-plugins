export class AirshipPrivacyManager {
    enableFeature(feature: PrivacyFeature);
    enableFeatures(features: PrivacyFeature[]);
    disableFeature(feature: PrivacyFeature);
    disableFeatures(features: PrivacyFeature[]);
}


export enum PrivacyFeature {
    None,
    InAppAutomation,
    MessageCenter,
    Push,
    Chat,
    Analytics,
    TagsAndAttributes,
    Contacts,
    All,
    Analytics
}

export enum LogLevel {
    Undefined,
    None,
    Error,
    Warn,
    Info,
    Debug,
    Trace
}

export class AirshipContact {
    identify(value: string);
    static getInstance(): AirshipContact;
    reset();
}

export class AirshipChannel {
    readonly id: string;
    addTags(names: Array<string>);
    addTag(name: string);
    removeTag(name: string);
    removeTags(names: Array<string>);
    getTags(): Array<string>;
}

export class AirshipPush {
    autobadge: boolean;
    setBadge(count: number);
    resetBadget();
    enable(): Promise<boolean>;
    setQuietTime(startHour: number, startMinute: number, endHour: number, endMinute: number);
}

export type AirshipPushPresentationOptions = 'alert' | 'badge' | 'sound' | 'banner' | 'list' | 'none';

export class AirshipConfig {
    static defaultConfig(): AirshipConfig;
    readonly logLevel: LogLevel;
    readonly appKey: string;
    readonly appSecret: string;
    inProduction: boolean;
    setProdLogLevel(level: LogLevel);
    setDevLogLevel(level: LogLevel);
    setProdAppKey(key: string);
    setProdSecretKey(key: string);
    setDevAppKey(key: string);
    setDevSecretKey(key: string);
}

export class Airship {
    static getInstance(): Airship;
    static readonly push: AirshipPush;
    static readonly channel: AirshipChannel;
    static readonly contact: AirshipContact;
    static readonly privacyManager: AirshipPrivacyManager;
    onDeeplink(onLink?: (data: string) => void);
}