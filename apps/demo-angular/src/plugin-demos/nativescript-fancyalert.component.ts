import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFancyalert } from '@demo/shared';
import {} from '@nstudio/nativescript-fancyalert';

@Component({
	selector: 'demo-nativescript-fancyalert',
	templateUrl: 'nativescript-fancyalert.component.html',
})
export class NativescriptFancyalertComponent {
	demoShared: DemoSharedNativescriptFancyalert;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptFancyalert();
	}
}
