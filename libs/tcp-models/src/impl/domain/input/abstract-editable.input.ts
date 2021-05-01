import {
  AutoCapitalizeOptions,
  AutoCompleteOptions,
  EditableInputModel,
  InputSuffixIcon,
} from '../../../declarations/editable-input';
import AppConfigImpl from '../../config/app.config.impl';
import AbstractImpl from '../../abstract.impl';
import { AnyType } from '../../../declarations/types';
import Util from '../../../../../tcp-util/src/util';

export default abstract class AbstractEditableInput extends AbstractImpl implements EditableInputModel {
  DefaultNumberOfLines = 1;

  ShouldBlurOnSubmit: boolean | undefined = false;

  ShouldFocus: boolean | undefined = false;

  BlnForceUppercase?: boolean | undefined = false;

  BlnIsDisabled?: boolean | undefined = false;

  BlnIsEditable?: boolean | undefined = true;

  BlnIsRequired?: boolean | undefined = false;

  BlnIsVisible?: boolean | undefined = false;

  IntMaxLength?: number | undefined;

  StrCustomFormat?: string | undefined = '';

  StrId = '';

  StrRegExp?: string | undefined = '';

  StrSuffix?: string | undefined = '';

  StrText?: string | undefined = '';

  StrValue?: string | undefined = '';

  onChange?: (value: string | undefined) => void | undefined = undefined;

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

  initializeControl(): void {
    if (!this.StrId) {
      this.StrId = Util.getAdjustedComponentId(this.StrText) || 'editableInput';
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
    return this.isValidRequired() && this.isValidMaxLength() && this.isValidValue();
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

  isValidRequired(): boolean {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.BlnIsRequired) {
      return true;
    }

    return !Util.isEmptyOrSpaces(this.toString());
  }

  getHintText(appConfig: AppConfigImpl | undefined): string | undefined {
    return appConfig ? appConfig.StrEnterValidAlphaNumeric : undefined;
  }

  getMaxLength(): number | undefined {
    return this.IntMaxLength ? this.IntMaxLength : undefined;
  }

  getPlaceholderText(): string {
    if (this.StrCustomFormat) {
      return this.StrCustomFormat;
    }

    return this.StrText || '';
  }

  getErrorMessage(appConfig: AppConfigImpl | undefined): string | undefined {
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

  abstract isValidValue(appConfig?: AppConfigImpl | undefined): boolean;

  abstract getValue(): AnyType;

  abstract setValue(value: AnyType): AnyType;
}
