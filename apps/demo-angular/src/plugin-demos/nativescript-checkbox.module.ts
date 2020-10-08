import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptCheckboxComponent } from './nativescript-checkbox.component';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

@NgModule({
	imports: [NativeScriptCommonModule, TNSCheckBoxModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCheckboxComponent }])],
	declarations: [NativescriptCheckboxComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptCheckboxModule {}
