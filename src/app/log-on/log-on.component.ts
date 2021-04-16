import {Component, OnInit} from '@angular/core';
import {LogOnService} from './log-on.service';
import {MatSelectChange} from '@angular/material/select';
import {AppConfig, EmployeeLogOnContext} from '../declarations/global';
import {GlobalConstant} from '../common/constant/global.constant';
import AppConfigImpl from '../common/impl/config/app.config.impl';
import CompanyConfigImpl from '../common/impl/config/company.config.impl';
import EmployeeLogOnConfigImpl from './config/employee-log-on.config.impl';
import LogOnDataImpl from './data/log-on-data.impl';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss']
})

export class LogOnComponent implements OnInit {
  appConfig: AppConfigImpl | undefined = undefined;
  config: EmployeeLogOnConfigImpl | undefined = undefined;
  companyConfig: CompanyConfigImpl | undefined = undefined;
  data: LogOnDataImpl | undefined = undefined;

  constructor(private service: LogOnService) {
  }

  ngOnInit(): void {
    GlobalConstant.sessionId = '';

    this.service.getAppConfig()
      .subscribe((config: AppConfigImpl) => this.handleAppConfig(config));

    this.service.getInfo()
      .subscribe((context: EmployeeLogOnContext) => this.handleInfo(context));
  }

  selectChangeHandler($event: MatSelectChange) {
    this.service.getInfoForCompany($event.value)
      .subscribe((context: EmployeeLogOnContext) => this.handleInfo(context));
  }

  authenticate() {
    if (!this.data) {
      return;
    }

    if (this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePin &&
      !this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePin?.StrValue) {
      this.data.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePin.StrValue = undefined;
    }

    if (this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePassword &&
      !this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnEmployeePassword?.StrValue) {
      this.data.ObjSelectedCompany.ObjCustomFieldControlModelLogOnEmployeePassword.StrValue = undefined;
    }

    this.service.authenticate(this.data)
      .subscribe((sessionId: string) => this.handleAuthentication(sessionId));
  }

  private handleAppConfig(appConfig: AppConfigImpl) {
    this.appConfig = appConfig;
    GlobalConstant.appConfig = this.appConfig;
  }

  private handleAuthentication(sessionId: string) {
    GlobalConstant.sessionId = sessionId;
    console.log(GlobalConstant.sessionId);
  }

  private handleInfo(context: EmployeeLogOnContext) {
    this.config = context.ObjEmployeeLogOnConfig;
    this.companyConfig = context.ObjCompanyConfig;
    this.data = context.ObjLogOnData;

    GlobalConstant.companyConfig = this.companyConfig;
  }
}
