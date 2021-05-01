import { DecimalInputModel, HourMinuteInputModel, NumberInputModel, TextInputModel, TimeInputModel } from './global'
import { AnyType } from './types'
import AppConfigImpl from '../impl/config/app.config.impl'

export type AutoCapitalizeOptions = 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'

export type AutoCompleteOptions = 'on' | 'off'

export type InputSuffixIcon = 'calendar' | 'clock' | 'search' | 'chevron-down' | 'list' | undefined

export interface EditableInputModel {
  DefaultNumberOfLines: number

  ShouldBlurOnSubmit: boolean | undefined

  ShouldFocus: boolean | undefined

  BlnForceUppercase?: boolean | undefined

  BlnIsDisabled?: boolean | undefined

  BlnIsEditable?: boolean | undefined

  BlnIsRequired?: boolean | undefined

  BlnIsVisible?: boolean | undefined

  IntMaxLength?: number | undefined

  StrCustomFormat?: string | undefined

  StrId?: string | undefined

  StrSuffix?: string | undefined

  StrText?: string | undefined

  StrValue?: string | undefined

  StrRegExp?: string | undefined

  onChange?: (value: string | undefined) => void | undefined

  getAutoCapitalize(): AutoCapitalizeOptions

  getAutoCompleteType(): AutoCompleteOptions

  getFormattedValue(value: AnyType): string | undefined

  getFormattedSubLabel(subString: string): string | undefined

  getInputSuffixIcon(): InputSuffixIcon

  getNumberOfLines(): number

  getType(): string

  initializeControl(): void

  isInputEditable(): boolean

  isInputAccessible(): boolean

  isMultiline(): boolean

  isSecuredField(): boolean

  isValidInput(): boolean

  isValidMaxLength(): boolean

  isValidRequired(): boolean

  getHintText(appConfig: AppConfigImpl | undefined): string | undefined

  getMaxLength(): number | undefined

  getPlaceholderText(): string

  getErrorMessage(appConfig: AppConfigImpl | undefined): string | undefined

  shouldAutoCorrect(): boolean

  getText(): string

  toString(): string

  getModelValue(): AnyType

  setModelValue(value: AnyType): void

  isValidValue(appConfig?: AppConfigImpl | undefined): boolean

  getValue(): AnyType

  setValue(value: AnyType): AnyType
}

export interface EditableTextInputModel extends EditableInputModel, TextInputModel {}

export interface EditableDecimalInputModel extends EditableInputModel, DecimalInputModel {
  IntPrecision?: number | undefined
  StrMaxValue?: string | undefined
  StrMinValue?: string | undefined
}

export interface EditableNumberInputModel extends EditableInputModel, NumberInputModel {
  IntMaxValue?: number | undefined
  IntMinValue?: number | undefined
  IntValue?: number | undefined
  StrMaxDecimalValue?: string | undefined
  StrMinDecimalValue?: string | undefined
}

export interface EditableHourMinuteInputModel extends EditableInputModel, HourMinuteInputModel {
  HrmValue?: string | undefined
  IntMaxMinutes?: number | undefined
  IntMinMinutes?: number | undefined
  StrHelp?: string | undefined
}

export interface EditableDateInputModel extends EditableInputModel {
  DatDate?: string | undefined
  DatMaxDate?: string | undefined
  DatMinDate?: string | undefined
}

export interface EditableTimeInputModel extends EditableInputModel, TimeInputModel {
  TimMaxTime?: string | undefined
  TimMinTime?: string | undefined
  TimTime?: string | undefined
}
