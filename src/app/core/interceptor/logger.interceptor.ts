import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";

import { NGXLogger } from "ngx-logger";
import { errorInterceptor } from "./error.interceptor";

@Injectable()
export class loggerInterceptor implements HttpInterceptor {
  constructor(
    public logger: NGXLogger,
    private errorInterceptor: errorInterceptor
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.logger.info("API call", req.url);
    return next.handle(req).do(
      evt => {
        if (evt instanceof HttpResponse) {
          this.logger.info(req.url, "---> response status:", evt.status);
        }
      },
      err => {
        this.errorInterceptor.toastError(err);
      }
    );
  }
}
