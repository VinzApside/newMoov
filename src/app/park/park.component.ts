import { Component, OnInit } from "@angular/core";

import { ToastrService } from "ngx-toastr";

import { ApiService } from "../api/api.service";

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
  responseApi: object | string;
  buttonRight: string;
  buttonWrong: string;
  url: string;

  constructor(private toastr: ToastrService, private apiService: ApiService) {
    this.buttonRight = "right";
    this.buttonWrong = "wrong";
    this.url = "http://localhost:3000/booking/availability/park/";
  }

  ngOnInit() {}

  clickOnButton(type) {
    if (type === "right") {
      this.apiService.postData(this.url).subscribe(res =>
        this.toastr.success(JSON.stringify(res), "success", {
          disableTimeOut: true
        })
      );
    } else {
      this.apiService.getData(this.url).subscribe(
        res => {
          this.toastr.success(JSON.stringify(res), "success", {
            disableTimeOut: true
          });
        },
        error => console.log(error)
      );
    }
  }
}
