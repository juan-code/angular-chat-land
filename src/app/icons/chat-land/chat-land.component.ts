import { Component, Input } from "@angular/core";

@Component({
  selector: "icon-chat-land",
  template: `
    <div
      class="d-inline-block icon-chatland"
      [style.width.px]="size"
      [style.height.px]="size"
    >
      <div class="bars"></div>
    </div>
  `,
  styles: [
    `
      .icon-chatland {
        position: relative;
        background: var(--purple);
        border-radius: 50%;
      }
      .icon-chatland::before {
        content: "";
        position: absolute;
        background: inherit;
        width: 50%;
        height: 50%;
        bottom: 0;
        left: 0;
        clip-path: polygon(100% 35%, 0% 100%, 100% 100%);
      }
      .bars {
        width: 10%;
        border-radius: 4px;
        height: 60%;
        background: var(--purpleDark);
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .bars::before,
      .bars::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        background: inherit;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 4px;
      }
      .bars::before {
        left: -150%;
      }
      .bars::after {
        left: 150%;
      }
    `
  ]
})
export class ChatLandComponent {
  @Input() size: number = 20;
}
