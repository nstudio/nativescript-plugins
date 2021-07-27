import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptFilterableListpicker } from '@demo/shared';
import { registerElement } from '@nativescript/angular';
import { Http } from '@nativescript/core';
import { FilterableListpicker } from '@nstudio/nativescript-filterable-listpicker';

registerElement('FilterableListpicker', () => FilterableListpicker);

let API_KEY = '__YOUR_GOOGLE_API_KEY__';

const placesApiUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
const placesDetailsApiUrl = 'https://maps.googleapis.com/maps/api/place/details/json';

@Component({
	selector: 'demo-filterable-listpicker',
	templateUrl: 'nativescript-filterable-listpicker.component.html',
})
export class FilterableListpickerComponent {
	demoShared: DemoSharedNativescriptFilterableListpicker;

	public items: Array<any>;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptFilterableListpicker();
		this.items = this.demoShared.languages;
	}

	private _picker: FilterableListpicker;
	pickerLoaded(args) {
		console.log(args.object);
		this._picker = args.object;
	}

	pick() {
		this._picker.show();
	}

	cancelFilterableList(args) {
		console.log('canceled');
	}

	showPicker() {
		this.items = this.demoShared.languages;
		this._picker.isAutocomplete = false;
		this._picker.show();
	}

	showFancyPicker() {
		this.items = this.demoShared.objArray;
		this._picker.isAutocomplete = false;
		this._picker.show();
	}

	showAutocompletePicker() {
		this._picker.isAutocomplete = true;
		this.items = [];
		this._picker.show();

		this._picker.autocomplete((data) => {
			console.log(data.value);
			let url = `${placesApiUrl}?input=${data.value}&language=fr_FR&key=${API_KEY}`;
			Http.getJSON<Predictions>(url)
				.then((res) => {
					//console.dir(res)
					const airportsCollection = res.predictions;
					const items = [];
					for (let i = 0; i < airportsCollection.length; i++) {
						items.push({
							title: airportsCollection[i].description,
							description: '',
							source: airportsCollection[i],
						});
					}
					this.items = items;
				})
				.catch((err) => {
					const message = 'Error fetching remote data from ' + url + ': ' + err.message;
					console.log(message);
					alert(message);
				});
		});
	}

	itemSelected(args) {
		console.log(args);
		this.demoShared.selection = args.selectedItem;
	}
}

export interface Predictions {
	predictions: PredictionsItems[];
}

export interface PredictionsItems {
	id: string;
	description: string;
	place_id: string;
	reference: string;
	structured_formatting: StructuredFormattingItems[];
	types: itemsType[];
	matched_substrings: MatchedSubstring;
}

export interface StructuredFormattingItems {
	main_text: string;
	main_text_matched_substrings: MatchedSubstring[];
	secondary_text: string;
}

export interface itemsType {
	locality: string;
	political: string[];
	geocode: string;
}

export interface MatchedSubstring {
	length: number;
	offset: number;
}
