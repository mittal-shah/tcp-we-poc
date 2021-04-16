import {
  AttestationPreviewData,
  ContractsFirstContext,
  DailyOvertimeExemptContext,
  EmployeeAccrualBankData,
  EmployeeAdvancedSchedulerContext,
  EmployeeAutomaticBreakData,
  EmployeeBenefitStatusData,
  EmployeeClockConfigurationData,
  EmployeeCompanyContext,
  EmployeeCompTimeContext,
  EmployeeContractPeriodContext,
  EmployeeContractsData,
  EmployeeCostCodeGroupAssignmentData,
  EmployeeDocumentContext,
  EmployeeFMLASuspensionPeriodContext,
  EmployeeHolidaysContext,
  EmployeeHourCalculationPriorityGroupContext,
  EmployeeJobCodeData,
  EmployeeLeaveCalendarsContext,
  EmployeeLeaveGroupsContext,
  EmployeeLocationsContext,
  EmployeeLockedPeriodContext,
  EmployeeModel,
  EmployeeNotesData,
  EmployeeOccurrenceNotificationThresholdContext,
  EmployeeOccurrenceRuleContext,
  EmployeeOvertimeRulesData,
  EmployeePasswordContext,
  EmployeePayProgressionContext,
  EmployeePINContext,
  EmployeeProvisionContext,
  EmployeeQualificationContext,
  EmployeeRateChangeHistoryData,
  EmployeeRecurringScheduleData,
  EmployeeReviewsData,
  EmployeeRoundingData,
  EmployeeShiftDifferentialContext,
  EmployeeSingleSignOnContext,
  EmployeeSubAssignmentTemplatesContext,
  EmployeeSwapLimitsContext,
  EmployeeTimeZoneContext,
  EmployeeUsersData,
  EmployeeWorkDayAdjustmentContext,
  EmployeeWorkweekFinalizerContext,
  EmployeeWorkWeekSettingsContext,
  FeatureProvisionContext,
  FloatingPayPeriodContext,
  ForcedOvertimeContext,
  IncludeOvertimeInRegularContext,
  MobileClientPlatformContext,
  OccurrenceRuleExpirationContext,
  OccurrencesData,
  OvertimeAdvancedContext,
  PaidBreakLimitContext,
  RequestNoticeContext,
  RequestTemplateData,
  SalariedNonExemptContext,
  SplitByPercentageEmployeeContext,
  SubSearchPlusStatusContext,
  WeightedOvertimeContext
} from '../../../declarations/global';
import ExceptionOptionSetImpl from './exception-option-set.impl';
import TextInput from './input/text.input';
import AbstractImpl from '../abstract.impl';
import CompanyLocationPreviewImpl from './company-location-preview.impl';
import LegendItemImpl from './legend-item.impl';
import SelectItemImpl from './select-item.impl';
import StringSelectInputImpl from './string-select-input.impl';
import JobCodeBreakdownImpl from './job-code-breakdown.impl';
import CustomFieldSectionImpl from './custom-field-section.impl';
import LongStringItemImpl from './long-string-item.impl';
import RequestApprovalContextImpl from '../context/request-approval-context.impl';
import ViewMessagesDataImpl from '../data/view-messages-data.impl';

export default class EmployeeImpl extends SelectItemImpl implements EmployeeModel {
  ArrCustomFieldSections?: CustomFieldSectionImpl[] | undefined = undefined;

  ArrDepartments?: string[] | undefined = undefined;

  ArrJobCodeBreakdowns?: JobCodeBreakdownImpl[] | undefined = undefined;

  ArrScheduleGroups?: string[] | undefined = undefined;

  BlnIsActive?: boolean | undefined = false;

  BlnIsSuspended?: boolean | undefined = false;

  BlnIsTerminated?: boolean | undefined = false;

  BlnOverrideAutomaticBreak?: boolean | undefined = false;

