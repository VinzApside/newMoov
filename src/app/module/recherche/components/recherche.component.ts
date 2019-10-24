import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../../core/api/api.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromRecherche from '../store/actions/index';
import { parksDataResponse } from 'types/lib';

@Component({
    selector: 'app-recherche',
    styleUrls: ['./recherche.component.scss'],
    templateUrl: `./recherche.component.html`
})
export class RechercheComponent implements OnInit {
    parks$: Observable<parksDataResponse[]>;

    constructor(
        private toastr: ToastrService,
        private apiService: ApiService,
        private store: Store<parksDataResponse[]>
    ) {
        this.parks$ = store.pipe(select('recherche'));
    }

    ngOnInit() {
        this.store.dispatch(new fromRecherche.LoadParks());
    }

    dataForBooking(data) {
        window.alert(JSON.stringify(data));
    }
}
