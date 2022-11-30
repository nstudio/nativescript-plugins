import { Environment } from './common';
import { AndroidActivityCallbacks, Application } from '@nativescript/core';

export { Environment };

export class Inquiry {
	#native: io.nstudio.plugins.persona.NSCPersona;
	#callback: io.nstudio.plugins.persona.NSCPersona.Callback;
	#onComplete?: (inquiryId: string, status: string, fields: Record<string, { type: 'string' | 'boolean' | 'date' | 'number' | 'unknown'; value: string | boolean | Date | number }>) => void;
	#onCancel?: (inquiryId: string, sessionToken: string) => void;
	#onError?: (error: any) => void;
	static #didInit = false;
	static #activity;
	static init() {
		if (this.#didInit) {
			return;
		}
		this.#didInit = true;
		Application.android.once('activityCreated', (args: any) => {
			io.nstudio.plugins.persona.NSCPersona.init(args.activity);
			this.#activity = args.activity;
		});

		Application.android.on('activityDestroyed', (args: any) => {
			if (this.#activity === args.activity) {
				this.#activity = undefined;
				Application.android.once('activityCreated', (args: any) => {
					io.nstudio.plugins.persona.NSCPersona.init(args.activity);
					this.#activity = args.activity;
				});
			}
		});
	}

	static fromTemplate(template: string): Inquiry {
		const builder = io.nstudio.plugins.persona.NSCPersona.fromTemplate(template);
		const inquiry = new Inquiry();
		inquiry.#native = builder;
		const ref = new WeakRef(inquiry);
		inquiry.#callback = new io.nstudio.plugins.persona.NSCPersona.Callback({
			onComplete(inquiryId: string, status: string, fields: string): void {
				const owner = ref.get();
				if (owner) {
					let json = {};
					try {
						json = JSON.parse(fields);
					} catch (e) {}

					owner.#onComplete?.(inquiryId, status, json);
				}
			},
			onCancel(inquiryId: string, sessionToken: string): void {
				const owner = ref.get();
				if (owner) {
					owner.#onCancel?.(inquiryId, sessionToken);
				}
			},
			onError(error: string): void {
				const owner = ref.get();
				if (owner) {
					owner.#onError?.(new Error(error));
				}
			},
		});
		builder.setCallback(inquiry.#callback);
		return inquiry;
	}

	static fromTemplateVersion(template: string): Inquiry {
		const builder = io.nstudio.plugins.persona.NSCPersona.fromTemplateVersion(template);
		const inquiry = new Inquiry();
		inquiry.#native = builder;
		const ref = new WeakRef(inquiry);
		inquiry.#callback = new io.nstudio.plugins.persona.NSCPersona.Callback({
			onComplete(inquiryId: string, status: string, fields: string): void {
				const owner = ref.get();
				if (owner) {
					let json = {};
					try {
						json = JSON.parse(fields);
					} catch (e) {}

					owner.#onComplete?.(inquiryId, status, json);
				}
			},
			onCancel(inquiryId: string, sessionToken: string): void {
				const owner = ref.get();
				if (owner) {
					owner.#onCancel?.(inquiryId, sessionToken);
				}
			},
			onError(error: string): void {
				const owner = ref.get();
				if (owner) {
					owner.#onError?.(new Error(error));
				}
			},
		});
		builder.setCallback(inquiry.#callback);
		return inquiry;
	}

	static fromInquiry(inquiry: string): Inquiry {
		const builder = io.nstudio.plugins.persona.NSCPersona.fromInquiry(inquiry);
		const ret = new Inquiry();
		ret.#native = builder;
		const ref = new WeakRef(ret);
		ret.#callback = new io.nstudio.plugins.persona.NSCPersona.Callback({
			onComplete(inquiryId: string, status: string, fields: string): void {
				const owner = ref.get();
				if (owner) {
					let json = {};
					try {
						json = JSON.parse(fields);
					} catch (e) {}

					owner.#onComplete?.(inquiryId, status, json);
				}
			},
			onCancel(inquiryId: string, sessionToken: string): void {
				const owner = ref.get();
				if (owner) {
					owner.#onCancel?.(inquiryId, sessionToken);
				}
			},
			onError(error: string): void {
				const owner = ref.get();
				if (owner) {
					owner.#onError?.(new Error(error));
				}
			},
		});
		builder.setCallback(ret.#callback);
		return ret;
	}

	environment(value: Environment): Inquiry {
		this.#native.environment(java.lang.Integer.valueOf(value as any));
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
		const builder = new com.withpersona.sdk2.inquiry.Fields.Builder();
		keys.forEach((key) => {
			const value = fields[key];
			switch (typeof value) {
				case 'boolean':
				case 'number':
				case 'string':
					builder.field(key, value as any);
					break;
			}
		});
		if (keys.length) {
			this.#native.fields(builder.build());
		}
		return this;
	}

	onComplete(complete?: (inquiryId, status, fields) => void) {
		this.#onComplete = complete;
		return this;
	}

	onCancel(cancel?: (inquiryId, sessionToken) => void) {
		this.#onCancel = cancel;
		return this;
	}

	onError(error?: (error) => void) {
		this.#onError = error;
		return this;
	}

	build() {
		this.#native.build();
		return this;
	}

	start() {
		this.#native.start();
	}
}
