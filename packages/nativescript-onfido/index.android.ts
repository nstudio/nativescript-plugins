import { OnfidoCaptureType, OnfidoCommon, OnfidoConfig, OnfidoResult } from './common';
import { Application, Utils, AndroidActivityResultEventData, AndroidApplication } from '@nativescript/core';

export class Onfido extends OnfidoCommon {
	private static _client;
	private static get client() {
		if (!Onfido._client) {
			Onfido._client = com.onfido.android.sdk.capture.OnfidoFactory.create(Utils.ad.getApplicationContext()).getClient();
		}
		return Onfido._client;
	}

	private static _resolve: any;
	private static _reject: any;

	private static findCountryCodeByAlpha3(countryCodeString) {
		let countryCode = null;
		const values = com.onfido.android.sdk.capture.utils.CountryCode.values();
		if (countryCodeString && countryCodeString.length === 3) {
			// translate to android country code enums
			// for now strip to 2 chars however need better country code handling here
			countryCodeString = countryCodeString.substring(0,2);
		}
		for (let i = 0; i < values.length; i++) {
			const cc = values[i];
			let alpha3;
			if (cc.getAlpha3) {
				alpha3 = cc.getAlpha3();
			}
			if (cc.getAlpha3$onfido_capture_sdk_core_release) {
				alpha3 = cc.getAlpha3$onfido_capture_sdk_core_release();
			}
			if (!alpha3) {
				// try with display name
				if (cc.getDisplayName) {
					alpha3 = cc.getDisplayName();
				}
				if (cc.getDisplayName$onfido_capture_sdk_core_release) {
					alpha3 = cc.getDisplayName$onfido_capture_sdk_core_release();
				}
			}
			if (alpha3 === countryCodeString) {
				countryCode = cc;
				break;
			}
		}
		return countryCode;
	}

	private static resultListener(args: AndroidActivityResultEventData) {
		Onfido.client.handleActivityResult(
			args.resultCode,
			args.intent,
			new com.onfido.android.sdk.capture.Onfido.OnfidoResultListener({
				userCompleted(captures) {
					const response: OnfidoResult = {};
					if (captures.getDocument() != null) {
						const front = captures.getDocument().getFront();
						const back = captures.getDocument().getBack();
						if (front != null) {
							response.front = {
								id: front.getId(),
							};
						}
						if (back != null) {
							response.back = {
								id: back.getId(),
							};
						}
					}
					if (captures.getFace() != null) {
						const face = captures.getFace();
						response.face = {
							id: face.getId(),
						};
						if (captures.getFace().getVariant() != null) {
							response.face.variant = face.getVariant().toString();
						}
					}

					Onfido._resolve(response);
				},
				userExited(exitCode) {
					if (Onfido._reject) {
						Onfido._reject(Onfido._buildErrorMessage('User exited by pressing the back button.', 'cancel'));
					}
				},
				onError(e) {
					if (this._reject) {
						this._reject(Onfido._buildErrorMessage('error', e.getMessage()));
					}
				},
			})
		);
	}

	public static start(config: OnfidoConfig) {
		const checkConfig = this._checkConfig(config);
		if (checkConfig) {
			return checkConfig;
		}
		return new Promise((resolve, reject) => {
			const steps = [];
			// work around for getting WELCOME & FINAL since it seems to be missing
			const defaultFlow = com.onfido.android.sdk.capture.ui.options.FlowStep.getDefaultFlow();
			// steps.push(com.onfido.android.sdk.capture.ui.options.FlowStep.WELCOME);
			if (config.flowSteps.welcome && defaultFlow) {
				steps.push(defaultFlow.get(0));
			}

			if (config.flowSteps.captureDocument) {
				// NOTE: country code not working properly - needs investigation
				// if (config.flowSteps.captureDocument.docType && config.flowSteps.captureDocument.countryCode) {
				// 	let doc;
				// 	try {
				// 		doc = com.onfido.android.sdk.capture.DocumentType.valueOf(config.flowSteps.captureDocument.docType);
				// 	} catch (e) {
				// 		reject(Onfido._buildErrorMessage('Unexpected docType value.', 'error'));
				// 	}
				// 	const countryCodeEnum = this.findCountryCodeByAlpha3(config.flowSteps.captureDocument.countryCode);

				// 	if (countryCodeEnum == null) {
				// 		reject(Onfido._buildErrorMessage('Unexpected countryCode value.', 'error'));
				// 	}
				// 	steps.push(new com.onfido.android.sdk.capture.ui.options.CaptureScreenStep(doc, countryCodeEnum));
				// } else {
					// steps.push(com.onfido.android.sdk.capture.ui.options.FlowStep.CAPTURE_DOCUMENT);
					steps.push(new com.onfido.android.sdk.capture.ui.options.FlowStep(com.onfido.android.sdk.capture.ui.options.FlowAction.valueOf('CAPTURE_DOCUMENT')));
				// }
			}

			if (config.flowSteps.captureFace) {
				if (config.flowSteps.captureFace.type === OnfidoCaptureType.VIDEO) {
					steps.push(com.onfido.android.sdk.capture.ui.camera.face.stepbuilder.FaceCaptureStepBuilder.forVideo().build());
				} else {
					steps.push(com.onfido.android.sdk.capture.ui.camera.face.stepbuilder.FaceCaptureStepBuilder.forPhoto().build());
				}
			}

			//steps.push(com.onfido.android.sdk.capture.ui.options.FlowStep.FINAL);
			if (defaultFlow) {
				const size = defaultFlow.size();
				if (size) {
					steps.push(defaultFlow.get(size - 1));
				}
			}
			try {
				const currentActivity = Application.android.foregroundActivity || Application.android.startActivity;
				const customFlow = Array.create('com.onfido.android.sdk.capture.ui.options.FlowStep', steps.length);
				for (let i = 0; i < steps.length; i++) {
					customFlow[i] = steps[i];
				}
				const onfidoConfig = com.onfido.android.sdk.capture.OnfidoConfig.builder(currentActivity).withSDKToken(config.sdkToken).withCustomFlow(customFlow).build();
				Onfido._resolve = resolve;
				Onfido._reject = reject;
				Application.android.off(AndroidApplication.activityResultEvent, Onfido.resultListener);
				Application.android.on(AndroidApplication.activityResultEvent, Onfido.resultListener);
				Onfido.client.startActivityForResult(currentActivity, 1, onfidoConfig);
			} catch (e) {
				reject(Onfido._buildErrorMessage('Failed to show Onfido page', 'error'));
			}
		});
	}
}

export * from './utils';
export * from './common';
