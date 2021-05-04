import { TimeSelectItemModel } from '../../declaration';
import { SelectItemImpl } from './select-item.impl';

export class TimeSelectItemImpl extends SelectItemImpl implements TimeSelectItemModel {
  BlnClearsSelection: boolean | undefined = false;

  StrCategory: string | undefined = '';

  StrHighlightColor: string | undefined = '';

  _StrFormattedTime: string | undefined = '';

  _TimTime: string | undefined = '';

  init(data: TimeSelectItemModel) {
    super.init(data);
  }

  getModelValue() {
    return this.getValue();
  }

  getText() {
    return this._StrFormattedTime;
  }

  getValue(): string | number | undefined {
    return this._TimTime;
  }

  setText(text: string | undefined) {
    this._StrFormattedTime = text;
  }

  setValue(value: string | undefined) {
    this._TimTime = value;
  }
}
