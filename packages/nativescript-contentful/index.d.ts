export interface ClientOptions {
	space: string;
	accessToken: string;
	preview?: boolean;
	environment?: string;
}

export class Client {
	constructor(opts: ClientOptions);

	fetchEntry(id: string): Promise<any>;

	fetchEntries(query?: { [k: string]: any }): Promise<any>;

	fetchEntriesByContentType?(contentType: string, query?: { [k: string]: any }): Promise<any>;

	fetchAsset(id: string): Promise<any>;

	fetchAssetData(id: string): Promise<string>;

	fetchLocales(): Promise<any[]>;

	fetchSpace(): Promise<any>;

	clearCache(): void;

	sync(syncToken?: string): Promise<any>;

	populateContentTypeCache(): number | Promise<number>;

	whereAdvanced?(query: { key: string; op: string; value: any }): any;

	imageUrlForAsset(assetId: string, options?: { w?: number; h?: number; fm?: string; q?: number }): Promise<string>;

	observeEntries?(onNext: (items: any) => void, onError?: (e: any) => void, intervalMs?: number): { unsubscribe: () => void };

	observeContentTypeCachePopulation?(onNext: (n: number) => void, onError?: (e: any) => void, intervalMs?: number): { unsubscribe: () => void };
}

export default Client;
