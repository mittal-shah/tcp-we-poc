import { AppConfig, WebSocketMessageConfig } from '../../declaration';
import { DataTypeMapImpl, InputMethodMapImpl, KeyTextItemImpl, MenuImpl } from '../domain';
import { CommonUtil } from '../../util';
import { AbstractImpl } from '../abstract.impl';

export class AppConfigImpl extends AbstractImpl implements AppConfig {
  BlnEnableSameSiteSecureFlag: boolean | undefined = false;

  BlnIsWebClock: boolean | undefined = false;

  BlnShouldUseCookie: boolean | undefined = false;

  DatPersistentMax: string | undefined = '';

  DatPersistentMin: string | undefined = '';

  IntApplicationId: number | undefined = 0;

  IntApplicationProfile: number | undefined = 0;

  IntCurrentWeekStaleException: number | undefined = 0;

  IntErrorExceptionValue: number | undefined = 0;

  IntExceptionTypeConfirmNegativeAccrualBalance: number | undefined = 0;

  IntExceptionTypeInvalidSession: number | undefined = 0;

  IntExceptionTypePersistence: number | undefined = 0;

  IntExceptionTypePresentation: number | undefined = 0;

  IntExceptionTypePresentationConfirmation: number | undefined = 0;

  IntExceptionTypePresentationConfirmationBioVerification: number | undefined = 0;

  IntExceptionTypePresentationConfirmationDeactivate: number | undefined = 0;

  IntExceptionTypePresentationConfirmationOfferExist: number | undefined = 0;

  IntExceptionTypePresentationConfirmationOfferTime: number | undefined = 0;

  IntExceptionTypePresentationConfirmationUnassign: number | undefined = 0;

  IntExceptionTypeUnableToReachServer: number | undefined = 0;

  IntExceptionTypeUnexpected: number | undefined = 0;

  IntExceptionTypeWorkflow: number | undefined = 0;

  IntFatalExceptionValue: number | undefined = 0;

  IntInformationExceptionValue: number | undefined = 0;

  IntMaxCostCodeSearchLength: number | undefined = 0;

  IntMaxRecords: number | undefined = 0;

  IntMinFullCodeSearchLength: number | undefined = 0;

  IntNoneItemValue: number | undefined = 0;

  IntNotificationPollInterval: number | undefined = 0;

  IntReportOutputFormatPDF: number | undefined = 0;

  IntReportProgressIntervalMilliseconds: number | undefined = 0;

  IntSearchMaxLength: number | undefined = 0;

  IntShortProgressStatusIntervalMilliseconds: number | undefined = 0;

  IntUserIdMaxLengthValue: number | undefined = 0;

  IntWarningExceptionValue: number | undefined = 0;

  LngMaxFileSizeBytes: number | undefined = 0;

  ObjDataTypeMap: DataTypeMapImpl | undefined;

  ObjInputMethodMap: InputMethodMapImpl | undefined;

  ObjMenuDownloadOptions: MenuImpl | undefined;

  ObjWebSocketMessageConfig: WebSocketMessageConfig | undefined;

