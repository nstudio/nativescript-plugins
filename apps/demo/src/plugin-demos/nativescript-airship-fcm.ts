import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAirshipFcm } from '@demo/shared';
import { } from '@nstudio/nativescript-airship-fcm';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAirshipFcm {
	
}
