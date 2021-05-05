import { HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import AlertOption from '../ui-impl/domain/alert-option';
import AlertContext from '../ui-impl/context/alert.context';
import { Observable } from 'rxjs';
import { AbstractImpl, AnyType, ApiOptions, ExceptionType, PresentationExceptionImpl } from '@tcp/tcp-models';
import { AlertDialogComponent } from '../component';

export default class ExceptionHandler {
  constructor(private dialog: MatDialog) {}

  public handleExceptionIfAny<T>(response: HttpResponse<T>) {
    const exceptionTypeHeader = response.headers.get('exception_type');
    if (exceptionTypeHeader) {
      throw AbstractImpl.fromJSON(response.body, PresentationExceptionImpl);
    }
    return response.body as T;
  }

  public handleError<T>(operation = 'operation', options?: ApiOptions): (error: AnyType) => Observable<T> {
    return (error: AnyType): Observable<T> => {
      let exception = new PresentationExceptionImpl();
      if (error instanceof PresentationExceptionImpl) {
        exception = error;
      } else {
        exception.setUnexpectedError(error.message ? error.message : error);
      }

      if (!options?.manuallyHandleExceptions?.find((et) => et === exception.IntType)) {
        this.dialog.open(AlertDialogComponent, { data: this.buildAlertContext(exception) });
      }

      this.log(`operation: ${operation} failed: ${ExceptionType[Number(exception.IntType)]} - ${exception.StrMessage}`);
      throw exception;
    };
  }

  private buildAlertContext(exception: PresentationExceptionImpl) {
    const okButton = new AlertOption('Ok');

    const alertContext = new AlertContext(
      exception.StrMessage || '',
      [okButton],
      this.getAlertTitle(exception.IntType),
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
