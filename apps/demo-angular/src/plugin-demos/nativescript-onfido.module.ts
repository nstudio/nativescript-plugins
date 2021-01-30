import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { OnfidoComponent } from './nativescript-onfido.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: OnfidoComponent }])],
	declarations: [OnfidoComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOnfidoModule {}
