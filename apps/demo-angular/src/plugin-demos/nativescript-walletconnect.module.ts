import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptWalletconnectComponent } from './nativescript-walletconnect.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptWalletconnectComponent }])],
  declarations: [NativescriptWalletconnectComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptWalletconnectModule {}
