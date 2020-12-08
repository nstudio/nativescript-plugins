import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptWaveformComponent } from './nativescript-waveform.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptWaveformComponent }])],
	declarations: [NativescriptWaveformComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptWaveformModule {}
