import { Component, OnInit } from "@angular/core";

import { ToastrService } from "ngx-toastr";

import { ApiService } from "../api/api.service";

@Component({
  selector: "app-park",
  styleUrls: ["./park.component.scss"],
  templateUrl: `./park.component.html`
})
export class ParkComponent implements OnInit {
  responseApi: object | string;
  buttonRight: string;
  buttonWrong: string;
  url: string;
  apiResponse: [];

  constructor(private toastr: ToastrService, private apiService: ApiService) {
    this.buttonRight = "right";
    this.buttonWrong = "wrong";
    this.url = "http://localhost:3000/booking/availability/park/";
    this.apiResponse = [];
  }

  ngOnInit() {}

  clickOnButton(type) {
    if (type === "right") {
      this.apiService.postData(this.url).subscribe(res => {
        this.toastr.success(JSON.stringify(res), "success", {
          disableTimeOut: true
        });
        console.log(res);
        this.apiResponse = res;
      });
    } else {
      this.apiService.getData(this.url).subscribe(
        res => {
          this.toastr.success(JSON.stringify(res), "success", {
            disableTimeOut: true
          });
        },
        error => (this.apiResponse = [])
      );
    }
  }
}
