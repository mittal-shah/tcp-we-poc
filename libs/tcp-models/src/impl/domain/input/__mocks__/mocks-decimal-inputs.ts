import { DecimalInputImpl } from '../decimal.input.impl';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableDecimalInputModel } from '../../../../declaration';

export class MocksDecimalInputs {
  basic: DecimalInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'basic-decimal-input',
    } as EditableDecimalInputModel,
    DecimalInputImpl,
  );

  minMax: DecimalInputImpl = AbstractImpl.fromJSON(
    {
      IntPrecision: 3,
      StrId: 'min1-max99.999-decimal-input',
      StrMaxValue: '99.999',
      StrMinValue: '1.000',
      StrText: 'min 1 - max 99.999',
      StrValue: '1.000',
    } as EditableDecimalInputModel,
    DecimalInputImpl,
  );
}
