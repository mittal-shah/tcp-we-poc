declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    findMatchingKey<T>(key: unknown): T;

    findMatchingValue<T>(key: unknown): T;
  }
}

Array.prototype.findMatchingKey = function <T>(key: unknown): T {
  return this.find((item) => item.getKey && item.getKey() === key);
};

Array.prototype.findMatchingValue = function <T>(key: unknown): T {
  return this.find((item) => item.getValue && item.getValue() === key);
};

export {};
