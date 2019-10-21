import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { NgbModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [LoginModule],
    imports: [SharedModule, CommonModule],
    exports: [LoginModule]
})
export class LoginModule {}
