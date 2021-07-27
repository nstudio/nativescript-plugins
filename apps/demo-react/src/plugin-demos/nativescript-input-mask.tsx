import * as React from "react";
import { Dialogs } from '@nativescript/core';
import { StyleSheet } from "react-nativescript";
import { DemoSharedNativescriptInputMask } from '@demo/shared';
import { } from '@nstudio/nativescript-input-mask';

export function HomeScreen() {
    const demoShared = new DemoSharedNativescriptInputMask();
    return (
        <flexboxLayout style={styles.container}>
            <button
                style={styles.button}
                onTap={() => demoShared.testIt()}
            >
                Test nativescript-input-mask
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
    },
    button: {
        fontSize: 24,
        color: "#2e6ddf",
    },
});