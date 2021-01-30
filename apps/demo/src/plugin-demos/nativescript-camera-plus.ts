import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptCameraPlus } from '@demo/shared';
import {} from '@nstudio/nativescript-camera-plus';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedNativescriptCameraPlus {}
