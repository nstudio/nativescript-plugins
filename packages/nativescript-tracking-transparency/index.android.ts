import { TrackingStatus, TrackingTransparencyCommon } from './common';
export { TrackingStatus };
export class TrackingTransparency extends TrackingTransparencyCommon {
	public static getTrackingStatus(): TrackingStatus {
		return TrackingStatus.Unavailable;
	}
	public static requestTrackingPermission() {
		return new Promise((resolve, reject) => {
			resolve(TrackingStatus.Unavailable);
		});
	}
}
