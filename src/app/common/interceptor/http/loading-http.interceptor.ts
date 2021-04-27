import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {LoadingService} from '../../service/loading.service';

@Injectable()
export class LoadingHttpInterceptor implements HttpInterceptor {
  constructor(public loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.onStarted(req);

    return next
      .handle(req)
      .pipe(finalize(() => this.loadingService.onStopped(req)));
  }
}
