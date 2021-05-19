import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { AnyType, AppConfigImpl, CompanyConfigImpl, DropdownInputImpl } from '@tcp/tcp-models';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'tcp-dropdown-input',
  styleUrls: ['./dropdown-input.component.scss'],
  templateUrl: './dropdown-input.component.html',
})
export class DropdownInputComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement', { static: false }) inputElement: MatSelect | undefined;

  @Input() dropdownInput: DropdownInputImpl | undefined;
  appConfig: AppConfigImpl | undefined;
  companyConfig: CompanyConfigImpl | undefined;

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.appConfig = this.configService.getAppConfig();
    this.companyConfig = this.configService.getCompanyConfig();
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

  setValue(value: AnyType): void {
    this.dropdownInput?.setValue(value);
  }
}
