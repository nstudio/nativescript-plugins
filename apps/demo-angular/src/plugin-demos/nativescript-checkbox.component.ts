import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoSharedNativescriptCheckbox } from '@demo/shared';
import {} from '@nstudio/nativescript-checkbox';

export class RadioOption {
	text: string;
	selected: boolean = false;

	constructor(text: string) {
		this.text = text;
	}
}

@Component({
	selector: 'demo-nativescript-checkbox',
	templateUrl: 'nativescript-checkbox.component.html',
	styles: [
		`
			.checkbox {
				font-size: 30;
			}
		`,
	],
})
export class NativescriptCheckboxComponent {
	demoShared: DemoSharedNativescriptCheckbox;
	formGroup: FormGroup;
	checkTest: boolean;
	radioOptions?: Array<RadioOption>;

	constructor(private _ngZone: NgZone, private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.formGroup = this.formBuilder.group({
			testCheck: [
				{
					value: true,
					disabled: false,
				},
				[Validators.required],
			],
		});

		// Plain ol' inline Array definition coming up :)
		this.radioOptions = [new RadioOption('Radio option 1'), new RadioOption('Radio option 2'), new RadioOption('Radio option 3')];
	}

	public checkedChange(modelRef) {
		console.log('checkedChange:', modelRef.checked);
	}

	public submit() {
		console.log('NgModel value:', this.checkTest);
		console.log('Reactive FormGroup value:', this.formGroup.get('testCheck').value);
	}

	changeCheckedRadio(radioOption: RadioOption): void {
		radioOption.selected = !radioOption.selected;

		if (!radioOption.selected) {
			return;
		}

		// uncheck all other options
		this.radioOptions.forEach((option) => {
			if (option.text !== radioOption.text) {
				option.selected = false;
			}
		});
	}
}
