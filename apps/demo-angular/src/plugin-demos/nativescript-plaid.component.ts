import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPlaid } from '@demo/shared';
import {} from '@nstudio/nativescript-plaid';

@Component({
	selector: 'demo-nativescript-plaid',
	templateUrl: 'nativescript-plaid.component.html',
})
export class NativescriptPlaidComponent {
	demoShared: DemoSharedNativescriptPlaid;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptPlaid();
	}
}
