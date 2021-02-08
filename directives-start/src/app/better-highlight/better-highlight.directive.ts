import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementReference: ElementRef, private renderer: Renderer2) { }
  
  @HostBinding('style.backgroundColor') backgroundColor: string = 'red';
  ngOnInit(){
    // this.renderer.setStyle(this.elementReference.nativeElement,'background-color','blue');
  }

  @HostListener('mouseenter')mouseover(eventData: Event){
    // this.renderer.setStyle(this.elementReference.nativeElement,'background-color','blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseenter')mouseleave(eventData: Event){
    this.renderer.setStyle(this.elementReference.nativeElement,'background-color','transparent');
  }
}
