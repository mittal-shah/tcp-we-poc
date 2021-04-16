import CostCodeInputImpl from '../domain/cost-code-input.impl';
import EditSegmentAccessContextImpl from '../context/edit-segment-access.context.impl';
import {EditSegmentData} from '../../../declarations/global';
import SegmentImpl from '../domain/segment.impl';
import SelectCostCodeDataImpl from './select-cost-code.data.impl';
import LongStringItemImpl from '../domain/long-string-item.impl';
import SelectItemImpl from '../domain/select-item.impl';
import AbstractImpl from '../abstract.impl';
import Util from '../../../util/util';

export default class EditSegmentDataImpl extends AbstractImpl implements EditSegmentData {
  ArrSelectItemBreakTypes?: SelectItemImpl[] | undefined = [];

  ArrSelectItemJobCodes?: SelectItemImpl[] | undefined = [];

  BlnEnableRate?: boolean | undefined = false;

  BlnIsSegmentTypeAccessible?: boolean | undefined = false;

  IntRepeatDays?: number | undefined = 0;

  ObjEditSegmentAccessContext?: EditSegmentAccessContextImpl | undefined = undefined;

  ObjSegment?: SegmentImpl | undefined = undefined;

  ObjSelectCostCodeData?: SelectCostCodeDataImpl | undefined = undefined;

  init(data?: EditSegmentDataImpl) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrSelectItemBreakTypes', SelectItemImpl);
    this.copyTypedArray(data, 'ArrSelectItemJobCodes', SelectItemImpl);

    this.ObjEditSegmentAccessContext = this.ObjEditSegmentAccessContext
      ? AbstractImpl.fromJSON(this.ObjEditSegmentAccessContext, EditSegmentAccessContextImpl)
      : undefined;

    this.ObjSegment = this.ObjSegment ? AbstractImpl.fromJSON(this.ObjSegment, SegmentImpl) : undefined;

    this.ObjSelectCostCodeData = this.ObjSelectCostCodeData
      ? AbstractImpl.fromJSON(this.ObjSelectCostCodeData, SelectCostCodeDataImpl)
      : undefined;
  }

  copySelectedCostCodeInput(costCode?: LongStringItemImpl) {
    if (!costCode) {
      return undefined;
    }

    const selectedCostCode = new CostCodeInputImpl();
    selectedCostCode.setText(costCode.getText() || '');
    selectedCostCode.setValue(costCode.getValue() || 0);
    selectedCostCode.BlnIsInvalid = costCode.BlnIsInvalid;

    return selectedCostCode;
  }

  createSubmissionData() {
    const data = Util.cloneClassInstance<EditSegmentDataImpl>(this, EditSegmentDataImpl);

    delete data.ArrSelectItemBreakTypes;
    delete data.ArrSelectItemJobCodes;
    delete data.ObjEditSegmentAccessContext;

    return data;
  }
}
