import AlertOption from '../domain/alert-option';

export default class AlertContext {
  public isCancelable = true;

  public message = '';

  public options: AlertOption[];

  public title?: string;

  constructor(message: string, options: AlertOption[], title?: string) {
    this.message = message.format();
    this.options = options;
    this.title = title;
  }
}
