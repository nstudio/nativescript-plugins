import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptWalletconnectLegacy } from '@demo/shared';
import {} from '@nstudio/nativescript-walletconnect-legacy';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWalletconnectLegacy {}
