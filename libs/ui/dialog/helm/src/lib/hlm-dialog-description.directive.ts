import { Directive, Input } from '@angular/core';
import { hlm } from '@ng-spartan/ui/core/helm';
import { ClassValue } from 'clsx';

@Directive({
  selector: '[hlmDialogDescription],[brnDialogDescription][hlm]',
  standalone: true,
})
export class HlmDialogDescriptionDirective {
  _class = this.generateClasses();
  private _inputs: ClassValue = '';

  @Input()
  set class(inputs: ClassValue) {
    this._inputs = inputs;
    this._class = this.generateClasses();
  }

  private generateClasses() {
    return hlm('text-sm text-muted-foreground', this._inputs);
  }
}
