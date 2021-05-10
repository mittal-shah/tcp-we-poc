import { LaborStandardAssignmentContext } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { LaborStandardAssignmentImpl } from '../domain/labor-standard-assignment.impl';
import { FilterDataImpl } from '../data/filter.data.impl';

export class LaborStandardAssignmentContextImpl extends AbstractImpl implements LaborStandardAssignmentContext {
  ArrLaborStandardAssignments: LaborStandardAssignmentImpl[] | undefined = [];

  BlnCanAssign: boolean | undefined = false;

  BlnCanEdit: boolean | undefined = false;

  BlnCanUnassign: boolean | undefined = false;

  ObjFilterData: FilterDataImpl | undefined;

  StrCommand: string | undefined = '';

  StrExpectedAmount: string | undefined = '';

  StrHelp: string | undefined = '';

  StrInheritedFrom: string | undefined = '';

  StrTitle: string | undefined = '';

  init(data: LaborStandardAssignmentContext) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrLaborStandardAssignments', LaborStandardAssignmentImpl);

    this.ObjFilterData =
      this.ObjFilterData !== undefined ? AbstractImpl.fromJSON(data.ObjFilterData, FilterDataImpl) : undefined;
  }
}
