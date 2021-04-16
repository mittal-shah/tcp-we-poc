import {AppConfig, DecimalInputModel, HourMinuteInputModel, NumberInputModel, TextInputModel, TimeInputModel} from './global';
import {AnyType} from './types';

export type AutoCapitalizeOptions = 'none' | 'sentences' | 'words' | 'characters';

export type AutoCompleteOptions =
  | 'cc-csc'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-number'
  | 'email'
  | 'name'
  | 'password'
  | 'postal-code'
  | 'street-address'
  | 'tel'
  | 'username'
  | 'off';

export type InputSuffixIcon = 'calendar' | 'clock' | 'search' | 'chevron-down' | 'list' | undefined;

export type KeyboardTypeOptions = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';

export interface EditableInputModel {
  BlnIsDisabled?: boolean | undefined;
  BlnIsRequired?: boolean | undefined;
  BlnIsVisible?: boolean | undefined;
  IntMaxLength?: number | undefined;
  IntNumberOfLines?: number | undefined;
  StrId?: string | undefined;
  StrSuffix?: string | undefined;
  StrText?: string | undefined;

  isValidValue(appConfig?: AppConfig | undefined): boolean;

  getValue(): AnyType;

  setValue(value: any): void;
}

export interface EditableTextInputModel extends EditableInputModel, TextInputModel {
  StrValue?: string | undefined;
}

export interface EditableDecimalInputModel extends EditableInputModel, DecimalInputModel {
  IntPrecision?: number | undefined;
  StrMaxValue?: string | undefined;
  StrMinValue?: string | undefined;
  StrValue?: string | undefined;
}

export interface EditableNumberInputModel extends EditableInputModel, NumberInputModel {
  IntMaxValue?: number | undefined;
  IntMinValue?: number | undefined;
  IntValue?: number | undefined;
  StrMaxDecimalValue?: string | undefined;
  StrMinDecimalValue?: string | undefined;
}

export interface EditableHourMinuteInputModel extends EditableInputModel, HourMinuteInputModel {
  HrmValue?: string | undefined;
  IntMaxMinutes?: number | undefined;
  IntMinMinutes?: number | undefined;
  StrHelp?: string | undefined;
}

export interface EditableDateInputModel extends EditableInputModel {
  DatDate?: string | undefined;
  DatMaxDate?: string | undefined;
  DatMinDate?: string | undefined;
}

export interface EditableTimeInputModel extends EditableInputModel, TimeInputModel {
  TimMaxTime?: string | undefined;
  TimMinTime?: string | undefined;
  TimTime?: string | undefined;
}
