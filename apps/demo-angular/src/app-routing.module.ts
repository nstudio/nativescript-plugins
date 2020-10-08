import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'filterable-listpicker', loadChildren: () => import('./plugin-demos/filterable-listpicker.module').then((m) => m.FilterableListpickerModule) },
	{ path: 'nativescript-exoplayer', loadChildren: () => import('./plugin-demos/nativescript-exoplayer.module').then((m) => m.NativescriptExoplayerModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
