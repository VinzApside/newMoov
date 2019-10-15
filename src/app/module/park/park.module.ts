import { NgModule } from "@angular/core";
import { ParkComponent } from "./park.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ParkComponent],
  imports: [SharedModule],
  exports: [ParkComponent],
  providers: []
})
export class ParkModule {}
