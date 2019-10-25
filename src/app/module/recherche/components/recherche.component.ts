import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { parksDataResponse } from 'types/lib';
import { AllParksService } from '../service/allparks.service';
import { InitialiseParks } from '../store/actions/recherche.actions';
import { RechercheState } from '../store/state/recherche.state';

@Component({
    selector: 'app-recherche',
    styleUrls: ['./recherche.component.scss'],
    templateUrl: `./recherche.component.html`
})
export class RechercheComponent implements OnInit {
    getParkData: Observable<{}>;
    parkLoading$: Observable<boolean>;
    parkLoaded$: Observable<boolean>;

    constructor(private store: Store, private toastr: ToastrService, private rechercheService: AllParksService) {}

    ngOnInit() {
        // this.rechercheService.getParks().subscribe((rs) => console.log('rs', rs));
        this.store.dispatch(new InitialiseParks());
    }

    dataForBooking(data) {
        window.alert(JSON.stringify(data));
    }
}
