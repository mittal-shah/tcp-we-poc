import FilterDataImpl from '../data/filter.data.impl';
import ExceptionItemImpl from '../domain/exception-item.impl';
import AbstractImpl from '../abstract.impl';
import {ExceptionListContext} from '../../../declarations/global';

export default class ExceptionListContextImpl extends AbstractImpl implements ExceptionListContext {
  ArrExceptions?: ExceptionItemImpl[] | undefined = [];

  ArrGlobalExceptions?: ExceptionItemImpl[] | undefined = [];

  BlnCanDownload?: boolean | undefined = false;

  BlnShowDescForExceptions?: boolean | undefined = false;

  BlnShowDescForGlobalExceptions?: boolean | undefined = false;

  BlnShowGroupForExceptions?: boolean | undefined = false;

  BlnShowGroupForGlobalExceptions?: boolean | undefined = false;

  BlnShowIdForExceptions?: boolean | undefined = false;

  BlnShowIdForGlobalExceptions?: boolean | undefined = false;

  BlnShowType?: boolean | undefined = false;

  ObjFilterDataExceptions?: FilterDataImpl | undefined = undefined;

  ObjFilterDataGlobalExceptions?: FilterDataImpl | undefined = undefined;

  StrDescription?: string | undefined = '';

  StrExceptionsTitle?: string | undefined = '';

  StrGlobalExceptionsTitle?: string | undefined = '';

  StrGroup?: string | undefined = '';

  StrHelpText?: string | undefined = '';

  StrId?: string | undefined = '';

  StrTitle?: string | undefined = '';

  updateFilterData?: () => void;

  init(data?: ExceptionListContext) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrExceptions', ExceptionItemImpl);
    this.copyTypedArray(data, 'ArrGlobalExceptions', ExceptionItemImpl);

    this.ObjFilterDataExceptions =
      this.ObjFilterDataExceptions !== undefined
        ? AbstractImpl.fromJSON(data.ObjFilterDataExceptions, FilterDataImpl)
        : undefined;

    this.ObjFilterDataGlobalExceptions =
      this.ObjFilterDataGlobalExceptions !== undefined
        ? AbstractImpl.fromJSON(data.ObjFilterDataGlobalExceptions, FilterDataImpl)
        : undefined;
  }
}
