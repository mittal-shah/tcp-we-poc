import {BooleanInputModel} from '../../../declarations/global';
import AbstractImpl from '../../abstract.impl';

export default class BooleanInputImpl extends AbstractImpl implements BooleanInputModel {
  BlnIsDisabled?: boolean | undefined = false;

  BlnIsVisible?: boolean | undefined = false;

  BlnValue?: boolean | undefined = false;

  StrHelp?: string | undefined = '';

  StrId?: string | undefined = '';

  StrText?: string | undefined = '';

  constructor(id?: string, text?: string) {
    super();
    this.StrId = id;
    this.StrText = text;
  }

  getKey() {
    return this.StrId;
  }

  getText() {
    return this.StrText;
  }

  setValue(value: boolean) {
    this.BlnValue = value;
  }
}
