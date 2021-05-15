import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[tcpMax][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TcpMaxValidatorDirective, multi: true }],
})
export class TcpMaxValidatorDirective implements Validator {
  @Input() tcpMax;

  validate(input) {
    return !this.tcpMax || input.value <= this.tcpMax ? null : { tcpMax: true };
  }
}
