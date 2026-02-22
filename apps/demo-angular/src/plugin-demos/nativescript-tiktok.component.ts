import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptTiktok } from '@demo/shared';
import {} from '@nstudio/nativescript-tiktok';

@Component({
	selector: 'demo-nativescript-tiktok',
	templateUrl: 'nativescript-tiktok.component.html',
})
export class NativescriptTiktokComponent {
	demoShared: DemoSharedNativescriptTiktok;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptTiktok();
	}
}
