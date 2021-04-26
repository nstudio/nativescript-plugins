import { TrackingStatus, TrackingTransparencyCommon } from './common';
export { TrackingStatus };
export class TrackingTransparency extends TrackingTransparencyCommon {
	public static getTrackingStatus(): TrackingStatus {
		if (parseFloat(UIDevice.currentDevice.systemVersion) >= 14) {
			return TrackingTransparency._handleStatus(ATTrackingManager.trackingAuthorizationStatus);
		}
		return TrackingStatus.Unavailable;
	}

	private static _handleStatus(status: ATTrackingManagerAuthorizationStatus): TrackingStatus {
		switch (status) {
			case ATTrackingManagerAuthorizationStatus.Authorized:
				return TrackingStatus.Authorized;
			case ATTrackingManagerAuthorizationStatus.Denied:
				return TrackingStatus.Denied;
			case ATTrackingManagerAuthorizationStatus.Restricted:
				return TrackingStatus.Restricted;
			case ATTrackingManagerAuthorizationStatus.NotDetermined:
				return TrackingStatus.NotDetermined;
		}
	}

	public static requestTrackingPermission() {
		return new Promise((resolve, reject) => {
			if (parseFloat(UIDevice.currentDevice.systemVersion) >= 14) {
				ATTrackingManager.requestTrackingAuthorizationWithCompletionHandler((status) => {
					resolve(TrackingTransparency._handleStatus(status));
				});
			} else {
				resolve(TrackingStatus.Unavailable);
			}
		});
	}
}
