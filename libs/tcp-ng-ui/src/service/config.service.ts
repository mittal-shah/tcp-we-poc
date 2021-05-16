import { Injectable } from '@angular/core';
import { AppConfigImpl, CompanyConfigImpl } from '@tcp/tcp-models';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private sessionId: string | undefined = '';
  private appConfig: AppConfigImpl | undefined = undefined;
  private companyConfig: CompanyConfigImpl | undefined = undefined;

  getAppConfig(): AppConfigImpl | undefined {
    return this.appConfig;
  }

  setAppConfig(appConfig: AppConfigImpl | undefined) {
    this.appConfig = appConfig;
  }

  getCompanyConfig(): CompanyConfigImpl | undefined {
    return this.companyConfig;
  }

  setCompanyConfig(companyConfig: CompanyConfigImpl | undefined) {
    this.companyConfig = companyConfig;
  }

  clearSessionId() {
    this.sessionId = undefined;
  }

  getSessionId(): string | undefined {
    return this.sessionId;
  }

  setSessionId(sessionId: string | undefined) {
    this.sessionId = sessionId;
  }
}
