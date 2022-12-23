import * as React from "react";
import { Dialogs } from '@nativescript/core';
import { StyleSheet } from "react-nativescript";
import { DemoSharedNativescriptFullstory } from '@demo/shared';
import { } from '@nstudio/nativescript-fullstory';

export function HomeScreen() {
    return (
        <flexboxLayout style={styles.container}>
            <button
                style={styles.button}
                onTap={() => Dialogs.alert("Test Plugin!")}
            >
                Test nativescript-fullstory
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