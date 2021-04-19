import {AnyType} from '../../declarations/types';

export default class AlertOption {
  public isCancel = false;

  public isDestructive = false;

  public onPress?: (data?: AnyType) => void = undefined;

  public text = '';

  constructor(text: string, onPress?: (data?: AnyType) => void, isCancel?: boolean) {
    this.isCancel = isCancel || false;
    this.onPress = onPress;
    this.text = text;
  }

  getStyle() {
    if (this.isCancel) {
      return 'cancel';
    }
    if (this.isDestructive) {
      return 'destructive';
    }
    return 'default';
  }
}
