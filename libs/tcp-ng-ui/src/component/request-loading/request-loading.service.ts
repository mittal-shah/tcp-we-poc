import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpRequest } from '@angular/common/http';
import { AnyType } from '@tcp/tcp-models';

@Injectable({ providedIn: 'root' })
export class RequestLoadingService {
  loading$: BehaviorSubject<boolean>;
  private requests: Array<HttpRequest<AnyType>>;

  public constructor() {
    this.loading$ = new BehaviorSubject<boolean>(false);
    this.requests = [];
  }

  public onStarted(request: HttpRequest<AnyType>): void {
    this.requests.push(request);
    this.notify();
  }

  public onStopped(request: HttpRequest<AnyType>): void {
    const index = this.requests.indexOf(request);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }

  private notify(): void {
    this.loading$.next(this.requests.length !== 0);
  }
}
