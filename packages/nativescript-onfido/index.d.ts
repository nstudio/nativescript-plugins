import { OnfidoCommon, OnfidoConfig, OnfidoResult } from './common';

export declare class Onfido extends OnfidoCommon {
	public static debugMode: boolean;

	public static start(config: OnfidoConfig): Promise<OnfidoResult>;
}

export * from './utils';
export * from './common';