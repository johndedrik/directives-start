import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class UnlessDirective {
  // property with setter
  // property name has to be the same as the directive selector appUnless
  @Input()  set appMyIf(condition: boolean) {
    if (condition) {
      this._vcRef.createEmbeddedView(this._tmpRef);
    } else {
      this._vcRef.clear();
    }
  }

  // similar to ElementRef we can get TemplateRef via injection
  constructor(private _tmpRef: TemplateRef<any>, private _vcRef: ViewContainerRef) { }

}
