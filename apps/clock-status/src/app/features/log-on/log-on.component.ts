import { Component, OnInit, ViewChild } from '@angular/core';
import { LogOnService } from './log-on.service';
import { AppConfigImpl, LogOnConfigImpl, LogOnContextImpl, LogOnDataImpl } from '@tcp/tcp-models';
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
  config: LogOnConfigImpl | undefined = undefined;
  data: LogOnDataImpl | undefined = undefined;

  constructor(private service: LogOnService, private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.clearSessionId();

    this.service.getAppConfig().subscribe((config: AppConfigImpl) => this.handleAppConfig(config));
  }

  authenticate() {
    if (!this.data || !this.logOnForm.valid) {
      return;
    }

    this.service.authenticate(this.data).subscribe((sessionId: string) => this.handleAuthentication(sessionId));
  }

  private handleAppConfig(appConfig: AppConfigImpl) {
    this.configService.setAppConfig(appConfig);
    this.appConfig = appConfig;

    this.service.getInfo().subscribe((context: LogOnContextImpl) => this.handleInfo(context));
  }

  private handleAuthentication(sessionId: string | undefined) {
    this.configService.setSessionId(sessionId);
    console.log(sessionId);
  }

  private handleInfo(context: LogOnContextImpl) {
    this.config = context.ObjLogOnConfig;
    this.data = context.ObjLogOnData;

    if (this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnId) {
      this.data.ObjSelectedCompany.ObjCustomFieldControlModelLogOnId.ShouldFocus = true;
    }
  }
}
