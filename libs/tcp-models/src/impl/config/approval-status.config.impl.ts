import { ApprovalStatusConfig } from '../../declarations/global';
import IntStringItemImpl from '../domain/int-string-item.impl';
import AbstractImpl from '../abstract.impl';

export default class ApprovalStatusConfigImpl extends AbstractImpl implements ApprovalStatusConfig {
  ObjIntStringItemApproved?: IntStringItemImpl | undefined = undefined;

  ObjIntStringItemDenied?: IntStringItemImpl | undefined = undefined;

  ObjIntStringItemPending?: IntStringItemImpl | undefined = undefined;

  _StatusItems?: (IntStringItemImpl | undefined)[] | undefined = [];

  init(data?: ApprovalStatusConfig) {
    if (!data) {
      return;
    }

    this.ObjIntStringItemApproved =
      this.ObjIntStringItemApproved !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemApproved, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemDenied =
      this.ObjIntStringItemDenied !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemDenied, IntStringItemImpl)
        : undefined;

    this.ObjIntStringItemPending =
      this.ObjIntStringItemPending !== undefined
        ? AbstractImpl.fromJSON(data.ObjIntStringItemPending, IntStringItemImpl)
        : undefined;
  }

  populateStatusItems() {
    if (!this._StatusItems) {
      return;
    }

    this._StatusItems = [];
    this._StatusItems.push(this.ObjIntStringItemApproved);
    this._StatusItems.push(this.ObjIntStringItemDenied);
    this._StatusItems.push(this.ObjIntStringItemPending);
  }

  isApproved(approvalStatus: number) {
    return this.isStatusMatching(this.ObjIntStringItemApproved, approvalStatus);
  }

  isDenied(approvalStatus: number) {
    return this.isStatusMatching(this.ObjIntStringItemDenied, approvalStatus);
  }

  isPending(approvalStatus: number) {
    return this.isStatusMatching(this.ObjIntStringItemPending, approvalStatus);
  }

  getAppropriateApprovalText(statusNumber: number | undefined) {
    this.populateStatusItems();
    if (!this._StatusItems || this._StatusItems.length === 0) {
      return '';
    }

    const validStatus = this._StatusItems.find((item) => item && item.getKey() === statusNumber);
    if (!validStatus) {
      return '';
    }

    return validStatus.getText();
  }

  private isStatusMatching(intStringItem: IntStringItemImpl | undefined, approvalStatus: number) {
    return intStringItem && intStringItem.getKey() === approvalStatus;
  }
}
