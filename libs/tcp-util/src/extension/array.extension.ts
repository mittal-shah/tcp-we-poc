declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    findMatchingKey<T>(key: any): T;

    findMatchingValue<T>(key: any): T;
  }
}

Array.prototype.findMatchingKey = function <T>(key: any): T {
  return this.find((item) => item.getKey && item.getKey() === key);
};

Array.prototype.findMatchingValue = function <T>(key: any): T {
  return this.find((item) => item.getValue && item.getValue() === key);
};

export {};
