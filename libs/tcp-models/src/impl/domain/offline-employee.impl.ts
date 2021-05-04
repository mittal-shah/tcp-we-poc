import { OfflineEmployeeJobCodeModel, OfflineEmployeeModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { LongStringItemImpl } from './long-string-item.impl';

export class OfflineEmployeeImpl extends AbstractImpl implements OfflineEmployeeModel {
  BlnHasNoCostCodes: boolean | undefined = false;

  BlnHasNoJobCodes: boolean | undefined = false;

  BlnUseDefaultCostCode: boolean | undefined = false;

  BlnUseDefaultJobCode: boolean | undefined = false;

  IntCompanyId: number | undefined = 0;

  LngDefaultJobCodeRecordId: number | undefined = 0;

  LngEmployeeId: number | undefined = 0;

  LngRecordId: number | undefined = 0;

  ObjLongStringItemDefaultCostCode: LongStringItemImpl | undefined = undefined;

  StrBadge: string | undefined = '';

  StrExportCode: string | undefined = '';

  StrFullName: string | undefined = '';

  StrPIN: string | undefined = '';

  _ArrOfflineEmployeeJobCodes: OfflineEmployeeJobCodeModel[] | undefined = undefined;

  init(data: OfflineEmployeeModel) {
    if (!data) {
      return;
    }

    this.ObjLongStringItemDefaultCostCode =
      this.ObjLongStringItemDefaultCostCode !== undefined
        ? AbstractImpl.fromJSON(data.ObjLongStringItemDefaultCostCode, LongStringItemImpl)
        : undefined;
  }

  getKey() {
    return this.LngRecordId;
  }

  getValue() {
    return this.LngEmployeeId;
  }

  anyJobCodeRequiresTrackedFields(isClockIn: boolean) {
    return (
      this.anyJobCodeRequiresTrackedField1(isClockIn) ||
      this.anyJobCodeRequiresTrackedField2(isClockIn) ||
      this.anyJobCodeRequiresTrackedField3(isClockIn)
    );
  }

  anyJobCodeRequiresTrackedField1(isClockIn: boolean) {
    return this.getEmployeeJobCodes().some((offlineJobCode) => {
      return (
        (isClockIn && offlineJobCode.BlnAskTrackedField1OnClockIn) ||
        (!isClockIn && offlineJobCode.BlnAskTrackedField1OnClockOut)
      );
    });
  }

  anyJobCodeRequiresTrackedField2(isClockIn: boolean) {
    return this.getEmployeeJobCodes().some((offlineJobCode) => {
      return (
        (isClockIn && offlineJobCode.BlnAskTrackedField2OnClockIn) ||
        (!isClockIn && offlineJobCode.BlnAskTrackedField2OnClockOut)
      );
    });
  }

  anyJobCodeRequiresTrackedField3(isClockIn: boolean) {
    return this.getEmployeeJobCodes().some((offlineJobCode) => {
      return (
        (isClockIn && offlineJobCode.BlnAskTrackedField3OnClockIn) ||
        (!isClockIn && offlineJobCode.BlnAskTrackedField3OnClockOut)
      );
    });
  }

  getEmployeeJobCodes() {
    return this._ArrOfflineEmployeeJobCodes || [];
  }

  getJobCodesMatchingBadge(employeeBadge: string) {
    return this._ArrOfflineEmployeeJobCodes
      ? this._ArrOfflineEmployeeJobCodes.filter((employeeJobCode) => employeeJobCode.StrBadge === employeeBadge)
      : [];
  }

  hasJobCodesMatchingBadge(employeeBadge: string) {
    return this.getJobCodesMatchingBadge(employeeBadge).length > 0;
  }
}
