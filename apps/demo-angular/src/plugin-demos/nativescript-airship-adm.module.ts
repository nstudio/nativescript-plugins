import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAirshipAdmComponent } from './nativescript-airship-adm.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAirshipAdmComponent }])],
  declarations: [NativescriptAirshipAdmComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptAirshipAdmModule {}
