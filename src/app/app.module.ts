import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogOnComponent} from './webclock/features/log-on/log-on.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule} from '@angular/forms';
import {AlertDialogComponent} from './common/component/alert-dialog/alert-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {EditableInputComponent} from './common/component/editable-input/editable-input.component';
import {DEFAULT_TIMEOUT, TimeoutHttpInterceptor} from './common/interceptor/http/timeout-http.interceptor';
import {DropdownInputComponent} from './common/component/dropdown-input/dropdown-input.component';
import {RequestLoadingComponent} from './common/component/request-loading/request-loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoadingHttpInterceptor} from './common/interceptor/http/loading-http.interceptor';
import {LoadingService} from './common/service/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    LogOnComponent,
    AlertDialogComponent,
    EditableInputComponent,
    DropdownInputComponent,
    RequestLoadingComponent
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
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    LoadingService,
    {provide: HTTP_INTERCEPTORS, useClass: TimeoutHttpInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingHttpInterceptor, multi: true},
    {provide: DEFAULT_TIMEOUT, useValue: 30000},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
