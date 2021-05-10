import { IntStringItemImpl } from '../domain/int-string-item.impl';
import { AbstractImpl } from '../abstract.impl';
import { CompTimeConsiderationContext } from '../../declaration';
import { BooleanInputImpl } from '../domain/input';

export class CompTimeConsiderationContextImpl extends AbstractImpl implements CompTimeConsiderationContext {
  BlnCanEdit: boolean | undefined = false;

  IntCompPayoutType: number | undefined = 0;

  IntCompTimeConsideration: number | undefined = 0;

  ObjBooleanInputAllowToggle: BooleanInputImpl | undefined;

  ObjBooleanInputForceCompTime: BooleanInputImpl | undefined;

  ObjIntStringItemBankTime: IntStringItemImpl | undefined;

  ObjIntStringItemCounts: IntStringItemImpl | undefined;

  ObjIntStringItemEligible: IntStringItemImpl | undefined;

  ObjIntStringItemNoComp: IntStringItemImpl | undefined;

  ObjIntStringItemPayTime: IntStringItemImpl | undefined;

  StrCompTimeToggleHelp: string | undefined = '';

  StrTitle: string | undefined = '';

  init(data: CompTimeConsiderationContext) {
    if (!data) {
      return;
    }

    this.ObjBooleanInputAllowToggle =
      this.ObjBooleanInputAllowToggle !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputAllowToggle, BooleanInputImpl)
        : undefined;

    this.ObjBooleanInputForceCompTime =
      this.ObjBooleanInputForceCompTime !== undefined
        ? AbstractImpl.fromJSON(data.ObjBooleanInputForceCompTime, BooleanInputImpl)
        : undefined;

    this.ObjIntStringItemBankTime =
      this.ObjIntStringItemBankTime !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemBankTime, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemCounts =
      this.ObjIntStringItemCounts !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemCounts, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemEligible =
      this.ObjIntStringItemEligible !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemEligible, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemNoComp =
      this.ObjIntStringItemNoComp !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemNoComp, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemPayTime =
      this.ObjIntStringItemPayTime !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemPayTime, IntStringItemImpl)
        : undefined;
  }

  createSubmissionData() {
    const data = AbstractImpl.clone<CompTimeConsiderationContextImpl>(this, CompTimeConsiderationContextImpl);

    delete data.BlnCanEdit;
    delete data.ObjIntStringItemBankTime;
    delete data.ObjIntStringItemCounts;
    delete data.ObjIntStringItemEligible;
    delete data.ObjIntStringItemNoComp;
    delete data.ObjIntStringItemPayTime;
    delete data.StrCompTimeToggleHelp;
    delete data.StrTitle;

    return data;
  }
}
