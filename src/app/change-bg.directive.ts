import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
  @Input() isCorrect : boolean =false;
  constructor(private el : ElementRef,private render: Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.el.nativeElement,'background','green');
      this.render.setStyle(this.el.nativeElement,'background','#fff');
      this.render.setStyle(this.el.nativeElement,'background','2px solid grey');
    }else{
      this.render.setStyle(this.el.nativeElement,'background','red');
      this.render.setStyle(this.el.nativeElement,'background','#fff');
      this.render.setStyle(this.el.nativeElement,'background','2px solid grey');
    }
  }

}
