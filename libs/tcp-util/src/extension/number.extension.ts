declare global {
  interface Number {
    pad(length: number): string;

    isDefinedOrExist(): boolean;
  }
}

Number.prototype.pad = function (length: number): string {
  return '0'.repeat(length) + this;
};

Number.prototype.isDefinedOrExist = function () {
  return this !== null && this !== undefined;
};

export {};
