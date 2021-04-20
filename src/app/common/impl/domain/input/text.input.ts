import AbstractEditableInput from './abstract-editable.input';
import AppConfigImpl from '../../config/app.config.impl';
import DecimalInput from './decimal.input';
import {EditableTextInputModel} from '../../../declarations/editable-input';

export default class TextInput extends AbstractEditableInput implements EditableTextInputModel {
  BlnIsMaskedValue?: boolean | undefined = false;

  IntNumberOfLines?: number | undefined = 0;

  StrMaxDecimalValue?: string | undefined = '';

  StrMinDecimalValue?: string | undefined = '';

  isSecuredField() {
    return !!this.BlnIsMaskedValue;
  }

  isValidRegEx() {
    const shouldValidate = !this.BlnIsRequired || (this.toString() && this.BlnIsRequired);
    if (!this.isInputAccessible() || !shouldValidate) {
      return true;
    }

    if (this.StrRegExp) {
      const validator = new RegExp(this.StrRegExp);
      return validator.test(this.toString());
    }
    return true;
  }

  isValidValue() {
    return this.isValidRegEx();
  }

  getNumberOfLines() {
    return this.IntNumberOfLines || this.DefaultNumberOfLines;
  }

  getValue() {
    return this.StrValue || '';
  }

  setValue(value: string | undefined) {
    this.StrValue = value;
  }

  toDecimalInput() {
    const input = new DecimalInput();

    input.BlnIsDisabled = this.BlnIsDisabled;
    input.BlnIsEditable = this.BlnIsEditable;
    input.BlnIsVisible = this.BlnIsVisible;
    input.StrText = this.StrText;
    input.StrValue = this.StrValue;
    input.StrMaxValue = this.StrMaxDecimalValue;
    input.StrMinValue = this.StrMinDecimalValue;
    input.StrId = this.StrId;

    return input;
  }

  getMaxLength(): number | undefined {
    const maxLength = super.getMaxLength() || String(this.StrMaxDecimalValue).length;
    return maxLength || undefined;
  }

  getErrorMessage(appConfig: AppConfigImpl | undefined) {
    if (!this.isValidValue()) {
      return appConfig && appConfig.StrEnterValidAlphaNumeric;
    }

    return super.getErrorMessage(appConfig);
  }
}
