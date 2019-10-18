import { ToastrService } from "ngx-toastr";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class errorInterceptor {
  constructor(private toastr: ToastrService) {}
  public toastError(err) {
    this.toastr.error(JSON.stringify(err.statusText), err.name);
    throwError(err);
  }
}
