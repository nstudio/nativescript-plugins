import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'nativescript-checkbox', loadChildren: () => import('./plugin-demos/nativescript-checkbox.module').then((m) => m.NativescriptCheckboxModule) },
	{ path: 'nativescript-exoplayer', loadChildren: () => import('./plugin-demos/nativescript-exoplayer.module').then((m) => m.NativescriptExoplayerModule) },
	{ path: 'nativescript-filterable-listpicker', loadChildren: () => import('./plugin-demos/nativescript-filterable-listpicker.module').then((m) => m.NativeScriptFilterableListpickerModule) },
	{ path: 'nativescript-input-mask', loadChildren: () => import('./plugin-demos/nativescript-input-mask.module').then((m) => m.NativescriptInputMaskModule) },
	{ path: 'nativescript-loading-indicator', loadChildren: () => import('./plugin-demos/nativescript-loading-indicator.module').then((m) => m.NativescriptLoadingIndicatorModule) },
	{ path: 'nativescript-onfido', loadChildren: () => import('./plugin-demos/nativescript-onfido.module').then((m) => m.NativeScriptOnfidoModule) },
	{ path: 'nativescript-plaid', loadChildren: () => import('./plugin-demos/nativescript-plaid.module').then((m) => m.NativescriptPlaidModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
