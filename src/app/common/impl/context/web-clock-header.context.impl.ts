import WebClockHeaderConfigImpl from '../config/web-clock-header.config.impl';
import CompanyConfigImpl from '../config/company.config.impl';
import {WebClockHeaderContext} from '../../declarations/global';
import WebClockHeaderDataImpl from '../data/web-clock-header.data.impl';
import AbstractImpl from '../abstract.impl';

export default class WebClockHeaderContextImpl extends AbstractImpl implements WebClockHeaderContext {
  ObjCompanyConfig?: CompanyConfigImpl | undefined;

  ObjWebClockHeaderConfig?: WebClockHeaderConfigImpl | undefined;

  ObjWebClockHeaderData?: WebClockHeaderDataImpl | undefined;

  init(data?: WebClockHeaderContext) {
    if (!data) {
      return;
    }

    this.ObjCompanyConfig =
      this.ObjCompanyConfig !== undefined ? AbstractImpl.fromJSON(data.ObjCompanyConfig, CompanyConfigImpl) : undefined;

    this.ObjWebClockHeaderConfig =
      this.ObjWebClockHeaderConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjWebClockHeaderConfig, WebClockHeaderConfigImpl)
        : undefined;

    this.ObjWebClockHeaderData =
      this.ObjWebClockHeaderData !== undefined
        ? AbstractImpl.fromJSON(data.ObjWebClockHeaderData, WebClockHeaderDataImpl)
        : undefined;
  }

  shouldShowMenu() {
    return !!this.ObjWebClockHeaderData && this.ObjWebClockHeaderData.hasMenuItems();
  }
}
