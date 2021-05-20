import { Component, NgZone } from '@angular/core';
import { DemoSharedDynatrace } from '@demo/shared';
import {} from '@nstudio/nativescript-dynatrace';

@Component({
	selector: 'demo-nativescript-dynatrace',
	templateUrl: 'nativescript-dynatrace.component.html',
})
export class DynatraceComponent {
	demoShared: DemoSharedDynatrace;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedDynatrace();
	}
}
