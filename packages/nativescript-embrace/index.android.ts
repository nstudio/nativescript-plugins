import { EmbraceBase } from "./common";
import { EmbraceSDK as IEmbraceSDK } from '.'
import { Utils } from '@nativescript/core';
export class EmbraceSDK extends EmbraceBase implements IEmbraceSDK {
    private static _nativeInstance: io.embrace.android.embracesdk.Embrace;
    private static instance = new EmbraceSDK();
    static getInstance() {
        if (!this._nativeInstance) {
            this._nativeInstance = io.embrace.android.embracesdk.Embrace.getInstance();
        }
        if (!this._nativeInstance) {
            return null;
        }

        return this.instance;
    }
    setUserAsPayer() {
        EmbraceSDK._nativeInstance.setUserAsPayer();
    }
    clearUserAsPayer() {
        EmbraceSDK._nativeInstance.clearUserAsPayer();
    }
    addSessionProperty(key: string, value: string, permanent: boolean = false) {
        EmbraceSDK._nativeInstance.addSessionProperty(
            key, value, permanent
        )
    }
    removeSessionProperty(key: string) {
        EmbraceSDK._nativeInstance.removeSessionProperty(key);
    }
    getSessionProperties(): { [key: string]: any; } {
        const map = EmbraceSDK._nativeInstance.getSessionProperties();
        const keys = map.keySet().toArray();
        const props = {};
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            props[key] = map.get(key);
        }
        return props;
    }
    endSession() {
        EmbraceSDK._nativeInstance.endSession();
    }
    setUserIdentifier(id: string) {
        EmbraceSDK._nativeInstance.setUserIdentifier(id);
    }
    clearUserIdentifier() {
        EmbraceSDK._nativeInstance.clearUserIdentifier();
    }
    setUserPersona(persona: string) {
        EmbraceSDK._nativeInstance.setUserPersona(persona);
    }
    clearUserPersona(persona: string) {
        EmbraceSDK._nativeInstance.clearUserPersona(persona);
    }
    endStartup(props?: { [key: string]: any; }) {
        if (props) {
            EmbraceSDK._nativeInstance.endAppStartup(createNativePropsFrom(props));
        } else {
            EmbraceSDK._nativeInstance.endAppStartup();
        }
    }
    logBreadcrumb(message: string) {
        EmbraceSDK._nativeInstance.logBreadcrumb(
            message
        )
    }
    logError(message: string, props?: { [key: string]: any; }, severity: "error" | "warning" | "info" = "error", screenshot: boolean = false) {
        switch (severity) {
            case "error":
                EmbraceSDK._nativeInstance.logError(
                    message, createNativePropsFrom(props), screenshot
                );
                break;
            case "info":
                EmbraceSDK._nativeInstance.logInfo(
                    message, createNativePropsFrom(props)
                );
                break;
            case "warning":
                EmbraceSDK._nativeInstance.logWarning(
                    message, createNativePropsFrom(props), screenshot
                );
                break;
        }
    }
    logWarning(message: string, props?: { [key: string]: any; }) {
        EmbraceSDK._nativeInstance.logWarning(message, createNativePropsFrom(props));
    }
    logInfo(message: string, props: { [key: string]: any; }) {
        EmbraceSDK._nativeInstance.logInfo(message, createNativePropsFrom(props));
    }
    endMoment(event: string, id?: string, props: { [key: string]: any; } = {}) {
        EmbraceSDK._nativeInstance.endEvent(event, id, createNativePropsFrom(props));
    }
    startMoment(event: string, id?: string, props: { [key: string]: any; } = {}, screenshot: boolean = false) {
        EmbraceSDK._nativeInstance.startEvent(
            event, id, screenshot, createNativePropsFrom(props)
        );
    }
    clearUserEmail() {
        EmbraceSDK._nativeInstance.clearUserEmail();
    }
    setUserEmail(email: string) {
        EmbraceSDK._nativeInstance.setUserEmail(email);
    }
    clearUsername() {
        EmbraceSDK._nativeInstance.clearUsername();
    }
    start() {
        EmbraceSDK._nativeInstance.start(
            Utils.android.getApplicationContext()
        )
    }

    isStarted() {
        return EmbraceSDK._nativeInstance.isStarted();
    }

    setUsername(username: string) {
        EmbraceSDK._nativeInstance.setUsername(
            username
        )
    }
}


function createNativePropsFrom(properties: any) {
    if (properties) {
        const map = new java.util.HashMap();
        const keys = Object.keys(properties);
        for (const key of keys) {
            map.put(key, `${properties[key]}`);
        }
        return map;
    }
    return properties;
}