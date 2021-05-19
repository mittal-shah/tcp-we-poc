import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  DateInputImpl,
  DecimalInputImpl,
  EditableCustomFieldInputModel,
  NumberInputImpl,
  TextInputImpl,
} from '@tcp/tcp-models';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';

@Component({
  selector: 'tcp-custom-field-input',
  templateUrl: './custom-field-input.component.html',
  styleUrls: ['./custom-field-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CustomFieldInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableCustomFieldInputModel | undefined;

  isNumberInput() {
    return this.editableInput?.getComponent() instanceof NumberInputImpl;
  }

  isTextInput() {
    return this.editableInput?.getComponent() instanceof TextInputImpl;
  }

  isDateInput() {
    return this.editableInput?.getComponent() instanceof DateInputImpl;
  }

  isDecimalInput() {
    return this.editableInput?.getComponent() instanceof DecimalInputImpl;
  }
}
