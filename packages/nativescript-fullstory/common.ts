import { Observable } from '@nativescript/core';

export const FullStoryLogTag = 'FullStory SDK';
let fullStoryEvents: Observable;
export enum FullStoryEvents {
    startSession = 'startSession',
    stopSession = 'stopSession',
    terminateWithError = 'terminateWithError'
}

export class FullstorySDKCommon extends Observable {
    static Debug = false;
    static Events() {
        if (!fullStoryEvents) {
            fullStoryEvents = new Observable();
        }
        return fullStoryEvents;
    }
    static Log(...args: Array<any>) {
        if (FullstorySDKCommon.Debug) {
			console.log(FullStoryLogTag, args);
		}
    }
}
