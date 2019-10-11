import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonCallComponent } from "./button-call/button-call.component";

import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, ButtonCallComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
