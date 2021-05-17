import { Component, Input } from '@angular/core';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';
import { AnyType, EditableDateInputModel } from '@tcp/tcp-models';
import { DateTimeFormatter } from '@tcp/tcp-core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'tcp-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DateInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableDateInputModel | undefined;

  dateFilter = (date): boolean => {
    if (!(date instanceof Date)) {
      return true;
    }

    const minDay = this.editableInput.getMinValue();
    const maxDay = this.editableInput.getMaxValue();
    const isValidMin = !minDay || date >= minDay;
    const isValidMax = !maxDay || date <= maxDay;
    return isValidMin && isValidMax;
  };

  onChange(target) {
    const date = DateTimeFormatter.getDate(
      target.value,
      this.editableInput.getDateFormat(),
      this.editableInput.BlnMonthDayOnly,
    );
    super.onChange({ value: date });
  }

  setValue(value: AnyType): void {
    this.editableInput?.setDate(value);
  }
}
