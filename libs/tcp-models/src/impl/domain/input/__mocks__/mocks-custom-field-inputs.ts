import { AbstractImpl } from '../../../abstract.impl';
import { CustomFieldControlModel } from '../../../../declaration';
import { CustomFieldControlImpl } from '../custom-field-control.impl';

export class MocksCustomFieldInputs {
  customFieldTextEditAlphaWithSymbolsInput: CustomFieldControlImpl = AbstractImpl.fromJSON(
    {
      StrId: 'custom-field-text-edit-alpha-with-symbols-input',
      BlnForceLowercase: false,
      BlnForceUppercase: false,
      BlnIsDisabled: false,
      BlnIsMaskedValue: false,
      BlnIsRequired: false,
      BlnIsSelected: true,
      BlnIsVisible: true,
      IntDataType: 0,
      IntInputMethod: 1,
      IntMaxLength: 30,
      LngRecordId: 0,
      StrText: 'text edit alpha-with-sym',
      StrValue: 'mock text',
    } as CustomFieldControlModel,
    CustomFieldControlImpl,
  );

  customFieldNumberEditInput: CustomFieldControlImpl = AbstractImpl.fromJSON(
    {
      ArrStringOptions: [],
      BlnForceLowercase: false,
      BlnForceUppercase: false,
      BlnIsDisabled: false,
      BlnIsMaskedValue: false,
      BlnIsRequired: false,
      BlnIsSelected: true,
      BlnIsVisible: true,
      IntDataType: 3,
      IntInputMethod: 1,
      IntMaxLength: 30,
      LngRecordId: 0,
      StrCharWhitelist: '[0-9]*',
      StrId: 'custom-field-number-edit-input',
      StrText: 'number edit input',
      StrValue: '1',
    } as CustomFieldControlModel,
    CustomFieldControlImpl,
  );

  customFieldDecimalEditInput: CustomFieldControlImpl = AbstractImpl.fromJSON(
    {
      ArrStringOptions: [],
      BlnForceLowercase: false,
      BlnForceUppercase: false,
      BlnIsDisabled: false,
      BlnIsMaskedValue: false,
      BlnIsRequired: false,
      BlnIsSelected: true,
      BlnIsVisible: true,
      IntDataType: 3,
      IntInputMethod: 1,
      IntMaxLength: 30,
      LngRecordId: 0,
      StrCharWhitelist: '(\\d{0,27}|\\d{0,27}\\.\\d{0,2})',
      StrId: 'custom-field-decimal-edit-input',
      StrText: 'decimal edit input',
      StrValue: '1.00',
    } as CustomFieldControlModel,
    CustomFieldControlImpl,
  );

  customFieldDateEditInput: CustomFieldControlImpl = AbstractImpl.fromJSON(
    {
      ArrDateOptions: [],
      BlnForceLowercase: false,
      BlnForceUppercase: false,
      BlnIsDisabled: false,
      BlnIsMaskedValue: false,
      BlnIsRequired: false,
      BlnIsSelected: true,
      BlnIsVisible: true,
      DatMaxDate: '2078-12-31',
      DatMinDate: '1900-01-01',
      IntDataType: 4,
      IntInputMethod: 1,
      IntMaxLength: 30,
      LngRecordId: 0,
      StrId: 'custom-field-date-edit-input',
      StrText: 'date edit input',
      StrValue: '2021-05-12',
    } as CustomFieldControlModel,
    CustomFieldControlImpl,
  );
}
