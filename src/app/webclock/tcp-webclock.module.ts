import {NgModule} from '@angular/core';
import {LogOnComponent} from './features/log-on/log-on.component';
import {TcpCommonModule} from '../common/tcp-common.module';

@NgModule({
  declarations: [
    LogOnComponent,
  ],
  imports: [
    TcpCommonModule
  ],
  exports: [
    LogOnComponent
  ]
})
export class TcpWebclockModule {
}
