import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // allow custom colors to be passsed in 
  // specify defaults in case they are not passed in
  @Input() defaultColor: string = 'transparent';
  @Input() hoverColor: string = 'orange';
  // can use @HostBinding as opposed to Renderer - just another option to do the same thing
  // is a decorator on a class level property - in this case backgroundColor of type string
  // paramter to @HostBinding is the property of the host element we want to bind to
  @HostBinding('style.backgroundColor') backgroundColor: string;

  // Renderer is a better approach to access the DOM
  // you should use the Renderer for any DOM manipulations
  // why? 
  // adding private keyword will automatically create a class level property named _renderer and assign the passed in _renderer parameter
  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    //this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'blue');
    // this needs to be done here to ensure proper initialization
    this.backgroundColor = this.defaultColor;
  }

  // react to events on the element that this directive sits on - use the @HostListener decorator
  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'orange');
    this.backgroundColor = this.hoverColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
