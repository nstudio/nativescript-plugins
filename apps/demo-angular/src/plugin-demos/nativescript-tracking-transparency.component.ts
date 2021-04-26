import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptTrackingTransparency } from '@demo/shared';
import {} from '@nstudio/nativescript-tracking-transparency';

@Component({
	selector: 'demo-nativescript-tracking-transparency',
	templateUrl: 'nativescript-tracking-transparency.component.html',
})
export class NativescriptTrackingTransparencyComponent {
	demoShared: DemoSharedNativescriptTrackingTransparency;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptTrackingTransparency();
	}
}
