import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptAzureNotificationhubs } from '@demo/shared';
import { } from '@nstudio/nativescript-azure-notificationhubs';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptAzureNotificationhubs {
	
}
