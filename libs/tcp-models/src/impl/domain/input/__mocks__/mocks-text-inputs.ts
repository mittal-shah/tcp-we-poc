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
}
