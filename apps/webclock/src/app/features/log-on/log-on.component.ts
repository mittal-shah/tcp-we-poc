import { Component, OnInit, ViewChild } from '@angular/core';
import { LogOnService } from './log-on.service';
import { AnyType, AppConfigImpl, CompanyConfigImpl, LogOnDataImpl, PresentationExceptionImpl } from '@tcp/tcp-models';
import { EmployeeLogOnConfigImpl, EmployeeLogOnContextImpl } from '@tcp/tcp-clock-models';
import { NgForm } from '@angular/forms';
import { ConfigService } from '@tcp/tcp-ng-ui';

@Component({
  selector: 'tcp-log-on',
  styleUrls: ['./log-on.component.scss'],
  templateUrl: './log-on.component.html',
})
export class LogOnComponent implements OnInit {
  @ViewChild(NgForm) logOnForm!: NgForm;

  appConfig: AppConfigImpl | undefined = undefined;
  config: EmployeeLogOnConfigImpl | undefined = undefined;
  companyConfig: CompanyConfigImpl | undefined = undefined;
  data: LogOnDataImpl | undefined = undefined;
  shouldShowPIN = false;

  constructor(private service: LogOnService, private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.clearSessionId();

    this.service.getAppConfig().subscribe((config: AppConfigImpl) => this.handleAppConfig(config));
  }

  authenticate() {
    if (!this.data || !this.logOnForm.valid) {
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
      .subscribe((context: EmployeeLogOnContextImpl) => this.handleInfo(context));
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
    this.appConfig = appConfig;
    this.configService.setAppConfig(appConfig);

    this.service.getInfo().subscribe((context: EmployeeLogOnContextImpl) => this.handleInfo(context));
  }

  private handleAuthentication(sessionId: string | undefined) {
    this.configService.setSessionId(sessionId);
    console.log(sessionId);
  }

  private handleInfo(context: EmployeeLogOnContextImpl) {
    this.configService.setCompanyConfig(context.ObjCompanyConfig);

    this.config = context.ObjEmployeeLogOnConfig;
    this.companyConfig = context.ObjCompanyConfig;
    this.data = context.ObjLogOnData;

    if (this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnId) {
      this.data.ObjSelectedCompany.ObjCustomFieldControlModelLogOnId.ShouldFocus = true;
    }
  }
}
