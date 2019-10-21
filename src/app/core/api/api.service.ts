import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    public httpOptions: {};
    public dataPost: {};

    constructor(private http: HttpClient, private logger: NGXLogger) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-partner-token': 'test_dev'
            }),
            reportProgess: true
        };
        this.dataPost = {};
    }

    public handleError(err) {
        return throwError(err);
    }

    getData(urlGet): Observable<any> {
        return this.http
            .get(urlGet, this.httpOptions)
            .pipe(map((response: Object[]) => response))
            .pipe(catchError(this.handleError.bind(this)));
    }

    postData(urlPost, bodyPost): Observable<any> {
        this.dataPost = bodyPost;
        return this.http
            .post(urlPost, this.dataPost, this.httpOptions)
            .pipe(map((response: Object[]) => response))
            .pipe(catchError(this.handleError));
    }
}
