import { EventData, Page, Dialogs } from '@nativescript/core';
import { DemoSharedNativescriptPersona } from '@demo/shared';
import { Inquiry, Environment } from '@nstudio/nativescript-persona';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPersona {
	startFromTemplate() {
		Inquiry.fromTemplate('my_template_id')
			.environment(Environment.SANDBOX)
			// .referenceId('myReference')
			// .fields({
			// 	nameFirst: 'Alexander',
			// 	nameLast: 'example',
			// })
			.onComplete((inquiryId, status, fields) => {
				setTimeout(() => {
					Dialogs.alert({
						title: 'Complete',
						message: `Inquiry ${inquiryId} completed with status "${status}."`,
						cancelable: true,
						okButtonText: 'Ok',
					});
				});
				console.log(fields);
			})
			.onCancel((inquiryId, sessionToken) => {
				setTimeout(() => {
					Dialogs.alert({
						title: 'Canceled',
						message: `Inquiry ${inquiryId} was cancelled`,
						cancelable: true,
						okButtonText: 'Ok',
					});
				}, 10);
			})
			.onError((error) => {
				setTimeout(() => {
					Dialogs.alert({
						title: 'Error',
						message: error.message,
						cancelable: true,
						okButtonText: 'Ok',
					});
				});
				console.log('onError'), error;
			})
			.build()
			.start();
	}

	startFromInquiry() {
		Inquiry.fromInquiry('inq_123456').sessionToken('ABD1234567890').build().start();
	}
}
