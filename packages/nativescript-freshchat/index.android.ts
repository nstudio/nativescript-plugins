import { Utils } from '@nativescript/core';
import { FreshChatSDKCommon } from './common';

export class FreshChatSDK extends FreshChatSDKCommon {
  
  public static freshchatSdk: any;
  public static Freshchat: any;

  public static init(appID, appKey, domain) {
    if (!FreshChatSDK.hasInit) {
      FreshChatSDK.freshchatSdk = com.freshchat.consumer.sdk;
      let config = new FreshChatSDK.freshchatSdk.FreshchatConfig(appID, appKey)
      config.domain = domain; 
      FreshChatSDK.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).init(config);
      FreshChatSDKCommon.hasInit = true;
    }
    return true;
  }



  public static setUser(args: { firstName: string, lastName: string, email: string, phoneCountryCode: string, phoneNumber: string }) {
    if (!FreshChatSDK.checkInit()) return false;
    let user = FreshChatSDK.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).getUser()
    user.setFirstName(args.firstName)
    user.setLastName(args.lastName)
    user.setEmail(args.email)
    user.setPhone(args.phoneCountryCode, args.phoneNumber)
    FreshChatSDK.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).setUser(user)
    return FreshChatSDK.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).getUser();
  }

  public static setUserProperties(properties) {
    if (!FreshChatSDK.checkInit()) return false;
    var props = new java.util.HashMap();
    for (var i in properties) {
      props.put(i, properties[i].toString());
    }
    FreshChatSDK.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).setUserProperties(props)
    return true;
  }

  public static trackEvent(eventName, eventData) {
    if (!FreshChatSDK.checkInit()) return false;
    var props = new java.util.HashMap();
    for (var i in eventData) {
      props.put(i, eventData[i].toString());
    }
    FreshChatSDK.freshchatSdk.Freshchat.trackEvent(Utils.android.getApplicationContext(), eventName, props);
    return true;
  }

  public static resetUser(completion?) {
    if (!FreshChatSDK.checkInit()) return false;
    FreshChatSDK.freshchatSdk.Freshchat.resetUser(Utils.android.getApplicationContext());
    if (completion) completion()
    return true;
  }

  public static showConversations(tags?: Array<string>, filterTitle: string = 'FilterView') {
    if (!FreshChatSDK.checkInit()) return false;
    if (tags && tags.length) {
      let options = new FreshChatSDK.freshchatSdk.ConversationOptions()
      var javaTags = new java.util.ArrayList();
      tags.forEach(tag => javaTags.add(tag));
      options.filterByTags(javaTags, filterTitle)
      FreshChatSDK.freshchatSdk.Freshchat.showConversations(Utils.android.getApplicationContext(), options);
    } else {
      FreshChatSDK.freshchatSdk.Freshchat.showConversations(Utils.android.getApplicationContext());
    }
    return true;
  }

  public static getRestoreID() {
    if (!FreshChatSDK.checkInit()) return false;
    let restoreId = FreshChatSDK.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).getUser().getRestoreId(); //maybe not working?
    return restoreId;
  }

  public static identifyUser(id: string, restoreID: string) {
    if (!FreshChatSDK.checkInit()) return false;
    FreshChatSDK.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).identifyUser(id, restoreID)
    return true;
  }

  public static sendMessage(message: string, tag: string) {
    if (!FreshChatSDK.checkInit()) return false;
    let fcMessage = new FreshChatSDK.freshchatSdk.FreshchatMessage().setTag(tag).setMessage(message);
    FreshChatSDK.freshchatSdk.Freshchat.sendMessage(Utils.android.getApplicationContext(), fcMessage);
    return true;
  }

  public static getUnreadCount(completion?) {
    let callback = FreshChatSDK.freshchatSdk.UnreadCountCallback({onResult: (status, count) => {
      if (completion) completion(count)
    }});
    return FreshChatSDK.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).getUnreadCountAsync(callback)
  }

  public static showFAQs(options) {
    if (!FreshChatSDK.checkInit()) return false;
    if (options) {
      let faqOptions = new FreshChatSDK.freshchatSdk.FaqOptions()
      faqOptions.showContactUsOnAppBar = options.showContactUsOnAppBar;
      faqOptions.showContactUsOnFaqNotHelpful = options.showContactUsOnFaqNotHelpful;
      faqOptions.showContactUsOnFaqScreens = options.showContactUsOnFaqScreens;
      faqOptions.showFaqCategoriesAsGrid = options.showFaqCategoriesAsGrid;
      if (options.filterByTags) {
        var javaTags = new java.util.ArrayList();
        options.filterByTags.tags.forEach(tag => javaTags.add(tag));
        faqOptions.filterByTags(javaTags, options.filterByTags.title, options.filterByTags.type == 'ARTICLE' ? FreshChatSDK.freshchatSdk.FaqOptions.FilterType.ARTICLE : FreshChatSDK.freshchatSdk.FaqOptions.CATEGORY);
      }
      if (options.filterContactUsByTags) {
        var javaTags = new java.util.ArrayList();
        options.filterContactUsByTags.tags.forEach(tag => javaTags.add(tag));
        faqOptions.filterContactUsByTags(javaTags, options.filterContactUsByTags.title);
      }
      FreshChatSDK.freshchatSdk.Freshchat.showFAQs(Utils.android.getApplicationContext(), faqOptions);
    } else {
      FreshChatSDK.freshchatSdk.Freshchat.showFAQs(Utils.android.getApplicationContext());
    }
  }
}
