import AbstractEditableInputImpl from './abstract-editable.input.impl';
import { EditableHourMinuteInputModel } from '../../../declaration';
import { DateTimeFormatter } from '@tcp/tcp-core';

export class HourMinuteInputImpl extends AbstractEditableInputImpl implements EditableHourMinuteInputModel {
  HrmValue: string | undefined = '';

  IntMaxMinutes: number | undefined = 0;

  IntMinMinutes: number | undefined = 0;

  StrHelp: string | undefined = '';

  isDecimal: boolean | undefined = false;

  getMinuteDifferenceFromMaxValue() {
    const minuteValue = this.getMinutes() > 0 ? this.getMinutes() : 0;
    return (this.IntMaxMinutes && this.IntMaxMinutes - minuteValue) || 0;
  }

  getMinutes() {
    if (!this.HrmValue) {
      return 0;
    }

    return DateTimeFormatter.getMinutesFromFormattedDate(this.HrmValue, this.isDecimal);
  }

  getFormattedValue(value: string | undefined) {
    return DateTimeFormatter.formatDecimalHoursToColonFormat(value);
  }

  getMaxValue() {
    return this.IntMaxMinutes;
  }

  getMinValue() {
    return this.IntMinMinutes;
  }

  getValue() {
    return this.HrmValue;
  }

  getMaxLength(): number | undefined {
    const maxLength =
      super.getMaxLength() ||
      DateTimeFormatter.formatDecimalHoursToColonFormat(String(this.IntMaxMinutes || 0 / 60)).length;
    return maxLength || undefined;
  }

  isValidMaxValue() {
    const minutes = this.getMinutes();

    if (!this.isInputAccessible() || !this.IntMaxMinutes || !minutes) {
      return true;
    }

    return minutes <= this.IntMaxMinutes;
  }

  isValidMinValue() {
    const minutes = this.getMinutes();

    if (!this.isInputAccessible() || this.IntMinMinutes === undefined || minutes === undefined) {
      return true;
    }

    return minutes >= this.IntMinMinutes;
  }

  isValidValue() {
    return this.isValidMinValue() && this.isValidMaxValue();
  }

  setValue(value: string | undefined) {
    this.HrmValue = this.getFormattedValue(value);
  }

  getErrorMessage(): string | undefined {
    if (!this.isValidValue()) {
      return this.appConfig && this.appConfig.StrEnterValidHours;
    }
    return super.getErrorMessage();
  }
}
