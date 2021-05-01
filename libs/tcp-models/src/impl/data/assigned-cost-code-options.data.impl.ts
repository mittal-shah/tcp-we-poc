import FilterDataImpl from './filter.data.impl';
import { AssignedCostCodeOptionsData } from '../../declarations/global';
import OrderedCostCodeOptionImpl from '../domain/ordered-cost-code-option.impl';
import AbstractImpl from '../abstract.impl';

export default class AssignedCostCodeOptionsDataImpl extends AbstractImpl implements AssignedCostCodeOptionsData {
  ArrOrderedCostCodeOptions?: OrderedCostCodeOptionImpl[] | undefined = [];

  BlnCanAdd?: boolean | undefined = false;

  IntMaxPosition?: number | undefined = 0;

  ObjFilterData?: FilterDataImpl | undefined;

  init(data?: AssignedCostCodeOptionsData) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrOrderedCostCodeOptions', OrderedCostCodeOptionImpl);

    this.ObjFilterData =
      this.ObjFilterData !== undefined ? AbstractImpl.fromJSON(data.ObjFilterData, FilterDataImpl) : undefined;
  }
}
