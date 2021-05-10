// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { ExceptionType } from '../constants';
import { AppConfigImpl } from '../impl/config';
import { SelectItemImpl } from '../impl/domain';

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
