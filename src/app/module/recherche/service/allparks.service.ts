import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { freeplaceParkResponse } from 'src/app/model/moovhubBack';
import { parksDataResponse } from 'types/lib';
import { environment as E } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/map';

@Injectable()
export class AllParksService {
    parksConcatData$: {}[] = [];

    urlFreeplaces: string = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.getAllPark}`;
    urlParkData: string = `${E.Api.mainMoovhub}${E.MoovhubEndpointBack.getParkData}`;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'x-partner-token': 'test_dev'
        }),
        reportProgess: true
    };

    constructor(private apiService: ApiService, private http: HttpClient) {}
    // return this.apiService.getData(this.urlFreeplaces).subscribe(
    //     (parkFreeplacesData) => {
    //         return this.concatParksDataAndAvailability(parkMainData, parkFreeplacesData);
    //     },
    //     (err) => console.log('+++')
    // );

    getAllParksData(): Observable<parksDataResponse> {
        return this.http.get<parksDataResponse>(this.urlParkData, this.httpOptions);
    }

    getFreePlaces(): Observable<freeplaceParkResponse> {
        return this.http.get<freeplaceParkResponse>(this.urlFreeplaces, this.httpOptions);
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

    getAllData(): Observable<any> {
        return forkJoin(this.getFreePlaces(), this.getAllParksData()).pipe(
            tap(([parksGeneralData, parksFreeplaces]) => {
                const parksAllDataConcat = [];
                for (const park of parksGeneralData) {
                    if (park.status === 'active') {
                        const thatParkFreeData = parksFreeplaces.find(
                            (parkFreeData) => parkFreeData.id_park_source === park.id_park_source
                        );
                        let parkNewData = Object.assign(thatParkFreeData, park);
                        parksAllDataConcat.push(parkNewData);
                    } else {
                        parksAllDataConcat.push(park);
                    }
                }
            })
        );
    }
}