  BlnOverrideEmployeeCompany?: boolean | undefined = false;

  BlnOverrideJobCodeDefault?: boolean | undefined = false;

  BlnOverrideManager?: boolean | undefined = false;

  BlnUseDefaultCostCode?: boolean | undefined = false;

  BlnUseDefaultJobCode?: boolean | undefined = false;

  DatDateOfBirth?: string | undefined = '';

  DatHireDate?: string | undefined = '';

  DatTerminationDate?: string | undefined = '';

  IntClass?: number | undefined = 0;

  IntGender?: number | undefined = 0;

  LngDefaultJobCodeId?: number | undefined = 0;

  LngEmployeeId?: number | undefined = 0;

  LngRecordId?: number | undefined = 0;

  ObjAttestationPreviewData?: AttestationPreviewData | undefined = undefined;

  ObjCompanyLocationPreview?: CompanyLocationPreviewImpl | undefined = undefined;

  ObjContractsFirstContext?: ContractsFirstContext | undefined = undefined;

  ObjDailyOvertimeExemptContext?: DailyOvertimeExemptContext | undefined = undefined;

  ObjEmployeeAccrualBankData?: EmployeeAccrualBankData | undefined = undefined;

  ObjEmployeeAdvancedSchedulerContext?: EmployeeAdvancedSchedulerContext | undefined = undefined;

  ObjEmployeeAutomaticBreakData?: EmployeeAutomaticBreakData | undefined = undefined;

  ObjEmployeeBenefitStatusData?: EmployeeBenefitStatusData | undefined = undefined;

  ObjEmployeeClockConfigurationData?: EmployeeClockConfigurationData | undefined = undefined;

  ObjEmployeeCompTimeContext?: EmployeeCompTimeContext | undefined = undefined;

  ObjEmployeeCompanyContext?: EmployeeCompanyContext | undefined = undefined;

  ObjEmployeeContractPeriodContext?: EmployeeContractPeriodContext | undefined = undefined;

  ObjEmployeeContractsData?: EmployeeContractsData | undefined = undefined;

  ObjEmployeeCostCodeGroupAssignmentData?: EmployeeCostCodeGroupAssignmentData | undefined = undefined;

  ObjEmployeeDocumentContext?: EmployeeDocumentContext | undefined = undefined;

  ObjEmployeeFMLASuspensionPeriodContext?: EmployeeFMLASuspensionPeriodContext | undefined = undefined;

  ObjEmployeeHolidaysContext?: EmployeeHolidaysContext | undefined = undefined;

  ObjEmployeeHourCalculationPriorityGroupContext?: EmployeeHourCalculationPriorityGroupContext | undefined = undefined;

  ObjEmployeeJobCodeData?: EmployeeJobCodeData | undefined = undefined;

  ObjEmployeeLeaveCalendarsContext?: EmployeeLeaveCalendarsContext | undefined = undefined;

  ObjEmployeeLeaveGroupsContext?: EmployeeLeaveGroupsContext | undefined = undefined;

  ObjEmployeeLocationsContext?: EmployeeLocationsContext | undefined = undefined;

  ObjEmployeeLockedPeriodContext?: EmployeeLockedPeriodContext | undefined = undefined;

  ObjEmployeeNotesData?: EmployeeNotesData | undefined = undefined;

  ObjEmployeeOccurrenceNotificationThresholdContext?:
    | EmployeeOccurrenceNotificationThresholdContext
    | undefined = undefined;

  ObjEmployeeOccurrenceRuleContext?: EmployeeOccurrenceRuleContext | undefined = undefined;

  ObjEmployeeOvertimeRulesData?: EmployeeOvertimeRulesData | undefined = undefined;

  ObjEmployeePINContext?: EmployeePINContext | undefined = undefined;

  ObjEmployeePasswordContext?: EmployeePasswordContext | undefined = undefined;

  ObjEmployeePayProgressionContext?: EmployeePayProgressionContext | undefined = undefined;

