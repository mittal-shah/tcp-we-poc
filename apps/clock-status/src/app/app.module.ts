import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LogOnComponent } from './features/log-on/log-on.component';
import { AppRoutingModule } from './app-routing.module';
import { TcpNgUiModule } from '@tcp/tcp-ng-ui';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, LogOnComponent],
  imports: [AppRoutingModule, TcpNgUiModule],
  providers: [],
})
export class AppModule {}
