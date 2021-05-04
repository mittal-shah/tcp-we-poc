import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import EmployeeLogOnConfigImpl from './config/employee-log-on.config.impl';
import LogOnDataImpl from './data/log-on-data.impl';
import WebclockConstants from '../../../constant/webclock.constant';
import {
  AbstractImpl,
  AnyType,
  ApiOptions,
  AppConfig,
  AppConfigImpl,
  CommonUtil,
  CompanyConfigImpl,
  LogOnData,
} from '@tcp/tcp-models';
import { AbstractService } from '@tcp/tcp-ui';
import EmployeeLogOnContextImpl from './context/employee-log-on-context.impl';

@Injectable({ providedIn: 'root' })
export class LogOnService extends AbstractService {
  authenticate(data: LogOnData, options?: ApiOptions) {
    const url = '/employeeSessions/0/ApplicationLogOn';
    return this.post<string>(url, data, options).pipe(map((result) => result));
  }

  getAppConfig(): Observable<AppConfigImpl> {
    const url = '/appConfig/0/WebClock';
    return this.get<AppConfig>(url, { timeout: 10000 }).pipe(map((result) => this.handleAppConfig(result)));
  }

  getInfo(): Observable<EmployeeLogOnContextImpl> {
    const url = '/employeeLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}';
    // TODO:MSS - Read from cookie
    const formattedUrl = CommonUtil.stringFormat(url, '0', '', WebclockConstants.applicationId.toString());
    return this.get(formattedUrl).pipe(map((result) => this.handleEmployeeLogOnContext(result)));
  }

  getInfoForCompany(companyId: number, companyNamespace: string = ''): Observable<EmployeeLogOnContextImpl> {
    const url = '/employeeLoginValues/{0}/GetInfoForCompany?companyNamespace={1}&applicationId={2}';
    const formattedUrl = CommonUtil.stringFormat(
      url,
      companyId.toString(),
      companyNamespace,
      WebclockConstants.applicationId.toString(),
    );
    return this.get(formattedUrl).pipe(map((result) => this.handleEmployeeLogOnContext(result)));
  }

  private handleAppConfig(result: AnyType) {
    if (!result) {
      throw result;
    }
    return AbstractImpl.fromJSON(result, AppConfigImpl);
  }

  private handleEmployeeLogOnContext(result: AnyType) {
    if (result?.length !== 3) {
      throw result;
    }

    return {
      ObjEmployeeLogOnConfig: AbstractImpl.fromJSON(result[0], EmployeeLogOnConfigImpl),
      ObjCompanyConfig: AbstractImpl.fromJSON(result[1], CompanyConfigImpl),
      ObjLogOnData: AbstractImpl.fromJSON(result[2], LogOnDataImpl),
    } as EmployeeLogOnContextImpl;
  }
}
