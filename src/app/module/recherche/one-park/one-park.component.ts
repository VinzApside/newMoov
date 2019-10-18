import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { environment as E } from 'src/environments/environment.prod';
import { freeplaceParkBody, freeplaceParkResponse } from 'src/app/model/moovhubBack';

@Component({
    selector: 'app-one-park',
    templateUrl: './one-park.component.html',
    styleUrls: ['./one-park.component.scss']
})
export class OneParkComponent implements OnInit {
    parkFreeplaces: freeplaceParkResponse[];
    urlFreeplaces: string = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.freeplacePark}`;
    parkBodyPost: freeplaceParkBody;

    constructor(private apiService: ApiService) {
        this.parkBodyPost = {
            beginDate: '2019-11-01T11:36:02.836Z',
            endDate: '2019-11-01T13:36:02.836Z',
            id_park: '53f79aa4-98b0-4b6c-9eea-4190d823b828',
            latitude: 48.714014,
            longitude: 2.188121,
            vehicleTypes: ['small']
        };
    }

    ngOnInit() {
        this.apiService.postData(this.urlFreeplaces, this.parkBodyPost).subscribe((res) => (this.parkFreeplaces = res));
    }
}
