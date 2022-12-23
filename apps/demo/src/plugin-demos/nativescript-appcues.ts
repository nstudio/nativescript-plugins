import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAppcues } from '@demo/shared';
import { } from '@nstudio/nativescript-appcues';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAppcues {
	
}
