import { EventData, TextField } from '@nativescript/core';
import { textProperty } from '@nativescript/core/ui/text-base';
import { completedProperty, extractedValueProperty, InputMaskBase, maskProperty } from './common';

@NativeClass()
class ListenerImpl extends NSObject implements MaskedTextFieldDelegateListener {
	public static ObjCProtocols = [MaskedTextFieldDelegateListener];

	public static initWithOwner(owner: WeakRef<InputMask>) {
		const listener = ListenerImpl.new() as ListenerImpl;
		listener._owner = owner;
		return listener;
	}

	public _owner: WeakRef<InputMask>;

	public textFieldDidFillMandatoryCharactersDidExtractValue(textField: UITextField, complete: boolean, value: string): void {
		const owner = this._owner.get();
		if (owner) {
			completedProperty.nativeValueChange(owner, complete);
			extractedValueProperty.nativeValueChange(owner, value);
		}
	}
}

@NativeClass()
class InputMaskDelegateImpl extends MaskedTextFieldDelegate {
	public static ObjCProtocols = [UITextFieldDelegate];

	public static initWithOwnerAndDefault(owner: WeakRef<InputMask>, defaultImpl: UITextFieldDelegate): InputMaskDelegateImpl {
		const delegate = <InputMaskDelegateImpl>InputMaskDelegateImpl.new();
		delegate._defaultImpl = defaultImpl;
		delegate._owner = owner;
		return delegate;
	}

	_owner: WeakRef<InputMask>;
	_defaultImpl: UITextFieldDelegate;

	public textFieldShouldBeginEditing(textField: UITextField): boolean {
		return this._defaultImpl.textFieldShouldBeginEditing(textField);
	}

	public textFieldDidEndEditing(textField: UITextField) {
		return this._defaultImpl.textFieldDidEndEditing(textField);
	}

	public textFieldShouldClear(textField: UITextField) {
		return this._defaultImpl.textFieldShouldClear(textField);
	}

	public textFieldShouldReturn(textField: UITextField): boolean {
		return this._defaultImpl.textFieldShouldReturn(textField);
	}

	public textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, replacementString: string): boolean {
		const owner = this._owner.get();
		super.textFieldShouldChangeCharactersInRangeReplacementString(textField, range, replacementString);
		if (owner) {
			textProperty.nativeValueChange(owner, textField.text);
			const eventData: EventData = {
				eventName: 'textChangeEvent',
				object: owner,
			};

			owner.notify(eventData);
		}
		return false;
	}
}

export class InputMask extends InputMaskBase {
	private _delegate: InputMaskDelegateImpl;
	private _ios: UITextField;
	private _listener: ListenerImpl;

	constructor() {
		super();
		const owner = new WeakRef(this);
		this._delegate = InputMaskDelegateImpl.initWithOwnerAndDefault(owner, this._delegate);
		this._listener = ListenerImpl.initWithOwner(owner);
		this._delegate.listener = this._listener;
	}

	[completedProperty.setNative](completed: boolean) {
		// Should not be manually set
	}

	[extractedValueProperty.setNative](value: string) {
		// Should not be manually set
	}

	[maskProperty.setNative](mask: string) {
		this._delegate.maskFormat = mask;
		this[textProperty.setNative](this.text);
	}

	[textProperty.setNative](text: string) {
		if (this._delegate && this._delegate.putWithTextInto) {
			// TODO: this does not seem to work as of 12/28/2020
			this._delegate.putWithTextInto(text, this._ios);
		}
	}
}
