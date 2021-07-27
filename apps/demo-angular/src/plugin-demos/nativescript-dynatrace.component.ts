import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptDynatrace } from '@demo/shared';
import {} from '@nstudio/nativescript-dynatrace';

@Component({
	selector: 'demo-nativescript-dynatrace',
	templateUrl: 'nativescript-dynatrace.component.html',
})
export class DynatraceComponent {
	demoShared: DemoSharedNativescriptDynatrace;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptDynatrace();
	}
}
