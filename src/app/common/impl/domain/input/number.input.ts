import AbstractEditableInput from './abstract-editable.input';
import AppConfigImpl from '../../config/app.config.impl';
import {EditableNumberInputModel, KeyboardTypeOptions} from '../../../../declarations/editable-input';
import RegExpValidator from '../../../constant/reg-exp-validators.constant';
import Util from '../../../../util/util';

export default class NumberInput extends AbstractEditableInput implements EditableNumberInputModel {
  BlnIsMaskedValue?: boolean | undefined = false;

  IntMaxValue?: number | undefined;

  IntMinValue?: number | undefined = 0;

  IntValue?: number | undefined;

  private LeadingZerosCount: number | undefined = 0;

  getFormattedValue(value: string | undefined) {
    return value;
  }

  getKeyboardType(): KeyboardTypeOptions {
    return 'number-pad';
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

  isValidRegEx() {
    return RegExpValidator.NUMBER.test(this.toString());
  }

  isValidValue() {
    return this.isValidRegEx() && this.isValidMinValue() && this.isValidMaxValue();
  }

  getPlaceholderText(): string {
    return this.IntMaxValue ? String(this.IntMaxValue) : super.getPlaceholderText();
  }

  getValue() {
    return this.padNumberValueIfNeeded(this.IntValue);
  }

  setValue(value: number | undefined) {
    if (Util.isNullOrUndefined(value) || Util.isEmptyOrSpaces(String(value))) {
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
    if (!this.isValidValue()) {
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

    return '0'.repeat(this.LeadingZerosCount) + Number(value);
  }
}
