import ExceptionType from '../../constant/exception-type.constant';
import {PresentationExceptionModel} from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class PresentationExceptionImpl extends AbstractImpl implements PresentationExceptionModel {
  IntType?: number | undefined = 0;

  StrMessage?: string | undefined = '';

  StrTitle?: string | undefined = '';

  setUnexpectedError(message: string) {
    this.IntType = ExceptionType.Unexpected;
    this.StrMessage = message;
    this.StrTitle = 'Unexpected Error';
  }
}
