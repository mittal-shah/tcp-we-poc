import AbstractEditableInput from './abstract-editable.input';
import RegExpValidator from '../../../constants/reg-exp-validators.constant';
import { EditableNumberInputModel } from '../../../declaration';
import { AppConfigImpl } from '../../config';
import { CommonUtil } from '@tcp/tcp-util';

export class NumberInput extends AbstractEditableInput implements EditableNumberInputModel {
  BlnIsMaskedValue: boolean | undefined = false;

  IntMaxValue: number | undefined;

  IntMinValue: number | undefined = 0;

  IntValue: number | undefined;

  private LeadingZerosCount: number | undefined = 0;

  getFormattedValue(value: string | undefined) {
    return value;
  }

  getHintText(appConfig: AppConfigImpl | undefined): string | undefined {
    return this.IntMinValue || this.IntMaxValue
      ? Number(this.IntMinValue) + ' - ' + Number(this.IntMaxValue)
      : super.getHintText(appConfig);
  }

  getType() {
    return 'number';
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

  getValue() {
    return this.padNumberValueIfNeeded(this.IntValue);
  }

  setValue(value: number | undefined) {
    if (CommonUtil.isNullOrUndefined(value) || String(value).isEmptyOrSpaces()) {
      this.IntValue = undefined;
    } else {
      const isValidRegEx = RegExpValidator.NUMBER.test(String(value));
      this.updateLeadingZerosCount(String(value));
      this.IntValue = !isValidRegEx || isNaN(Number(value)) ? value : Number(value);
    }
  }

  toString() {
    return String(this.getValue() === undefined ? '' : this.getValue());
  }

  getMaxLength(): number | undefined {
    const maxLength = super.getMaxLength() || String(this.IntMaxValue).length;
    return maxLength || undefined;
  }

  getErrorMessage(appConfig: AppConfigImpl | undefined) {
    if (!this.isValidValue() || !this.isValidRegEx()) {
      return appConfig && appConfig.StrEnterValidNumeric;
    }
    return super.getErrorMessage(appConfig);
  }

  private updateLeadingZerosCount(value: string) {
    const zerosCount = value.match(/^0+/);
    this.LeadingZerosCount = zerosCount && zerosCount.length ? zerosCount[0].length : 0;
  }

  private padNumberValueIfNeeded(value: number | undefined) {
    if (!this.LeadingZerosCount) {
      return value !== undefined ? Number(value) : undefined;
    }

    return value.pad(this.LeadingZerosCount);
  }
}
