import { StringSelectItemModel } from '../../declarations/global';
import SelectItemImpl from './select-item.impl';
import Util from '../../../../tcp-util/src/util';
import { AnyType } from '../../declarations/types';

export default class StringSelectItemImpl extends SelectItemImpl implements StringSelectItemModel {
  StrText?: string | undefined = '';

  BlnClearsSelection?: boolean | undefined = false;

  StrCategory?: string | undefined = '';

  StrHighlightColor?: string | undefined = '';

  _StrText?: string | undefined = '';

  _StrValue?: string | undefined = '';

  constructor(value?: AnyType, text?: string | undefined) {
    super();
    this.setValue(value);
    this.setText(text);
  }

  init(data?: StringSelectItemModel) {
    super.init(data);
  }

  getKey() {
    return Util.getAdjustedComponentId(this.getText());
  }

  getValue() {
    return this._StrValue;
  }

  setValue(value: string | undefined) {
    this._StrValue = value;
  }
}
