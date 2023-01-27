import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private element:ElementRef, private re:Renderer2) { }
  @HostBinding('style.background-color') back='transparent'
  @HostBinding('style.border') border=''
  // @HostBinding('class')classes='required-fieldbefore required-fieldafter'
  @HostBinding('className')class='class2'
  // @HostBinding('style')style:any='labeleave()'
  ngOnInit():void{
    // this.re.setStyle(this.element.nativeElement,'backgroundcolor','green')
    // this.re.addClass(this.element.nativeElement,'container')
    // this.re.addClass(this.element.nativeElement,'required-fieldbefore')
    // this.re.addClass(this.element.nativeElement,'required-fieldafter')
    // this.classes='required-fieldbefore required-fieldafter'
    
  }
 
  @HostListener('mouseenter')labelin(){
  this.class='class1'
  // this.back='blue'
  // this.border='orangesolid'
  // this.classes=''
  console.log("mouse enter:");
  console.log(this.class);
  }

  @HostListener('mouseleave')labelleave(){
    this.class='class2'
    // this.back='transparent';
    // this.border='transparent';
    // this.classes='required-fieldbefore required-fieldafter'
    console.log('mouseleave:');
    console.log(this.class);
  }


  // @HostListener('mouseenter')onmouseover(){
  //   this.re.setStyle(this.element.nativeElement,'margin','5px 10px');
  //   this.re.setStyle(this.element.nativeElement,'padding','30px 30px');
  //   this.re.setStyle(this.element.nativeElement,'transition','0.5s');
  // }
   
  // @HostListener('mouseleave')onmouseleave(){
  //   this.re.setStyle(this.element.nativeElement,'margin','20px 30px');
  //   this.re.setStyle(this.element.nativeElement,'padding','20px 30px');
  //   this.re.setStyle(this.element.nativeElement,'transition','0.5s')
  // }

   
  //// using @hostlistener
  // @HostListener('mouseenter')labelin(){
  //   this.re.setStyle(this.element.nativeElement,'background-color','blue');
  //   this.re.setStyle(this.element.nativeElement,'border-color','orange');
  //   this.re.setStyle(this.element.nativeElement,'border-style','solid');
  //   this.re.removeClass(this.element.nativeElement,'required-fieldbefore');
  //   this.re.removeClass(this.element.nativeElement,'required-fieldafter')
  // }

  // @HostListener('mouseleave')labelleave(){
  //   // this.re.setStyle(this.element.nativeElement,'background-color','');
  //   // this.re.setStyle(this.element.nativeElement,'border-style','');
  //   this.re.removeStyle(this.element.nativeElement,'background-color');
  //   this.re.removeStyle(this.element.nativeElement,'border-style');
  //   this.re.addClass(this.element.nativeElement,'required-fieldbefore')
  //   this.re.addClass(this.element.nativeElement,'required-fieldafter')
  // }

     
  ////using @hostbinding
   // @HostListener('mouseenter')labelin(){
   //   this.back='blue'
   //   this.border='orange solid'
   //   this.classes=''
  // }

  // @HostListener('mouseleave')labelleave(){
  //   this.back='transparent';
  //   this.border='transparent'
  //   this.classes='required-fieldbefore required-fieldafter'
  // }


}