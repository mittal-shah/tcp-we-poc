import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import PostDataHandler from '../handler/post-data.handler';
import ExceptionHandler from '../handler/exception.handler';
import { AnyType, ApiOptions, CommonUtil } from '@tcp/tcp-models';

@Injectable({ providedIn: 'root' })
export abstract class AbstractService {
  private exceptionHandler: ExceptionHandler;

  protected constructor(private http: HttpClient, private dialog: MatDialog) {
    this.exceptionHandler = new ExceptionHandler(dialog);
  }

  protected get<T>(url: string, options?: ApiOptions) {
    return this.http.get<T>(`${this.getApiPrefix()}${url}`, this.buildHttpOptions(options)).pipe(
      map((response) => this.exceptionHandler.handleExceptionIfAny<T>(response)),
      catchError(this.exceptionHandler.handleError<T>(url, options)),
    );
  }

  protected post<T>(url: string, data: AnyType, options?: ApiOptions) {
    const adjustedData = PostDataHandler.getAdjustedData(data);
    return this.http.post<T>(`${this.getApiPrefix()}${url}`, adjustedData, this.buildHttpOptions(options)).pipe(
      map((response) => this.exceptionHandler.handleExceptionIfAny<T>(response)),
      catchError(this.exceptionHandler.handleError<T>(url, options)),
    );
  }

  private getApiPrefix(): string {
    return CommonUtil.getAppPrefix() + '/api/v0000';
  }

  private buildHttpHeaders(options?: ApiOptions) {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      timeout: options?.timeout ? String(options?.timeout) : '',
    });
  }

  private buildHttpOptions(options?: ApiOptions) {
    return {
      headers: this.buildHttpHeaders(options),
      observe: 'response' as const,
    };
  }
}
