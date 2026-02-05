import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptBranch } from '@demo/shared';
import {} from '@nstudio/nativescript-branch';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptBranch {}
