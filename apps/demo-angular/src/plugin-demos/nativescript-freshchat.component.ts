import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFreshchat } from '@demo/shared';
import { } from '@nstudio/nativescript-freshchat';

@Component({
	selector: 'demo-nativescript-freshchat',
	templateUrl: 'nativescript-freshchat.component.html',
})
export class NativescriptFreshchatComponent {
  
  demoShared: DemoSharedNativescriptFreshchat;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptFreshchat();
  }

}