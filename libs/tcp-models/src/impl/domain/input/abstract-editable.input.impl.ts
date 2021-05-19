import {
  AnyType,
  AutoCapitalizeOptions,
  AutoCompleteOptions,
  EditableInputModel,
  InputSuffixIcon,
} from '../../../declaration';
import { AppConfigImpl, CompanyConfigImpl } from '../../config';
import { AbstractImpl } from '../../abstract.impl';

export default abstract class AbstractEditableInputImpl extends AbstractImpl implements EditableInputModel {
  DefaultNumberOfLines = 1;

  ShouldFocus: boolean | undefined = false;

  BlnForceUppercase: boolean | undefined = false;

  BlnIsDisabled: boolean | undefined = false;

  BlnIsEditable: boolean | undefined = true;

  BlnIsRequired: boolean | undefined = false;

  BlnIsVisible: boolean | undefined = true;

  IntMaxLength: number | undefined;

  StrId = '';

  StrRegExp: string | undefined = '';

  StrSuffix: string | undefined = '';

  StrText: string | undefined = '';

  StrValue: string | undefined = '';

  onChange?: (value: string | undefined) => void | undefined = undefined;

  appConfig: AppConfigImpl | undefined = undefined;

  companyConfig: CompanyConfigImpl | undefined = undefined;

  getAutoCapitalize(): AutoCapitalizeOptions {
    return this.BlnForceUppercase ? 'characters' : 'none';
  }

  getAutoCompleteType(): AutoCompleteOptions {
    return 'off';
  }

  getFormattedValue(value: AnyType): string | undefined {
    return String(value);
  }

  getFormattedSubLabel(subString: string): string | undefined {
    if (this.StrSuffix) {
      return ` ${this.StrSuffix}`;
    }

    return !this.BlnIsRequired && !this.BlnIsDisabled ? ` (${subString})` : undefined;
  }

  getInputSuffixIcon(): InputSuffixIcon {
    return undefined;
  }

  getMaxValue(): AnyType {
    return undefined;
  }

  getMinValue(): AnyType {
    return undefined;
  }

  initializeInput(appConfig: AppConfigImpl | undefined, companyConfig: CompanyConfigImpl | undefined): void {
    this.appConfig = appConfig;
    this.companyConfig = companyConfig;

    if (!this.StrId) {
      this.StrId = this.StrText?.getAdjustedComponentId() || 'editableInput';
    }
  }

  getNumberOfLines(): number {
    return this.DefaultNumberOfLines;
  }

  getType(): string {
    return this.isSecuredField() ? 'password' : 'text';
  }

  isInputEditable(): boolean {
    return Boolean(this.isInputAccessible() && this.BlnIsEditable);
  }

  isInputAccessible(): boolean {
    return Boolean(this.BlnIsVisible && !this.BlnIsDisabled);
  }

  isMultiline(): boolean {
    return !!this.getNumberOfLines() && this.getNumberOfLines() > this.DefaultNumberOfLines;
  }

  isSecuredField(): boolean {
    return false;
  }

  isValidInput(): boolean {
    return this.isValidRequired() && this.isValidMaxLength() && this.isValidValue() && this.isValidRegEx();
  }

  isValidMaxLength(): boolean {
    if (!this.isInputAccessible()) {
      return true;
    }

    const maxLength = this.getMaxLength();
    if (!maxLength || maxLength === 0) {
      return true;
    }

    return this.toString().length <= maxLength;
  }

  isValidRegEx(value = this.toString()) {
    const shouldValidate = !this.BlnIsRequired || (value && this.BlnIsRequired);
    if (!this.isInputAccessible() || !shouldValidate) {
      return true;
    }

    if (this.StrRegExp) {
      const validator = new RegExp(this.StrRegExp);
      return validator.test(value);
    }
    return true;
  }

  isValidRequired(): boolean {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.BlnIsRequired) {
      return true;
    }

    return !this.toString()?.isEmptyOrSpaces();
  }

  getHintText(): string | undefined {
    return this.appConfig ? this.appConfig.StrEnterValidAlphaNumeric : undefined;
  }

  getMaxLength(): number | undefined {
    return this.IntMaxLength ? this.IntMaxLength : undefined;
  }

  getPlaceholderText(): string {
    return this.StrText || '';
  }

  getErrorMessage(): string | undefined {
    if (!this.isValidMaxLength()) {
      return this.appConfig && this.appConfig.StrTextExceedsMaxLength;
    }

    if (!this.isValidRequired()) {
      return this.appConfig && this.appConfig.StrEnterRequiredFields;
    }

    if (!this.isValidRegEx()) {
      return this.appConfig && this.appConfig.StrEnterValidAlphaNumeric;
    }

    return '';
  }

  shouldAutoCorrect(): boolean {
    return false;
  }

  getText(): string {
    return this.StrText || '';
  }

  toString(): string {
    return this.getValue() || '';
  }

  getModelValue(): AnyType {
    return this.getValue();
  }

  setModelValue(value: AnyType): void {
    this.setValue(value);
  }

  abstract isValidValue(): boolean;

  abstract getValue(): AnyType;

  abstract setValue(value: AnyType): AnyType;
}
