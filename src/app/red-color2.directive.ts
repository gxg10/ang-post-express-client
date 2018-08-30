import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedColor2]'
})
export class RedColor2Directive {

  constructor(private renderer: Renderer2,
  private elementRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 
    style: 'color', value: 'red')
  }

}
