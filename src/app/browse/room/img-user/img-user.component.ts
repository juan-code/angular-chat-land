import { Component, Input } from "@angular/core";

@Component({
  selector: "room-user-image",
  templateUrl: "./img-user.component.html",
  styleUrls: ["./img-user.component.css"]
})
export class ImageUserComponent {
  @Input() size: number = 40;
}
