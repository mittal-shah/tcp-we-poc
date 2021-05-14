import { EditableDateInputModel, InputSuffixIcon } from '../../../declaration';
import AbstractEditableInput from './abstract-editable.input';
import { AppConfigImpl } from '../../config';
import { DateTimeConstants, DateTimeFormatter } from '@tcp/tcp-core';

export class DateInput extends AbstractEditableInput implements EditableDateInputModel {
  IsPartial = false;

  StrFormat: string = DateTimeConstants.IsoDateFormat;

  StrMonthDayFormat: string = DateTimeConstants.IsoDateFormat;

  DatDate: string | undefined = '';

  DatMaxDate: string | undefined = '';

  DatMinDate: string | undefined = '';

  getHintText(appConfig: AppConfigImpl | undefined): string | undefined {
    return this.DatMinDate && this.DatMaxDate
      ? this.DatMinDate + ' - ' + this.DatMaxDate
      : appConfig?.StrEnterValidDate;
  }

  getInputSuffixIcon(): InputSuffixIcon {
    return 'calendar';
  }

  getModelValue() {
    return this.DatDate;
  }

  getMaxValue() {
    return this.DatMaxDate ? DateTimeFormatter.getDate(this.DatMaxDate) : undefined;
  }

  getMinValue() {
    return this.DatMinDate ? DateTimeFormatter.getDate(this.DatMinDate) : undefined;
  }

  getType() {
    return 'date';
  }

  isValidMaxValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.DatMaxDate) {
      return true;
    }

    const date = this.getDate();
    const maxDate = this.getMaxValue();
    return !!date && !!maxDate && date <= maxDate;
  }

  isValidMinValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.DatMinDate) {
      return true;
    }

    const date = this.getDate();
    const minDate = this.getMinValue();
    return !!date && !!minDate && date >= minDate;
  }

  isValidValue() {
    return DateTimeFormatter.isValidISODateString(this.DatDate) && this.isValidMinValue() && this.isValidMaxValue();
  }

  setDate(date: Date) {
    this.setValue(DateTimeFormatter.toDateString(date, this.StrFormat));
  }

  setValue(value: string | undefined) {
    if (!value) {
      this.DatDate = undefined;
      return;
    }

    if (this.IsPartial && value.length === this.StrMonthDayFormat.length) {
      return;
    }

    const date = DateTimeFormatter.getDate(value, this.StrFormat);
    const newDate = DateTimeFormatter.toDateString(date);
    this.DatDate = date ? newDate : value;
  }

  getDate(): Date | undefined {
    if (!this.DatDate) {
      return undefined;
    }
    return DateTimeFormatter.getDate(this.DatDate);
  }

  getValue() {
    return (
      DateTimeFormatter.toDateString(this.getDate(), this.IsPartial ? this.StrMonthDayFormat : this.StrFormat) || ''
    );
  }

  getErrorMessage(appConfig: AppConfigImpl | undefined): string | undefined {
    if (!this.isValidValue()) {
      if (!DateTimeFormatter.isValidISODateString(this.DatDate)) {
        return appConfig && appConfig.StrEnterValidDate;
      }

      if (!this.isValidMinValue()) {
        const message = appConfig && appConfig.StrDateUnderMinMessage;
        return message.format(this.toString(), this.DatMinDate || '');
      }

      if (!this.isValidMaxValue()) {
        const message = appConfig && appConfig.StrDateOverMaxMessage;
        return message.format(this.toString(), this.DatMaxDate || '');
      }

      return appConfig && appConfig.StrEnterValidDate;
    }

    return super.getErrorMessage(appConfig);
  }
}
