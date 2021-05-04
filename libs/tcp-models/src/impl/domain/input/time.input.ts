import { EditableTimeInputModel, InputSuffixIcon } from '../../../declaration';
import AbstractEditableInput from './abstract-editable.input';
import { DateTimeConstants, DateTimeFormatter } from '@tcp/tcp-core';
import { AppConfigImpl } from '../../config';

export class TimeInput extends AbstractEditableInput implements EditableTimeInputModel {
  StrFormat: string = DateTimeConstants.IsoTimeFormat;

  TimMaxValue: string | undefined = '';

  TimMinValue: string | undefined = '';

  TimValue: string | undefined = '';

  getHintText(appConfig: AppConfigImpl | undefined): string | undefined {
    return this.TimMinValue && this.TimMaxValue
      ? this.TimMinValue + ' - ' + this.TimMaxValue
      : appConfig?.StrEnterValidTime;
  }

  getInputSuffixIcon(): InputSuffixIcon {
    return 'clock';
  }

  getModelValue() {
    return this.TimValue;
  }

  getMaxTime() {
    return this.TimMaxValue ? DateTimeFormatter.getTime(this.TimMaxValue) : undefined;
  }

  getMinTime() {
    return this.TimMinValue ? DateTimeFormatter.getTime(this.TimMinValue) : undefined;
  }

  getType() {
    return 'time';
  }

  isValidMaxValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.TimMaxValue) {
      return true;
    }

    const date = this.getTime();
    const maxTime = this.getMaxTime();
    return !!date && !!maxTime && date <= maxTime;
  }

  isValidMinValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.TimMinValue) {
      return true;
    }

    const date = this.getTime();
    const minTime = this.getMinTime();
    return !!date && !!minTime && date >= minTime;
  }

  isValidValue() {
    return this.isValidMinValue() && this.isValidMaxValue() && DateTimeFormatter.isValidISOTimeString(this.TimValue);
  }

  getTime(): Date | undefined {
    if (!this.TimValue) {
      return undefined;
    }
    return DateTimeFormatter.getTime(this.TimValue);
  }

  setTime(date: Date) {
    this.setValue(DateTimeFormatter.toTimeString(date, this.StrFormat));
  }

  getValue() {
    return DateTimeFormatter.toTimeString(this.getTime(), this.StrFormat);
  }

  setValue(value: string | undefined) {
    if (!value) {
      this.TimValue = undefined;
      return;
    }
    const time = DateTimeFormatter.getTime(value, this.StrFormat);
    this.TimValue = time ? DateTimeFormatter.toTimeString(time) : value;
  }

  getErrorMessage(appConfig: AppConfigImpl | undefined): string | undefined {
    if (!this.isValidValue()) {
      return appConfig && appConfig.StrEnterValidTime;
    }
    return super.getErrorMessage(appConfig);
  }
}
