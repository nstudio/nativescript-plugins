import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptPersona } from '@demo/shared';
import { } from '@nstudio/nativescript-persona';

@Component({
	selector: 'demo-nativescript-persona',
	templateUrl: 'nativescript-persona.component.html',
})
export class NativescriptPersonaComponent {
  
  demoShared: DemoSharedNativescriptPersona;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptPersona();
  }

}