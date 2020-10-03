import { Directive, ElementRef, OnInit } from "@angular/core";

// object passed in to configure directive
@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // get access to the element that this directive sits on - inject the element this directive sits on
    // adding private keyword will automatically create a class level property named _elRef and assign the passed in _elRef parameter
    constructor(private _elRef: ElementRef) { }

    ngOnInit() {
        this._elRef.nativeElement.style.backgroundColor = 'green';
    }
}