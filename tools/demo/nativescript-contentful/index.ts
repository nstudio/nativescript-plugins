import { DemoSharedBase } from '../utils';
import { Client } from '@nstudio/nativescript-contentful';

// Replace these with real values for the demo to work
const DEMO_SPACE = process.env.CONTENTFUL_SPACE || '<YOUR_SPACE_ID>';
const DEMO_TOKEN = process.env.CONTENTFUL_TOKEN || '<YOUR_CDA_TOKEN>';

export class DemoSharedNativescriptContentful extends DemoSharedBase {
	testIt() {
		console.log('test nativescript-contentful!');

		if (DEMO_SPACE.includes('<YOUR') || DEMO_TOKEN.includes('<YOUR')) {
			console.warn('Set CONTENTFUL_SPACE and CONTENTFUL_TOKEN env vars or replace placeholders in tools/demo/nativescript-contentful/index.ts');
			return;
		}

		const client = new Client({ space: DEMO_SPACE, accessToken: DEMO_TOKEN });

		// fetch some entries (first call)
		client
			.fetchEntries({ limit: 5 })
			.then((res) => {
				console.log('fetchEntries result:', res && res.items ? res.items.length : res);
				if (res && res.items && res.items.length > 0) {
					const first = res.items[0];
					console.log('First entry id:', first.sys && first.sys.id ? first.sys.id : first.id);
				}
			})
			.catch((err) => console.error('fetchEntries error', err));

		// fetch single entry by id (example placeholder)
		const sampleEntryId = '<ENTRY_ID_IF_KNOWN>';
		if (!sampleEntryId.includes('<ENTRY')) {
			client
				.fetchEntry(sampleEntryId)
				.then((e) => console.log('fetchEntry', e))
				.catch((err) => console.error('fetchEntry error', err));
		}

		// sync example
		client
			.sync()
			.then((s) => console.log('sync result', s))
			.catch((err) => console.error('sync error', err));

		// content type cache population
		try {
			const count = client.populateContentTypeCache();
			console.log('populateContentTypeCache returned', count);
		} catch (e) {
			console.warn('populateContentTypeCache failed', e);
		}
	}
}
