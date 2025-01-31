import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'nativescript-airship', loadChildren: () => import('./plugin-demos/nativescript-airship.module').then((m) => m.NativescriptAirshipModule) },
	{ path: 'nativescript-airship-adm', loadChildren: () => import('./plugin-demos/nativescript-airship-adm.module').then((m) => m.NativescriptAirshipAdmModule) },
	{ path: 'nativescript-airship-fcm', loadChildren: () => import('./plugin-demos/nativescript-airship-fcm.module').then((m) => m.NativescriptAirshipFcmModule) },
	{ path: 'nativescript-airship-hms', loadChildren: () => import('./plugin-demos/nativescript-airship-hms.module').then((m) => m.NativescriptAirshipHmsModule) },
	{ path: 'nativescript-appcues', loadChildren: () => import('./plugin-demos/nativescript-appcues.module').then((m) => m.NativescriptAppcuesModule) },
	{ path: 'nativescript-aptabase', loadChildren: () => import('./plugin-demos/nativescript-aptabase.module').then((m) => m.NativescriptAptabaseModule) },
	{ path: 'nativescript-barcodescanner', loadChildren: () => import('./plugin-demos/nativescript-barcodescanner.module').then((m) => m.NativescriptBarcodescannerModule) },
	{ path: 'nativescript-blur', loadChildren: () => import('./plugin-demos/nativescript-blur.module').then((m) => m.NativescriptBlurModule) },
	{ path: 'nativescript-camera-plus', loadChildren: () => import('./plugin-demos/nativescript-camera-plus.module').then((m) => m.NativescriptCameraPlusModule) },
	{ path: 'nativescript-cardview', loadChildren: () => import('./plugin-demos/nativescript-cardview.module').then((m) => m.NativescriptCardviewModule) },
	{ path: 'nativescript-carousel', loadChildren: () => import('./plugin-demos/nativescript-carousel.module').then((m) => m.NativescriptCarouselModule) },
	{ path: 'nativescript-checkbox', loadChildren: () => import('./plugin-demos/nativescript-checkbox.module').then((m) => m.NativescriptCheckboxModule) },
	{ path: 'nativescript-dynatrace', loadChildren: () => import('./plugin-demos/nativescript-dynatrace.module').then((m) => m.NativescriptDynatraceModule) },
	{ path: 'nativescript-embrace', loadChildren: () => import('./plugin-demos/nativescript-embrace.module').then((m) => m.NativescriptEmbraceModule) },
	{ path: 'nativescript-exoplayer', loadChildren: () => import('./plugin-demos/nativescript-exoplayer.module').then((m) => m.NativescriptExoplayerModule) },
	{ path: 'nativescript-fancyalert', loadChildren: () => import('./plugin-demos/nativescript-fancyalert.module').then((m) => m.NativescriptFancyalertModule) },
	{ path: 'nativescript-filterable-listpicker', loadChildren: () => import('./plugin-demos/nativescript-filterable-listpicker.module').then((m) => m.NativescriptFilterableListpickerModule) },
	{ path: 'nativescript-freshchat', loadChildren: () => import('./plugin-demos/nativescript-freshchat.module').then((m) => m.NativescriptFreshchatModule) },
	{ path: 'nativescript-input-mask', loadChildren: () => import('./plugin-demos/nativescript-input-mask.module').then((m) => m.NativescriptInputMaskModule) },
	{ path: 'nativescript-intercom', loadChildren: () => import('./plugin-demos/nativescript-intercom.module').then((m) => m.NativescriptIntercomModule) },
	{ path: 'nativescript-loading-indicator', loadChildren: () => import('./plugin-demos/nativescript-loading-indicator.module').then((m) => m.NativescriptLoadingIndicatorModule) },
	{ path: 'nativescript-onfido', loadChildren: () => import('./plugin-demos/nativescript-onfido.module').then((m) => m.NativescriptOnfidoModule) },
	{ path: 'nativescript-persona', loadChildren: () => import('./plugin-demos/nativescript-persona.module').then((m) => m.NativescriptPersonaModule) },
	{ path: 'nativescript-plaid', loadChildren: () => import('./plugin-demos/nativescript-plaid.module').then((m) => m.NativescriptPlaidModule) },
	{ path: 'nativescript-qr', loadChildren: () => import('./plugin-demos/nativescript-qr.module').then((m) => m.NativescriptQrModule) },
	{ path: 'nativescript-tracking-transparency', loadChildren: () => import('./plugin-demos/nativescript-tracking-transparency.module').then((m) => m.NativescriptTrackingTransparencyModule) },
	{ path: 'nativescript-vlc-player', loadChildren: () => import('./plugin-demos/nativescript-vlc-player.module').then((m) => m.NativescriptVlcPlayerModule) },
	{ path: 'nativescript-walletconnect', loadChildren: () => import('./plugin-demos/nativescript-walletconnect.module').then((m) => m.NativescriptWalletconnectModule) },
	{ path: 'nativescript-web-server', loadChildren: () => import('./plugin-demos/nativescript-web-server.module').then((m) => m.NativescriptWebServerModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
