import AbstractImpl from '../../../../../../../libs/tcp-models/src/impl/abstract.impl';
import { LogOnData } from '../../../../../../../libs/tcp-models/src/declarations/global';
import CompanySelectItemImpl from '../domain/company-select.item.impl';
import Util from '../../../../../../../libs/tcp-util/src/util';
import DeviceInfoImpl from '../../../../../../../libs/tcp-models/src/impl/domain/device-info.impl';
import VersionInfoImpl from '../../../../../../../libs/tcp-models/src/impl/domain/version-info.impl';
import DropdownInput from '../../../../../../../libs/tcp-models/src/impl/domain/input/dropdown.input';
import { ListItemContext } from '../../../../../../../libs/tcp-models/src/declarations/types';
import SelectItemImpl from '../../../../../../../libs/tcp-models/src/impl/domain/select-item.impl';

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

  createCompanyDropdownInput(label: string | undefined, onSelect: (selectItem: SelectItemImpl) => void) {
    if (!this.ArrCompanies) {
      return undefined;
    }

    const input = new DropdownInput();

    input.handleOnSelectItem = onSelect;
    input.StrText = label;
    input.ObjListContext = {
      listItems: this.ArrCompanies,
      selectedItem: Util.findMatchingValue(this.ArrCompanies, String(this.IntCompany) || '') || this.ArrCompanies[0],
    } as ListItemContext;

    return input;
  }

  createSubmissionData() {
    const data = Util.cloneClassInstance<LogOnDataImpl>(this, LogOnDataImpl);

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
