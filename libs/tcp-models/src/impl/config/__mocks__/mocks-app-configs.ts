import { AppConfigImpl } from '../app.config.impl';
import { AbstractImpl } from '../../abstract.impl';
import { AppConfig } from '../../../declaration';

export class MocksAppConfigs {
  managerAppConfig: AppConfigImpl = AbstractImpl.fromJSON(
    {
      BlnEnableSameSiteSecureFlag: false,
      BlnIsWebClock: false,
      BlnShouldUseCookie: true,
      DatPersistentMax: '2078-12-31',
      DatPersistentMin: '1900-01-01',
      IntApplicationId: 30,
      IntCurrentWeekStaleException: 30,
      IntErrorExceptionValue: 5,
      IntExceptionTypeConfirmNegativeAccrualBalance: 101,
      IntExceptionTypeInvalidSession: 55,
      IntExceptionTypePersistence: 60,
      IntExceptionTypePresentation: 0,
      IntExceptionTypePresentationConfirmation: 20,
      IntExceptionTypePresentationConfirmationBioVerification: 24,
      IntExceptionTypePresentationConfirmationDeactivate: 21,
      IntExceptionTypePresentationConfirmationOfferExist: 26,
      IntExceptionTypePresentationConfirmationOfferTime: 27,
      IntExceptionTypePresentationConfirmationUnassign: 22,
      IntExceptionTypeUnableToReachServer: 100,
      IntExceptionTypeUnexpected: 99,
      IntExceptionTypeWorkflow: 70,
      IntFatalExceptionValue: 6,
      IntInformationExceptionValue: 3,
      IntMaxCostCodeSearchLength: 254,
      IntMaxRecords: 100,
      IntMinFullCodeSearchLength: 0,
      IntNoneItemValue: -999999999,
      IntNotificationPollInterval: 60000,
      IntReportOutputFormatPDF: 4,
      IntReportProgressIntervalMilliseconds: 1000,
      IntSearchMaxLength: 200,
      IntShortProgressStatusIntervalMilliseconds: 500,
      IntUserIdMaxLengthValue: 50,
      IntWarningExceptionValue: 4,
      LngMaxFileSizeBytes: 1000000,
      ObjDataTypeMap: {
        IntAllowedCharacters: 8,
        IntAlpha: 2,
        IntAlphaNumeric: 1,
        IntAlphaNumericWithSymbols: 9,
        IntCustomFormat: 7,
        IntFullDate: 4,
        IntNumeric: 3,
        IntPartialDate: 5,
        IntTime: 6,
      },
      ObjInputMethodMap: { IntComboEdit: 3, IntComboList: 2, IntEdit: 1, IntEditMultiSelect: 4 },
      ObjMenuDownloadOptions: {
        ArrMenuItemFavorites: [],
        ArrMenuItems: [
          {
            ArrMenuItems: [
              {
                ArrMenuItems: [],
                BlnIsSeparator: false,
                BlnPreventSelection: false,
                StrMenuCommand: '8',
                StrMenuText: 'HTML',
                StrRootMenuCommand: 'Download',
              },
              {
                ArrMenuItems: [],
                BlnIsSeparator: false,
                BlnPreventSelection: false,
                StrMenuCommand: '4',
                StrMenuText: 'PDF',
                StrRootMenuCommand: 'Download',
              },
              {
                ArrMenuItems: [],
                BlnIsSeparator: false,
                BlnPreventSelection: false,
                StrMenuCommand: '128',
                StrMenuText: 'OpenXML',
                StrRootMenuCommand: 'Download',
              },
            ],
            BlnIsSeparator: false,
            BlnPreventSelection: false,
            StrMenuCommand: 'Download',
            StrMenuText: 'Download',
            StrRootMenuCommand: 'Download',
          },
        ],
      },
      ObjWebSocketMessageConfig: {
        StrCommandAbort: 'ABORT',
        StrCommandConnected: 'CONNECTED',
        StrCommandFailure: 'FAILURE',
        StrCommandGatherPrint: 'GATHER_PRINT',
        StrCommandLogOn: 'LOG_ON',
        StrCommandPasswordEntry: 'PASSWORD_ENTRY',
        StrCommandPing: 'PING',
        StrCommandPong: 'PONG',
        StrCommandRemovePrint: 'REMOVE_PRINT',
        StrCommandStartEmployeeVerification: 'START_EMPLOYEE_VERIFICATION',
        StrCommandStartEnrollment: 'START_ENROLLMENT',
        StrCommandStartNotifications: 'START_NOTIFICATIONS',
        StrCommandStartUserVerification: 'START_USER_VERIFICATION',
        StrCommandStartVerifyPassword: 'START_VERIFY_PASSWORD',
        StrCommandSuccess: 'SUCCESS',
        StrCommandUnknown: 'UNKNOWN',
        StrCommandWebClockOffline: 'WEBCLOCK_OFFLINE',
        StrCommandWebClockOnline: 'WEBCLOCK_ONLINE',
        StrErrorConnectingToWorkstationHubThroughWebSocket: 'Error connecting to workstation hub through web socket',
      },
      StrAccept: 'Accept',
      StrAccruals: 'Accruals',
      StrActive: 'Active',
      StrActiveOnly: 'Active only',
      StrActivePeriodStart: 'Starts After',
      StrActivePeriodStop: 'Stops After',
      StrAdd: 'Add',
      StrAdjustYourSettingsAndRefresh: 'Adjust the settings above and click "Update"',
      StrAll: 'All',
      StrAnd: 'and',
      StrApply: 'Apply',
      StrApproveAll: 'ApproveAll',
      StrAriaFlyoutButtonHelp: 'flyout, press enter to open, escape to close and tab keys to navigate',
      StrAscending: 'Ascending',
      StrAssign: 'Assign',
      StrAvailable: 'Available',
      StrBack: 'Back',
      StrBadgeNumber: 'Badge number',
      StrBreakType: 'Break type',
      StrBrowse: 'Browse',
      StrCalculator: 'Calculator',
      StrCall: 'Call',
      StrCancel: 'Cancel',
      StrCapsOnWarning: 'Caps Lock is on',
      StrChangeToHundredths: 'Change to Hundredths',
      StrChangeToMinutes: 'Change to Minutes',
      StrCharactersRemaining: 'characters remaining',
      StrClass: 'Classification',
      StrClear: 'Clear',
      StrClearAll: 'Clear All',
      StrClose: 'Close',
      StrCollapseAll: 'Collapse all',
      StrConfirmNavigateWithoutSaving: 'This feature has unsaved changes.||How do you want to continue?',
      StrConfirmNavigateWithoutSavingWithInvalidData:
        'This feature has unsaved changes and has invalid data.||How do you want to continue?',
      StrConfirmResumeSession: 'Your session has expired. Would you like to resume it?',
      StrContinue: 'Continue',
      StrDate: 'Date',
      StrDateIn: 'Date in',
      StrDateOut: 'Date out',
      StrDateOverMaxMessage: 'Date {0} is invalid. Date must be on or before {1}',
      StrDateUnderMinMessage: 'Date {0} is invalid. Date must be on or after {1}',
      StrDefault: 'Default',
      StrDelete: 'Delete',
      StrDepartment: 'Department',
      StrDescending: 'Descending',
      StrDescription: 'Description',
      StrDeselectAll: 'Deselect All',
      StrDeselectAllMessage: 'Deselect all {0} records',
      StrDetail: 'detail',
      StrDiscardChanges: 'Discard Changes',
      StrDisplayWeekendWarning: 'Some segments are hidden',
      StrDisplayWeekends: 'Display weekends',
      StrDownload: 'Download',
      StrEdit: 'Edit',
      StrElapsed: 'Elapsed',
      StrEmpty: 'Empty',
      StrEnterRequiredFields: 'Enter required field(s).',
      StrEnterValidAlpha: 'Enter valid alpha',
      StrEnterValidAlphaNumeric: 'Enter valid alpha numeric',
      StrEnterValidDate: 'Enter valid date',
      StrEnterValidDecimal: 'Enter valid decimal',
      StrEnterValidEmail: 'Enter valid email address',
      StrEnterValidExtension: 'Enter valid extension',
      StrEnterValidHostname: 'Enter valid hostname',
      StrEnterValidHours: 'Enter valid hours',
      StrEnterValidIpAddress: 'Enter valid IP address',
      StrEnterValidNumeric: 'Enter valid number',
      StrEnterValidPIN: 'Enter valid PIN',
      StrEnterValidPhone: 'Enter valid phone number',
      StrEnterValidSMS: 'Enter valid SMS address',
      StrEnterValidSSN: 'Enter valid Social Security Number',
      StrEnterValidTime: 'Enter valid time',
      StrEnterValidZip: 'Enter valid zip code',
      StrExceedsMaximumSize: 'File exceeds maximum size of 1 MB',
      StrException: 'Exception',
      StrExceptionTypeHeaderKey: 'EXCEPTION_TYPE',
      StrExceptions: 'Exceptions',
      StrExit: 'Close',
      StrExpandAll: 'Expand all',
      StrExportCode: 'Export code',
      StrFeedback: 'Feedback',
      StrFilter: 'Filter',
      StrFilters: 'Filters',
      StrFinish: 'Finish',
      StrFirstName: 'First name',
      StrGroup: 'Group',
      StrHelp: 'Help',
      StrHelpUrl: 'https://timeclockplus.force.com/TCPSupport/s/',
      StrHiddenUnavailableSegmentsWarning: 'Some unavailable segments are hidden',
      StrHireDate: 'Hire date',
      StrHome: 'Home',
      StrHours: 'Hours',
      StrHundredths: 'Hundredths',
      StrId: 'ID',
      StrIncompatibleBrowserError: 'For best experience please use a supported browser: IE 10+, Chrome, FireFox',
      StrIndividual: 'Individual',
      StrInvalidSelection: 'Invalid selection',
      StrLastName: 'Last name',
      StrLeave: 'Leave',
      StrLoad: 'Load',
      StrLoadAllData: 'Load all data',
      StrLocation: 'Location',
      StrLocationFilter: 'Location Filter',
      StrLogOff: 'Log Off',
      StrLogoTitle: 'Logo',
      StrMainNavigation: 'Main navigation',
      StrManage: 'Manage',
      StrManager: 'Manager',
      StrMap: 'Map',
      StrMessage: 'Message',
      StrMin: 'min',
      StrMinutes: 'Minutes',
      StrMultiSelectNewValueErrorMessage: 'Please enter valid unique entry without containing semicolon',
      StrMyOptions: 'My Options',
      StrName: 'Name',
      StrNavigatePeriod: 'Navigate Period',
      StrNavigationWarning:
        'A task is currently running. Navigating away from this page may result in a loss of data. Are you sure you wish to continue?',
      StrNewEntry: 'New Entry',
      StrNext: 'Next',
      StrNextPeriod: 'Next period',
      StrNextWeek: 'Next Week',
      StrNo: 'No',
      StrNoDataText: 'No records found',
      StrNoRecordSelectedMessage: 'Please select an item to continue',
      StrNone: 'None',
      StrNoneItem: '<< NONE >>',
      StrNote: 'Note',
      StrOT1: 'OT1',
      StrOT2: 'OT2',
      StrOffline: 'Offline',
      StrOk: 'Ok',
      StrOpensNewModal: ' Opens new dialog',
      StrOpensNewWindow: ' opens new window',
      StrOperationSuccessful: 'Operation successful',
      StrOptional: 'Optional',
      StrOptions: 'Options',
      StrOrder: 'Order',
      StrOverflow: 'Overflow',
      StrOverridden: 'Overridden',
      StrOverrideRoleSettings: 'Override role settings',
      StrOvertime: 'Overtime',
      StrOvertime1: 'Overtime 1',
      StrOvertime2: 'Overtime 2',
      StrPIN: 'PIN',
      StrPageLayout: 'Page Layout',
      StrPageNumber: 'Page {0}',
      StrPageOf: 'Page {0} of {1}',
      StrPassword: 'Password',
      StrPasteWillResultInInvalidLength: 'Paste will result in invalid length',
      StrPeriodLabel: 'Period',
      StrPeriodStartDateLabel: 'Start date',
      StrPeriodStopDateLabel: 'Stop date',
      StrPrev: 'Prev',
      StrPrevWeek: 'Prev Week',
      StrPreview: 'Preview',
      StrPreviousPeriod: 'Previous Period',
      StrPrint: 'Print',
      StrProcess: 'Process',
      StrProcessIndicatorTitle: 'Processing',
      StrRate: 'Rate',
      StrRefresh: 'Refresh',
      StrRegular: 'Regular',
      StrReject: 'Reject',
      StrRemaining: 'Remaining',
      StrRemoveAll: 'Remove All',
      StrReportProgressMessage: 'Generating report...',
      StrRequiresApproval: 'Requires Approval',
      StrResources: 'Resources',
      StrResumeTutorial: 'Resume tutorial',
      StrRole: 'Role',
      StrRoleDescription: 'Role Description',
      StrSMS: 'SMS',
      StrSave: 'Save',
      StrSaveAs: 'Save as',
      StrSchedule: 'Schedule',
      StrSearch: 'Search',
      StrSegmentFilter: 'Segment Filter',
      StrSegmentLength: 'Segment Length',
      StrSelect: 'Select',
      StrSelectAll: 'Select All',
      StrSelectAllMessage: 'Select all {0} records',
      StrSelectEntity: 'Select Item',
      StrSelectedEntityMessage: 'Selected {0} records',
      StrSelectedItem: 'Selected Item :',
      StrSeniorityDate: 'Seniority Date',
      StrSessionTimeoutWarningMessage: 'Session will timeout in {0} seconds',
      StrSettings: 'Settings',
      StrShowDetails: 'Show Details',
      StrShowExceptions: 'Show Exceptions',
      StrShowingOf: 'Showing {0} records of {1}',
      StrSort: 'Sort',
      StrSortByDirection: 'Sort By Direction',
      StrSortByField: 'Sort by: {0}',
      StrSortByOption: 'Sort By Option',
      StrStartGreaterThanEnd: 'The start date should be before the end date.',
      StrStartTime: 'Start time',
      StrStatus: 'Status',
      StrStayActive: 'Stay Active',
      StrStopTime: 'Stop time',
      StrTemplates: 'Templates',
      StrTextExceedsCharacterLimit: "Character limit can't exceed 200",
      StrTextExceedsMaxLength: 'The text exceeds the maximum number of allowed characters.',
      StrTheCurrentWeek: 'the current week ({0})',
      StrTime: 'Time',
      StrTimeIn: 'Time in',
      StrTimeOut: 'Time out',
      StrTimesheet: 'Time sheet',
      StrTimesheetEntry: 'Time Sheet Entry',
      StrTo: 'to',
      StrTop: 'Top',
      StrTotal: 'Total',
      StrTrackedFields: 'Tracked Fields',
      StrType: 'Type',
      StrUnassign: 'Unassign',
      StrUnavailable: 'Unavailable',
      StrUnexpectedErrorMessage:
        '{0}||An unexpected error has occurred.||If this message persists please try clearing your application cache and refreshing your browser.',
      StrUpdate: 'Update',
      StrUseArrowKeysHelp: 'Use arrow keys to navigate',
      StrVersionClientLabel: 'Client: ',
      StrVersionRevisionLabel: 'Revision: ',
      StrVersionServerLabel: 'Server: ',
      StrView: 'View',
      StrViewLoaded: 'view loaded',
      StrYes: 'Yes',
    } as AppConfig,
    AppConfigImpl,
  );

