import AbstractEditableInputImpl from './abstract-editable.input.impl';
import RegExPattern from '../../../constants/reg-ex-pattern.constant';
import { EditableNumberInputModel } from '../../../declaration';
import { CommonUtil } from '@tcp/tcp-util';

export class NumberInputImpl extends AbstractEditableInputImpl implements EditableNumberInputModel {
  BlnIsMaskedValue: boolean | undefined = false;

  IntMaxValue: number | undefined;

  IntMinValue: number | undefined = 0;

  IntValue: number | undefined;

  StrRegExp = RegExPattern.NUMBER;

  private LeadingZerosCount: number | undefined = 0;

  getFormattedValue(value: string | undefined) {
    return value;
  }

  getHintText(): string | undefined {
    return this.IntMinValue || this.IntMaxValue
      ? Number(this.IntMinValue) + ' - ' + Number(this.IntMaxValue)
      : super.getHintText();
  }

  getType() {
    return this.BlnIsMaskedValue ? 'password' : 'number';
  }

  isSecuredField() {
    return !!this.BlnIsMaskedValue;
  }

  isValidMaxValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.IntMaxValue) {
      return true;
    }

    return this.IntValue !== undefined && this.IntValue <= this.IntMaxValue;
  }

  isValidMinValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.IntMinValue) {
      return true;
    }

    return this.IntValue !== undefined && this.IntValue >= this.IntMinValue;
  }

  isValidValue() {
    return this.isValidMinValue() && this.isValidMaxValue();
  }

  getPlaceholderText(): string {
    return this.IntMaxValue ? String(this.IntMaxValue) : super.getPlaceholderText();
  }

  getMaxValue() {
    return this.IntMaxValue ? Number(this.IntMaxValue) : undefined;
  }

  getMinValue() {
    return this.IntMinValue ? Number(this.IntMinValue) : undefined;
  }

  getValue() {
    return this.padNumberValueIfNeeded(this.IntValue);
  }

  setValue(value: number | undefined) {
    if (CommonUtil.isNullOrUndefined(value) || String(value).isEmptyOrSpaces()) {
      this.IntValue = undefined;
    } else {
      this.updateLeadingZerosCount(String(value));
      this.IntValue = !this.isValidRegEx(String(value)) || isNaN(Number(value)) ? value : Number(value);
    }
  }

  toString() {
    return String(this.getValue() === undefined ? '' : this.getValue());
  }

  getMaxLength(): number | undefined {
    const maxLength = super.getMaxLength() || String(this.IntMaxValue).length;
    return maxLength || undefined;
  }

  getErrorMessage() {
    if (!this.isValidValue() || !this.isValidRegEx()) {
      return this.appConfig && this.appConfig.StrEnterValidNumeric;
    }
    return super.getErrorMessage();
  }

  private updateLeadingZerosCount(value: string) {
    const zerosCount = value.match(/^0+/);
    this.LeadingZerosCount = zerosCount && zerosCount.length ? zerosCount[0].length : 0;
  }

  private padNumberValueIfNeeded(value: number | undefined) {
    if (!this.LeadingZerosCount) {
      return value !== undefined ? Number(value) : undefined;
    }

    return value?.pad(this.LeadingZerosCount);
  }
}
