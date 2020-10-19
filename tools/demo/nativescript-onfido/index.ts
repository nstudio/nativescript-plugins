import { DemoSharedBase } from '../utils';
import { Onfido } from '@nstudio/nativescript-onfido';
import { iOSNativeHelper } from '@nativescript/core/utils'

export class DemoSharedOnfido extends DemoSharedBase {

	public applicant: any;
	public sdkToken: string;
	public results: Array<any>;
	public stringResults: Array<string>;

	createApplicant() {
		Onfido.init('api_sandbox.TlnUCxxjM3B.USz2M3G4BaGEWVetbryGRwulvK2JmqGd', 'org.nativescript.plugindemo');
		Onfido.createApplicant('Dave', 'Coffin').catch(error => {
			alert(error);
		}).then(result => {
			console.log(result.id);
			this.set('applicant', result)
		})
	}

	getSdkToken() {
		Onfido.getSdkToken().catch(error => {
			alert(error);
		}).then(result => {
			this.set('sdkToken', result)
			// this.set('applicant', result)
		})
	}

	startFlow() {
		Onfido.verify(false, {
			showWelcome: true,
			faceVerify: true,
			documentVerify: 'driving_license',
			country: 'us'
		}).then((result: any) => {
			console.log('GOT RESULT');
			console.log(result);
			this.set('results', result)
			let stringResults = [];
			result.forEach(item => {
				stringResults.push(JSON.stringify(item));
			})
			this.set('stringResults', stringResults);
			// console.log(typeof result);
			// console.log(result);
			// console.log(result.result)
			// console.log(result.type)
			// console.log(result.forEach);

			// for (var i in result) {
			// 	console.log(i);
			// 	console.log(result[i]);
			// 	console.log(typeof result[i])
			// }
		}).catch(error => {
			console.log('error', error)
		});
	}
}
