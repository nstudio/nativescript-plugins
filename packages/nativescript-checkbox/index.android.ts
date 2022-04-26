import { Application, booleanConverter, Color, CssProperty, Device, fontSizeProperty, Property, Style, View } from '@nativescript/core';
import { BoxType } from './common';

declare const global: any;

const AppCompatCheckBox_Namespace = useAndroidX() ? androidx.appcompat.widget : (android.support as any).v7.widget;

const CompoundButtonCompat_Namespace = useAndroidX() ? androidx.core.widget : (android.support.v4 as any).widget;

function useAndroidX() {
	return androidx.appcompat && androidx.core;
}

export const checkedProperty = new Property<CheckBox, boolean>({
	name: 'checked',
	defaultValue: false,
	valueConverter: booleanConverter,
	valueChanged: onCheckedPropertyChanged,
});

export const textProperty = new Property<CheckBox, string>({
	name: 'text',
	defaultValue: '',
	valueChanged: onTextPropertyChanged,
});

export const fillColorProperty = new CssProperty<Style, string>({
	name: 'fillColor',
	cssName: 'fill-color',
	valueConverter: (v) => {
		return String(v);
	},
});

export const tintColorProperty = new CssProperty<Style, string>({
	name: 'tintColor',
	cssName: 'tint-color',
	defaultValue: '#0075ff',
	valueConverter: (v) => {
		return String(v);
	},
});

export class CheckBox extends View {
	checked: boolean;
	nativeView: androidx.appcompat.widget.AppCompatCheckBox;
	private _android: androidx.appcompat.widget.AppCompatCheckBox;
	private _boxType: string;
	private _checkStyle: string;
	private _checkPadding: string;
	private _checkPaddingLeft: string;
	private _checkPaddingTop: string;
	private _checkPaddingRight: string;
	private _checkPaddingBottom: string;

	constructor() {
		super();
	}

	// @ts-ignore
	get android() {
		return this._android;
	}

	set boxType(value: string) {
		this._boxType = value;
	}

	get boxType() {
		return this._boxType;
	}

	get checkStyle() {
		return this._checkStyle;
	}

	set checkStyle(style) {
		this._checkStyle = style;
	}

	set checkPadding(padding) {
		this._checkPadding = padding;
	}

	get checkPadding() {
		return this._checkPadding;
	}

	set checkPaddingLeft(padding) {
		this._checkPaddingLeft = padding;
	}

	get checkPaddingLeft() {
		return this._checkPaddingLeft;
	}

	set checkPaddingTop(padding) {
		this._checkPaddingTop = padding;
	}

	get checkPaddingTop() {
		return this._checkPaddingTop;
	}

	set checkPaddingRight(padding) {
		this._checkPaddingRight = padding;
	}

	get checkPaddingRight() {
		return this._checkPaddingRight;
	}

	set checkPaddingBottom(padding) {
		this._checkPaddingBottom = padding;
	}

