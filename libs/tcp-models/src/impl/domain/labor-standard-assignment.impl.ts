import { LaborStandardAssignmentModel } from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class LaborStandardAssignmentImpl extends AbstractImpl implements LaborStandardAssignmentModel {
  BlnCanEdit?: boolean | undefined = false;

  BlnCanUnassign?: boolean | undefined = false;

  LngRecordId?: number | undefined = 0;

  StrExpectedAmount?: string | undefined = '';

  StrInheritedFrom?: string | undefined = '';

  StrName?: string | undefined = '';
}
