import { FilterDataImpl } from '../../data';
import { InputSuffixIcon } from '../../../declaration';
import { DropdownInputImpl } from './dropdown.input.impl';

export class SearchDropdownInputImpl extends DropdownInputImpl {
  BlnUseInternalFilter?: boolean | undefined = false;
  ObjFilterData?: FilterDataImpl | undefined = undefined;
  initialMultiSelectValue: string | undefined = '';
  loadInfoFunction?: () => void | undefined = undefined;
  shouldBlockAutoMultiSelectTextUpdate: boolean | undefined = false;
  updateFilterFunction?: (filterData: FilterDataImpl) => void | undefined = undefined;

  getInputSuffixIcon(): InputSuffixIcon {
    return this.isMultiSelect ? 'list' : 'search';
  }

  toString(): string {
    if (!this.isMultiSelect) {
      return super.toString();
    }

    if (this.shouldBlockAutoMultiSelectTextUpdate) {
      return '';
    }

    return this.selectedItems ? String(this.getMultiSelectedText()) : this.getNoneText();
  }
}
