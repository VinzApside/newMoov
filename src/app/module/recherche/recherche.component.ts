import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { ApiService } from '../../core/api/api.service';

import { environment as E } from '../../../environments/environment';
import { freeplaceParkBody, freeplaceParkResponse } from '../../model/moovhubBack';

@Component({
    selector: 'app-recherche',
    styleUrls: ['./recherche.component.scss'],
    templateUrl: `./recherche.component.html`
})
export class RechercheComponent implements OnInit {
    constructor(private toastr: ToastrService, private apiService: ApiService) {}

    ngOnInit() {}
}
