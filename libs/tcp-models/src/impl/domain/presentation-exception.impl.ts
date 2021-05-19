import ExceptionType from '../../constants/exception-type.constant';
import { PresentationExceptionModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class PresentationExceptionImpl extends AbstractImpl implements PresentationExceptionModel {
  static getPasswordEntryExceptions() {
    return [ExceptionType.Confirmation, ExceptionType.EmployeePassword, ExceptionType.EmployeePasswordAndPin];
  }
  IntType: number | undefined = 0;
  StrMessage: string | undefined = '';
  StrTitle: string | undefined = '';

  isPresentationException() {
    return this.IntType === ExceptionType.Presentation;
  }

  isPasswordEntryException() {
    switch (this.IntType) {
      case ExceptionType.Confirmation:
      case ExceptionType.EmployeePasswordAndPin:
      case ExceptionType.EmployeePassword:
        return true;
      default:
        return false;
    }
  }

  isPresentationConfirmationException() {
    switch (this.IntType) {
      case ExceptionType.Confirmation:
      case ExceptionType.ConfirmationDeactivate:
      case ExceptionType.ConfirmationUnassign:
      case ExceptionType.ConfirmationClearVariance:
      case ExceptionType.ConfirmationVariance:
      case ExceptionType.ConfirmationOfferExist:
      case ExceptionType.EmployeePasswordAndPin:
      case ExceptionType.EmployeePassword:
      case ExceptionType.ConfirmationOfferTime:
        return true;
      default:
        return false;
    }
  }

  setUnexpectedError(message: string) {
    this.IntType = ExceptionType.Unexpected;
    this.StrMessage = message;
    this.StrTitle = 'Unexpected Error';
  }
}
