import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptTiktok } from '@demo/shared';
import {} from '@nstudio/nativescript-tiktok';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptTiktok {}
