import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFreshchat } from '@demo/shared';
import { } from '@nstudio/nativescript-freshchat';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFreshchat {
	
}
