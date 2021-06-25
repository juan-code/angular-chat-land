import { Directive, HostListener } from '@angular/core'

@Directive({
  selector: '[focus-input]'
})
export class InputFocusDirective {
  @HostListener('focus', ['$event.target'])
  onFocus(target:HTMLInputElement) {
    const parentElement:Element = target.closest('.input-container')
    parentElement.classList.add('input-container-focused')
  }

  @HostListener('blur', ['$event.target'])
  onBlur(target:HTMLInputElement) {
    const parentElement:Element = target.closest('.input-container')
    parentElement.classList.remove('input-container-focused')
  }
}