import AbstractImpl from '../abstract.impl';
import {ExceptionItemModel} from '../../declarations/global';

export default class ExceptionItemImpl extends AbstractImpl implements ExceptionItemModel {
  IntType?: number | undefined = undefined;

  StrDescription?: string | undefined = '';

  StrException?: string | undefined = '';

  StrGroup?: string | undefined = '';

  StrId?: string | undefined = '';

  getKey(): string | number | undefined {
    return this.StrId;
  }
}
