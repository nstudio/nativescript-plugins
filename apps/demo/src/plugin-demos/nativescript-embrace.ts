import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptEmbrace } from '@demo/shared';
import { } from '@nstudio/nativescript-embrace';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptEmbrace {
	
}
