import { Utils } from '@nativescript/core';
import { NativescriptFreshchatCommon } from './common';

export class NativescriptFreshchat extends NativescriptFreshchatCommon {
  
  public static freshchatSdk: any;
  public static Freshchat: any;

  public static init(appID, appKey, domain) {
    if (!NativescriptFreshchat.hasInit) {
      NativescriptFreshchat.freshchatSdk = com.freshchat.consumer.sdk;
      let config = new NativescriptFreshchat.freshchatSdk.FreshchatConfig(appID, appKey)
      config.domain = domain; 
      NativescriptFreshchat.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).init(config);
      NativescriptFreshchatCommon.hasInit = true;
    }
    return true;
  }



  public static setUser(args: { firstName: string, lastName: string, email: string, phoneCountryCode: string, phoneNumber: string }) {
    if (!NativescriptFreshchat.checkInit()) return false;
    let user = NativescriptFreshchat.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).getUser()
    user.setFirstName(args.firstName)
    user.setLastName(args.lastName)
    user.setEmail(args.email)
    user.setPhone(args.phoneCountryCode, args.phoneNumber)
    NativescriptFreshchat.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).setUser(user)
    return NativescriptFreshchat.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).getUser();
  }

  public static setUserProperties(properties) {
    if (!NativescriptFreshchat.checkInit()) return false;
    var props = new java.util.HashMap();
    for (var i in properties) {
      props.put(i, properties[i].toString());
    }
    NativescriptFreshchat.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).setUserProperties(props)
    return true;
  }

  public static trackEvent(eventName, eventData) {
    if (!NativescriptFreshchat.checkInit()) return false;
    var props = new java.util.HashMap();
    for (var i in eventData) {
      props.put(i, eventData[i].toString());
    }
    NativescriptFreshchat.freshchatSdk.Freshchat.trackEvent(Utils.android.getApplicationContext(), eventName, props);
    return true;
  }

  public static resetUser(completion?) {
    if (!NativescriptFreshchat.checkInit()) return false;
    NativescriptFreshchat.freshchatSdk.Freshchat.resetUser(Utils.android.getApplicationContext());
    if (completion) completion()
    return true;
  }

  public static showConversations(tags?: Array<string>, filterTitle: string = 'FilterView') {
    if (!NativescriptFreshchat.checkInit()) return false;
    if (tags && tags.length) {
      let options = new NativescriptFreshchat.freshchatSdk.ConversationOptions()
      var javaTags = new java.util.ArrayList();
      tags.forEach(tag => javaTags.add(tag));
      options.filterByTags(javaTags, filterTitle)
      NativescriptFreshchat.freshchatSdk.Freshchat.showConversations(Utils.android.getApplicationContext(), options);
    } else {
      NativescriptFreshchat.freshchatSdk.Freshchat.showConversations(Utils.android.getApplicationContext());
    }
    return true;
  }

  public static getRestoreID() {
    if (!NativescriptFreshchat.checkInit()) return false;
    let restoreId = NativescriptFreshchat.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).getUser().getRestoreId(); //maybe not working?
    return restoreId;
  }

  public static identifyUser(id: string, restoreID: string) {
    if (!NativescriptFreshchat.checkInit()) return false;
    NativescriptFreshchat.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).identifyUser(id, restoreID)
    return true;
  }

  public static sendMessage(message: string, tag: string) {
    if (!NativescriptFreshchat.checkInit()) return false;
    let fcMessage = new NativescriptFreshchat.freshchatSdk.FreshchatMessage().setTag(tag).setMessage(message);
    NativescriptFreshchat.freshchatSdk.Freshchat.sendMessage(Utils.android.getApplicationContext(), fcMessage);
    return true;
  }

  public static getUnreadCount(completion?) {
    let callback = NativescriptFreshchat.freshchatSdk.UnreadCountCallback({onResult: (status, count) => {
      if (completion) completion(count)
    }});
    return NativescriptFreshchat.freshchatSdk.Freshchat.getInstance(Utils.android.getApplicationContext()).getUnreadCountAsync(callback)
  }

  public static showFAQs(options) {
    if (!NativescriptFreshchat.checkInit()) return false;
    if (options) {
      let faqOptions = new NativescriptFreshchat.freshchatSdk.FaqOptions()
      faqOptions.showContactUsOnAppBar = options.showContactUsOnAppBar;
      faqOptions.showContactUsOnFaqNotHelpful = options.showContactUsOnFaqNotHelpful;
      faqOptions.showContactUsOnFaqScreens = options.showContactUsOnFaqScreens;
      faqOptions.showFaqCategoriesAsGrid = options.showFaqCategoriesAsGrid;
      if (options.filterByTags) {
        var javaTags = new java.util.ArrayList();
        options.filterByTags.tags.forEach(tag => javaTags.add(tag));
        faqOptions.filterByTags(javaTags, options.filterByTags.title, options.filterByTags.type == 'ARTICLE' ? NativescriptFreshchat.freshchatSdk.FaqOptions.FilterType.ARTICLE : NativescriptFreshchat.freshchatSdk.FaqOptions.CATEGORY);
      }
      if (options.filterContactUsBytags) {
        var javaTags = new java.util.ArrayList();
        options.filterContactUsBytags.tags.forEach(tag => javaTags.add(tag));
        faqOptions.filterContactUsByTags(javaTags, options.filterContactUsBytags.title);
      }
      NativescriptFreshchat.freshchatSdk.Freshchat.showFAQs(Utils.android.getApplicationContext(), faqOptions);
    } else {
      NativescriptFreshchat.freshchatSdk.Freshchat.showFAQs(Utils.android.getApplicationContext());
    }
  }
}
