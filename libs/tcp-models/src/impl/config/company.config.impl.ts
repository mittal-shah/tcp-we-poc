import { CompanyConfig, ManagerStartInConfig } from '../../declaration';
import { BadgeSearchOrderConfigImpl } from './badge-search-order.config.impl';
import { DateTimeFormatConfigImpl } from './date-time-format.config.impl';
import { ApprovalStatusConfigImpl } from './approval-status.config.impl';
import { ClockResourceImpl, DatePeriodImpl } from '../domain';
import { AppConfigImpl } from './app.config.impl';
import { DateTimeConstants, DateTimeFormatter } from '../../formatter';
import { AbstractImpl } from '../abstract.impl';

export class CompanyConfigImpl extends AbstractImpl implements CompanyConfig {
  BlnCanAccessFeedback: boolean | undefined = false;

  BlnCanAccessGeolocation: boolean | undefined = false;

  BlnCanAccessOptions: boolean | undefined = false;

  BlnCanAccessRatesAndWages: boolean | undefined = false;

  BlnCanAccessShiftDifferential: boolean | undefined = false;

  BlnCanAddCompanyLocation: boolean | undefined = false;

  BlnCanComposeMessage: boolean | undefined = false;

  BlnCanResumeSession: boolean | undefined = false;

  BlnCanViewReleaseNotes: boolean | undefined = false;

  BlnCompTimeEnabled: boolean | undefined = false;

  BlnEnableExternalLogoutEmployeeURL: boolean | undefined = false;

  BlnEnableExternalLogoutUserURL: boolean | undefined = false;

  BlnEnableTrackedFields: boolean | undefined = false;

  BlnFirstTimeLogIn: boolean | undefined = false;

  BlnJobCostingEnabled: boolean | undefined = false;

  BlnRequiresTouchIDAuthentication: boolean | undefined = false;

  BlnShouldExitOnMotion: boolean | undefined = false;

  BlnShouldUseAccessibilityMode: boolean | undefined = false;

  BlnShowSchedulerMergeMessage: boolean | undefined = false;

  BlnShowSystemWideSearch: boolean | undefined = false;

  BlnShowTutorial: boolean | undefined = false;

  BlnTimeIsHundredths: boolean | undefined = false;

  BlnUpdatePassword: boolean | undefined = false;

  BlnUseVirtualKeyboard: boolean | undefined = false;

  DatCurrentWeek: string | undefined = '';

  DblRateMaxValue: number | undefined = 0;

  DblRateMinValue: number | undefined = 0;

  DblUtcOffsetMinutes: number | undefined = 0;

  IntApplicationStartIn: number | undefined = 0;

  IntCompanyId: number | undefined = 0;

  IntDepartmentMaxLength: number | undefined = 0;

  IntJobCodeMaxLength: number | undefined = 0;

  IntKioskStatusOfflineTimeoutMilliseconds: number | undefined = 30000;

  IntKioskStatusOnlineTimeoutMilliseconds: number | undefined = 300000;

  IntLocationMaxLength: number | undefined = 0;

  IntManualPeriod: number | undefined = 0;

  IntRatePrecision: number | undefined = 0;

  IntScheduleGroupMaxLength: number | undefined = 0;

  IntSessionTimeoutMilliseconds: number | undefined = 0;

  IntSessionTimeoutWarningMilliseconds: number | undefined = 0;

  LngEmployeeIdMaxValue: number | undefined = 0;

  LngEmployeeIdMinValue: number | undefined = 0;

  LngJobCodeIdMaxValue: number | undefined = 0;

  LngJobCodeIdMinValue: number | undefined = 0;

  ObjAppConfig: AppConfigImpl | undefined;

  ObjApprovalStatusConfig: ApprovalStatusConfigImpl | undefined;

  ObjBadgeSearchOrderConfig: BadgeSearchOrderConfigImpl | undefined;

  ObjClockResources: ClockResourceImpl | undefined;

  ObjDateTimeFormatConfig: DateTimeFormatConfigImpl | undefined;

  ObjManagerStartInConfig: ManagerStartInConfig | undefined;

  StrAddressNotFound: string | undefined = '';

