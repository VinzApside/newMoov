import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../core/api/api.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    constructor(private toastr: ToastrService, private apsService: allParksService, private store: Store<any>) {}

    ngOnInit() {
        this.getParkData = this.apsService.getParks();

        this.store.pipe(select('app-recherche')).subscribe((data) => {
            // this.parks$ = data.parkList;
            this.parkLoading$ = data.loading;
            this.parkLoaded$ = data.loaded;
        });
    }

    dataForBooking(data) {
        window.alert(JSON.stringify(data));
    }
}
