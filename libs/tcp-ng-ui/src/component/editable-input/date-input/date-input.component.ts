import { Component, Input } from '@angular/core';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';
import { AnyType, EditableDateInputModel } from '@tcp/tcp-models';

@Component({
  selector: 'tcp-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableDateInputModel | undefined;

  dateFilter = (momentDate): boolean => {
    if (!momentDate) {
      return true;
    }
    const day = momentDate.toDate();
    const minDay = this.editableInput.getMinValue();
    const maxDay = this.editableInput.getMaxValue();
    return (!minDay || day >= minDay) && (!maxDay || day <= maxDay);
  };

  setValue(value: AnyType): void {
    this.editableInput?.setDate(value);
  }
}
