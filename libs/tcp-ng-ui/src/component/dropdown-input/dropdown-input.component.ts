import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { AnyType, AppConfigImpl, CompanyConfigImpl, DropdownInput, GlobalConstant } from '@tcp/tcp-models';

@Component({
  selector: 'tcp-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
})
export class DropdownInputComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement', { static: false }) inputElement: MatSelect | undefined;

  @Input() dropdownInput: DropdownInput | undefined;
  appConfig: AppConfigImpl | undefined;
  companyConfig: CompanyConfigImpl | undefined;

  ngOnInit(): void {
    this.appConfig = GlobalConstant.appConfig;
    this.companyConfig = GlobalConstant.companyConfig;
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
