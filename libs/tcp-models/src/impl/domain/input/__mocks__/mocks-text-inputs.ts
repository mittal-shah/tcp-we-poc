import RegExPattern from '../../../../constants/reg-ex-pattern.constant';
import { TextInput } from '../text.input';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableTextInputModel } from '../../../../declaration';

export class MocksTextInputs {
  basic: TextInput = AbstractImpl.fromJSON(
    {
      StrId: 'basic-text-input',
    } as EditableTextInputModel,
    TextInput,
  );

  required: TextInput = AbstractImpl.fromJSON(
    {
      BlnIsRequired: true,
      StrText: 'required input',
      StrValue: 'mock value',
      StrId: 'required-text-input',
    } as EditableTextInputModel,
    TextInput,
  );

  maxLength: TextInput = AbstractImpl.fromJSON(
    {
      IntMaxLength: 10,
      StrText: 'max length 10',
      StrValue: 'mock value',
      StrId: 'max-length-10-text-input',
    } as EditableTextInputModel,
    TextInput,
  );

  textArea: TextInput = AbstractImpl.fromJSON(
    {
      IntNumberOfLines: 3,
      StrText: 'text area',
      StrValue: 'mock value',
      StrId: 'text-area-input',
    } as EditableTextInputModel,
    TextInput,
  );

  passwordEntry: TextInput = AbstractImpl.fromJSON(
    {
      BlnIsMaskedValue: true,
      StrText: 'password entry',
      StrValue: 'mock value',
      StrId: 'password-input',
    } as EditableTextInputModel,
    TextInput,
  );

  forceUpper: TextInput = AbstractImpl.fromJSON(
    {
      BlnForceUppercase: true,
      StrText: 'upper case entry',
      StrValue: 'mock value',
      StrId: 'upper-case-input',
    } as EditableTextInputModel,
    TextInput,
  );

  disabled: TextInput = AbstractImpl.fromJSON(
    {
      BlnIsDisabled: true,
      StrText: 'disabled',
      StrValue: 'mock value',
      StrId: 'disabled-input',
    } as EditableTextInputModel,
    TextInput,
  );

  readonlyInput: TextInput = AbstractImpl.fromJSON(
    {
      BlnIsEditable: false,
      StrText: 'readonly',
      StrValue: 'mock value',
      StrId: 'readonly-input',
    } as EditableTextInputModel,
    TextInput,
  );

  focused: TextInput = AbstractImpl.fromJSON(
    {
      ShouldFocus: true,
      StrText: 'focused',
      StrValue: 'mock value',
      StrId: 'focused-input',
    } as EditableTextInputModel,
    TextInput,
  );

  suffix: TextInput = AbstractImpl.fromJSON(
    {
      StrText: 'label text with suffix',
      StrValue: 'mock value',
      StrSuffix: 'suffix text',
      StrId: 'suffix-input',
    } as EditableTextInputModel,
    TextInput,
  );

  regEx: TextInput = AbstractImpl.fromJSON(
    {
      StrText: 'regEx: SSN',
      StrValue: 'mock value',
      StrId: 'regEx-input',
      StrRegExp: RegExPattern.SSN,
    } as EditableTextInputModel,
    TextInput,
  );

  changeEvent: TextInput = AbstractImpl.fromJSON(
    {
      StrText: 'log changes on change event',
      StrValue: 'mock value',
      StrId: 'on-change-input',
      onChange: (value) => console.log(`i am changed: ${value}`),
    } as EditableTextInputModel,
    TextInput,
  );
}
