import { ImageSource } from "@nativescript/core";

declare const TNSQr;

export class Qr {
    static generate(value: string, width = 250, height = 250, color = 'black', backgroundColor = 'white') {
        return new ImageSource(TNSQr.generateQr(
            value, width,
            height, color,
            backgroundColor
        ))
    }
}