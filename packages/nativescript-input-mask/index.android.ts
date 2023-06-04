import { textProperty } from '@nativescript/core/ui/text-base';
import { completedProperty, maskedValueProperty, InputMaskBase, maskProperty } from './common';

export class InputMask extends InputMaskBase {
	private valueListener: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener;
	private maskedTextChangedListener: com.redmadrobot.inputmask.MaskedTextChangedListener;

	initNativeView() {
		super.initNativeView();

		const owner = new WeakRef<InputMask>(this);

		this.valueListener = new com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener({
			onTextChanged(maskFilled: boolean, extractedValue: string, formattedValue: string): void {
				const owner = this.owner.deref() as InputMask;
				if (owner) {
					completedProperty.nativeValueChange(owner, maskFilled);
					maskedValueProperty.nativeValueChange(owner, formattedValue);
					textProperty.nativeValueChange(owner, extractedValue);
				}
			}
		});
		(this.valueListener as any).owner = owner;

		this.maskedTextChangedListener = new com.redmadrobot.inputmask.MaskedTextChangedListener(this.mask, this.nativeViewProtected);
		this.maskedTextChangedListener.setListener(this.nativeViewProtected.listener);
		this.maskedTextChangedListener.setValueListener(this.valueListener);

		this.nativeViewProtected.removeTextChangedListener(this.nativeViewProtected.listener);
		this.nativeViewProtected.addTextChangedListener(this.maskedTextChangedListener);
	}

	public disposeNativeView(): void {
		super.disposeNativeView();

		this.nativeViewProtected.removeTextChangedListener(this.maskedTextChangedListener);
		
		this.maskedTextChangedListener = null;
		(this.valueListener as any).owner = null;
		this.valueListener = null;
	}

	[completedProperty.setNative]() {
		// Should not be set manually
	}

	[maskedValueProperty.setNative]() {
		// Should not be set manually
	}

	[maskProperty.setNative](value: string) {
		this.maskedTextChangedListener.setPrimaryFormat(value);
		this[textProperty.setNative](this.text);
	}

	[textProperty.setNative](value: string) {
		this.maskedTextChangedListener.setText(value, this.nativeViewProtected, java.lang.Boolean.FALSE);
	}
}
