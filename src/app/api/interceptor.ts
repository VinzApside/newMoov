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

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(private logger: NGXLogger) {}
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
        this.logger.error(req.url, "---> response status:", err.status);
      }
    );
  }
}
