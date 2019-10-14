import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public httpOptions: {};
  public dataPost: {};

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
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
    return err;
  }

  getData(): Observable<any> {
    return this.http
      .get("http://localhost:3000/booking/availability/park/")
      .pipe(map((response: Object[]) => response))
      .pipe(catchError(this.handleError.bind(this)));
  }

  postData(): Observable<any> {
    return this.http
      .post(
        "http://localhost:3000/booking/availability/park/",
        this.dataPost,
        this.httpOptions
      )
      .pipe(map((response: Object[]) => response))
      .pipe(catchError(this.handleError));
  }
}
