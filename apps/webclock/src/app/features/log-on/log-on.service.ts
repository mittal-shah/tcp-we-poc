import { Injectable } from '@angular/core';
import { AbstractService } from '../../../../../../libs/tcp-ui/src/service/abstract.service';
import Util from '../../../../../../libs/tcp-util/src/util';
import { AppConfig, EmployeeLogOnContext, LogOnData } from '../../../../../../libs/tcp-models/src/declarations/global';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import AppConfigImpl from '../../../../../../libs/tcp-models/src/impl/config/app.config.impl';
import AbstractImpl from '../../../../../../libs/tcp-models/src/impl/abstract.impl';
import EmployeeLogOnConfigImpl from './config/employee-log-on.config.impl';
import CompanyConfigImpl from '../../../../../../libs/tcp-models/src/impl/config/company.config.impl';
import LogOnDataImpl from './data/log-on-data.impl';
import CommonConstants from '../../../../../../libs/tcp-core/src/constants/common.constant';
import { AnyType, ApiOptions } from '../../../../../../libs/tcp-models/src/declarations/types';

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

  getInfo(): Observable<EmployeeLogOnContext> {
    const url = '/employeeLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}';
    // TODO:MSS - Read from cookie
    const formattedUrl = Util.stringFormat(url, '0', '', CommonConstants.applicationId.toString());
    return this.get(formattedUrl).pipe(map((result) => this.handleEmployeeLogOnContext(result)));
  }

  getInfoForCompany(companyId: number, companyNamespace: string = ''): Observable<EmployeeLogOnContext> {
    const url = '/employeeLoginValues/{0}/GetInfoForCompany?companyNamespace={1}&applicationId={2}';
    const formattedUrl = Util.stringFormat(
      url,
      companyId.toString(),
      companyNamespace,
      CommonConstants.applicationId.toString(),
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
    } as EmployeeLogOnContext;
  }
}
