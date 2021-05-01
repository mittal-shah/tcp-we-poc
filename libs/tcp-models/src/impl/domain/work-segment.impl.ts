import { WorkSegmentModel } from '../../declarations/global';
import IntStringItemImpl from './int-string-item.impl';
import ContractVarianceImpl from './contract-variance.impl';
import AbstractImpl from '../abstract.impl';

export default class WorkSegmentImpl extends AbstractImpl implements WorkSegmentModel {
  ArrContractVariances?: ContractVarianceImpl[] | undefined = [];

  ArrIntStringItemOccurrencePoints?: IntStringItemImpl[] | undefined = [];

  BlnCanAddBreak?: boolean | undefined = false;

  BlnCanApproveEmployee?: boolean | undefined = false;

  BlnCanApproveManager?: boolean | undefined = false;

  BlnCanApproveOther?: boolean | undefined = false;

  BlnCanConvert?: boolean | undefined = false;

  BlnCanDeleteSegment?: boolean | undefined = false;

  BlnCanEditMissedBreakProcessing?: boolean | undefined = false;

  BlnCanEditOccurrence?: boolean | undefined = false;

  BlnCanEditSegment?: boolean | undefined = false;

  BlnCanProcessShiftDifferential?: boolean | undefined = false;

  BlnCanSplitSegment?: boolean | undefined = false;

  BlnCanToggleBreak?: boolean | undefined = false;

  BlnCanToggleCompTime?: boolean | undefined = false;

  BlnCanViewEmployeeApproval?: boolean | undefined = false;

  BlnCanViewEmployeeCompTime?: boolean | undefined = false;

  BlnCanViewManagerApproval?: boolean | undefined = false;

  BlnCanViewNote?: boolean | undefined = false;

  BlnCanViewOtherApproval?: boolean | undefined = false;

  BlnHasDayLightAdjustments?: boolean | undefined = false;

  BlnHasNote?: boolean | undefined = false;

  BlnHasPhotos?: boolean | undefined = false;

  BlnHasPremium?: boolean | undefined = false;

  BlnIsAbsentSegment?: boolean | undefined = false;

  BlnIsApprovedByEmployee?: boolean | undefined = false;

  BlnIsApprovedByManager?: boolean | undefined = false;

  BlnIsApprovedByOther?: boolean | undefined = false;

  BlnIsApprovedMissedIn?: boolean | undefined = false;

  BlnIsApprovedMissedOut?: boolean | undefined = false;

  BlnIsCompTimeToggledByEmployee?: boolean | undefined = false;

  BlnIsConflictingShift?: boolean | undefined = false;

  BlnIsEdited?: boolean | undefined = false;

  BlnIsEndOfWeek?: boolean | undefined = false;

  BlnIsFirstSegmentInShift?: boolean | undefined = false;

  BlnIsHistory?: boolean | undefined = false;

  BlnIsLastSegmentInShift?: boolean | undefined = false;

  BlnIsMiddleSegmentInShift?: boolean | undefined = false;

  BlnIsMissedBreakProcessingDisabled?: boolean | undefined = false;

  BlnIsMissedIn?: boolean | undefined = false;

  BlnIsMissedOut?: boolean | undefined = false;

  BlnIsTimeInSameAsActual?: boolean | undefined = false;

  BlnIsTimeOutSameAsActual?: boolean | undefined = false;

  DatAnchorDate?: string | undefined = '';

  IntApprovableExceptionTypes?: number | undefined = 0;

  IntApprovedExceptionType?: number | undefined = 0;

  IntExceptionStatus?: number | undefined = 0;

  IntMenuExceptionType?: number | undefined = 0;

  IntRequireApprovalExceptionType?: number | undefined = 0;

  IntShiftNumber?: number | undefined = 0;

  IntToolTipExceptionType?: number | undefined = 0;

  LngEmployeeRecordId?: number | undefined = 0;

  LngJobCodeRecordId?: number | undefined = 0;

  LngRecordId?: number | undefined = 0;

  LngRecurringScheduleSegmentRecordId?: number | undefined = 0;

  LngSegmentAssignmentRecordId?: number | undefined = 0;

  StrApprovedByEmployeeId?: string | undefined = '';

  StrApprovedByManagerId?: string | undefined = '';

  StrApprovedByOtherId?: string | undefined = '';

  StrColor?: string | undefined = '';

  StrCostCodeDescription?: string | undefined = '';

  StrDayLightSavingsValue?: string | undefined = '';

  StrEmployeeName?: string | undefined = '';

  StrEvenRowShadingColor?: string | undefined = '';

  StrFormattedActualDateTimeIn?: string | undefined = '';

  StrFormattedActualDateTimeOut?: string | undefined = '';

  StrFormattedBreakLength?: string | undefined = '';

  StrFormattedBreakLengthDesc?: string | undefined = '';

  StrFormattedCoveredEmployeeName?: string | undefined = '';

  StrFormattedDateTimeIn?: string | undefined = '';

  StrFormattedDateTimeOut?: string | undefined = '';

  StrFormattedDayTotal?: string | undefined = '';

  StrFormattedRate?: string | undefined = '';

  StrFormattedSegmentTotal?: string | undefined = '';

  StrFormattedShiftTotal?: string | undefined = '';

  StrFormattedTimeSheetMinutes?: string | undefined = '';

  StrFormattedWeekTotal?: string | undefined = '';

  StrGroupHeading?: string | undefined = '';

  StrGroupId?: string | undefined = '';

  StrJobCodeDescription?: string | undefined = '';

  StrLaborCodeCount?: string | undefined = '';

  StrTimeInColor?: string | undefined = '';

  StrTimeOutColor?: string | undefined = '';

  StrTrack1Value?: string | undefined = '';

  StrTrack2Value?: string | undefined = '';

  StrTrack3Value?: string | undefined = '';

  StrUnformattedRateBreakDown?: string | undefined = '';

  StrWeekTotalDisclaimer?: string | undefined = '';

  init(data?: WorkSegmentImpl) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrContractVariances', ContractVarianceImpl);
    this.copyTypedArray(data, 'ArrIntStringItemOccurrencePoints', IntStringItemImpl);

    this.StrColor = this.StrColor ? this.StrColor.toLowerCase() : this.StrColor;
    this.StrTimeInColor = this.StrTimeInColor ? this.StrTimeInColor.toLowerCase() : this.StrTimeInColor;
    this.StrTimeOutColor = this.StrTimeOutColor ? this.StrTimeOutColor.toLowerCase() : this.StrTimeOutColor;
    this.StrEvenRowShadingColor = this.StrEvenRowShadingColor
      ? this.StrEvenRowShadingColor.toLowerCase()
      : this.StrEvenRowShadingColor;
  }

  canBeApproved() {
    return (
      !this.BlnIsHistory && !!this.BlnCanApproveEmployee && !!this.BlnCanViewEmployeeApproval && !!this.LngRecordId
    );
  }

  hasActualTimes() {
    return !!(this.StrFormattedActualDateTimeIn || this.StrFormattedActualDateTimeOut);
  }
}
