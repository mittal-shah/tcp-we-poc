import { AnyType, EditableTextInputModel, InputSuffixIcon, ListItemContext } from '../../../declaration';
import ModelConstant from '../../../constants/model.constant';
import { CoveredEmployeeImpl } from '../covered-employee.impl';
import AbstractEditableInput from './abstract-editable.input';
import { AppConfigImpl } from '../../config';
import { IntStringItemImpl } from '../int-string-item.impl';
import { LongStringItemImpl } from '../long-string-item.impl';
import { SelectItemImpl } from '../select-item.impl';
import { CustomFieldControlImpl } from './custom-field-control.impl';

export class DropdownInput extends AbstractEditableInput implements EditableTextInputModel {
  BlnAllowNoneSelection: boolean | undefined = true;

  BlnIsMaskedValue: boolean | undefined = false;

  BlnIsMultiSelect: boolean | undefined = false;

  BlnIsEditable: boolean | undefined = false;

  BlnIsExplicitSave: boolean | undefined = false;

  IntNumberOfLines: number | undefined = 0;

  IntMaxValue: number | undefined = 0;

  IntMinValue: number | undefined = 0;

  IntValue: number | undefined = 0;

  ObjListContext: ListItemContext | undefined = undefined;

  StrMaxDecimalValue: string | undefined = '';

  StrMinDecimalValue: string | undefined = '';

  handleOnSelectItem: (value: AnyType) => void | undefined;

  onExplicitSave: (item: SelectItemImpl) => void;

  onMultiSelectSave: (items: SelectItemImpl[]) => void;

  onCancel: () => void;

  addDropdownEntryInput: CustomFieldControlImpl | undefined = undefined;

  getInputSuffixIcon(): InputSuffixIcon {
    return 'chevron-down';
  }

  isValidValue(appConfig: AppConfigImpl | undefined) {
    if (!this.isInputAccessible()) {
      return true;
    }

    if (!this.ObjListContext || !this.ObjListContext.selectedItem) {
      return true;
    }

    const key = this.ObjListContext.selectedItem.getKey();
    const isNoneItem = appConfig ? appConfig.isNoneItem(key) : ModelConstant.intNoneItemValue === key;
    if (this.BlnIsRequired && isNoneItem) {
      return false;
    }

    return !this.ObjListContext.selectedItem.BlnIsInvalid;
  }

  getErrorMessage(appConfig: AppConfigImpl | undefined): string | undefined {
    if (!this.isValidValue(appConfig)) {
      return appConfig && appConfig.StrInvalidSelection;
    }

    return super.getErrorMessage(appConfig);
  }

  getValue() {
    return this.getText();
  }

  createCoveredEmployee() {
    const item = new CoveredEmployeeImpl();
    const selectItem = this.getModelValue();
    if (!selectItem) {
      return item;
    }

    item.setText(selectItem.getText());
    item.setValue(parseFloat(String(selectItem.getValue())));
    return item;
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
    if (!this.ObjListContext || !this.ObjListContext.selectedItem) {
      return;
    }

    if (this.addDropdownEntryInput) {
      this.setModelValue(new SelectItemImpl(value, value));
      return;
    }

    const listItem = this.ObjListContext.listItems.find((item: SelectItemImpl) => item.getText() === value);
    if (listItem) {
      this.setModelValue(listItem);
    }
  }

  getModelValue(): SelectItemImpl | undefined {
    return this.ObjListContext ? this.ObjListContext.selectedItem : undefined;
  }

  getMultiSelectedItems() {
    if (!this.ObjListContext) {
      return [];
    }

    return this.ObjListContext.selectedItems;
  }

  getMultiSelectedText() {
    if (!this.ObjListContext || !this.ObjListContext.selectedItems) {
      return this.getNoneText();
    }

    const { appConfig } = this.ObjListContext;
    const selectedItemsLength = this.ObjListContext.selectedItems.length;
    if (selectedItemsLength === 0) {
      return this.getNoneText();
    }

    return appConfig?.StrSelectedEntityMessage.format(String(selectedItemsLength));
  }

  setModelValue(item: SelectItemImpl | undefined) {
    if (!this.ObjListContext) {
      return;
    }

    this.ObjListContext.selectedItem = item;
  }

  getText(): string {
    return this.ObjListContext && this.ObjListContext.selectedItem && this.ObjListContext.selectedItem.getText()
      ? String(this.ObjListContext.selectedItem.getText())
      : this.getNoneText();
  }

  toString(): string {
    return this.ObjListContext && this.ObjListContext.selectedItem && this.ObjListContext.selectedItem.getText()
      ? this.ObjListContext.selectedItem.getText() || ''
      : this.getNoneText();
  }

  protected getNoneText() {
    return this.ObjListContext && this.ObjListContext.appConfig && this.BlnAllowNoneSelection
      ? this.ObjListContext.appConfig.StrNoneItem || ''
      : '';
  }
}
