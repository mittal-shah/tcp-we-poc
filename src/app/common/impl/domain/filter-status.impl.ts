import {FilterStatusModel} from '../../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class FilterStatusImpl extends AbstractImpl implements FilterStatusModel {
  BlnAdvancedFilterApplied?: boolean | undefined = false;

  BlnAvailabilityFilterApplied?: boolean | undefined = false;

  BlnCanAccessAdvancedFilter?: boolean | undefined = false;

  BlnCanAccessAvailabilityFilter?: boolean | undefined = false;

  BlnCanAccessCostCodeFilter?: boolean | undefined = false;

  BlnCanAccessCoveredEmployeeFilter?: boolean | undefined = false;

  BlnCanAccessCustomFieldFilter?: boolean | undefined = false;

  BlnCanAccessEmployeeFilter?: boolean | undefined = false;

  BlnCanAccessExceptionFilter?: boolean | undefined = false;

  BlnCanAccessJobClassFilter?: boolean | undefined = false;

  BlnCanAccessJobCodeFilter?: boolean | undefined = false;

  BlnCanAccessLaborStandardFilter?: boolean | undefined = false;

  BlnCanAccessLeaveCalendarFilter?: boolean | undefined = false;

  BlnCanAccessMasterScheduleFilter?: boolean | undefined = false;

  BlnCanAccessMasterShiftFilter?: boolean | undefined = false;

  BlnCanAccessScheduleSegmentFilter?: boolean | undefined = false;

  BlnCanAccessSortKeySettings?: boolean | undefined = false;

  BlnCanAccessSubstituteEmployeeFilter?: boolean | undefined = false;

  BlnCanAccessTerminalFilter?: boolean | undefined = false;

  BlnCanAccessUserFilter?: boolean | undefined = false;

  BlnCostCodeFilterApplied?: boolean | undefined = false;

  BlnCoveredEmployeeFilterApplied?: boolean | undefined = false;

  BlnCustomFieldFilterApplied?: boolean | undefined = false;

  BlnEmployeeFilterApplied?: boolean | undefined = false;

  BlnExceptionFilterApplied?: boolean | undefined = false;

  BlnJobClassFilterApplied?: boolean | undefined = false;

  BlnJobCodeFilterApplied?: boolean | undefined = false;

  BlnLaborStandardFilterApplied?: boolean | undefined = false;

  BlnLeaveCalendarFilterApplied?: boolean | undefined = false;

  BlnMasterScheduleFilterApplied?: boolean | undefined = false;

  BlnMasterShiftFilterApplied?: boolean | undefined = false;

  BlnScheduleSegmentFilterApplied?: boolean | undefined = false;

  BlnSubstituteEmployeeFilterApplied?: boolean | undefined = false;

  BlnTerminalFilterApplied?: boolean | undefined = false;

  BlnUserFilterApplied?: boolean | undefined = false;

  IntCoveredEmployeeFilterKey?: number | undefined = 0;

  IntEmployeeCount?: number | undefined = 0;

  IntEmployeeFilterKey?: number | undefined = 0;

  IntKey?: number | undefined = 0;

  IntSubstituteEmployeeFilterKey?: number | undefined = 0;

  StrAdvancedFilterTitle?: string | undefined = '';

  StrAvailablityFilterTitle?: string | undefined = '';

  StrCostCodeFilterTitle?: string | undefined = '';

  StrCoveredEmployeeFilterHelp?: string | undefined = '';

  StrCoveredEmployeeFilterTitle?: string | undefined = '';

  StrCustomFieldFilterTitle?: string | undefined = '';

  StrEmployeeFilterHelp?: string | undefined = '';

  StrEmployeeFilterTitle?: string | undefined = '';

  StrExceptionFilterTitle?: string | undefined = '';

  StrJobClassFilterTitle?: string | undefined = '';

  StrJobCodeFilterTitle?: string | undefined = '';

  StrLaborStandardFilterHelp?: string | undefined = '';

  StrLaborStandardFilterTitle?: string | undefined = '';

  StrLeaveCalendarFilterTitle?: string | undefined = '';

  StrMasterScheduleFilterHelp?: string | undefined = '';

  StrMasterScheduleFilterTitle?: string | undefined = '';

  StrMasterShiftFilterHelp?: string | undefined = '';

  StrMasterShiftFilterTitle?: string | undefined = '';

  StrScheduleSegmentFilterTitle?: string | undefined = '';

  StrSortKeysTitle?: string | undefined = '';

  StrSubstituteEmployeeFilterHelp?: string | undefined = '';

  StrSubstituteEmployeeFilterTitle?: string | undefined = '';

  StrTerminalFilterTitle?: string | undefined = '';

  StrUserFilterTitle?: string | undefined = '';
}
