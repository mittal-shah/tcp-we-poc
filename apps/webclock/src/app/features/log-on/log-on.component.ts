import { Component, OnInit, ViewChild } from '@angular/core';
import { LogOnService } from './log-on.service';
import {
  AnyType,
  AppConfigImpl,
  CompanyConfigImpl,
  GlobalConstant,
  LogOnDataImpl,
  PresentationExceptionImpl,
} from '@tcp/tcp-models';
import { EmployeeLogOnConfigImpl, EmployeeLogOnContextImpl } from '@tcp/tcp-clock-models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tcp-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss'],
})
export class LogOnComponent implements OnInit {
  @ViewChild(NgForm) logOnForm!: NgForm;

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
    GlobalConstant.appConfig = appConfig;
    this.appConfig = appConfig;

    this.service.getInfo().subscribe((context: EmployeeLogOnContextImpl) => this.handleInfo(context));
  }

  private handleAuthentication(sessionId: string | undefined) {
    GlobalConstant.sessionId = sessionId;
    console.log(GlobalConstant.sessionId);
  }

  private handleInfo(context: EmployeeLogOnContextImpl) {
    GlobalConstant.companyConfig = context.ObjCompanyConfig;

    this.config = context.ObjEmployeeLogOnConfig;
    this.companyConfig = context.ObjCompanyConfig;
    this.data = context.ObjLogOnData;

    if (this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnId) {
      this.data.ObjSelectedCompany.ObjCustomFieldControlModelLogOnId.ShouldFocus = true;
    }
  }
}
