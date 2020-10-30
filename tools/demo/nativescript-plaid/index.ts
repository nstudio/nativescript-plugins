import { DemoSharedBase } from '../utils';
import { PlaidLink } from '@nstudio/nativescript-plaid';

export class DemoSharedNativescriptPlaid extends DemoSharedBase {
	constructor() {
		super();
		PlaidLink.setLinkEventListener((event) => {
			console.log('linkEventListener');
			console.log(event);
		});
	}

	open() {
		const handler = PlaidLink.createHandler({
			token: 'you-token-here',
			onSuccess: (linkSuccess) => {
				console.log('linkSuccess');
				console.dir(linkSuccess);
			},
			onExit: (linkExit) => {
				console.log('linkExit');
				console.dir(linkExit);
			},
		});
		handler.open();
	}
}
