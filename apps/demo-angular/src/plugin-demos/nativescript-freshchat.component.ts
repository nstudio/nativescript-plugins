import { Component, NgZone } from '@angular/core';
import { DemoSharedFreshChatSDK } from '@demo/shared';
import { } from '@nstudio/nativescript-freshchat';

@Component({
	selector: 'demo-nativescript-freshchat',
	templateUrl: 'nativescript-freshchat.component.html',
})
export class FreshChatSDKComponent {
  
  demoShared: DemoSharedFreshChatSDK;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFreshChatSDK();
  }

}