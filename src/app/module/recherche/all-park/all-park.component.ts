import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { environment as E } from 'src/environments/environment.prod';

@Component({
    selector: 'app-all-park',
    templateUrl: './all-park.component.html',
    styleUrls: ['./all-park.component.scss']
})
export class AllParkComponent implements OnInit {
    parksFreeplaces: {}[];
    urlFreeplaces: string = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.getAllPark}`;

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.apiService.getData(this.urlFreeplaces).subscribe((res) => (this.parksFreeplaces = res));
    }
}
