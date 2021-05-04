import { AbstractImpl } from '../abstract.impl';
import { ExceptionItemModel } from '../../declaration';

export class ExceptionItemImpl extends AbstractImpl implements ExceptionItemModel {
  IntType: number | undefined = undefined;

  StrDescription: string | undefined = '';

  StrException: string | undefined = '';

  StrGroup: string | undefined = '';

  StrId: string | undefined = '';

  ArrValues: string[] | undefined = [];

  getKey(): string | number | undefined {
    return this.StrId;
  }
}
