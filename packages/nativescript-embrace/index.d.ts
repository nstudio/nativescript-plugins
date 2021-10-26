export class EmbraceSDK {
    static getInstance(): EmbraceSDK;
    start();
    isStarted(): boolean;
    setUsername(username: string);
    clearUsername();
    setUserEmail(email: string);
    clearUserEmail();
    startMoment(event: string, id?: string, props?: { [key: string]: any }, screenshot?: boolean);
    endMoment(event: string, id?: string, props?: { [key: string]: any });
    logInfo(message: string, props?: { [key: string]: any });
    logWarning(message: string, props?: { [key: string]: any });
    logError(message: string, props?: { [key: string]: any }, severity?: 'error' | 'warning' | 'info', screenshot?: boolean);
    logBreadcrumb(message: string);
    setUserIdentifier(id: string);
    clearUserIdentifier();
    setUserPersona(persona: string);
    clearUserPersona(persona: string);
    endStartup(props?: { [key: string]: any });
    endSession();
    addSessionProperty(key: string, value: string, permanent: boolean);
    removeSessionProperty(key: string);
    getSessionProperties(): { [key: string]: any };
    setUserAsPayer();
    clearUserAsPayer();
}
