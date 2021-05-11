import { AbstractImpl, EditableTextInputModel, TextInput } from '@tcp/tcp-models';

export class MocksTextInputs {
  basic: TextInput = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      StrId: 'basic-text-input',
    } as EditableTextInputModel,
    TextInput,
  );

  required: TextInput = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      BlnIsRequired: true,
      StrText: 'required input',
      StrId: 'required-text-input',
    } as EditableTextInputModel,
    TextInput,
  );

  maxLength: TextInput = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      IntMaxLength: 10,
      StrText: 'max length 10',
      StrId: 'max-length-10-text-input',
    } as EditableTextInputModel,
    TextInput,
  );

  textArea: TextInput = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      IntNumberOfLines: 3,
      StrText: 'text area',
      StrId: 'text-area-input',
    } as EditableTextInputModel,
    TextInput,
  );
}
