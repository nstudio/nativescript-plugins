import { View, ViewBase } from "@nativescript/core";
export declare class Blur {
    effectViewMap: any;
    on(nsView: View | ViewBase, viewName: string, radius: number, theme?: 'dark' | 'extraDark' | 'light' | 'extraLight' | 'regular' | 'prominent', duration?: number): Promise<unknown>;
    off(viewName: string, duration?: number): Promise<unknown>;
}