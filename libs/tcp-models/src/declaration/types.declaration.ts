import { ExceptionType } from '../constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export interface ApiOptions {
  manuallyHandleExceptions?: ExceptionType[];
  timeout?: number;
}
