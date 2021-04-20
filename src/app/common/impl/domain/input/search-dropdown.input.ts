import FilterDataImpl from '../../data/filter.data.impl';
import {InputSuffixIcon} from '../../../declarations/editable-input';
import DropdownInput from './dropdown.input';

export default class SearchDropdownInput extends DropdownInput {
  BlnUseInternalFilter: boolean | undefined = false;

  ObjFilterData?: FilterDataImpl | undefined = undefined;

  updateFilterFunction?: (filterData: FilterDataImpl) => void;

  loadInfoFunction?: () => void;

  initialMultiSelectValue: string | undefined = '';

  shouldBlockAutoMultiSelectTextUpdate: boolean | undefined = false;

  getInputSuffixIcon(): InputSuffixIcon {
    return this.BlnIsMultiSelect ? 'list' : 'search';
  }

  toString(): string {
    if (!this.BlnIsMultiSelect) {
      return super.toString();
    }

    if (!this.ObjListContext) {
      return String(this.initialMultiSelectValue);
    }

    if (this.shouldBlockAutoMultiSelectTextUpdate) {
      return '';
    }

    return this.ObjListContext && this.ObjListContext.selectedItems
      ? String(this.getMultiSelectedText())
      : this.getNoneText();
  }
}
