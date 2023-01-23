import { booleanConverter, LayoutBase, Property } from '@nativescript/core';

export const scrollEnabledProperty = new Property<SplitSheetBase, boolean>({
	name: 'scrollEnabled',
	defaultValue: false,
	valueConverter: booleanConverter,
});

export class SplitSheetBase extends LayoutBase {}

scrollEnabledProperty.register(SplitSheetBase);
