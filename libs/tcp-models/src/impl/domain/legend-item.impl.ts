import { LegendItemModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';

export class LegendItemImpl extends AbstractImpl implements LegendItemModel {
  StrColor: string | undefined = '';

  StrText: string | undefined = '';

  StrTextColor: string | undefined = '';

  init(data: LegendItemModel) {
    if (!data) {
      return;
    }

    this.StrColor = this.StrColor ? this.StrColor.toLowerCase() : this.StrColor;
    this.StrTextColor = this.StrTextColor ? this.StrTextColor.toLowerCase() : this.StrTextColor;
  }
}
