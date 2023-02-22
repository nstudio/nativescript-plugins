import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAzureNotificationhubs } from '@demo/shared';
import { } from '@nstudio/nativescript-azure-notificationhubs';

@Component({
	selector: 'demo-nativescript-azure-notificationhubs',
	templateUrl: 'nativescript-azure-notificationhubs.component.html',
})
export class NativescriptAzureNotificationhubsComponent {
  
  demoShared: DemoSharedNativescriptAzureNotificationhubs;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAzureNotificationhubs();
  }

}