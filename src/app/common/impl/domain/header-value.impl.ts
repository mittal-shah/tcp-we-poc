import {HeaderValueModel} from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class HeaderValueImpl extends AbstractImpl implements HeaderValueModel {
  StrSortByField?: string | undefined = '';

  StrValue?: string | undefined = '';
}
