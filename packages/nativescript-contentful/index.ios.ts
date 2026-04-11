export interface ClientOptions {
	space: string;
	accessToken: string;
	preview?: boolean;
	environment?: string;
}

export class Client {
	private nativeClient: NSCContentful;

	constructor(opts: ClientOptions) {
		if (!opts || !opts.space || !opts.accessToken) {
			throw new Error('Missing required options: space, accessToken');
		}

		const preview = !!opts.preview;
		const env = opts.environment || 'master';

		this.nativeClient = NSCContentful.alloc().initWithSpaceTokenPreviewEnvironment(opts.space, opts.accessToken, preview, env);
	}

	fetchEntry(id: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.nativeClient.fetchEntryCompletion(id, (result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result);
			});
		});
	}

	fetchEntries(query?: { [k: string]: string }): Promise<any> {
		return new Promise((resolve, reject) => {
			this.nativeClient.fetchEntriesCompletion(query ?? null, (result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result);
			});
		});
	}

	fetchAsset(id: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.nativeClient.fetchAssetCompletion(id, (result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result);
			});
		});
	}

	clearCache(): void {
		this.nativeClient.clearCache();
	}

	populateContentTypeCache(): Promise<number> {
		return new Promise((resolve, reject) => {
			this.nativeClient.populateContentTypeCache((result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result as number);
			});
		});
	}

	whereAdvanced(query: { key: string; op: string; value: any }): Promise<any> {
		return new Promise((resolve, reject) => {
			this.nativeClient.whereAdvancedOpValueCompletion(query.key, query.op, query.value, (result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result);
			});
		});
	}

	imageUrlForAsset(assetId: string, options?: { w?: number; h?: number; fm?: string; q?: number }): Promise<string> {
		return new Promise((resolve, reject) => {
			this.nativeClient.imageUrlForAssetOptionsCompletion(assetId, options ?? null, (result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result as string);
			});
		});
	}

	sync(syncToken?: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.nativeClient.syncCompletion(syncToken ?? null, (result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result);
			});
		});
	}

	fetchSpace(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.nativeClient.fetchSpaceWithCompletion((result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result);
			});
		});
	}

	// Observe entries via polling fallback. Returns { unsubscribe }
	observeEntries(onNext: (items: any) => void, onError?: (e: any) => void, intervalMs: number = 5000): { unsubscribe: () => void } {
		const createObserver = NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock('NSCContentful.DidCreateEntry', null, null, (note: any) => {
			try {
				const info = note.userInfo || {};
				const entry = info.entry || null;
				onNext({ type: 'create', entry });
			} catch (e) {
				if (onError) onError(e);
			}
		});
		const deleteObserver = NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock('NSCContentful.DidDeleteEntry', null, null, (note: any) => {
			try {
				const info = note.userInfo || {};
				const entryId = info.entryId || null;
				onNext({ type: 'delete', entryId });
			} catch (e) {
				if (onError) onError(e);
			}
		});
		const updateObserver = NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock('NSCContentful.DidUpdateEntries', null, null, (note: any) => {
			try {
				const info = note.userInfo || {};
				const items = info.items || [];
				const total = info.total !== undefined && info.total !== null ? info.total : items && items.length ? items.length : 0;
				onNext({ items, total });
			} catch (e) {
				if (onError) onError(e);
			}
		});
		return {
			unsubscribe: () => {
				NSNotificationCenter.defaultCenter.removeObserver(createObserver);
				NSNotificationCenter.defaultCenter.removeObserver(deleteObserver);
				NSNotificationCenter.defaultCenter.removeObserver(updateObserver);
			},
		};
	}

	observeContentTypeCachePopulation(onNext: (n: number) => void, onError?: (e: any) => void, intervalMs: number = 5000): { unsubscribe: () => void } {
		const obs = NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock('NSCContentful.DidUpdateSync', null, null, (note: any) => {
			try {
				const info = note.userInfo || {};
				if (info.sync != null) {
					// send the entire sync dict length or entries count
					const sync = info.sync as any;
					const count = sync.entries ? sync.entries.length : sync.assets ? sync.assets.length : 0;
					onNext(count);
				} else if (info.locales) {
					onNext((info.locales as any).length || 0);
				} else if (info.syncToken) {
					onNext(0);
				}
			} catch (e) {
				if (onError) onError(e);
			}
		});
		return {
			unsubscribe: () => {
				NSNotificationCenter.defaultCenter.removeObserver(obs);
			},
		};
	}

	fetchLocales(): Promise<any[]> {
		return new Promise((resolve, reject) => {
			this.nativeClient.fetchLocalesWithCompletion((result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result);
			});
		});
	}

	fetchAssetData(id: string): Promise<string> {
		return new Promise((resolve, reject) => {
			this.nativeClient.fetchAssetDataCompletion(id, (result: any, error: any) => {
				if (error) return reject({ message: error.localizedDescription || String(error) });
				resolve(result as string);
			});
		});
	}
}
