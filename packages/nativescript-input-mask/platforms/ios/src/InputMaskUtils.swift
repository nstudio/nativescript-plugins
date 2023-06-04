import InputMask

// This class ensures access to properties and methods that are not portable to obj-c
@objcMembers
@objc(InputMaskUtils)
class InputMaskUtils: NSObject {
    public static func setListener(maskedTextFieldDelegate: MaskedTextFieldDelegate, _ listener: MaskedTextFieldDelegateListener) {
        maskedTextFieldDelegate.listener = listener;
    }

    public static func setMaskedTextChangedCallback(maskedTextFieldDelegate: MaskedTextFieldDelegate, _ onMaskedTextChangedCallback: @escaping ((_ textField: UITextField, _ value: String, _ complete: Bool) -> ())) {
        maskedTextFieldDelegate.onMaskedTextChangedCallback = onMaskedTextChangedCallback;
    }

    public static func put(maskedTextFieldDelegate: MaskedTextFieldDelegate, text: String, into field: UITextField, autocomplete putAutocomplete: Bool) {
        maskedTextFieldDelegate.put(text: text, into: field, autocomplete: putAutocomplete);
    }
}