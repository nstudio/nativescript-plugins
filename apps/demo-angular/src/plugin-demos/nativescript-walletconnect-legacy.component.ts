import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptWalletconnectLegacy } from '@demo/shared';
import {} from '@nstudio/nativescript-walletconnect-legacy';

@Component({
	selector: 'demo-nativescript-walletconnect-legacy',
	templateUrl: 'nativescript-walletconnect-legacy.component.html',
})
export class NativescriptWalletconnectLegacyComponent {
	demoShared: DemoSharedNativescriptWalletconnectLegacy;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptWalletconnectLegacy();
	}
}
