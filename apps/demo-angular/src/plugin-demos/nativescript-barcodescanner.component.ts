import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptBarcodescanner } from '@demo/shared';
import { } from '@nstudio/nativescript-barcodescanner';

@Component({
	selector: 'demo-nativescript-barcodescanner',
	templateUrl: 'nativescript-barcodescanner.component.html',
})
export class NativescriptBarcodescannerComponent {
  
  demoShared: DemoSharedNativescriptBarcodescanner;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptBarcodescanner();
  }

}