import AppConfigImpl from '../impl/config/app.config.impl';
import SelectItemImpl from '../impl/domain/select-item.impl';
import ExceptionType from '../../../tcp-core/src/constants/exception-type.constant';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyType = any;

interface ListItemContext {
  listItems: SelectItemImpl[];
  selectedItems?: SelectItemImpl[];
  selectedItem?: SelectItemImpl;
  appConfig?: AppConfigImpl;
}

export interface ApiOptions {
  manuallyHandleExceptions?: ExceptionType[];
  timeout?: number;
}
