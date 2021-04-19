import {CustomFieldSectionModel, SelectItemModel} from '../../declarations/global';
import SelectItemImpl from './select-item.impl';
import CustomFieldControlImpl from './input/custom-field-control.impl';

export default class CustomFieldSectionImpl extends SelectItemImpl implements CustomFieldSectionModel {
  ArrCustomFieldControls?: CustomFieldControlImpl[] | undefined = [];

  BlnIsVisible?: boolean | undefined = false;

  BlnShouldShowSelection?: boolean | undefined = false;

  StrCommand?: string | undefined = '';

  StrSectionTitle?: string | undefined = '';

  // @ts-ignore
  init(data?: CustomFieldSectionModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrCustomFieldControls', CustomFieldControlImpl);
  }
}
