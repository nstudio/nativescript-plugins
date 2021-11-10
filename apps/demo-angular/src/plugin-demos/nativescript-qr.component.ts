import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptQr } from '@demo/shared';
import { } from '@nstudio/nativescript-qr';

@Component({
	selector: 'demo-nativescript-qr',
	templateUrl: 'nativescript-qr.component.html',
})
export class NativescriptQrComponent {
  
  demoShared: DemoSharedNativescriptQr;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptQr();
  }

}