import { Utils } from '@nativescript/core';
export class AirshipHMS {
    static processNewToken(token: string) {
        if (global.isAndroid) {
            com.urbanairship.push.hms.AirshipHmsIntegration.processNewToken(Utils.android.getApplicationContext(), token);
        }
    }

    static processMessage(remoteMessage: any) {
        if (global.isAndroid) {
            com.urbanairship.push.hms.AirshipHmsIntegration.processMessageSync(Utils.android.getApplicationContext(), remoteMessage);
        }
    }
}