import { NumberInput } from '../number.input';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableNumberInputModel } from '../../../../declaration';

export class MocksNumberInputs {
  basic: NumberInput = AbstractImpl.fromJSON(
    {
      StrId: 'basic-number-input',
    } as EditableNumberInputModel,
    NumberInput,
  );
}
