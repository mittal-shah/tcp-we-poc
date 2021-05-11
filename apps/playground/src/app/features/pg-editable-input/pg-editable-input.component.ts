import { Component, OnInit, ViewChild } from '@angular/core';
import { MocksTextInputs } from '../../../../../../libs/tcp-models/src/impl/domain/input/__mocks__';
import { NgForm } from '@angular/forms';
import { EditableInputModel, GlobalConstant } from '@tcp/tcp-models';
import { MocksAppConfigs } from '../../../../../../libs/tcp-models/src/impl/config/__mocks__/mocks-app-configs';

@Component({
  selector: 'tcp-pg-editable-input',
  templateUrl: './pg-editable-input.component.html',
  styleUrls: ['./pg-editable-input.component.scss'],
})
export class PgEditableInputComponent implements OnInit {
  @ViewChild(NgForm) inputForm!: NgForm;

  mocksTextInputs = new MocksTextInputs();

  ngOnInit() {
    const mocksAppConfig = new MocksAppConfigs();
    GlobalConstant.appConfig = mocksAppConfig.managerAppConfig;
  }

  showDetail(input: EditableInputModel) {
    return console.log(input);
  }

  submitForm() {
    if (!this.inputForm.valid) {
      alert('invalid form');
    } else {
      alert('valid form');
    }
  }
}
