import { LaborCodeSettingsContext } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { IntStringItemImpl } from '../domain';
import { BooleanInputImpl } from '../domain/input';

export class LaborCodeSettingsContextImpl extends AbstractImpl implements LaborCodeSettingsContext {
  BlnCanEdit: boolean | undefined = false;

  IntSelectedOption: number | undefined = 0;

  ObjBooleanInputAskLaborCode: BooleanInputImpl | undefined;

  ObjIntStringItemApplyFullSegmentTime: IntStringItemImpl | undefined;

  ObjIntStringItemDistributeSegmentTime: IntStringItemImpl | undefined;

  init(data: LaborCodeSettingsContext) {
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
