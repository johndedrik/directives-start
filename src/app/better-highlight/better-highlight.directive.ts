import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Renderer is a better approach to access the DOM
  // you should use the Renderer for any DOM manipulations
  // why? 
  // adding private keyword will automatically create a class level property named _renderer and assign the passed in _renderer parameter
  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
    this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'blue');
  }

}
