import { OfflineDownloadContext } from '../../declaration';

export class OfflineDownloadContextImpl implements OfflineDownloadContext {
  StrClientPlatformId: string | undefined = '';

  StrCompanyNamespace: string | undefined = '';

  StrConfirmationValue: string | undefined = '';

  StrKioskID: string | undefined = '';
}
