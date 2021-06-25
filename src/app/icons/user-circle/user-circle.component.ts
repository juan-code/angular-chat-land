import { Component, Input } from '@angular/core'

@Component({
  selector: 'icon-user-circle',
  templateUrl: './user-circle.component.svg'
})
export class UserCircleComponent {
  @Input() fill:string = 'black';
  @Input() size:number = 18
  get sizeSvg():string {
    return `${this.size}px`
  }
}