import { CustomFieldControlModel, DateSelectItemModel, TimeSelectItemModel } from '../../../declaration';
import { ListItemContext } from '../../../declaration/types.declaration';
import CustomFieldDataType from '../../../constants/custom-field-data-type.constant';
import CustomFieldInputMethod from '../../../constants/custom-field-input-method.constant';
import { EditableInputModel } from '../../../declaration/editable-input.declaration';
import { KeyTextItemImpl } from '../key-text-item.impl';
import { DateSelectItemImpl } from '../date-select-item.impl';
import { TimeSelectItemImpl } from '../time-select-item.impl';
import { MaskedInputFormatter } from '@tcp/tcp-core';
import { AppConfigImpl, CompanyConfigImpl } from '../../config';
import { AbstractImpl } from '../../abstract.impl';
import { DateInputImpl } from './date.input.impl';
import { TimeInputImpl } from './time.input.impl';
import { DecimalInputImpl } from './decimal.input.impl';
import { TextInputImpl } from './text.input.impl';
import { DropdownInputImpl } from './dropdown.input.impl';

export class CustomFieldControlImpl extends AbstractImpl implements CustomFieldControlModel {
  ArrDateOptions?: DateSelectItemModel[] | undefined;
  ArrStringOptions?: string[] | undefined;
  ArrTimeOptions?: TimeSelectItemModel[] | undefined;
  BlnForceLowercase?: boolean | undefined;
  BlnForceUppercase?: boolean | undefined;
  BlnIsDisabled?: boolean | undefined;
  BlnIsMaskedValue?: boolean | undefined;
  BlnIsRequired?: boolean | undefined;
  BlnIsSelected?: boolean | undefined;
  BlnIsVisible?: boolean | undefined;
  DatMaxDate?: string | undefined;
  DatMinDate?: string | undefined;
  IntDataType?: number | undefined;
  IntInputMethod?: number | undefined;
  IntMaxLength?: number | undefined;
  IntValue?: number | undefined;
  LngRecordId?: number | undefined;
  StrCharWhitelist?: string | undefined;
  StrCustomFormat?: string | undefined;
  StrId?: string | undefined;
  StrRegExp?: string | undefined;
  StrText?: string | undefined;
  StrValue?: string | undefined;

  private appConfig: AppConfigImpl | undefined = undefined;
  private companyConfig: CompanyConfigImpl | undefined = undefined;
  private inputControl: EditableInputModel | undefined;
  private keyTextItems: KeyTextItemImpl[] | undefined = [];

  init(data: CustomFieldControlImpl) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrDateOptions', DateSelectItemImpl);
    this.copyTypedArray(data, 'ArrTimeOptions', TimeSelectItemImpl);

    if (this.ArrStringOptions && this.ArrStringOptions.length) {
      this.keyTextItems = this.ArrStringOptions.map((item) => new KeyTextItemImpl(item, item));
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

    if (data.keyTextItems) {
      delete data.keyTextItems;
    }

    return data;
  }

  initializeInput(appConfig: AppConfigImpl | undefined, companyConfig: CompanyConfigImpl | undefined): void {
    this.appConfig = appConfig;
    this.companyConfig = companyConfig;
    this.inputControl = this.createComponent();
  }

  getComponent() {
    return this.inputControl;
  }

  createNewEntryInput() {
    return AbstractImpl.fromJSON(
      {
        ...this,
        ArrDateOptions: [],
        ArrStringOptions: [],
        ArrTimeOptions: [],
        IntInputMethod: CustomFieldInputMethod.IntEdit,
      },
      CustomFieldControlImpl,
    ) as CustomFieldControlImpl;
  }

  private createInput(dataType: number | undefined) {
    let customInput;
    switch (dataType) {
      case CustomFieldDataType.FullDate:
      case CustomFieldDataType.PartialDate:
        customInput = AbstractImpl.fromJSON(this, DateInputImpl) as DateInputImpl;
        customInput.BlnMonthDayOnly = dataType === CustomFieldDataType.PartialDate;
        customInput.DatDate = this.StrValue;
        if (this.companyConfig) {
          customInput.StrFormat = this.companyConfig.getDateFormat();
          customInput.StrMonthDayFormat = this.companyConfig.getPartialDateFormat();
        }
        break;
      case CustomFieldDataType.Time:
        customInput = AbstractImpl.fromJSON(this, TimeInputImpl) as TimeInputImpl;
        customInput.TimValue = this.StrValue;
        if (this.companyConfig) {
          customInput.StrFormat = this.companyConfig.getTimeFormat();
        }
        break;
      case CustomFieldDataType.Numeric:
        customInput = AbstractImpl.fromJSON(this, DecimalInputImpl) as DecimalInputImpl;
        customInput.BlnShouldSkipFixedFormatting = true;
        break;
      default:
        customInput = AbstractImpl.fromJSON(this, TextInputImpl) as TextInputImpl;
        break;
    }

    if (this.StrCustomFormat) {
      customInput.IntMaxLength = this.StrCustomFormat.length;
      this.StrRegExp = MaskedInputFormatter.getMaskFromCustomFormat(this.StrCustomFormat);
    } else {
      this.StrRegExp = this.StrCharWhitelist ? `^${this.StrCharWhitelist}$` : undefined;
    }
    customInput.StrRegExp = this.StrRegExp;

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
    return this.keyTextItems;
  }

  private createComponent() {
    if (this.isDropdown(this.IntInputMethod)) {
      const listItems = this.getListItems();
      const firstItem = listItems ? listItems[0] : undefined;
      const customInput = AbstractImpl.fromJSON(this, DropdownInputImpl) as DropdownInputImpl;
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
