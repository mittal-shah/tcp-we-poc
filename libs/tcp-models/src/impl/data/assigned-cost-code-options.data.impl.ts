import { FilterDataImpl } from './filter.data.impl';
import { AssignedCostCodeOptionsData } from '../../declaration';
import { OrderedCostCodeOptionImpl } from '../domain';
import { AbstractImpl } from '../abstract.impl';

export class AssignedCostCodeOptionsDataImpl extends AbstractImpl implements AssignedCostCodeOptionsData {
  ArrOrderedCostCodeOptions: OrderedCostCodeOptionImpl[] | undefined = [];

  BlnCanAdd: boolean | undefined = false;

  IntMaxPosition: number | undefined = 0;

  ObjFilterData: FilterDataImpl | undefined;

  init(data: AssignedCostCodeOptionsData) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrOrderedCostCodeOptions', OrderedCostCodeOptionImpl);

    this.ObjFilterData =
      this.ObjFilterData !== undefined ? AbstractImpl.fromJSON(data.ObjFilterData, FilterDataImpl) : undefined;
  }
}
