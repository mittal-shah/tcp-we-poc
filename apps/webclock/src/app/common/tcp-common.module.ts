import { DropdownInputComponent } from '../../../../../libs/tcp-ui/src/component/dropdown-input/dropdown-input.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { AlertDialogComponent } from '../../../../../libs/tcp-ui/src/component/alert-dialog/alert-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EditableInputComponent } from '../../../../../libs/tcp-ui/src/component/editable-input/editable-input.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RequestLoadingComponent } from '../../../../../libs/tcp-ui/src/component/request-loading/request-loading.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingService } from '../../../../../libs/tcp-ui/src/service/loading.service';
import {
  DEFAULT_TIMEOUT,
  TimeoutHttpInterceptor,
} from '../../../../../libs/tcp-ui/src/interceptor/http/timeout-http.interceptor';
import { LoadingHttpInterceptor } from '../../../../../libs/tcp-ui/src/interceptor/http/loading-http.interceptor';

@NgModule({
  declarations: [AlertDialogComponent, EditableInputComponent, DropdownInputComponent, RequestLoadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    AlertDialogComponent,
    EditableInputComponent,
    DropdownInputComponent,
    RequestLoadingComponent,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingHttpInterceptor, multi: true },
    { provide: DEFAULT_TIMEOUT, useValue: 30000 },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
})
export class TcpCommonModule {}
