import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService implements HttpInterceptor {

  // constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('interceptor');
    console.log('req', req);
    return next.handle(req).pipe(
      map((res) => {
        console.log('res', res);
        return res;
      })
    );
    // return EMPTY;
  }
}
