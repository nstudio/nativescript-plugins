import { Frame } from '@nativescript/core';
import { PlaidLinkBase, PlaidLinkConfig, PlaidLinkEventMetadata, PlaidLinkEventName, PlaidLinkEventViewName, PlaidLinkExitResult, PlaidLinkInstitution, PlaidLinkResultAccount, PlaidLinkResultAccountSubType, PlaidLinkResultAccountType, PlaidLinkResultVerificationStatus, PlaidLinkSuccessResult, PlaidLinkExitResultMetaData, PlaidLinkExitResultError, PlaidLinkResultAccountSubTypeCredit, PlaidLinkResultAccountSubTypeDepository, PlaidLinkResultAccountSubTypeInvestment, PlaidLinkResultAccountSubTypeLoan, PlaidLinkSuccessMetaData } from './common';
export class PlaidLink extends PlaidLinkBase {
	private onSuccess: (linkSuccess: PlaidLinkSuccessResult) => void;
	private onExit: (linkExit: PlaidLinkExitResult) => void;
	private token: string;
	private _handler: PLKHandler;

	private eventNames = {
		0: 'closeOAuth',
		1: 'error',
		2: 'exit',
		3: 'failOAuth',
		4: 'handoff',
		5: 'open',
		6: 'openMyPlaid',
		7: 'openOAuth',
		8: 'searchInstitution',
		9: 'selectInstitution',
		10: 'submitCredentials',
		11: 'submitMfa',
		12: 'transitionView',
		13: 'unknown',
	};

	private viewNames = {
		1: 'connected',
		2: 'consent',
		3: 'credential',
		4: 'error',
		5: 'exit',
		6: 'loading',
		7: 'mfa',
		8: 'numbers',
		9: 'recaptcha',
		10: 'selectAccount',
		11: 'selectInstitution',
		12: 'unknown',
	};

	constructor() {
		super();
	}

	private static get rootViewController(): UIViewController | undefined {
		const keyWindow = UIApplication.sharedApplication.keyWindow;
		return keyWindow != null ? keyWindow.rootViewController : undefined;
	}

	private static get topViewController(): UIViewController | undefined {
		const root = PlaidLink.rootViewController;
		if (root == null) {
			return undefined;
		}
		return PlaidLink.findTopViewController(root);
	}

	private static findTopViewController(root: UIViewController): UIViewController | undefined {
		const presented = root.presentedViewController;
		if (presented != null) {
			return PlaidLink.findTopViewController(presented);
		}
		if (root instanceof UISplitViewController) {
			const last = root.viewControllers.lastObject;
			if (last == null) {
				return root;
			}
			return PlaidLink.findTopViewController(last);
		} else if (root instanceof UINavigationController) {
			const top = root.topViewController;
			if (top == null) {
				return root;
			}
			return PlaidLink.findTopViewController(top);
		} else if (root instanceof UITabBarController) {
			const selected = root.selectedViewController;
			if (selected == null) {
				return root;
			}
			return PlaidLink.findTopViewController(selected);
		} else {
			return root;
		}
	}

	private static _listener?: (event: PlaidLinkEventMetadata) => void;

	public static setLinkEventListener(listener: (event: PlaidLinkEventMetadata) => void) {
		const plaidLink = new PlaidLink();
		PlaidLink._listener = listener;
	}

	public static createHandler(config: PlaidLinkConfig): PlaidLink {
		const plaidLink = new PlaidLink();
		plaidLink.onExit = config.onExit;
		plaidLink.onSuccess = config.onSuccess;
		if (config.token) plaidLink.token = config.token;
		return plaidLink;
	}

	public open() {
		let config = PLKLinkTokenConfiguration.createWithTokenOnSuccess(this.token, (result) => {
			let accounts = [];
			const accountsCount = result.metadata.accounts.count;
			for (let i = 0; i < accountsCount; i++) {
				const account = result.metadata.accounts.objectAtIndex(i);
				accounts.push({
					id: account.ID,
					name: account.name,
					mask: account.mask,
					subtype: account.subtype.rawStringValue,
					verificationStatus: account.verificationStatus?.value,
				});
			}
			this.onSuccess({
				publicToken: result.publicToken,
				metadata: {
					institution: {
						id: result.metadata.insitution.ID,
						name: result.metadata.insitution.name,
					},
					linkSessionId: result.metadata.linkSessionID,
					metadataJson: result.metadata.metadataJSON,
					accounts: accounts,
				},
			});
		});
		config.onExit = (result) => {
			this.onExit({
				error: {
					displayMessage: result.error.localizedFailureReason,
					code: result.error ? result.error.code.toString() : null,
				},
				metadata: {
					institution: {
						id: result.metadata.institution.ID,
						name: result.metadata.institution.name,
					},
					linkSessionId: result.metadata.linkSessionID,
					status: result.metadata.status ? result.metadata.status.value.toString() : null,
					requestId: result.metadata.requestID,
				},
			});
		};
		config.onEvent = (result) => {
			const plaidLink = new PlaidLink();
			let args: PlaidLinkEventMetadata = {
				eventName: plaidLink.eventNames[result.eventName.value],
				metadata: {
					errorCode: result.eventMetadata.error ? result.eventMetadata.error.code.toString() : null,
					errorMessage: result.eventMetadata.error && result.eventMetadata.error.localizedFailureReason ? result.eventMetadata.error.localizedFailureReason.toString() : null,
					institutionId: result.eventMetadata.institutionID,
					institutionName: result.eventMetadata.institutionName,
					institutionSearchQuery: result.eventMetadata.institutionSearchQuery,
					linkSessionId: result.eventMetadata.linkSessionID,
					requestId: result.eventMetadata.requestID,
					timestamp: result.eventMetadata.timestamp ? result.eventMetadata.timestamp.toString() : null,
					viewName: plaidLink.viewNames[result.eventMetadata.viewName.value],
					metadataJson: result.eventMetadata.metadataJSON,
				},
			};
			if (PlaidLink._listener) PlaidLink._listener(args);
		};
		let handler = PLKPlaid.createWithLinkTokenConfigurationError(config);
		const topCtrl = PlaidLink.topViewController;
		topCtrl.modalPresentationStyle = 0;
		handler.openWithPresentationHandler((ctrl) => {
			topCtrl.presentViewControllerAnimatedCompletion(ctrl, true, () => {});
		});
	}
}

export { PlaidLinkConfig, PlaidLinkEventMetadata, PlaidLinkEventName, PlaidLinkEventViewName, PlaidLinkExitResult, PlaidLinkInstitution, PlaidLinkResultAccount, PlaidLinkResultAccountSubType, PlaidLinkResultAccountType, PlaidLinkResultVerificationStatus, PlaidLinkSuccessResult, PlaidLinkExitResultMetaData, PlaidLinkExitResultError, PlaidLinkResultAccountSubTypeCredit, PlaidLinkResultAccountSubTypeDepository, PlaidLinkResultAccountSubTypeInvestment, PlaidLinkResultAccountSubTypeLoan, PlaidLinkSuccessMetaData };
