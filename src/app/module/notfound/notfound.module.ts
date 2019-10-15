import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { NotFoundComponent } from "./notfound.component";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [SharedModule],
  exports: [NotFoundComponent],
  providers: []
})
export class NotFoundModule {}
