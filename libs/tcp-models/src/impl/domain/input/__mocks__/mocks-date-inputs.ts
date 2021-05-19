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
      BlnIsRequired: true,
      DatDate: DateTimeFormatter.toDateString(new Date()),
      StrId: 'required-date-input',
      StrText: 'required date',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  minMax: DateInputImpl = AbstractImpl.fromJSON(
    {
      DatDate: DateTimeFormatter.toDateString(DateTimeFormatter.addDays(new Date(), 2)),
      DatMaxDate: DateTimeFormatter.toDateString(DateTimeFormatter.addDays(new Date(), 2)),
      DatMinDate: DateTimeFormatter.toDateString(new Date()),
      StrId: 'min-today-max-today-plus-2-date-input',
      StrText: 'min today - max today plus 2',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  monthDayOnly: DateInputImpl = AbstractImpl.fromJSON(
    {
      BlnMonthDayOnly: true,
      DatDate: '2000-01-15',
      StrId: 'month-day-date-input',
      StrText: 'month day only',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  dMYYYYFormat: DateInputImpl = AbstractImpl.fromJSON(
    {
      DatDate: '2000-01-15',
      StrFormat: 'd/M/yyyy',
      StrId: 'day-month-format-date-input',
      StrText: 'day month year format',
    } as EditableDateInputModel,
    DateInputImpl,
  );
}
