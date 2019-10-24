import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { environment as E } from 'src/environments/environment.prod';
import { freeplaceParkBody, freeplaceParkResponse } from 'src/app/model/moovhubBack';

@Component({
    selector: 'app-one-park',
    templateUrl: './one-park.component.html',
    styleUrls: ['./one-park.component.scss']
})
export class OneParkComponent implements OnInit {
    @Input()
    parkDetails: any;

    @Output()
    sendDataParkToBooking = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    changeVisibility(event, id_park_source) {
        this.parkDetails.showDescription = !this.parkDetails.showDescription;
    }

    userWantToBookEvent(event, sendedParkDetails) {
        this.changeVisibility(event, sendedParkDetails.id_park_source);
        this.sendDataParkToBooking.emit(sendedParkDetails);
    }
}
