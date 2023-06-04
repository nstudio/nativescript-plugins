import { booleanConverter, Property, TextField } from '@nativescript/core';
import { InputMask as InputMaskDefinition } from '.';

export abstract class InputMaskBase extends TextField implements InputMaskDefinition {
	private _maskedValue: string;
	private _completed: boolean;
	mask: string;

	get maskedValue() {
		return this._maskedValue;
	}

	get completed() {
		return this._completed;
	}
}

export const completedProperty = new Property<InputMaskBase, boolean>({
	name: 'completed',
	defaultValue: false,
	valueConverter: booleanConverter,
});
completedProperty.register(InputMaskBase);

export const maskedValueProperty = new Property<InputMaskBase, string>({
	name: 'maskedValue',
	defaultValue: '',
});
maskedValueProperty.register(InputMaskBase);

export const maskProperty = new Property<InputMaskBase, string>({
	name: 'mask',
	defaultValue: '',
});
maskProperty.register(InputMaskBase);
