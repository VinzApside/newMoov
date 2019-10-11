import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  // templateUrl: "./app.component.html",
  template: `
    <div class="full-height">
      <h1>New moovhub</h1>
      <app-park></app-park>
    </div>
  `
})
export class AppComponent {
  title = "New moovhub";
}
