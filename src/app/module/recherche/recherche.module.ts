import { NgModule } from '@angular/core';
import { RechercheComponent } from './components/recherche.component';
import { SharedModule } from '../shared/shared.module';
import { RechercheRoutingModule } from './components/recherche-routing.module';
import { OneParkComponent } from './components/one-park/one-park.component';
import { AllParksService } from './service/allparks.service';
import { AllParkComponent } from './components/all-park/all-park.component';
import { NgxsModule } from '@ngxs/store';
import { RechercheState } from './store/state/recherche.state';

@NgModule({
    declarations: [RechercheComponent, OneParkComponent, AllParkComponent],
    imports: [SharedModule, RechercheRoutingModule, NgxsModule.forFeature([RechercheState])],
    exports: [RechercheComponent],
    providers: [AllParksService]
})
export class RechercheModule {}
