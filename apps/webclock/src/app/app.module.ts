import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogOnComponent } from './features/log-on/log-on.component';
import { TcpNgUiModule } from '../../../../libs/tcp-ng-ui/src/tcp-ng-ui.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, LogOnComponent],
  imports: [AppRoutingModule, TcpNgUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
