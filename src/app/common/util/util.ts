import AbstractImpl from '../impl/abstract.impl';
import {AnyType} from '../declarations/types';

export default class Util {
  public static getAppPrefix(): string {
    // guard clause - no window location
    if (!window || !window.location) {
      return '';
    }

    // guard clause - no /app/ in browser location
    const strWindowLocation = window.location.toString();
    const intSlashAppIndex = strWindowLocation.indexOf('/app/');
    if (intSlashAppIndex < 0) {
      return '';
    }

    // normally, window location will be something like (1) but might possibly be something like (2)
    // (1) https://localhost:44300/app/manager/#/ManagerLogOn
    // (2) https://localhost:44300/appPrefix/app/manager/#/ManagerLogOn
    const strLocationToSlashApp = strWindowLocation.slice(0, intSlashAppIndex);
    const strWindowLocationHost = window.location.host;
    const intAppPrefixIndex = strLocationToSlashApp.indexOf(strWindowLocationHost) + strWindowLocationHost.length;
    return strLocationToSlashApp.slice(intAppPrefixIndex);
  }

  public static stringFormat(str?: string, ...args: string[]): string {
    return str ? str.replace(/{(\d+)}/g, (match, index) => args[index] || '').replace(/\|/g, '\n') : '';
  }

  public static padNumber(value: number, length: number) {
    let str = `${value}`;
    while (str.length < length) {
      str = `0${str}`;
    }
    return str;
  }

  public static getObjectFromClass(implementationClass?: AbstractImpl) {
    if (!implementationClass) {
      return {};
    }

    return JSON.parse(JSON.stringify(implementationClass));
  }

  public static cloneClassInstance<T = {}>(classData: AbstractImpl, type?: AnyType) {
    if (!type) {
      return Util.getObjectFromClass(classData) as T;
    }

    return AbstractImpl.fromJSON(Util.getObjectFromClass(classData), type) as T;
  }

  public static findMatchingKey<T = AnyType>(items: any, value: any) {
    return items ? (items.find((item: any) => item.getKey() === value) as T) : undefined;
  }

  public static containsParam(str: string) {
    return /{(\d+)}/g.test(str);
  }

  public static isNewLineOrTab(str: string) {
    return str === '\n' || str === '\t';
  }

  public static isNullOrUndefined(value: AnyType) {
    return value === undefined || value === null;
  }

  public static isDefinedOrExist(value: string | undefined | number) {
    return !Util.isNullOrUndefined(value) && value !== '';
  }

  public static isEmptyOrSpaces(str: string | undefined) {
    if (!Util.isDefinedOrExist(str)) {
      return true;
    }

    return !!str && str.trim().length === 0 && !this.isNewLineOrTab(str);
  }

  public static findMatchingValue<T = AnyType>(items: AnyType[] | undefined, value: string) {
    return items ? (items.find((item) => item.getValue() === value) as T) : undefined;
  }

  public static getAdjustedComponentId(id: string | undefined) {
    return id ? id.replace(' ', '-').toLowerCase() : '';
  }

}
