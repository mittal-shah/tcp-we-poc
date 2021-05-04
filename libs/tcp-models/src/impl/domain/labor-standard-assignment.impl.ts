import { LaborStandardAssignmentModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class LaborStandardAssignmentImpl extends AbstractImpl implements LaborStandardAssignmentModel {
  BlnCanEdit: boolean | undefined = false;

  BlnCanUnassign: boolean | undefined = false;

  LngRecordId: number | undefined = 0;

  StrExpectedAmount: string | undefined = '';

  StrInheritedFrom: string | undefined = '';

  StrName: string | undefined = '';
}
