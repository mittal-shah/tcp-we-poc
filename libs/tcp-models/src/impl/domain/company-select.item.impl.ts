import { BadgeParseSpecImpl } from './badge-parse-spec.impl';
import { ApplicationModel, CompanySelectItemModel } from '../../declaration';
import { SelectItemImpl } from './select-item.impl';
import { CustomFieldControlImpl } from './input';
import { AbstractImpl } from '../abstract.impl';

export class CompanySelectItemImpl extends SelectItemImpl implements CompanySelectItemModel {
  ArrApplications: ApplicationModel[] | undefined = [];

  BlnCanAccessKiosk: boolean | undefined = false;

  BlnCanViewLogOnForgotPassword: boolean | undefined = false;

  BlnShowBreakButtons: boolean | undefined = false;

  BlnShowBypassLdap: boolean | undefined = false;

  BlnShowChangeCostCodeButton: boolean | undefined = false;

  BlnShowChangeJobCodeButton: boolean | undefined = false;

  BlnShowChangeLaborCodeButton: boolean | undefined = false;

  BlnShowClockInButton: boolean | undefined = false;

  BlnShowClockOutButton: boolean | undefined = false;

  BlnShowLaborCodeButton: boolean | undefined = false;

  BlnShowLogOnToDashboardButton: boolean | undefined = false;

  ObjBadgeParseSpec: BadgeParseSpecImpl | undefined;

  ObjCustomFieldControlModelLogOnId: CustomFieldControlImpl | undefined;

  ObjCustomFieldControlModelLogOnPassword: CustomFieldControlImpl | undefined;

  ObjCustomFieldControlModelLogOnEmployeePassword: CustomFieldControlImpl | undefined;

  ObjCustomFieldControlModelLogOnEmployeePin: CustomFieldControlImpl | undefined;

  StrCompanyNamespace: string | undefined = '';

  StrChangeCostCode: string | undefined = '';

  StrChangeJobCode: string | undefined = '';

  StrChangeLaborCode: string | undefined = '';

  StrClockIn: string | undefined = '';

  StrClockOut: string | undefined = '';

  StrLeaveOnBreak: string | undefined = '';

  StrLogOnIdLabel: string | undefined = '';

  StrPasswordEntryTitle: string | undefined = '';

  StrReturnFromBreak: string | undefined = '';

  _IntCompanyId: number | undefined = 0;

  _StrName: string | undefined = '';

  init(data: CompanySelectItemImpl) {
    if (!data) {
      return;
    }

    this.ObjBadgeParseSpec =
      this.ObjBadgeParseSpec !== undefined
        ? AbstractImpl.fromJSON(data.ObjBadgeParseSpec, BadgeParseSpecImpl)
        : undefined;

    this.ObjCustomFieldControlModelLogOnId =
      this.ObjCustomFieldControlModelLogOnId !== undefined
        ? AbstractImpl.fromJSON(data.ObjCustomFieldControlModelLogOnId, CustomFieldControlImpl)
        : undefined;

    this.ObjCustomFieldControlModelLogOnPassword =
      this.ObjCustomFieldControlModelLogOnPassword !== undefined
        ? AbstractImpl.fromJSON(data.ObjCustomFieldControlModelLogOnPassword, CustomFieldControlImpl)
        : undefined;

    this.ObjCustomFieldControlModelLogOnEmployeePassword =
      this.ObjCustomFieldControlModelLogOnEmployeePassword !== undefined
        ? AbstractImpl.fromJSON(data.ObjCustomFieldControlModelLogOnEmployeePassword, CustomFieldControlImpl)
        : undefined;

    this.ObjCustomFieldControlModelLogOnEmployeePin =
      this.ObjCustomFieldControlModelLogOnEmployeePin !== undefined
        ? AbstractImpl.fromJSON(data.ObjCustomFieldControlModelLogOnEmployeePin, CustomFieldControlImpl)
        : undefined;
  }

  getKey() {
    return this._IntCompanyId ? this._IntCompanyId : 0;
  }

  getValue() {
    return this._IntCompanyId ? this._IntCompanyId : 0;
  }

  getText() {
    return this._StrName;
  }

  setValue(value: number) {
    this._IntCompanyId = value;
  }

  setText(text: string) {
    this._StrName = text;
  }
}
