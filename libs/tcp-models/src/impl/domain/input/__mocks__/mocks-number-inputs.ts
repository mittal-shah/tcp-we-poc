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

  password: NumberInput = AbstractImpl.fromJSON(
    {
      StrId: 'password-number-input',
      StrText: 'password number',
      BlnIsMaskedValue: true,
    } as EditableNumberInputModel,
    NumberInput,
  );

  minMax: NumberInput = AbstractImpl.fromJSON(
    {
      StrId: 'min1-max10-number-input',
      StrText: 'min 1 - max 10',
      IntMinValue: 1,
      IntMaxValue: 10,
    } as EditableNumberInputModel,
    NumberInput,
  );
}
