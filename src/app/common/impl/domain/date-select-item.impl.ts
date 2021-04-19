import {DateSelectItemModel} from '../../declarations/global';
import SelectItemImpl from './select-item.impl';

export default class DateSelectItemImpl extends SelectItemImpl implements DateSelectItemModel {
  BlnClearsSelection?: boolean | undefined = false;

  StrCategory?: string | undefined = '';

  StrHighlightColor?: string | undefined = '';

  _DatDate?: string | undefined = '';

  _StrFormattedDate?: string | undefined = '';

  init(data?: DateSelectItemModel) {
    super.init(data);
  }

  getText() {
    return this._StrFormattedDate;
  }

  getValue(): string | number | undefined {
    return this._DatDate;
  }

  setText(text: string | undefined) {
    this._StrFormattedDate = text;
  }

  setValue(value: string | undefined) {
    this._DatDate = value;
  }
}
