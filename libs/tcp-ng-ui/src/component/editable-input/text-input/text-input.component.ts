import { Component, Input } from '@angular/core';
import { EditableTextInputModel } from '@tcp/tcp-models';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'tcp-text-input',
  styleUrls: ['./text-input.component.scss'],
  templateUrl: './text-input.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class TextInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableTextInputModel | undefined;
}
