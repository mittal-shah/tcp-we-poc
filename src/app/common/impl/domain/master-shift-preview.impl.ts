import {MasterShiftPreviewModel} from '../../../declarations/global';
import LegendItemImpl from './legend-item.impl';
import AbstractImpl from '../abstract.impl';

export default class MasterShiftPreviewImpl extends AbstractImpl implements MasterShiftPreviewModel {
  BlnIsActive?: boolean | undefined = false;

  BlnIsFirst?: boolean | undefined = false;

  BlnIsLast?: boolean | undefined = false;

  BlnIsUnspecified?: boolean | undefined = false;

  IntMasterShiftResourceRequirements?: number | undefined = undefined;

  IntOrder?: number | undefined = undefined;

  LngRecordId?: number | undefined = undefined;

  ObjLegendItem?: LegendItemImpl | undefined = undefined;

  StrBackgroundColor?: string | undefined = undefined;

  StrBorderColor?: string | undefined = undefined;

  StrDescription?: string | undefined = '';

  StrForegroundColor?: string | undefined = undefined;

  StrFormattedHours?: string | undefined = '';

  StrFormattedTime?: string | undefined = '';

  StrName?: string | undefined = '';

  init(data?: MasterShiftPreviewModel) {
    if (!data) {
      return;
    }

    this.StrBackgroundColor = this.StrBackgroundColor ? this.StrBackgroundColor.toLowerCase() : this.StrBackgroundColor;
    this.StrBorderColor = this.StrBorderColor ? this.StrBorderColor.toLowerCase() : this.StrBorderColor;
    this.StrForegroundColor = this.StrForegroundColor ? this.StrForegroundColor.toLowerCase() : this.StrForegroundColor;

    this.ObjLegendItem =
      this.ObjLegendItem !== undefined ? AbstractImpl.fromJSON(this.ObjLegendItem, LegendItemImpl) : undefined;
  }

  isValidPreview() {
    return !!this.StrName && !this.BlnIsUnspecified;
  }

  getKey() {
    return this.LngRecordId;
  }
}
