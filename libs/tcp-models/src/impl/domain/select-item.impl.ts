import { AnyType, SelectItemModel } from '../../declaration';
import { HeaderValueImpl } from './header-value.impl';
import { AbstractImpl } from '../abstract.impl';

export class SelectItemImpl extends AbstractImpl implements SelectItemModel {
  BlnClearsSelection: boolean | undefined;
  BlnIsInvalid: boolean | undefined = false;
  IntMaxLength: number | undefined;
  StrCategory: string | undefined;
  StrHighlightColor: string | undefined;
  _ArrColumnValues: string[] | undefined;
  _ArrHeaderValues: HeaderValueImpl[] | undefined;
  _LngValue: number | undefined;
  _StrSubText: string | undefined;
  _StrText: string | undefined;

  constructor(value?: string | undefined, text?: string | undefined) {
    super();
    this.setValue(Number(value));
    this.setText(text);
  }

  init(data: AnyType) {
    if (!data) {
      return;
    }

    this.StrHighlightColor = this.StrHighlightColor ? this.StrHighlightColor.toLowerCase() : this.StrHighlightColor;
  }

  getKey(): string | number | undefined {
    return this.getValue();
  }

  getText() {
    return this._StrText;
  }

  getSubText() {
    return this._StrSubText;
  }

  getValue(): string | number | undefined {
    return this._LngValue || this.getText();
  }

  setText(text: string | undefined) {
    this._StrText = text;
  }

  setValue(value: AnyType) {
    this._LngValue = value;
  }
}
