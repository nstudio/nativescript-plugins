import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptIntercom } from '@demo/shared';
import { } from '@nstudio/nativescript-intercom';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptIntercom {
	
}
