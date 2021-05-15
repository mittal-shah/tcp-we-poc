import { Component, Input } from '@angular/core';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';
import { EditableDateInputModel } from '@tcp/tcp-models';

@Component({
  selector: 'tcp-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableDateInputModel | undefined;
}
