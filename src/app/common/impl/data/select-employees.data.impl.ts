import FilterDataImpl from './filter.data.impl';
import {SelectEmployeesData} from '../../../declarations/global';
import SelectItemImpl from '../domain/select-item.impl';
import EmployeeImpl from '../domain/employee.impl';
import AbstractImpl from '../abstract.impl';
import Util from '../../../util/util';

export default class SelectEmployeesDataImpl extends AbstractImpl implements SelectEmployeesData {
  ArrEmployeeIds?: number[] | undefined = undefined;

  ArrEmployees?: EmployeeImpl[] | undefined = undefined;

  BlnCanFilterInactive?: boolean | undefined = false;

  BlnHideClassification?: boolean | undefined = false;

  BlnHideDepartment?: boolean | undefined = false;

  BlnHideExportCode?: boolean | undefined = false;

  BlnHideId?: boolean | undefined = false;

  BlnHideRoleId?: boolean | undefined = false;

  BlnShouldShowStatus?: boolean | undefined = false;

  BlnShouldShowTerminationDate?: boolean | undefined = false;

  BlnSingleSelect?: boolean | undefined = false;

  IntSelectionOption?: number | undefined = 0;

  ObjFilterData?: FilterDataImpl | undefined = undefined;

  init(data?: SelectEmployeesData) {
    if (!data) {
      return;
    }

    this.copyTypedArray(data, 'ArrEmployees', EmployeeImpl);

    this.ObjFilterData =
      this.ObjFilterData !== undefined ? AbstractImpl.fromJSON(data.ObjFilterData, FilterDataImpl) : undefined;
  }

  getSelectedItem(): SelectItemImpl | undefined {
    if (!this.ArrEmployees || !this.ArrEmployeeIds || (this.ArrEmployeeIds && !this.ArrEmployeeIds[0])) {
      return undefined;
    }

    return Util.findMatchingKey<SelectItemImpl>(this.ArrEmployees, this.ArrEmployeeIds[0]);
  }

  createSubmissionData() {
    const data = Util.cloneClassInstance<SelectEmployeesDataImpl>(this, SelectEmployeesDataImpl);
    delete data.ArrEmployees;
    return data;
  }
}
