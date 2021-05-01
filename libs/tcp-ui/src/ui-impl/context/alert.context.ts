import AlertOption from '../domain/alert-option';
import Util from '../../../../tcp-util/src/util';

export default class AlertContext {
  public isCancelable = true;

  public message = '';

  public options: AlertOption[];

  public title?: string;

  constructor(message: string, options: AlertOption[], title?: string) {
    this.message = Util.stringFormat(message);
    this.options = options;
    this.title = title;
  }
}
