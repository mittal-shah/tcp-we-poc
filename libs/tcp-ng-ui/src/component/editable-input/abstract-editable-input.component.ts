import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { AnyType, AppConfigImpl, CompanyConfigImpl, EditableInputModel } from '@tcp/tcp-models';
import { ControlContainer, NgForm } from '@angular/forms';
import { ConfigService } from '../../service/config.service';

@Component({ template: '', viewProviders: [{ provide: ControlContainer, useExisting: NgForm }] })
export class AbstractEditableInputComponent implements AfterViewInit, OnChanges {
  @ViewChild('inputElement', { static: false }) inputElement: MatInput | undefined;
  @Input() editableInput: EditableInputModel | undefined;
  @Output() inputModelChanged = new EventEmitter<string>();

  appConfig: AppConfigImpl | undefined;
  companyConfig: CompanyConfigImpl | undefined;

  constructor(private configService: ConfigService) {
    this.appConfig = this.configService.getAppConfig();
    this.companyConfig = this.configService.getCompanyConfig();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.editableInput?.initializeInput(this.appConfig, this.companyConfig);
  }

  ngAfterViewInit() {
    if (!this.editableInput?.ShouldFocus) {
      return;
    }
    setTimeout(() => this.inputElement?.focus(), 0);
  }

  onChange(target: AnyType) {
    this.setValue(target.value);
    if (this.editableInput?.onChange) {
      this.editableInput.onChange(this.editableInput.getValue());
    }
  }

  setValue(value: AnyType): void {
    this.editableInput?.setValue(value);
    this.inputModelChanged.emit(this.editableInput?.getValue());
  }
}
