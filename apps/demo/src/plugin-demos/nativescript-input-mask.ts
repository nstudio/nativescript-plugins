import { DemoSharedNativescriptInputMask } from '@demo/shared';
import { EventData, Page } from '@nativescript/core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptInputMask {
	constructor() {
		super();
		this.set('mask', '[0000] [0000] [0000] [0000]');
	}

	onTextChange(args) {
		console.log('text change event', args.value);
		this.set('text', args.value);
	}
}
