import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RechercheComponent } from './recherche.component';

const routes: Routes = [{ path: 'recherche', component: RechercheComponent, pathMatch: 'full' }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RechercheRoutingModule {}
