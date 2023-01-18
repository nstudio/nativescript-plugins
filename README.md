- [@nstudio/nativescript-airship](packages/nativescript-airship/README.md)
- [@nstudio/nativescript-airship-adm](packages/nativescript-airship-adm/README.md)
- [@nstudio/nativescript-airship-fcm](packages/nativescript-airship-fcm/README.md)
- [@nstudio/nativescript-airship-hms](packages/nativescript-airship-hms/README.md)
- [@nstudio/nativescript-barcodescanner](packages/nativescript-barcodescanner/README.md)
- [@nstudio/nativescript-blur](packages/nativescript-blur/README.md)
- [@nstudio/nativescript-camera-plus](packages/nativescript-camera-plus/README.md)
- [@nstudio/nativescript-cardview](packages/nativescript-cardview/README.md)
- [@nstudio/nativescript-carousel](packages/nativescript-carousel/README.md)
- [@nstudio/nativescript-checkbox](packages/nativescript-checkbox/README.md)
- [@nstudio/nativescript-dynatrace](packages/nativescript-dynatrace/README.md)
- [@nstudio/nativescript-embrace](packages/nativescript-embrace/README.md)
- [@nstudio/nativescript-exoplayer](packages/nativescript-exoplayer/README.md)
- [@nstudio/nativescript-fancyalert](packages/nativescript-fancyalert/README.md)
- [@nstudio/nativescript-filterable-listpicker](packages/nativescript-filterable-listpicker/README.md)
- [@nstudio/nativescript-freshchat](packages/nativescript-freshchat/README.md)
- [@nstudio/nativescript-input-mask](packages/nativescript-input-mask/README.md)
- [@nstudio/nativescript-intercom](packages/nativescript-intercom/README.md)
- [@nstudio/nativescript-loading-indicator](packages/nativescript-loading-indicator/README.md)
- [@nstudio/nativescript-onfido](packages/nativescript-onfido/README.md)
- [@nstudio/nativescript-persona](packages/nativescript-persona/README.md)
- [@nstudio/nativescript-plaid](packages/nativescript-plaid/README.md)
- [@nstudio/nativescript-qr](packages/nativescript-qr/README.md)
- [@nstudio/nativescript-tracking-transparency](packages/nativescript-tracking-transparency/README.md)
- [@nstudio/nativescript-walletconnect](packages/nativescript-walletconnect/README.md)

# How to use?

This workspace manages the suite of plugins listed above.

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: _good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)_

## How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

<h3 align="center">Made with ❤️</h3>
