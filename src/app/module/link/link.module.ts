import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { LinkComponent } from "./link.component";

@NgModule({
  declarations: [LinkComponent],
  imports: [SharedModule],
  exports: [LinkComponent],
  providers: []
})
export class LinkModule {}
