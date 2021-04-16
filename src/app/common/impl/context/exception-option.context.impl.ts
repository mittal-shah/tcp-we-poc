import ExceptionOptionImpl from '../domain/exception-option.impl';
import {ExceptionOptionContext} from '../../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class ExceptionOptionContextImpl extends AbstractImpl implements ExceptionOptionContext {
  ArrExceptionOptions?: ExceptionOptionImpl[] | undefined = [];

  BlnIsOverridden?: boolean | undefined = false;

  StrOverride?: string | undefined = '';

  init(data?: ExceptionOptionContext) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrExceptionOptions', ExceptionOptionImpl);
  }
}
