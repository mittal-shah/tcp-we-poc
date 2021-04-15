import {Injectable} from '@angular/core';
import {AbstractService} from '../abstract.service';
import Util from '../util/util';
import {GlobalConstants} from '../common/constants/global.constants';
import {AppConfig, EmployeeLogOnContext, LogOnData} from '../declarations/global';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class LogOnService extends AbstractService {
  authenticate(data: LogOnData): Observable<string> {
    const url = '/employeeSessions/0/ApplicationLogOn';
    return this.post<string>(url, data);
  }

  getAppConfig(): Observable<AppConfig> {
    const url = '/appConfig/0/WebClock';
    return this.get<AppConfig>(url);
  }

  getInfo(): Observable<EmployeeLogOnContext> {
    const url = '/employeeLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}';
    const formattedUrl = Util.stringFormat(url, '0', '', GlobalConstants.applicationId.toString());

    return this.get(formattedUrl).pipe(map((result: any) => {
      return {
        ObjEmployeeLogOnConfig: result[0],
        ObjCompanyConfig: result[1],
        ObjLogOnData: result[2],
      } as EmployeeLogOnContext;
    }));
  }

  getInfoForCompany(companyId: number, companyNamespace: string = ''): Observable<EmployeeLogOnContext> {
    const url = '/employeeLoginValues/{0}/GetInfoForCompany?companyNamespace={1}&applicationId={2}';
    const formattedUrl = Util.stringFormat(url, companyId.toString(), companyNamespace, GlobalConstants.applicationId.toString());

    return this.get(formattedUrl).pipe(map((result: any) => {
      return {
        ObjEmployeeLogOnConfig: result[0],
        ObjCompanyConfig: result[1],
        ObjLogOnData: result[2],
      } as EmployeeLogOnContext;
    }));
  }
}
