import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DemoSharedNativescriptInputMask } from '@demo/shared';

@Component({
	selector: 'demo-nativescript-input-mask',
	templateUrl: 'nativescript-input-mask.component.html',
})
export class NativescriptInputMaskComponent {
	demoShared: DemoSharedNativescriptInputMask;
	form: FormGroup;
	text = '';
	extractedValue = '';
	complete = false;
	mask: string;
	americanExpressMask = '[0000] [000000] [00000]';
	defaultMask = '[0000] [0000] [0000] [0000]';

	constructor(private formBuilder: FormBuilder) {
		this.demoShared = new DemoSharedNativescriptInputMask();
		this.mask = this.defaultMask;
		this.form = this.formBuilder.group({
			// also works with text stripped of formatting '5555551234'
			phone: ['(555) 555-1234', [], []],
		});
	}

	onTextChange(args) {
		this.text = args.value;
	}

	onExtractedValueChange(args) {
		this.extractedValue = args.value;
		const isAmex = ['34', '37'].includes(this.extractedValue.substr(0, 2));
		if (isAmex && this.mask !== this.americanExpressMask) {
			setTimeout(() => (this.mask = this.americanExpressMask), 0);
		} else if (!isAmex && this.mask !== this.defaultMask) {
			setTimeout(() => (this.mask = this.defaultMask), 0);
		}
	}

	onCompleteChange(args) {
		this.complete = args.value;
	}
}
