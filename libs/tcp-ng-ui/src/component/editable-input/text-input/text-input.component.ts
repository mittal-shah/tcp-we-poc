import { Component, Input } from '@angular/core';
import { EditableTextInputModel } from '@tcp/tcp-models';
import { AbstractEditableInputComponent } from '../abstract-editable-input.component';

@Component({
  selector: 'tcp-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent extends AbstractEditableInputComponent {
  @Input() editableInput: EditableTextInputModel | undefined;
}