  StrAccept: string | undefined = '';
  StrAccruals: string | undefined = '';
  StrActive: string | undefined = '';
  StrActiveOnly: string | undefined = '';
  StrActivePeriodStart: string | undefined = '';
  StrActivePeriodStop: string | undefined = '';
  StrAdd: string | undefined = '';
  StrAdjustYourSettingsAndRefresh: string | undefined = '';
  StrAll: string | undefined = '';
  StrAnd: string | undefined = '';
  StrApply: string | undefined = '';
  StrApproveAll: string | undefined = '';
  StrAriaFlyoutButtonHelp: string | undefined = '';
  StrAscending: string | undefined = '';
  StrAssign: string | undefined = '';
  StrAvailable: string | undefined = '';
  StrBack: string | undefined = '';
  StrBadgeNumber: string | undefined = '';
  StrBreakType: string | undefined = '';
  StrBrowse: string | undefined = '';
  StrCalculator: string | undefined = '';
  StrCall: string | undefined = '';
  StrCancel: string | undefined = '';
  StrCapsOnWarning: string | undefined = '';
  StrChangeToHundredths: string | undefined = '';
  StrChangeToMinutes: string | undefined = '';
  StrCharactersRemaining: string | undefined = '';
  StrClass: string | undefined = '';
  StrClear: string | undefined = '';
  StrClearAll: string | undefined = '';
  StrClose: string | undefined = '';
  StrCollapseAll: string | undefined = '';
  StrConfiguration: string | undefined = '';
  StrConfirmNavigateWithoutSaving: string | undefined = '';
  StrConfirmNavigateWithoutSavingWithInvalidData: string | undefined = '';
  StrConfirmResumeSession: string | undefined = '';
  StrContinue: string | undefined = '';
  StrDate: string | undefined = '';
  StrDateIn: string | undefined = '';
  StrDateOut: string | undefined = '';
  StrDateOverMaxMessage: string | undefined = '';
  StrDateUnderMinMessage: string | undefined = '';
  StrDefault: string | undefined = '';
  StrDelete: string | undefined = '';
  StrDepartment: string | undefined = '';
  StrDescending: string | undefined = '';
  StrDescription: string | undefined = '';
  StrDeselectAll: string | undefined = '';
  StrDeselectAllMessage: string | undefined = '';
  StrDetail: string | undefined = '';
  StrDiscardChanges: string | undefined = '';
  StrDisplayWeekendWarning: string | undefined = '';
  StrDisplayWeekends: string | undefined = '';
  StrDownload: string | undefined = '';
  StrEdit: string | undefined = '';
  StrElapsed: string | undefined = '';
  StrEmpty: string | undefined = '';
  StrEnterRequiredFields: string | undefined = '';
  StrEnterValidAlpha: string | undefined = '';
  StrEnterValidAlphaNumeric: string | undefined = '';
  StrEnterValidDate: string | undefined = '';
  StrEnterValidDecimal: string | undefined = '';
  StrEnterValidEmail: string | undefined = '';
  StrEnterValidExtension: string | undefined = '';
  StrEnterValidHostname: string | undefined = '';
  StrEnterValidHours: string | undefined = '';
  StrEnterValidIpAddress: string | undefined = '';
  StrEnterValidNumeric: string | undefined = '';
  StrEnterValidNumericRange: string | undefined = '';
  StrEnterValidPIN: string | undefined = '';
  StrEnterValidPhone: string | undefined = '';
  StrEnterValidSMS: string | undefined = '';
  StrEnterValidSSN: string | undefined = '';
  StrEnterValidTime: string | undefined = '';
  StrEnterValidZip: string | undefined = '';
  StrExceedsMaximumSize: string | undefined = '';
  StrException: string | undefined = '';
  StrExceptionTypeHeaderKey: string | undefined = '';
  StrExceptions: string | undefined = '';
  StrExit: string | undefined = '';
  StrExpandAll: string | undefined = '';
  StrExportCode: string | undefined = '';
  StrFeedback: string | undefined = '';
  StrFilter: string | undefined = '';
  StrFilters: string | undefined = '';
  StrFinish: string | undefined = '';
  StrFirstName: string | undefined = '';
  StrGroup: string | undefined = '';
  StrGroupBy: string | undefined = '';
  StrHelp: string | undefined = '';
  StrHelpUrl: string | undefined = '';
  StrHiddenUnavailableSegmentsWarning: string | undefined = '';
  StrHireDate: string | undefined = '';
  StrHome: string | undefined = '';
  StrHours: string | undefined = '';
  StrHundredths: string | undefined = '';
  StrId: string | undefined = '';
  StrIncompatibleBrowserError: string | undefined = '';
  StrIndividual: string | undefined = '';
  StrInvalidSelection: string | undefined = '';
  StrLastName: string | undefined = '';
  StrLeave: string | undefined = '';
  StrLoad: string | undefined = '';
  StrLoadAllData: string | undefined = '';
  StrLocation: string | undefined = '';
  StrLocationFilter: string | undefined = '';
  StrLogOff: string | undefined = '';
  StrLogoTitle: string | undefined = '';
  StrMainNavigation: string | undefined = '';
  StrManage: string | undefined = '';
  StrManager: string | undefined = '';
  StrMap: string | undefined = '';
  StrMessage: string | undefined = '';
  StrMin: string | undefined = '';
  StrMinutes: string | undefined = '';
  StrMultiSelectNewValueErrorMessage: string | undefined = '';
  StrMustBeDaysAfterCurrentWeek: string | undefined = '';
  StrMyOptions: string | undefined = '';
  StrName: string | undefined = '';
  StrNavigatePeriod: string | undefined = '';
  StrNavigationWarning: string | undefined = '';
  StrNewEntry: string | undefined = '';
  StrNext: string | undefined = '';
  StrNextPeriod: string | undefined = '';
  StrNextWeek: string | undefined = '';
  StrNo: string | undefined = '';
  StrNoDataText: string | undefined = '';
  StrNoRecordSelectedMessage: string | undefined = '';
  StrNone: string | undefined = '';
  StrNoneItem: string | undefined = '';
  StrNote: string | undefined = '';
  StrOT1: string | undefined = '';
  StrOT2: string | undefined = '';
  StrOffline: string | undefined = '';
  StrOk: string | undefined = '';
  StrOpensNewModal: string | undefined = '';
  StrOpensNewWindow: string | undefined = '';
  StrOperationSuccessful: string | undefined = '';
  StrOptional: string | undefined = '';
  StrOptions: string | undefined = '';
  StrOrder: string | undefined = '';
  StrOverflow: string | undefined = '';
  StrOverridden: string | undefined = '';
  StrOverrideRoleSettings: string | undefined = '';
  StrOvertime1: string | undefined = '';
  StrOvertime2: string | undefined = '';
  StrOvertime: string | undefined = '';
  StrPIN: string | undefined = '';
  StrPageLayout: string | undefined = '';
  StrPageNumber: string | undefined = '';
  StrPageOf: string | undefined = '';
  StrPassword: string | undefined = '';
  StrPasteWillResultInInvalidLength: string | undefined = '';
  StrPeriodLabel: string | undefined = '';
  StrPeriodStartDateLabel: string | undefined = '';
  StrPeriodStopDateLabel: string | undefined = '';
  StrPrev: string | undefined = '';
  StrPrevWeek: string | undefined = '';
  StrPreview: string | undefined = '';
  StrPreviousPeriod: string | undefined = '';
  StrPrint: string | undefined = '';
  StrProcess: string | undefined = '';
  StrProcessIndicatorTitle: string | undefined = '';
  StrRate: string | undefined = '';
  StrRefresh: string | undefined = '';
  StrRegular: string | undefined = '';
  StrReject: string | undefined = '';
  StrRemaining: string | undefined = '';
  StrRemoveAll: string | undefined = '';
  StrReportProgressMessage: string | undefined = '';
  StrRequiresApproval: string | undefined = '';
  StrResources: string | undefined = '';
  StrResumeTutorial: string | undefined = '';
  StrRole: string | undefined = '';
  StrRoleDescription: string | undefined = '';
  StrSMS: string | undefined = '';
  StrSave: string | undefined = '';
  StrSaveAs: string | undefined = '';
  StrSchedule: string | undefined = '';
  StrSearch: string | undefined = '';
  StrSegmentFilter: string | undefined = '';
  StrSegmentLength: string | undefined = '';
  StrSelect: string | undefined = '';
  StrSelectAll: string | undefined = '';
  StrSelectAllMessage: string | undefined = '';
  StrSelectEntity: string | undefined = '';
  StrSelectedEntityMessage: string | undefined = '';
  StrSelectedItem: string | undefined = '';
  StrSeniorityDate: string | undefined = '';
  StrSessionTimeoutWarningMessage: string | undefined = '';
  StrSettings: string | undefined = '';
  StrShowDetails: string | undefined = '';
  StrShowExceptions: string | undefined = '';
  StrShowingOf: string | undefined = '';
  StrSort: string | undefined = '';
  StrSortByDirection: string | undefined = '';
  StrSortByField: string | undefined = '';
  StrSortByOption: string | undefined = '';
  StrStartGreaterThanEnd: string | undefined = '';
  StrStartTime: string | undefined = '';
  StrStatus: string | undefined = '';
  StrStayActive: string | undefined = '';
  StrStopTime: string | undefined = '';
  StrTemplates: string | undefined = '';
  StrTextExceedsCharacterLimit: string | undefined = '';
  StrTextExceedsMaxLength: string | undefined = '';
  StrTheCurrentWeek: string | undefined = '';
  StrTime: string | undefined = '';
  StrTimeIn: string | undefined = '';
  StrTimeOut: string | undefined = '';
  StrTimesheet: string | undefined = '';
  StrTimesheetEntry: string | undefined = '';
  StrTo: string | undefined = '';
  StrTop: string | undefined = '';
  StrTotal: string | undefined = '';
  StrTrackedFields: string | undefined = '';
  StrType: string | undefined = '';
  StrUnassign: string | undefined = '';
  StrUnavailable: string | undefined = '';
  StrUnexpectedErrorMessage: string | undefined = '';
  StrUpdate: string | undefined = '';
  StrUseArrowKeysHelp: string | undefined = '';
  StrVersionClientLabel: string | undefined = '';
  StrVersionRevisionLabel: string | undefined = '';
  StrVersionServerLabel: string | undefined = '';
  StrView: string | undefined = '';
  StrViewLoaded: string | undefined = '';
  StrWebSocketNotificationsConnectionUrl: string | undefined = '';
  StrYes: string | undefined = '';

