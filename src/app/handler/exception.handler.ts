import {HttpResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import AbstractImpl from '../common/impl/abstract.impl';
import PresentationExceptionImpl from '../common/impl/domain/presentation-exception.impl';
import {AlertDialogComponent} from '../component/alert-dialog/alert-dialog.component';
import AlertOption from '../common/ui-impl/domain/alert-option';
import AlertContext from '../common/ui-impl/context/alert.context';
import {Observable, of} from 'rxjs';
import ExceptionType from '../common/constant/exception-type.constant';

export default class ExceptionHandler {
  constructor(private dialog: MatDialog) {
  }

  public handleExceptionIfAny<T>(response: HttpResponse<T>) {
    const exceptionTypeHeader = response.headers.get('exception_type');
    if (exceptionTypeHeader) {
      const exception = AbstractImpl.fromJSON(response.body, PresentationExceptionImpl);
      this.dialog.open(AlertDialogComponent, {data: this.buildAlertContext(exception)});
    }
    return response.body as T;
  }

  public handleHttpError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: MSS Integrate LoggerService
      console.error(error); // log to console instead

      // TODO: MSS Integrate LoggerService
      this.log(`${operation} failed: ${error.message}`);

      const exception = new PresentationExceptionImpl();
      exception.StrTitle = 'Unexpected Exception';
      exception.IntType = ExceptionType.Unexpected;
      exception.StrMessage = error.message;
      this.dialog.open(AlertDialogComponent, {data: this.buildAlertContext(exception)});

      return of(result as T);
    };
  }

  private buildAlertContext(exception: PresentationExceptionImpl) {
    const okButton = new AlertOption('Ok');

    const alertContext = new AlertContext(
      exception.StrMessage || '',
      [okButton],
      this.getAlertTitle(exception.IntType)
    );
    alertContext.isCancelable = false;
    return alertContext;
  }

  private getAlertTitle(type: number | undefined) {
    switch (type) {
      case ExceptionType.Information:
        return 'Info';
      case ExceptionType.Presentation:
      default:
        return 'Error';
    }
  }

  private log(message: string): void {
    // TODO: MSS - Integrate with LoggerService
    console.log(message);
  }
}
