import {BadgeSearchOrderConfig} from '../../../declarations/global';
import OfflineEmployeeImpl from '../domain/offline-employee.impl';
import AbstractImpl from '../abstract.impl';

export default class BadgeSearchOrderConfigImpl extends AbstractImpl implements BadgeSearchOrderConfig {
  ArrSearchOrders?: number[] | undefined = [];

  BlnConsiderEmployeeJobCodeBadgeNumber?: boolean | undefined = false;

  BlnForceNumericEntryOnMobileApps?: boolean | undefined = false;

  IntEmployeeBadgeNumber?: number | undefined = 0;

  IntEmployeeBadgeThenId?: number | undefined = 0;

  IntEmployeeId?: number | undefined = 0;

  IntEmployeeIdThenBadge?: number | undefined = 0;

  IntSearchByEmployeeBadge?: number | undefined = 0;

  IntSearchByEmployeeId?: number | undefined = 0;

  IntSearchByEmployeeJobCodeBadge?: number | undefined = 0;

  IntSearchByExportCode?: number | undefined = 0;

  IntSearchOrder?: number | undefined = 0;

  isMatchingBadgeSearch(offlineEmployee: OfflineEmployeeImpl, badgeId: string) {
    const employeeId = parseInt(badgeId, 10);
    if (!offlineEmployee || !this.ArrSearchOrders) {
      return false;
    }

    return this.ArrSearchOrders.some((searchOrder) => {
      switch (searchOrder) {
        case this.IntSearchByEmployeeBadge:
          return offlineEmployee.StrBadge === badgeId;
        case this.IntSearchByEmployeeId:
          return offlineEmployee.LngEmployeeId === employeeId;
        case this.IntSearchByEmployeeJobCodeBadge:
          return offlineEmployee.hasJobCodesMatchingBadge(badgeId);
        case this.IntSearchByExportCode:
          return offlineEmployee.StrExportCode && offlineEmployee.StrExportCode.toLowerCase() === badgeId.toLowerCase();
        default:
          return false;
      }
    });
  }

  isNumericEntry() {
    if (this.BlnForceNumericEntryOnMobileApps) {
      return true;
    }

    if (this.ArrSearchOrders?.length !== 1) {
      return false;
    }

    return this.ArrSearchOrders[0] === this.IntSearchByEmployeeId;
  }
}
