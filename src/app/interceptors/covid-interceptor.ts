import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class covidInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const newRequest = req.clone({
      headers: req.headers.set('X-RapidAPI-Key', '8f2d428da8mshcf406e6a609ff84p1dec04jsn851b37bbb247')
                          .set('X-RapidAPI-Host','covid-193.p.rapidapi.com')


    });
    return next.handle(newRequest);


  }
}
