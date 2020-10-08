import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptExoplayerComponent } from './nativescript-exoplayer.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptExoplayerComponent }])],
	declarations: [NativescriptExoplayerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptExoplayerModule {}
