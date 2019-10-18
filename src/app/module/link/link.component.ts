import { Component, OnInit } from '@angular/core';
import { environment as E } from '../../../environments/environment';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
    linkList: any;
    constructor() {
        this.linkList = [
            {
                path: `${E.MoovhubEndpointFront.accueil}`,
                name: 'Accueil'
            },
            {
                path: `${E.MoovhubEndpointFront.recherche}`,
                name: 'Recherche'
            },
            {
                path: `${E.MoovhubEndpointFront.apropos}`,
                name: 'A propos'
            },
            {
                path: `${E.MoovhubEndpointFront.aide}`,
                name: 'Aide'
            }
        ];
    }

    ngOnInit() {}
}
