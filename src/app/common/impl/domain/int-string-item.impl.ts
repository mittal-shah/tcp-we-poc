import SelectItemImpl from './select-item.impl';
import HeaderValueImpl from './header-value.impl';
import {IntStringItemModel} from '../../../declarations/global';

export default class IntStringItemImpl extends SelectItemImpl implements IntStringItemModel {
  IntKey?: number | undefined = 0;

  StrHelp?: string | undefined = '';

  StrId?: string | undefined = '';

  StrText?: string | undefined = '';

  _ArrColumnValues?: string[] | undefined = [];

  _ArrHeaderValues?: HeaderValueImpl[] | undefined = [];

  constructor(itemKey?: number, itemText?: string) {
    super();

    this.setValue(itemKey);
    this.setText(itemText);
  }

  init(data?: IntStringItemImpl) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, '_ArrHeaderValues', HeaderValueImpl);
  }

  setValue(value: number | undefined) {
    this.IntKey = value;
  }

  setText(text: string | undefined) {
    this.StrText = text;
  }

  getValue() {
    return this.IntKey;
  }

  getText() {
    return this.StrText;
  }
}
