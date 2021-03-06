import { DateTimeFormatConfig } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { DateTimeFormatter } from '@tcp/tcp-core';

export class DateTimeFormatConfigImpl extends AbstractImpl implements DateTimeFormatConfig {
  BlnFormatHoursAsDecimals: boolean | undefined = false;

  IntHourFormatPrecision: number | undefined = 0;

  StrDateFormat: string | undefined = '';

  _StrTimeFormat: string | undefined = '';

  getDateFormat() {
    return DateTimeFormatter.getAdjustedDateFormat(this.StrDateFormat);
  }

  getTimeFormat() {
    return DateTimeFormatter.getAdjustedTimeFormat(this._StrTimeFormat);
  }

  getHourFormatPrecision() {
    return this.IntHourFormatPrecision;
  }
}
