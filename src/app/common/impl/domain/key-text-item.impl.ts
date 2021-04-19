import {KeyTextItemModel} from '../../declarations/global';
import SelectItemImpl from './select-item.impl';

export default class KeyTextItemImpl extends SelectItemImpl implements KeyTextItemModel {
  StrKey?: string | undefined = '';

  StrText?: string | undefined = '';

  constructor(key?: string | undefined, text?: string | undefined) {
    super();
    this.setKey(key);
    this.setText(text);
  }

  getText() {
    return this.StrText;
  }

  getKey(): string | number | undefined {
    return this.StrKey;
  }

  setText(text: string | undefined) {
    this.StrText = text;
  }

  setKey(key: string | undefined) {
    this.StrKey = key;
  }
}
