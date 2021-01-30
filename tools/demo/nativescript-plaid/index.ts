import { PlaidLink } from '@nstudio/nativescript-plaid';
import { DemoSharedBase } from '../utils';

export class DemoSharedNativescriptPlaid extends DemoSharedBase {
	successPublicToken: string;

	constructor() {
		super();
	}

	open() {
		PlaidLink.setLinkEventListener((event) => {
			console.log('linkEventListener', event);
		});
		const handler = PlaidLink.createHandler({
			token: 'link-sandbox-2654d030-c60d-44ab-80d6-b26960841d94',
			onSuccess: (linkSuccess) => {
				console.log('linkSuccess', linkSuccess);
				this.set('successPublicToken', linkSuccess.publicToken);
			},
			onExit: (linkExit) => {
				console.log('linkExit', linkExit);
			},
		});
		handler.open();
	}
}
