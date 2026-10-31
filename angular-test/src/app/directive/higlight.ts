import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHiglight]',
})
export class Higlight {
  constructor(private ele: ElementRef){}

  @HostBinding('style.backgroundColor')
  backgoundColor = '#fff'

  @HostListener('mouseenter')
  onMouseEnter(){
    this.ele.nativeElement.style.backgroundColor = '#bdfa93'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.ele.nativeElement.style.backgroundColor = 'white'
  }
}
