import { DateInputImpl, MocksAppConfigs, MocksCompanyConfigs, MocksDateInputs } from '@tcp/tcp-models';
import { DateTimeFormatter } from '@tcp/tcp-core';

describe('DateInputImpl', () => {
  const appConfig = new MocksAppConfigs().webclockAppConfig;
  const companyConfig = new MocksCompanyConfigs().webClockCompanyConfig;

  it('should contain the properties', () => {
    // exercise
    const testDateInputImpl = new MocksDateInputs().allEnabled;
    testDateInputImpl.initializeInput(appConfig, companyConfig);

    // post-conditions
    expect(testDateInputImpl).toBeDefined();
    expect(testDateInputImpl instanceof DateInputImpl).toBeTruthy();
    expect(testDateInputImpl.getValue).toBeDefined();
    expect(testDateInputImpl.setValue).toBeDefined();
    expect(testDateInputImpl.StrId).toBeDefined();
    expect(testDateInputImpl.StrSuffix).toBeDefined();
    expect(testDateInputImpl.StrText).toBeDefined();
    expect(testDateInputImpl.BlnIsDisabled).toBeDefined();
    expect(testDateInputImpl.BlnIsRequired).toBeDefined();
    expect(testDateInputImpl.BlnIsVisible).toBeDefined();
    expect(testDateInputImpl.DatDate).toBeDefined();
    expect(testDateInputImpl.getAutoCapitalize()).toBe('none');
    expect(testDateInputImpl.getAutoCompleteType()).toBe('off');
    expect(testDateInputImpl.getFormattedSubLabel('Optional')).toBe(' all enabled suffix');
    expect(testDateInputImpl.getInputSuffixIcon()).toBeUndefined();
    expect(testDateInputImpl.getNumberOfLines()).toBe(1);
    expect(testDateInputImpl.isInputAccessible()).toBeTruthy();
    expect(testDateInputImpl.isMultiline()).toBeFalsy();
    expect(testDateInputImpl.isSecuredField()).toBeFalsy();
    expect(testDateInputImpl.shouldAutoCorrect()).toBeFalsy();
    expect(testDateInputImpl.toString()).toBe('12/30/2019');
  });

  it('should set and retrieve value', () => {
    // setup
    const dateInput = new MocksDateInputs().allEnabled;
    dateInput.initializeInput(appConfig, companyConfig);
    const newValueForInput = '12/29/2019';

    // pre-conditions
    expect(dateInput.getValue()).toBe('12/30/2019');
    expect(dateInput.getDate()?.getDate()).toBe(DateTimeFormatter.getDate('2019-12-30')?.getDate());

    // exercise
    dateInput.setValue(newValueForInput);

    // post-conditions
    expect(dateInput.getValue()).toBe('12/29/2019');
    expect(dateInput.getDate()?.getDate()).toBe(DateTimeFormatter.getDate('2019-12-29')?.getDate());
  });

  it('should validate required', () => {
    // setup
    const dateInput = new MocksDateInputs().required;
    dateInput.initializeInput(appConfig, companyConfig);

    // pre-conditions
    expect(dateInput.isValidRequired()).toBeTruthy();
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();

    // exercise
    dateInput.setValue('');

    // post-conditions
    expect(dateInput.isValidRequired()).toBeFalsy();
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeFalsy();
  });

  it('should validate max-length', () => {
    // setup
    const dateInput = new MocksDateInputs().allEnabled;
    dateInput.initializeInput(appConfig, companyConfig);

    // pre-conditions
    expect(dateInput.isValidRequired()).toBeTruthy();
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeTruthy();

    // exercise
    dateInput.setValue('12/29/20199');

    // post-conditions
    expect(dateInput.isValidRequired()).toBeFalsy();
    expect(dateInput.isValidValue()).toBeFalsy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeFalsy();
  });

  it('should validate min-max', () => {
    // setup
    const dateInput = new MocksDateInputs().allEnabled;
    dateInput.initializeInput(appConfig, companyConfig);

    // pre-conditions
    expect(dateInput.isValidRequired()).toBeTruthy();
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();

    // exercise
    dateInput.setValue('01/01/2020');

    // post-conditions
    expect(dateInput.isValidRequired()).toBeTruthy();
    expect(dateInput.isValidValue()).toBeFalsy();
    expect(dateInput.isValidMinValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeFalsy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeFalsy();

    // exercise
    dateInput.setValue('11/01/2019');

    // post-conditions
    expect(dateInput.isValidRequired()).toBeTruthy();
    expect(dateInput.isValidValue()).toBeFalsy();
    expect(dateInput.isValidMinValue()).toBeFalsy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeFalsy();

    // exercise
    dateInput.setValue('12/01/2019');

    // post-conditions
    expect(dateInput.isValidRequired()).toBeTruthy();
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeTruthy();

    // exercise
    dateInput.setValue('12/31/2019');

    // post-conditions
    expect(dateInput.isValidRequired()).toBeTruthy();
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();
    expect(dateInput.isValidMaxLength()).toBeTruthy();
    expect(dateInput.isInputAccessible()).toBeTruthy();
    expect(dateInput.isValidInput()).toBeTruthy();
  });

  it('should return invalid date error message for isValidMinValue', () => {
    // setup
    const dateInput = new MocksDateInputs().allEnabled;
    dateInput.initializeInput(appConfig, companyConfig);

    // pre-conditions
    expect(dateInput.isValidMinValue()).toBeTruthy();

    // exercise
    dateInput.setValue('12/1/2018');
    const errorMessage = dateInput.getErrorMessage();

    // post-conditions
    expect(dateInput.isValidMinValue()).toBeFalsy();
    expect(errorMessage).toContain('Date 12/1/2018 is invalid. Date must be on or after 12/1/2019');
  });

  it('should return invalid date error message for isValidMaxValue', () => {
    // setup
    const dateInput = new MocksDateInputs().allEnabled;
    dateInput.initializeInput(appConfig, companyConfig);

    // exercise
    dateInput.setValue('1/1/2020');
    const errorMessage = dateInput.getErrorMessage();

    // post-conditions
    expect(errorMessage).toStrictEqual('Date 1/1/2020 is invalid. Date must be on or before 12/31/2019');
  });

  it('should return invalid date error message for isValidISODateString', () => {
    // setup
    const dateInput = new MocksDateInputs().allEnabled;
    dateInput.initializeInput(appConfig, companyConfig);

    // exercise
    dateInput.setValue('asdf');
    const errorMessage = dateInput.getErrorMessage();

    // post-conditions
    expect(errorMessage).toStrictEqual(appConfig.StrEnterValidDate);
  });

  it('should return super class isValidRequired error message', () => {
    // setup
    const input = new MocksDateInputs().required;
    input.initializeInput(appConfig, companyConfig);

    // exercise
    input.setValue('');
    const errorMessage = input.getErrorMessage();

    // post-conditions
    expect(errorMessage).toStrictEqual(appConfig.StrEnterRequiredFields);
  });

  it('setValue - Partial date', () => {
    // setup
    const dateInput = new MocksDateInputs().monthDayOnly;
    dateInput.initializeInput(appConfig, companyConfig);

    // pre-conditions
    expect(dateInput.getValue()).toBe('12/30');
    expect(dateInput.DatDate).toBe('2000-12-30');
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();

    // exercise
    dateInput.setValue('12/30/2000');

    // post-condition
    expect(dateInput.getValue()).toBe('12/30');
    expect(dateInput.DatDate).toBe('2000-12-30');
  });

  it('setValue - valid Partial date with valid Min and Max value', () => {
    // setup
    const dateInput = new MocksDateInputs().monthDayOnly;
    dateInput.initializeInput(appConfig, companyConfig);

    // pre-conditions
    expect(dateInput.getValue()).toBe('12/30');
    expect(dateInput.DatDate).toBe('2000-12-30');
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();

    // exercise
    dateInput.setValue("11/30/2000");

    // post-condition
    expect(dateInput.getValue()).toBe('11/30');
    expect(dateInput.DatDate).toBe('2000-11-30');
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();
  });

  it('setValue - Partial date with current year, valid Min and Max value', () => {
    // setup
    const dateInput = new MocksDateInputs().monthDayOnly;
    dateInput.initializeInput(appConfig, companyConfig);

    // pre-conditions
    expect(dateInput.getValue()).toBe('12/30');
    expect(dateInput.DatDate).toBe('2000-12-30');
    expect(dateInput.isValidValue()).toBeTruthy();
    expect(dateInput.isValidMaxValue()).toBeTruthy();
    expect(dateInput.isValidMinValue()).toBeTruthy();

    // exercise
    dateInput.setValue("12/30/2022");

    // post-condition
    expect(dateInput.getValue()).toBe('12/30');
    expect(dateInput.DatDate).toBe('2022-12-30');
    expect(dateInput.isValidValue()).toBeFalsy();
    expect(dateInput.isValidInput()).toBeFalsy();
  });
});
