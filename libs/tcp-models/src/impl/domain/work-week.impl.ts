import { WorkDayModel, WorkWeekModel } from '../../declarations/global';
import PeriodBreakdownContextImpl from '../context/period.breakdown.context.impl';
import MenuImpl from './menu.impl';
import WorkDayImpl from './work-day.impl';
import AbstractImpl from '../abstract.impl';

export default class WorkWeekImpl extends AbstractImpl implements WorkWeekModel {
  ArrWorkDays?: WorkDayModel[] | undefined = [];

  BlnAreAllSegmentsApproved?: boolean | undefined = false;

  BlnCanApprove?: boolean | undefined = false;

  BlnCanAutoFill?: boolean | undefined = false;

  ObjAutoFillMenu?: MenuImpl | undefined = undefined;

  ObjPeriodBreakdownContext?: PeriodBreakdownContextImpl | undefined = undefined;

  StrFormattedWeekTitle?: string | undefined = '';

  init(data?: WorkWeekModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrWorkDays', WorkDayImpl);

    this.ObjAutoFillMenu =
      this.ObjAutoFillMenu !== undefined ? AbstractImpl.fromJSON(data.ObjAutoFillMenu, MenuImpl) : undefined;

    this.ObjPeriodBreakdownContext =
      this.ObjPeriodBreakdownContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjPeriodBreakdownContext, PeriodBreakdownContextImpl)
        : undefined;
  }
}
