declare class InputMaskUtils extends NSObject {
    static setListenerWithMaskedTextFieldDelegate(maskedTextFieldDelegate: MaskedTextFieldDelegate, listener: MaskedTextFieldDelegateListener);
    static setMaskedTextChangedCallbackWithMaskedTextFieldDelegate(maskedTextFieldDelegate: MaskedTextFieldDelegate, onMaskedTextChangedCallback: (textField: UITextField, value: string, complete: boolean) => void);
    static putWithMaskedTextFieldDelegateTextIntoAutocomplete(maskedTextFieldDelegate: MaskedTextFieldDelegate, text: string, field: UITextField, autocomplete: boolean);
}