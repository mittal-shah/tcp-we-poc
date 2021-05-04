import { MenuItemModel } from '../../declaration';
import { AbstractImpl } from '../abstract.impl';
import ModelConstant from '../../constants/model.constant';

export class MenuItemImpl extends AbstractImpl implements MenuItemModel {
  ArrMenuItems: MenuItemImpl[] | undefined = [];

  BlnHideMenuItem: boolean | undefined = false;

  BlnIsDisabled: boolean | undefined = false;

  BlnIsSeparator: boolean | undefined = false;

  BlnPreventSelection: boolean | undefined = false;

  StrMenuCommand: string | undefined = '';

  StrMenuIcon: string | undefined = undefined;

  StrMenuText: string | undefined = '';

  StrRootMenuCommand: string | undefined = '';

  constructor(text: string | undefined, command: string | undefined) {
    super();
    this.StrMenuText = text || '';
    this.StrMenuCommand = command || '';
  }

  init(data: MenuItemModel) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrMenuItems', MenuItemImpl);
  }

  canAccessMenuItem() {
    return !this.BlnHideMenuItem && !!this.StrMenuCommand && !this.BlnPreventSelection && !this.BlnIsSeparator;
  }

  hasMenuItems() {
    return this.ArrMenuItems && this.ArrMenuItems.length > 0;
  }

  filterMenuItems(includeMenuCommands: (string | undefined)[]) {
    // guard clause
    if (!this.ArrMenuItems) {
      return;
    }

    this.ArrMenuItems = this.ArrMenuItems.filter((menuItem) => includeMenuCommands.includes(menuItem.StrMenuCommand));
    this.ArrMenuItems.forEach((menuItem) => {
      menuItem.filterMenuItems(includeMenuCommands);
    });
  }

  flattenMenuItems(): MenuItemImpl[] {
    // guard clause
    if (!this.canAccessMenuItem()) {
      return [];
    }

    if (this.ArrMenuItems !== undefined && this.hasMenuItems()) {
      const menuItems: MenuItemImpl[] = [];
      this.ArrMenuItems.forEach((menuItem) => menuItems.push(...menuItem.flattenMenuItems()));
      return menuItems;
    }

    return [this];
  }

  findMenuItem(menuCommand: string): MenuItemImpl | undefined {
    if (this.StrMenuCommand === menuCommand) {
      return this;
    }

    if (this.ArrMenuItems === undefined) {
      return undefined;
    }

    let objItem: MenuItemImpl | undefined;
    this.ArrMenuItems.forEach((objMenuItem) => {
      // guard clause - continue if found
      if (objItem) {
        return;
      }
      objItem = objMenuItem.findMenuItem(menuCommand);
    });
    return objItem;
  }

  containsMenuItemInPath(routePath: string): boolean {
    if (!routePath) {
      return false;
    }
    const routeSplit = routePath.split(ModelConstant.routeSeparator);
    if (routeSplit.length <= 1) {
      return this.findMenuItem(routePath) !== undefined;
    }
    return routeSplit.some((route) => this.StrMenuCommand === route);
  }
}
