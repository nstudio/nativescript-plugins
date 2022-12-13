import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { FreshChatSDKComponent } from './nativescript-freshchat.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: FreshChatSDKComponent }])],
  declarations: [FreshChatSDKComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class FreshChatSDKModule {}
