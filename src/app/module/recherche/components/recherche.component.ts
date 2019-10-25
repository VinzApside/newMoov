import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { parksDataResponse } from 'types/lib';
import { AllParksService } from '../service/allparks.service';
import { GetParks } from '../store/actions/recherche.actions';

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

    constructor(private store: Store, private toastr: ToastrService, private rechercheService: AllParksService) {}

    ngOnInit() {
        this.getParkData = this.rechercheService.getParks().subscribe((rs) => console.log('rs'));
        console.log(this.getParkData);
        // this.store.dispatch(new GetParks());
    }

    dataForBooking(data) {
        window.alert(JSON.stringify(data));
    }
}
