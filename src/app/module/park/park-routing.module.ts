import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkComponent } from './park.component';

const routes: Routes = [{ path: 'recherche', component: ParkComponent, pathMatch: 'full' }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParkRoutingModule {}
