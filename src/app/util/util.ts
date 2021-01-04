export default class Util {
  public static buildApiPath(strPath: string): string {
    const arrUriComponents = Array.prototype.slice.call(arguments);

    // Remove strPath element.
    arrUriComponents.shift();

    const strRegExCurlyBracketWithIndexes = /{(\d+)}/g;
    return strPath.replace(strRegExCurlyBracketWithIndexes, (match: string, num: number) =>
      typeof arrUriComponents[num] !== 'undefined' ? encodeURIComponent(arrUriComponents[num]) : '');
  }

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
}
