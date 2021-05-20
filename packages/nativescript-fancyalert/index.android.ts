import { Application, Color, Utils } from '@nativescript/core';

export * from './common';

declare var cn: any;

export enum IFancyAlertSupportedTypesAndroid {
	INFO = 0,
	HELP = 1,
	WRONG = 2,
	SUCCESS = 3,
	WARNING = 4,
	EDIT = 5,
}

const getAndroidActivity = function () {
	return Application.android.foregroundActivity || Application.android.startActivity;
};

export class TNSFancyAlert {
	public static shouldDismissOnTapOutside: boolean = false;

	public static showSuccess(title: string, subTitle?: string, closeBtnTitle?: string): Promise<void> {
		return new Promise((resolve, reject) => {
			const alert = new cn.refactor.lib.colordialog.PromptDialog(getAndroidActivity());
			alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
			alert.setDialogType(IFancyAlertSupportedTypesAndroid.SUCCESS);
			alert.setTitleText(title || 'Success!');
			alert.setContentText(subTitle || '');
			alert.setAnimationEnable(true);
			alert.setPositiveListener(
				closeBtnTitle || 'Ok',
				new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
					onClick: (dialog) => {
						dialog.dismiss();
						resolve();
					},
				})
			);
			alert.show();
		});
	}

	public static showError(title: string, subTitle?: string, closeBtnTitle?: string): Promise<void> {
		return new Promise((resolve, reject) => {
			const alert = new cn.refactor.lib.colordialog.PromptDialog(getAndroidActivity());
			alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
			alert.setDialogType(IFancyAlertSupportedTypesAndroid.WRONG);
			alert.setTitleText(title || 'Error!');
			alert.setContentText(subTitle || '');
			alert.setAnimationEnable(true);
			alert.setPositiveListener(
				closeBtnTitle || 'Ok',
				new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
					onClick: (dialog) => {
						dialog.dismiss();
						resolve();
					},
				})
			);
			alert.show();
		});
	}

	public static showNotice(title: string, subTitle?: string, closeBtnTitle?: string): Promise<void> {
		return new Promise((resolve, reject) => {
			const alert = new cn.refactor.lib.colordialog.PromptDialog(getAndroidActivity());
			alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
			alert.setDialogType(IFancyAlertSupportedTypesAndroid.HELP);
			alert.setTitleText(title || 'Notice');
			alert.setContentText(subTitle || '');
			alert.setAnimationEnable(true);
			alert.setPositiveListener(
				closeBtnTitle || 'Ok',
				new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
					onClick: (dialog) => {
						dialog.dismiss();
						resolve();
					},
				})
			);
			alert.show();
		});
	}

	public static showWarning(title: string, subTitle?: string, closeBtnTitle?: string): Promise<void> {
		return new Promise((resolve, reject) => {
			const alert = new cn.refactor.lib.colordialog.PromptDialog(getAndroidActivity());
			alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
			alert.setDialogType(IFancyAlertSupportedTypesAndroid.WARNING);
			alert.setTitleText(title || 'Warning!');
			alert.setContentText(subTitle || '');
			alert.setAnimationEnable(true);
			alert.setPositiveListener(
				closeBtnTitle || 'Ok',
				new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
					onClick: (dialog) => {
						dialog.dismiss();
						resolve();
					},
				})
			);
			alert.show();
		});
	}

	public static showEdit(title: string, subTitle?: string, closeBtnTitle?: string): Promise<any> {
		return new Promise((resolve, reject) => {
			const alert = new cn.refactor.lib.colordialog.PromptDialog(getAndroidActivity());
			alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
			alert.setDialogType(IFancyAlertSupportedTypesAndroid.EDIT); /// EDIT
			alert.setTitleText(title || 'Edit');
			alert.setContentText(subTitle || '');
			alert.setEditTextHint(subTitle || '');
			alert.setAnimationEnable(true);
			alert.setPositiveListener(
				closeBtnTitle || 'Ok',
				new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
					onClick: (dialog) => {
						dialog.dismiss();
						resolve(dialog.getEditText().getText());
					},
				})
			);
			alert.show();
		});
	}

	public static showInfo(title: string, subTitle?: string, closeBtnTitle?: string): Promise<void> {
		return new Promise((resolve, reject) => {
			const alert = new cn.refactor.lib.colordialog.PromptDialog(getAndroidActivity());
			alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
			alert.setDialogType(IFancyAlertSupportedTypesAndroid.INFO); /// Info
			alert.setTitleText(title || 'Info');
			alert.setContentText(subTitle || '');
			alert.setAnimationEnable(true);
			alert.setPositiveListener(
				closeBtnTitle || 'Ok',
				new cn.refactor.lib.colordialog.PromptDialog.OnPositiveListener({
					onClick: (dialog) => {
						dialog.dismiss();
						resolve();
					},
				})
			);
			alert.show();
		});
	}

	public static showColorDialog(title: string, subTitle?: string, okBtnTitle?: string, cancelBtnTitle?: string, backgroundColor?: string, titleTextColor?: string, contextTextColor?: string, contentImage?: any): Promise<void> {
		return new Promise((resolve, reject) => {
			const alert = new cn.refactor.lib.colordialog.ColorDialog(getAndroidActivity());
			// alert.setCanceledOnTouchOutside(TNSFancyAlert.shouldDismissOnTapOutside);
			// alert.setDialogType(IFancyAlertSupportedTypesAndroid.HELP);
			alert.setTitle(title || 'Title');
			alert.setContentText(subTitle || '');
			if (backgroundColor) {
				alert.setColor(new Color(backgroundColor).android);
			}
			if (titleTextColor) {
				alert.setTitleTextColor(new Color(titleTextColor).android);
			}
			if (contextTextColor) {
				alert.setContentTextColor(new Color(contextTextColor).android);
			}
			if (contentImage) {
				const context = Utils.android.getApplicationContext();
				alert.setContentImage(context.getResources().getIdentifier(contentImage, null, context.getPackageName()));
			}
			alert.setAnimationEnable(true);
			alert.setPositiveListener(
				okBtnTitle || 'Ok',
				new cn.refactor.lib.colordialog.ColorDialog.OnPositiveListener({
					onClick: (dialog) => {
						dialog.dismiss();
						resolve();
					},
				})
			);
			if (cancelBtnTitle) {
				alert.setNegativeListener(
					cancelBtnTitle || 'Cancel',
					new cn.refactor.lib.colordialog.ColorDialog.OnNegativeListener({
						onClick: (dialog) => {
							dialog.dismiss();
							reject();
						},
					})
				);
			}
			alert.show();
		});
	}
}
