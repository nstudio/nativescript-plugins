import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptWebServerComponent } from './nativescript-web-server.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptWebServerComponent }])],
  declarations: [NativescriptWebServerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptWebServerModule {}
