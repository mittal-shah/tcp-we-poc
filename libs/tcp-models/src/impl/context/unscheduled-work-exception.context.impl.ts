import { UnscheduledWorkExceptionContext } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { BooleanInputImpl } from '../domain';

export class UnscheduledWorkExceptionContextImpl extends AbstractImpl implements UnscheduledWorkExceptionContext {
  ArrBooleanInputDisallowedWorkDays: BooleanInputImpl[] | undefined = [];

  ObjBooleanInputRestrictToEmployeeSchedule: BooleanInputImpl | undefined;

  StrDisallowedWorkDays: string | undefined = '';

  StrUnscheduledWorkExceptions: string | undefined = '';

  init(data: UnscheduledWorkExceptionContext) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrBooleanInputDisallowedWorkDays', BooleanInputImpl);

    this.ObjBooleanInputRestrictToEmployeeSchedule =
      this.ObjBooleanInputRestrictToEmployeeSchedule !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputRestrictToEmployeeSchedule, BooleanInputImpl)
        : undefined;
  }
}
