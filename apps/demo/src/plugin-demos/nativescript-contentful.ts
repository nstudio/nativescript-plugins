import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptContentful } from '@demo/shared';
import {} from '@nstudio/nativescript-contentful';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptContentful {}
