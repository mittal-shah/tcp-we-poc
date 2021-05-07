import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import WebclockConstants from '../../../constant/webclock.constant';
import {
  AbstractImpl,
  AnyType,
  ApiOptions,
  AppConfig,
  AppConfigImpl,
  EmployeeLogOnContext,
  LogOnData,
} from '@tcp/tcp-models';
import { AbstractService } from '@tcp/tcp-ng-ui';
import { EmployeeLogOnContextImpl } from '@tcp/tcp-clock-models';

@Injectable({ providedIn: 'root' })
export class LogOnService extends AbstractService {
  authenticate(data: LogOnData, options?: ApiOptions) {
    const url = '/employeeSessions/0/ApplicationLogOn';
    return this.post<string>(url, data, options).pipe(map((result) => result));
  }

  getAppConfig(): Observable<AppConfigImpl> {
    const url = '/appConfig/0/WebClock';
    const options = { timeout: 10000 } as ApiOptions;
    return this.get<AppConfig>(url, options).pipe(map((result) => this.handleAppConfig(result)));
  }

  getInfo(): Observable<EmployeeLogOnContextImpl> {
    const url = '/employeeLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}';
    // TODO:MSS - Read from cookie
    const formattedUrl = url.format('0', '', WebclockConstants.applicationId.toString());
    return this.get(formattedUrl).pipe(map((result) => this.handleEmployeeLogOnContext(result)));
  }

  getInfoForCompany(companyId: number, companyNamespace: string = ''): Observable<EmployeeLogOnContextImpl> {
    const url = '/employeeLoginValues/{0}/GetInfoForCompany?companyNamespace={1}&applicationId={2}';
    const formattedUrl = url.format(companyId.toString(), companyNamespace, WebclockConstants.applicationId.toString());
    return this.get(formattedUrl).pipe(map((result) => this.handleEmployeeLogOnContext(result)));
  }

  private handleAppConfig(result: AppConfig) {
    if (!result) {
      throw result;
    }
    return AbstractImpl.fromJSON(result, AppConfigImpl);
  }

  private handleEmployeeLogOnContext(result: AnyType) {
    if (result?.length !== 3) {
      throw result;
    }

    return AbstractImpl.fromJSON(
      {
        ObjEmployeeLogOnConfig: result[0],
        ObjCompanyConfig: result[1],
        ObjLogOnData: result[2],
      } as EmployeeLogOnContext,
      EmployeeLogOnContextImpl,
    );
  }
}
