import { DemoSharedNativescriptLoadingIndicator } from '@demo/shared';
import { EventData, Page } from '@nativescript/core';
import { LoadingIndicator, Mode } from '@nstudio/nativescript-loading-indicator';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptLoadingIndicator {
	demoShared: DemoSharedNativescriptLoadingIndicator;

	constructor() {
		super();
		this.demoShared = new DemoSharedNativescriptLoadingIndicator();
	}
}
