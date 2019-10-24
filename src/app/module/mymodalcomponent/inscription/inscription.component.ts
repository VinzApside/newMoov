import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserCreate } from 'src/app/model/moovhubBack';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
    constructor(public activeModal: NgbActiveModal /*, private storeInscription: UserCreate*/) {}

    ngOnInit() {}

    // createUser() {
    //     // this.storeInscription.dispatch();
    // }
}
