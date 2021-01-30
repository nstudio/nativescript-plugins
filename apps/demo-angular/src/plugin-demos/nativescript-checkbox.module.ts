import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativescriptCheckboxComponent } from './nativescript-checkbox.component';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

@NgModule({
	imports: [NativeScriptCommonModule, FormsModule, ReactiveFormsModule, NativeScriptFormsModule, TNSCheckBoxModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptCheckboxComponent }])],
	declarations: [NativescriptCheckboxComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptCheckboxModule {}
