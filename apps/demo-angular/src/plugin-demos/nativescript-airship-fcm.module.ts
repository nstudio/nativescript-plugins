import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAirshipFcmComponent } from './nativescript-airship-fcm.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAirshipFcmComponent }])],
  declarations: [NativescriptAirshipFcmComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptAirshipFcmModule {}
