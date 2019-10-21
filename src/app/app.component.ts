import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { MymodalComponent } from './module/mymodalcomponent/mymodal.component';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'My new project';

    closeResult: string;
    modalOptions: NgbModalOptions;

    constructor(private modalService: NgbModal) {
        this.modalOptions = {
            backdrop: 'static',
            backdropClass: 'customBackdrop'
        };
    }

    open(content) {
        const modalRef = this.modalService.open(MymodalComponent);
        modalRef.componentInstance.my_modal_type = content;
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
