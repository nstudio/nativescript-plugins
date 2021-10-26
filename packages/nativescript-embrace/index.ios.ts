import { EmbraceBase } from "./common";
import { Embrace as IEmbrace } from '.'

export class EmbraceSDK extends EmbraceBase implements IEmbrace {
    setUserAsPayer() {
        Embrace.sharedInstance().setUserAsPayer();
    }
    clearUserAsPayer() {
        Embrace.sharedInstance().clearUserAsPayer();
    }
    addSessionProperty(key: string, value: string, permanent: boolean = false) {
        Embrace.sharedInstance().addSessionPropertyWithKeyPermanent(
            value, key, permanent
        )
    }
    removeSessionProperty(key: string) {
        Embrace.sharedInstance().removeSessionPropertyWithKey(key);
    }
    getSessionProperties(): { [key: string]: any; } {
        const dict = Embrace.sharedInstance().getSessionProperties();
        const keys = dict.allKeys;
        const props = {};
        for (let i = 0; i < keys.count; i++) {
            const key = keys.objectAtIndex(i);
            props[key] = dict.objectForKey(key);
        }
        return props;
    }
    endSession() {
        Embrace.sharedInstance().endSession();
    }
    setUserIdentifier(id: string) {
        Embrace.sharedInstance().setUserIdentifier(id);
    }
    clearUserIdentifier() {
        Embrace.sharedInstance().clearUserIdentifier();
    }
    setUserPersona(persona: string) {
        Embrace.sharedInstance().setUserPersona(persona);
    }
    clearUserPersona(persona: string) {
        Embrace.sharedInstance().clearUserPersona(persona);
    }
    endStartup(props?: { [key: string]: any; }) {
        if (props) {
            Embrace.sharedInstance().endAppStartupWithProperties(props as any);
        } else {
            Embrace.sharedInstance().endAppStartup();
        }
    }
    logBreadcrumb(message: string) {
        Embrace.sharedInstance().logBreadcrumbWithMessage(message);
    }
    logError(message: string, props?: any, severity: "error" | "warning" | "info" = "error", screenshot?: boolean) {
        let s: EMBSeverity;
        switch (severity) {
            case "error":
                s = EMBSeverity.Error;
                break;
            case "info":
                s = EMBSeverity.Info;
                break;
            case "warning":
                s = EMBSeverity.Warning;
                break;
        }

        Embrace.sharedInstance().logMessageWithSeverityPropertiesTakeScreenshot(message, s, props, screenshot);

    }
    logWarning(message: string, props: { [key: string]: any; } = {}) {
        Embrace.sharedInstance().logWarningMessageScreenshotProperties(message, true, props as any);
    }
    logInfo(message: string, props: { [key: string]: any; } = {}) {
        Embrace.sharedInstance().logInfoMessageProperties(message, props as any);
    }
    endMoment(event: string, id?: string, props: { [key: string]: any; } = {}) {
        Embrace.sharedInstance().endMomentWithNameIdentifierProperties(event, id, props as any);
    }
    startMoment(event: string, id?: string, props: { [key: string]: any; } = {}, screenshot: boolean = false) {
        Embrace.sharedInstance().startMomentWithNameIdentifierAllowScreenshotProperties(event, id, screenshot, props as any);
    }
    clearUserEmail() {
        Embrace.sharedInstance().clearUserEmail();
    }
    setUserEmail(email: string) {
        Embrace.sharedInstance().setUserEmail(email);
    }
    clearUsername() {
        Embrace.sharedInstance().clearUsername()
    }

    start() {
        Embrace.sharedInstance().start()
    }

    isStarted() {
        return true;
    }

    setUsername(username: string) {
        Embrace.sharedInstance().setUsername(
            username
        )
    }
}