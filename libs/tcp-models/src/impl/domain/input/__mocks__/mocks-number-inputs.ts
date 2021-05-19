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
      StrId: 'password-number-input',
      StrText: 'password number',
      IntValue: 1,
      BlnIsMaskedValue: true,
    } as EditableNumberInputModel,
    NumberInputImpl,
  );

  minMax: NumberInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'min1-max10-number-input',
      StrText: 'min 1 - max 10',
      IntValue: 1,
      IntMinValue: 1,
      IntMaxValue: 10,
    } as EditableNumberInputModel,
    NumberInputImpl,
  );
}
