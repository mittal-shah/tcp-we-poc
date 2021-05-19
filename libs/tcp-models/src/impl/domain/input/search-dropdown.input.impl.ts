import { FilterDataImpl } from '../../data';
import { InputSuffixIcon } from '../../../declaration';
import { DropdownInputImpl } from './dropdown.input.impl';

export class SearchDropdownInputImpl extends DropdownInputImpl {
  BlnUseInternalFilter?: boolean | undefined = false;

  ObjFilterData?: FilterDataImpl | undefined = undefined;

  updateFilterFunction?: (filterData: FilterDataImpl) => void | undefined = undefined;

  loadInfoFunction?: () => void | undefined = undefined;

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
