import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptQr } from '@demo/shared';
import { } from '@nstudio/nativescript-qr';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptQr {
	
}
