import { Component, Input } from "@angular/core";

@Component({
  selector: "icon-search",
  templateUrl: "./search.component.html",
  styleUrls: ["../icon.style.css"]
})
export class SearchIconComponent {
  @Input() fill: string = "black";
  @Input() size: number = 18;

  get sizeSVG(): string {
    return `${this.size}px`;
  }
}
