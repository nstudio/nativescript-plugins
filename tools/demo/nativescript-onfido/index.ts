import { DemoSharedBase } from '../utils';
import { Onfido } from '@nstudio/nativescript-onfido';

export class DemoSharedOnfido extends DemoSharedBase {

	public applicant: any;
	public sdkToken: string;

	createApplicant() {
		Onfido.init('api_sandbox.TlnUCxxjM3B.USz2M3G4BaGEWVetbryGRwulvK2JmqGd', 'foo');
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
		Onfido.createConfiguration(false, {
			showWelcome: true,
			faceVerify: true
		});
	}
}
