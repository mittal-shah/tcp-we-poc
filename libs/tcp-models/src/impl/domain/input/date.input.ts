import { EditableDateInputModel } from '../../../declaration';
import AbstractEditableInput from './abstract-editable.input';
import { DateTimeFormatter } from '@tcp/tcp-core';
import { AppConfigImpl, CompanyConfigImpl } from '../../config';

export class DateInput extends AbstractEditableInput implements EditableDateInputModel {
  BlnMonthDayOnly: boolean | undefined = false;

  BlnTrackDate: boolean | undefined; // TODO: MSS - not integrated yet

  StrFormat: string | undefined = undefined;

  StrMonthDayFormat: string | undefined = undefined;

  DatDate: string | undefined = '';

  DatMaxDate: string | undefined = '';

  DatMinDate: string | undefined = '';

  DateValue: Date | undefined = undefined;

  getHintText(): string | undefined {
    return this.DatMinDate && this.DatMaxDate
      ? this.getFormattedMinDate() + ' - ' + this.getFormattedMaxDate()
      : this.appConfig?.StrEnterValidDate;
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

  initializeInput(appConfig: AppConfigImpl, companyConfig: CompanyConfigImpl) {
    super.initializeInput(appConfig, companyConfig);

    this.StrFormat = this.StrFormat
      ? DateTimeFormatter.getAdjustedDateFormat(this.StrFormat)
      : this.companyConfig.getDateFormat();

    this.StrMonthDayFormat = this.StrMonthDayFormat
      ? DateTimeFormatter.getAdjustedDateFormat(this.StrMonthDayFormat)
      : this.companyConfig.getPartialDateFormat();

    this.DateValue = this.DatDate ? DateTimeFormatter.getDate(this.DatDate) : null;

    if (this.BlnMonthDayOnly) {
      this.DatMinDate = this.DatMinDate ? this.DatMinDate : '2000-01-01';
      this.DatMaxDate = this.DatMaxDate ? this.DatMaxDate : '2000-12-31';
    }
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
    if (!(date instanceof Date)) {
      this.resetDate();
      return;
    }

    this.DateValue = date;
    this.DatDate = DateTimeFormatter.toDateString(date);
  }

  setValue(value: string | undefined) {
    if (!value) {
      this.resetDate();
      return;
    }

    const date = DateTimeFormatter.getDate(value, this.StrFormat);
    const newDate = DateTimeFormatter.toDateString(date);
    this.DatDate = date ? newDate : value;
    this.DateValue = date;
  }

  getDate(): Date | undefined {
    return this.DateValue;
  }

  getValue() {
    return DateTimeFormatter.toDateString(this.getDate(), this.getDateFormat()) || '';
  }

  getErrorMessage(): string | undefined {
    if (!this.isValidValue()) {
      if (!DateTimeFormatter.isValidISODateString(this.DatDate)) {
        return this.appConfig && this.appConfig.StrEnterValidDate;
      }

      if (!this.isValidMinValue()) {
        const message = this.appConfig && this.appConfig.StrDateUnderMinMessage;
        return message.format(this.toString(), this.getFormattedMinDate() || '');
      }

      if (!this.isValidMaxValue()) {
        const message = this.appConfig && this.appConfig.StrDateOverMaxMessage;
        return message.format(this.toString(), this.getFormattedMaxDate() || '');
      }

      return this.appConfig && this.appConfig.StrEnterValidDate;
    }

    return super.getErrorMessage();
  }

  getDateFormat() {
    return this.BlnMonthDayOnly ? this.StrMonthDayFormat : this.StrFormat;
  }

  private resetDate() {
    this.DatDate = '';
    this.DateValue = null;
  }

  private getFormattedMaxDate() {
    return this.DatMaxDate ? DateTimeFormatter.toDateString(this.getMaxValue(), this.getDateFormat()) : undefined;
  }

  private getFormattedMinDate() {
    return this.DatMinDate ? DateTimeFormatter.toDateString(this.getMinValue(), this.getDateFormat()) : undefined;
  }
}
