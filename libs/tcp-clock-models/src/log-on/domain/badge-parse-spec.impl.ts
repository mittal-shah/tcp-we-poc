import { AbstractImpl, BadgeParseSpecModel } from '@tcp/tcp-models';

export class BadgeParseSpecImpl extends AbstractImpl implements BadgeParseSpecModel {
  IntBadgeParseInformationType: number | undefined = 0;

  IntCompanyId: number | undefined = 0;
}
