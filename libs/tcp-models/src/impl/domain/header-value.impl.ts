import { HeaderValueModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class HeaderValueImpl extends AbstractImpl implements HeaderValueModel {
  StrSortByField: string | undefined = '';

  StrValue: string | undefined = '';
}
