import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.scss"],
  // templateUrl: "./app.component.html",
  template: `
    <div class="full-height">
      <h1>{{ title }}</h1>
      <app-link></app-link>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = "My new project";
}
