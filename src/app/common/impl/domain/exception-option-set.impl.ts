import ExceptionOptionContextImpl from '../context/exception-option.context.impl';
import {ExceptionOptionSetModel} from '../../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class ExceptionOptionSetImpl extends AbstractImpl implements ExceptionOptionSetModel {
  ObjApprovalExceptionOptionContext?: ExceptionOptionContextImpl | undefined;

  ObjScheduleExceptionOptionContext?: ExceptionOptionContextImpl | undefined;

  ObjShiftExceptionOptionContext?: ExceptionOptionContextImpl | undefined;

  ObjSubstituteExceptionOptionContext?: ExceptionOptionContextImpl | undefined;

  init(data?: ExceptionOptionSetModel) {
    if (!data) {
      return;
    }

    this.ObjApprovalExceptionOptionContext =
      this.ObjApprovalExceptionOptionContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjApprovalExceptionOptionContext, ExceptionOptionContextImpl)
        : undefined;

    this.ObjScheduleExceptionOptionContext =
      this.ObjScheduleExceptionOptionContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjScheduleExceptionOptionContext, ExceptionOptionContextImpl)
        : undefined;

    this.ObjShiftExceptionOptionContext =
      this.ObjShiftExceptionOptionContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjShiftExceptionOptionContext, ExceptionOptionContextImpl)
        : undefined;

    this.ObjSubstituteExceptionOptionContext =
      this.ObjSubstituteExceptionOptionContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjSubstituteExceptionOptionContext, ExceptionOptionContextImpl)
        : undefined;
  }
}
