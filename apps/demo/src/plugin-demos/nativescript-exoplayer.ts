import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptExoplayer } from '@demo/shared';
import {} from '@nstudio/nativescript-exoplayer';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedNativescriptExoplayer {}
