import { Observable } from '@nativescript/core';
import { FullstorySDKCommon } from './common';
export { FullStoryEvents } from './common';

/**
 * iOS Only
 * FullStory delegate for events
 */
export declare class FSDelegateImpl extends NSObject {

}
export declare class FullstorySDK extends FullstorySDKCommon {
	static Debug: boolean;
	static Events(): Observable;
	static Log(...args: Array<any>): void;
	static identify(id: string, params?: any);
	static setUserVars(params: any);
	static consent(consented: boolean);
	static shutdown();
	static restart();
	static unmask(view: View): void;
	static unmaskWithConsent(view: View): void;
	static addClass(view: View, name: string): void;
	static addClasses(view: View, names: Array<string>): void;
	static setAttribute(view: View, name: string, value: string): void;
	static removeAttribute(view: View, name: string): void;
}
