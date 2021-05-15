import { EditableTimeInputModel, InputSuffixIcon } from '../../../declaration';
import AbstractEditableInput from './abstract-editable.input';
import { DateTimeConstants, DateTimeFormatter } from '@tcp/tcp-core';

export class TimeInput extends AbstractEditableInput implements EditableTimeInputModel {
  StrFormat: string = DateTimeConstants.IsoTimeFormat;

  TimMaxValue: string | undefined = '';

  TimMinValue: string | undefined = '';

  TimValue: string | undefined = '';

  getHintText(): string | undefined {
    return this.TimMinValue && this.TimMaxValue
      ? this.TimMinValue + ' - ' + this.TimMaxValue
      : this.appConfig?.StrEnterValidTime;
  }

  getInputSuffixIcon(): InputSuffixIcon {
    return 'clock';
  }

  getModelValue() {
    return this.TimValue;
  }

  getMaxValue() {
    return this.TimMaxValue ? DateTimeFormatter.getTime(this.TimMaxValue) : undefined;
  }

  getMinValue() {
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
    const maxTime = this.getMaxValue();
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
    const minTime = this.getMinValue();
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

  getErrorMessage(): string | undefined {
    if (!this.isValidValue()) {
      return this.appConfig && this.appConfig.StrEnterValidTime;
    }
    return super.getErrorMessage();
  }
}
