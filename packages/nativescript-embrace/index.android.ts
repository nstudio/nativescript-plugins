import { EmbraceBase } from "./common";
import { Embrace as IEmbrace } from '.'
import { Utils } from '@nativescript/core';
export class EmbraceSDK extends EmbraceBase implements IEmbrace {
    setUserAsPayer() {
        io.embrace.android.embracesdk.Embrace.getInstance().setUserAsPayer();
    }
    clearUserAsPayer() {
        io.embrace.android.embracesdk.Embrace.getInstance().clearUserAsPayer();
    }
    addSessionProperty(key: string, value: string, permanent: boolean = false) {
        io.embrace.android.embracesdk.Embrace.getInstance().addSessionProperty(
            key, value, permanent
        )
    }
    removeSessionProperty(key: string) {
        io.embrace.android.embracesdk.Embrace.getInstance().removeSessionProperty(key);
    }
    getSessionProperties(): { [key: string]: any; } {
        const map = io.embrace.android.embracesdk.Embrace.getInstance().getSessionProperties();
        const keys = map.keySet().toArray();
        const props = {};
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            props[key] = map.get(key);
        }
        return props;
    }
    endSession() {
        io.embrace.android.embracesdk.Embrace.getInstance().endSession();
    }
    setUserIdentifier(id: string) {
        io.embrace.android.embracesdk.Embrace.getInstance().setUserIdentifier(id);
    }
    clearUserIdentifier() {
        io.embrace.android.embracesdk.Embrace.getInstance().clearUserIdentifier();
    }
    setUserPersona(persona: string) {
        io.embrace.android.embracesdk.Embrace.getInstance().setUserPersona(persona);
    }
    clearUserPersona(persona: string) {
        io.embrace.android.embracesdk.Embrace.getInstance().clearUserPersona(persona);
    }
    endStartup(props?: { [key: string]: any; }) {
        if (props) {
            io.embrace.android.embracesdk.Embrace.getInstance().endAppStartup(createNativePropsFrom(props));
        } else {
            io.embrace.android.embracesdk.Embrace.getInstance().endAppStartup();
        }
    }
    logBreadcrumb(message: string) {
        io.embrace.android.embracesdk.Embrace.getInstance().logBreadcrumb(
            message
        )
    }
    logError(message: string, props?: { [key: string]: any; }, severity: "error" | "warning" | "info" = "error", screenshot: boolean = false) {
        switch (severity) {
            case "error":
                io.embrace.android.embracesdk.Embrace.getInstance().logError(
                    message, createNativePropsFrom(props), screenshot
                );
                break;
            case "info":
                io.embrace.android.embracesdk.Embrace.getInstance().logInfo(
                    message, createNativePropsFrom(props)
                );
                break;
            case "warning":
                io.embrace.android.embracesdk.Embrace.getInstance().logWarning(
                    message, createNativePropsFrom(props), screenshot
                );
                break;
        }
    }
    logWarning(message: string, props?: { [key: string]: any; }) {
        io.embrace.android.embracesdk.Embrace.getInstance().logWarning(message, createNativePropsFrom(props));
    }
    logInfo(message: string, props: { [key: string]: any; }) {
        io.embrace.android.embracesdk.Embrace.getInstance().logInfo(message, createNativePropsFrom(props));
    }
    endMoment(event: string, id?: string, props: { [key: string]: any; } = {}) {
        io.embrace.android.embracesdk.Embrace.getInstance().endEvent(event, id, createNativePropsFrom(props));
    }
    startMoment(event: string, id?: string, props: { [key: string]: any; } = {}, screenshot: boolean = false) {
        io.embrace.android.embracesdk.Embrace.getInstance().startEvent(
            event, id, screenshot, createNativePropsFrom(props)
        );
    }
    clearUserEmail() {
        io.embrace.android.embracesdk.Embrace.getInstance().clearUserEmail();
    }
    setUserEmail(email: string) {
        io.embrace.android.embracesdk.Embrace.getInstance().setUserEmail(email);
    }
    clearUsername() {
        io.embrace.android.embracesdk.Embrace.getInstance().clearUsername();
    }
    start() {
        io.embrace.android.embracesdk.Embrace.getInstance().start(
            Utils.android.getApplicationContext()
        )
    }

    isStarted() {
        return io.embrace.android.embracesdk.Embrace.getInstance().isStarted();
    }

    setUsername(username: string) {
        io.embrace.android.embracesdk.Embrace.getInstance().setUsername(
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