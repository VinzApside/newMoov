import { NgModule } from '@angular/core';
import { ParkComponent } from './park.component';
import { SharedModule } from '../shared/shared.module';
import { ParkRoutingModule } from './park-routing.module';

@NgModule({
    declarations: [ParkComponent],
    imports: [SharedModule, ParkRoutingModule],
    exports: [ParkComponent],
    providers: []
})
export class ParkModule {}
