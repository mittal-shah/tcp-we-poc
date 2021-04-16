import {VersionInfoModel} from '../../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class VersionInfoImpl extends AbstractImpl implements VersionInfoModel {
  StrApplication?: string | undefined = '';

  StrClient?: string | undefined = '';

  StrRevision?: string | undefined = '';

  StrServer?: string | undefined = '';
}
