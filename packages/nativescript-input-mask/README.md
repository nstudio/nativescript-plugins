# @nstudio/nativescript-input-mask

Format user input and process only the characters valueable to your application. Use this plugin to format phone numbers, credit card numbers, and more in a way that is more friendly for your data handling processes.

This plugin makes the native libraries [InputMask(Android)](https://github.com/RedMadRobot/input-mask-android) and [InputMask(iOS)](https://github.com/RedMadRobot/input-mask-ios) compatible with Nativescript.

## Installation

```javascript
npm install @nstudio/nativescript-input-mask
```

If you were using 0.1.x, please note the following breaking changes in 1.0.0 release:

- Removed property `extractedValue`. Property text will keep that value from now on.
- Added property `maskedValue` for retrieving the value with mask format.

## Usage

Use by adding a `mask` property to an `InputMask` field. Masks can be changed on the fly, which causes the current text value to be re-applied to the new mask. Any characters that do not meet the mask criteria will be dropped.

Documentation for masks is below (from [here](https://github.com/RedMadRobot/input-mask-ios#description)).

---

Masks consist of blocks of symbols, which may include:

- `[]` — a block for valueable symbols written by user.

Square brackets block may contain any number of special symbols:

1. `0` — mandatory digit. For instance, `[000]` mask will allow user to enter three numbers: `123`.
2. `9` — optional digit . For instance, `[00099]` mask will allow user to enter from three to five numbers.
3. `А` — mandatory letter. `[AAA]` mask will allow user to enter three letters: `abc`.
4. `а` — optional letter. `[АААааа]` mask will allow to enter from three to six letters.
5. `_` — mandatory symbol (digit or letter).
6. `-` — optional symbol (digit or letter).

Other symbols inside square brackets will cause a mask initialization error.

Blocks may contain mixed types of symbols; such that, `[000AA]` will end up being divided in two groups: `[000][AA]` (this happens automatically).

Blocks must not contain nested brackets. `[[00]000]` format will cause a mask initialization error.

Symbols outside the square brackets will take a place in the output.
For instance, `+7 ([000]) [000]-[0000]` mask will format the input field to the form of `+7 (123) 456-7890`.

- `{}` — a block for valueable yet fixed symbols, which could not be altered by the user.

Symbols within the square and curly brackets form an extracted value (valueable characters).
In other words, `[00]-[00]` and `[00]{-}[00]` will format the input to the same form of `12-34`,
but in the first case the value, extracted by the library, will be equal to `1234`, and in the second case it will result in `12-34`.

Mask format examples:

1. [00000000000]
2. {401}-[000]-[00]-[00]
3. [000999999]
4. {818}-[000]-[00]-[00]
5. [A][-----------------------------------------------------]
6. [A][_______________________________________________________________]
7. 8 [0000000000]
8. 8([000])[000]-[00]-[00]
9. [0000]{-}[00]
10. +1 ([000]) [000] [00] [00]

---

### Angular

Add the following lines to `app/app.module.ts`:

```javascript
import { registerElement } from '@nativescript/angular';
import { InputMask } from '@nstudio/nativescript-input-mask';

registerElement('InputMask', () => InputMask);
```

Use like a `TextField` with a mask property and other event properties:

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ns-app',
	template: `
		<StackLayout>
			<InputMask mask="([000]) [000]-[0000]" text="1235551111" (maskedValueChange)="onMaskedValueChange($event)" (completedChange)="onCompletedChage($event)"> </InputMask>
		</StackLayout>
	`,
})
export class AppComponent {
	onMaskedValueChange(args) {
		// e.g. `(123) 555-1111`
		console.log('Masked value:', args.value);
	}

	onCompletedChange(args) {
		// `args.value` indicates whether the field contains all mandatory characters.
		console.log('Completed:', args.value);
	}
}
```

Note that masks can be bound and changed on the fly. See demo app for a working implementation.

## API

The `InputMask` class extends `TextField` and implements the following additional properties:

| Property       | Default | Description                                                  |
| -------------- | ------- | ------------------------------------------------------------ |
| mask           | ""      | The mask property to apply to text entered into the field.   |
| maskedValue    | ""      | A formatted value of original input using mask.              |
| completed      | false   | Indicates whether all mandatory characters have been filled. |

## License

Apache License Version 2.0, January 2004
