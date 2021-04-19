import BooleanInputImpl from '../domain/input/boolean.input.impl';
import IntStringItemImpl from '../domain/int-string-item.impl';
import {LaborCodeSettingsContext} from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class LaborCodeSettingsContextImpl extends AbstractImpl implements LaborCodeSettingsContext {
  BlnCanEdit?: boolean | undefined = false;

  IntSelectedOption?: number | undefined = 0;

  ObjBooleanInputAskLaborCode?: BooleanInputImpl | undefined;

  ObjIntStringItemApplyFullSegmentTime?: IntStringItemImpl | undefined;

  ObjIntStringItemDistributeSegmentTime?: IntStringItemImpl | undefined;

  init(data?: LaborCodeSettingsContext) {
    if (!data) {
      return;
    }

    this.ObjBooleanInputAskLaborCode =
      this.ObjBooleanInputAskLaborCode !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputAskLaborCode, BooleanInputImpl)
        : undefined;

    this.ObjIntStringItemApplyFullSegmentTime =
      this.ObjIntStringItemApplyFullSegmentTime !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemApplyFullSegmentTime, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemDistributeSegmentTime =
      this.ObjIntStringItemDistributeSegmentTime !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemDistributeSegmentTime, IntStringItemImpl)
        : undefined;
  }
}
