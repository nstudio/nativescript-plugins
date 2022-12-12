import { FreshchatFAQOptions, FreshChatSDKCommon } from './common';

export declare class FreshChatSDK extends FreshChatSDKCommon {

  public hasInit: boolean;
  public static init(appID: string, appKey: string, domain: string): boolean;
  public static setUser(args: { firstName: string, lastName: string, email: string, phoneCountryCode: string, phoneNumber: string }): FreshchatUser;
  public static setUserProperties(properties: any): boolean;
  public static trackEvent(eventName: string, eventData: any): boolean;
  public static resetUser(completion?: Function): boolean;
  public static showConversations(tags?: Array<string>): boolean;
  public static getRestoreID(): string;
  public static identifyUser(id: string, restoreID: string): boolean;
  public static sendMessage(message: string, tag: string): boolean;
  public static getUnreadCount(completion?: Function): boolean;
  public static showFAQs(options?: FreshchatFAQOptions): boolean;
  
}
