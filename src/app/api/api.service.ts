import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpEvent,
  HttpEventType
} from "@angular/common/http";
import { NGXLogger } from "ngx-logger";
import { Observable, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public httpOptions: {};
  public dataPost: {};

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private logger: NGXLogger
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      reportProgess: true
    };
    this.dataPost = {
      beginDate: "2019-11-01T11:36:02.836Z",
      endDate: "2019-11-01T13:36:02.836Z",
      id_park: "53f79aa4-98b0-4b6c-9eea-4190d823b828",
      latitude: 48.714014,
      longitude: 2.188121,
      vehicleTypes: ["small"]
    };
  }

  public handleError(err) {
    this.toastr.error(JSON.stringify(err.statusText), err.name);
    return throwError(err);
  }

  getData(urlGet): Observable<any> {
    const req = new HttpRequest("GET", urlGet, this.httpOptions);
    return this.http
      .get(urlGet)
      .pipe(map((response: Object[]) => response))
      .pipe(catchError(this.handleError.bind(this)));
  }

  postData(urlPost): Observable<any> {
    return this.http
      .post(urlPost, this.dataPost, this.httpOptions)
      .pipe(map((response: Object[]) => response))
      .pipe(catchError(this.handleError));
  }
}
