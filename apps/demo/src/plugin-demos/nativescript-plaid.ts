import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptPlaid } from '@demo/shared';
import {} from '@nstudio/nativescript-plaid';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPlaid {}
