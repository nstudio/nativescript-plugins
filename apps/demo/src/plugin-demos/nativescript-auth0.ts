import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAuth0 } from '@demo/shared';
import {} from '@nstudio/nativescript-auth0';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAuth0 {}
