import { Onfido, OnfidoCaptureType, OnfidoCountryCode, OnfidoDocumentType, OnfidoResult, OnfidoUtils } from '@nstudio/nativescript-onfido';
import { DemoSharedBase } from '../utils';

export class DemoSharedNativescriptOnfido extends DemoSharedBase {
	public applicant: any;
	public sdkToken: string;
	public results: OnfidoResult;

	testIt() {
		console.log('testing onfido');
	}

	createApplicant() {
		return new Promise((resolve, reject) => {
			OnfidoUtils.init('api_sandbox.TlnUCxxjM3B.USz2M3G4BaGEWVetbryGRwulvK2JmqGd', 'org.nativescript.plugindemo');
			OnfidoUtils.createApplicant('Dave', 'Coffin')
				.catch((error) => {
					reject(error);
					alert(error);
				})
				.then((result) => {
					console.log(result.id);
					this.set('applicant', result);
					resolve(result);
				});
		})
	}

	getSdkToken() {
		return new Promise((resolve, reject) => {
			OnfidoUtils.getSdkToken()
				.catch((error) => {
					reject(error)
					alert(error);
				})
				.then((result) => {
					this.set('sdkToken', result);
					resolve(result);
					// this.set('applicant', result)
				});
		})
	}

	startFlow() {
		return new Promise((resolve, reject) => {
			Onfido.debugMode = true;
			console.log('customLocalization!')
			Onfido.start({
				sdkToken: this.sdkToken,
				flowSteps: {
					welcome: true,
					customLocalization: true,
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
					resolve(value);
				})
				.catch((error) => {
					console.log('error', error);
					reject(error)
				});
		})
	}
}
