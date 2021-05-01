import { BadgeParseSpecModel } from '../../../../../../../libs/tcp-models/src/declarations/global';
import AbstractImpl from '../../../../../../../libs/tcp-models/src/impl/abstract.impl';

export default class BadgeParseSpecImpl extends AbstractImpl implements BadgeParseSpecModel {
  IntBadgeParseInformationType?: number | undefined = 0;

  IntCompanyId?: number | undefined = 0;
}
