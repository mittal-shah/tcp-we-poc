import AbstractEditableInput from './abstract-editable.input';
import AppConfigImpl from '../../config/app.config.impl';
import {EditableDecimalInputModel, KeyboardTypeOptions} from '../../../../declarations/editable-input';
import DateTimeFormatter from '../../../formatter/date-time.formatter';
import RegExpValidator from '../../../constant/reg-exp-validators.constant';
import Util from '../../../../util/util';

export default class DecimalInput extends AbstractEditableInput implements EditableDecimalInputModel {
  BlnShouldSkipFixedFormatting?: boolean | undefined = false;

  IntPrecision?: number | undefined = 0;

  StrMaxValue?: string | undefined = '';

  StrMinValue?: string | undefined = '';

  StrRegExp?: string | undefined = '';

  StrValue?: string | undefined = '';

  getModelValue() {
    return this.StrValue && this.StrValue.includes('.')
      ? this.getStandardHourMinuteValue(this.StrValue)
      : this.getParsedValue(this.StrValue);
  }

  getKeyboardType(): KeyboardTypeOptions {
    return 'decimal-pad';
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
    if (!Util.isDefinedOrExist(value) || isNaN(Number(value))) {
      return String(value);
    }
    const isValidRegEx = RegExpValidator.DECIMAL.test(String(value));
    return isValidRegEx ? Number(value) : String(value);
  }

  private getStandardHourMinuteValue(value: string) {
    return DateTimeFormatter.toTimeStringFromHundredths(value);
  }
}
