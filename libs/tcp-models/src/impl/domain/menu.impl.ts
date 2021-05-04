import { MenuModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import { MenuItemImpl } from './menu-item.impl';

export class MenuImpl extends AbstractImpl implements MenuModel {
  ArrMenuItemFavorites: MenuItemImpl[] | undefined = [];

  ArrMenuItems: MenuItemImpl[] | undefined = [];

  init(data: MenuModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrMenuItemFavorites', MenuItemImpl);
    this.copyTypedArray(data, 'ArrMenuItems', MenuItemImpl);
  }

  flattenMenuItems(): MenuItemImpl[] {
    // guard-clause
    if (!this.ArrMenuItems) {
      return [];
    }

    const menuItems: MenuItemImpl[] = [];
    this.ArrMenuItems.forEach((menuItem) => {
      menuItems.push(...menuItem.flattenMenuItems());
    });
    return menuItems;
  }

  filterMenuItems(includeMenuCommands: (string | undefined)[]) {
    // guard clause
    if (!includeMenuCommands) {
      return;
    }

    if (!this.ArrMenuItems) {
      return;
    }

    this.ArrMenuItems = this.ArrMenuItems.filter((menuItem) => {
      return menuItem.BlnIsSeparator || includeMenuCommands.includes(menuItem.StrMenuCommand) ? menuItem : null;
    });
    this.ArrMenuItems.forEach((menuItem) => {
      menuItem.filterMenuItems(includeMenuCommands);
    });
  }

  findMenuItem(menuCommand: string): MenuItemImpl | undefined {
    if (!menuCommand || !this.ArrMenuItems || !this.ArrMenuItems.length) {
      return undefined;
    }

    let objItem: MenuItemImpl | undefined;
    this.ArrMenuItems.forEach((objMenuItem: MenuItemImpl) => {
      // guard clause - continue if found
      if (objItem) {
        return;
      }
      objItem = objMenuItem.findMenuItem(menuCommand);
    });
    return objItem;
  }
}
