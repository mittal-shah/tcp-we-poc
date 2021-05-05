import { ClockResourceModel, EmployeeLogOnConfig, LogOnConfig } from '../../declaration';
import { WebClockMenuCommandConfigImpl } from './web-clock-menu-command.config.impl';
import { AbstractImpl } from '../abstract.impl';

export class LogOnConfigImpl extends AbstractImpl implements LogOnConfig {
  ArrCompanyNamespaces: string[] | undefined = [];

  BlnRequireUserToEnterCompanyId: boolean | undefined = false;

  BlnShowCompanyNamespaces: boolean | undefined = false;

  BlnCanSetupTerminalHub: boolean | undefined = false;

  BlnCanSetupWorkstationHub: boolean | undefined = false;

  BlnShouldShowTerminalHubSetup: boolean | undefined = false;

  BlnShouldShowWorkstationHubSetup: boolean | undefined = false;

  BlnShowPassword: boolean | undefined = false;

  IntMaxLengthLogOnId: number | undefined = 0;

  IntMaxCompanyId: number | undefined = 0;

  IntMaxLengthCompanyNamespace: number | undefined = 0;

  IntMaxLengthEmployeeId: number | undefined = 0;

  IntMinCompanyId: number | undefined = 0;

  ObjClockResources: ClockResourceModel | undefined;

  ObjMenuCommandConfig: WebClockMenuCommandConfigImpl | undefined;

  StrAppServerApiBaseUrl: string | undefined = '';

  StrApplicationName: string | undefined = '';

  StrDefaultLogOnId: string | undefined = '';

  StrForgotPassword: string | undefined = '';

  StrKeepMeLoggedIn: string | undefined = '';

  StrSetupTerminalHub: string | undefined = '';

  StrSetupWorkstationHub: string | undefined = '';

  StrBypassLdap: string | undefined = '';

  StrCompanyHelpText: string | undefined = '';

  StrCompanyNamespace: string | undefined = '';

  StrCompanyNamespaceHelpText: string | undefined = '';

  StrCompanyNamespaceSubText: string | undefined = '';

  StrCopyright: string | undefined = '';

  StrCustomLogoImagePath: string | undefined = '';

  StrDeviceMode: string | undefined = '';

  StrDeviceModeHelpText: string | undefined = '';

  StrEmployeeIdHelpText: string | undefined = '';

  StrEnterId: string | undefined = '';

  StrLogOn: string | undefined = '';

  StrLogOnToDashboard: string | undefined = '';

  StrManualQuickPunch: string | undefined = '';

  StrPersonalMode: string | undefined = '';

  StrPinEntry: string | undefined = '';

  StrSelectCompany: string | undefined = '';

  StrSelectCompanyNamespace: string | undefined = '';

  StrUseLdapAuthentication: string | undefined = '';

  init(data: EmployeeLogOnConfig) {
    if (!data) {
      return;
    }

    this.ObjMenuCommandConfig =
      this.ObjMenuCommandConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjMenuCommandConfig, WebClockMenuCommandConfigImpl)
        : undefined;
  }
}
