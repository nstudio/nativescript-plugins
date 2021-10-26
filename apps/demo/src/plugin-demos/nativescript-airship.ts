import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAirship } from '@demo/shared';
import { } from '@nstudio/nativescript-airship';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAirship {
	
}
