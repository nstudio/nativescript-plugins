import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptWebServer } from '@demo/shared';
import { } from '@nstudio/nativescript-web-server';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWebServer {
	
}
