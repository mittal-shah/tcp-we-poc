import { Component, ViewChild } from '@angular/core';
import { MocksTextInputs } from '../../../../../../libs/tcp-models/src/impl/domain/input/__mocks__';
import { NgForm } from '@angular/forms';
import { EditableInputModel } from '@tcp/tcp-models';

@Component({
  selector: 'tcp-pg-editable-input',
  templateUrl: './pg-editable-input.component.html',
})
export class PgEditableInputComponent {
  @ViewChild(NgForm) inputForm!: NgForm;

  mocksTextInputs = new MocksTextInputs();

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
