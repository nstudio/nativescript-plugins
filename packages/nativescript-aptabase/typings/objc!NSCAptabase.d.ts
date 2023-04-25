
declare class NSCAptabase extends NSObject {

	static alloc(): NSCAptabase; // inherited from NSObject

	static initializeWithAppKey(appKey: string): void;

	static new(): NSCAptabase; // inherited from NSObject

	static trackWithNameProperties(name: string, properties: NSDictionary<string, any>): void;
}
