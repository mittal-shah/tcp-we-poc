import {FormControl, ValidatorFn, Validators} from '@angular/forms';
import {AppConfig, CustomFieldControlModel} from '../declarations/global';

export default class FormControlValidationBuilder {
  buildValidators(control: CustomFieldControlModel | undefined): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (!control) {
      return validators;
    }

    if (control.BlnIsRequired) {
      validators.push(Validators.required);
    } else if (control.IntMaxLength) {
      validators.push(Validators.maxLength(control.IntMaxLength));
    }
    return validators;
  }

  getErrorMessage(formControl: FormControl, appConfig: AppConfig | undefined): string | undefined {
    if (!appConfig) {
      return '';
    }

    if (formControl.hasError('required')) {
      return appConfig.StrEnterRequiredFields;
    } else if (formControl.hasError('maxlength')) {
      return appConfig.StrTextExceedsMaxLength;
    } else if (formControl.hasError('email')) {
      return appConfig.StrEnterValidEmail;
    }

    return '';
  }
}
