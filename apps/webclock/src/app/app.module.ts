import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogOnComponent } from './features/log-on/log-on.component';
import { TcpCommonModule } from '../../../../libs/tcp-ui/src/tcp-common.module';

@NgModule({
  declarations: [AppComponent, LogOnComponent],
  imports: [TcpCommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
