import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AbstractImpl,
  AnyType,
  ApiOptions,
  AppConfig,
  AppConfigImpl,
  LogOnContext,
  LogOnContextImpl,
  LogOnData,
} from '@tcp/tcp-models';
import { AbstractService } from '@tcp/tcp-ng-ui';

@Injectable({ providedIn: 'root' })
export class LogOnService extends AbstractService {
  authenticate(data: LogOnData, options?: ApiOptions) {
    const url = '/userSessions/0/LogOn';
    return this.post<string>(url, data, options).pipe(map((result) => result));
  }

  getAppConfig(): Observable<AppConfigImpl> {
    const url = '/appConfig/0/Terminals';
    return this.get<AppConfig>(url, { timeout: 10000 }).pipe(map((result) => this.handleAppConfig(result)));
  }

  getInfo(): Observable<LogOnContextImpl> {
    const url = '/terminalsLoginValues/{0}/GetInfo?initialCompanyNamespace={1}';
    // TODO:MSS - Read from cookie
    const formattedUrl = url.format('0', '');
    return this.get(formattedUrl).pipe(map((result) => this.handleLogOnContext(result)));
  }

  private handleAppConfig(result: AppConfig) {
    if (!result) {
      throw result;
    }
    return AbstractImpl.fromJSON(result, AppConfigImpl);
  }

  private handleLogOnContext(result: AnyType) {
    if (result?.length !== 2) {
      throw result;
    }

    return AbstractImpl.fromJSON(
      {
        ObjLogOnConfig: result[0],
        ObjLogOnData: result[1],
      } as LogOnContext,
      LogOnContextImpl,
    );
  }
}
