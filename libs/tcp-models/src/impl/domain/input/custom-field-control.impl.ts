import AbstractEditableInput from './abstract-editable.input';
import { CustomFieldControlModel } from '../../../declaration';
import { AnyType, ListItemContext } from '../../../declaration/types.declaration';
import CustomFieldDataType from '../../../constants/custom-field-data-type.constant';
import CustomFieldInputMethod from '../../../constants/custom-field-input-method.constant';
import { EditableInputModel } from '../../../declaration/editable-input.declaration';
import { GlobalConstant } from '../../../constants';
import { KeyTextItemImpl } from '../key-text-item.impl';
import { DateSelectItemImpl } from '../date-select-item.impl';
import { TimeSelectItemImpl } from '../time-select-item.impl';
import { MaskedInputFormatter } from '@tcp/tcp-core';
import { AppConfigImpl } from '../../config';
import { AbstractImpl } from '../../abstract.impl';
import { SearchDropdownInput } from './search-dropdown.input';
import { DateInput } from './date.input';
import { TimeInput } from './time.input';
import { DecimalInput } from './decimal.input';
import { NumberInput } from './number.input';
import { TextInput } from './text.input';
import { DropdownInput } from './dropdown.input';

export class CustomFieldControlImpl extends AbstractEditableInput implements CustomFieldControlModel {
  ArrDateOptions: DateSelectItemImpl[] | undefined = [];

  ArrStringOptions: string[] | undefined = [];

  ArrTimeOptions: TimeSelectItemImpl[] | undefined = [];

  BlnForceLowercase: boolean | undefined = false;

  BlnForceUppercase: boolean | undefined = false;

  BlnIsMaskedValue: boolean | undefined = false;

  BlnIsSelected: boolean | undefined = false;

  DatMaxDate: string | undefined = '';

  DatMinDate: string | undefined = '';

  IntDataType: number | undefined = 0;

  IntInputMethod: number | undefined = 0;

  IntValue: number | undefined;

  LngRecordId: number | undefined = 0;

  StrCharWhitelist: string | undefined = '';

  StrCustomFormat: string | undefined = '';

  private inputControl: EditableInputModel | undefined;

  private KeyTextItems: KeyTextItemImpl[] | undefined = [];

  getNumberValue() {
    if (this.IntValue) {
      return this.IntValue;
    }
    if (this.StrValue) {
      return Number(this.StrValue);
    }
    return undefined;
  }

  init(data: CustomFieldControlImpl) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrDateOptions', DateSelectItemImpl);
    this.copyTypedArray(data, 'ArrTimeOptions', TimeSelectItemImpl);

