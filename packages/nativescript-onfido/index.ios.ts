import { Frame } from '@nativescript/core';
import { topmost } from '@nativescript/core/ui/frame/frame-common';
import { OnfidoCommon } from './common';

export class Onfido extends OnfidoCommon {
  static createConfiguration(sdkToken?) {
    console.log('i am in ios')
    let configBuilder = new ONFlowConfigBuilder();
    configBuilder.withSdkToken(sdkToken || this.sdkToken)
    configBuilder.withWelcomeStep();
    configBuilder.withDocumentStep()
    let variantConfigError = null;
    let variantBuilder = ONFaceStepVariantConfig.builder();
    variantBuilder.withPhotoCaptureWithConfig(null);
    configBuilder.withFaceStepOfVariant(variantBuilder.buildAndReturnError())
    let config = configBuilder.buildAndReturnError();
    let onfidoFlow = ONFlow.alloc().initWithFlowConfiguration(config);
    let onfidoController: UIViewController = onfidoFlow.runAndReturnError()
    Frame.topmost().ios.controller.presentViewControllerAnimatedCompletion(onfidoController, true, () => {
      console.log('yay');
    })
    super.createConfiguration()
  }
}
