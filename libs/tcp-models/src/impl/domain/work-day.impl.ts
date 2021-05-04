import { WorkDayModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { WorkTimesheetSegmentImpl } from './work-timesheet-segment.impl';

export class WorkDayImpl extends AbstractImpl implements WorkDayModel {
  ArrWorkTimesheetSegments: WorkTimesheetSegmentImpl[] | undefined = [];

  BlnCanAdd: boolean | undefined = false;

  BlnCanApprove: boolean | undefined = false;

  BlnIsApproved: boolean | undefined = false;

  BlnIsBeginningOfPeriod: boolean | undefined = false;

  BlnIsEndOfPeriod: boolean | undefined = false;

  BlnIsHistory: boolean | undefined = false;

  BlnIsWeekend: boolean | undefined = false;

  DatDate: string | undefined = '';

  StrFormattedDate: string | undefined = '';

  StrFormattedTotal: string | undefined = '';

  init(data: WorkDayModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrWorkTimesheetSegments', WorkTimesheetSegmentImpl);
  }
}
