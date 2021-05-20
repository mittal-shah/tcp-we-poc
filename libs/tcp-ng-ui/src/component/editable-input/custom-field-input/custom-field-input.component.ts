import { Component, Input, OnInit } from '@angular/core';
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
export class CustomFieldInputComponent implements OnInit {
  @Input() customFieldControl: CustomFieldControlImpl | undefined;

  appConfig: AppConfigImpl | undefined;
  companyConfig: CompanyConfigImpl | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.appConfig = this.configService.getAppConfig();
    this.companyConfig = this.configService.getCompanyConfig();
    this.customFieldControl?.initializeInput(this.appConfig, this.companyConfig);
  }

  getDateComponent() {
    return this.customFieldControl?.getComponent() as EditableDateInputModel;
  }

  isNumberInput() {
    return this.customFieldControl?.getComponent() instanceof NumberInputImpl;
  }

  isTextInput() {
    return this.customFieldControl?.getComponent() instanceof TextInputImpl;
  }

  isDateInput() {
    return this.customFieldControl?.getComponent() instanceof DateInputImpl;
  }

  isDecimalInput() {
    return this.customFieldControl?.getComponent() instanceof DecimalInputImpl;
  }

  onModelChange(value: string) {
    if (this.customFieldControl) {
      this.customFieldControl.StrValue = value;
    }
  }
}
