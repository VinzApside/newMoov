import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HelpComponent } from "./help.component";

@NgModule({
  declarations: [HelpComponent],
  imports: [SharedModule],
  exports: [HelpComponent],
  providers: []
})
export class HelpModule {}