	get checkPaddingBottom() {
		return this._checkPaddingBottom;
	}
	[checkedProperty.getDefault](): boolean {
		return false;
	}
	[checkedProperty.setNative](value: boolean) {
		this.nativeView.setChecked(Boolean(value));
	}
	[textProperty.getDefault](): string {
		return '';
	}
	[textProperty.setNative](value: string) {
		this.nativeView.setText(java.lang.String.valueOf(value));
	}
	[fontSizeProperty.getDefault]() {
		return { nativeSize: this.nativeView.getTextSize() };
	}
	[fontSizeProperty.setNative](value) {
		if (typeof value === 'number') {
			this.nativeView.setTextSize(value);
		} else {
			this.nativeView.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX, value.nativeSize);
		}
	}

	get fontSize(): number {
		return (<any>this.style).fontSizeProperty;
	}
	set fontSize(size: number) {
		(this.style as any).fontSize = size;
	}

	get fillColor(): string {
		return (<any>this.style).fillColor;
	}
	set fillColor(color: string) {
		(this.style as any).fillColor = color;
		if (this._android && Device.sdkVersion >= '21') {
			// setButtonTintList is method on `android.widgeth.CompondButton`
			// here: https://developer.android.com/reference/android/widget/CompoundButton.html#setButtonTintList(android.content.res.ColorStateList)
			(this._android as any).setButtonTintList(android.content.res.ColorStateList.valueOf(new Color(color).android));
		}
	}

	// there is no difference between tint and fill on the android widget
	get tintColor(): string {
		return (this.style as any).fillColor;
	}

	set tintColor(color: string) {
		(this.style as any).fillColor = color;
	}

	createNativeView() {
		this._android = new AppCompatCheckBox_Namespace[BoxType[this.boxType] === BoxType.circle ? 'AppCompatRadioButton' : 'AppCompatCheckBox'](this._context, null);
		// assign to the nativeView member
		this.nativeView = this.android;

		if (this.checkPaddingLeft) {
			this._android.setPadding(parseInt(this.checkPaddingLeft), this._android.getPaddingTop(), this._android.getPaddingRight(), this._android.getPaddingBottom());
		}

		if (this.checkPaddingTop) {
			this._android.setPadding(this._android.getPaddingLeft(), parseInt(this.checkPaddingTop), this._android.getPaddingRight(), this._android.getPaddingBottom());
		}

		if (this.checkPaddingRight) {
			this._android.setPadding(this._android.getPaddingLeft(), this._android.getPaddingTop(), parseInt(this.checkPaddingRight), this._android.getPaddingBottom());
		}

		if (this.checkPaddingBottom) {
			this._android.setPadding(this._android.getPaddingLeft(), this._android.getPaddingTop(), this._android.getPaddingRight(), parseInt(this.checkPaddingBottom));
		}

		if (this.checkPadding) {
			const pads = this.checkPadding.toString().split(',');
			switch (pads.length) {
				case 1:
					this._android.setPadding(parseInt(pads[0]), parseInt(pads[0]), parseInt(pads[0]), parseInt(pads[0]));
					break;
				case 2:
					this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[0]), parseInt(pads[1]));
					break;
				case 3:
					this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[2]), parseInt(pads[1]));
					break;
				case 4:
					this._android.setPadding(parseInt(pads[0]), parseInt(pads[1]), parseInt(pads[2]), parseInt(pads[3]));
					break;
			}
		}

		if (this.style.color) {
			this._android.setTextColor(this.style.color.android);
		}

		if (!this.style.fontSize) {
			this.style.fontSize = 14;
		}

		this._android.setTextSize(this.style.fontSize);

		const typeface = this.style.fontInternal?.getAndroidTypeface();
		if (typeface) {
			this._android.setTypeface(typeface);
		}

		if (this._checkStyle) {
			const drawable = Application.android.context.getResources().getIdentifier(this._checkStyle, 'drawable', Application.android.context.getPackageName());
			this._android.setButtonDrawable(drawable);
		}

		if (this._android) {
			if (this.fillColor) {
				CompoundButtonCompat_Namespace.CompoundButtonCompat.setButtonTintList(this._android, android.content.res.ColorStateList.valueOf(new Color(this.fillColor).android));
			}
		}

		return this._android;
	}

	initNativeView() {
		const that = new WeakRef(this);
		this.nativeView.setOnCheckedChangeListener(
			new android.widget.CompoundButton.OnCheckedChangeListener({
				onCheckedChanged: (sender, isChecked) => {
					if (that.get()) {
						checkedProperty.nativeValueChange(that.get(), isChecked);
					}
				},
			})
		);
	}

	disposeNativeView() {
		this.nativeView.setOnCheckedChangeListener(null);
	}

	toggle(): void {
		this.nativeView.toggle();
	}

	_onCheckedPropertyChanged(checkbox: CheckBox, oldValue, newValue) {
		if (!this.nativeView) {
			return;
		}
		checkedProperty.nativeValueChange(this, newValue);
	}
	_onTextPropertyChanged(checkbox: CheckBox, oldValue, newValue) {
		if (!this.nativeView) {
			return;
		}
		textProperty.nativeValueChange(this, newValue);
	}
}

function onCheckedPropertyChanged(checkbox: CheckBox, oldValue, newValue) {
	checkbox._onCheckedPropertyChanged(checkbox, oldValue, newValue);
}
function onTextPropertyChanged(checkbox: CheckBox, oldValue, newValue) {
	checkbox._onTextPropertyChanged(checkbox, oldValue, newValue);
}

checkedProperty.register(CheckBox);
textProperty.register(CheckBox);
fillColorProperty.register(Style);
tintColorProperty.register(Style);
