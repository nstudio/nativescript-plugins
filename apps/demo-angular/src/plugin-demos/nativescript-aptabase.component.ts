import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptAptabase } from '@demo/shared';
import { } from '@nstudio/nativescript-aptabase';

@Component({
	selector: 'demo-nativescript-aptabase',
	templateUrl: 'nativescript-aptabase.component.html',
})
export class NativescriptAptabaseComponent {
  
  demoShared: DemoSharedNativescriptAptabase;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAptabase();
  }

}