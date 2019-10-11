import { Component, OnInit } from "@angular/core";

import { ToastrService } from "ngx-toastr";

import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-park",
  styleUrls: ["./park.component.scss"],
  template: `
    <div>
      <button
        (click)="clickOnButton(buttonRight)"
        type="button"
        class="button right"
      >
        {{ buttonRight }}
      </button>
      <button
        (click)="clickOnButton(buttonWrong)"
        type="button"
        class="button wrong"
      >
        {{ buttonWrong }}
      </button>
    </div>
  `
})
export class ParkComponent implements OnInit {
  responseApi: string;
  buttonRight: string;
  buttonWrong: string;

  constructor(private toastr: ToastrService, private apiService: ApiService) {
    this.buttonRight = "right";
    this.buttonWrong = "wrong";
    this.responseApi = "wait for it";
  }

  ngOnInit() {}

  clickOnButton(type) {
    this.apiService
      .getData()
      .then(result => {
        console.log("object");
      })
      .catch(err => {
        console.log("error");
      });
    console.log(this.responseApi);
    if (this.responseApi == "ok") {
      this.toastr.success(type, "success", { disableTimeOut: true });
    } else {
      this.toastr.error(type, "error", { disableTimeOut: true });
    }
  }
}
