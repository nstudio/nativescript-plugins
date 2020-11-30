import { Onfido, OnfidoCaptureType, OnfidoCountryCode, OnfidoDocumentType, OnfidoResult, OnfidoUtils } from '@nstudio/nativescript-onfido';
import { DemoSharedBase } from '../utils';

export class DemoSharedOnfido extends DemoSharedBase {
	public applicant: any;
	public sdkToken: string;
	public results: OnfidoResult;

	testIt() {
		console.log('testing onfido');
	}

	createApplicant() {
		OnfidoUtils.init('api_sandbox.TlnUCxxjM3B.USz2M3G4BaGEWVetbryGRwulvK2JmqGd', 'org.nativescript.plugindemo');
		OnfidoUtils.createApplicant('Dave', 'Coffin')
			.catch((error) => {
				alert(error);
			})
			.then((result) => {
				console.log(result.id);
				this.set('applicant', result);
			});
	}

	getSdkToken() {
		OnfidoUtils.getSdkToken()
			.catch((error) => {
				alert(error);
			})
			.then((result) => {
				this.set('sdkToken', result);
				// this.set('applicant', result)
			});
	}

	startFlow() {
		Onfido.debugMode = true;
		Onfido.start({
			sdkToken: this.sdkToken,
			flowSteps: {
				welcome: false,
				captureDocument: {
					docType: OnfidoDocumentType.DRIVING_LICENCE,
					countryCode: OnfidoCountryCode.USA,
				},
				captureFace: {
					type: OnfidoCaptureType.PHOTO,
				},
			},
		})
			.then((value) => {
				console.log('GOT RESULT');
				console.log(value);
				this.set('result', value);
			})
			.catch((error) => {
				console.log('error', error);
			});
	}
}
