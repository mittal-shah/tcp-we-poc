export class MaskedInputFormatter {
  public static getMaskFromCustomFormat(customFormat?: string) {
    if (!customFormat) {
      return '';
    }

    let mask = '^';
    for (let index = 0; index < customFormat.length; index += 1) {
      const char = customFormat.charAt(index);
      if (char === '\\') {
        const nextChar = customFormat.charAt((index += 1));
        mask += this.getRegexForChar(char + nextChar);
      } else {
        mask += this.getRegexForChar(char);
      }
    }

    return `${mask}$`;
  }

  private static getRegexForChar(char: string) {
    switch (char) {
      case '>':
        return '[A-Z]';
      case '?':
        return '[a-zA-Z]';
      case '#':
        return '[0-9]';
      case '&':
        return '[^]';
      case '':
        return '';
      default:
        return `[${char.replace('\\', '')}]`;
    }
  }
}
