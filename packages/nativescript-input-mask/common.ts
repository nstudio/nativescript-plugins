import { booleanConverter, Property, TextField } from '@nativescript/core';
import { InputMask as InputMaskDefinition } from '.';

export abstract class InputMaskBase extends TextField implements InputMaskDefinition {
	private _extractedValue: string;
	private _completed: boolean;
	mask: string;

	get extractedValue() {
		return this._extractedValue;
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

export const extractedValueProperty = new Property<InputMaskBase, string>({
	name: 'extractedValue',
	defaultValue: '',
});
extractedValueProperty.register(InputMaskBase);

export const maskProperty = new Property<InputMaskBase, string>({
	name: 'mask',
	defaultValue: '',
});
maskProperty.register(InputMaskBase);
