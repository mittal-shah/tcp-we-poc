import MenuItemImpl from '../domain/menu-item.impl';
import WebClockMenuCommandConfigImpl from '../config/web-clock-menu-command.config.impl';
import MenuImpl from '../domain/menu.impl';
import CompanyConfigImpl from '../config/company.config.impl';
import AbstractImpl from '../abstract.impl';
import DateTimeFormatter from '../../../../tcp-core/src/formatter/date-time.formatter';
import { WebClockHeaderData } from '../../declarations/global';
import Util from '../../../../tcp-util/src/util';

export default class WebClockHeaderDataImpl extends AbstractImpl implements WebClockHeaderData {
  BlnHasAttestations?: boolean | undefined = false;

  BlnHasMissedBiometricAttestation?: boolean | undefined = false;

  BlnIsOnBreak?: boolean | undefined = false;

  IntBreakLengthSeconds?: number | undefined = 0;

  LngEmployeeId?: number | undefined = 0;

  ObjHeaderMenu?: MenuImpl | undefined;

  StrBreakStartDateTime?: string | undefined = '';

  StrClockStatus?: string | undefined = '';

  init(data?: WebClockHeaderData) {
    if (!data) {
      return;
    }

    this.ObjHeaderMenu =
      this.ObjHeaderMenu !== undefined ? AbstractImpl.fromJSON(data.ObjHeaderMenu, MenuImpl) : undefined;
  }

  flattenMenuItems(): MenuItemImpl[] {
    // guard clause
    if (!this.ObjHeaderMenu) {
      return [];
    }

    return this.ObjHeaderMenu.flattenMenuItems();
  }

  getClockStatusMessage(companyConfig?: CompanyConfigImpl) {
    if (!this.StrClockStatus) {
      return '';
    }

    if (!companyConfig || !this.StrBreakStartDateTime || !Util.containsParam(this.StrClockStatus)) {
      return this.StrClockStatus;
    }

    return Util.stringFormat(this.StrClockStatus, String(this.getBreakMinutes()));
  }

  getBreakMinutes() {
    return DateTimeFormatter.getMinutesFromSeconds(this.IntBreakLengthSeconds);
  }

  getHeaderMenuItem(menuCommand?: string) {
    if (!this.ObjHeaderMenu || !menuCommand) {
      return undefined;
    }

    return this.ObjHeaderMenu.findMenuItem(menuCommand);
  }

  getMainMenuItems(menuCommandConfig: WebClockMenuCommandConfigImpl | undefined) {
    if (!this.ObjHeaderMenu || !this.ObjHeaderMenu.ArrMenuItems || !menuCommandConfig) {
      return [];
    }

    return this.flattenMenuItems().filter((menuItem) => {
      return !menuCommandConfig.isClockOperationItem(menuItem.StrMenuCommand);
    });
  }

  hasMenuItems() {
    return !!this.ObjHeaderMenu && !!this.ObjHeaderMenu.ArrMenuItems && this.ObjHeaderMenu.ArrMenuItems.length > 0;
  }
}
