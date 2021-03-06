import { Component, Input } from '@angular/core';
import { EditableDecimalInputModel } from '@tcp/tcp-models';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'tcp-decimal-input',
  styleUrls: ['./decimal-input.component.scss'],
  templateUrl: './decimal-input.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class DecimalInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableDecimalInputModel | undefined;
}
