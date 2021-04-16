import {BadgeParseSpecModel} from '../../declarations/global';
import AbstractImpl from '../../common/impl/abstract.impl';

export default class BadgeParseSpecImpl extends AbstractImpl implements BadgeParseSpecModel {
  IntBadgeParseInformationType?: number | undefined = 0;

  IntCompanyId?: number | undefined = 0;
}
