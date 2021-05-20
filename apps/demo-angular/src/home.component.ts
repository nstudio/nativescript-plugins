import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'nativescript-camera-plus',
		},
		{
			name: 'nativescript-checkbox',
		},
		{
			name: 'nativescript-dynatrace',
		},
		{
			name: 'nativescript-exoplayer',
		},
		{
			name: 'nativescript-fancyalert',
		},
		{
			name: 'nativescript-filterable-listpicker',
		},
		{
			name: 'nativescript-input-mask',
		},
		{
			name: 'nativescript-onfido',
		},
		{
			name: 'nativescript-plaid',
		},
		{
			name: 'nativescript-tracking-transparency',
		},
	];
}
