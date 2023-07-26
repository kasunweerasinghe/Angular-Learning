import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    // accessing elements directly like this is not best practice. because angular able to render template without a dom
    // and then these properties might not be available.
    // so basically this is not good practice to access element this way.
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
  }


}
