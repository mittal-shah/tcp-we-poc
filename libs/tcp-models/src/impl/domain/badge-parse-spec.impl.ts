import { BadgeParseSpecModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class BadgeParseSpecImpl extends AbstractImpl implements BadgeParseSpecModel {
  IntBadgeParseInformationType: number | undefined = 0;

  IntCompanyId: number | undefined = 0;
}
