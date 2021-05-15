import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { AnyType, AppConfigImpl, CompanyConfigImpl, EditableInputModel, GlobalConstant } from '@tcp/tcp-models';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({ template: '', viewProviders: [{ provide: ControlContainer, useExisting: NgForm }] })
export class AbstractEditableInputComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement', { static: false }) inputElement: MatInput | undefined;
  @Input() editableInput: EditableInputModel | undefined;
  appConfig: AppConfigImpl | undefined;
  companyConfig: CompanyConfigImpl | undefined;

  ngOnInit(): void {
    this.appConfig = GlobalConstant.appConfig;
    this.companyConfig = GlobalConstant.companyConfig;
    this.editableInput?.initializeInput(this.appConfig, this.companyConfig);
  }

  ngAfterViewInit() {
    if (!this.editableInput?.ShouldFocus) {
      return;
    }
    setTimeout(() => this.inputElement?.focus(), 0);
  }

  onChange(target) {
    this.setValue(target.value);
    if (this.editableInput.onChange) {
      this.editableInput.onChange(this.editableInput.getValue());
    }
  }

  setValue(value: AnyType): void {
    this.editableInput?.setValue(value);
  }
}
