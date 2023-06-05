import { Utils } from '@nativescript/core';
import { AppcuesSDKCommon } from './common';

let appcuesInstance: com.appcues.Appcues;
declare const io;

export class AppcuesSDK extends AppcuesSDKCommon {
    static init(accountId: string, appId: string) {
        appcuesInstance = new io.nstudio.plugins.appcues.Appcues.init(Utils.android.getApplicationContext(), accountId, appId);
    }

    static identify(userId: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.identify(userId, Utils.dataSerialize(properties || {}));
        }
    }

    static track(name: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.track(name, Utils.dataSerialize(properties || {}))
        }
    }

    static trackScreens() {
        if (appcuesInstance) {
            appcuesInstance.trackScreens();
        }
    }

    static screen(title: string, properties?: any) {
        if (appcuesInstance) {
            appcuesInstance.screen(title, Utils.dataSerialize(properties || {}))
        }
    }

    static nativeInstance() {
        return appcuesInstance;
    }
}
