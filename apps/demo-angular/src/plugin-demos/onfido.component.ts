import { Component, NgZone } from '@angular/core';
import { DemoSharedOnfido } from '@demo/shared';
import {} from '@nstudio/onfido';

@Component({
	selector: 'demo-onfido',
	templateUrl: 'onfido.component.html',
})
export class OnfidoComponent {
	demoShared: DemoSharedOnfido;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedOnfido();
	}
}
