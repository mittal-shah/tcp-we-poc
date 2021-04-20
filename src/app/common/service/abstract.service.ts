import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import Util from '../util/util';
import {MatDialog} from '@angular/material/dialog';
import PostDataHandler from '../handler/post-data.handler';
import ExceptionHandler from '../handler/exception.handler';

@Injectable({providedIn: 'root'})
export abstract class AbstractService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    observe: 'response' as const
  };

  private exceptionHandler: ExceptionHandler;

  protected constructor(
    private http: HttpClient, private dialog: MatDialog) {
    this.exceptionHandler = new ExceptionHandler(dialog);
  }

  protected get<T>(url: string) {
    return this.http.get<T>(`${this.getApiPrefix()}${url}`, this.httpOptions)
      .pipe(
        map((response) => this.exceptionHandler.handleExceptionIfAny<T>(response)),
        catchError(this.exceptionHandler.handleError<T>(url))
      );
  }

  protected post<T>(url: string, data: any) {
    const adjustedData = PostDataHandler.getAdjustedData(data);
    return this.http.post<T>(`${this.getApiPrefix()}${url}`, adjustedData, this.httpOptions)
      .pipe(
        map((response) => this.exceptionHandler.handleExceptionIfAny<T>(response)),
        catchError(this.exceptionHandler.handleError<T>(url))
      );
  }

  private getApiPrefix(): string {
    return Util.getAppPrefix() + '/api/v0000';
  }
}
