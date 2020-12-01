import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'nativescript-checkbox',
		},
		{
			name: 'nativescript-exoplayer',
		},
		{
			name: 'nativescript-filterable-listpicker',
		},
		{
			name: 'nativescript-input-mask',
		},
		{
			name: 'nativescript-loading-indicator',
		},
		{
			name: 'nativescript-onfido',
		},
		{
			name: 'nativescript-plaid',
		},
	];
}
