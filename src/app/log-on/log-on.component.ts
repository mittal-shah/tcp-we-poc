import {Component, OnInit} from '@angular/core';
import {LogOnService} from './log-on.service';
import {MatSelectChange} from '@angular/material/select';
import {AppConfig, CompanyConfig, EmployeeLogOnConfig, EmployeeLogOnContext, LogOnData} from '../declarations/global';
import {GlobalConstants} from '../common/constants/global.constants';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss']
})

export class LogOnComponent implements OnInit {
  appConfig: AppConfig | undefined = undefined;
  config: EmployeeLogOnConfig | undefined = undefined;
  companyConfig: CompanyConfig | undefined = undefined;
  data: LogOnData | undefined = undefined;

  constructor(private service: LogOnService) {
  }

  ngOnInit(): void {
    this.service.getAppConfig()
      .subscribe((config: AppConfig) => this.handleAppConfig(config));

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

  private handleAppConfig(appConfig: AppConfig) {
    this.appConfig = appConfig;
    GlobalConstants.appConfig = this.appConfig;
  }

  private handleAuthentication(sessionId: string) {
    GlobalConstants.sessionId = sessionId;
    console.log(GlobalConstants.sessionId);
  }

  private handleInfo(context: EmployeeLogOnContext) {
    this.config = context.ObjEmployeeLogOnConfig;
    this.companyConfig = context.ObjCompanyConfig;
    this.data = context.ObjLogOnData;

    GlobalConstants.companyConfig = this.companyConfig;
  }
}
