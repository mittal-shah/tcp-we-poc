import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import AlertContext from '../../ui-impl/context/alert.context';

@Component({
  selector: 'tcp-alert-dialog',
  styleUrls: ['./alert-dialog.component.scss'],
  templateUrl: './alert-dialog.component.html',
})
export class AlertDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public context: AlertContext) {
  }
}
