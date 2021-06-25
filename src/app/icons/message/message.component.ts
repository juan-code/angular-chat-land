import { Component, Input } from "@angular/core";

@Component({
  selector: "icon-message",
  templateUrl: "./message.component.html",
  styleUrls: ["../icon.style.css"]
})
export class MessageComponent {
  @Input() fill: string = "black";
  @Input() size: number = 18;
  get sizeSvg(): string {
    return `${this.size}px`;
  }
}
