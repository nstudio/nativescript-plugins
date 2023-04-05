import { EventData, TextField } from '@nativescript/core';
import { textProperty } from '@nativescript/core/ui/text-base';
import { completedProperty, maskedValueProperty, InputMaskBase, maskProperty } from './common';

@NativeClass
class MaskedUITextFieldDelegateListener extends NSObject implements MaskedTextFieldDelegateListener {
	public static ObjCProtocols = [MaskedTextFieldDelegateListener];

	/**
	 * Set type to any as core does not expose typings for needed methods.
	 */
	private _owner: WeakRef<any>;

	public static initWithOwner(owner: WeakRef<TextField>): MaskedUITextFieldDelegateListener {
		const delegate = <MaskedUITextFieldDelegateListener>MaskedUITextFieldDelegateListener.new();
		delegate._owner = owner;

		return delegate;
	}

	public textFieldShouldBeginEditing(textField: UITextField): boolean {
		const owner = this._owner?.deref();
		if (owner) {
			return owner.textFieldShouldBeginEditing(textField);
		}

		return true;
	}

	public textFieldDidBeginEditing(textField: UITextField): void {
		const owner = this._owner?.deref();
		if (owner) {
			owner.textFieldDidBeginEditing(textField);
		}
	}

	public textFieldDidEndEditing(textField: UITextField) {
		const owner = this._owner?.deref();
		if (owner) {
			owner.textFieldDidEndEditing(textField);
		}
	}

	public textFieldShouldClear(textField: UITextField) {
		const owner = this._owner?.deref();
		if (owner) {
			return owner.textFieldShouldClear(textField);
		}

		return true;
	}

	public textFieldShouldReturn(textField: UITextField): boolean {
		// Called when the user presses the return button.
		const owner = this._owner?.deref();
		if (owner) {
			return owner.textFieldShouldReturn(textField);
		}

		return true;
	}
}

function onMaskedTextChanged(nativeView: UITextField, value: string, complete: boolean) {
	const owner = this.deref();
	if (owner) {
		completedProperty.nativeValueChange(owner, complete);
		if (nativeView) {
			maskedValueProperty.nativeValueChange(owner, nativeView.text);
		}
		textProperty.nativeValueChange(owner, value);
	}
}

export class InputMask extends InputMaskBase {
	private _delegate: MaskedTextFieldDelegate;
	private _listener: MaskedUITextFieldDelegateListener;

	public initNativeView() {
		super.initNativeView();

		const owner = new WeakRef(this);
		this._delegate = MaskedTextFieldDelegate.new();
		this._listener = MaskedUITextFieldDelegateListener.initWithOwner(owner);

		InputMaskUtils.setListenerWithMaskedTextFieldDelegate(this._delegate, this._listener);
		InputMaskUtils.setMaskedTextChangedCallbackWithMaskedTextFieldDelegate(this._delegate, onMaskedTextChanged.bind(owner));

		this.nativeViewProtected.delegate = this._delegate;
	}

	public disposeNativeView() {
		super.disposeNativeView();
		this._listener = null;
		this._delegate = null;
	}

	[completedProperty.setNative](completed: boolean) {
		// Should not be manually set
	}

	[maskedValueProperty.setNative](value: string) {
		// Should not be manually set
	}

	[maskProperty.setNative](mask: string) {
		this._delegate.primaryMaskFormat = mask;
		this[textProperty.setNative](this.text);
	}

	[textProperty.setNative](text: string) {
		InputMaskUtils.putWithMaskedTextFieldDelegateTextIntoAutocomplete(this._delegate, text, this.nativeViewProtected, false);
	}
}
