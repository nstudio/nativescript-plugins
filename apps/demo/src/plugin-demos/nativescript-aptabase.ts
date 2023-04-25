import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAptabase } from '@demo/shared';
import { } from '@nstudio/nativescript-aptabase';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAptabase {
	
}
