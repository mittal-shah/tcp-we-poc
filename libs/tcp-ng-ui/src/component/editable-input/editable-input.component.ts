import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { AnyType, AppConfigImpl, EditableInputModel, GlobalConstant } from '@tcp/tcp-models';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'tcp-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class EditableInputComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement', { static: false }) inputElement: MatInput | undefined;

  @Input() editableInput: EditableInputModel | undefined;
  @Output() inputModelChange = new EventEmitter<string>();
  appConfig: AppConfigImpl | undefined;

  ngOnInit(): void {
    this.appConfig = GlobalConstant.appConfig;
    this.editableInput?.initializeControl();
  }

  ngAfterViewInit() {
    if (!this.editableInput?.ShouldFocus) {
      return;
    }
    setTimeout(() => this.inputElement?.focus(), 0);
  }

  setValue(value: AnyType): void {
    this.editableInput?.setValue(value);
    this.inputModelChange.emit(value);
    if (this.editableInput?.onChange) {
      this.editableInput.onChange(value);
    }
  }
}