  StrBiometricVerificationLabel: string | undefined = '';

  StrCT: string | undefined = '';

  StrClickHere: string | undefined = '';

  StrCompanyDisplayValue: string | undefined = '';

  StrCompanyNamespace: string | undefined = '';

  StrCompanyTimestamp: string | undefined = '';

  StrCostCode: string | undefined = '';

  StrCostCodeFilter: string | undefined = '';

  StrCostCodeGroup: string | undefined = '';

  StrCostCodes: string | undefined = '';

  StrCover: string | undefined = '';

  StrCoverFor: string | undefined = '';

  StrCoveredEmployeeFilter: string | undefined = '';

  StrCurrencySymbol: string | undefined = '';

  StrCurrentWeekTimestamp: string | undefined = '';

  StrDefaultCostCode: string | undefined = '';

  StrDefaultJobCode: string | undefined = '';

  StrEmployee: string | undefined = '';

  StrEmployeeFilter: string | undefined = '';

  StrEmployeeId: string | undefined = '';

  StrEmployeeTypeFilter: string | undefined = '';

  StrEmployees: string | undefined = '';

  StrExceptionFilter: string | undefined = '';

  StrExternalLogoutEmployeeURL: string | undefined = '';

  StrExternalLogoutUserURL: string | undefined = '';

  StrFormattedCurrentWeekDate: string | undefined = '';

  StrFormattedMessageCount: string | undefined = '';

  StrInvalidCostCode: string | undefined = '';

  StrJobClassFilter: string | undefined = '';

  StrJobCode: string | undefined = '';

  StrJobCodeFilter: string | undefined = '';

  StrJobCodeGroup: string | undefined = '';

  StrJobCodes: string | undefined = '';

  StrLaborCode: string | undefined = '';

  StrLaborCodes: string | undefined = '';

  StrLaborStandard: string | undefined = '';

  StrLaborStandardFilter: string | undefined = '';

  StrLeaveCalendarFilter: string | undefined = '';

  StrMasterSchedule: string | undefined = '';

  StrMasterScheduleFilter: string | undefined = '';

  StrMasterShift: string | undefined = '';

  StrMasterShiftFilter: string | undefined = '';

  StrMonthDayFormat: string | undefined = '';

  StrPrimarySortKey: string | undefined = '';

  StrReleaseNotes: string | undefined = '';

  StrResourceRequirements: string | undefined = '';

  StrScheduleGroup: string | undefined = '';

  StrScheduleGroupSentenceCase: string | undefined = '';

  StrSchedulerMergeMessage: string | undefined = '';

  StrSecondarySortKey: string | undefined = '';

  StrShiftBidStatus: string | undefined = '';

  StrSortKeys: string | undefined = '';

  StrStartInErrorMessage: string | undefined = '';

  StrSubstituteEmployeeFilter: string | undefined = '';

  StrSuspendSwapHelpText: string | undefined = '';

  StrTouchIDFailedErrorMessage: string | undefined = '';

  StrTouchIDVerificationMessage: string | undefined = '';

  StrTrack1: string | undefined = '';

  StrTrack1MaxValue: string | undefined = '';

  StrTrack2: string | undefined = '';

  StrTrack2MaxValue: string | undefined = '';

  StrTrack3: string | undefined = '';

  StrTrack3MaxValue: string | undefined = '';

  _ArrDatePeriods: DatePeriodImpl[] | undefined = [];

  _StrTickerTimeFormat: string | undefined = '';
  BlnIgnoreCapitalTextTransformation: boolean | undefined;

  getCompanyTimestamp() {
    return this.StrCompanyTimestamp || '';
  }

  getCompanyTimeOffset() {
    if (!this.StrCompanyTimestamp) {
      return 0;
    }

    const companyTime = DateTimeFormatter.getDateFromTimestamp(this.StrCompanyTimestamp);
    if (!companyTime) {
      return 0;
    }
    return DateTimeFormatter.getTimeDiffInMS(new Date(), companyTime);
  }

