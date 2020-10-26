import { Frame } from '@nativescript/core';
import { topmost } from '@nativescript/core/ui/frame/frame-common';
import { iOSNativeHelper } from '@nativescript/core/utils';
import { OnfidoCommon, IOnfidoConfigOptions } from './common';

export class Onfido extends OnfidoCommon {
  static verify(sdkToken?, options?: IOnfidoConfigOptions) {
    return new Promise((resolve, reject) => {
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
      let onfidoFlow = ONFlow.alloc().initWithFlowConfiguration(config).withResponseHandler((response: ONFlowResponse) => {
        console.log('response.results', response.results)
        console.log('response.userCanceled', response.userCanceled)
        console.log('response.error', response.error)
        if (response.error) {
          let err: NSError = response.error;
          reject(response.error.localizedDescription)
        } else if (response.userCanceled) {
          reject('User canceled.')
        } else {
          const jsArray = iOSNativeHelper.collections.nsArrayToJSArray(response.results);
          let returnResults = [];
          jsArray.forEach((item: any) => {
            if (item.type == 1) {
              // face result
              let result: ONFaceResult = item.result;
              let objResult = {
                fileName: result.fileName,
                fileSize: result.fileSize,
                fileType: result.fileType,
                createdAt: result.createdAt,
                href: result.href,
                id: result.id,
                description: 'FaceResult'
              }
              returnResults.push(objResult)
            } else {
              let result: ONDocumentResult = item.result;
              let objResult = {
                createdAt: result.createdAt,
                fileName: result.fileName,
                fileSize: result.fileSize,
                fileType: result.fileType,
                href: result.href,
                id: result.id,
                side: result.side,
                type: result.type,
                description: 'DocumentResult'
              }
              returnResults.push(objResult)
            }
          })
          resolve(returnResults);
        }
      });
      let onfidoController: UIViewController = onfidoFlow.runAndReturnError()
      let ctrl = Frame.topmost().ios.controller;
      if (options.showFromModal) ctrl = ctrl.presentedViewController;
      ctrl.presentViewControllerAnimatedCompletion(onfidoController, true, () => {

      })
    })
  }
}