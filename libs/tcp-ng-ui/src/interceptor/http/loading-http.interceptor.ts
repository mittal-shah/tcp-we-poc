import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AnyType } from '@tcp/tcp-models';
import { RequestLoadingService } from '../../component';

@Injectable()
export class LoadingHttpInterceptor implements HttpInterceptor {
  constructor(public loadingService: RequestLoadingService) {}

  intercept(req: HttpRequest<AnyType>, next: HttpHandler): Observable<HttpEvent<AnyType>> {
    this.loadingService.onStarted(req);

    return next.handle(req).pipe(finalize(() => this.loadingService.onStopped(req)));
  }
}
