import {Injectable} from '@angular/core';
import {AbstractService} from '../abstract.service';
import Util from '../util/util';
import {GlobalConstants} from '../common/constants/global.constants';
import {AppConfig, LogOnData} from '../declarations/global';

@Injectable({providedIn: 'root'})
export class LogOnService extends AbstractService {
  authenticate(data: LogOnData) {
    const url = '/employeeSessions/0/ApplicationLogOn';
    return this.post<string>(url, data);
  }

  getAppConfig() {
    const url = '/appConfig/0/WebClock';
    return this.get<AppConfig>(url);
  }

  getInfo() {
    const url = '/employeeLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}';
    const formattedUrl = Util.stringFormat(url, '0', '', GlobalConstants.applicationId.toString());

    return this.get(formattedUrl);
  }

  getInfoForCompany(companyId: number, companyNamespace: string = '') {
    const url = '/employeeLoginValues/{0}/GetInfoForCompany?companyNamespace={1}&applicationId={2}';
    const formattedUrl = Util.stringFormat(url, companyId.toString(), companyNamespace, GlobalConstants.applicationId.toString());

    return this.get(formattedUrl);
  }
}
