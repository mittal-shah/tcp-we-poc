import { Component, OnInit } from '@angular/core';
import { LogOnService } from './log-on.service';
import { AppConfigImpl, GlobalConstant, LogOnConfigImpl, LogOnContextImpl, LogOnDataImpl } from '@tcp/tcp-models';

@Component({
  selector: 'tcp-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.scss'],
})
export class LogOnComponent implements OnInit {
  appConfig: AppConfigImpl | undefined = undefined;
  config: LogOnConfigImpl | undefined = undefined;
  data: LogOnDataImpl | undefined = undefined;

  constructor(private service: LogOnService) {}

  ngOnInit(): void {
    GlobalConstant.sessionId = '';

    this.service.getAppConfig().subscribe((config: AppConfigImpl) => this.handleAppConfig(config));
  }

  authenticate() {
    if (!this.data) {
      return;
    }

    this.service.authenticate(this.data).subscribe((sessionId: string) => this.handleAuthentication(sessionId));
  }

  private handleAppConfig(appConfig: AppConfigImpl) {
    GlobalConstant.appConfig = appConfig;
    this.appConfig = appConfig;

    this.service.getInfo().subscribe((context: LogOnContextImpl) => this.handleInfo(context));
  }

  private handleAuthentication(sessionId: string | undefined) {
    GlobalConstant.sessionId = sessionId;
    console.log(GlobalConstant.sessionId);
  }

  private handleInfo(context: LogOnContextImpl) {
    this.config = context.ObjLogOnConfig;
    this.data = context.ObjLogOnData;

    if (this.data?.ObjSelectedCompany?.ObjCustomFieldControlModelLogOnId) {
      this.data.ObjSelectedCompany.ObjCustomFieldControlModelLogOnId.ShouldFocus = true;
    }
  }
}
