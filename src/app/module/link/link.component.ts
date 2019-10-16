import { Component, OnInit } from "@angular/core";
import { environment as E } from "../../../environments/environment";

@Component({
  selector: "app-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"]
})
export class LinkComponent implements OnInit {
  linkList: any;
  constructor() {
    this.linkList = [
      {
        href: `${E.MoovhubEndpointFront.accueil}`,
        name: "Accueil"
      },
      {
        href: `${E.MoovhubEndpointFront.recherche}`,
        name: "Recherche"
      },
      {
        href: `${E.MoovhubEndpointFront.apropos}`,
        name: "A propos"
      },
      {
        href: `${E.MoovhubEndpointFront.aide}`,
        name: "Aide"
      }
    ];
  }

  ngOnInit() {}
}
