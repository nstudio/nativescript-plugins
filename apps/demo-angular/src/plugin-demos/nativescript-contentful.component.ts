import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptContentful } from '@demo/shared';
import {} from '@nstudio/nativescript-contentful';

@Component({
	selector: 'demo-nativescript-contentful',
	templateUrl: 'nativescript-contentful.component.html',
})
export class NativescriptContentfulComponent {
	demoShared: DemoSharedNativescriptContentful;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptContentful();
	}
}
