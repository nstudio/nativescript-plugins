import { OnfidoCommon, OnfidoConfig, OnfidoResult } from './common';

export { OnfidoUtils } from './utils';

export declare class Onfido extends OnfidoCommon {
	public static debugMode: boolean;

	public static start(config: OnfidoConfig): Promise<OnfidoResult>;
}

export { OnfidoCaptureType, OnfidoCountryCode, OnfidoDocumentType, OnfidoResult, OnfidoConfig } from './common';
