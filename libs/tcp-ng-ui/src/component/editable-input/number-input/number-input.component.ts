import { Component, Input } from '@angular/core';
import { EditableNumberInputModel } from '@tcp/tcp-models';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'tcp-number-input',
  styleUrls: ['./number-input.component.scss'],
  templateUrl: './number-input.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class NumberInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableNumberInputModel | undefined;
}
