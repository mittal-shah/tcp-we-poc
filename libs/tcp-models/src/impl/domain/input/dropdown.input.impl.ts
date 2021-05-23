import { AnyType, EditableInputModel, InputSuffixIcon } from '../../../declaration';
import ModelConstant from '../../../constants/model.constant';
import AbstractEditableInputImpl from './abstract-editable.input.impl';
import { IntStringItemImpl } from '../int-string-item.impl';
import { LongStringItemImpl } from '../long-string-item.impl';
import { SelectItemImpl } from '../select-item.impl';
import { CustomFieldControlImpl } from './custom-field-control.impl';

export class DropdownInputImpl extends AbstractEditableInputImpl implements EditableInputModel {
  addDropdownEntryInput: CustomFieldControlImpl | undefined = undefined;
  allowNoneSelection = false;
  handleOnSelectItem?: (value: AnyType) => void;
  isMultiSelect = false;
  listItems?: SelectItemImpl[] = [];
  onSelect?: (items: SelectItemImpl[]) => void;
  selectedItems?: SelectItemImpl[] = [];

  getInputSuffixIcon(): InputSuffixIcon {
    return 'chevron-down';
  }

  isValidValue() {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.selectedItems?.length) {
      return true;
    }

    if (this.BlnIsRequired && this.isNoneItemSelected()) {
      return false;
    }

    return !this.selectedItems.every((item) => item.BlnIsInvalid);
  }

  getErrorMessage(): string | undefined {
    if (!this.isValidValue() || !this.appConfig) {
      return this.appConfig?.StrInvalidSelection;
    }

    return super.getErrorMessage();
  }

  getValue() {
    return this.getText();
  }

  createIntStringItem() {
    const item = new IntStringItemImpl();
    const selectItem = this.getModelValue();
    if (!selectItem) {
      return item;
    }

    item.setText(selectItem.getText());
    item.setValue(parseInt(String(selectItem.getValue()), 10));
    return item;
  }

  createLongStringItem() {
    const item = new LongStringItemImpl();
    const selectItem = this.getModelValue();
    if (!selectItem) {
      return item;
    }

    item.setText(selectItem.getText());
    item.setValue(parseFloat(String(selectItem.getValue())));

    return item;
  }

  setValue(value: string | undefined) {
    if (this.addDropdownEntryInput) {
      this.setModelValue(new SelectItemImpl(value, value));
      return;
    }

    const listItem = this.listItems?.find((item: SelectItemImpl) => item.getText() === value);
    if (listItem) {
      this.setModelValue(listItem);
    }
  }

  getModelValue(): SelectItemImpl | undefined {
    return this.selectedItems?.length ? this.selectedItems[0] : undefined;
  }

  getMultiSelectedText() {
    if (!this.selectedItems?.length) {
      return this.getNoneText();
    }

    return this.appConfig?.StrSelectedEntityMessage?.format(String(this.selectedItems.length));
  }

  setModelValue(item: SelectItemImpl) {
    if (this.selectedItems?.findMatchingKey(item.getKey())) {
      return;
    }
    this.selectedItems?.push(item);
  }

  getText(): string {
    if (!this.selectedItems?.length) {
      return this.getNoneText();
    }

    const firstItem = this.selectedItems?.firstOrDefault<SelectItemImpl>();
    const text =
      this.selectedItems?.length > 1
        ? firstItem?.getText() + ' + ' + String(this.selectedItems?.length - 1)
        : firstItem?.getText();

    return text || '';
  }

  toString(): string {
    return this.getText();
  }

  protected getNoneText() {
    return this.appConfig && this.allowNoneSelection ? this.appConfig.StrNoneItem || '' : '';
  }

  private isNoneItemSelected() {
    const noneItem = this.selectedItems?.find(
      (item) => this.appConfig?.isNoneItem(item.getKey()) || ModelConstant.intNoneItemValue === item.getKey(),
    );
    return !!noneItem;
  }
}
