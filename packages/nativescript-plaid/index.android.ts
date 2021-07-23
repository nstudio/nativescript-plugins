import { PlaidLinkBase, PlaidLinkConfig, PlaidLinkEventMetadata, PlaidLinkEventName, PlaidLinkEventViewName, PlaidLinkExitResult, PlaidLinkResultAccount, PlaidLinkResultAccountSubType, PlaidLinkResultAccountType, PlaidLinkResultVerificationStatus, PlaidLinkSuccessResult } from './common';
import { AndroidActivityResultEventData, AndroidApplication, Application, Utils } from '@nativescript/core';

const toPlaidLinkEventViewName = (viewName): PlaidLinkEventViewName => {
	if (viewName instanceof com.plaid.link.event.LinkEventViewName.CONNECTED) {
		return PlaidLinkEventViewName.Connected;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.CONSENT) {
		return PlaidLinkEventViewName.Consent;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.CREDENTIAL) {
		return PlaidLinkEventViewName.Credential;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.ERROR) {
		return PlaidLinkEventViewName.Error;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.EXIT) {
		return PlaidLinkEventViewName.Exit;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.LOADING) {
		return PlaidLinkEventViewName.Loading;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.MFA) {
		return PlaidLinkEventViewName.Mfa;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.NUMBERS) {
		return PlaidLinkEventViewName.Numbers;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.RECAPTCHA) {
		return PlaidLinkEventViewName.Recaptcha;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.SELECT_ACCOUNT) {
		return PlaidLinkEventViewName.SelectAccount;
	} else if (viewName instanceof com.plaid.link.event.LinkEventViewName.SELECT_INSTITUTION) {
		return PlaidLinkEventViewName.SelectInstitution;
	} else {
		return PlaidLinkEventViewName.Unknown;
	}
};

const toPlaidLinkEventName = (name): PlaidLinkEventName => {
	if (name instanceof com.plaid.link.event.LinkEventName.SELECT_INSTITUTION) {
		return PlaidLinkEventName.SelectInstitution;
	} else if (name instanceof com.plaid.link.event.LinkEventName.EXIT) {
		return PlaidLinkEventName.Exit;
	} else if (name instanceof com.plaid.link.event.LinkEventName.ERROR) {
		return PlaidLinkEventName.Error;
	} else if (name instanceof com.plaid.link.event.LinkEventName.CLOSE_OAUTH) {
		return PlaidLinkEventName.CloseOAuth;
	} else if (name instanceof com.plaid.link.event.LinkEventName.FAIL_OAUTH) {
		return PlaidLinkEventName.FailOAuth;
	} else if (name instanceof com.plaid.link.event.LinkEventName.HANDOFF) {
		return PlaidLinkEventName.Handoff;
	} else if (name instanceof com.plaid.link.event.LinkEventName.OPEN) {
		return PlaidLinkEventName.Open;
	} else if (name instanceof com.plaid.link.event.LinkEventName.OPEN_MY_PLAID) {
		return PlaidLinkEventName.OpenMyPlaid;
	} else if (name instanceof com.plaid.link.event.LinkEventName.OPEN_OAUTH) {
		return PlaidLinkEventName.OpenOAuth;
	} else if (name instanceof com.plaid.link.event.LinkEventName.SEARCH_INSTITUTION) {
		return PlaidLinkEventName.SearchInstitution;
	} else if (name instanceof com.plaid.link.event.LinkEventName.SUBMIT_CREDENTIALS) {
		return PlaidLinkEventName.SubmitCredentials;
	} else if (name instanceof com.plaid.link.event.LinkEventName.SUBMIT_MFA) {
		return PlaidLinkEventName.SubmitMfa;
	} else if (name instanceof com.plaid.link.event.LinkEventName.TRANSITION_VIEW) {
		return PlaidLinkEventName.TransitionView;
	} else {
		return PlaidLinkEventName.Unknown;
	}
};

declare const kotlin;

export class PlaidLink extends PlaidLinkBase {
	private onSuccess: (linkSuccess: PlaidLinkSuccessResult) => void;
	private onExit: (linkExit: PlaidLinkExitResult) => void;
	private token: string;

	constructor() {
		super();
		this._resultHandler = this._resultHandlerFN.bind(this);
	}

	private static _listener?: (event: PlaidLinkEventMetadata) => void;

	public static setLinkEventListener(listener: (event: PlaidLinkEventMetadata) => void) {
		if (typeof listener === 'function') {
			com.plaid.link.Plaid.setLinkEventListener(
				new kotlin.jvm.functions.Function1({
					invoke(linkEvent) {
						const metaData = linkEvent.getMetadata();
						const result = <PlaidLinkEventMetadata>{
							eventName: toPlaidLinkEventName(linkEvent.getEventName()),
							metadata: {
								errorCode: metaData.getErrorCode(),
								errorMessage: metaData.getErrorMessage(),
								errorStatus: metaData.getExitStatus(),
								errorType: metaData.getErrorType(),
								institutionId: metaData.getInstitutionId(),
								institutionName: metaData.getInstitutionName(),
								institutionSearchQuery: metaData.getInstitutionSearchQuery(),
								linkSessionId: metaData.getLinkSessionId(),
								mfaType: metaData.getMfaType(),
								requestId: metaData.getRequestId(),
								timestamp: metaData.getTimestamp(),
								viewName: toPlaidLinkEventViewName(metaData.getViewName()),
								metadataJson: metaData.getMetadataJson(),
							},
						};
						listener(result as any);
						PlaidLink._listener = listener;
					},
				})
			);
		} else {
			this._listener = undefined;
			com.plaid.link.Plaid.clearLinkEventListener();
		}
	}

