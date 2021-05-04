import { AnyType, StringSelectItemModel } from '../../declaration';
import { SelectItemImpl } from './select-item.impl';
import { CommonUtil } from '@tcp/tcp-util';

export class StringSelectItemImpl extends SelectItemImpl implements StringSelectItemModel {
  StrText: string | undefined = '';

  BlnClearsSelection: boolean | undefined = false;

  StrCategory: string | undefined = '';

  StrHighlightColor: string | undefined = '';

  _StrText: string | undefined = '';

  _StrValue: string | undefined = '';

  constructor(value: AnyType, text: string | undefined) {
    super();
    this.setValue(value);
    this.setText(text);
  }

  init(data: StringSelectItemModel) {
    super.init(data);
  }

  getKey() {
    return CommonUtil.getAdjustedComponentId(this.getText());
  }

  getValue() {
    return this._StrValue;
  }

  setValue(value: string | undefined) {
    this._StrValue = value;
  }
}
