import { NumberInputImpl } from '../number.input.impl';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableNumberInputModel } from '../../../../declaration';

export class MocksNumberInputs {
  basic: NumberInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'basic-number-input',
    } as EditableNumberInputModel,
    NumberInputImpl,
  );

  password: NumberInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsMaskedValue: true,
      IntValue: 1,
      StrId: 'password-number-input',
      StrText: 'password number',
    } as EditableNumberInputModel,
    NumberInputImpl,
  );

  minMax: NumberInputImpl = AbstractImpl.fromJSON(
    {
      IntMaxValue: 10,
      IntMinValue: 1,
      IntValue: 1,
      StrId: 'min1-max10-number-input',
      StrText: 'min 1 - max 10',
    } as EditableNumberInputModel,
    NumberInputImpl,
  );
}
