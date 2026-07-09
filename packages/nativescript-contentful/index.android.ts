import { Utils } from '@nativescript/core';

export interface ClientOptions {
	space: string;
	accessToken: string;
	preview?: boolean;
	environment?: string;
}

function toJsError(t: any) {
	try {
		const msg = t.getMessage ? t.getMessage() : t.toString();
		const code = t instanceof com.contentful.java.cda.CDAHttpException ? t.responseCode() : undefined;
		return { message: msg, code };
	} catch (e) {
		return { message: String(t) };
	}
}

@NativeClass()
class CDACallback<T> extends com.contentful.java.cda.CDACallback<T> {
	constructor(
		public resolve: (result: T) => void,
		public reject: (error: any) => void,
	) {
		super();
		return global.__native(this);
	}

	onSuccess(entry: T) {
		this.resolve(entry);
	}

	onFailure(t: any) {
		this.reject(t);
	}
}

export class Client {
	native_: com.contentful.java.cda.CDAClient;

	constructor(opts: ClientOptions) {
		if (!opts || !opts.space || !opts.accessToken) {
			throw new Error('Missing required options: space, accessToken');
		}

		const builder = com.contentful.java.cda.CDAClient.builder().setSpace(opts.space).setToken(opts.accessToken);

		if (opts.preview) {
			builder.preview();
		}

		if (opts.environment) {
			builder.setEnvironment(opts.environment);
		}

		this.native_ = builder.build();
	}

	fetchEntry(id: string): Promise<any> {
		return new Promise((resolve, reject) => {
			const q = this.native_.fetch(com.contentful.java.cda.CDAEntry.class);
			q.one(
				id,
				new CDACallback<com.contentful.java.cda.CDAEntry>(
					(entry) => {
						try {
							const json = io.nstudio.plugins.contentful.Contenful.entryToJson(entry);
							resolve(JSON.parse(json));
						} catch (e) {
							resolve({ id: entry.id(), fields: entry.rawFields() });
						}
					},
					(t: any) => {
						reject(toJsError(t));
					},
				),
			);
		});
	}

	fetchEntries(query?: { content_type?: string; limit?: number; skip?: number; order?: string; include?: number; select?: string | string[]; where?: { [k: string]: any } }): Promise<any> {
		return new Promise((resolve, reject) => {
			const params = Utils.dataSerialize(query ?? {});
			io.nstudio.plugins.contentful.Contenful.fetchEntries(
				this.native_,
				params,
				new io.nstudio.plugins.contentful.Contenful.EntriesFetchCallback({
					onSuccess: (json: string) => {
						try {
							resolve(JSON.parse(json));
						} catch (e) {
							resolve(json);
						}
					},
					onFailure: (err: any) => {
						reject(toJsError(err));
					},
				}),
			);
		});
	}

	fetchAsset(id: string): Promise<any> {
		return new Promise((resolve, reject) => {
			const q = this.native_.fetch(com.contentful.java.cda.CDAAsset.class);
			q.one(
				id,
				new CDACallback<com.contentful.java.cda.CDAAsset>(
					(asset) => {
						try {
							const json = io.nstudio.plugins.contentful.Contenful.assetToJson(asset);
							resolve(JSON.parse(json));
						} catch (e) {
							resolve({ id: asset.id(), url: asset.url(), title: asset.title() });
						}
					},
					(t: any) => {
						reject(toJsError(t));
					},
				),
			);
		});
	}

	fetchLocales(): Promise<any[]> {
		return this.fetchSpace().then((space: any) => {
			if (space && space.locales) return space.locales;
			return [];
		});
	}

	fetchAssetData(id: string): Promise<string> {
		return new Promise((resolve, reject) => {
			this.fetchAsset(id)
				.then((asset: any) => {
					try {
						const file = asset && asset.fields && asset.fields.file ? asset.fields.file : null;
						let url = file && file.url ? file.url : null;
						if (!url) return reject(new Error('Asset URL not available'));
						if (url.startsWith('//')) url = 'https:' + url;
						io.nstudio.plugins.contentful.ContenfulFetchHelper.fetchUrlToBase64Async(
							url,
							new io.nstudio.plugins.contentful.ContenfulFetchHelper.FetchCallback({
								onSuccess: (b64: string) => resolve(b64),
								onFailure: (err: any) => reject(toJsError(err)),
							}),
						);
					} catch (e) {
						reject(e);
					}
				})
				.catch((err) => reject(err));
		});
	}

