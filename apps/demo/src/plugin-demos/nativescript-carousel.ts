import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCarousel } from '@demo/shared';
import { } from '@nstudio/nativescript-carousel';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptCarousel {
	
}
