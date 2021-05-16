import { EditableDateInputModel } from '../../../declaration';
import AbstractEditableInput from './abstract-editable.input';
import { DateTimeConstants, DateTimeFormatter } from '@tcp/tcp-core';
import { AppConfigImpl, CompanyConfigImpl } from '../../config';

export class DateInput extends AbstractEditableInput implements EditableDateInputModel {
  BlnMonthDayOnly: boolean | undefined = false;

  BlnTrackDate: boolean | undefined; // TODO: MSS - not integrated yet

  StrFormat: string = DateTimeConstants.IsoDateFormat;

  StrMonthDayFormat: string = DateTimeConstants.IsoDateFormat;

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
    if (this.companyConfig) {
      this.StrFormat = this.companyConfig.getDateFormat();
      this.StrMonthDayFormat = this.companyConfig.getPartialDateFormat();
    }
    if (this.DatDate) {
      this.DateValue = DateTimeFormatter.getDate(this.DatDate);
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
    this.setValue(DateTimeFormatter.toDateString(date, this.StrFormat));
  }

  setValue(value: string | undefined) {
    if (!value) {
      this.DatDate = undefined;
      this.DateValue = undefined;
      return;
    }

    if (this.BlnMonthDayOnly && value.length === this.StrMonthDayFormat.length) {
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
    const format = this.BlnMonthDayOnly ? this.StrMonthDayFormat : this.StrFormat;
    return DateTimeFormatter.toDateString(this.getDate(), format) || '';
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

  private getFormattedMaxDate() {
    return this.DatMaxDate ? DateTimeFormatter.toDateString(this.getMinValue(), this.StrFormat) : undefined;
  }

  private getFormattedMinDate() {
    return this.DatMinDate ? DateTimeFormatter.toDateString(this.getMinValue(), this.StrFormat) : undefined;
  }
}
