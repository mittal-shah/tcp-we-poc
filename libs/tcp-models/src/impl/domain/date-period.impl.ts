import { DatePeriodModel } from '../../declaration';
import { SelectItemImpl } from './select-item.impl';

export class DatePeriodImpl extends SelectItemImpl implements DatePeriodModel {
  BlnIsHistory: boolean | undefined = false;

  BlnUseTime: boolean | undefined = false;

  DatEndDate: string | undefined = '';

  DatStartDate: string | undefined = '';

  IntPeriod: number | undefined = 0;

  StrDescription: string | undefined = '';

  TimEndTime: string | undefined = '';

  TimStartTime: string | undefined = '';
}
