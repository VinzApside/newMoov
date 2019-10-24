import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { environment as E } from 'src/environments/environment.prod';
import { freeplaceParkResponse, parksDataResponse } from 'src/app/model/moovhubBack';

@Component({
    selector: 'app-all-park',
    templateUrl: './all-park.component.html',
    styleUrls: ['./all-park.component.scss']
})
export class AllParkComponent implements OnInit {
    parksFreeplaces: freeplaceParkResponse[];
    parksGeneralData: parksDataResponse[] = [];
    parksConcatData: {}[];
    urlFreeplaces: string = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.getAllPark}`;
    urlParkData: string = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.getParkData}`;
    visibleDescription: boolean;

    @Output()
    sendParkForBooking = new EventEmitter<any>();

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.visibleDescription = false;
        this.apiService.getData(this.urlParkData).subscribe((res) => {
            this.parksGeneralData = res;
            this.apiService.getData(this.urlFreeplaces).subscribe(
                (res) => {
                    this.parksFreeplaces = res;
                    this.concatParksDataAndAvailability();
                },
                (err) => console.log('+++')
            );
        });
    }

    concatParksDataAndAvailability() {
        this.parksConcatData = [];
        this.parksGeneralData.map((park) => {
            park.showDescription = true;
            if (park.status === 'active') {
                const thatParkFreeData = this.parksFreeplaces.find(
                    (parkFreeData) => parkFreeData.id_park_source === park.id_park_source
                );
                let parkNewData = Object.assign(thatParkFreeData, park);
                this.parksConcatData.push(parkNewData);
            } else {
                this.parksConcatData.push(park);
            }
        });
    }

    changeVisibility(event, id_park_source) {
        if (!event.target.attributes.attChangeVisibility) {
            this.parksConcatData.map((park: parksDataResponse) => {
                if (park.id_park_source === id_park_source) {
                    park.showDescription = !park.showDescription;
                }
            });
        }
    }

    getTheParkDetailsForBooking(data) {
        this.sendParkForBooking.emit(data);
    }
}
