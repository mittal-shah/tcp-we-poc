import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogOnComponent} from './webclock/features/log-on/log-on.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {AlertDialogComponent} from './common/component/alert-dialog/alert-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {EditableInputComponent} from './common/component/editable-input/editable-input.component';
import {DEFAULT_TIMEOUT, TimeoutInterceptor} from './common/interceptor/http-timeout.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LogOnComponent,
    AlertDialogComponent,
    EditableInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [
    [{provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true}],
    [{provide: DEFAULT_TIMEOUT, useValue: 30000}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
