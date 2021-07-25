import { DemoSharedBase } from '../utils';
import { TNSDynatrace, DynatraceStartupConfiguration, UserPrivacyOptions, DataCollectionLevel } from '@nstudio/nativescript-dynatrace';
import { Dialogs } from '@nativescript/core';

export class DemoSharedNativescriptDynatrace extends DemoSharedBase {
	constructor() {
		super();
		const opts = new UserPrivacyOptions();
		opts.crashReportingOptedIn = true;
		opts.dataCollectionLevel = DataCollectionLevel.UserBehavior;
		TNSDynatrace.applyUserPrivacyOptions(opts).then(() => {
			const action = TNSDynatrace.enterAction('DemoSharedNativescriptDynatrace');
			TNSDynatrace.identifyUser('triniwiz', action);
			action.reportEvent('constructor');
			action.reportValue('number', 1);
			action.reportValue('number', 2.0);
			action.reportValue('string', 'help');
			action.leaveAction();
			console.log(TNSDynatrace.getUserPrivacyOptions());
			TNSDynatrace.flushEvents();
		});
	}

	testIt() {
		Dialogs.alert('Test it!');
	}
}
