import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptWebServer } from '@demo/shared';
import { } from '@nstudio/nativescript-web-server';

@Component({
	selector: 'demo-nativescript-web-server',
	templateUrl: 'nativescript-web-server.component.html',
})
export class NativescriptWebServerComponent {
  
  demoShared: DemoSharedNativescriptWebServer;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptWebServer();
  }

}