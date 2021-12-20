import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptLoadingIndicator } from '@demo/shared';
import { } from '@nstudio/nativescript-loading-indicator';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptLoadingIndicator {
	
}
