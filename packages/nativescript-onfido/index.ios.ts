import { Frame } from '@nativescript/core';
import { topmost } from '@nativescript/core/ui/frame/frame-common';
import { OnfidoCommon, IOnfidoConfigOptions } from './common';

export class Onfido extends OnfidoCommon {
  static createConfiguration(sdkToken?, options?: IOnfidoConfigOptions) {
    console.log(options)
    let configBuilder = new ONFlowConfigBuilder();
    configBuilder.withSdkToken(sdkToken || this.sdkToken)
    if (!options || options.showWelcome) {
      configBuilder.withWelcomeStep();
    }
    if (options && options.documentVerify && options.documentVerify == 'any') {
      configBuilder.withDocumentStep()
    } else if (options && options.documentVerify) {
      console.log(options.documentVerify)
      const documentVariantBuilder = ONDocumentTypeVariantConfig.builder();
      if (options.documentVerify == 'driving_license') {
        documentVariantBuilder.withDrivingLicenceWithConfig(new DrivingLicenceConfiguration({country: options.country}))
        configBuilder.withDocumentStepOfType(documentVariantBuilder.buildAndReturnError());
      } else if (options.documentVerify == 'national_identity_card') {
        documentVariantBuilder.withNationalIdentityCardWithConfig(new NationalIdentityConfiguration({country: options.country}))
        configBuilder.withDocumentStepOfType(documentVariantBuilder.buildAndReturnError());
      } else if (options.documentVerify == 'passport') {
        documentVariantBuilder.withPassportWithConfig(new PassportConfiguration())
        configBuilder.withDocumentStepOfType(documentVariantBuilder.buildAndReturnError());
      } else if (options.documentVerify == 'residence_permit') {
        documentVariantBuilder.withResidencePermitWithConfig(new ResidencePermitConfiguration({country: options.country}))
        configBuilder.withDocumentStepOfType(documentVariantBuilder.buildAndReturnError());
      } else if (options.documentVerify == 'visa') {
        documentVariantBuilder.withVisaWithConfig(new VisaConfiguration({country: options.country}))
        configBuilder.withDocumentStepOfType(documentVariantBuilder.buildAndReturnError());
      } else if (options.documentVerify == 'work_permit') {
        documentVariantBuilder.withWorkPermitWithConfig(new WorkPermitConfiguration({country: options.country}))
        configBuilder.withDocumentStepOfType(documentVariantBuilder.buildAndReturnError());
      }
    }

    let variantConfigError = null;
    let variantBuilder = ONFaceStepVariantConfig.builder();
    variantBuilder.withPhotoCaptureWithConfig(new PhotoStepConfiguration());
    configBuilder.withFaceStepOfVariant(variantBuilder.buildAndReturnError())
    let config = configBuilder.buildAndReturnError();
    let onfidoFlow = ONFlow.alloc().initWithFlowConfiguration(config);
    let onfidoController: UIViewController = onfidoFlow.runAndReturnError()
    Frame.topmost().ios.controller.presentViewControllerAnimatedCompletion(onfidoController, true, () => {
      console.log('yay');
    })
  }
}