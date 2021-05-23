import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  AppConfigImpl,
  CompanyConfigImpl,
  CustomFieldControlImpl,
  DateInputImpl,
  DecimalInputImpl,
  EditableDateInputModel,
  NumberInputImpl,
  TextInputImpl,
} from '@tcp/tcp-models';
import { ConfigService } from '../../../service';

@Component({
  selector: 'tcp-custom-field-input',
  styleUrls: ['./custom-field-input.component.scss'],
  templateUrl: './custom-field-input.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CustomFieldInputComponent implements OnChanges {
  @Input() customFieldControl: CustomFieldControlImpl | undefined;

  appConfig: AppConfigImpl | undefined;
  companyConfig: CompanyConfigImpl | undefined;

  constructor(private configService: ConfigService) {
    this.appConfig = this.configService.getAppConfig();
    this.companyConfig = this.configService.getCompanyConfig();
  }

  ngOnChanges() {
    if (!this.customFieldControl?.getComponent()) {
      this.customFieldControl?.initializeInput(this.appConfig, this.companyConfig);
    }
  }

  getComponent() {
    return this.customFieldControl?.getComponent();
  }

  getDateComponent() {
    return this.getComponent() as EditableDateInputModel;
  }

  isNumberInput() {
    return this.getComponent() instanceof NumberInputImpl;
  }

  isTextInput() {
    return this.getComponent() instanceof TextInputImpl;
  }

  isDateInput() {
    return this.getComponent() instanceof DateInputImpl;
  }

  isDecimalInput() {
    return this.getComponent() instanceof DecimalInputImpl;
  }

  onModelChange(value: string) {
    if (this.customFieldControl) {
      this.customFieldControl.StrValue = value;
    }
  }
}