  getBreakMinutes(breakStart: string) {
    if (!breakStart) {
      return 0;
    }

    const breakDateTime = DateTimeFormatter.getDateFromTimestamp(breakStart);
    if (!breakDateTime) {
      return 0;
    }

    const companyTime = new Date(+Date.now() + this.getCompanyTimeOffset());
    return DateTimeFormatter.getTimeDiffInMinutes(breakDateTime, companyTime);
  }

  getDateTimeFromTimestamp(timestamp: string) {
    if (!timestamp) {
      return '';
    }

    const dateString = DateTimeFormatter.toDateTimeString(new Date(timestamp), this.getDateFormat());
    const timeString = DateTimeFormatter.toTimeString(new Date(timestamp), this.getTimeFormat());

    return `${dateString} ${timeString}`;
  }

  getPartialDateFormat() {
    if (!this.StrMonthDayFormat) {
      return DateTimeConstants.IsoDateFormat;
    }

    return DateTimeFormatter.getAdjustedDateFormat(this.StrMonthDayFormat);
  }

  getDateFormat() {
    if (!this.ObjDateTimeFormatConfig) {
      return DateTimeConstants.IsoDateFormat;
    }

    return this.ObjDateTimeFormatConfig.getDateFormat();
  }

  getTimeFormat() {
    if (!this.ObjDateTimeFormatConfig) {
      return DateTimeConstants.IsoTimeFormat;
    }

    return this.ObjDateTimeFormatConfig.getTimeFormat();
  }

  getTimeTickerFormat() {
    return DateTimeFormatter.getAdjustedTimeFormat(this._StrTickerTimeFormat);
  }

  getFormattedDate(timestamp: string | number | Date | undefined) {
    const currentDate = timestamp && new Date(timestamp);
    if (!this.ObjDateTimeFormatConfig || !currentDate) {
      return '';
    }
    return DateTimeFormatter.toDateString(currentDate, this.getDateFormat());
  }

  StrDatePickerLocale: string | undefined;
  StrDemand: string | undefined;

  is24HourTimeFormat() {
    return !this.BlnTimeIsHundredths && DateTimeFormatter.is24HourTimeFormat(this.getTimeFormat());
  }

  shouldFormatHoursAsDecimal() {
    if (!this.ObjDateTimeFormatConfig) {
      return false;
    }

    return !!this.ObjDateTimeFormatConfig.BlnFormatHoursAsDecimals;
  }

  getHourFormatPrecision() {
    if (!this.ObjDateTimeFormatConfig) {
      return undefined;
    }
    return this.ObjDateTimeFormatConfig.getHourFormatPrecision();
  }

  init(data: CompanyConfig) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, '_ArrDatePeriods', DatePeriodImpl);

    this.ObjAppConfig =
      this.ObjAppConfig !== undefined ? AbstractImpl.fromJSON(data.ObjAppConfig, AppConfigImpl) : undefined;

    this.ObjApprovalStatusConfig =
      this.ObjApprovalStatusConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjApprovalStatusConfig, ApprovalStatusConfigImpl)
        : undefined;

    this.ObjBadgeSearchOrderConfig =
      this.ObjBadgeSearchOrderConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjBadgeSearchOrderConfig, BadgeSearchOrderConfigImpl)
        : undefined;

    this.ObjDateTimeFormatConfig =
      this.ObjDateTimeFormatConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjDateTimeFormatConfig, DateTimeFormatConfigImpl)
        : undefined;
  }

  getFormattedTime(timestamp: number | Date | undefined, timeFormat: string) {
    if (!this.ObjDateTimeFormatConfig || !timestamp) {
      return '';
    }
    return DateTimeFormatter.toTimeString(timestamp, timeFormat || this.getTimeFormat());
  }

  getFormattedTimeTicker(timestamp: number) {
    return `${this.getFormattedDate(timestamp)} ${this.getFormattedTime(timestamp, this.getTimeTickerFormat())}`;
  }

  getAdjustedCompanyTimestamp(offsetTimeMS: number): number | undefined {
    if (offsetTimeMS === undefined) {
      return undefined;
    }
    const adjustedDate = DateTimeFormatter.createAdjustedDate(offsetTimeMS);
    return adjustedDate.getTime();
  }
}
