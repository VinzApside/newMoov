import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LinkComponent } from './link.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LinkComponent],
    imports: [SharedModule, RouterModule],
    exports: [LinkComponent, RouterModule],
    providers: []
})
export class LinkModule {}
