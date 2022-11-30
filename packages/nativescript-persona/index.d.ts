import { Environment } from './common';
import { Application } from '@nativescript/core';
export { Environment };

export declare class Inquiry {
	static init();

	static fromTemplate(template: string): Inquiry;

	static fromTemplateVersion(template: string): Inquiry;

	static fromInquiry(inquiry: string): Inquiry;

	environment(value: Environment): Inquiry;

	accountId(id: string): Inquiry;

	referenceId(id: string): Inquiry;

	sessionToken(token: string): Inquiry;

	fields(fields: Record<string, string | boolean | number>): Inquiry;

	onComplete(complete?: (inquiryId: string, status: string, fields: Record<string, { type: 'string' | 'boolean' | 'date' | 'number' | 'unknown'; value: string | boolean | Date | number }>) => void): Inquiry;

	onCancel(cancel?: (inquiryId: string, sessionToken: string) => void): Inquiry;

	onError(error?: (error) => void): Inquiry;

	build(): Inquiry;

	start();
}
