import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';

@NgModule({
    declarations: [HelpComponent],
    imports: [SharedModule, HelpRoutingModule],
    exports: [HelpComponent],
    providers: []
})
export class HelpModule {}
