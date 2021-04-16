import IntStringItemImpl from '../domain/int-string-item.impl';
import AbstractImpl from '../abstract.impl';
import {SegmentCompTimeContext} from '../../../declarations/global';
import Util from '../../../util/util';

export default class SegmentCompTimeContextImpl extends AbstractImpl implements SegmentCompTimeContext {
  BlnCanEdit?: boolean | undefined = false;

  IntCompTimeConsideration?: number | undefined = undefined;

  ObjIntStringItemBankTime?: IntStringItemImpl | undefined = undefined;

  ObjIntStringItemForceCompTime?: IntStringItemImpl | undefined = undefined;

  ObjIntStringItemPayTime?: IntStringItemImpl | undefined = undefined;

  StrTitle?: string | undefined = '';

  init(data?: SegmentCompTimeContext) {
    if (!data) {
      return;
    }

    this.ObjIntStringItemBankTime =
      this.ObjIntStringItemBankTime !== undefined
        ? AbstractImpl.fromJSON(this.ObjIntStringItemBankTime, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemForceCompTime =
      this.ObjIntStringItemForceCompTime !== undefined
        ? AbstractImpl.fromJSON(this.ObjIntStringItemForceCompTime, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemPayTime =
      this.ObjIntStringItemPayTime !== undefined
        ? AbstractImpl.fromJSON(this.ObjIntStringItemPayTime, IntStringItemImpl)
        : undefined;
  }

  createSubmissionData() {
    const data = Util.cloneClassInstance<SegmentCompTimeContextImpl>(this, SegmentCompTimeContextImpl);

    delete data.ObjIntStringItemBankTime;
    delete data.ObjIntStringItemForceCompTime;
    delete data.ObjIntStringItemPayTime;
    delete data.StrTitle;
    delete data.BlnCanEdit;

    return data;
  }
}
