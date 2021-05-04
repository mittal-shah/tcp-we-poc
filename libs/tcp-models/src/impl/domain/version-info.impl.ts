import { VersionInfoModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class VersionInfoImpl extends AbstractImpl implements VersionInfoModel {
  StrApplication: string | undefined = '';

  StrClient: string | undefined = '';

  StrRevision: string | undefined = '';

  StrServer: string | undefined = '';

  StrCodePushVersion: string | undefined = '';
}
