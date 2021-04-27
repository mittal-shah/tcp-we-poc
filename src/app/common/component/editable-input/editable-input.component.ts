import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import AppConfigImpl from '../../impl/config/app.config.impl';
import {GlobalConstant} from '../../constant/global.constant';
import {EditableInputModel} from '../../declarations/editable-input';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'tcp-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent implements OnInit, AfterViewInit {
  @ViewChild('inputElement', {static: false}) inputElement: MatInput | undefined;

  @Input() editableInput: EditableInputModel | undefined;
  @Output() inputModelChange = new EventEmitter<string>();
  appConfig: AppConfigImpl | undefined;

  constructor() {
  }

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

  setValue(value: any): void {
    this.editableInput?.setValue(value);
    this.inputModelChange.emit(value);
    if (this.editableInput?.onChange) {
      this.editableInput.onChange(value);
    }
  }
}
