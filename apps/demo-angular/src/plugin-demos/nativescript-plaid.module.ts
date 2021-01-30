import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPlaidComponent } from './nativescript-plaid.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPlaidComponent }])],
	declarations: [NativescriptPlaidComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPlaidModule {}
