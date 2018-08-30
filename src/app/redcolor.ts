import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: '[redColor]'
})
export class RedColorDirective implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.color = 'red';
    }
}