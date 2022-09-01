
declare class NSCInquiryField extends NSObject {

	static alloc(): NSCInquiryField; // inherited from NSObject

	static new(): NSCInquiryField; // inherited from NSObject

	readonly type: string;

	readonly value: any;
}

declare class NSCPersona extends NSObject {

	static alloc(): NSCPersona; // inherited from NSObject

	static fromInquiryWithInquiry(inquiry: string): NSCPersona;

	static fromTemplateVersionWithTemplateVersion(templateVersion: string): NSCPersona;

	static fromTemplateWithTemplate(template_: string): NSCPersona;

	static new(): NSCPersona; // inherited from NSObject

	accountId(id: string): this;

	build(): this;

	environment(value: NSCPersonaEnvironment): this;

	fields(fields: NSDictionary<any, any>): this;

	inquiryCanceledWithInquiryIdSessionToken(inquiryId: string, sessionToken: string): void;

	inquiryError(error: NSError): void;

	onCancel(cancel: (p1: string, p2: string) => void): this;

	onComplete(complete: (p1: string, p2: string, p3: NSDictionary<any, any>) => void): this;

	onError(error: (p1: NSError) => void): this;

	referenceId(id: string): this;

	sessionToken(token: string): this;

	start(controller: UIViewController): void;
}

declare const enum NSCPersonaEnvironment {

	Sandbox = 0,

	Production = 1
}
