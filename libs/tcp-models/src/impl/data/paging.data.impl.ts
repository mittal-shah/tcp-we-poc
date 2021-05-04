import { AbstractImpl } from '../abstract.impl';
import { PagingData } from '../../declaration';

export class PagingDataImpl extends AbstractImpl implements PagingData {
  BlnDeselectAll: boolean | undefined = false;

  BlnSelectAll: boolean | undefined = false;

  BlnShouldHideText: boolean | undefined = false;

  IntCurrentPage: number | undefined = 0;

  IntEntitiesPerPage: number | undefined = 0;

  IntSelectedEntitiesOutOfPage: number | undefined = 0;

  IntTotalEntities: number | undefined = 0;

  IntTotalPages: number | undefined = 0;

  canDecreasePage() {
    return !(this.IntTotalPages === 1 || this.IntCurrentPage === 1);
  }

  canIncreasePage() {
    if (this.IntTotalPages === 1) {
      return false;
    }

    return this.IntCurrentPage !== this.IntTotalPages;
  }

  shouldRenderControl() {
    if (this.IntTotalPages === 0 || this.IntTotalPages === undefined || this.IntCurrentPage === undefined) {
      return false;
    }

    if (this.IntTotalPages === 1) {
      return false;
    }

    return this.IntTotalPages >= this.IntCurrentPage;
  }

  getNextPage() {
    return this.IntCurrentPage ? this.IntCurrentPage + 1 : 1;
  }

  getPreviousPage() {
    return this.IntCurrentPage ? this.IntCurrentPage - 1 : 1;
  }
}
