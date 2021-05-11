declare global {
  interface String {
    format(...args: string[]): string;

    isNewLineOrTab(): boolean;

    containsParam(): boolean;

    isEmptyOrSpaces(): boolean;

    isDefinedOrExist(): boolean;

    getAdjustedComponentId(): string;
  }
}

String.prototype.format = function (...args: string[]): string {
  return this.replace(/{(\d+)}/g, (match, index) => args[index] || '').replace(/\|/g, '\n');
};

String.prototype.isNewLineOrTab = function () {
  return this === '\n' || this === '\t';
};

String.prototype.containsParam = function () {
  return /{(\d+)}/g.test(this);
};

String.prototype.isEmptyOrSpaces = function () {
  return !this && this.trim().length === 0 && !this.isNewLineOrTab();
};

String.prototype.isDefinedOrExist = function () {
  return !!this;
};

String.prototype.getAdjustedComponentId = function () {
  return this.replace(' ', '-').toLowerCase();
};

export {};
