import { OnfidoCaptureType, OnfidoCommon, OnfidoConfig, OnfidoCountryCode, OnfidoDocument, OnfidoDocumentType, OnfidoFlowSteps, OnfidoResult } from './common';

export class Onfido extends OnfidoCommon {
	private static _flow;

	private static _createResponse(results: NSArray<ONFlowResult>, variant?: OnfidoCaptureType): OnfidoResult {
		const count = results.count;
		const documents: ONDocumentResult[] = [];
		const faces: ONFaceResult[] = [];
		for (let i = 0; i < count; i++) {
			const result = results.objectAtIndex(i);
			if (result.type === ONFlowResultType.Document) {
				documents.push(result.result);
			}

			if (result.type === ONFlowResultType.Face) {
				faces.push(result.result);
			}
		}
		const front = documents[0];
		const back = documents[documents.length - 1];
		const face = faces[0];
		const response: OnfidoResult = {
			front: {
				id: front.id,
				createdAt: front.createdAt,
				fileName: front.fileName,
				fileSize: front.fileSize,
				fileType: front.fileType,
				href: front.href,
			},
		};

		if (front !== back) {
			response.back = {
				id: back.id,
				createdAt: back.createdAt,
				fileName: back.fileName,
				fileSize: back.fileSize,
				fileType: back.fileType,
				href: back.href,
			};
		}
		if (face) {
			response.face = {
				id: face.id,
				createdAt: face.createdAt,
				fileName: face.fileName,
				fileSize: face.fileSize,
				fileType: face.fileType,
				href: face.href,
			};
			switch (variant) {
				case OnfidoCaptureType.VIDEO:
					response.face.variant = OnfidoCaptureType.VIDEO;
					break;
				case OnfidoCaptureType.PHOTO:
					response.face.variant = OnfidoCaptureType.PHOTO;
					break;
			}
		}
		return response;
	}

	private static get rootViewController(): UIViewController | undefined {
		const keyWindow = UIApplication.sharedApplication.keyWindow;
		return keyWindow != null ? keyWindow.rootViewController : undefined;
	}

	private static get topViewController(): UIViewController | undefined {
		const root = Onfido.rootViewController;
		if (root == null) {
			return undefined;
		}
		return Onfido.findTopViewController(root);
	}

	private static findTopViewController(root: UIViewController): UIViewController | undefined {
		const presented = root.presentedViewController;
		if (presented != null) {
			return Onfido.findTopViewController(presented);
		}
		if (root instanceof UISplitViewController) {
			const last = root.viewControllers.lastObject;
			if (last == null) {
				return root;
			}
			return Onfido.findTopViewController(last);
		} else if (root instanceof UINavigationController) {
			const top = root.topViewController;
			if (top == null) {
				return root;
			}
			return Onfido.findTopViewController(top);
		} else if (root instanceof UITabBarController) {
			const selected = root.selectedViewController;
			if (selected == null) {
				return root;
			}
			return Onfido.findTopViewController(selected);
		} else {
			return root;
		}
	}

	static start(config) {
		const checkConfig = Onfido._checkConfig(config);
		if (checkConfig) {
			return checkConfig;
		}
		return new Promise((resolve, reject) => {
			let builder = ONFlowConfigBuilder.new();
			builder.withSdkToken(config.sdkToken);
			if (config.flowSteps.welcome) {
				builder.withWelcomeStep();
			}
			if (config.flowSteps.captureDocument) {
				if (config.flowSteps.captureDocument.docType && config.flowSteps.captureDocument.countryCode) {
					const documentVariantBuilder = ONDocumentTypeVariantConfig.builder();
					switch (config.flowSteps.captureDocument.docType) {
						case OnfidoDocumentType.DRIVING_LICENCE:
							documentVariantBuilder.withDrivingLicenceWithConfig(DrivingLicenceConfiguration.alloc().initWithCountry(config.flowSteps.captureDocument.countryCode));
							break;
						case OnfidoDocumentType.NATIONAL_IDENTITY_CARD:
							documentVariantBuilder.withNationalIdentityCardWithConfig(NationalIdentityConfiguration.alloc().initWithCountry(config.flowSteps.captureDocument.countryCode));
							break;
						case OnfidoDocumentType.PASSPORT:
							documentVariantBuilder.withPassportWithConfig(PassportConfiguration.new());
							break;
						case OnfidoDocumentType.RESIDENCE_PERMIT:
							documentVariantBuilder.withResidencePermitWithConfig(ResidencePermitConfiguration.alloc().initWithCountry(config.flowSteps.captureDocument.countryCode));
							break;
						case OnfidoDocumentType.WORK_PERMIT:
							documentVariantBuilder.withWorkPermitWithConfig(WorkPermitConfiguration.alloc().initWithCountry(config.flowSteps.captureDocument.countryCode));
							break;
						case OnfidoDocumentType.VISA:
							documentVariantBuilder.withVisaWithConfig(VisaConfiguration.alloc().initWithCountry(config.flowSteps.captureDocument.countryCode));
							break;
						case OnfidoDocumentType.GENERIC:
							documentVariantBuilder.withGenericWithConfig(GenericDocumentConfiguration.new());
							break;
						default:
							break;
					}
					builder.withDocumentStepOfType(documentVariantBuilder.buildAndReturnError());
				} else {
					builder.withDocumentStep();
				}
			}
			if (config.flowSteps.captureFace) {
				const faceStepBuilder = ONFaceStepVariantConfig.builder();
				if (config.flowSteps.captureFace.type) {
					switch (config.flowSteps.captureFace.type) {
						case OnfidoCaptureType.PHOTO:
							faceStepBuilder.withPhotoCaptureWithConfig(PhotoStepConfiguration.new());
							break;
						case OnfidoCaptureType.VIDEO:
							faceStepBuilder.withVideoCaptureWithConfig(VideoStepConfiguration.alloc().initWithShowIntroVideoManualLivenessCapture(true, false));
							break;
						default:
							break;
					}
				} else {
					faceStepBuilder.withPhotoCaptureWithConfig(PhotoStepConfiguration.new());
				}
				builder.withFaceStepOfVariant(faceStepBuilder.buildAndReturnError());
			}

			Onfido._flow = ONFlow.alloc()
				.initWithFlowConfiguration(builder.buildAndReturnError())
				.withResponseHandler((response) => {
					if (response.error) {
						reject(Onfido._buildErrorMessage(response.error.localizedDescription, 'error'));
					} else if (response.userCanceled) {
						reject(Onfido._buildErrorMessage('User exited', 'error'));
					} else if (response.results) {
						resolve(Onfido._createResponse(response.results, config.flowSteps.captureFace.type));
					} else {
						reject(Onfido._buildErrorMessage('Unknown error has occured', 'error'));
					}
				});
			const vc = Onfido._flow.runAndReturnError();
			if (vc) {
				vc.modalPresentationStyle = UIModalPresentationStyle.FullScreen;
			}
			const topCtrl = Onfido.topViewController;
			if (!topCtrl) {
				reject(Onfido._buildErrorMessage('Unable to get current controller', 'error'));
			} else {
				topCtrl.presentViewControllerAnimatedCompletion(vc, true, null);
			}
		});
	}
}

export { OnfidoUtils } from './utils';
export { OnfidoConfig, OnfidoResult, OnfidoCaptureType, OnfidoCountryCode, OnfidoDocument, OnfidoDocumentType, OnfidoFlowSteps };
