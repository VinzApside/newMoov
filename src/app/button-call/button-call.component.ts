import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-button-call",
  styleUrls: ["./button-call.component.scss"],
  template: `
    <div>
      <button
        (click)="clickOnButton(buttonRight)"
        type="button"
        class="button right"
      >
        {{ buttonRight }}
      </button>
      <button
        (click)="clickOnButton(buttonWrong)"
        type="button"
        class="button wrong"
      >
        {{ buttonWrong }}
      </button>
    </div>
  `
})
export class ButtonCallComponent implements OnInit {
  buttonRight: string;
  buttonWrong: string;
  constructor() {
    this.buttonRight = "right";
    this.buttonWrong = "wrong";
  }

  ngOnInit() {}

  clickOnButton(type) {
    console.log(`click ${type}`);
  }
}
