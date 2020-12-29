import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { CameraPlus } from '@nstudio/nativescript-camera-plus';

@NgModule()
export class NativeScriptNativescriptCameraPlusModule {}

// Uncomment this line if the package provides a custom view component
registerElement('CameraPlus', () => CameraPlus);
