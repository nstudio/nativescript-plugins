import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAirshipAdm } from '@demo/shared';
import { } from '@nstudio/nativescript-airship-adm';

@Component({
	selector: 'demo-nativescript-airship-adm',
	templateUrl: 'nativescript-airship-adm.component.html',
})
export class NativescriptAirshipAdmComponent {
  
  demoShared: DemoSharedNativescriptAirshipAdm;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAirshipAdm();
  }

}