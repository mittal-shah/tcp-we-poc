// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { ExceptionType } from '../constants';
import { AppConfigImpl, SelectItemImpl } from '../impl';

export type AnyType = any;

export interface ListItemContext {
  listItems: SelectItemImpl[];
  selectedItems?: SelectItemImpl[];
  selectedItem?: SelectItemImpl;
  appConfig?: AppConfigImpl;
}

export interface ApiOptions {
  manuallyHandleExceptions?: ExceptionType[];
  timeout?: number;
}
