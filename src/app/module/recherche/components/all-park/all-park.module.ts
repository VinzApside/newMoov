import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AllParkComponent } from './all-park.component';
import { allParksService } from '../../service/allparks.service';

@NgModule({
    declarations: [AllParkComponent],
    imports: [SharedModule],
    exports: [AllParkComponent],
    providers: []
})
export class AllParkModule {}
