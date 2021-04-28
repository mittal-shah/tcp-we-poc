import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TcpCommonModule} from './common/tcp-common.module';
import {TcpWebclockModule} from './webclock/tcp-webclock.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    TcpCommonModule,
    TcpWebclockModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
