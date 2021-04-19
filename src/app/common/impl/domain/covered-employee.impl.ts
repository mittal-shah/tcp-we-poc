import {CoveredEmployeeModel} from '../../declarations/global';
import SelectItemImpl from './select-item.impl';

export default class CoveredEmployeeImpl extends SelectItemImpl implements CoveredEmployeeModel {
  LngEmployeeId?: number | undefined = 0;

  LngRecordId?: number | undefined = 0;

  StrEmployeeType?: string | undefined = '';

  StrFirstName?: string | undefined = '';

  StrFullName?: string | undefined = '';

  StrLastName?: string | undefined = '';

  StrLocationName?: string | undefined = '';

  getKey() {
    return this.LngEmployeeId;
  }

  getValue() {
    return this.LngRecordId;
  }

  getText() {
    if (this.StrFullName) {
      return this.StrFullName;
    }

    if (this.StrFirstName || this.StrLastName) {
      return `${this.StrFirstName} ${this.StrLastName}`;
    }

    return '';
  }

  setValue(value: number | undefined) {
    this.LngRecordId = value;
  }

  setText(text: string | undefined) {
    this.StrFullName = text;
  }
}
