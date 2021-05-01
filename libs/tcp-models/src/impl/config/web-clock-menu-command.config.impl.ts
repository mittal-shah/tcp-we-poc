import { WebClockMenuCommandConfig } from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class WebClockMenuCommandConfigImpl extends AbstractImpl implements WebClockMenuCommandConfig {
  StrMenuCommandBreak?: string | undefined = '';

  StrMenuCommandChangeCostCode?: string | undefined = '';

  StrMenuCommandChangeJobCode?: string | undefined = '';

  StrMenuCommandChangeLaborCode?: string | undefined = '';

  StrMenuCommandClockIn?: string | undefined = '';

  StrMenuCommandClockOut?: string | undefined = '';

  StrMenuCommandCompanyRoster?: string | undefined = '';

  StrMenuCommandEmployeeDashboard?: string | undefined = '';

  StrMenuCommandEmployeeOptions?: string | undefined = '';

  StrMenuCommandLocationRoster?: string | undefined = '';

  StrMenuCommandManageTimesheet?: string | undefined = '';

  StrMenuCommandMissedBreak?: string | undefined = '';

  StrMenuCommandMissedClockIn?: string | undefined = '';

  StrMenuCommandMissedClockOut?: string | undefined = '';

  StrMenuCommandPhotoAttestation?: string | undefined = '';

  StrMenuCommandQuickBreak?: string | undefined = '';

  StrMenuCommandQuickChangeCostCode?: string | undefined = '';

  StrMenuCommandQuickChangeJobCode?: string | undefined = '';

  StrMenuCommandQuickChangeLaborCode?: string | undefined = '';

  StrMenuCommandQuickClockIn?: string | undefined = '';

  StrMenuCommandQuickClockOut?: string | undefined = '';

  StrMenuCommandQuickPunch?: string | undefined = '';

  StrMenuCommandQuickReturnFromBreak?: string | undefined = '';

  StrMenuCommandRequests?: string | undefined = '';

  StrMenuCommandReturnFromBreak?: string | undefined = '';

  StrMenuCommandRoster?: string | undefined = '';

  StrMenuCommandScheduleGroupRoster?: string | undefined = '';

  StrMenuCommandView?: string | undefined = '';

  StrMenuCommandViewAccruals?: string | undefined = '';

  StrMenuCommandViewDrops?: string | undefined = '';

  StrMenuCommandViewFMLACase?: string | undefined = '';

  StrMenuCommandViewHours?: string | undefined = '';

  StrMenuCommandViewLastPunch?: string | undefined = '';

  StrMenuCommandViewMessages?: string | undefined = '';

  StrMenuCommandViewOccurrences?: string | undefined = '';

  StrMenuCommandViewOpens?: string | undefined = '';

  StrMenuCommandViewPreferredLocations?: string | undefined = '';

  StrMenuCommandViewPreferredSubs?: string | undefined = '';

  StrMenuCommandViewPushNotifications?: string | undefined = '';

  StrMenuCommandViewSchedules?: string | undefined = '';

  StrMenuCommandViewShiftBids?: string | undefined = '';

  StrMenuCommandViewShiftBoard?: string | undefined = '';

  StrMenuCommandViewSubstituteAssignments?: string | undefined = '';

  StrMenuCommandViewSwaps?: string | undefined = '';

  init(data?: WebClockMenuCommandConfig) {
    if (!data) {
      return;
    }
  }

  isClockOperationItem(menuCommand: string | undefined) {
    if (!menuCommand) {
      return false;
    }

    switch (menuCommand) {
      case this.StrMenuCommandBreak:
      case this.StrMenuCommandChangeCostCode:
      case this.StrMenuCommandChangeJobCode:
      case this.StrMenuCommandChangeLaborCode:
      case this.StrMenuCommandClockIn:
      case this.StrMenuCommandClockOut:
      case this.StrMenuCommandReturnFromBreak:
      case this.StrMenuCommandMissedBreak:
      case this.StrMenuCommandMissedClockIn:
      case this.StrMenuCommandMissedClockOut:
        return true;
      default:
        return false;
    }
  }
}
