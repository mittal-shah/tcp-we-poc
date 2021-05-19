import RegExPattern from '../../../../constants/reg-ex-pattern.constant';
import { TextInputImpl } from '../text.input.impl';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableTextInputModel } from '../../../../declaration';

export class MocksTextInputs {
  basic: TextInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'basic-text-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  required: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsRequired: true,
      StrText: 'required input',
      StrValue: 'mock value',
      StrId: 'required-text-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  maxLength: TextInputImpl = AbstractImpl.fromJSON(
    {
      IntMaxLength: 10,
      StrText: 'max length 10',
      StrValue: 'mock value',
      StrId: 'max-length-10-text-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  textArea: TextInputImpl = AbstractImpl.fromJSON(
    {
      IntNumberOfLines: 3,
      StrText: 'text area',
      StrValue: 'mock value',
      StrId: 'text-area-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  passwordEntry: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsMaskedValue: true,
      StrText: 'password entry',
      StrValue: 'mock value',
      StrId: 'password-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  forceUpper: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnForceUppercase: true,
      StrText: 'upper case entry',
      StrValue: 'mock value',
      StrId: 'upper-case-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  disabled: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsDisabled: true,
      StrText: 'disabled',
      StrValue: 'mock value',
      StrId: 'disabled-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  readonlyInput: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsEditable: false,
      StrText: 'readonly',
      StrValue: 'mock value',
      StrId: 'readonly-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  focused: TextInputImpl = AbstractImpl.fromJSON(
    {
      ShouldFocus: true,
      StrText: 'focused',
      StrValue: 'mock value',
      StrId: 'focused-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  suffix: TextInputImpl = AbstractImpl.fromJSON(
    {
      StrText: 'label text with suffix',
      StrValue: 'mock value',
      StrSuffix: 'suffix text',
      StrId: 'suffix-input',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  regEx: TextInputImpl = AbstractImpl.fromJSON(
    {
      StrText: 'regEx: SSN',
      StrValue: '600-10-1000',
      StrId: 'regEx-input',
      StrRegExp: RegExPattern.SSN,
    } as EditableTextInputModel,
    TextInputImpl,
  );

  changeEvent: TextInputImpl = AbstractImpl.fromJSON(
    {
      StrText: 'log changes on change event',
      StrValue: 'mock value',
      StrId: 'on-change-input',
      onChange: (value) => console.log(`i am changed: ${value}`),
    } as EditableTextInputModel,
    TextInputImpl,
  );
}
