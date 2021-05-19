export class CommonUtil {
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

  public static isNullOrUndefined(value: unknown) {
    return value === undefined || value === null;
  }
}
