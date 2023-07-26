import {Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  // another way other than @HostListener
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string = 'black';


  // Renderer2 use with @HostListener
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  // create events like hover.
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');


    // using @HostBinding
    this.backgroundColor = this.highlightColor;
    this.color = 'white';

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');


    // using @HostBinding
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }

}
