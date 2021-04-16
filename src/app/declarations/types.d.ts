// eslint-disable-next-line @typescript-eslint/no-explicit-any
import AppConfigImpl from '../common/impl/config/app.config.impl';
import SelectItemImpl from '../common/impl/domain/select-item.impl';

type AnyType = any;

export interface HourMin {
  intHour: number;
  intMin: number;
}

interface ListItemContext {
  listItems: SelectItemImpl[];
  selectedItems?: SelectItemImpl[];
  selectedItem?: SelectItemImpl;
  appConfig?: AppConfigImpl;
}
