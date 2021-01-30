import { PlaidLinkBase, PlaidLinkConfig, PlaidLinkEventMetadata, PlaidLinkEventName, PlaidLinkEventViewName, PlaidLinkExitResult, PlaidLinkInstitution, PlaidLinkResultAccount, PlaidLinkResultAccountSubType, PlaidLinkResultAccountType, PlaidLinkResultVerificationStatus, PlaidLinkSuccessResult, PlaidLinkExitResultMetaData, PlaidLinkExitResultError, PlaidLinkResultAccountSubTypeCredit, PlaidLinkResultAccountSubTypeDepository, PlaidLinkResultAccountSubTypeInvestment, PlaidLinkResultAccountSubTypeLoan, PlaidLinkSuccessMetaData } from './common';

export declare class PlaidLink extends PlaidLinkBase {
	public open(): void;

	public static createHandler(config: PlaidLinkConfig): PlaidLink;

	public static setLinkEventListener(listener: (event: PlaidLinkEventMetadata) => void);
}

export { PlaidLinkConfig, PlaidLinkEventMetadata, PlaidLinkEventName, PlaidLinkEventViewName, PlaidLinkExitResult, PlaidLinkInstitution, PlaidLinkResultAccount, PlaidLinkResultAccountSubType, PlaidLinkResultAccountType, PlaidLinkResultVerificationStatus, PlaidLinkSuccessResult, PlaidLinkExitResultMetaData, PlaidLinkExitResultError, PlaidLinkResultAccountSubTypeCredit, PlaidLinkResultAccountSubTypeDepository, PlaidLinkResultAccountSubTypeInvestment, PlaidLinkResultAccountSubTypeLoan, PlaidLinkSuccessMetaData };
