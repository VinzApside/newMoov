import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { freeplaceParkResponse } from 'src/app/model/moovhubBack';
import { parksDataResponse } from 'types/lib';
import { environment as E } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable()
export class allParksService {
    parksConcatData: {}[] = [];

    urlFreeplaces: string = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.getAllPark}`;
    urlParkData: string = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.getParkData}`;

    constructor(private apiService: ApiService) {}

    getParks(): any {
        return this.apiService.getData(this.urlParkData).subscribe((parkMainData) => {
            return this.apiService.getData(this.urlFreeplaces).subscribe(
                (parkFreeplacesData) => {
                    return this.concatParksDataAndAvailability(parkMainData, parkFreeplacesData);
                },
                (err) => console.log('+++')
            );
        });
    }

    getFreePlaces(): Observable<freeplaceParkResponse> {
        return this.apiService.getData(this.urlFreeplaces);
    }

    concatParksDataAndAvailability(parksGeneralData: parksDataResponse[], parksFreeplaces: freeplaceParkResponse[]) {
        const parksAllDataConcat = [];
        parksGeneralData.map((park) => {
            park.showDescription = true;
            if (park.status === 'active') {
                const thatParkFreeData = parksFreeplaces.find(
                    (parkFreeData) => parkFreeData.id_park_source === park.id_park_source
                );
                let parkNewData = Object.assign(thatParkFreeData, park);
                parksAllDataConcat.push(parkNewData);
            } else {
                parksAllDataConcat.push(park);
            }
        });
        return parksAllDataConcat;
    }
}
