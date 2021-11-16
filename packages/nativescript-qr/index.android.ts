import { Utils, ImageSource } from "@nativescript/core";

declare const io;
export class Qr {
    static generate(value: string, width = 250, height = 250, color = 'black', backgroundColor = 'white') {
        return new ImageSource(io.nstudio.nativescript.plugins.qr.Qr.generateQr(
            value, Utils.layout.toDevicePixels(width),
            Utils.layout.toDevicePixels(height), color,
            backgroundColor
        ))
    }
}