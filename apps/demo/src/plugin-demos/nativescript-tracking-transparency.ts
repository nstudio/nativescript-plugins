import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptTrackingTransparency } from '@demo/shared';
import {} from '@nstudio/nativescript-tracking-transparency';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptTrackingTransparency {}
