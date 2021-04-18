import {AnyType} from '../declarations/types';
import AbstractImpl from '../common/impl/abstract.impl';

export default class PostDataHandler {
  public static getAdjustedData(data: AnyType) {
    // guard-clause
    if (!data || typeof data === 'string') {
      return data;
    }

    if ('createSubmissionData' in data) {
      data = data.createSubmissionData();
    }

    if (Array.isArray(data)) {
      data.forEach((item, index) => {
        if (item instanceof AbstractImpl) {
          data[index] = this.getAdjustedData(item);
        }
      });
    }

    Object.keys(data).forEach((key) => {
      if (data[key] instanceof AbstractImpl) {
        data[key] = this.getAdjustedData(data[key]);
      }

      if (Array.isArray(data[key])) {
        data[key].forEach((item: any, itemIndex: string | number) => {
          if (item instanceof AbstractImpl) {
            data[key][itemIndex] = this.getAdjustedData(item);
          }
        });
      }
    });

    return data;
  }
}
