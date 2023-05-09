declare class NSCAptabase extends NSObject {

	static alloc(): NSCAptabase; // inherited from NSObject

	static initializeWithAppKeyOpts(appKey: string, opts: NSCInitOptions): void;

	static new(): NSCAptabase; // inherited from NSObject

	static trackWithNameProperties(name: string, properties: NSDictionary<string, any>): void;
}

declare class NSCInitOptions extends NSObject {

	static alloc(): NSCInitOptions; // inherited from NSObject

	static new(): NSCInitOptions; // inherited from NSObject

	host: string;

	constructor(o: { host: string; });

	initWithHost(host: string): this;
}
