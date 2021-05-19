import { DateInputImpl } from '../date.input.impl';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableDateInputModel } from '../../../../declaration';
import { DateTimeFormatter } from '@tcp/tcp-core';

export class MocksDateInputs {
  basic: DateInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'basic-date-input',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  required: DateInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'required-date-input',
      StrText: 'required date',
      BlnIsRequired: true,
      DatDate: DateTimeFormatter.toDateString(new Date()),
    } as EditableDateInputModel,
    DateInputImpl,
  );

  minMax: DateInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'min-today-max-today-plus-2-date-input',
      StrText: 'min today - max today plus 2',
      DatDate: DateTimeFormatter.toDateString(DateTimeFormatter.addDays(new Date(), 2)),
      DatMinDate: DateTimeFormatter.toDateString(new Date()),
      DatMaxDate: DateTimeFormatter.toDateString(DateTimeFormatter.addDays(new Date(), 2)),
    } as EditableDateInputModel,
    DateInputImpl,
  );

  monthDayOnly: DateInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'month-day-date-input',
      StrText: 'month day only',
      BlnMonthDayOnly: true,
      DatDate: '2000-01-15',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  dMYYYYFormat: DateInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'day-month-format-date-input',
      StrText: 'day month year format',
      StrFormat: 'd/M/yyyy',
      DatDate: '2000-01-15',
    } as EditableDateInputModel,
    DateInputImpl,
  );
}
