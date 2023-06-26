import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptWalletconnectLegacyComponent } from './nativescript-walletconnect-legacy.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptWalletconnectLegacyComponent }])],
	declarations: [NativescriptWalletconnectLegacyComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptWalletconnectLegacyModule {}
