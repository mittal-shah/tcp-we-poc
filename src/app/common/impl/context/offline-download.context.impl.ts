import {OfflineDownloadContext} from '../../declarations/global';

export default class OfflineDownloadContextImpl implements OfflineDownloadContext {
  StrClientPlatformId?: string | undefined = '';

  StrCompanyNamespace?: string | undefined = '';

  StrConfirmationValue?: string | undefined = '';

  StrKioskID?: string | undefined = '';
}
