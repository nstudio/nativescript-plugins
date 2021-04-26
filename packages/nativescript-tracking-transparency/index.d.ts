import { TrackingTransparencyCommon, TrackingStatus } from './common';
export { TrackingStatus };
export declare class TrackingTransparency extends TrackingTransparencyCommon {
	public static getTrackingStatus(): TrackingStatus;
	public static requestTrackingPermission(): Promise<TrackingStatus>;
}
