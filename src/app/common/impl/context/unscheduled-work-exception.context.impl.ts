import BooleanInputImpl from '../domain/input/boolean.input.impl';
import {UnscheduledWorkExceptionContext} from '../../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class UnscheduledWorkExceptionContextImpl
  extends AbstractImpl
  implements UnscheduledWorkExceptionContext {
  ArrBooleanInputDisallowedWorkDays?: BooleanInputImpl[] | undefined = [];

  ObjBooleanInputRestrictToEmployeeSchedule?: BooleanInputImpl | undefined;

  StrDisallowedWorkDays?: string | undefined = '';

  StrUnscheduledWorkExceptions?: string | undefined = '';

  init(data?: UnscheduledWorkExceptionContext) {
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
