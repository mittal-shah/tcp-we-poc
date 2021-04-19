import {OrderedCostCodeOptionModel} from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class OrderedCostCodeOptionImpl extends AbstractImpl implements OrderedCostCodeOptionModel {
  BlnIsFirstItem?: boolean | undefined = false;

  BlnIsLastItem?: boolean | undefined = false;

  IntPosition?: number | undefined = 0;

  LngRecordId?: number | undefined = 0;

  StrCostCodeOptionId?: string | undefined = '';

  StrDescription?: string | undefined = '';
}