	public static createHandler(config: PlaidLinkConfig): PlaidLink {
		const plaidLink = new PlaidLink();
		plaidLink.onExit = config.onExit;
		plaidLink.onSuccess = config.onSuccess;
		plaidLink.token = config.token;
		return plaidLink;
	}

	public open() {
		const configuration: any = new com.plaid.link.configuration.LinkTokenConfiguration.Builder();
		const clazz: java.lang.Class<com.plaid.link.configuration.LinkTokenConfiguration.Builder> = configuration.getClass();
		const field = clazz.getDeclaredField('token');
		field.setAccessible(true);
		field.set(configuration, this.token);
		const plaid = com.plaid.link.Plaid.create(Utils.android.getApplicationContext(), configuration.build());
		Application.android.off(AndroidApplication.activityResultEvent, this._resultHandler);
		Application.android.on(AndroidApplication.activityResultEvent, this._resultHandler);
		plaid.open(Application.android.foregroundActivity || Application.android.startActivity);
	}

	private static toAccountTypeSubType(subType: com.plaid.link.result.LinkAccountSubtype): { type: PlaidLinkResultAccountType; subtype: PlaidLinkResultAccountSubType } {
		const accountType = subType.getAccountType().getJson();
		const accountSubType = subType.getJson();
		return {
			type: accountType as PlaidLinkResultAccountType,
			subtype: (accountSubType as PlaidLinkResultAccountSubType) || accountSubType,
		};
	}

	private readonly _resultHandler: any;

	private _resultHandlerFN(args: AndroidActivityResultEventData) {
		const ref = new WeakRef<PlaidLink>(this);
		const handler = new com.plaid.link.result.LinkResultHandler(
			new kotlin.jvm.functions.Function1({
				invoke(linkSuccess) {
					const owner = ref.get();
					if (owner && typeof owner.onSuccess === 'function') {
						const publicToken = linkSuccess.getPublicToken();
						const metadata = linkSuccess.getMetadata();
						const institution = metadata.getInstitution();
						const accounts = metadata.getAccounts();
						const length = accounts.size();
						const metaAccounts: PlaidLinkResultAccount[] = [];
						for (let i = 0; i < length; i++) {
							const account: com.plaid.link.result.LinkAccount = accounts.get(i);
							const type = PlaidLink.toAccountTypeSubType(account.getSubtype());
							const status = account.getVerificationStatus();
							let verificationStatus = PlaidLinkResultVerificationStatus.Unknown;
							if (status) {
								verificationStatus = (status.getJson() as PlaidLinkResultVerificationStatus) || PlaidLinkResultVerificationStatus.Unknown;
							}
							metaAccounts.push({
								id: account.getId(),
								mask: account.getMask(),
								name: account.getName(),
								type: type.type,
								subtype: type.subtype,
								verificationStatus,
							});
						}
						owner.onSuccess(<PlaidLinkSuccessResult>{
							publicToken,
							metadata: {
								accounts: metaAccounts,
								institution: {
									id: institution.getId(),
									name: institution.getName(),
								},
								linkSessionId: metadata.getLinkSessionId(),
								metadataJson: metadata.getMetadataJson(),
							},
						});
					}
				},
			}),
			new kotlin.jvm.functions.Function1({
				invoke(linkExit) {
					const owner = ref.get();
					if (owner && typeof owner.onExit === 'function') {
						const exit = <PlaidLinkExitResult>{
							error: {},
							metadata: {},
						};
						const error: com.plaid.link.result.LinkError = linkExit.getError();
						if (error) {
							const code = error.getErrorCode();
							exit.error.type = error.getErrorJson();
							exit.error.code = code ? code.getJson() : '';
							exit.error.message = error.getErrorMessage();
							exit.error.displayMessage = error.getDisplayMessage();
						}

						const metadata: com.plaid.link.result.LinkExitMetadata = linkExit.getMetadata();
						if (metadata) {
							const institution = metadata.getInstitution();
							if (institution) {
								exit.metadata.institution.id = institution.getId();
								exit.metadata.institution.name = institution.getName();
							}
							exit.metadata.linkSessionId = metadata.getLinkSessionId();
							exit.metadata.requestId = metadata.getRequestId();
						}
						owner.onExit(exit);
					}
				},
			})
		);
		handler.onActivityResult(args.requestCode, args.resultCode, args.intent);
	}
}

export * from './common';
