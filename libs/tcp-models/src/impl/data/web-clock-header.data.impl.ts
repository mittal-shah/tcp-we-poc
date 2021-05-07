import { AbstractImpl } from '../abstract.impl';
import { WebClockHeaderData } from '../../declaration';
import { MenuImpl, MenuItemImpl } from '../domain';
import { CompanyConfigImpl, WebClockMenuCommandConfigImpl } from '../config';
import { DateTimeFormatter } from '@tcp/tcp-core';

export class WebClockHeaderDataImpl extends AbstractImpl implements WebClockHeaderData {
  BlnHasAttestations: boolean | undefined = false;

  BlnHasMissedBiometricAttestation: boolean | undefined = false;

  BlnIsOnBreak: boolean | undefined = false;

  DblShiftTotalMilliseconds: number | undefined = 0;

  HrmLongBreakMins: string | undefined = '';

  HrmShortBreakMins: string | undefined = '';

  IntBreakLengthSeconds: number | undefined = 0;

  LngEmployeeId: number | undefined = 0;

  ObjHeaderMenu: MenuImpl | undefined;

  StrBreakStartDateTime: string | undefined = '';

  StrClockStatus: string | undefined = '';

  init(data: WebClockHeaderData) {
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

  getClockStatusMessage(companyConfig: CompanyConfigImpl) {
    if (!this.StrClockStatus) {
      return '';
    }

    if (!companyConfig || !this.StrBreakStartDateTime || !this.StrClockStatus.containsParam()) {
      return this.StrClockStatus;
    }

    return this.StrClockStatus.format(String(this.getBreakMinutes()));
  }

  getBreakMinutes() {
    return DateTimeFormatter.getMinutesFromSeconds(this.IntBreakLengthSeconds);
  }

  getHeaderMenuItem(menuCommand: string) {
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
