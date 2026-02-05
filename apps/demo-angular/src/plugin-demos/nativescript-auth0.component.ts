import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAuth0 } from '@demo/shared';
import {} from '@nstudio/nativescript-auth0';

@Component({
	selector: 'demo-nativescript-auth0',
	templateUrl: 'nativescript-auth0.component.html',
})
export class NativescriptAuth0Component {
	demoShared: DemoSharedNativescriptAuth0;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptAuth0();
	}
}
