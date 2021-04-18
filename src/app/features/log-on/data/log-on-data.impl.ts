import AbstractImpl from '../../../common/impl/abstract.impl';
import CustomFieldControlImpl from '../../../common/impl/domain/input/custom-field-control.impl';
import {LogOnData} from '../../../declarations/global';
import CompanySelectItemImpl from '../domain/company-select.item.impl';
import Util from '../../../util/util';
import DeviceInfoImpl from '../../../common/impl/domain/device-info.impl';
import VersionInfoImpl from '../../../common/impl/domain/version-info.impl';

export default class LogOnDataImpl extends AbstractImpl implements LogOnData {
  ArrCompanies?: CompanySelectItemImpl[] | undefined = [];

  BlnBadgeCommunication?: boolean | undefined = false;

  BlnBadgeIdentification?: boolean | undefined = false;

  BlnBiometricIdentification?: boolean | undefined = false;

  BlnBypassLdap?: boolean | undefined = false;

  BlnExternalBadge?: boolean | undefined = false;

  BlnFatallyInvalidNamespace?: boolean | undefined = false;

  BlnHasCompanies?: boolean | undefined = false;

  BlnIsClockOperationCommand?: boolean | undefined = false;

  BlnRememberMe?: boolean | undefined = false;

  BlnResetNamespace?: boolean | undefined = false;

  IntApplicationId?: number | undefined = 0;

  IntApplicationProfile?: number | undefined = 0;

  IntCompany?: number | undefined = 0;

  IntMobileClientType?: number | undefined = 0;

  LngTerminalConfigurationRecordId?: number | undefined = 0;

  ObjDeviceInfo?: DeviceInfoImpl | undefined;

  ObjSelectedCompany?: CompanySelectItemImpl | undefined;

  ObjVersionInfo?: VersionInfoImpl | undefined;

  StrBiometricMatrixValue?: string | undefined = '';

  StrClientConfigurationGuid?: string | undefined = '';

  StrClientPlatformId?: string | undefined = '';

  StrDatabaseInfoVersion?: string | undefined = '';

  StrErrorMessage?: string | undefined = '';

  StrErrorMessageDatabaseVersionInfoMismatch?: string | undefined = '';

  StrImageSrc?: string | undefined = '';

  StrLogOnId?: string | undefined = '';

  StrLogOnIdLabel?: string | undefined = '';

  StrMenuCommand?: string | undefined = '';

  StrNamespace?: string | undefined = '';

  StrPassword?: string | undefined = '';

  StrPasswordLabel?: string | undefined = '';

  init(data?: LogOnData) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrCompanies', CompanySelectItemImpl);

    this.ObjDeviceInfo =
      this.ObjDeviceInfo !== undefined ? AbstractImpl.fromJSON(data.ObjDeviceInfo, DeviceInfoImpl) : undefined;

    this.ObjSelectedCompany =
      this.ObjSelectedCompany !== undefined
        ? AbstractImpl.fromJSON(data.ObjSelectedCompany, CompanySelectItemImpl)
        : undefined;

    this.ObjVersionInfo =
      this.ObjVersionInfo !== undefined ? AbstractImpl.fromJSON(data.ObjVersionInfo, VersionInfoImpl) : undefined;

  }

  setLogOnId(userId?: string) {
    if (!this.ObjSelectedCompany || !userId) {
      return;
    }

    if (!this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnId) {
      this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnId = new CustomFieldControlImpl();
    }

    this.StrLogOnId = userId;
    this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnId.StrValue = userId;
  }

  setEmployeePin(employeePin?: string) {
    if (!this.ObjSelectedCompany || employeePin === undefined) {
      return;
    }

    if (!this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePin) {
      this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePin = new CustomFieldControlImpl();
    }

    this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePin.StrValue = employeePin;
  }

  setEmployeePassword(employeePassword?: string) {
    if (!this.ObjSelectedCompany || !this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePassword) {
      return;
    }
    this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePassword.StrValue = employeePassword;
  }

  setUserPassword(userPassword?: string) {
    if (!this.ObjSelectedCompany || !this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnPassword) {
      return;
    }

    this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnPassword.StrValue = userPassword;
  }

  createSubmissionData() {
    const data = Util.cloneClassInstance<LogOnDataImpl>(this, LogOnDataImpl);

    delete data.ArrCompanies;

    if (this.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePin &&
      !this.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePin?.StrValue) {
      this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePin.StrValue = undefined;
    }

    if (this.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePassword &&
      !this.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePassword?.StrValue) {
      this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePassword.StrValue = undefined;
    }

    return data;
  }
}
