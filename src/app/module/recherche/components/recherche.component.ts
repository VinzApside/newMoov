import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';

import { parksDataResponse } from 'types/lib';
import { allParksService } from '../service/allparks.service';

@Component({
    selector: 'app-recherche',
    styleUrls: ['./recherche.component.scss'],
    templateUrl: `./recherche.component.html`
})
export class RechercheComponent implements OnInit {
    getParkData: Observable<{}>;
    parks$: Observable<{}>;
    parkLoading$: Observable<boolean>;
    parkLoaded$: Observable<boolean>;

    constructor(private toastr: ToastrService, private apsService: allParksService) {}

    ngOnInit() {
        this.getParkData = this.apsService.getParks();
    }

    dataForBooking(data) {
        window.alert(JSON.stringify(data));
    }
}
