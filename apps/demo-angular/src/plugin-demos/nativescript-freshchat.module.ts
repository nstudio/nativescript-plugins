import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFreshchatComponent } from './nativescript-freshchat.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFreshchatComponent }])],
  declarations: [NativescriptFreshchatComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptFreshchatModule {}
