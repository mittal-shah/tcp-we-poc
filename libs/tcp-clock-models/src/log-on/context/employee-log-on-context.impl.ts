import { AbstractImpl, CompanyConfigImpl, EmployeeLogOnContext, LogOnDataImpl } from '@tcp/tcp-models';
import { EmployeeLogOnConfigImpl } from '../config';

export class EmployeeLogOnContextImpl extends AbstractImpl implements EmployeeLogOnContext {
  ObjCompanyConfig: CompanyConfigImpl | undefined;
  ObjEmployeeLogOnConfig: EmployeeLogOnConfigImpl | undefined;
  ObjLogOnData: LogOnDataImpl | undefined;

  init(data: EmployeeLogOnContext) {
    if (!data) {
      return;
    }

    this.ObjCompanyConfig =
      this.ObjCompanyConfig !== undefined ? AbstractImpl.fromJSON(data.ObjCompanyConfig, CompanyConfigImpl) : undefined;

    this.ObjEmployeeLogOnConfig =
      this.ObjEmployeeLogOnConfig !== undefined
        ? AbstractImpl.fromJSON(data.ObjEmployeeLogOnConfig, EmployeeLogOnConfigImpl)
        : undefined;

    this.ObjLogOnData =
      this.ObjLogOnData !== undefined ? AbstractImpl.fromJSON(data.ObjLogOnData, LogOnDataImpl) : undefined;
  }
}
