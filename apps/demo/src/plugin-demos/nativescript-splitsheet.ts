import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSplitsheet } from '@demo/shared';
import { } from '@nstudio/nativescript-splitsheet';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSplitsheet {
	
}
