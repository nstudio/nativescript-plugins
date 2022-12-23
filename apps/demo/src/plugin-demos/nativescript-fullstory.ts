import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFullstory } from '@demo/shared';
import { } from '@nstudio/nativescript-fullstory';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFullstory {
	
}
