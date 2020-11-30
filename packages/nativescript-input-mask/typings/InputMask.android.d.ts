/// <reference path="../node_modules/@nativescript/types/index.d.ts" />

declare namespace com.redmadrobot.inputmask {
	namespace MaskedTextChangedListener {
		export class ValueListener {
			constructor(listeners: { onTextChanged(maskFilled: boolean, extractedValue: string): void });
			textChanged(maskFilled: boolean, extractedValue: string): void;
		}
	}

	class MaskedTextChangedListener extends android.text.TextWatcher implements android.view.View.OnFocusChangeListener {
		constructor(mask: string, autocomplete: boolean, editText: android.widget.EditText, textWatchers: android.text.TextWatcher, valueListener: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener);

		onFocusChange(view: android.view.View, hasFocus: boolean): void;
		setText(text: string): void;
	}

	export class PolyMaskTextChangedListener {}
}
