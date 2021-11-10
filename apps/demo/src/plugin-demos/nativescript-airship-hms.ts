import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAirshipHms } from '@demo/shared';
import { } from '@nstudio/nativescript-airship-hms';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAirshipHms {
	
}
