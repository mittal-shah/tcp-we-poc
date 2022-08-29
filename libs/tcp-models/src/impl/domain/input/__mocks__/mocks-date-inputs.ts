import { DateInputImpl } from '../date.input.impl';
import { AbstractImpl } from '../../../abstract.impl';
import { EditableDateInputModel } from '../../../../declaration';
import { DateTimeFormatter } from '@tcp/tcp-core';

export class MocksDateInputs {
  basic: DateInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      StrId: 'basic-date-input',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  disabled: DateInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      BlnIsDisabled: true,
      StrId: 'hidden-date-input',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  notVisible: DateInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsVisible: false,
      StrId: 'hidden-date-input',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  required: DateInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      BlnIsRequired: true,
      DatDate: DateTimeFormatter.toDateString(new Date()),
      StrId: 'required-date-input',
      StrText: 'required date',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  minMax: DateInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
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
      BlnIsVisible: true,
      DatDate: '2000-12-30',
      BlnMonthDayOnly: true,
      DatMaxDate: '2000-12-30',
      DatMinDate: '2000-01-31',
      StrMonthDayFormat: 'MM/DD',
      StrId: 'month-day-date-input',
      StrText: 'month day only',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  dMYYYYFormat: DateInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      DatDate: '2000-01-15',
      StrFormat: 'd/M/yyyy',
      StrId: 'day-month-format-date-input',
      StrText: 'day month year format',
    } as EditableDateInputModel,
    DateInputImpl,
  );

  allEnabled: DateInputImpl = AbstractImpl.fromJSON(
    {
      BlnIsVisible: true,
      BlnIsRequired: true,
      DatDate: '2019-12-30',
      DatMinDate: '2019-12-01',
      DatMaxDate: '2019-12-31',
      StrId: 'all-enabled-date-input',
      StrText: 'all enabled label',
      StrSuffix: 'all enabled suffix',
      IntMaxLength: 11,
    } as EditableDateInputModel,
    DateInputImpl,
  );
}
