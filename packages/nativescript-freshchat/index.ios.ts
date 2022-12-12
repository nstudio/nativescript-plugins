import { FreshchatFAQOptions, FreshChatSDKCommon } from './common';

export class FreshChatSDK extends FreshChatSDKCommon {


  private static get rootViewController(): UIViewController | undefined {
		const keyWindow = UIApplication.sharedApplication.keyWindow;
		return keyWindow != null ? keyWindow.rootViewController : undefined;
  }

  private static get topViewController(): UIViewController | undefined {
		const root = FreshChatSDK.rootViewController;
		if (root == null) {
			return undefined;
		}
		return FreshChatSDK.findTopViewController(root);
  }

  private static findTopViewController(root: UIViewController): UIViewController | undefined {
		const presented = root.presentedViewController;
		if (presented != null) {
			return FreshChatSDK.findTopViewController(presented);
		}
		if (root instanceof UISplitViewController) {
			const last = root.viewControllers.lastObject;
			if (last == null) {
				return root;
			}
			return FreshChatSDK.findTopViewController(last);
		} else if (root instanceof UINavigationController) {
			const top = root.topViewController;
			if (top == null) {
				return root;
			}
			return FreshChatSDK.findTopViewController(top);
		} else if (root instanceof UITabBarController) {
			const selected = root.selectedViewController;
			if (selected == null) {
				return root;
			}
			return FreshChatSDK.findTopViewController(selected);
		} else {
			return root;
		}
  }

  public static init(appID, appKey, domain) {
    if (!FreshChatSDK.hasInit) {
      let config = FreshchatConfig.alloc().initWithAppIDAndAppKey(appID, appKey)
      config.domain = domain;
      Freshchat.sharedInstance().initWithConfig(config);
      FreshChatSDKCommon.hasInit = true;
    }
    return true;
  }

  public static setUser(args: { firstName: string, lastName: string, email: string, phoneCountryCode: string, phoneNumber: string }) {
    if (!FreshChatSDK.checkInit()) return false;
    let user = FreshchatUser.sharedInstance();
    for (var i in args) {
      user[i] = args[i];
    }
    Freshchat.sharedInstance().setUser(user);
    return FreshchatUser.sharedInstance();
  }

  public static setUserProperties(properties) {
    if (!FreshChatSDK.checkInit()) return false;
    for (var i in properties) {
      Freshchat.sharedInstance().setUserPropertyforKeyWithValue(i, properties[i])
    }
    return true;
  }

  public static trackEvent(eventName, eventData) {
    if (!FreshChatSDK.checkInit()) return false;
    Freshchat.sharedInstance().trackEventWithProperties(eventName, eventData)
    return true;
  }

  public static resetUser(completion?) {
    if (!FreshChatSDK.checkInit()) return false;
    Freshchat.sharedInstance().resetUserWithCompletion(() => {
      if (completion) completion()
      return true;
    })
  }

  public static showConversations(tags?: Array<string>, filterTitle: string = 'FilterView') {
    if (!FreshChatSDK.checkInit()) return false;
    let root = FreshChatSDK.topViewController;
    if (tags && tags.length) {
      let options = new ConversationOptions();
      options.filterByTagsWithTitle(tags, filterTitle)
      Freshchat.sharedInstance().showConversationsWithOptions(root, options)
    } else {
      Freshchat.sharedInstance().showConversations(root);
    }
    return true;
  }

  public static getRestoreID() {
    if (!FreshChatSDK.checkInit()) return false;
    return FreshchatUser.sharedInstance().restoreID;
  }

  public static identifyUser(id: string, restoreID: string) {
    if (!FreshChatSDK.checkInit()) return false;
    Freshchat.sharedInstance().identifyUserWithExternalIDRestoreID(id, restoreID)
    return true;
  }

  public static sendMessage(message: string, tag: string) {
    if (!FreshChatSDK.checkInit()) return false;
    let freshchatMessage = FreshchatMessage.alloc().initWithMessageAndTag(message, tag);
    Freshchat.sharedInstance().sendMessage(freshchatMessage);
    return true;
  }

  public static getUnreadCount(completion?) {
    if (!FreshChatSDK.checkInit()) return false;
    return Freshchat.sharedInstance().unreadCountWithCompletion((count) => {
      if (completion) completion(count);
      return true;
    })
  }

  public static showFAQs(options?: FreshchatFAQOptions) {
    if (!FreshChatSDK.checkInit()) return false;
    let root = FreshChatSDK.topViewController;
    if (options) {
      let faqOptions = new FAQOptions();
      faqOptions.showContactUsOnAppBar = options.showContactUsOnAppBar;
      faqOptions.showContactUsOnFaqNotHelpful = options.showContactUsOnFaqNotHelpful;
      faqOptions.showContactUsOnFaqScreens = options.showContactUsOnFaqScreens;
      faqOptions.showFaqCategoriesAsGrid = options.showFaqCategoriesAsGrid;
      if (options.filterByTags) {
        faqOptions.filterByTagsWithTitleAndType(options.filterByTags.tags, options.filterByTags.title, options.filterByTags.type == 'ARTICLE' ? 1 : 2);
      }
      if (options.filterContactUsByTags) {
        faqOptions.filterContactUsByTagsWithTitle(options.filterContactUsByTags.tags, options.filterContactUsByTags.title);
      }
      Freshchat.sharedInstance().showFAQsWithOptions(root, faqOptions);
    } else {
      Freshchat.sharedInstance().showFAQs(root);
    }
  }
  
}
