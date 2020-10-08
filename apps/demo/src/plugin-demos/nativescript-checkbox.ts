import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCheckbox } from '@demo/shared';
import {} from '@nstudio/nativescript-checkbox';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedNativescriptCheckbox {}
