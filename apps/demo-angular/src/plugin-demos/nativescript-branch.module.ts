import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptBranchComponent } from './nativescript-branch.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptBranchComponent }])],
	declarations: [NativescriptBranchComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptBranchModule {}