  ObjEmployeeProvisionContext?: EmployeeProvisionContext | undefined = undefined;

  ObjEmployeeQualificationContext?: EmployeeQualificationContext | undefined = undefined;

  ObjEmployeeRateChangeHistoryData?: EmployeeRateChangeHistoryData | undefined = undefined;

  ObjEmployeeRecurringScheduleData?: EmployeeRecurringScheduleData | undefined = undefined;

  ObjEmployeeReviewsData?: EmployeeReviewsData | undefined = undefined;

  ObjEmployeeRoundingData?: EmployeeRoundingData | undefined = undefined;

  ObjEmployeeShiftDifferentialContext?: EmployeeShiftDifferentialContext | undefined = undefined;

  ObjEmployeeSingleSignOnContext?: EmployeeSingleSignOnContext | undefined = undefined;

  ObjEmployeeSubAssignmentTemplatesContext?: EmployeeSubAssignmentTemplatesContext | undefined = undefined;

  ObjEmployeeSwapLimitsContext?: EmployeeSwapLimitsContext | undefined = undefined;

  ObjEmployeeTimeZoneContext?: EmployeeTimeZoneContext | undefined = undefined;

  ObjEmployeeUsersData?: EmployeeUsersData | undefined = undefined;

  ObjEmployeeWorkDayAdjustmentContext?: EmployeeWorkDayAdjustmentContext | undefined = undefined;

  ObjEmployeeWorkWeekSettingsContext?: EmployeeWorkWeekSettingsContext | undefined = undefined;

  ObjEmployeeWorkweekFinalizerContext?: EmployeeWorkweekFinalizerContext | undefined = undefined;

  ObjExceptionOptionSet?: ExceptionOptionSetImpl | undefined = undefined;

  ObjFeatureProvisionContext?: FeatureProvisionContext | undefined = undefined;

  ObjFloatingPayPeriodContext?: FloatingPayPeriodContext | undefined = undefined;

  ObjForcedOvertimeContext?: ForcedOvertimeContext | undefined = undefined;

  ObjIncludeOvertimeInRegularContext?: IncludeOvertimeInRegularContext | undefined = undefined;

  ObjLegendItem?: LegendItemImpl | undefined = undefined;

  ObjLongStringItemDefaultCostCode?: LongStringItemImpl | undefined = undefined;

  ObjLongStringItemLocation?: LongStringItemImpl | undefined = undefined;

  ObjMobileClientPlatformContext?: MobileClientPlatformContext | undefined = undefined;

  ObjOccurrenceRuleExpirationContext?: OccurrenceRuleExpirationContext | undefined = undefined;

  ObjOccurrencesData?: OccurrencesData | undefined = undefined;

  ObjOvertimeAdvancedContext?: OvertimeAdvancedContext | undefined = undefined;

  ObjPaidBreakLimitContext?: PaidBreakLimitContext | undefined = undefined;

  ObjRequestApprovalContext?: RequestApprovalContextImpl | undefined = undefined;

  ObjRequestNoticeContext?: RequestNoticeContext | undefined = undefined;

  ObjRequestTemplateData?: RequestTemplateData | undefined = undefined;

  ObjSalariedNonExemptContext?: SalariedNonExemptContext | undefined = undefined;

  ObjSplitByPercentageEmployeeContext?: SplitByPercentageEmployeeContext | undefined = undefined;

  ObjStringSelectInputLanguageOptions?: StringSelectInputImpl | undefined = undefined;

  ObjSubSearchPlusStatusContext?: SubSearchPlusStatusContext | undefined = undefined;

  ObjTextInputLdapLogInId?: TextInput | undefined = undefined;

  ObjViewMessagesData?: ViewMessagesDataImpl | undefined = undefined;

  ObjWeightedOvertimeContext?: WeightedOvertimeContext | undefined = undefined;

  StrAddress1?: string | undefined = '';

