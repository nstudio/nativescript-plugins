import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptVlcPlayer } from '@demo/shared';
import {} from '@nstudio/nativescript-vlc-player';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptVlcPlayer {}
