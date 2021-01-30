/// <reference path="../node_modules/@nativescript/types/index.d.ts" />

declare var InputMaskVersionNumber: number;

declare var InputMaskVersionNumberVar: number;

declare var InputMaskVersionString: interop.Reference<number>;

declare var InputMaskVersionStringVar: interop.Reference<number>;

declare class Mask extends NSObject {
	static alloc(): Mask; // inherited from NSObject

	static getOrCreateWithFormatError(format: string): Mask;

	static new(): Mask; // inherited from NSObject

	constructor(o: { format: string });

	acceptableTextLength(): number;

	acceptableValueLength(): number;

	initWithFormatError(format: string): this;

	placeholder(): string;

	totalTextLength(): number;

	totalValueLength(): number;
}

declare class MaskedTextFieldDelegate extends NSObject implements UITextFieldDelegate {
	static alloc(): MaskedTextFieldDelegate; // inherited from NSObject

	static new(): MaskedTextFieldDelegate; // inherited from NSObject

	autocomplete: boolean;

	autocompleteOnFocus: boolean;

	delegate: NSObject;

	listener: MaskedTextFieldDelegateListener;

	mask: Mask;

	maskFormat: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { format: string });

	acceptableTextLength(): number;

	acceptableValueLength(): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFormat(format: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	placeholder(): string;

	putWithTextInto(text: string, field: UITextField): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, replacementString: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;

	totalTextLength(): number;

	totalValueLength(): number;
}

interface MaskedTextFieldDelegateListener extends UITextFieldDelegate {
	textFieldDidFillMandatoryCharactersDidExtractValue?(textField: UITextField, complete: boolean, value: string): void;
}
declare var MaskedTextFieldDelegateListener: {
	prototype: MaskedTextFieldDelegateListener;
};

declare class PolyMaskTextFieldDelegate extends MaskedTextFieldDelegate {
	static alloc(): PolyMaskTextFieldDelegate; // inherited from NSObject

	static new(): PolyMaskTextFieldDelegate; // inherited from NSObject

	affineFormats: NSArray<string>;

	constructor(o: { primaryFormat: string; affineFormats: NSArray<string> });

	initWithPrimaryFormatAffineFormats(primaryFormat: string, affineFormats: NSArray<string>): this;
}
