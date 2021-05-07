declare global {
  interface Array<T> {
    findMatchingKey<T>(key): T;

    findMatchingValue<T>(key): T;
  }
}

Array.prototype.findMatchingKey = function <T>(key): T {
  return this.find((item) => item.getKey && item.getKey() === key);
};

Array.prototype.findMatchingValue = function <T>(key): T {
  return this.find((item) => item.getValue && item.getValue() === key);
};

export {};
