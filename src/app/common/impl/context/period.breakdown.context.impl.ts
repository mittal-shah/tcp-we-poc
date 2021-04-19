import {PeriodBreakdownContext} from '../../declarations/global';
import PeriodSummaryImpl from '../domain/period-summary.impl';
import AbstractImpl from '../abstract.impl';

export default class PeriodBreakdownContextImpl extends AbstractImpl implements PeriodBreakdownContext {
  BlnCompTimeBreakdownEnabled?: boolean | undefined = false;

  BlnTotalContractedHoursEnabled?: boolean | undefined = false;

  BlnCompTimeEnabled?: boolean | undefined = false;

  BlnLeaveEnabled?: boolean | undefined = false;

  ObjPeriodSummary?: PeriodSummaryImpl | undefined;

  StrCompOverTime1?: string | undefined = '';

  StrCompOverTime2?: string | undefined = '';

  StrCompTime?: string | undefined = '';

  StrTotalContractedHours?: string | undefined = '';

  init(data?: PeriodBreakdownContextImpl) {
    if (!data) {
      return;
    }

    this.ObjPeriodSummary =
      this.ObjPeriodSummary !== undefined ? AbstractImpl.fromJSON(data.ObjPeriodSummary, PeriodSummaryImpl) : undefined;
  }
}
