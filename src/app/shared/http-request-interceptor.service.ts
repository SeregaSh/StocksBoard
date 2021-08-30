import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpErrorResponse,
  HttpEvent
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

import { retry, catchError, map } from 'rxjs/operators';

import { NotifierService } from 'angular-notifier';

@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {
  constructor(private notifier: NotifierService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modifiedReq = req.clone({
      params: new HttpParams().set('apiKey', 'I9prOLpL35fk3VySDXpmrFOexm4RUt7v')
    });

    return next.handle(modifiedReq)
      .pipe(
        map((event: HttpEvent<any>) => event),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          errorMessage = `Error: ${error.message}`;
          this.notifier.notify('error', errorMessage);
          return throwError(errorMessage);
        })
      )
  }
}
