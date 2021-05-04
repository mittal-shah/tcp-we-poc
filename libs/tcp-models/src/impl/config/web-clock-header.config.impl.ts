import { WebClockHeaderConfig } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { WebClockMenuCommandConfigImpl } from './web-clock-menu-command.config.impl';

export class WebClockHeaderConfigImpl extends AbstractImpl implements WebClockHeaderConfig {
  BlnShowChangePinButton: boolean | undefined = false;

  BlnShowMyOptions: boolean | undefined = false;

  ObjMenuCommandConfig: WebClockMenuCommandConfigImpl | undefined;

  StrChangePin: string | undefined = '';

  StrEmployeeFullName: string | undefined = '';

  StrMyQuickLinks: string | undefined = '';

  init(data: WebClockHeaderConfig) {
    if (!data) {
      return;
    }

    this.ObjMenuCommandConfig =
      this.ObjMenuCommandConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjMenuCommandConfig, WebClockMenuCommandConfigImpl)
        : undefined;
  }
}
