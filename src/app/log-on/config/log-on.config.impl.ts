import {ClockResourceModel, EmployeeLogOnConfig, LogOnConfig} from '../../declarations/global';
import WebClockMenuCommandConfigImpl from '../../common/impl/config/web-clock-menu-command.config.impl';
import AbstractImpl from '../../common/impl/abstract.impl';

export default class LogOnConfigImpl extends AbstractImpl implements LogOnConfig {
  ArrCompanyNamespaces?: string[] | undefined = [];

  BlnRequireUserToEnterCompanyId?: boolean | undefined = false;

  BlnShowCompanyNamespaces?: boolean | undefined = false;

  IntMaxCompanyId?: number | undefined = 0;

  IntMaxLengthCompanyNamespace?: number | undefined = 0;

  IntMaxLengthEmployeeId?: number | undefined = 0;

  IntMinCompanyId?: number | undefined = 0;

  ObjClockResources?: ClockResourceModel | undefined;

  ObjMenuCommandConfig?: WebClockMenuCommandConfigImpl | undefined;

  StrBypassLdap?: string | undefined = '';

  StrCompanyHelpText?: string | undefined = '';

  StrCompanyNamespace?: string | undefined = '';

  StrCompanyNamespaceHelpText?: string | undefined = '';

  StrCompanyNamespaceSubText?: string | undefined = '';

  StrCopyright?: string | undefined = '';

  StrCustomLogoImagePath?: string | undefined = '';

  StrDeviceMode?: string | undefined = '';

  StrDeviceModeHelpText?: string | undefined = '';

  StrEmployeeIdHelpText?: string | undefined = '';

  StrEnterId?: string | undefined = '';

  StrLogOn?: string | undefined = '';

  StrLogOnToDashboard?: string | undefined = '';

  StrManualQuickPunch?: string | undefined = '';

  StrPersonalMode?: string | undefined = '';

  StrPinEntry?: string | undefined = '';

  StrSelectCompany?: string | undefined = '';

  StrSelectCompanyNamespace?: string | undefined = '';

  StrUseLdapAuthentication?: string | undefined = '';

  init(data?: EmployeeLogOnConfig) {
    if (!data) {
      return;
    }

    this.ObjMenuCommandConfig =
      this.ObjMenuCommandConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjMenuCommandConfig, WebClockMenuCommandConfigImpl)
        : undefined;
  }
}
