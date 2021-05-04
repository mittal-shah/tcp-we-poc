import { CostCodeInputModel } from '../../declaration';
import { SelectItemImpl } from './select-item.impl';
import { HeaderValueImpl } from './header-value.impl';

export class CostCodeInputImpl extends SelectItemImpl implements CostCodeInputModel {
  BlnIsDisabled: boolean | undefined = false;

  BlnIsHidden: boolean | undefined = false;

  BlnIsInvalid: boolean | undefined = false;

  BlnIsRequired: boolean | undefined = false;

  LngRecordId: number | undefined = 0;

  StrFullCode: string | undefined = '';

  StrId: string | undefined = '';

  _ArrColumnValues: string[] | undefined = [];

  _ArrHeaderValues: HeaderValueImpl[] | undefined = [];

  init(data: CostCodeInputModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, '_ArrHeaderValues', HeaderValueImpl);
  }

  getKey() {
    return this.StrId ? this.StrId : this.LngRecordId;
  }

  getText() {
    return this.StrFullCode;
  }

  getValue() {
    return this.LngRecordId;
  }

  setText(text: string) {
    this.StrFullCode = text;
  }

  setValue(value: number) {
    this.LngRecordId = value;
  }
}
