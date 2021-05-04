import AbstractEditableInput from './abstract-editable.input';
import { EditableDecimalInputModel } from '../../../declaration';
import RegExpValidator from '../../../constants/reg-exp-validators.constant';
import { AppConfigImpl } from '../../config';
import { DateTimeFormatter } from '../../../formatter';
import { CommonUtil } from '@tcp/tcp-util';

export class DecimalInput extends AbstractEditableInput implements EditableDecimalInputModel {
  BlnShouldSkipFixedFormatting: boolean | undefined = false;

  IntPrecision: number | undefined = 0;

  StrMaxValue: string | undefined = '';

  StrMinValue: string | undefined = '';

  getHintText(appConfig: AppConfigImpl | undefined): string | undefined {
    return this.StrMinValue || this.StrMaxValue
      ? Number(this.StrMinValue) + ' - ' + Number(this.StrMaxValue)
      : appConfig?.StrEnterValidDecimal;
  }

  getModelValue() {
    return this.StrValue && this.StrValue.includes('.')
      ? this.getStandardHourMinuteValue(this.StrValue)
      : this.getParsedValue(this.StrValue);
  }

  getValue() {
    return this.StrValue || '';
  }

  getFormattedValue(value: string | undefined) {
    if (!value) {
      return '';
    }

    const isValidValue = RegExpValidator.DECIMAL.test(value);
    if (!isValidValue) {
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

  isValidRegEx() {
    if (!this.getValue()) {
      return true;
    }

    if (this.StrRegExp) {
      const validator = new RegExp(this.StrRegExp);
      return validator.test(this.toString());
    }

    return RegExpValidator.DECIMAL.test(this.toString());
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
    return this.isValidMinValue() && this.isValidMaxValue() && this.isValidRegEx();
  }

  setValue(value: string) {
    this.StrValue = this.getFormattedValue(value);
  }

  getMaxLength(): number | undefined {
    const maxLength = super.getMaxLength() || this.getFullValueLength();
    return maxLength || undefined;
  }

  getErrorMessage(appConfig: AppConfigImpl | undefined): string | undefined {
    if (!this.isValidValue()) {
      return appConfig && appConfig.StrEnterValidDecimal;
    }
    return super.getErrorMessage(appConfig);
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
    if (!CommonUtil.isDefinedOrExist(value) || isNaN(Number(value))) {
      return String(value);
    }
    const isValidRegEx = RegExpValidator.DECIMAL.test(String(value));
    return isValidRegEx ? Number(value) : String(value);
  }

  private getStandardHourMinuteValue(value: string) {
    return DateTimeFormatter.toTimeStringFromHundredths(value);
  }
}
