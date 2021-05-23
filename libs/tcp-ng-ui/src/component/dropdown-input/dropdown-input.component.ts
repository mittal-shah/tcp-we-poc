import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { AnyType, AppConfigImpl, CompanyConfigImpl, DropdownInputImpl } from '@tcp/tcp-models';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'tcp-dropdown-input',
  styleUrls: ['./dropdown-input.component.scss'],
  templateUrl: './dropdown-input.component.html',
})
export class DropdownInputComponent implements OnChanges, AfterViewInit {
  @ViewChild('inputElement', { static: false }) inputElement: MatSelect | undefined;

  @Input() dropdownInput: DropdownInputImpl | undefined;
  appConfig: AppConfigImpl | undefined;
  companyConfig: CompanyConfigImpl | undefined;

  constructor(private configService: ConfigService) {
    this.appConfig = this.configService.getAppConfig();
    this.companyConfig = this.configService.getCompanyConfig();
  }

  ngOnChanges(): void {
    this.dropdownInput?.initializeInput(this.appConfig, this.companyConfig);
  }

  ngAfterViewInit() {
    if (!this.dropdownInput?.ShouldFocus) {
      return;
    }
    setTimeout(() => this.inputElement?.focus(), 0);
  }

  onSelect(value: AnyType) {
    if (this.dropdownInput?.handleOnSelectItem) {
      this.dropdownInput.handleOnSelectItem(value);
    }
  }

  getValue() {
    const modelValue = this.dropdownInput?.getModelValue();
    return modelValue?.getValue ? modelValue.getValue() : undefined;
  }

  setValue(value: AnyType): void {
    this.dropdownInput?.setValue(value);
  }
}
