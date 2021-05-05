import { EmployeeLogOnConfig, LogOnConfigImpl } from '@tcp/tcp-models';

export class EmployeeLogOnConfigImpl extends LogOnConfigImpl implements EmployeeLogOnConfig {
  StrMenuCommandQrScanner: string | undefined = '';
  StrRegisterKiosk: string | undefined = '';
  StrReregisterKiosk: string | undefined = '';
  StrReregistrationWarning: string | undefined = '';
}
