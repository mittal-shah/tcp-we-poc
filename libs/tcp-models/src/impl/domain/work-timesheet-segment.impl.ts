import { WorkTimesheetSegmentModel } from '../../declarations/global';
import LegendItemImpl from './legend-item.impl';
import TextInput from './input/text.input';
import AbstractImpl from '../abstract.impl';

export default class WorkTimesheetSegmentImpl extends AbstractImpl implements WorkTimesheetSegmentModel {
  BlnCanApproveEmployee?: boolean | undefined = false;

  BlnCanCopySegment?: boolean | undefined = false;

  BlnCanDeleteSegment?: boolean | undefined = false;

  BlnCanEditSegment?: boolean | undefined = false;

  BlnIsApprovedByEmployee?: boolean | undefined = false;

  BlnIsClockedIn?: boolean | undefined = false;

  BlnIsConflicting?: boolean | undefined = false;

  BlnIsLeaveCode?: boolean | undefined = false;

  BlnIsMissedIn?: boolean | undefined = false;

  BlnIsMissedOut?: boolean | undefined = false;

  BlnIsTimesheet?: boolean | undefined = false;

  BlnShouldShowNoteRequired?: boolean | undefined = false;

  HrmTimeSheetMinutes?: string | undefined = '';

  ObjLegendItem?: LegendItemImpl | undefined = undefined;

  ObjTextInputNotes?: TextInput | undefined = undefined;

  StrCostCodeDescription?: string | undefined = '';

  StrFormattedDateIn?: string | undefined = '';

  StrFormattedHours?: string | undefined = '';

  StrFormattedTimeIn?: string | undefined = '';

  StrFormattedTimeOut?: string | undefined = '';

  StrJobCodeDescription?: string | undefined = '';

  StrRequestedSub?: string | undefined = '';

  StrUniqueId?: string | undefined = '';

  TimTimeIn?: string | undefined = '';

  TimTimeOut?: string | undefined = '';

  getKey() {
    return this.StrUniqueId;
  }

  init(data?: WorkTimesheetSegmentModel) {
    if (!data) {
      return;
    }

    this.ObjLegendItem =
      this.ObjLegendItem !== undefined ? AbstractImpl.fromJSON(data.ObjLegendItem, LegendItemImpl) : undefined;
    this.ObjTextInputNotes =
      this.ObjTextInputNotes !== undefined ? AbstractImpl.fromJSON(data.ObjTextInputNotes, TextInput) : undefined;
  }
}
