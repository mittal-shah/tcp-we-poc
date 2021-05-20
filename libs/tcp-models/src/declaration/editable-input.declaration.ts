import {
  CustomFieldControlModel,
  DateTimeInputModel,
  DecimalInputModel,
  HourMinuteInputModel,
  NumberInputModel,
  TextInputModel,
  TimeInputModel,
} from './global.declaration';
import { AnyType } from './types.declaration';
import { AppConfigImpl, CompanyConfigImpl } from '../impl/config';

export type AutoCapitalizeOptions = 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';

export type AutoCompleteOptions = 'on' | 'off';

export type InputSuffixIcon = 'calendar' | 'clock' | 'search' | 'chevron-down' | 'list' | undefined;

export interface EditableInputModel {
  ShouldFocus?: boolean | undefined;
  BlnForceUppercase?: boolean | undefined;
  BlnIsDisabled?: boolean | undefined;
  BlnIsEditable?: boolean | undefined;
  BlnIsRequired?: boolean | undefined;
  BlnIsVisible?: boolean | undefined;
  IntMaxLength?: number | undefined;
  StrId?: string | undefined;
  StrSuffix?: string | undefined;
  StrText?: string | undefined;
  StrRegExp?: string | undefined;
  onChange?: (value: string | undefined) => void | undefined;

  getAutoCapitalize(): AutoCapitalizeOptions;

  getAutoCompleteType(): AutoCompleteOptions;

  getFormattedValue(value: AnyType): string | undefined;

  getFormattedSubLabel(subString: string): string | undefined;

  getInputSuffixIcon(): InputSuffixIcon;

  getNumberOfLines(): number;

  getType(): string;

  initializeInput(appConfig: AppConfigImpl | undefined, companyConfig: CompanyConfigImpl | undefined): void;

  isInputEditable(): boolean;

  isInputAccessible(): boolean;

  isMultiline(): boolean;

  isSecuredField(): boolean;

  isValidInput(): boolean;

  isValidMaxLength(): boolean;

  isValidRequired(): boolean;

  getHintText(): string | undefined;

  getMaxLength(): number | undefined;

  getPlaceholderText(): string;

  getErrorMessage(): string | undefined;

  shouldAutoCorrect(): boolean;

  getText(): string;

  toString(): string;

  getModelValue(): AnyType;

  setModelValue(value: AnyType): void;

  isValidValue(): boolean;

  getMaxValue(): AnyType;

  getMinValue(): AnyType;

  getValue(): AnyType;

  setValue(value: AnyType): AnyType;
}

export interface EditableCustomFieldInputModel extends EditableInputModel, CustomFieldControlModel {
  getComponent(): AnyType;
}

export interface EditableTextInputModel extends EditableInputModel, TextInputModel {
  BlnIsMaskedValue?: boolean | undefined;
  IntNumberOfLines?: number | undefined;
}

export interface EditableDecimalInputModel extends EditableInputModel, DecimalInputModel {}

export interface EditableNumberInputModel extends EditableInputModel, NumberInputModel {
  BlnIsMaskedValue?: boolean | undefined;
}

export interface EditableHourMinuteInputModel extends EditableInputModel, HourMinuteInputModel {}

export interface EditableDateTimeInputModel extends EditableInputModel, DateTimeInputModel {}

export interface EditableDateInputModel extends EditableInputModel {
  BlnMonthDayOnly?: boolean | undefined;
  BlnTrackDate?: boolean | undefined;
  DatDate?: string | undefined;
  DateValue?: Date | null;
  DatMaxDate?: string | undefined;
  DatMinDate?: string | undefined;
  StrFormat?: string | undefined;
  StrMonthDayFormat?: string | undefined;

  getDateFormat(): string;
  setDate(date: Date | null): void;
}

export interface EditableTimeInputModel extends EditableInputModel, TimeInputModel {}
