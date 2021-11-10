import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptQrComponent } from './nativescript-qr.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptQrComponent }])],
  declarations: [NativescriptQrComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptQrModule {}
