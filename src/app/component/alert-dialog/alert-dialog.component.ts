import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import AlertContext from '../../common/ui-impl/context/alert.context';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public context: AlertContext) {
  }
}
