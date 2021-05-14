import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[tcpMin][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TcpMinValidatorDirective, multi: true }],
})
export class TcpMinValidatorDirective implements Validator {
  @Input() tcpMin: number;

  validate(input) {
    return input.value <= this.tcpMin ? { tcpMin: true } : null;
  }
}
