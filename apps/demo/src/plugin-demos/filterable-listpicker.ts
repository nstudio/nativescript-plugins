import { Observable, EventData, Page, ObservableArray, Http } from '@nativescript/core';
import { DemoSharedFilterableListpicker } from '@demo/shared';
import { FilterableListpicker } from '@nstudio/nativescript-filterable-listpicker';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	
	page.bindingContext = new DemoModel(page);
}
let API_KEY = "__YOUR_GOOGLE_API_KEY__";
let placesApiUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json'
let placesDetailsApiUrl = 'https://maps.googleapis.com/maps/api/place/details/json'

export class DemoModel extends DemoSharedFilterableListpicker {

	private filterableListpicker: FilterableListpicker;
	private page: Page;
	public items: Array<any>;
	constructor(page: Page) {
			super();
			this.page = page;
			this.filterableListpicker = (<any>this.page.getViewById('myfilter'));
	}
	public showPicker() {
		console.log('this.items', this.items);
		let arr = [];
		this.languages.forEach(item => {
			arr.push(item);
		})
		this.set('items', arr);
		this.filterableListpicker.show()
	}

	public showFancyPicker() {
		let arr = [];
		this.objArray.forEach(item => {
			arr.push(item);
		})

		this.set('items', arr);
		this.filterableListpicker.show()
	}

	showAutocompletePicker() {
		this.filterableListpicker.isAutocomplete = true;
		this.filterableListpicker.show();


		this.filterableListpicker.autocomplete((data) => {
			console.log(data.value)
			let url = `${placesApiUrl}?input=${data.value}&language=fr_FR&key=${API_KEY}`;
			Http.getJSON<Predictions>(url).then((res) => {
					//console.dir(res)
				const airportsCollection = res.predictions;
				const items = [];
				for (let i = 0; i < airportsCollection.length; i++) {
					items.push({
						title: airportsCollection[i].description,
						description: "",
						source: airportsCollection[i]
					});
				}
				this.set("items", items)
			}).catch((err) => {
				const message = 'Error fetching remote data from ' + url + ': ' + err.message;
				console.log(message);
				alert(message);
			});
		});
	}

	itemTapped(args) {
		console.log(args.selectedItem);
		this.set('selection', args.selectedItem);
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
	main_text_matched_substrings: MatchedSubstring[],
	secondary_text: string;
}

export interface itemsType {
	locality: string;
	political: string[],
	geocode: string;
}

export interface MatchedSubstring {
	length: number;
	offset: number;
}