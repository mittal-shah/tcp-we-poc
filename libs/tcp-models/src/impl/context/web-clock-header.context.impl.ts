import { WebClockHeaderContext } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { CompanyConfigImpl, WebClockHeaderConfigImpl } from '../config';
import { WebClockHeaderDataImpl } from '../data';

export class WebClockHeaderContextImpl extends AbstractImpl implements WebClockHeaderContext {
  ObjCompanyConfig: CompanyConfigImpl | undefined;

  ObjWebClockHeaderConfig: WebClockHeaderConfigImpl | undefined;

  ObjWebClockHeaderData: WebClockHeaderDataImpl | undefined;

  init(data: WebClockHeaderContext) {
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
