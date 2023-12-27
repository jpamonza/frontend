import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FootballApiInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({
      setHeaders: {
        'x-rapidapi-host': 'v3.football.api-sports.io',
        'x-rapidapi-key': '01e1a9b3527add0f82b973aadfc8e861',
      },
    });
    return next.handle(newRequest);
  }
}
