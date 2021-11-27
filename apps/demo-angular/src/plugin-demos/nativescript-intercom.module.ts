import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptIntercomComponent } from './nativescript-intercom.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptIntercomComponent }])],
  declarations: [NativescriptIntercomComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptIntercomModule {}