  StrAddress2?: string | undefined = '';

  StrAssignedConfiguration?: string | undefined = '';

  StrBadge?: string | undefined = '';

  StrCellPhone?: string | undefined = '';

  StrCity?: string | undefined = '';

  StrCostCodeSearchQuery?: string | undefined = '';

  StrDefaultJobCodeDescription?: string | undefined = '';

  StrDelete?: string | undefined = '';

  StrDepartment?: string | undefined = '';

  StrEmailAddress?: string | undefined = '';

  StrExportCode?: string | undefined = '';

  StrFirstName?: string | undefined = '';

  StrFullName?: string | undefined = '';

  StrHomePhone?: string | undefined = '';

  StrLastName?: string | undefined = '';

  StrLocation?: string | undefined = '';

  StrManagerName?: string | undefined = '';

  StrNetworkId?: string | undefined = '';

  StrNoJobCodesSelected?: string | undefined = '';

  StrOfficePhone?: string | undefined = '';

  StrPIN?: string | undefined = '';

  StrPhoneExtension?: string | undefined = '';

  StrRate?: string | undefined = '';

  StrRoleId?: string | undefined = '';

  StrSSN?: string | undefined = '';

  StrScheduleGroup?: string | undefined = '';

  StrSmsAddress?: string | undefined = '';

  StrState?: string | undefined = '';

  StrStatus?: string | undefined = '';

  StrZip?: string | undefined = '';

  // @ts-ignore
  init(data?: EmployeeModel) {
    if (!data) {
      return;
    }

    this.ObjCompanyLocationPreview =
      this.ObjCompanyLocationPreview !== undefined
        ? AbstractImpl.fromJSON(data.ObjCompanyLocationPreview, CompanyLocationPreviewImpl)
        : undefined;

    this.ObjExceptionOptionSet =
      this.ObjExceptionOptionSet !== undefined
        ? AbstractImpl.fromJSON(data.ObjExceptionOptionSet, ExceptionOptionSetImpl)
        : undefined;

    this.ObjLegendItem =
      this.ObjLegendItem !== undefined ? AbstractImpl.fromJSON(data.ObjLegendItem, LegendItemImpl) : undefined;

    this.ObjLongStringItemDefaultCostCode =
      this.ObjLongStringItemDefaultCostCode !== undefined
        ? AbstractImpl.fromJSON(data.ObjLongStringItemDefaultCostCode, LongStringItemImpl)
        : undefined;

    this.ObjLongStringItemLocation =
      this.ObjLongStringItemLocation !== undefined
        ? AbstractImpl.fromJSON(data.ObjLongStringItemLocation, LongStringItemImpl)
        : undefined;

    this.ObjRequestApprovalContext =
      this.ObjRequestApprovalContext !== undefined
        ? AbstractImpl.fromJSON(data.ObjRequestApprovalContext, RequestApprovalContextImpl)
        : undefined;

    this.ObjStringSelectInputLanguageOptions =
      this.ObjStringSelectInputLanguageOptions !== undefined
        ? AbstractImpl.fromJSON(data.ObjStringSelectInputLanguageOptions, StringSelectInputImpl)
        : undefined;

    this.ObjTextInputLdapLogInId =
      this.ObjTextInputLdapLogInId !== undefined
        ? AbstractImpl.fromJSON(data.ObjTextInputLdapLogInId, TextInput)
        : undefined;

    this.ObjViewMessagesData =
      this.ObjViewMessagesData !== undefined
        ? AbstractImpl.fromJSON(data.ObjViewMessagesData, ViewMessagesDataImpl)
        : undefined;
  }

  getEmployeeFullName(): string {
    return this.StrFullName || `${this.StrFirstName} ${this.StrLastName}`;
  }

  getKey() {
    return this.LngRecordId;
  }

  getText() {
    return this.getEmployeeFullName();
  }

  getValue() {
    return this.LngEmployeeId;
  }
}