	clearCache(): void {
		this.native_.clearCache();
	}

	sync(syncToken?: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.native_.sync(syncToken ?? null).fetch(
				new CDACallback<com.contentful.java.cda.SynchronizedSpace>(
					(space) => {
						try {
							const json = io.nstudio.plugins.contentful.Contenful.synchronizedSpaceToJson(space);
							if (json) resolve(JSON.parse(json));
							else resolve({ items: space.items(), nextSyncUrl: space.nextSyncUrl ? space.nextSyncUrl() : null });
						} catch (e) {
							resolve({ items: space.items(), nextSyncUrl: space.nextSyncUrl ? space.nextSyncUrl() : null });
						}
					},
					(t: any) => {
						reject(toJsError(t));
					},
				),
			);
		});
	}

	populateContentTypeCache(): number {
		try {
			return this.native_.populateContentTypeCache();
		} catch (e) {
			return 0;
		}
	}

	observeContentTypeCachePopulation(onNext: (n: number) => void, onError?: (e: any) => void): { unsubscribe: () => void } {
		const sub = io.nstudio.plugins.contentful.Contenful.observeContentTypeCachePopulation(
			this.native_,
			new io.nstudio.plugins.contentful.Contenful.ContentTypeCacheListener({
				onNext: (n: number) => {
					try {
						onNext(n);
					} catch (e) {}
				},
				onError: (err: any) => {
					if (onError) onError(toJsError(err));
				},
			}),
		);
		return {
			unsubscribe: () => {
				try {
					sub.unsubscribe();
				} catch (e) {}
			},
		};
	}

	fetchSpace(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.native_.fetchSpace(
				new CDACallback<com.contentful.java.cda.CDASpace>(
					(space) => {
						try {
							const json = io.nstudio.plugins.contentful.Contenful.spaceToJson(space);
							if (json) resolve(JSON.parse(json));
							else resolve({ id: space.id ? space.id() : null, name: space.name ? space.name() : null });
						} catch (e) {
							resolve({ id: space.id ? space.id() : null, name: space.name ? space.name() : null });
						}
					},
					(t: any) => {
						reject(toJsError(t));
					},
				),
			);
		});
	}

	imageUrlForAsset(assetId: string, options?: { w?: number; h?: number; fm?: string; q?: number }): Promise<string> {
		return new Promise((resolve, reject) => {
			this.fetchAsset(assetId)
				.then((asset: any) => {
					try {
						const file = asset && asset.fields && asset.fields.file ? asset.fields.file : null;
						let url = file && file.url ? file.url : null;
						if (!url) return reject(new Error('Asset URL not available'));
						// Contentful asset URLs may be protocol-relative
						if (url.startsWith('//')) url = 'https:' + url;
						const params: string[] = [];
						if (options) {
							if (options.w) params.push('w=' + options.w);
							if (options.h) params.push('h=' + options.h);
							if (options.fm) params.push('fm=' + encodeURIComponent(options.fm));
							if (options.q) params.push('q=' + options.q);
						}
						if (params.length > 0) url += (url.indexOf('?') === -1 ? '?' : '&') + params.join('&');
						resolve(url);
					} catch (e) {
						reject(e);
					}
				})
				.catch((err) => reject(err));
		});
	}

	observeEntries(onNext: (items: any) => void, onError?: (e: any) => void): { unsubscribe: () => void } {
		const sub = io.nstudio.plugins.contentful.Contenful.observeEntries(
			this.native_,
			new io.nstudio.plugins.contentful.Contenful.EntriesListener({
				onNext: (json: string) => {
					try {
						onNext(JSON.parse(json));
					} catch (e) {
						try {
							onNext(json);
						} catch (_) {}
					}
				},
				onError: (err: any) => {
					if (onError) onError(toJsError(err));
				},
			}),
		);
		return {
			unsubscribe: () => {
				try {
					sub.unsubscribe();
				} catch (e) {}
			},
		};
	}

	whereAdvanced(query: { key: string; op: string; value: any }): any {
		try {
			const operation = (com.contentful.java.cda.QueryOperation as any)[query.op];
			if (!operation) throw new Error('Unsupported QueryOperation: ' + query.op);
			const q: com.contentful.java.cda.FetchQuery<any> = this.native_.fetch(com.contentful.java.cda.CDAEntry.class);
			q.where(query.key, operation, [query.value]);
			return q;
		} catch (e) {
			throw e;
		}
	}
}
