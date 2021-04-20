import {Component, Input, OnInit} from '@angular/core';
import AppConfigImpl from '../../impl/config/app.config.impl';
import {GlobalConstant} from '../../constant/global.constant';
import {EditableInputModel} from '../../declarations/editable-input';

@Component({
  selector: 'app-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent implements OnInit {

  @Input() editableInput: EditableInputModel | undefined;
  appConfig: AppConfigImpl | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.appConfig = GlobalConstant.appConfig;
    this.editableInput?.initializeControl();
  }

  setValue(value: any): void {
    this.editableInput?.setValue(value);
  }
}
