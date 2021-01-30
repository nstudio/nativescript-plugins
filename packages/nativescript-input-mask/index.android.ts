import { EventData } from '@nativescript/core';
import { completedProperty, extractedValueProperty, InputMaskBase, maskProperty } from './common';

// @Interfaces(com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener)
export class ValueListener implements com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener {
	owner: WeakRef<InputMask>;

	// Using the @Interfaces decorator and extending java.lang.Object is not working with the ValueListener interface.
	// Causes a runtime error when instantiating inputmask.MaskedTextChangedListener
	static initWithOwner(owner: WeakRef<InputMask>): ValueListener {
		const valueListener = new com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener({
			onTextChanged: function (maskFilled: boolean, extractedValue: string) {
				const owner = this.owner.get() as InputMask;
				if (owner) {
					completedProperty.nativeValueChange(owner, maskFilled);
					extractedValueProperty.nativeValueChange(owner, extractedValue);

					const eventData: EventData = {
						eventName: 'textChangeEvent',
						object: owner,
					};

					owner.notify(eventData);
				}
			},
		});
		(valueListener as any).owner = owner;
		return valueListener as ValueListener;
	}

	textChanged(maskFilled: boolean, extractedValue: string): void {}
}

export class InputMask extends InputMaskBase {
	valueListener: ValueListener;
	maskedTextChangedListener: com.redmadrobot.inputmask.MaskedTextChangedListener;

	constructor() {
		super();
		this.valueListener = ValueListener.initWithOwner(new WeakRef(this));
	}

	initNativeView() {
		super.initNativeView();
	}

	createNativeView() {
		const editText = super.createNativeView() as android.widget.EditText;
		editText.removeTextChangedListener((editText as any).listener);
		return editText;
	}

	[completedProperty.setNative]() {
		// Should not be set manually
	}

	[extractedValueProperty.setNative]() {
		// Should not be set manually
	}

	[extractedValueProperty.getDefault]() {
		return '';
		// Should not be set manually
	}

	[maskProperty.setNative](mask: string): void {
		const editText = this.nativeView;
		if (this.maskedTextChangedListener) {
			editText.removeTextChangedListener(this.maskedTextChangedListener);
		}
		this.maskedTextChangedListener = new com.redmadrobot.inputmask.MaskedTextChangedListener(mask, this.autocorrect, editText, (editText as any).listener, this.valueListener);
		editText.addTextChangedListener(this.maskedTextChangedListener);
		editText.setOnFocusChangeListener(this.maskedTextChangedListener);
		this.maskedTextChangedListener.setText(this.text);
	}

	[maskProperty.getDefault](): string {
		return '';
	}
}
