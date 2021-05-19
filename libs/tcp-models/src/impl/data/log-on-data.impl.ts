import { ListItemContext, LogOnData, MenuItemModel } from '../../declaration';
import { CompanySelectItemImpl, DeviceInfoImpl, SelectItemImpl, VersionInfoImpl } from '../domain';
import { AbstractImpl } from '../abstract.impl';
import { DropdownInputImpl } from '../domain/input';

export class LogOnDataImpl extends AbstractImpl implements LogOnData {
  ArrCompanies: CompanySelectItemImpl[] | undefined = [];

  BlnBadgeCommunication: boolean | undefined = false;

  BlnBadgeIdentification: boolean | undefined = false;

  BlnBiometricIdentification: boolean | undefined = false;

  BlnBypassLdap: boolean | undefined = false;

  BlnExternalBadge: boolean | undefined = false;

  BlnFatallyInvalidNamespace: boolean | undefined = false;

  BlnHasCompanies: boolean | undefined = false;

  BlnIsClockOperationCommand: boolean | undefined = false;

  BlnRememberMe: boolean | undefined = false;

  BlnResetNamespace: boolean | undefined = false;

  IntApplicationId: number | undefined = 0;

  IntApplicationProfile: number | undefined = 0;

  IntCompany: number | undefined = 0;

  IntMobileClientType: number | undefined = 0;

  LngTerminalConfigurationRecordId: number | undefined = 0;

  ObjDeviceInfo: DeviceInfoImpl | undefined;

  ObjSelectedCompany: CompanySelectItemImpl | undefined;

  ObjVersionInfo: VersionInfoImpl | undefined;

  ObjQrScannerMenuItem: MenuItemModel | undefined;

  StrPin: string | undefined = '';

  StrPinLabel: string | undefined = '';

  StrTemperatureCheckClientVersion: string | undefined = '';

  StrTemperatureCheckCommand: string | undefined = '';

  StrBiometricMatrixValue: string | undefined = '';

  StrClientConfigurationGuid: string | undefined = '';

  StrClientPlatformId: string | undefined = '';

  StrDatabaseInfoVersion: string | undefined = '';

  StrErrorMessage: string | undefined = '';

  StrErrorMessageDatabaseVersionInfoMismatch: string | undefined = '';

  StrImageSrc: string | undefined = '';

  StrLogOnId: string | undefined = '';

  StrLogOnIdLabel: string | undefined = '';

  StrMenuCommand: string | undefined = '';

  StrNamespace: string | undefined = '';

  StrPassword: string | undefined = '';

  StrPasswordLabel: string | undefined = '';

  init(data: LogOnData) {
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

  createCompanyDropdownInput(label: string | undefined, onSelect?: (selectItem: SelectItemImpl) => void) {
    if (!this.ArrCompanies) {
      return undefined;
    }

    const input = new DropdownInputImpl();

    input.handleOnSelectItem = onSelect;
    input.StrText = label;
    input.ObjListContext = {
      listItems: this.ArrCompanies,
      selectedItem: this.ArrCompanies?.findMatchingValue(String(this.IntCompany) || '') || this.ArrCompanies[0],
    } as ListItemContext;

    return input;
  }

  createSubmissionData() {
    const data = AbstractImpl.clone<LogOnDataImpl>(this, LogOnDataImpl);

    delete data.ArrCompanies;

    if (
      this.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePin &&
      !this.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePin?.StrValue
    ) {
      this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePin.StrValue = undefined;
    }

    if (
      this.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePassword &&
      !this.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePassword?.StrValue
    ) {
      this.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePassword.StrValue = undefined;
    }

    return data;
  }
}
