import { GeopositionModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude: number | null;
  heading: number | null;
  speed: number | null;
  altitudeAccuracy: number | null;
}

export interface GeoPosition {
  coords: GeoCoordinates;
  timestamp: number;
  mocked: boolean;
}

export class GeopositionImpl extends AbstractImpl implements GeopositionModel {
  DblLatitude: number | undefined = 0;

  DblLongitude: number | undefined = 0;

  IntAccuracy: number | undefined = 0;

  StrTimestamp: string | undefined = '';

  copyDeviceGeoPosition(deviceGeolocation: GeoPosition) {
    this.DblLatitude = deviceGeolocation.coords.latitude;
    this.DblLongitude = deviceGeolocation.coords.longitude;
    this.IntAccuracy = parseInt(String(deviceGeolocation.coords.accuracy), 10);
    this.StrTimestamp = String(deviceGeolocation.timestamp);
  }
}
