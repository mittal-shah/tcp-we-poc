import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, ObservableInput, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import Util from './util/util';

@Injectable({providedIn: 'root'})
export abstract class AbstractService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  protected constructor(
    private http: HttpClient) {
  }

  // tslint:disable-next-line:no-shadowed-variable
  protected get<T>(url: string): Observable<Observable<T> extends ObservableInput<infer T> ? T : never | T> {
    return this.http.get<T>(`${this.getApiPrefix()}${url}`, this.httpOptions)
      .pipe(
        tap(_ => this.log(url)),
        catchError(this.handleError<T>(url, undefined))
      );
  }

  // tslint:disable-next-line:no-shadowed-variable
  protected post<T>(url: string, data: any): Observable<Observable<T> extends ObservableInput<infer T> ? T : never | T> {
    return this.http.post<T>(`${this.getApiPrefix()}${url}`, data, this.httpOptions)
      .pipe(
        tap(_ => this.log(url)),
        catchError(this.handleError<T>(url, undefined))
      );
  }

  protected getAppPrefix(): string {
    return Util.getAppPrefix();
  }

  protected getPartialApiPath(strPath: string): string {
    // @ts-ignore
    return Util.buildApiPath.apply(null, arguments);
  }

  protected getApiPrefix(): string {
    return this.getAppPrefix() + '/api/v0000';
  }

  protected getApiPath(strPath: string): string {
    // @ts-ignore
    strPath = this.getPartialApiPath.apply(this, arguments);
    return this.getApiPrefix() + strPath;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  protected log(message: string): void {
    console.log(message);
  }
}
