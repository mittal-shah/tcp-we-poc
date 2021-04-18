import AppConfigImpl from '../common/impl/config/app.config.impl';
import SelectItemImpl from '../common/impl/domain/select-item.impl';

type AnyType = any;

interface ListItemContext {
  listItems: SelectItemImpl[];
  selectedItems?: SelectItemImpl[];
  selectedItem?: SelectItemImpl;
  appConfig?: AppConfigImpl;
}
