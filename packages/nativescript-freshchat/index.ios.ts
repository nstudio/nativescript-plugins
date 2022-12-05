import { NativescriptFreshchatCommon } from './common';

export class NativescriptFreshchat extends NativescriptFreshchatCommon {

  private static hasInit: boolean;

  private static get rootViewController(): UIViewController | undefined {
		const keyWindow = UIApplication.sharedApplication.keyWindow;
		return keyWindow != null ? keyWindow.rootViewController : undefined;
  }

  private static get topViewController(): UIViewController | undefined {
		const root = NativescriptFreshchat.rootViewController;
		if (root == null) {
			return undefined;
		}
		return NativescriptFreshchat.findTopViewController(root);
  }

  private static findTopViewController(root: UIViewController): UIViewController | undefined {
		const presented = root.presentedViewController;
		if (presented != null) {
			return NativescriptFreshchat.findTopViewController(presented);
		}
		if (root instanceof UISplitViewController) {
			const last = root.viewControllers.lastObject;
			if (last == null) {
				return root;
			}
			return NativescriptFreshchat.findTopViewController(last);
		} else if (root instanceof UINavigationController) {
			const top = root.topViewController;
			if (top == null) {
				return root;
			}
			return NativescriptFreshchat.findTopViewController(top);
		} else if (root instanceof UITabBarController) {
			const selected = root.selectedViewController;
			if (selected == null) {
				return root;
			}
			return NativescriptFreshchat.findTopViewController(selected);
		} else {
			return root;
		}
  }

  public static init(appID, appKey, domain) {
    if (!NativescriptFreshchat.hasInit) {
      let config = FreshchatConfig.alloc().initWithAppIDAndAppKey(appID, appKey)
      config.domain = domain;
      Freshchat.sharedInstance().initWithConfig(config);
    }
    return true;
  }

  public static setUser(args: {firstName: string, lastName: string, email: string, phoneCountryCode: string, phoneNumber: string}) {
    let user = FreshchatUser.sharedInstance();
    for (var i in args) {
      user[i] = args[i];
    }
    console.log('user', user)
    Freshchat.sharedInstance().setUser(user);
    return FreshchatUser.sharedInstance();
  }

  public static setUserProperty(property, value) {
    Freshchat.sharedInstance().setUserPropertyforKeyWithValue(property, value)
    return true;
  }

  public static trackEvent(eventName, eventData) {
    Freshchat.sharedInstance().trackEventWithProperties(eventName, eventData)
    return true;
  }

  public static resetUser(completion?) {
    Freshchat.sharedInstance().resetUserWithCompletion(() => {
      if (completion) completion()
      return true;
    })
  }

  public static showConversations() {
    let root = NativescriptFreshchat.topViewController;
    Freshchat.sharedInstance().showConversations(root);
    return true;
  }

  public static getRestoreID() {
    return FreshchatUser.sharedInstance().restoreID;
  }

  public static identifyUser(id: string, restoreID: string) {
    Freshchat.sharedInstance().identifyUserWithExternalIDRestoreID(id, restoreID)
    return true;
  }
  
}
