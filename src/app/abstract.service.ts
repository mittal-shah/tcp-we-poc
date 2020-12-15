import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, ObservableInput, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export abstract class AbstractService {
  protected baseUrl = 'https://tcp70alpha.dmione.com/api/v0000/';

  protected constructor(
    private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };

  // tslint:disable-next-line:no-shadowed-variable
  protected get<T>(url: string): Observable<Observable<T> extends ObservableInput<infer T> ? T : never | T> {
    return this.http.get<T>(`${this.baseUrl}${url}`)
      .pipe(
        tap(_ => this.log(url)),
        catchError(this.handleError<T>(url, undefined))
      );
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
