import { NgModule } from '@angular/core';
import { RechercheComponent } from './recherche.component';
import { SharedModule } from '../shared/shared.module';
import { RechercheRoutingModule } from './recherche-routing.module';
import { OneParkComponent } from './one-park/one-park.component';
import { AllParkComponent } from './all-park/all-park.component';

@NgModule({
    declarations: [RechercheComponent, OneParkComponent, AllParkComponent],
    imports: [SharedModule, RechercheRoutingModule],
    exports: [RechercheComponent],
    providers: []
})
export class RechercheModule {}
