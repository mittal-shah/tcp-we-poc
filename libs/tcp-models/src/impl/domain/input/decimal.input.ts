import AbstractEditableInput from './abstract-editable.input';
import { EditableDecimalInputModel } from '../../../declaration';
import RegExPattern from '../../../constants/reg-ex-pattern.constant';
import { DateTimeFormatter } from '@tcp/tcp-core';

export class DecimalInput extends AbstractEditableInput implements EditableDecimalInputModel {
  BlnShouldSkipFixedFormatting: boolean | undefined = false;

  IntPrecision: number | undefined = 0;

  StrMaxValue: string | undefined = '';

  StrMinValue: string | undefined = '';

  StrRegExp = RegExPattern.DECIMAL;

  getHintText(): string | undefined {
    return this.StrMinValue || this.StrMaxValue
      ? Number(this.StrMinValue) + ' - ' + Number(this.StrMaxValue)
      : this.appConfig?.StrEnterValidDecimal;
  }

  getModelValue() {
    return this.StrValue && this.StrValue.includes('.')
      ? this.getStandardHourMinuteValue(this.StrValue)
      : this.getParsedValue(this.StrValue);
  }

  getMaxValue() {
    return this.StrMaxValue;
  }

  getMinValue() {
    return this.StrMinValue;
  }

  getValue() {
    return this.StrValue || '';
  }

  getFormattedValue(value: string | undefined) {
    if (!value) {
      return '';
    }

    if (!this.isValidRegEx(value)) {
      return value;
    }

    const dblValue = Number(String(value));
    if (isNaN(dblValue)) {
      return value;
    }

    if (this.BlnShouldSkipFixedFormatting) {
      return String(dblValue);
    }

    return dblValue.toFixed(this.getDecimalPlaces());
  }

  getPlaceholderText(): string {
    return this.StrMaxValue ? String(this.StrMaxValue) : super.getPlaceholderText();
  }

  getAdjustedNumberValue() {
    return this.StrValue ? this.getParsedValue(this.StrValue) : undefined;
  }

  getType() {
    return 'number';
  }

  isValidMaxValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.StrMaxValue) {
      return true;
    }

    const value = this.getAdjustedNumberValue();
    return value === undefined || value <= this.getParsedValue(this.StrMaxValue);
  }

  isValidMinValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.StrMinValue) {
      return true;
    }

    const value = this.getAdjustedNumberValue();
    return value === undefined || value >= this.getParsedValue(this.StrMinValue);
  }

  isValidValue() {
    return this.isValidMinValue() && this.isValidMaxValue();
  }

  setValue(value: string) {
    this.StrValue = this.getFormattedValue(value);
  }

  getMaxLength(): number | undefined {
    const maxLength = super.getMaxLength() || this.getFullValueLength();
    return maxLength || undefined;
  }

  getErrorMessage(): string | undefined {
    if (!this.isValidValue() || !this.isValidRegEx()) {
      return this.appConfig && this.appConfig.StrEnterValidDecimal;
    }
    return super.getErrorMessage();
  }

  private getFullValueLength() {
    const maxBaseLength = String(this.StrMaxValue).length;
    const decimalCharLength = 1;
    const decimalPlacesLength = this.getDecimalPlaces();
    const finalLength = maxBaseLength + decimalCharLength + decimalPlacesLength;

    return !maxBaseLength ? maxBaseLength : finalLength;
  }

  private getDecimalPlaces() {
    if (this.IntPrecision) {
      return Number(this.IntPrecision);
    }

    if (this.StrMaxValue && this.StrMaxValue.indexOf('.') > 0) {
      return this.StrMaxValue.substr(this.StrMaxValue.indexOf('.'), this.StrMaxValue.length).length - 1;
    }

    return 0;
  }

  private getParsedValue(value: string | number | undefined) {
    if (!value.isDefinedOrExist() || isNaN(Number(value))) {
      return String(value);
    }
    return this.isValidRegEx(String(value)) ? Number(value) : String(value);
  }

  private getStandardHourMinuteValue(value: string) {
    return DateTimeFormatter.toTimeStringFromHundredths(value);
  }
}
