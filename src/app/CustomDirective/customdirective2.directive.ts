import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective2]'
})
export class Customdirective2Directive {

  constructor(private element:ElementRef,private re:Renderer2) { }

  ngOnInit(): void{

  }

  @HostListener('mouseenter')iconlover()
  {
    this.re.setStyle(this.element.nativeElement,'display','none')
  }

  @HostListener('mouseleave')iconleave()
  {
    this.re.setStyle(this.element.nativeElement,'display','')
  }
}
