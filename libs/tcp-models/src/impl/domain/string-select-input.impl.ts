import { AbstractImpl } from '../abstract.impl';
import { StringSelectInputModel } from '../../declaration';
import { StringSelectItemImpl } from './string-select-item.impl';

export class StringSelectInputImpl extends AbstractImpl implements StringSelectInputModel {
  ArrStringSelectItemOptions: StringSelectItemImpl[] | undefined = [];

  BlnIsDisabled: boolean | undefined = false;

  IntMaxLength: number | undefined = undefined;

  StrId: string | undefined = '';

  StrLabel: string | undefined = '';

  StrSuffix: string | undefined = '';

  StrValue: string | undefined = '';

  init(data: StringSelectInputModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrStringSelectItemOptions', StringSelectItemImpl);
  }

  getStringOptions() {
    if (!this.ArrStringSelectItemOptions) {
      return [];
    }
    return this.ArrStringSelectItemOptions.map((item) => item.getValue() || '');
  }

  createSubmissionData() {
    const data = AbstractImpl.clone<StringSelectInputImpl>(this, StringSelectInputImpl);

    delete data.ArrStringSelectItemOptions;

    return data;
  }
}
