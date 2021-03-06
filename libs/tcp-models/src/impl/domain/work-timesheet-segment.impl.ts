import { WorkTimesheetSegmentModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { LegendItemImpl } from './legend-item.impl';
import { TextInputImpl } from './input/text.input.impl';

export class WorkTimesheetSegmentImpl extends AbstractImpl implements WorkTimesheetSegmentModel {
  BlnCanApproveEmployee: boolean | undefined = false;

  BlnHasNote: boolean | undefined = false;

  BlnCanCopySegment: boolean | undefined = false;

  BlnCanDeleteSegment: boolean | undefined = false;

  BlnCanEditSegment: boolean | undefined = false;

  BlnIsApprovedByEmployee: boolean | undefined = false;

  BlnIsClockedIn: boolean | undefined = false;

  BlnIsConflicting: boolean | undefined = false;

  BlnIsLeaveCode: boolean | undefined = false;

  BlnIsMissedIn: boolean | undefined = false;

  BlnIsMissedOut: boolean | undefined = false;

  BlnIsTimesheet: boolean | undefined = false;

  BlnShouldShowNoteRequired: boolean | undefined = false;

  HrmTimeSheetMinutes: string | undefined = '';

  ObjLegendItem: LegendItemImpl | undefined = undefined;

  ObjTextInputNotes: TextInputImpl | undefined = undefined;

  StrCostCodeDescription: string | undefined = '';

  StrFormattedDateIn: string | undefined = '';

  StrFormattedHours: string | undefined = '';

  StrFormattedTimeIn: string | undefined = '';

  StrFormattedTimeOut: string | undefined = '';

  StrJobCodeDescription: string | undefined = '';

  StrRequestedSub: string | undefined = '';

  StrUniqueId: string | undefined = '';

  TimTimeIn: string | undefined = '';

  TimTimeOut: string | undefined = '';

  getKey() {
    return this.StrUniqueId;
  }

  init(data: WorkTimesheetSegmentModel) {
    if (!data) {
      return;
    }

    this.ObjLegendItem =
      this.ObjLegendItem !== undefined ? AbstractImpl.fromJSON(data.ObjLegendItem, LegendItemImpl) : undefined;
    this.ObjTextInputNotes =
      this.ObjTextInputNotes !== undefined ? AbstractImpl.fromJSON(data.ObjTextInputNotes, TextInputImpl) : undefined;
  }
}
