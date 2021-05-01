import { Component, OnInit } from '@angular/core';
import { LogOnService } from './log-on.service';
import { EmployeeLogOnContext } from '../../../../../../libs/tcp-models/src/declarations/global';
import { GlobalConstant } from '../../../../../../libs/tcp-core/src/constants/global.constant';
import AppConfigImpl from '../../../../../../libs/tcp-models/src/impl/config/app.config.impl';
import CompanyConfigImpl from '../../../../../../libs/tcp-models/src/impl/config/company.config.impl';
import EmployeeLogOnConfigImpl from './config/employee-log-on.config.impl';
import LogOnDataImpl from './data/log-on-data.impl';
import PresentationExceptionImpl from '../../../../../../libs/tcp-models/src/impl/domain/presentation-exception.impl';
import { AnyType } from '../../../../../../libs/tcp-models/src/declarations/types';

@Component({
  selector: 'tcp-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss'],
})
export class LogOnComponent implements OnInit {
  appConfig: AppConfigImpl | undefined = undefined;
  config: EmployeeLogOnConfigImpl | undefined = undefined;
  companyConfig: CompanyConfigImpl | undefined = undefined;
  data: LogOnDataImpl | undefined = undefined;
  shouldShowPIN = false;

  constructor(private service: LogOnService) {}

  ngOnInit(): void {
    GlobalConstant.sessionId = '';

    this.service.getAppConfig().subscribe((config: AppConfigImpl) => this.handleAppConfig(config));
  }

  authenticate() {
    if (!this.data) {
      return;
    }

    this.service
      .authenticate(this.data, { manuallyHandleExceptions: PresentationExceptionImpl.getPasswordEntryExceptions() })
      .subscribe(
        (sessionId: string) => this.handleAuthentication(sessionId),
        (error) => this.handleAuthenticationError(error),
      );
  }

  selectChangeHandler(value: AnyType) {
    this.service
      .getInfoForCompany(Number(value))
      .subscribe((context: EmployeeLogOnContext) => this.handleInfo(context));
  }

  private handleAuthenticationError(error: AnyType) {
    if (error instanceof PresentationExceptionImpl && error.isPasswordEntryException()) {
      this.shouldShowPIN = true;
      if (this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePin) {
        this.data.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePin.ShouldFocus = true;
      }
    }
  }

  private handleAppConfig(appConfig: AppConfigImpl) {
    GlobalConstant.appConfig = appConfig;
    this.appConfig = appConfig;

    this.service.getInfo().subscribe((context: EmployeeLogOnContext) => this.handleInfo(context));
  }

  private handleAuthentication(sessionId: string | undefined) {
    GlobalConstant.sessionId = sessionId;
    console.log(GlobalConstant.sessionId);
  }

  private handleInfo(context: EmployeeLogOnContext) {
    GlobalConstant.companyConfig = context.ObjCompanyConfig;

    this.config = context.ObjEmployeeLogOnConfig;
    this.companyConfig = context.ObjCompanyConfig;
    this.data = context.ObjLogOnData;

    if (this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnId) {
      this.data.ObjSelectedCompany.ObjCustomFieldControlModelLogOnId.ShouldFocus = true;
    }
  }
}