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

  required: DateInput = AbstractImpl.fromJSON(
    {
      StrId: 'required-date-input',
      StrText: 'required date',
      BlnIsRequired: true,
      DatDate: DateTimeFormatter.toDateString(new Date()),
    } as EditableDateInputModel,
    DateInput,
  );

  minMax: DateInput = AbstractImpl.fromJSON(
    {
      StrId: 'min-today-max-today-plus-2-date-input',
      StrText: 'min today - max today plus 2',
      DatDate: DateTimeFormatter.toDateString(DateTimeFormatter.addDays(new Date(), 2)),
      DatMinDate: DateTimeFormatter.toDateString(new Date()),
      DatMaxDate: DateTimeFormatter.toDateString(DateTimeFormatter.addDays(new Date(), 2)),
    } as EditableDateInputModel,
    DateInput,
  );

  monthDayOnly: DateInput = AbstractImpl.fromJSON(
    {
      StrId: 'month-day-date-input',
      StrText: 'month day only',
      BlnMonthDayOnly: true,
      DatDate: '2000-01-01',
    } as EditableDateInputModel,
    DateInput,
  );
}
