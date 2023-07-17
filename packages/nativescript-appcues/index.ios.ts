import { Utils, fromObject } from '@nativescript/core';
import { AppcuesSDKCommon } from './common';

let appcuesInstance: Appcues;

let events = fromObject({});

function parseType(type: AppcuesAnalytic) {
	switch (type) {
		case AppcuesAnalytic.Identify:
			return 'identify';
		case AppcuesAnalytic.Group:
			return 'group';
		case AppcuesAnalytic.Event:
			return 'event';
		case AppcuesAnalytic.Screen:
			return 'screen';
	}
}

@NativeClass()
@ObjCClass(AppcuesAnalyticsDelegate)
class AppcuesAnalyticsDelegateImpl extends NSObject implements AppcuesAnalyticsDelegate {
	didTrackWithAnalyticValuePropertiesIsInternal(analytic: AppcuesAnalytic, value: string, properties: NSDictionary<string, any>, isInternal: boolean): void {
		events.notify({
			eventName: 'analytics',
			type: parseType(analytic),
			value,
			properties: Utils.dataDeserialize(properties) ?? {},
			isInternal,
		});
	}
}

@NativeClass()
@ObjCClass(AppcuesExperienceDelegate)
class AppcuesExperienceDelegateImpl extends NSObject implements AppcuesExperienceDelegate {
	experienceID: string | null = null;

	canDisplayExperienceWithExperienceID(experienceID: string): boolean {
		this.experienceID = experienceID;
		return true;
	}
	experienceDidAppear(): void {
		events.notify({
			eventName: 'experience',
			started: true,
			id: this.experienceID,
		});
	}
	experienceDidDisappear(): void {
		events.notify({
			eventName: 'experience',
			started: false,
			id: this.experienceID,
		});
		this.experienceID = null;
	}
	experienceWillAppear(): void {}
	experienceWillDisappear(): void {}
}

export class AppcuesSDK extends AppcuesSDKCommon {
	private static _appcuesAnalyticsDelegate = <AppcuesAnalyticsDelegateImpl>AppcuesAnalyticsDelegateImpl.new();
	private static _appcuesExperienceDelegate = <AppcuesExperienceDelegateImpl>AppcuesExperienceDelegateImpl.new();

	static init(accountId: string, appId: string) {
		if (appcuesInstance) {
			appcuesInstance.analyticsDelegate = null;
			appcuesInstance.experienceDelegate = null;
		}
		const config = Config.alloc().initWithAccountIDApplicationID(accountId, appId);
		appcuesInstance = Appcues.alloc().initWithConfig(config);
		appcuesInstance.analyticsDelegate = AppcuesSDK._appcuesAnalyticsDelegate;
		appcuesInstance.experienceDelegate = AppcuesSDK._appcuesExperienceDelegate;
	}

	static identify(userId: string, properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.identifyWithUserIDProperties(userId, Utils.dataSerialize(properties || {}));
		}
	}

	static track(name: string, properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.trackWithNameProperties(name, Utils.dataSerialize(properties || {}));
		}
	}

	static trackScreens() {
		if (appcuesInstance) {
			appcuesInstance.trackScreens();
		}
	}

	static screen(title: string, properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.screenWithTitleProperties(title, Utils.dataSerialize(properties || {}));
		}
	}

	static show(experienceId: string) {
		return new Promise<boolean>((resolve, reject) => {
			if (appcuesInstance) {
				appcuesInstance.showWithExperienceIDCompletion(experienceId, (done, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve(done);
					}
				});
			} else {
				reject('SDK unintialized');
			}
		});
	}

	static reset() {
		if (appcuesInstance) {
			appcuesInstance.reset();
		}
	}

	static anonymous(properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.anonymousWithProperties(Utils.dataSerialize(properties || {}));
		}
	}

	static group(groupId?: string, properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.groupWithGroupIDProperties(groupId ?? null, Utils.dataSerialize(properties || {}));
		}
	}

	static debug() {
		if (appcuesInstance) {
			appcuesInstance.debug();
		}
	}

	static didHandleURL(value: any): boolean {
		if (appcuesInstance) {
			return appcuesInstance.didHandleURL(value);
		}
		return false;
	}

	static nativeInstance() {
		return appcuesInstance;
	}
}
