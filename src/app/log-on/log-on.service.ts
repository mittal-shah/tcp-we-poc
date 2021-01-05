import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {AbstractService} from '../abstract.service';
import Util from '../util/util';

@Injectable({providedIn: 'root'})
export class LogOnService extends AbstractService {
  getInfo() {
    const companyId = String(500);
    const applicationId = String(130);
    const url = Util.stringFormat('/managerLoginValues/{0}/GetInfo?companyNamespace={1}&applicationId={2}', companyId, '', applicationId);

    return this.get(url)
      .pipe(
        tap(_ => this.log('logonInfo')),
        catchError(this.handleError('logonInfo', undefined)));
  }
}
