import { DateInput } from '../date.input';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableDateInputModel } from '../../../../declaration';
import { DateTimeFormatter } from '@tcp/tcp-core';

export class MocksDateInputs {
  basic: DateInput = AbstractImpl.fromJSON(
    {
      StrId: 'basic-date-input',
    } as EditableDateInputModel,
    DateInput,
  );

  minMax: DateInput = AbstractImpl.fromJSON(
    {
      StrId: 'min-today-max-today-plus-2-input',
      StrText: 'min today - max today plus 2',
      DatDate: DateTimeFormatter.toDateString(new Date()),
      DatMinDate: DateTimeFormatter.toDateString(new Date()),
      DatMaxDate: DateTimeFormatter.toDateString(DateTimeFormatter.addDays(new Date(), 2)),
    } as EditableDateInputModel,
    DateInput,
  );
}
