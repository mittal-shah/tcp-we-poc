import { ExceptionOptionContext } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { ExceptionOptionImpl } from '../domain/exception-option.impl';

export class ExceptionOptionContextImpl extends AbstractImpl implements ExceptionOptionContext {
  ArrExceptionOptions: ExceptionOptionImpl[] | undefined = [];

  BlnIsOverridden: boolean | undefined = false;

  StrOverride: string | undefined = '';

  init(data: ExceptionOptionContext) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrExceptionOptions', ExceptionOptionImpl);
  }
}
