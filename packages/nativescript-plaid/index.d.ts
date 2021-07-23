import { PlaidLinkBase, PlaidLinkConfig, PlaidLinkEventMetadata } from './common';

export declare class PlaidLink extends PlaidLinkBase {
	public open(): void;

	public static createHandler(config: PlaidLinkConfig): PlaidLink;

	public static setLinkEventListener(listener: (event: PlaidLinkEventMetadata) => void);
}

export * from './common';
