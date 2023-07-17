import { Utils, fromObject, Application } from '@nativescript/core';
import { AppcuesSDKCommon } from './common';

let appcuesInstance: com.appcues.Appcues;
declare const io, kotlin;

let events = fromObject({});

function parseType(type: com.appcues.AnalyticType) {
	switch (type) {
		case com.appcues.AnalyticType.IDENTIFY:
			return 'identify';
		case com.appcues.AnalyticType.GROUP:
			return 'group';
		case com.appcues.AnalyticType.EVENT:
			return 'event';
		case com.appcues.AnalyticType.SCREEN:
			return 'screen';
	}
}

export class AppcuesSDK extends AppcuesSDKCommon {
	static on = events.on.bind(events);

	static once = events.once.bind(events);

	static off = events.off.bind(events);

	static init(accountId: string, appId: string) {
		appcuesInstance = new io.nstudio.plugins.appcues.Appcues.init(Utils.android.getApplicationContext(), accountId, appId);
		appcuesInstance.setAnalyticsListener(
			new com.appcues.AnalyticsListener({
				trackedAnalytic(type: com.appcues.AnalyticType, value: string, properties: java.util.Map<string, any>, isInternal: boolean): void {
					events.notify({
						eventName: 'analytics',
						type: parseType(type),
						value,
						properties: Utils.dataDeserialize(properties) ?? {},
						isInternal,
					});
				},
			})
		);
		appcuesInstance.setExperienceListener(
			new com.appcues.ExperienceListener({
				experienceStarted(experienceId: java.util.UUID): void {
					events.notify({
						eventName: 'experience',
						started: true,
						id: experienceId.toString(),
					});
				},
				experienceFinished(experienceId: java.util.UUID): void {
					events.notify({
						eventName: 'experience',
						started: false,
						id: experienceId.toString(),
					});
				},
			})
		);
	}

	static identify(userId: string, properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.identify(userId, Utils.dataSerialize(properties || {}));
		}
	}

	static track(name: string, properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.track(name, Utils.dataSerialize(properties || {}));
		}
	}

	static trackScreens() {
		if (appcuesInstance) {
			appcuesInstance.trackScreens();
		}
	}

	static screen(title: string, properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.screen(title, Utils.dataSerialize(properties || {}));
		}
	}

	static show(experienceId: string) {
		return new Promise<boolean>((resolve, reject) => {
			if (appcuesInstance) {
				io.nstudio.plugins.appcues.Appcues.show(
					appcuesInstance,
					experienceId,
					new kotlin.jvm.functions.Function1({
						invoke(done) {
							resolve(done);
						},
					})
				);
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
			appcuesInstance.anonymous(Utils.dataSerialize(properties || {}));
		}
	}

	static group(groupId?: string, properties?: any) {
		if (appcuesInstance) {
			appcuesInstance.group(groupId, Utils.dataSerialize(properties || {}));
		}
	}

	static debug() {
		if (appcuesInstance) {
			appcuesInstance.debug(Application.android.foregroundActivity || Application.android.startActivity);
		}
	}

	static didHandleURL(value: any): boolean {
		if (appcuesInstance) {
			return appcuesInstance.onNewIntent(Application.android.foregroundActivity || Application.android.startActivity, value);
		}
		return false;
	}

	static nativeInstance() {
		return appcuesInstance;
	}
}
