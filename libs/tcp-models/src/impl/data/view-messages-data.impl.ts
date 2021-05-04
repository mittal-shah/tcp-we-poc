import { ViewMessagesData } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { FilterDataImpl } from './filter.data.impl';
import { EmployeeMessageImpl } from '../domain';

export class ViewMessagesDataImpl extends AbstractImpl implements ViewMessagesData {
  ArrEmployeeMessages: EmployeeMessageImpl[] | undefined = [];

  ObjFilterData: FilterDataImpl | undefined;

  getMessages() {
    return this.ArrEmployeeMessages ? this.ArrEmployeeMessages : [];
  }

  areAllMessageSelected() {
    return this.getMarkAsReadMessages().every((message) => message.BlnIsRead);
  }

  toggleAllMessageReadStatus() {
    if (!this.ArrEmployeeMessages) {
      return;
    }

    const allMessagesAreSelected = this.areAllMessageSelected();
    this.ArrEmployeeMessages.forEach((message) => {
      message.BlnIsRead = !allMessagesAreSelected;
    });
  }

  getMarkAsReadMessages() {
    if (!this.ArrEmployeeMessages) {
      return [];
    }
    return this.ArrEmployeeMessages.filter((message) => message.BlnCanMarkAsRead);
  }

  getSelectedIds() {
    return this.getSelectedMessages().map((message) => message.getKey());
  }

  getSelectedMessages() {
    return this.getMarkAsReadMessages().filter((message) => message.BlnIsRead);
  }

  init(data: ViewMessagesData) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrEmployeeMessages', EmployeeMessageImpl);

    this.ObjFilterData =
      this.ObjFilterData !== undefined ? AbstractImpl.fromJSON(data.ObjFilterData, FilterDataImpl) : undefined;
  }
}
