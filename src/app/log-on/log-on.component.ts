import {Component, OnInit} from '@angular/core';
import {LogOnService} from './log-on.service';
import {MatSelectChange} from '@angular/material/select';
import {AppConfig, CompanyConfig, EmployeeLogOnConfig, LogOnData} from '../declarations/global';
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
    this.service.getAppConfig().subscribe(this.handleAppConfig);
    this.service.getInfo().subscribe((result: any) => this.handleInfo(result));
  }

  selectChangeHandler($event: MatSelectChange) {
    this.service.getInfoForCompany($event.value).subscribe((result: any) => this.handleInfo(result));
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
    this.service.authenticate(this.data).subscribe((result: any) => this.handleAuthentication(result));
  }

  private handleAppConfig(result: any) {
    if (result && result.length === 1) {
      this.appConfig = result[0] as AppConfig;
      GlobalConstants.appConfig = this.appConfig;
    }
  }

  private handleAuthentication(result: any) {
    GlobalConstants.sessionId = result;
    console.log(GlobalConstants.sessionId);
  }

  private handleInfo(result: any) {
    if (result && result.length === 3) {
      this.config = result[0] as EmployeeLogOnConfig;
      this.companyConfig = result[1] as CompanyConfig;
      this.data = result[2] as LogOnData;

      GlobalConstants.companyConfig = this.companyConfig;
    }
  }
}
