import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptVlcPlayerComponent } from './nativescript-vlc-player.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptVlcPlayerComponent }])],
	declarations: [NativescriptVlcPlayerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptVlcPlayerModule {}
