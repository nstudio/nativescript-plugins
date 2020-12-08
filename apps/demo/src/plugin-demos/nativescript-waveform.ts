import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptWaveform } from '@demo/shared';
import {} from '@nstudio/nativescript-waveform';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWaveform {}
