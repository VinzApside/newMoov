import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-mymodal',
    templateUrl: './mymodal.component.html',
    styleUrls: ['./mymodal.component.scss']
})
export class MymodalComponent implements OnInit {
    @Input() my_modal_type;
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit() {
        console.log(this.my_modal_type);
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
