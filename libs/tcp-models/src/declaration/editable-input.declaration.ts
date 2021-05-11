import {
  DecimalInputModel,
  HourMinuteInputModel,
  NumberInputModel,
  TextInputModel,
  TimeInputModel,
} from './global.declaration';
import { AnyType } from './types.declaration';
import { AppConfigImpl } from '../impl/config';

export type AutoCapitalizeOptions = 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

export type AutoCompleteOptions = 'on' | 'off';

export type InputSuffixIcon = 'calendar' | 'clock' | 'search' | 'chevron-down' | 'list' | undefined;

export interface EditableInputModel {
  ShouldBlurOnSubmit: boolean | undefined;

  ShouldFocus: boolean | undefined;

  BlnForceUppercase: boolean | undefined;

  BlnIsDisabled: boolean | undefined;

  BlnIsEditable: boolean | undefined;

  BlnIsRequired: boolean | undefined;

  BlnIsVisible: boolean | undefined;

  IntMaxLength: number | undefined;

  StrCustomFormat: string | undefined;

  StrId: string | undefined;

  StrSuffix: string | undefined;

  StrText: string | undefined;

  StrValue: string | undefined;

  StrRegExp: string | undefined;

  onChange: (value: string | undefined) => void | undefined;

  getAutoCapitalize(): AutoCapitalizeOptions;

  getAutoCompleteType(): AutoCompleteOptions;

  getFormattedValue(value: AnyType): string | undefined;

  getFormattedSubLabel(subString: string): string | undefined;

  getInputSuffixIcon(): InputSuffixIcon;

  getNumberOfLines(): number;

  getType(): string;

  initializeControl(): void;

  isInputEditable(): boolean;

  isInputAccessible(): boolean;

  isMultiline(): boolean;

  isSecuredField(): boolean;

  isValidInput(): boolean;

  isValidMaxLength(): boolean;

  isValidRequired(): boolean;

  getHintText(appConfig: AppConfigImpl | undefined): string | undefined;

  getMaxLength(): number | undefined;

  getPlaceholderText(): string;

  getErrorMessage(appConfig: AppConfigImpl | undefined): string | undefined;

  shouldAutoCorrect(): boolean;

  getText(): string;

  toString(): string;

  getModelValue(): AnyType;

  setModelValue(value: AnyType): void;

  isValidValue(appConfig: AppConfigImpl | undefined): boolean;

  getValue(): AnyType;

  setValue(value: AnyType): AnyType;
}

export interface EditableTextInputModel extends EditableInputModel, TextInputModel {
  IntNumberOfLines: number | undefined;
}

export interface EditableDecimalInputModel extends EditableInputModel, DecimalInputModel {}

export interface EditableNumberInputModel extends EditableInputModel, NumberInputModel {}

export interface EditableHourMinuteInputModel extends EditableInputModel, HourMinuteInputModel {}

export interface EditableDateInputModel extends EditableInputModel {
  DatDate: string | undefined;
  DatMaxDate: string | undefined;
  DatMinDate: string | undefined;
}

export interface EditableTimeInputModel extends EditableInputModel, TimeInputModel {}
