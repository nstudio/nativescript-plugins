import { Utils } from '@nativescript/core';
export class AirshipFCM {
    static processNewToken(token: string) {
        if (global.isAndroid) {
            com.urbanairship.push.fcm.AirshipFirebaseIntegration.processNewToken(Utils.android.getApplicationContext(), token);
        }
    }

    static processMessage(remoteMessage: any) {
        if (global.isAndroid) {
            com.urbanairship.push.fcm.AirshipFirebaseIntegration.processMessageSync(Utils.android.getApplicationContext(), remoteMessage);
        }
    }
}