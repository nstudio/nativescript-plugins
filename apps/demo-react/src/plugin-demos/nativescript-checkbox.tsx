import * as React from "react";
import { Dialogs } from '@nativescript/core';
import { StyleSheet } from "react-nativescript";
import { DemoSharedNativescriptCheckbox } from '@demo/shared';
import { } from '@nstudio/nativescript-checkbox';

export function HomeScreen() {
    // const demoShared = new DemoSharedNativescriptCheckbox();
    return (
        <flexboxLayout style={styles.container}>
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Test Plugin!")}
            >
                Test nativescript-checkbox
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