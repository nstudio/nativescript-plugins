import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedOnfido } from '@demo/shared';
import {} from '@nstudio/nativescript-onfido';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedOnfido {}
