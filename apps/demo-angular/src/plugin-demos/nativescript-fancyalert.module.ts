import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFancyalertComponent } from './nativescript-fancyalert.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFancyalertComponent }])],
	declarations: [NativescriptFancyalertComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFancyalertModule {}
