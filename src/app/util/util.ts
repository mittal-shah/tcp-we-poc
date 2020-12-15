export default class Util {
  public static stringFormat(str?: string, ...args: string[]): string {
    return str ? str.replace(/{(\d+)}/g, (match, index) => args[index] || '').replace(/\|/g, '\n') : '';
  }
}