  _ArrKeyTextItemDefaultEmployeeSortOptions: KeyTextItemImpl[] | undefined = [];

  _ArrKeyTextItemIdDescriptionSortOptions: KeyTextItemImpl[] | undefined = [];

  init(data: AppConfig) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, '_ArrKeyTextItemDefaultEmployeeSortOptions', KeyTextItemImpl);
    this.copyTypedArray(data, '_ArrKeyTextItemIdDescriptionSortOptions', KeyTextItemImpl);

    this.ObjMenuDownloadOptions =
      this.ObjMenuDownloadOptions !== undefined
        ? AbstractImpl.fromJSON(data.ObjMenuDownloadOptions, MenuImpl)
        : undefined;
    this.ObjDataTypeMap =
      this.ObjDataTypeMap !== undefined ? AbstractImpl.fromJSON(data.ObjDataTypeMap, DataTypeMapImpl) : undefined;
    this.ObjInputMethodMap =
      this.ObjInputMethodMap !== undefined
        ? AbstractImpl.fromJSON(data.ObjInputMethodMap, InputMethodMapImpl)
        : undefined;
  }

  getSearchPlaceholder() {
    return this.StrSearch || '';
  }

  getPagingPrefix() {
    return this.StrPageNumber ? CommonUtil.stringFormat(this.StrPageNumber, '').trim() : '';
  }

  getPagingSuffix(totalPages: number) {
    return this.StrPageOf
      ? this.StrPageOf.replace(this.StrPageNumber || '', '')
          .replace('{1}', String(totalPages))
          .trim()
      : '';
  }

  isNoneItem(key: string | number | undefined) {
    return this.IntNoneItemValue === key;
  }
}
