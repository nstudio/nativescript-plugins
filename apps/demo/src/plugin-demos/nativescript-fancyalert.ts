import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFancyalert } from '@demo/shared';
import {} from '@nstudio/nativescript-fancyalert';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFancyalert {}
