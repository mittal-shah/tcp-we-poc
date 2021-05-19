import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import {
  AlertDialogComponent,
  CustomFieldInputComponent,
  DateInputComponent,
  DecimalInputComponent,
  DropdownInputComponent,
  NumberInputComponent,
  RequestLoadingComponent,
  TextInputComponent,
} from './component';
import { DEFAULT_TIMEOUT, LoadingHttpInterceptor, TimeoutHttpInterceptor } from './interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TcpMaxValidatorDirective } from './component/editable-input/directive/tcp-max-validator.directive';
import { TcpMinValidatorDirective } from './component/editable-input/directive/tcp-min-validator.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AbstractEditableInputComponent } from './component/editable-input/abstract-editable-input.component';

@NgModule({
  declarations: [
    AlertDialogComponent,
    DropdownInputComponent,
    RequestLoadingComponent,
    TcpMaxValidatorDirective,
    TcpMinValidatorDirective,
    AbstractEditableInputComponent,
    NumberInputComponent,
    DecimalInputComponent,
    DateInputComponent,
    TextInputComponent,
    CustomFieldInputComponent,
  ],
  exports: [
    BrowserModule,
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
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,

    AlertDialogComponent,
    TextInputComponent,
    CustomFieldInputComponent,
    NumberInputComponent,
    DecimalInputComponent,
    DateInputComponent,
    DropdownInputComponent,
    RequestLoadingComponent,
    TcpMaxValidatorDirective,
    TcpMinValidatorDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
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
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    { multi: true, provide: HTTP_INTERCEPTORS, useClass: TimeoutHttpInterceptor },
    { multi: true, provide: HTTP_INTERCEPTORS, useClass: LoadingHttpInterceptor },
    { provide: DEFAULT_TIMEOUT, useValue: 30000 },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
})
export class TcpNgUiModule {}