  webclockAppConfig: AppConfigImpl = AppConfigImpl.fromJSON(
    {
      BlnEnableSameSiteSecureFlag: false,
      BlnIsWebClock: true,
      BlnShouldUseCookie: true,
      DatPersistentMax: '2078-12-31',
      DatPersistentMin: '1900-01-01',
      IntApplicationId: 130,
      IntCurrentWeekStaleException: 30,
      IntErrorExceptionValue: 5,
      IntExceptionTypeConfirmNegativeAccrualBalance: 101,
      IntExceptionTypeInvalidSession: 55,
      IntExceptionTypePersistence: 60,
      IntExceptionTypePresentation: 0,
      IntExceptionTypePresentationConfirmation: 20,
      IntExceptionTypePresentationConfirmationBioVerification: 24,
      IntExceptionTypePresentationConfirmationDeactivate: 21,
      IntExceptionTypePresentationConfirmationOfferExist: 26,
      IntExceptionTypePresentationConfirmationOfferTime: 27,
      IntExceptionTypePresentationConfirmationUnassign: 22,
      IntExceptionTypeUnableToReachServer: 100,
      IntExceptionTypeUnexpected: 99,
      IntExceptionTypeWorkflow: 70,
      IntFatalExceptionValue: 6,
      IntInformationExceptionValue: 3,
      IntMaxCostCodeSearchLength: 254,
      IntMaxRecords: 100,
      IntMinFullCodeSearchLength: 0,
      IntNoneItemValue: -999999999,
      IntNotificationPollInterval: 60000,
      IntReportOutputFormatPDF: 4,
      IntReportProgressIntervalMilliseconds: 1000,
      IntSearchMaxLength: 200,
      IntShortProgressStatusIntervalMilliseconds: 500,
      IntUserIdMaxLengthValue: 50,
      IntWarningExceptionValue: 4,
      LngMaxFileSizeBytes: 1000000,
      ObjDataTypeMap: {
        IntAllowedCharacters: 8,
        IntAlpha: 2,
        IntAlphaNumeric: 1,
        IntAlphaNumericWithSymbols: 9,
        IntCustomFormat: 7,
        IntFullDate: 4,
        IntNumeric: 3,
        IntPartialDate: 5,
        IntTime: 6,
      },
      ObjInputMethodMap: { IntComboEdit: 3, IntComboList: 2, IntEdit: 1, IntEditMultiSelect: 4 },
      ObjMenuDownloadOptions: {
        ArrMenuItemFavorites: [],
        ArrMenuItems: [
          {
            ArrMenuItems: [
              {
                ArrMenuItems: [],
                BlnIsSeparator: false,
                BlnPreventSelection: false,
                StrMenuCommand: '8',
                StrMenuText: 'HTML',
                StrRootMenuCommand: 'Download',
              },
              {
                ArrMenuItems: [],
                BlnIsSeparator: false,
                BlnPreventSelection: false,
                StrMenuCommand: '4',
                StrMenuText: 'PDF',
                StrRootMenuCommand: 'Download',
              },
              {
                ArrMenuItems: [],
                BlnIsSeparator: false,
                BlnPreventSelection: false,
                StrMenuCommand: '128',
                StrMenuText: 'OpenXML',
                StrRootMenuCommand: 'Download',
              },
            ],
            BlnIsSeparator: false,
            BlnPreventSelection: false,
            StrMenuCommand: 'Download',
            StrMenuText: 'Download',
            StrRootMenuCommand: 'Download',
          },
        ],
      },
      ObjWebSocketMessageConfig: {
        StrCommandAbort: 'ABORT',
        StrCommandConnected: 'CONNECTED',
        StrCommandFailure: 'FAILURE',
        StrCommandGatherPrint: 'GATHER_PRINT',
        StrCommandLogOn: 'LOG_ON',
        StrCommandPasswordEntry: 'PASSWORD_ENTRY',
        StrCommandPing: 'PING',
        StrCommandPong: 'PONG',
        StrCommandRemovePrint: 'REMOVE_PRINT',
        StrCommandStartEmployeeVerification: 'START_EMPLOYEE_VERIFICATION',
        StrCommandStartEnrollment: 'START_ENROLLMENT',
        StrCommandStartNotifications: 'START_NOTIFICATIONS',
        StrCommandStartUserVerification: 'START_USER_VERIFICATION',
        StrCommandStartVerifyPassword: 'START_VERIFY_PASSWORD',
        StrCommandSuccess: 'SUCCESS',
        StrCommandUnknown: 'UNKNOWN',
        StrCommandWebClockOffline: 'WEBCLOCK_OFFLINE',
        StrCommandWebClockOnline: 'WEBCLOCK_ONLINE',
        StrErrorConnectingToWorkstationHubThroughWebSocket: 'Error connecting to workstation hub through web socket',
      },
      StrAccept: 'Accept',
      StrAccruals: 'Accruals',
      StrActive: 'Active',
      StrActiveOnly: 'Active only',
      StrActivePeriodStart: 'Starts After',
      StrActivePeriodStop: 'Stops After',
      StrAdd: 'Add',
      StrAdjustYourSettingsAndRefresh: 'Adjust the settings above and click "Update"',
      StrAll: 'All',
      StrAnd: 'and',
      StrApply: 'Apply',
      StrApproveAll: 'ApproveAll',
      StrAriaFlyoutButtonHelp: 'flyout, press enter to open, escape to close and tab keys to navigate',
      StrAscending: 'Ascending',
      StrAssign: 'Assign',
      StrAvailable: 'Available',
      StrBack: 'Back',
      StrBadgeNumber: 'Badge number',
      StrBreakType: 'Break type',
      StrBrowse: 'Browse',
      StrCalculator: 'Calculator',
      StrCall: 'Call',
      StrCancel: 'Cancel',
      StrCapsOnWarning: 'Caps Lock is on',
      StrChangeToHundredths: 'Change to Hundredths',
      StrChangeToMinutes: 'Change to Minutes',
      StrCharactersRemaining: 'characters remaining',
      StrClass: 'Classification',
      StrClear: 'Clear',
      StrClearAll: 'Clear All',
      StrClose: 'Close',
      StrCollapseAll: 'Collapse all',
      StrConfirmNavigateWithoutSaving: 'This feature has unsaved changes.||How do you want to continue?',
      StrConfirmNavigateWithoutSavingWithInvalidData:
        'This feature has unsaved changes and has invalid data.||How do you want to continue?',
      StrConfirmResumeSession: 'Your session has expired. Would you like to resume it?',
      StrContinue: 'Continue',
      StrDate: 'Date',
      StrDateIn: 'Date in',
      StrDateOut: 'Date out',
      StrDateOverMaxMessage: 'Date {0} is invalid. Date must be on or before {1}',
      StrDateUnderMinMessage: 'Date {0} is invalid. Date must be on or after {1}',
      StrDefault: 'Default',
      StrDelete: 'Delete',
      StrDepartment: 'Department',
      StrDescending: 'Descending',
      StrDescription: 'Description',
      StrDeselectAll: 'Deselect All',
      StrDeselectAllMessage: 'Deselect all {0} records',
      StrDetail: 'detail',
      StrDiscardChanges: 'Discard Changes',
      StrDisplayWeekendWarning: 'Some segments are hidden',
      StrDisplayWeekends: 'Display weekends',
      StrDownload: 'Download',
      StrEdit: 'Edit',
      StrElapsed: 'Elapsed',
      StrEmpty: 'Empty',
      StrEnterRequiredFields: 'Enter required field(s).',
      StrEnterValidAlpha: 'Enter valid alpha',
      StrEnterValidAlphaNumeric: 'Enter valid alpha numeric',
      StrEnterValidDate: 'Enter valid date',
      StrEnterValidDecimal: 'Enter valid decimal',
      StrEnterValidEmail: 'Enter valid email address',
      StrEnterValidExtension: 'Enter valid extension',
      StrEnterValidHostname: 'Enter valid hostname',
      StrEnterValidHours: 'Enter valid hours',
      StrEnterValidIpAddress: 'Enter valid IP address',
      StrEnterValidNumeric: 'Enter valid number',
      StrEnterValidPIN: 'Enter valid PIN',
      StrEnterValidPhone: 'Enter valid phone number',
      StrEnterValidSMS: 'Enter valid SMS address',
      StrEnterValidSSN: 'Enter valid Social Security Number',
      StrEnterValidTime: 'Enter valid time',
      StrEnterValidZip: 'Enter valid zip code',
      StrExceedsMaximumSize: 'File exceeds maximum size of 1 MB',
      StrException: 'Exception',
      StrExceptionTypeHeaderKey: 'EXCEPTION_TYPE',
      StrExceptions: 'Exceptions',
      StrExit: 'Close',
      StrExpandAll: 'Expand all',
      StrExportCode: 'Export code',
      StrFeedback: 'Feedback',
      StrFilter: 'Filter',
      StrFilters: 'Filters',
      StrFinish: 'Finish',
      StrFirstName: 'First name',
      StrGroup: 'Group',
      StrHelp: 'Help',
      StrHelpUrl: 'https://timeclockplus.force.com/TCPSupport/s/',
      StrHiddenUnavailableSegmentsWarning: 'Some unavailable segments are hidden',
      StrHireDate: 'Hire date',
      StrHome: 'Home',
      StrHours: 'Hours',
      StrHundredths: 'Hundredths',
      StrId: 'ID',
      StrIncompatibleBrowserError: 'For best experience please use a supported browser: IE 10+, Chrome, FireFox',
      StrIndividual: 'Individual',
      StrInvalidSelection: 'Invalid selection',
      StrLastName: 'Last name',
      StrLeave: 'Leave',
      StrLoad: 'Load',
      StrLoadAllData: 'Load all data',
      StrLocation: 'Location',
      StrLocationFilter: 'Location Filter',
      StrLogOff: 'Log Off',
      StrLogoTitle: 'Logo',
      StrMainNavigation: 'Main navigation',
      StrManage: 'Manage',
      StrManager: 'Manager',
      StrMap: 'Map',
      StrMessage: 'Message',
      StrMin: 'min',
      StrMinutes: 'Minutes',
      StrMultiSelectNewValueErrorMessage: 'Please enter valid unique entry without containing semicolon',
      StrMyOptions: 'My Options',
      StrName: 'Name',
      StrNavigatePeriod: 'Navigate Period',
      StrNavigationWarning:
        'A task is currently running. Navigating away from this page may result in a loss of data. Are you sure you wish to continue?',
      StrNewEntry: 'New Entry',
      StrNext: 'Next',
      StrNextPeriod: 'Next period',
      StrNextWeek: 'Next Week',
      StrNo: 'No',
      StrNoDataText: 'No records found',
      StrNoRecordSelectedMessage: 'Please select an item to continue',
      StrNone: 'None',
      StrNoneItem: '<< NONE >>',
      StrNote: 'Note',
      StrOT1: 'OT1',
      StrOT2: 'OT2',
      StrOffline: 'Offline',
      StrOk: 'Ok',
      StrOpensNewModal: ' Opens new dialog',
      StrOpensNewWindow: ' opens new window',
      StrOperationSuccessful: 'Operation successful',
      StrOptional: 'Optional',
      StrOptions: 'Options',
      StrOrder: 'Order',
      StrOverflow: 'Overflow',
      StrOverridden: 'Overridden',
      StrOverrideRoleSettings: 'Override role settings',
      StrOvertime: 'Overtime',
      StrOvertime1: 'Overtime 1',
      StrOvertime2: 'Overtime 2',
      StrPIN: 'PIN',
      StrPageLayout: 'Page Layout',
      StrPageNumber: 'Page {0}',
      StrPageOf: 'Page {0} of {1}',
      StrPassword: 'Password',
      StrPasteWillResultInInvalidLength: 'Paste will result in invalid length',
      StrPeriodLabel: 'Period',
      StrPeriodStartDateLabel: 'Start date',
      StrPeriodStopDateLabel: 'Stop date',
      StrPrev: 'Prev',
      StrPrevWeek: 'Prev Week',
      StrPreview: 'Preview',
      StrPreviousPeriod: 'Previous Period',
      StrPrint: 'Print',
      StrProcess: 'Process',
      StrProcessIndicatorTitle: 'Processing',
      StrRate: 'Rate',
      StrRefresh: 'Refresh',
      StrRegular: 'Regular',
      StrReject: 'Reject',
      StrRemaining: 'Remaining',
      StrRemoveAll: 'Remove All',
      StrReportProgressMessage: 'Generating report...',
      StrRequiresApproval: 'Requires Approval',
      StrResources: 'Resources',
      StrResumeTutorial: 'Resume tutorial',
      StrRole: 'Role',
      StrRoleDescription: 'Role Description',
      StrSMS: 'SMS',
      StrSave: 'Save',
      StrSaveAs: 'Save as',
      StrSchedule: 'Schedule',
      StrSearch: 'Search',
      StrSegmentFilter: 'Segment Filter',
      StrSegmentLength: 'Segment Length',
      StrSelect: 'Select',
      StrSelectAll: 'Select All',
      StrSelectAllMessage: 'Select all {0} records',
      StrSelectEntity: 'Select Item',
      StrSelectedEntityMessage: 'Selected {0} records',
      StrSelectedItem: 'Selected Item :',
      StrSeniorityDate: 'Seniority Date',
      StrSessionTimeoutWarningMessage: 'Session will timeout in {0} seconds',
      StrSettings: 'Settings',
      StrShowDetails: 'Show Details',
      StrShowExceptions: 'Show Exceptions',
      StrShowingOf: 'Showing {0} records of {1}',
      StrSort: 'Sort',
      StrSortByDirection: 'Sort By Direction',
      StrSortByField: 'Sort by: {0}',
      StrSortByOption: 'Sort By Option',
      StrStartGreaterThanEnd: 'The start date should be before the end date.',
      StrStartTime: 'Start time',
      StrStatus: 'Status',
      StrStayActive: 'Stay Active',
      StrStopTime: 'Stop time',
      StrTemplates: 'Templates',
      StrTextExceedsCharacterLimit: "Character limit can't exceed 200",
      StrTextExceedsMaxLength: 'The text exceeds the maximum number of allowed characters.',
      StrTheCurrentWeek: 'the current week ({0})',
      StrTime: 'Time',
      StrTimeIn: 'Time in',
      StrTimeOut: 'Time out',
      StrTimesheet: 'Time sheet',
      StrTimesheetEntry: 'Time Sheet Entry',
      StrTo: 'to',
      StrTop: 'Top',
      StrTotal: 'Total',
      StrTrackedFields: 'Tracked Fields',
      StrType: 'Type',
      StrUnassign: 'Unassign',
      StrUnavailable: 'Unavailable',
      StrUnexpectedErrorMessage:
        '{0}||An unexpected error has occurred.||If this message persists please try clearing your application cache and refreshing your browser.',
      StrUpdate: 'Update',
      StrUseArrowKeysHelp: 'Use arrow keys to navigate',
      StrVersionClientLabel: 'Client: ',
      StrVersionRevisionLabel: 'Revision: ',
      StrVersionServerLabel: 'Server: ',
      StrView: 'View',
      StrViewLoaded: 'view loaded',
      StrYes: 'Yes',
    } as AppConfig,
    AppConfigImpl,
  );
}
