import { SummaryLineItemModel } from '../../declarations/global';
import AbstractImpl from '../abstract.impl';

export default class SummaryLineItemImpl extends AbstractImpl implements SummaryLineItemModel {
  ArrChildLines?: string[] | undefined = undefined;

  BlnIsSuccessful?: boolean | undefined = false;

  StrLine?: string | undefined = '';

  getFormattedLines(): string {
    let lineText = String(this.StrLine);

    if (this.ArrChildLines) {
      lineText += '\n';
      this.ArrChildLines.forEach((line) => {
        lineText = `${lineText}\t${line}\n`;
      });
    }

    return lineText;
  }
}
