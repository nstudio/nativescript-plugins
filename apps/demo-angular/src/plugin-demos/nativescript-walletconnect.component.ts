import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptWalletconnect } from '@demo/shared';
import { } from '@nstudio/nativescript-walletconnect';

@Component({
	selector: 'demo-nativescript-walletconnect',
	templateUrl: 'nativescript-walletconnect.component.html',
})
export class NativescriptWalletconnectComponent {
  
  demoShared: DemoSharedNativescriptWalletconnect;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptWalletconnect();
  }

}