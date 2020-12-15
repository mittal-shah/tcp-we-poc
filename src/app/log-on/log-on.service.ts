import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AbstractService} from '../abstract.service';
import {EmployeeLogOnContext} from '../declarations/global';
import Util from '../util/util';

@Injectable({providedIn: 'root'})
export class LogOnService extends AbstractService {
  getInfo(): Observable<EmployeeLogOnContext> {
    const companyId = String(100);
    const applicationId = String(130);
    const url = Util.stringFormat('employeeLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}', companyId, '', applicationId);

    return this.get<EmployeeLogOnContext>(url)
      .pipe(
        tap(_ => this.log('logonInfo')),
        catchError(this.handleError<EmployeeLogOnContext>('logonInfo', undefined))
      );
  }
}
