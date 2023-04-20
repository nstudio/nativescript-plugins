/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module redmadrobot {
		export module inputmask {
			export class BuildConfig {
				public static class: java.lang.Class<com.redmadrobot.inputmask.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export class MaskedTextChangedListener {
				public static class: java.lang.Class<com.redmadrobot.inputmask.MaskedTextChangedListener>;
				public constructor(param0: string, param1: globalAndroid.widget.EditText, param2: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener);
				public setText(param0: string, param1: globalAndroid.widget.EditText, param2: java.lang.Boolean): com.redmadrobot.inputmask.helper.Mask.Result;
				public getAffineFormats(): java.util.List<string>;
				public setAffinityCalculationStrategy(param0: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy): void;
				public setRightToLeft(param0: boolean): void;
				public getRightToLeft(): boolean;
				public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public setAffineFormats(param0: java.util.List<string>): void;
				public setListener(param0: globalAndroid.text.TextWatcher): void;
				public constructor(param0: string, param1: java.util.List<string>, param2: globalAndroid.widget.EditText, param3: globalAndroid.text.TextWatcher, param4: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener);
				public constructor(param0: string, param1: java.util.List<string>, param2: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy, param3: boolean, param4: globalAndroid.widget.EditText, param5: globalAndroid.text.TextWatcher, param6: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener);
				public getPrimaryFormat(): string;
				public getAutocomplete(): boolean;
				public constructor(param0: string, param1: java.util.List<string>, param2: boolean, param3: globalAndroid.widget.EditText, param4: globalAndroid.text.TextWatcher, param5: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener);
				public setValueListener(param0: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener): void;
				public afterTextChanged(param0: globalAndroid.text.Editable): void;
				public getAffinityCalculationStrategy(): com.redmadrobot.inputmask.helper.AffinityCalculationStrategy;
				public constructor(param0: string, param1: boolean, param2: globalAndroid.widget.EditText, param3: globalAndroid.text.TextWatcher, param4: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener);
				public placeholder(): string;
				public setAutocomplete(param0: boolean): void;
				public constructor(param0: string, param1: java.util.List<string>, param2: globalAndroid.widget.EditText, param3: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener);
				public constructor(param0: string, param1: java.util.List<string>, param2: globalAndroid.widget.EditText);
				public setAutoskip(param0: boolean): void;
				public setPrimaryFormat(param0: string): void;
				public setCustomNotations(param0: java.util.List<com.redmadrobot.inputmask.model.Notation>): void;
				public acceptableValueLength(): number;
				public totalValueLength(): number;
				public getValueListener(): com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener;
				public constructor(param0: string, param1: globalAndroid.widget.EditText);
				public acceptableTextLength(): number;
				public totalTextLength(): number;
				public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
				public onFocusChange(param0: globalAndroid.view.View, param1: boolean): void;
				public getAutoskip(): boolean;
				public constructor(param0: string, param1: java.util.List<string>, param2: java.util.List<com.redmadrobot.inputmask.model.Notation>, param3: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy, param4: boolean, param5: boolean, param6: globalAndroid.widget.EditText, param7: globalAndroid.text.TextWatcher, param8: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener, param9: boolean);
				public setText(param0: string, param1: java.lang.Boolean): com.redmadrobot.inputmask.helper.Mask.Result;
				public constructor(param0: string, param1: globalAndroid.widget.EditText, param2: globalAndroid.text.TextWatcher, param3: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener);
				public getListener(): globalAndroid.text.TextWatcher;
				public getCustomNotations(): java.util.List<com.redmadrobot.inputmask.model.Notation>;
			}
			export module MaskedTextChangedListener {
				export class Companion {
					public static class: java.lang.Class<com.redmadrobot.inputmask.MaskedTextChangedListener.Companion>;
					public installOn(param0: globalAndroid.widget.EditText, param1: string, param2: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener): com.redmadrobot.inputmask.MaskedTextChangedListener;
					public installOn(param0: globalAndroid.widget.EditText, param1: string, param2: java.util.List<string>, param3: java.util.List<com.redmadrobot.inputmask.model.Notation>, param4: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy, param5: boolean, param6: boolean, param7: globalAndroid.text.TextWatcher, param8: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener): com.redmadrobot.inputmask.MaskedTextChangedListener;
					public installOn(param0: globalAndroid.widget.EditText, param1: string, param2: java.util.List<string>, param3: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy, param4: com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener): com.redmadrobot.inputmask.MaskedTextChangedListener;
				}
				export class ValueListener {
					public static class: java.lang.Class<com.redmadrobot.inputmask.MaskedTextChangedListener.ValueListener>;
					/**
					 * Constructs a new instance of the com.redmadrobot.inputmask.MaskedTextChangedListener$ValueListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onTextChanged(param0: boolean, param1: string, param2: string): void;
					});
					public constructor();
					public onTextChanged(param0: boolean, param1: string, param2: string): void;
				}
				export module pickMask {
					export module ValueListener {
						export class MaskAffinity {
							public static class: java.lang.Class<com.redmadrobot.inputmask.MaskedTextChangedListener.pickMask.MaskAffinity>;
							public component1(): com.redmadrobot.inputmask.helper.Mask;
							public getAffinity(): number;
							public component2(): number;
							public copy(param0: com.redmadrobot.inputmask.helper.Mask, param1: number): com.redmadrobot.inputmask.MaskedTextChangedListener.pickMask.MaskAffinity;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public getMask(): com.redmadrobot.inputmask.helper.Mask;
							public toString(): string;
							public constructor(param0: com.redmadrobot.inputmask.helper.Mask, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module helper {
				export class AffinityCalculationStrategy {
					public static class: java.lang.Class<com.redmadrobot.inputmask.helper.AffinityCalculationStrategy>;
					public static WHOLE_STRING: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy;
					public static PREFIX: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy;
					public static CAPACITY: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy;
					public static EXTRACTED_VALUE_CAPACITY: com.redmadrobot.inputmask.helper.AffinityCalculationStrategy;
					public static valueOf(param0: string): com.redmadrobot.inputmask.helper.AffinityCalculationStrategy;
					public static values(): androidNative.Array<com.redmadrobot.inputmask.helper.AffinityCalculationStrategy>;
					public calculateAffinityOfMask(param0: com.redmadrobot.inputmask.helper.Mask, param1: com.redmadrobot.inputmask.model.CaretString): number;
				}
				export module AffinityCalculationStrategy {
					export class WhenMappings {
						public static class: java.lang.Class<com.redmadrobot.inputmask.helper.AffinityCalculationStrategy.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module helper {
				export class CaretStringIterator {
					public static class: java.lang.Class<com.redmadrobot.inputmask.helper.CaretStringIterator>;
					public getCaretString(): com.redmadrobot.inputmask.model.CaretString;
					public setCurrentIndex(param0: number): void;
					public insertionAffectsCaret(): boolean;
					public constructor(param0: com.redmadrobot.inputmask.model.CaretString, param1: number);
					public deletionAffectsCaret(): boolean;
					public getCurrentIndex(): number;
					public next(): java.lang.Character;
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module helper {
				export class Compiler {
					public static class: java.lang.Class<com.redmadrobot.inputmask.helper.Compiler>;
					public compile(param0: string): com.redmadrobot.inputmask.model.State;
					public constructor(param0: java.util.List<com.redmadrobot.inputmask.model.Notation>);
				}
				export module Compiler {
					export class FormatError {
						public static class: java.lang.Class<com.redmadrobot.inputmask.helper.Compiler.FormatError>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module helper {
				export class FormatSanitizer {
					public static class: java.lang.Class<com.redmadrobot.inputmask.helper.FormatSanitizer>;
					public sanitize(param0: string): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module helper {
				export class Mask {
					public static class: java.lang.Class<com.redmadrobot.inputmask.helper.Mask>;
					public makeIterator(param0: com.redmadrobot.inputmask.model.CaretString): com.redmadrobot.inputmask.helper.CaretStringIterator;
					public acceptableValueLength(): number;
					public constructor(param0: string);
					public getCustomNotations(): java.util.List<com.redmadrobot.inputmask.model.Notation>;
					public acceptableTextLength(): number;
					public apply(param0: com.redmadrobot.inputmask.model.CaretString): com.redmadrobot.inputmask.helper.Mask.Result;
					public constructor(param0: string, param1: java.util.List<com.redmadrobot.inputmask.model.Notation>);
					public placeholder(): string;
					public totalTextLength(): number;
					public totalValueLength(): number;
				}
				export module Mask {
					export class AutocompletionStack extends java.util.Stack<com.redmadrobot.inputmask.model.Next> {
						public static class: java.lang.Class<com.redmadrobot.inputmask.helper.Mask.AutocompletionStack>;
						public constructor();
						public contains(param0: any): boolean;
						public lastIndexOf(param0: any): number;
						public indexOf(param0: com.redmadrobot.inputmask.model.Next): number;
						public removeAt(param0: number): com.redmadrobot.inputmask.model.Next;
						public remove(param0: any): boolean;
						public remove(param0: com.redmadrobot.inputmask.model.Next): boolean;
						public remove(param0: number): com.redmadrobot.inputmask.model.Next;
						public contains(param0: com.redmadrobot.inputmask.model.Next): boolean;
						public indexOf(param0: any): number;
						public getSize(): number;
						public push(param0: com.redmadrobot.inputmask.model.Next): com.redmadrobot.inputmask.model.Next;
						public lastIndexOf(param0: com.redmadrobot.inputmask.model.Next): number;
						public size(): number;
					}
					export class Factory {
						public static class: java.lang.Class<com.redmadrobot.inputmask.helper.Mask.Factory>;
						public isValid(param0: string, param1: java.util.List<com.redmadrobot.inputmask.model.Notation>): boolean;
						public getOrCreate(param0: string, param1: java.util.List<com.redmadrobot.inputmask.model.Notation>): com.redmadrobot.inputmask.helper.Mask;
					}
					export class Result {
						public static class: java.lang.Class<com.redmadrobot.inputmask.helper.Mask.Result>;
						public component4(): boolean;
						public getComplete(): boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public reversed(): com.redmadrobot.inputmask.helper.Mask.Result;
						public toString(): string;
						public getAffinity(): number;
						public constructor(param0: com.redmadrobot.inputmask.model.CaretString, param1: string, param2: number, param3: boolean);
						public component1(): com.redmadrobot.inputmask.model.CaretString;
						public component2(): string;
						public copy(param0: com.redmadrobot.inputmask.model.CaretString, param1: string, param2: number, param3: boolean): com.redmadrobot.inputmask.helper.Mask.Result;
						public getFormattedText(): com.redmadrobot.inputmask.model.CaretString;
						public component3(): number;
						public getExtractedValue(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module helper {
				export class RTLCaretStringIterator extends com.redmadrobot.inputmask.helper.CaretStringIterator {
					public static class: java.lang.Class<com.redmadrobot.inputmask.helper.RTLCaretStringIterator>;
					public constructor(param0: com.redmadrobot.inputmask.model.CaretString);
					public insertionAffectsCaret(): boolean;
					public constructor(param0: com.redmadrobot.inputmask.model.CaretString, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module helper {
				export class RTLMask extends com.redmadrobot.inputmask.helper.Mask {
					public static class: java.lang.Class<com.redmadrobot.inputmask.helper.RTLMask>;
					public makeIterator(param0: com.redmadrobot.inputmask.model.CaretString): com.redmadrobot.inputmask.helper.CaretStringIterator;
					public constructor(param0: string);
					public apply(param0: com.redmadrobot.inputmask.model.CaretString): com.redmadrobot.inputmask.helper.Mask.Result;
					public constructor(param0: string, param1: java.util.List<com.redmadrobot.inputmask.model.Notation>);
				}
				export module RTLMask {
					export class Factory {
						public static class: java.lang.Class<com.redmadrobot.inputmask.helper.RTLMask.Factory>;
						public getOrCreate(param0: string, param1: java.util.List<com.redmadrobot.inputmask.model.Notation>): com.redmadrobot.inputmask.helper.RTLMask;
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export class CaretString {
					public static class: java.lang.Class<com.redmadrobot.inputmask.model.CaretString>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public component3(): com.redmadrobot.inputmask.model.CaretString.CaretGravity;
					public getCaretPosition(): number;
					public reversed(): com.redmadrobot.inputmask.model.CaretString;
					public component2(): number;
					public constructor(param0: string, param1: number, param2: com.redmadrobot.inputmask.model.CaretString.CaretGravity);
					public getCaretGravity(): com.redmadrobot.inputmask.model.CaretString.CaretGravity;
					public copy(param0: string, param1: number, param2: com.redmadrobot.inputmask.model.CaretString.CaretGravity): com.redmadrobot.inputmask.model.CaretString;
					public hashCode(): number;
					public getString(): string;
				}
				export module CaretString {
					export abstract class CaretGravity {
						public static class: java.lang.Class<com.redmadrobot.inputmask.model.CaretString.CaretGravity>;
						public getAutocomplete(): boolean;
						public getAutoskip(): boolean;
					}
					export module CaretGravity {
						export class BACKWARD extends com.redmadrobot.inputmask.model.CaretString.CaretGravity {
							public static class: java.lang.Class<com.redmadrobot.inputmask.model.CaretString.CaretGravity.BACKWARD>;
							public constructor(param0: boolean);
							public getAutoskipValue(): boolean;
						}
						export class FORWARD extends com.redmadrobot.inputmask.model.CaretString.CaretGravity {
							public static class: java.lang.Class<com.redmadrobot.inputmask.model.CaretString.CaretGravity.FORWARD>;
							public constructor(param0: boolean);
							public getAutocompleteValue(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export class Next {
					public static class: java.lang.Class<com.redmadrobot.inputmask.model.Next>;
					public getPass(): boolean;
					public getState(): com.redmadrobot.inputmask.model.State;
					public getInsert(): java.lang.Character;
					public constructor(param0: com.redmadrobot.inputmask.model.State, param1: java.lang.Character, param2: boolean, param3: java.lang.Character);
					public getValue(): java.lang.Character;
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export class Notation {
					public static class: java.lang.Class<com.redmadrobot.inputmask.model.Notation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getCharacterSet(): string;
					public isOptional(): boolean;
					public component2(): string;
					public component3(): boolean;
					public getCharacter(): string;
					public constructor(param0: string, param1: string, param2: boolean);
					public hashCode(): number;
					public copy(param0: string, param1: string, param2: boolean): com.redmadrobot.inputmask.model.Notation;
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export abstract class State {
					public static class: java.lang.Class<com.redmadrobot.inputmask.model.State>;
					public toString(): string;
					public getChild(): com.redmadrobot.inputmask.model.State;
					public accept(param0: string): com.redmadrobot.inputmask.model.Next;
					public constructor(param0: com.redmadrobot.inputmask.model.State);
					public nextState(): com.redmadrobot.inputmask.model.State;
					public autocomplete(): com.redmadrobot.inputmask.model.Next;
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export module state {
					export class EOLState extends com.redmadrobot.inputmask.model.State {
						public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.EOLState>;
						public constructor(param0: com.redmadrobot.inputmask.model.State);
						public constructor();
						public accept(param0: string): com.redmadrobot.inputmask.model.Next;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export module state {
					export class FixedState extends com.redmadrobot.inputmask.model.State {
						public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.FixedState>;
						public constructor(param0: com.redmadrobot.inputmask.model.State);
						public autocomplete(): com.redmadrobot.inputmask.model.Next;
						public constructor(param0: com.redmadrobot.inputmask.model.State, param1: string);
						public getOwnCharacter(): string;
						public accept(param0: string): com.redmadrobot.inputmask.model.Next;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export module state {
					export class FreeState extends com.redmadrobot.inputmask.model.State {
						public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.FreeState>;
						public constructor(param0: com.redmadrobot.inputmask.model.State);
						public autocomplete(): com.redmadrobot.inputmask.model.Next;
						public constructor(param0: com.redmadrobot.inputmask.model.State, param1: string);
						public getOwnCharacter(): string;
						public accept(param0: string): com.redmadrobot.inputmask.model.Next;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export module state {
					export class OptionalValueState extends com.redmadrobot.inputmask.model.State {
						public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.OptionalValueState>;
						public constructor(param0: com.redmadrobot.inputmask.model.State);
						public constructor(param0: com.redmadrobot.inputmask.model.State, param1: com.redmadrobot.inputmask.model.state.OptionalValueState.StateType);
						public getType(): com.redmadrobot.inputmask.model.state.OptionalValueState.StateType;
						public accept(param0: string): com.redmadrobot.inputmask.model.Next;
						public toString(): string;
					}
					export module OptionalValueState {
						export abstract class StateType {
							public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.OptionalValueState.StateType>;
						}
						export module StateType {
							export class AlphaNumeric extends com.redmadrobot.inputmask.model.state.OptionalValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.OptionalValueState.StateType.AlphaNumeric>;
								public constructor();
							}
							export class Custom extends com.redmadrobot.inputmask.model.state.OptionalValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.OptionalValueState.StateType.Custom>;
								public constructor(param0: string, param1: string);
								public getCharacterSet(): string;
								public getCharacter(): string;
							}
							export class Literal extends com.redmadrobot.inputmask.model.state.OptionalValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.OptionalValueState.StateType.Literal>;
								public constructor();
							}
							export class Numeric extends com.redmadrobot.inputmask.model.state.OptionalValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.OptionalValueState.StateType.Numeric>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module redmadrobot {
		export module inputmask {
			export module model {
				export module state {
					export class ValueState extends com.redmadrobot.inputmask.model.State {
						public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.ValueState>;
						public constructor(param0: com.redmadrobot.inputmask.model.State);
						public constructor(param0: com.redmadrobot.inputmask.model.state.ValueState.StateType);
						public constructor(param0: com.redmadrobot.inputmask.model.State, param1: com.redmadrobot.inputmask.model.state.ValueState.StateType);
						public nextState(): com.redmadrobot.inputmask.model.State;
						public getType(): com.redmadrobot.inputmask.model.state.ValueState.StateType;
						public accept(param0: string): com.redmadrobot.inputmask.model.Next;
						public isElliptical(): boolean;
						public toString(): string;
					}
					export module ValueState {
						export abstract class StateType {
							public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.ValueState.StateType>;
						}
						export module StateType {
							export class AlphaNumeric extends com.redmadrobot.inputmask.model.state.ValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.ValueState.StateType.AlphaNumeric>;
								public constructor();
							}
							export class Custom extends com.redmadrobot.inputmask.model.state.ValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.ValueState.StateType.Custom>;
								public constructor(param0: string, param1: string);
								public getCharacterSet(): string;
								public getCharacter(): string;
							}
							export class Ellipsis extends com.redmadrobot.inputmask.model.state.ValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.ValueState.StateType.Ellipsis>;
								public getInheritedType(): com.redmadrobot.inputmask.model.state.ValueState.StateType;
								public constructor(param0: com.redmadrobot.inputmask.model.state.ValueState.StateType);
							}
							export class Literal extends com.redmadrobot.inputmask.model.state.ValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.ValueState.StateType.Literal>;
								public constructor();
							}
							export class Numeric extends com.redmadrobot.inputmask.model.state.ValueState.StateType {
								public static class: java.lang.Class<com.redmadrobot.inputmask.model.state.ValueState.StateType.Numeric>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:

