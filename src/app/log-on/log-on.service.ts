import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {AbstractService} from '../abstract.service';
import Util from '../util/util';

@Injectable({providedIn: 'root'})
export class LogOnService extends AbstractService {
  getAppConfig() {
    return this.get('/appConfig/0/WebClock')
      .pipe(
        tap(_ => this.log('appConfig')),
        catchError(this.handleError('appConfig', undefined)));
  }

  getInfo() {
    const companyId = String(500);
    const companyNamespace = '';
    const applicationId = String(130);
    const url = Util.stringFormat('/employeeLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}',
      companyId, companyNamespace, applicationId);

    return this.get(url)
      .pipe(
        tap(_ => this.log('logonInfo')),
        catchError(this.handleError('logonInfo', undefined)));
  }
}
