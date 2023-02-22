import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAzureNotificationhubsComponent } from './nativescript-azure-notificationhubs.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAzureNotificationhubsComponent }])],
  declarations: [NativescriptAzureNotificationhubsComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptAzureNotificationhubsModule {}
