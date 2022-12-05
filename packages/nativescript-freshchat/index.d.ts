import { NativescriptFreshchatCommon } from './common';

export declare class NativescriptFreshchat extends NativescriptFreshchatCommon {

  public hasInit: boolean;
  public static init(appID: string, appKey: string, domain: string): boolean;
  public static setUser(args: { firstName: string, lastName: string, email: string, phoneCountryCode: string, phoneNumber: string }): FreshchatUser;
  public static setUserProperty(property: string, value: string): boolean;
  public static trackEvent(eventName: string, eventData: any): boolean;
  public static resetUser(completion?: Function): boolean;
  public static showConversations(): boolean;
  public static getRestoreID(): string;
  public static identifyUser(id: string, restoreID: string): boolean;
  
}
