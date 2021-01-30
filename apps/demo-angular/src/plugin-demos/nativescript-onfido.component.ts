import { Component, NgZone } from '@angular/core';
import { DemoSharedOnfido } from '@demo/shared';

@Component({
	selector: 'demo-onfido',
	templateUrl: 'nativescript-onfido.component.html',
})
export class OnfidoComponent {
	demoShared: DemoSharedOnfido;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedOnfido();
	}
}
