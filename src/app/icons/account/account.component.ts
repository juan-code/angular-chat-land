import { Component, Input } from "@angular/core";

@Component({
  selector: "icon-account",
  templateUrl: "./account.component.html",
  styleUrls: ["../icon.style.css"]
})
export class AccountComponent {
  @Input() size: number = 18;
  @Input() fill: string = "black";
}
