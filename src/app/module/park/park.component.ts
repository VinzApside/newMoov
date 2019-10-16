import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../api/api.service';

import { environment as E } from '../../../environments/environment';

@Component({
    selector: 'app-park',
    styleUrls: ['./park.component.scss'],
    templateUrl: `./park.component.html`
})
export class ParkComponent implements OnInit {
    responseApi: object | string;
    buttonRight: string;
    buttonWrong: string;
    url: string;
    apiResponse: freeplaceParkResponse[];
    parkBodyPost: freeplaceParkBody;

    constructor(private toastr: ToastrService, private apiService: ApiService) {
        this.buttonRight = 'right';
        this.buttonWrong = 'wrong';
        this.url = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.freeplacePark}`;
        this.apiResponse = [];
        this.parkBodyPost = {
            beginDate: '2019-11-01T11:36:02.836Z',
            endDate: '2019-11-01T13:36:02.836Z',
            id_park: '53f79aa4-98b0-4b6c-9eea-4190d823b828',
            latitude: 48.714014,
            longitude: 2.188121,
            vehicleTypes: ['small']
        };
    }

    ngOnInit() {}

    clickOnButton(type: string): void {
        if (type === 'right') {
            this.apiService.postData(this.url, this.parkBodyPost).subscribe((res) => {
                this.toastr.success(JSON.stringify(res), 'success', {
                    disableTimeOut: true
                });
                this.apiResponse = res;
            });
        } else {
            this.apiService.getData(this.url).subscribe(
                (res) => {
                    this.toastr.success(JSON.stringify(res), 'success', {
                        disableTimeOut: true
                    });
                },
                (error) => (this.apiResponse = [])
            );
        }
    }
}
