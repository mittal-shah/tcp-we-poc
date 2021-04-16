import {
  AutoCapitalizeOptions,
  AutoCompleteOptions,
  EditableInputModel,
  InputSuffixIcon,
  KeyboardTypeOptions
} from '../../../../declarations/editable-input';
import AppConfigImpl from '../../config/app.config.impl';
import AbstractImpl from '../../abstract.impl';
import {AnyType} from '../../../../declarations/types';
import Util from '../../../../util/util';

export default abstract class AbstractEditableInput extends AbstractImpl implements EditableInputModel {
  DefaultNumberOfLines = 1;

  ShouldBlurOnSubmit: boolean | undefined = false;

  BlnForceUppercase?: boolean | undefined = false;

  BlnIsDisabled?: boolean | undefined = false;

  BlnIsEditable?: boolean | undefined = true;

  BlnIsRequired?: boolean | undefined = false;

  BlnIsVisible?: boolean | undefined = false;

  IntMaxLength?: number | undefined;

  StrCustomFormat?: string | undefined = '';

  StrId?: string | undefined = '';

  StrSuffix?: string | undefined = '';

  StrText?: string | undefined = '';

  onChange?: (value: string | undefined) => void | undefined = undefined;

  getAutoCapitalize(): AutoCapitalizeOptions {
    return this.BlnForceUppercase ? 'characters' : 'none';
  }

  getAutoCompleteType(): AutoCompleteOptions {
    return 'off';
  }

  getFormattedValue(value: any): string | undefined {
    return String(value);
  }

  getFormattedSubLabel(subString: string) {
    if (this.StrSuffix) {
      return ` ${this.StrSuffix}`;
    }

    return !this.BlnIsRequired && !this.BlnIsDisabled ? ` (${subString})` : undefined;
  }

  getInputSuffixIcon(): InputSuffixIcon {
    return undefined;
  }

  getKeyboardType(): KeyboardTypeOptions {
    return 'default';
  }

  getNumberOfLines() {
    return this.DefaultNumberOfLines;
  }

  isInputEditable() {
    return this.isInputAccessible() && this.BlnIsEditable;
  }

  isInputAccessible() {
    return this.BlnIsVisible && !this.BlnIsDisabled;
  }

  isMultiline() {
    return !!this.getNumberOfLines() && this.getNumberOfLines() > this.DefaultNumberOfLines;
  }

  isSecuredField() {
    return false;
  }

  isValidInput() {
    return this.isValidRequired() && this.isValidMaxLength() && this.isValidValue();
  }

  isValidMaxLength() {
    if (!this.isInputAccessible()) {
      return true;
    }

    const maxLength = this.getMaxLength();
    if (!maxLength || maxLength === 0) {
      return true;
    }

    return this.toString().length <= maxLength;
  }

  isValidRequired() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.BlnIsRequired) {
      return true;
    }

    return !Util.isEmptyOrSpaces(this.toString());
  }

  getMaxLength() {
    return this.IntMaxLength ? this.IntMaxLength : undefined;
  }

  getPlaceholderText() {
    if (this.StrCustomFormat) {
      return this.StrCustomFormat;
    }

    return this.StrText || '';
  }

  getErrorMessage(appConfig: AppConfigImpl | undefined) {
    if (!this.isValidMaxLength()) {
      return appConfig && appConfig.StrTextExceedsMaxLength;
    }

    if (!this.isValidRequired()) {
      return appConfig && appConfig.StrEnterRequiredFields;
    }

    return '';
  }

  shouldAutoCorrect(): boolean {
    return false;
  }

  getText() {
    return this.StrText;
  }

  toString() {
    return this.getValue() || '';
  }

  getModelValue() {
    return this.getValue();
  }

  setModelValue(value: AnyType) {
    this.setValue(value);
  }

  abstract isValidValue(appConfig?: AppConfigImpl | undefined): AnyType;

  abstract getValue(): AnyType;

  abstract setValue(value: AnyType): AnyType;
}
