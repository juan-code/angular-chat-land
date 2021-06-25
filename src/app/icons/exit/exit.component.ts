import { Component, Input } from "@angular/core";

@Component({
  selector: "icon-exit",
  templateUrl: "./exit.component.html"
})
export class ExitComponent {
  @Input() fill: string = "black";
  @Input() size: number = 18;

  get sizeSVG(): string {
    return `${this.size}px`;
  }
}
