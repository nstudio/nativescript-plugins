import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptBranch } from '@demo/shared';
import {} from '@nstudio/nativescript-branch';

@Component({
	selector: 'demo-nativescript-branch',
	templateUrl: 'nativescript-branch.component.html',
})
export class NativescriptBranchComponent {
	demoShared: DemoSharedNativescriptBranch;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptBranch();
	}
}
