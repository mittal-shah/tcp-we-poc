import { DecimalInput } from '../decimal.input';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableDecimalInputModel } from '../../../../declaration';

export class MocksDecimalInputs {
  basic: DecimalInput = AbstractImpl.fromJSON(
    {
      StrId: 'basic-decimal-input',
    } as EditableDecimalInputModel,
    DecimalInput,
  );

  minMax: DecimalInput = AbstractImpl.fromJSON(
    {
      StrId: 'min1-max99.999-decimal-input',
      StrText: 'min 1 - max 99.999',
      IntPrecision: 3,
      StrValue: '1.000',
      StrMinValue: '1.000',
      StrMaxValue: '99.999',
    } as EditableDecimalInputModel,
    DecimalInput,
  );
}
