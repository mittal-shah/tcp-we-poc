import { AnyType } from '../declarations/types';

export default abstract class AbstractImpl {
  static create<T>(type: new () => T): T {
    // eslint-disable-next-line new-cap
    return new type();
  }

  static fromJSON(data: AnyType, type: AnyType) {
    if (!data || type === undefined) {
      return data;
    }

    const safeData = typeof data === 'object' ? data : {};
    const result = Object.assign(AbstractImpl.create(type), safeData);
    if (result.init !== undefined) {
      result.init(safeData);
    }
    return result;
  }

  protected copyTypedArray(data: AnyType | undefined, property: string, type: AnyType) {
    if (!data) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(data, property)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this[property] = [];

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      for (const item of data[property]) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this[property].push(type.fromJSON(item, type));
      }
    }
  }
}