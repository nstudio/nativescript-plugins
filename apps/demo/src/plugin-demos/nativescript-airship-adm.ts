import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAirshipAdm } from '@demo/shared';
import { } from '@nstudio/nativescript-airship-adm';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAirshipAdm {
	
}
