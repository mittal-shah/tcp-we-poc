import { CompanyLocationPreviewModel } from '../../declaration';
import { GeopositionImpl } from './geoposition.impl';
import { AbstractImpl } from '../abstract.impl';

export class CompanyLocationPreviewImpl extends AbstractImpl implements CompanyLocationPreviewModel {
  BlnCanView: boolean | undefined = false;

  LngRecordId: number | undefined = undefined;

  ObjGeoposition: GeopositionImpl | undefined = undefined;

  StrAddress1: string | undefined = '';

  StrAddress2: string | undefined = '';

  StrCell: string | undefined = '';

  StrCellLabel: string | undefined = '';

  StrCity: string | undefined = '';

  StrEmail: string | undefined = '';

  StrEmailLabel: string | undefined = '';

  StrName: string | undefined = '';

  StrOfficeExt: string | undefined = '';

  StrOfficeExtLabel: string | undefined = '';

  StrOfficePhone: string | undefined = '';

  StrOfficePhoneLabel: string | undefined = '';

  StrState: string | undefined = '';

  StrZip: string | undefined = '';

  init(data: CompanyLocationPreviewModel) {
    if (!data) {
      return;
    }

    this.ObjGeoposition =
      this.ObjGeoposition !== undefined ? AbstractImpl.fromJSON(this.ObjGeoposition, GeopositionImpl) : undefined;
  }

  getKey() {
    return this.LngRecordId;
  }

  getFormattedAddress() {
    if (!this.StrAddress1) {
      return '';
    }

    const address = `${this.StrAddress1} ${this.StrAddress2}`;
    const cityLocation = [this.StrCity, this.StrState, this.StrZip];
    return `${address} \n ${cityLocation.join(', ')}`;
  }
}
