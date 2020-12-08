import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'nativescript-checkbox', loadChildren: () => import('./plugin-demos/nativescript-checkbox.module').then((m) => m.NativescriptCheckboxModule) },
	{ path: 'nativescript-exoplayer', loadChildren: () => import('./plugin-demos/nativescript-exoplayer.module').then((m) => m.NativescriptExoplayerModule) },
	{ path: 'nativescript-filterable-listpicker', loadChildren: () => import('./plugin-demos/nativescript-filterable-listpicker.module').then((m) => m.NativescriptFilterableListpickerModule) },
	{ path: 'nativescript-input-mask', loadChildren: () => import('./plugin-demos/nativescript-input-mask.module').then((m) => m.NativescriptInputMaskModule) },
	{ path: 'nativescript-onfido', loadChildren: () => import('./plugin-demos/nativescript-onfido.module').then((m) => m.NativescriptOnfidoModule) },
	{ path: 'nativescript-plaid', loadChildren: () => import('./plugin-demos/nativescript-plaid.module').then((m) => m.NativescriptPlaidModule) },
	{ path: 'nativescript-waveform', loadChildren: () => import('./plugin-demos/nativescript-waveform.module').then((m) => m.NativescriptWaveformModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
