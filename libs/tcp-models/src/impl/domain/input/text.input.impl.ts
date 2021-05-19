import AbstractEditableInputImpl from './abstract-editable.input.impl';
import { EditableTextInputModel } from '../../../declaration';
import { DecimalInputImpl } from './decimal.input.impl';
import { NumberInputImpl } from './number.input.impl';
import { AbstractImpl } from '../../abstract.impl';

export class TextInputImpl extends AbstractEditableInputImpl implements EditableTextInputModel {
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
    const input = AbstractImpl.fromJSON(JSON.stringify(this), DecimalInputImpl);
    input.StrMaxValue = this.StrMaxDecimalValue;
    input.StrMinValue = this.StrMinDecimalValue;
    return input;
  }

  toNumberInput() {
    return AbstractImpl.fromJSON(JSON.stringify(this), NumberInputImpl);
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
