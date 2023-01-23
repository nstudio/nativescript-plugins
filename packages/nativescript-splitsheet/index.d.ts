import { LayoutBase } from '@nativescript/core';
import { SplitSheetBase } from './common';

export declare class SplitSheet extends SplitSheetBase {
	openSheet(duration?: number): void;
	closeSheet(): void;
	minimumHeight(value: number): void;
	snappingDistance(value: number): void;
}

export declare class AutoLayout extends LayoutBase {}