    if (this.ArrStringOptions && this.ArrStringOptions.length) {
      this.KeyTextItems = this.ArrStringOptions.map((item) => new KeyTextItemImpl(item, item));
    }
  }

  createSubmissionData() {
    const data = AbstractImpl.clone<CustomFieldControlImpl>(this, CustomFieldControlImpl);

    delete data.ArrDateOptions;
    delete data.ArrStringOptions;
    delete data.ArrTimeOptions;

    if (data.inputControl) {
      delete data.inputControl;
    }

    if (data.KeyTextItems) {
      delete data.KeyTextItems;
    }

    if (!data.IntValue) {
      data.IntValue = undefined;
    }
    if (!data.StrValue) {
      data.StrValue = undefined;
    }

    return data;
  }

  getValue() {
    return (this.inputControl && this.inputControl.getValue()) || '';
  }

  getModelValue() {
    return this.inputControl && this.inputControl.getModelValue();
  }

  getType(): string {
    return this.inputControl ? this.inputControl.getType() : super.getType();
  }

  isValidInput(): boolean {
    return Boolean(this.inputControl && this.inputControl.isValidInput());
  }

  isValidValue(appConfig: AppConfigImpl | undefined) {
    return Boolean(this.inputControl && this.inputControl.isValidValue(appConfig));
  }

  setValue(value: AnyType) {
    if (!this.inputControl) {
      return;
    }

    this.inputControl.setValue(value);

    if (this.IntInputMethod === CustomFieldInputMethod.IntEdit) {
      this.IntValue = this.inputControl.getModelValue();
      this.StrValue = this.inputControl.getModelValue();
    } else if (this.isDropdown(this.IntInputMethod)) {
      const selectItem = this.inputControl.getModelValue();
      this.StrValue = selectItem ? selectItem.getValue() : '';
    }
  }

  initializeControl(): void {
    this.inputControl = this.createComponent();
  }

  getComponent() {
    if (!this.inputControl || !this.isDropdownEditable(this.IntInputMethod)) {
      return this.inputControl;
    }

    const searchDropdownInput = AbstractImpl.fromJSON(this.inputControl, SearchDropdownInput) as SearchDropdownInput;
    searchDropdownInput.addDropdownEntryInput = this;
    return searchDropdownInput;
  }

  createNewEntryInput() {
    return AbstractImpl.fromJSON(
      {
        ...this,
        ArrTimeOptions: [],
        ArrDateOptions: [],
        ArrStringOptions: [],
        IntInputMethod: CustomFieldInputMethod.IntEdit,
      },
      CustomFieldControlImpl,
    ) as CustomFieldControlImpl;
  }

  private createInput(dataType: number | undefined) {
    let customInput;
    const companyConfig = GlobalConstant.companyConfig;
    const isDecimal = this.StrCharWhitelist?.indexOf('.') !== -1;
    if (!companyConfig) {
      return undefined;
    }

    switch (dataType) {
      case CustomFieldDataType.FullDate:
      case CustomFieldDataType.PartialDate:
        customInput = AbstractImpl.fromJSON(this, DateInput) as DateInput;
        customInput.BlnIsEditable = false;
        customInput.IsPartial = dataType === CustomFieldDataType.PartialDate;
        customInput.DatDate = this.StrValue;
        if (companyConfig) {
          customInput.StrFormat = companyConfig.getDateFormat();
          customInput.StrMonthDayFormat = companyConfig.getPartialDateFormat();
        }
        break;
      case CustomFieldDataType.Time:
        customInput = AbstractImpl.fromJSON(this, TimeInput) as TimeInput;
        customInput.BlnIsEditable = false;
        customInput.TimValue = this.StrValue;
        if (companyConfig) {
          customInput.StrFormat = companyConfig.getTimeFormat();
        }
        break;
      case CustomFieldDataType.Numeric:
        if (isDecimal) {
          customInput = AbstractImpl.fromJSON(this, DecimalInput) as DecimalInput;
          // TODO: MSS/MO - Remove the skip formatting once core ticket V7-19004 is done
          customInput.BlnShouldSkipFixedFormatting = true;
        } else {
          customInput = AbstractImpl.fromJSON(this, NumberInput) as NumberInput;
          customInput.IntValue = this.getNumberValue();
        }
        break;
      default:
        customInput = AbstractImpl.fromJSON(this, TextInput) as TextInput;
        customInput.StrRegExp = this.StrCharWhitelist ? `^${this.StrCharWhitelist}$` : undefined;
        break;
    }

    if (customInput.StrCustomFormat) {
      customInput.IntMaxLength = customInput.StrCustomFormat.length;
      customInput.StrRegExp = MaskedInputFormatter.getMaskFromCustomFormat(customInput.StrCustomFormat);
    }

    return customInput;
  }

  private isDropdown(inputMethod: number | undefined) {
    return inputMethod === CustomFieldInputMethod.IntComboList || inputMethod === CustomFieldInputMethod.IntComboEdit;
  }

  private isDropdownEditable(inputMethod: number | undefined) {
    return inputMethod === CustomFieldInputMethod.IntComboEdit;
  }

  private getListItems() {
    if (this.IntDataType === CustomFieldDataType.FullDate || this.IntDataType === CustomFieldDataType.PartialDate) {
      return this.ArrDateOptions;
    }
    if (this.IntDataType === CustomFieldDataType.Time) {
      return this.ArrTimeOptions;
    }
    return this.KeyTextItems;
  }

  private createComponent() {
    if (this.isDropdown(this.IntInputMethod)) {
      const listItems = this.getListItems();
      const firstItem = listItems ? listItems[0] : undefined;
      const customInput = AbstractImpl.fromJSON(this, DropdownInput) as DropdownInput;
      customInput.addDropdownEntryInput = this.isDropdownEditable(this.IntInputMethod)
        ? new CustomFieldControlImpl()
        : undefined;
      customInput.BlnIsEditable = false;
      customInput.BlnIsDisabled = !(listItems && listItems.length > 0);
      customInput.ObjListContext = {
        listItems,
        selectedItem: listItems?.findMatchingValue(this.StrValue || '') || firstItem,
      } as ListItemContext;

      return customInput;
    }

    return this.createInput(this.IntDataType);
  }
}
