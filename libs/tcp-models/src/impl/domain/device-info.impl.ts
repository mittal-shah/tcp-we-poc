import { DeviceInfoModel } from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class DeviceInfoImpl extends AbstractImpl implements DeviceInfoModel {
  StrDeviceModel?: string | undefined = '';

  StrDeviceName?: string | undefined = '';

  StrDevicePlatform?: string | undefined = '';

  StrDeviceUuid?: string | undefined = '';

  StrDeviceVersion?: string | undefined = '';
}
