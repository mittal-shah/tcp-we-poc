import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  EditableInputModel,
  GlobalConstant,
  MocksAppConfigs,
  MocksDateInputs,
  MocksDecimalInputs,
  MocksNumberInputs,
  MocksTextInputs,
} from '@tcp/tcp-models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tcp-pg-editable-input',
  templateUrl: './pg-editable-input.component.html',
  styleUrls: ['./pg-editable-input.component.scss'],
})
export class PgEditableInputComponent implements OnInit {
  @ViewChild(NgForm) inputForm!: NgForm;

  mocksTextInputs = new MocksTextInputs();
  mocksNumberInputs = new MocksNumberInputs();
  mocksDecimalInputs = new MocksDecimalInputs();
  mocksDateInputs = new MocksDateInputs();
  type: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
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
