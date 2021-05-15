import AbstractEditableInput from './abstract-editable.input';
import { EditableTextInputModel } from '../../../declaration';
import { DecimalInput } from './decimal.input';
import { NumberInput } from './number.input';
import { AbstractImpl } from '../../abstract.impl';

export class TextInput extends AbstractEditableInput implements EditableTextInputModel {
  BlnIsMaskedValue: boolean | undefined = false;

  IntNumberOfLines: number | undefined = 0;

  IntMaxValue: number | undefined = 0;

  IntMinValue: number | undefined = 0;

  IntValue: number | undefined = 0;

  StrMaxDecimalValue: string | undefined = '';

  StrMinDecimalValue: string | undefined = '';

  isSecuredField() {
    return !!this.BlnIsMaskedValue;
  }

  isValidValue() {
    return true;
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
    const input = AbstractImpl.fromJSON(JSON.stringify(this), DecimalInput);
    input.StrMaxValue = this.StrMaxDecimalValue;
    input.StrMinValue = this.StrMinDecimalValue;
    return input;
  }

  toNumberInput() {
    return AbstractImpl.fromJSON(JSON.stringify(this), NumberInput);
  }

  getMaxLength(): number | undefined {
    const maxLength = super.getMaxLength() || String(this.StrMaxDecimalValue).length;
    return maxLength || undefined;
  }

  getErrorMessage() {
    if (!this.isValidValue()) {
      return this.appConfig && this.appConfig.StrEnterValidAlphaNumeric;
    }

    return super.getErrorMessage();
  }
}
