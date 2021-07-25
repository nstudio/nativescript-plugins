import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptDynatrace } from '@demo/shared';
import {} from '@nstudio/nativescript-dynatrace';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptDynatrace {}
