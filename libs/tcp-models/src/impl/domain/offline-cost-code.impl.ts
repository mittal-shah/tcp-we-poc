import { OfflineCostCodeModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class OfflineCostCodeImpl extends AbstractImpl implements OfflineCostCodeModel {
  LngRecordId: number | undefined = 0;

  StrDescription: string | undefined = '';

  StrFullCode: string | undefined = '';

  isMatching(searchQuery = '') {
    return this.StrFullCode?.toLowerCase().includes(searchQuery.toLowerCase());
  }
}
