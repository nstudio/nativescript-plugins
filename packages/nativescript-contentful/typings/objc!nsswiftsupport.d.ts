declare class NSCContentful extends NSObject {
	static alloc(): NSCContentful; // inherited from NSObject

	static new(): NSCContentful; // inherited from NSObject

	static readonly NotificationDidCreateAsset: string;

	static readonly NotificationDidCreateEntry: string;

	static readonly NotificationDidDeleteAsset: string;

	static readonly NotificationDidDeleteEntry: string;

	static readonly NotificationDidUpdateSync: string;

	constructor(o: { space: string; token: string; preview: boolean; environment: string });

	clearCache(): void;

	fetchAssetCompletion(id: string, completion: (p1: any, p2: NSError) => void): void;

	fetchAssetDataCompletion(id: string, completion: (p1: any, p2: NSError) => void): void;

	fetchEntriesByContentTypeCompletion(contentTypeId: string, completion: (p1: any, p2: NSError) => void): void;

	fetchEntriesCompletion(query?: NSDictionary<string, string> | { [k: string]: string }, completion: (p1: any, p2: NSError) => void): void;

	fetchEntryCompletion(id: string, completion: (p1: any, p2: NSError) => void): void;

	fetchLocalesWithCompletion(completion: (p1: any, p2: NSError) => void): void;

	fetchSpaceWithCompletion(completion: (p1: any, p2: NSError) => void): void;

	imageUrlForAssetOptionsCompletion(assetId: string, options?: NSDictionary<string, any> | { [k: string]: any }, completion: (p1: any, p2: NSError) => void): void;

	initWithSpaceTokenPreviewEnvironment(space: string, token: string, preview: boolean, environment: string): this;

	populateContentTypeCache(completion: (p1: any, p2: NSError) => void): void;

	syncCompletion(syncTokenOrPath?: string, completion: (p1: any, p2: NSError) => void): void;

	whereAdvancedOpValueCompletion(key: string, op: string, value: any, completion: (p1: any, p2: NSError) => void): void;
}
