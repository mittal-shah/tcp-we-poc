import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import AppConfigImpl from '../../../../tcp-models/src/impl/config/app.config.impl';
import { GlobalConstant } from '../../../../tcp-core/src/constants/global.constant';
import { MatSelect } from '@angular/material/select';
import DropdownInput from '../../../../tcp-models/src/impl/domain/input/dropdown.input';
import { AnyType } from '../../../../tcp-models/src/declarations/types';

@Component({
  selector: 'tcp-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
})
export class DropdownInputComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement', { static: false }) inputElement: MatSelect | undefined;

  @Input() dropdownInput: DropdownInput | undefined;
  appConfig: AppConfigImpl | undefined;

  ngOnInit(): void {
    this.appConfig = GlobalConstant.appConfig;
    this.dropdownInput?.initializeControl();
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
