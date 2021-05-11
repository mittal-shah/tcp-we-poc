import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PgEditableInputComponent } from './features/pg-editable-input/pg-editable-input.component';
import { AppRoutingModule } from './app-routing.module';
import { TcpNgUiModule } from '@tcp/tcp-ng-ui';

@NgModule({
  declarations: [AppComponent, PgEditableInputComponent],
  imports: [AppRoutingModule, TcpNgUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
