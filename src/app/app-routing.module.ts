import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ParkComponent } from "./module/park/park.component";
import { HomeComponent } from "./module/home/home.component";
import { AboutComponent } from "./module/about/about.component";
import { HelpComponent } from "./module/help/help.component";
import { NotFoundComponent } from "./module/notfound/notfound.component";

const routes: Routes = [
  { path: "", redirectTo: "/accueil", pathMatch: "full" },
  { path: "accueil", component: HomeComponent, pathMatch: "full" },
  { path: "a-propos", component: AboutComponent, pathMatch: "full" },
  { path: "aide", component: HelpComponent, pathMatch: "full" },
  { path: "recherche", component: ParkComponent, pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
