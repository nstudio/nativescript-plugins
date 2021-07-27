import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptOnfido } from '@demo/shared';

@Component({
	selector: 'demo-onfido',
	templateUrl: 'nativescript-onfido.component.html',
})
export class OnfidoComponent {
	demoShared: DemoSharedNativescriptOnfido;
	applicant: any;
	sdkToken: any;
	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptOnfido();
	}

	createApplicant() {
		this.demoShared.createApplicant().then(result => {
			this.applicant = result;
		})
	}

	getSdkToken() {
		this.demoShared.getSdkToken().then(result => {
			this.sdkToken = result;
		})
	}

	start() {
		this.demoShared.startFlow().then(value => {
			console.log(value);
		})
	}
}
