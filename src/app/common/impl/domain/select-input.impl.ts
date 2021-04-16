import {SelectInputModel} from '../../../declarations/global';
import StringSelectItemImpl from './string-select-item.impl';
import SelectItemImpl from './select-item.impl';

export default class SelectInputImpl extends SelectItemImpl implements SelectInputModel {
  ArrSelectItemOptions?: SelectItemImpl[] | undefined = [];

  ArrStringSelectItemOptions?: StringSelectItemImpl[] | undefined = [];

  BlnIsDisabled?: boolean | undefined = false;

  BlnIsTextInput?: boolean | undefined = false;

  IntMaxLength?: number | undefined = 0;

  LngValue?: number | undefined = 0;

  StrId?: string | undefined = '';

  StrLabel?: string | undefined = '';

  StrSuffix?: string | undefined = '';

  StrText?: string | undefined = '';

  StrValue?: string | undefined = '';

  init(data?: SelectInputModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrSelectItemOptions', SelectItemImpl);
    this.copyTypedArray(data, 'ArrStringSelectItemOptions', StringSelectItemImpl);
  }
}
