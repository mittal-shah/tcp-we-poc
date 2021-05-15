import { Component, Input } from '@angular/core';
import { EditableNumberInputModel } from '@tcp/tcp-models';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';

@Component({
  selector: 'tcp-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableNumberInputModel | undefined;
}
