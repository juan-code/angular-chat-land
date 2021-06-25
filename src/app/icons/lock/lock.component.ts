import { Component, Input } from '@angular/core'

@Component({
  selector: 'icon-lock',
  templateUrl: './lock.component.svg'
})
export class LockComponent {
  @Input() fill:string = 'black';
  @Input() size:number = 18
  get sizeSvg():string {
    return `${this.size}px`
  }
}