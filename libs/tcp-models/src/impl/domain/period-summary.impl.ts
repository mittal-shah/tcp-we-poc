import { PeriodSummaryModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class PeriodSummaryImpl extends AbstractImpl implements PeriodSummaryModel {
  StrCompOverTime1Hours: string | undefined = '';

  StrCompOverTime2Hours: string | undefined = '';

  StrCompTimeHours: string | undefined = '';

  StrContractHours: string | undefined = '';

  StrLeaveHours: string | undefined = '';

  StrOverallHours: string | undefined = '';

  StrOvertime1Hours: string | undefined = '';

  StrOvertime2Hours: string | undefined = '';

  StrRegularHours: string | undefined = '';
}
