import { AbstractImpl } from '../../../abstract.impl';
import { DropdownInputImpl } from '../dropdown.input.impl';
import { SelectItemImpl } from '../../select-item.impl';

export class MocksDropdownInputs {
  basic: DropdownInputImpl = AbstractImpl.fromJSON(
    {
      StrId: 'basic-dropdown-input',
      listItems: [
        new SelectItemImpl('1', 'Dropdown 1'),
        new SelectItemImpl('2', 'Dropdown 2'),
        new SelectItemImpl('3', 'Dropdown 3'),
      ],
      selectedItems: [new SelectItemImpl('2', 'Dropdown 2')],
    } as DropdownInputImpl,
    DropdownInputImpl,
  );
}
