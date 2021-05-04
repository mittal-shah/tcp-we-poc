import { FilterData } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { PagingDataImpl } from './paging.data.impl';

export class FilterDataImpl extends AbstractImpl implements FilterData {
  BlnActiveOnly: boolean | undefined = false;

  BlnSortDescending: boolean | undefined = false;

  BlnSortSecondaryDescending: boolean | undefined = false;

  BlnUseSecondarySortByField: boolean | undefined = false;

  IntFilterByType: number | undefined = 0;

  IntGroupBy: number | undefined = 0;

  ObjPagingData: PagingDataImpl | undefined;

  StrInGridTitle: string | undefined = '';

  StrJumpToPageWithItemMatchingQuery: string | undefined = '';

  StrQuery: string | undefined = '';

  StrSortByField: string | undefined = '';

  StrSortByFieldSecondary: string | undefined = '';

  init(data: FilterDataImpl) {
    if (!data) {
      return;
    }

    this.ObjPagingData =
      this.ObjPagingData !== undefined ? AbstractImpl.fromJSON(data.ObjPagingData, PagingDataImpl) : undefined;
  }

  hasValidPagingData() {
    return !!this.ObjPagingData && !!this.ObjPagingData.IntCurrentPage;
  }

  retrieveQuery() {
    return this.StrQuery || '';
  }

  setQuery(query: string) {
    if (this.ObjPagingData && this.ObjPagingData.IntCurrentPage !== 1) {
      this.ObjPagingData.IntCurrentPage = 1;
    }

    this.StrQuery = query;
  }

  setPage(page: number) {
    if (!this.ObjPagingData) {
      return;
    }

    this.ObjPagingData.IntCurrentPage = page;
  }
}
