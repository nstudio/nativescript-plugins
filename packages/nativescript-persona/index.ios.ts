import { Environment } from './common';
import { Utils } from '@nativescript/core';

export { Environment };

export class Inquiry {
	#native: NSCPersona;

    static init() {}

	static fromTemplate(template: string): Inquiry {
		const builder = NSCPersona.fromTemplateWithTemplate(template);
		const inquiry = new Inquiry();
		inquiry.#native = builder;
		return inquiry;
	}

	static fromTemplateVersion(template: string): Inquiry {
		const builder = NSCPersona.fromTemplateVersionWithTemplateVersion(template);
		const inquiry = new Inquiry();
		inquiry.#native = builder;
		return inquiry;
	}

	static fromInquiry(inquiry: string): Inquiry {
		const builder = NSCPersona.fromInquiryWithInquiry(inquiry);
		const ret = new Inquiry();
		ret.#native = builder;
		return ret;
	}

	environment(value: Environment): Inquiry {
		this.#native.environment(value as any);
		return this;
	}

	accountId(id: string) {
		this.#native.accountId(id);
		return this;
	}

	referenceId(id: string) {
		this.#native.referenceId(id);
		return this;
	}

	sessionToken(token: string) {
		this.#native.sessionToken(token);
		return this;
	}

	fields(fields: Record<string, string | boolean | number>) {
		const keys = Object.keys(fields);
		const dictionary = NSMutableDictionary.new();
		keys.forEach((key) => {
			const value = fields[key];
			switch (typeof value) {
				case 'boolean':
				case 'number':
				case 'string':
					dictionary.setObjectForKey(value, key);
					break;
				case 'object':
					if ((value as any) instanceof Date) {
						const ts = (value as Date).getTime();
						dictionary.setObjectForKey(NSDate.alloc().initWithTimeIntervalSince1970(ts / 1000), key);
					}
					break;
				default:
					dictionary.setObjectForKey(value, key);
					break;
			}
		});
		this.#native.fields(dictionary);
		return this;
	}

	onComplete(complete?: (inquiryId, status, fields) => void) {
		this.#native.onComplete((inquiryId, status, fields) => {
			const keys = fields.allKeys;
			const count = keys.count;
			const ret = {};
			for (let i = 0; i < count; i++) {
				const key = keys.objectAtIndex(i);
				const obj = fields.objectForKey(key) as NSCInquiryField;
				let type = 'unknown';
				let value = obj.value;
				switch (obj.type) {
					case 'int':
					case 'float':
						type = 'number';
						break;
					case 'string':
						type = 'string';
						break;
					case 'date':
					case 'datetime':
						type = 'date';
						if (value instanceof NSDate) {
							value = new Date(value.timeIntervalSince1970 * 1000);
						}
						break;
					case 'boolean':
						type = 'boolean';
						break;
				}

				ret[key] = {
					type,
					value,
				};
			}
			complete(inquiryId, status, ret);
		});
		return this;
	}

	onCancel(cancel?: (inquiryId, sessionToken) => void) {
		this.#native.onCancel(cancel);
		return this;
	}

	onError(error?: (error) => void) {
		this.#native.onError((err) => {
			error(new Error(err?.debugDescription || err?.localizedDescription));
		});
		return this;
	}

	build() {
		this.#native.build();
		return this;
	}

	start() {
		this.#native.start(Utils.ios.getVisibleViewController(UIApplication.sharedApplication.keyWindow.rootViewController));
	}
}
