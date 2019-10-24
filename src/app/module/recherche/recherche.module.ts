import { NgModule } from '@angular/core';
import { RechercheComponent } from './components/recherche.component';
import { SharedModule } from '../shared/shared.module';
import { RechercheRoutingModule } from './components/recherche-routing.module';
import { OneParkComponent } from './components/one-park/one-park.component';
import { StoreModule } from '@ngrx/store';
import { rechercheReducer } from './store/reducers/recherche.reducers';
import { allParksService } from './service/allparks.service';
import { AllParkComponent } from './components/all-park/all-park.component';

@NgModule({
    declarations: [RechercheComponent, OneParkComponent, AllParkComponent],
    imports: [SharedModule, RechercheRoutingModule, StoreModule.forFeature('app-recherche', rechercheReducer)],
    exports: [RechercheComponent],
    providers: [allParksService]
})
export class RechercheModule {}
