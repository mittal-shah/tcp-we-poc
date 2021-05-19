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
      StrId: 'required-text-input',
      StrText: 'required input',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  maxLength: TextInputImpl = AbstractImpl.fromJSON(
    {
      IntMaxLength: 10,
      StrId: 'max-length-10-text-input',
      StrText: 'max length 10',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  textArea: TextInputImpl = AbstractImpl.fromJSON(
    {
      IntNumberOfLines: 3,
      StrId: 'text-area-input',
      StrText: 'text area',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  passwordEntry: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsMaskedValue: true,
      StrId: 'password-input',
      StrText: 'password entry',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  forceUpper: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnForceUppercase: true,
      StrId: 'upper-case-input',
      StrText: 'upper case entry',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  disabled: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsDisabled: true,
      StrId: 'disabled-input',
      StrText: 'disabled',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  readonlyInput: TextInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsEditable: false,
      StrId: 'readonly-input',
      StrText: 'readonly',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  focused: TextInputImpl = AbstractImpl.fromJSON(
    {
      ShouldFocus: true,
      StrId: 'focused-input',
      StrText: 'focused',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  suffix: TextInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'suffix-input',
      StrSuffix: 'suffix text',
      StrText: 'label text with suffix',
      StrValue: 'mock value',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  regEx: TextInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'regEx-input',
      StrRegExp: RegExPattern.SSN,
      StrText: 'regEx: SSN',
      StrValue: '600-10-1000',
    } as EditableTextInputModel,
    TextInputImpl,
  );

  changeEvent: TextInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'on-change-input',
      StrText: 'log changes on change event',
      StrValue: 'mock value',
      onChange: (value) => console.log(`i am changed: ${value}`),
    } as EditableTextInputModel,
    TextInputImpl,
  );
}
