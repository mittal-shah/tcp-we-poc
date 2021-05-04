import AlertOption from '../domain/alert-option';
import { CommonUtil } from '@tcp/tcp-models';

export default class AlertContext {
  public isCancelable = true;

  public message = '';

  public options: AlertOption[];

  public title?: string;

  constructor(message: string, options: AlertOption[], title?: string) {
    this.message = CommonUtil.stringFormat(message);
    this.options = options;
    this.title = title;
  }
}
